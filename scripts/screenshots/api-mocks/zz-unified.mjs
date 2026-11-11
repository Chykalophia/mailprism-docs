// Unified inbox mocks: Gmail categories, row context (states, new senders) and the Later list.
import { emails, tid } from "../scripts/inbox-data.mjs";
import { iso } from "../persona.mjs";
import base from "./inbox.mjs";
import tracking from "./tracking.mjs";

const CAT = { t05: "UPDATES", t07: "PROMOTIONS", t10: "UPDATES", t12: "UPDATES", t15: "PROMOTIONS", t08: "PROMOTIONS" };
const catFor = (threadId) => {
  const short = Object.keys(CAT).find((k) => tid(k) === threadId);
  return "CATEGORY_" + (short ? CAT[short] : "PERSONAL");
};
const withCats = (r) => ({ ...r, emails: (r.emails || []).map((e) => ({ ...e, labelIds: [...e.labelIds, catFor(e.threadId)] })) });

const hrs = (h) => new Date(Date.now() + h * 3600e3).toISOString();
const STATES = {
  "01": { state: "needs_response", reason: "Priya asked you a direct question" },
  "02": { state: "needs_action", reason: "Marcus asked for two fixes by Friday" },
  "03": { state: "needs_response", reason: "Elena is waiting on a kickoff time" },
  "06": { state: "awaiting_reply", expectReplyBy: hrs(20), reason: "You sent the NDA questions" },
  "13": { state: "awaiting_reply", expectReplyBy: hrs(-6), reason: "You asked for the icon set" },
  "16": { state: "resolved", reason: "Marked done" },
  "18": { state: "needs_action", reason: "Three contrast fixes to schedule" },
  "11": { state: "snoozed", snoozedUntil: hrs(40), reason: "After the Lumen launch" },
  "14": { state: "snoozed", snoozedUntil: hrs(64), reason: "Check capacity Monday" },
  "17": { state: "snoozed", snoozedUntil: hrs(16), reason: null },
};
const NEW = new Set(["ravi@tallgrasscap.com", "daniel@fernway.app"]);

function rowContext(u, request) {
  let body = {};
  try { body = JSON.parse(request.postData() || "{}"); } catch {}
  const threads = {};
  for (const id of body.threadIds || []) {
    const short = id.slice(5, 7);
    const s = STATES[short];
    if (s) threads[id] = { state: s.state, stateEnteredAt: iso(120), snoozedUntil: s.snoozedUntil || null, reason: s.reason, expectReplyBy: s.expectReplyBy || null, userMarkedResolved: s.state === "resolved" };
  }
  const senders = {};
  for (const raw of body.senders || []) {
    const a = String(raw).toLowerCase();
    const first = NEW.has(a);
    senders[a] = { contactId: "c-" + a, displayName: null, status: first ? "unknown" : "approved", relationship: first ? null : "client", category: null,
      emailsSent: first ? 0 : 6, emailsReceived: first ? 1 : 9, firstInteractionAt: iso(first ? 300 : 60 * 24 * 40), lastInteractionAt: iso(60), firstContact: first };
  }
  return { threads, senders };
}

const SNOOZED = [
  ["11", "Mei Lin <mei@orchardrobotics.com>", "Re: Intro — site rebuild ahead of our Series B", "After the Lumen launch", 40],
  ["14", "Tomás Rivera <tomas@quarrystudio.co>", "Freelance availability for November", "Check capacity Monday", 64],
  ["17", "Leah Morgan <leah@studiofinch.co>", "Coffee next week?", "", 16],
];
const laterRows = () => SNOOZED.map(([s, from, subj, reason, h]) => {
  const e = emails().find((x) => x.threadId === tid("t" + s));
  return { id: "rt-" + s, email_id: e.id, thread_id: e.threadId, email_subject: subj, email_from: from, email_to: e.to, email_date: e.date, created_at: e.date,
    email_snippet: e.snippet, email_is_unread: false, email_has_attachment: false, thread_message_count: 1, gmail_account_id: e.gmailAccountId,
    state: "snoozed", snoozed_until: hrs(h), snooze_reason: reason || null, reason: reason || null };
});

// inbox.mjs and tracking.mjs both answer the email-detail route and tracking
// sorts later; use the inbox body for inbox ids so the reader matches the row.
const inboxIds = new Set(emails().map((e) => e.id));
const emailDetail = (u, r) =>
  inboxIds.has(u.pathname.split("/").pop()) ? base["/api/gmail/email/*"](u, r) : tracking["/api/gmail/email/*"](u, r);

export default {
  "/api/gmail/email/*": emailDetail,
  "/api/emails/inbox-init": (u, r) => withCats(base["/api/emails/inbox-init"](u, r)),
  "/api/emails/unified": (u, r) => {
    const res = withCats(base["/api/emails/unified"](u, r));
    const q = [...u.searchParams.values()].join(" "); if (process.env.DBG) console.log("UNIFIED", u.search);
    const SPLIT = { people: ["CATEGORY_PERSONAL"], updates: ["CATEGORY_UPDATES", "CATEGORY_SOCIAL", "CATEGORY_FORUMS"], newsletters: ["CATEGORY_PROMOTIONS"] };
    const want = SPLIT[u.searchParams.get("split")] || q.match(/CATEGORY_[A-Z]+/g);
    if (u.searchParams.get("preset") === "replies") {
      const open = new Set(["needs_action", "needs_response", "awaiting_reply"]);
      return { ...res, emails: res.emails.filter((e) => open.has(STATES[e.threadId.slice(5, 7)]?.state)) };
    }
    if (!want) return res;
    return { ...res, emails: res.emails.filter((e) => e.labelIds.some((l) => want.includes(l))) };
  },
  "/api/emails/row-context": rowContext,
  "/api/response-tracking/list": (u, r) => {
    if (u.searchParams.get("state") === "snoozed") { const t = laterRows(); return { threads: t, totalPages: 1, total: t.length }; }
    return tracking["/api/response-tracking/list"](u, r);
  },
};
