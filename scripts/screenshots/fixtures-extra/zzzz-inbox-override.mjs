// "inbox" group: loaded last so per-thread tracking lookups for the inbox demo threads win,
// while every other email_response_tracking query is delegated to whichever earlier fixture defined it.
import fs from "node:fs";
import inbox from "./inbox.mjs";
import { userGmailAccounts } from "../scripts/inbox-data.mjs";
const dir = new URL("./", import.meta.url).pathname;
let prev = null;
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".mjs") && f < "zzzz-inbox-override.mjs").sort()) {
  try { const m = (await import(dir + f + "?t=" + fs.statSync(dir + f).mtimeMs)).default; if (m?.tables?.email_response_tracking) prev = m.tables.email_response_tracking; } catch {}
}
const mine = inbox.tables.email_response_tracking;
export default {
  tables: {
    user_gmail_accounts: userGmailAccounts,
    email_response_tracking: (sp) => {
      if (sp.get("thread_id")) { const r = mine(sp); if (r.length) return r; }
      return typeof prev === "function" ? prev(sp) : prev || [];
    },
  },
};
