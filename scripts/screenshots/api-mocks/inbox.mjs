import { emails, GMAIL_LABELS, PRIYA_HTML, BODIES, HISTORY_PRIYA, AI_REPLY, eid } from "../scripts/inbox-data.mjs";
const byId = () => Object.fromEntries(emails().map((e) => [e.id, e]));
const bodyFor = (e) => {
  const short = Object.keys(BODIES).find((k) => eid(k) === e.id);
  const html = e.id === eid("m01") ? PRIYA_HTML : short ? BODIES[short] : `<p>${e.snippet}</p><p>Thanks,<br/>${e.from.split(" <")[0].split(" ")[0]}</p>`;
  return { id: e.id, threadId: e.threadId, subject: e.subject, from: e.from, to: e.to, date: e.date, snippet: e.snippet, body: html, isHtml: true, labelIds: e.labelIds, hasAttachments: e.hasAttachment, attachmentCount: e.hasAttachment ? (e.id === eid("m01") ? 1 : 2) : 0,
    payload: { mimeType: "multipart/mixed", parts: e.hasAttachment ? [{ mimeType: "text/html", filename: "" }, { mimeType: "application/pdf", filename: e.id === eid("m01") ? "IT-sync-notes-EHR-integration.pdf" : "attachment.pdf" }] : [{ mimeType: "text/html", filename: "" }] } };
};
const list = (filter) => {
  const all = emails().filter(filter);
  return { emails: all, dataSource: "db", syncInProgress: false, pagination: { totalCount: 1284, hasNextPage: true, nextPageToken: "p2", currentPage: 1 }, totalCounts: { all: 1284, unread: 5, starred: 4, unprocessed: 0, processed: 1284 } };
};
export default {
  "/api/emails/inbox-init": () => { const r = list(() => true); return { ...r, firstEmailBody: bodyFor(emails()[0]), labels: GMAIL_LABELS.map((l) => ({ id: l.id, name: l.name, type: l.type, color: { backgroundColor: l.color, textColor: l.textColor } })) }; },
  "/api/emails/unified": (u) => {
    if (u.searchParams.get("readStatus") === "unread") return list((e) => e.isUnread);
    if (u.searchParams.get("isStarred") === "true") return list((e) => e.isStarred);
    return list(() => true);
  },
  "/api/gmail/labels": { success: true, labels: GMAIL_LABELS },
  "/api/gmail/email/*": (u) => { const id = u.pathname.split("/").pop(); const e = byId()[id] || emails()[0]; return bodyFor(e); },
  "/api/history/email/*": (u) => { const id = decodeURIComponent(u.pathname.split("/").pop()); return id === eid("m01") ? HISTORY_PRIYA : { history: [], summary: { totalExecutions: 0, rulesMatched: 0, totalActions: 0 } }; },
  "/api/user/settings": { quick_actions_enabled: true },
  "/api/nudge/status": { activeNudge: null },
  "/api/gmail/thread/*": (u) => {
    const tid = u.pathname.split("/").pop();
    const ms = emails().filter((e) => e.threadId === tid).map((e) => ({ ...bodyFor(e), isUnread: e.isUnread, hasAttachment: e.hasAttachment }));
    return { threadId: tid, messageCount: ms.length, messages: ms, isUnread: ms.some((m) => m.isUnread), isStarred: false, isImportant: true, hasAttachment: true };
  },
  "/api/gmail/compose/generate-reply": { success: true, body: AI_REPLY.split("\n\n").map((p) => `<p>${p.replace(/\n/g, "<br/>")}</p>`).join("") },
  "/api/ai-templates": { templates: [
    { id: "at1", name: "Reply in my voice", description: "Draft a reply using your learned writing style", promptTemplate: "Reply in my voice", category: "reply" },
    { id: "at2", name: "Polite decline", description: "Say no without burning the bridge", promptTemplate: "Politely decline", category: "reply" },
    { id: "at3", name: "Propose times", description: "Suggest 2–3 meeting slots", promptTemplate: "Propose meeting times", category: "reply" },
  ] },
  "/api/gmail-accounts/*": { aliases: [] },
};
