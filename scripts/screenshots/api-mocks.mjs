import fs from "node:fs";
const dir = new URL("./api-mocks/", import.meta.url).pathname;
const merged = {};
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".mjs")).sort()) {
  try { Object.assign(merged, (await import(dir + f + "?t=" + Date.now())).default); } catch (e) { console.log("mock load fail", f, e.message); }
}
export default merged;
