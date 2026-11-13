// Screenshots each rendered email inside a neutral mail-reader frame.
// node shoot-emails.mjs <inDir> <outDir>
import path from "node:path";
const MAILPRISM_DIR = process.env.MAILPRISM_DIR || path.resolve(import.meta.dirname, "../../../MailPrism");
const { chromium } = await import(path.join(MAILPRISM_DIR, "node_modules/playwright/index.mjs"));
import fs from "node:fs";

const [, , inDir = "out", outDir = "png"] = process.argv;
fs.mkdirSync(outDir, { recursive: true });
const index = JSON.parse(fs.readFileSync(path.join(inDir, "index.json"), "utf8"));
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const frame = (meta, body) => `<!doctype html><html><head><meta charset="utf-8"><style>
  body{margin:0;background:#eef0f4;font-family:Inter,system-ui,-apple-system,Segoe UI,sans-serif;padding:24px}
  .win{max-width:720px;margin:0 auto;background:#fff;border-radius:14px;box-shadow:0 10px 30px rgba(15,23,42,.12);overflow:hidden;border:1px solid #e2e5ec}
  .hdr{padding:18px 24px;border-bottom:1px solid #e8eaf0}
  .subj{font-size:19px;font-weight:600;color:#111827;margin:0 0 10px}
  .row{font-size:13px;color:#4b5563;line-height:1.6}.row b{color:#111827;font-weight:600}
  .body{padding:8px 0}
  iframe{border:0;width:100%;display:block}
</style></head><body><div class="win"><div class="hdr"><p class="subj">${esc(meta.subject)}</p>
<div class="row"><b>From</b> ${esc(meta.from)}</div><div class="row"><b>To</b> ${esc(meta.to)}</div></div>
<div class="body"><iframe id="f" sandbox="allow-same-origin" srcdoc="${body.replace(/&/g, "&amp;").replace(/"/g, "&quot;")}"></iframe></div></div></body></html>`;

const browser = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
const page = await browser.newPage({ viewport: { width: 800, height: 900 }, deviceScaleFactor: 2 });
for (const [id, meta] of Object.entries(index)) {
  const html = fs.readFileSync(path.join(inDir, `${id}.html`), "utf8");
  await page.setContent(frame(meta, html), { waitUntil: "load" });
  await page.waitForTimeout(300);
  await page.evaluate(() => {
    const f = document.getElementById("f");
    f.style.height = f.contentDocument.documentElement.scrollHeight + "px";
  });
  await page.waitForTimeout(200);
  await page.locator(".win").screenshot({ path: path.join(outDir, `${id}.png`) });
  console.log("shot", id);
}
await browser.close();
