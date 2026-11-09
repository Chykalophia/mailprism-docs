// Minimal fake Supabase (GoTrue + PostgREST) for rendering the app UI with demo data.
import http from "node:http";
import fs from "node:fs";
import { URL } from "node:url";
const PORT = 54321;
const FIX = new URL("./fixtures.mjs", import.meta.url).pathname;
const seen = new Map();
async function loadFixtures() {
  const mod = await import(FIX + "?t=" + fs.statSync(FIX).mtimeMs);
  const F = { ...mod.default, tables: { ...mod.default.tables }, rpc: { ...mod.default.rpc }, counts: { ...mod.default.counts } };
  const dir = new URL("./fixtures-extra/", import.meta.url).pathname;
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".mjs")).sort()) {
    try {
      const x = (await import(dir + f + "?t=" + fs.statSync(dir + f).mtimeMs)).default;
      Object.assign(F.tables, x.tables || {}); Object.assign(F.rpc, x.rpc || {}); Object.assign(F.counts, x.counts || {});
    } catch (e) { console.log("extra fixture fail", f, e.message); }
  }
  return F;
}
function applyFilters(rows, sp) {
  let out = rows;
  for (const [k, v] of sp.entries()) {
    if (["select", "order", "limit", "offset", "or", "and", "on_conflict", "columns"].includes(k)) continue;
    const m = /^(eq|neq|is|in|gte|lte|gt|lt)\.(.*)$/.exec(v);
    if (!m) continue;
    const [, op, val] = m;
    out = out.filter((r) => {
      if (!(k in r)) return true;
      const x = r[k];
      if (op === "eq") return String(x) === val;
      if (op === "neq") return String(x) !== val;
      if (op === "is") return val === "null" ? x == null : String(x) === val;
      if (op === "in") return val.replace(/[()]/g, "").split(",").map(s=>s.replace(/"/g,"")).includes(String(x));
      return true;
    });
  }
  const lim = sp.get("limit");
  if (lim) out = out.slice(Number(sp.get("offset") || 0), Number(sp.get("offset") || 0) + Number(lim));
  return out;
}
http.createServer(async (req, res) => {
  const u = new URL(req.url, "http://x");
  let body = "";
  req.on("data", (c) => (body += c));
  await new Promise((r) => req.on("end", r));
  const F = await loadFixtures();
  const send = (code, obj, headers = {}) => {
    res.writeHead(code, { "content-type": "application/json", "access-control-allow-origin": req.headers.origin || "*", "access-control-allow-credentials": "true", "access-control-allow-headers": "*", "access-control-allow-methods": "*", "access-control-expose-headers": "content-range", ...headers });
    res.end(obj === undefined ? "" : JSON.stringify(obj));
  };
  if (req.method === "OPTIONS") return send(204);
  const p = u.pathname;
  const key = req.method + " " + p;
  seen.set(key, (seen.get(key) || 0) + 1);
  if (process.env.LOG) console.log(req.method, p + u.search.slice(0, 160));
  if (p.startsWith("/auth/v1/")) {
    if (p === "/auth/v1/user") return send(200, F.user);
    if (p === "/auth/v1/token") return send(200, F.session());
    if (p.startsWith("/auth/v1/factors")) return send(200, []);
    return send(200, {});
  }
  if (p === "/__seen") return send(200, Object.fromEntries([...seen.entries()].sort()));
  if (p.startsWith("/rest/v1/rpc/")) {
    const fn = p.slice("/rest/v1/rpc/".length);
    let args = {}; try { args = JSON.parse(body || "{}"); } catch {}
    const v = F.rpc[fn];
    const out = typeof v === "function" ? v(args) : v === undefined ? null : v;
    return send(200, out);
  }
  if (p.startsWith("/rest/v1/")) {
    const table = p.slice("/rest/v1/".length);
    const single = (req.headers.accept || "").includes("vnd.pgrst.object");
    if (["POST", "PATCH", "DELETE"].includes(req.method)) {
      let parsed = {}; try { parsed = JSON.parse(body || "{}"); } catch {}
      const row = Array.isArray(parsed) ? parsed : [parsed];
      return send(single ? 200 : 201, single ? row[0] : row);
    }
    let rows = F.tables[table];
    if (typeof rows === "function") rows = rows(u.searchParams);
    if (rows === undefined) rows = [];
    if (!Array.isArray(rows)) rows = [rows];
    const filtered = applyFilters(rows, u.searchParams);
    const cr = { "content-range": `0-${Math.max(filtered.length - 1, 0)}/${(F.counts && F.counts[table] ? (typeof F.counts[table]==='function'? F.counts[table](u.searchParams) : F.counts[table]) : filtered.length)}` };
    if (req.method === "HEAD") return send(200, undefined, cr);
    if (single) {
      const r = filtered[0] ?? rows[0] ?? (F.singleDefaults[table] ?? null);
      if (!r) return send(406, { code: "PGRST116", message: "no rows" });
      return send(200, r, cr);
    }
    return send(200, filtered, cr);
  }
  send(404, { error: "not found " + p });
}).listen(PORT, () => console.log("fake supabase on", PORT));
