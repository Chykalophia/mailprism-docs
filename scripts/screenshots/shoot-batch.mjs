// Batch shooter for docs screenshots.
// node shoot-batch.mjs jobs.json [onlyName...]
// Job: { name, route, w=1440, h=900, theme="light", wait=6000, full=false,
//        clip?: selector, steps?: [{click|hover|fill|press|wait|eval|scroll, ...}],
//        hide?: [selectors] }
import path from "node:path";
const MAILPRISM_DIR = process.env.MAILPRISM_DIR || path.resolve(import.meta.dirname, "../../../MailPrism");
const { chromium } = await import(path.join(MAILPRISM_DIR, "node_modules/playwright/index.mjs"));
import fixtures from "./fixtures.mjs";
import fs from "node:fs";

const [, , jobsFile, ...only] = process.argv;
const OUT = process.env.OUT || "shots-png";
const jobs = JSON.parse(fs.readFileSync(jobsFile, "utf8")).filter((j) => !only.length || only.includes(j.name));
const session = fixtures.session();
const val = "base64-" + Buffer.from(JSON.stringify(session)).toString("base64url");
const chunks = [];
for (let i = 0; i < val.length; i += 3180) chunks.push(val.slice(i, i + 3180));
const browser = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
const apiMocks = (await import("./api-mocks.mjs?t=" + Date.now())).default;

async function run(job) {
  const theme = job.theme || "light";
  const ctx = await browser.newContext({
    viewport: { width: job.w || 1440, height: job.h || 900 },
    deviceScaleFactor: 2,
    colorScheme: theme,
    bypassCSP: true,
    timezoneId: "America/Los_Angeles",
  });
  if (!job.anon) {
    await ctx.addCookies(chunks.map((c, i) => ({ name: chunks.length === 1 ? "sb-127-auth-token" : `sb-127-auth-token.${i}`, value: c, domain: "localhost", path: "/" })));
  }
  await ctx.addInitScript(({ theme }) => {
    try {
      localStorage.setItem("currentWorkspaceId", "3a7e9c21-4b8d-4f6a-9e2c-7d1b5a3c9e40");
      localStorage.setItem("theme", theme);
    } catch {}
    const st = document.createElement("style");
    st.textContent = "nextjs-portal,.tsqd-parent-container,.tsqd-open-btn-container{display:none!important} [data-nextjs-toast]{display:none!important}";
    document.addEventListener("DOMContentLoaded", () => document.head.appendChild(st));
  }, { theme });
  const page = await ctx.newPage();
  const extra = job.mocks || {};
  await page.route("**/api/**", async (route) => {
    const u = new URL(route.request().url());
    const all = { ...apiMocks, ...extra };
    const hit = Object.entries(all).find(([k]) => u.pathname === k || (k.endsWith("*") && u.pathname.startsWith(k.slice(0, -1))));
    if (hit) {
      const v = typeof hit[1] === "function" ? hit[1](u, route.request()) : hit[1];
      return route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify(v) });
    }
    let resp;
    try { resp = await route.fetch(); } catch { return; }
    if (process.env.LOGAPI && (resp.status() >= 400 || process.env.LOGAPI === "all")) console.log("  API", resp.status(), route.request().method(), u.pathname + u.search);
    return route.fulfill({ response: resp }).catch(() => {});
  });
  if (process.env.LOGC) page.on("console", (m) => { if (process.env.LOGC==="all" || m.type() === "error") console.log("  CONSOLE", m.text().slice(0, 160)); });
  await page.goto("http://localhost:3000" + job.route, { waitUntil: "domcontentloaded", timeout: 180000 });
  await page.waitForTimeout(job.wait ?? 6000);
  for (const s of job.steps || []) {
    try {
      if (s.click) await page.locator(s.click).first().click({ timeout: 8000, force: !!s.force });
      if (s.hover) await page.locator(s.hover).first().hover({ timeout: 8000 });
      if (s.fill) await page.locator(s.fill).first().fill(s.value ?? "", { timeout: 8000 });
      if (s.press) await page.keyboard.press(s.press);
      if (s.eval) await page.evaluate(s.eval);
      if (s.scroll) await page.locator(s.scroll).first().scrollIntoViewIfNeeded({ timeout: 8000 });
      await page.waitForTimeout(s.wait ?? 800);
    } catch (e) {
      console.log("  STEP FAIL", job.name, JSON.stringify(s), e.message.split("\n")[0]);
    }
  }
  if (job.hide) await page.addStyleTag({ content: job.hide.join(",") + "{visibility:hidden!important}" });
  const file = path.join(OUT, `${job.name}${theme === "dark" ? "-dark" : ""}.png`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  if (job.clip) {
    await page.locator(job.clip).first().screenshot({ path: file, timeout: 15000 });
  } else {
    await page.screenshot({ path: file, fullPage: !!job.full });
  }
  console.log("shot", job.name, page.url().replace("http://localhost:3000", ""));
  await ctx.close();
}

for (const job of jobs) {
  try { await run(job); } catch (e) { console.log("FAIL", job.name, e.message.split("\n")[0]); }
}
await browser.close();
