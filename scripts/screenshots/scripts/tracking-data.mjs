// Shared demo data for the "tracking" screenshot group (dashboard, replies, notifications, rule logs).
// All people/companies are fictional.
import { USER_ID, GMAIL_ACCOUNT_ID, LABEL_IDS, iso } from "../persona.mjs";

const uuid = (prefix, n) => `${prefix}-0000-4000-8000-${String(n).padStart(12, "0")}`;
const gid = (n) => (0x18f3a2b4c5d00000n + BigInt(n) * 7919n).toString(16);

// ─── Tracked threads ────────────────────────────────────────────────
// [state, mins ago, from, subject, snippet, msgs, unread, attach, reason]
const T = [
  ["needs_action", 22, "Priya Raman <priya@lumenhealth.io>", "Re: Q4 patient portal redesign — revised scope", "Thanks Jordan — the board signed off on the revised scope. Could you send the updated timeline and confirm we can still hit the Dec 12 launch?", 4, true, true,
    "AI Thread Analysis: Priya is a client asking two direct questions (updated timeline, Dec 12 launch date). The last message is from her and nobody on your side has replied yet."],
  ["needs_action", 64, "Marcus Bell <marcus.bell@halcyonfreight.com>", "Contract renewal: can we lock pricing before Friday?", "Hi Jordan, procurement wants to finalize the 2027 retainer this week. Are you able to hold current rates if we sign by Friday?", 2, true, false,
    "AI Thread Analysis: Renewal decision with a Friday deadline. Marcus explicitly asks whether you can hold current pricing."],
  ["needs_action", 128, "Elena Sokolova <elena@brightline-analytics.com>", "Dashboard handoff — two quick questions", "Before we hand this to the data team: 1) should the export include archived accounts? 2) who owns the staging credentials going forward?", 3, true, false,
    "AI Thread Analysis: Two numbered questions addressed to you. Handoff is blocked until they are answered."],
  ["needs_action", 236, "Dev Okafor <dev@cobaltandpine.co>", "Invoice #NW-2291 approved — need your W-9", "Good news, finance approved the invoice. They just need an updated W-9 on file before they can release payment.", 2, false, false,
    "AI Thread Analysis: Payment is waiting on a document only you can send (updated W-9)."],
  ["needs_action", 302, "Hannah Lindqvist <hannah@fernwoodcoffee.com>", "Rebrand kickoff — are you free Thursday?", "We'd love to get the whole team together for the kickoff. Does Thursday at 10am or 2pm work for you?", 1, true, false,
    "AI Thread Analysis: New client asking you to pick a meeting time (Thursday 10am or 2pm)."],
  ["needs_action", 418, "Tomás Herrera <tomas@meridianlabs.dev>", "Staging build failing on checkout step", "Seeing a 500 on /checkout after the last deploy. Logs attached — can someone on your side take a look today?", 5, false, true,
    "AI Thread Analysis: Urgent technical issue on a client project. Tomás asks for someone to investigate today."],
  ["needs_action", 1310, "Grace Whitfield <grace@ashgrovelegal.com>", "NDA redlines attached", "Attached are our redlines on sections 4 and 7. Let me know if these work and we'll countersign.", 2, false, true,
    "AI Thread Analysis: Legal counterparty is waiting on your approval of NDA redlines before countersigning."],
  ["needs_action", 1690, "Aiko Tanaka <aiko@tidewaterarch.com>", "Intro: Jordan ↔ Felix (CTO, Tidewater)", "Jordan, meet Felix — he's leading our new client portal project and I think you two should talk. Felix, Jordan runs Northwind Studio.", 1, false, false,
    "AI Thread Analysis: Warm introduction from a past client. Etiquette expects you to reply and move Aiko to BCC."],
  ["needs_action", 2900, "Jonah Reyes <jonah@quarrypress.com>", "Feedback on homepage mockups v3", "Overall we love the direction. Two notes on the hero and a question about the pricing table — details below.", 3, false, false,
    "AI Thread Analysis: Client feedback ending in a direct question about the pricing table layout."],

  ["awaiting_reply", 95, "Olivia Chen <olivia@sparrowandfinch.com>", "Proposal: Sparrow & Finch storefront rebuild", "You: Hi Olivia, attached is the proposal we discussed — three phases, fixed fee. Happy to walk through it on a call this week.", 2, false, true,
    "AI Thread Analysis: Your last message sent a proposal and asked for a call. Waiting on Olivia's response."],
  ["awaiting_reply", 1440 + 200, "Rafael Duarte <rafael@keystonerealty.com>", "Following up on our discovery call", "You: Great speaking yesterday, Rafael. Could you share the current site analytics so we can size the project?", 2, false, false,
    "AI Thread Analysis: You asked Rafael for analytics access. No reply yet."],
  ["awaiting_reply", 2880 + 90, "Nadia Haddad <nadia@orchardhealth.org>", "Final assets + launch checklist", "You: All final assets are in the shared folder. Could you confirm the launch checklist by Wednesday?", 3, false, true,
    "AI Thread Analysis: Waiting on Nadia to confirm the launch checklist (requested by Wednesday)."],
  ["awaiting_reply", 4320 + 30, "Ben Carter <ben@ridgelineoutdoors.com>", "Quote for Phase 2 (mobile app)", "You: Here's the Phase 2 quote. Let me know if you'd like us to hold the January start slot.", 2, false, true,
    "AI Thread Analysis: Quote sent with a question about holding a start date. Awaiting Ben."],
  ["awaiting_reply", 5760 + 400, "Mei Lin <mei@paperplanetravel.com>", "Can you confirm the go-live date?", "You: We're on track for the 28th — can you confirm your team is ready for the DNS switch?", 4, false, false,
    "AI Thread Analysis: You asked Mei to confirm DNS readiness. Thread has been quiet for 4 days."],
  ["awaiting_reply", 7200 + 100, "Leo Martins <leo@atlasrobotics.io>", "Retainer agreement for 2027", "You: Sending over the retainer agreement for next year. Any questions, just shout.", 1, false, true,
    "AI Thread Analysis: Agreement sent, waiting on signature or questions from Leo."],

  ["pending", 3100, "Chloe Bennett <chloe@lanternstudio.co>", "Photo shoot reschedule", "We'll confirm the new date once the photographer gets back to us next week.", 3, false, false, null],
  ["pending", 6100, "Isaac Moreau <isaac@verdantgrocers.com>", "Budget approval for Q1 campaign", "Finance is reviewing — I'll circle back after their meeting on the 20th.", 2, false, false, null],

  ["resolved", 180, "Ruth Adeyemi <ruth@harborlinehotels.com>", "Re: Booking widget copy", "Perfect, that's exactly what we needed. Thank you!", 4, false, false, "Resolved: you replied in Gmail."],
  ["resolved", 900, "Kenji Watanabe <kenji@summitbikes.co>", "Logo files received", "Got them, thanks — all good on our side.", 3, false, false, "Resolved: they replied."],
];

export const threads = T.map(([state, mins, from, subject, snippet, msgs, unread, attach, reason], i) => ({
  id: uuid("7a1b2c3d", i + 1),
  user_id: USER_ID,
  gmail_account_id: GMAIL_ACCOUNT_ID,
  email_id: gid(i + 1),
  thread_id: gid(i + 1),
  profile_id: null,
  current_state: state,
  state_entered_at: iso(mins),
  state_reason: reason,
  state_metadata: state === "resolved" ? { resolved_by: "user_replied" } : null,
  ai_requires_response: state === "needs_action",
  ai_confidence: 0.93,
  tracking_source: i % 3 === 0 ? "ai" : "basic_mode",
  import_label_name: null,
  tracking_label_name: state === "needs_action" ? "Needs Response" : state === "awaiting_reply" ? "Awaiting Reply" : null,
  tracking_label_config_id: state === "needs_action" ? LABEL_IDS.needs_response : state === "awaiting_reply" ? LABEL_IDS.awaiting_reply : null,
  email_subject: subject,
  // Awaiting-reply rows are Jordan's own sent message: list shows the counterparty's
  // name, detail pane shows "Jordan Avery → counterparty".
  email_from: state === "awaiting_reply" ? from.replace(/<.*>/, "<jordan@northwind.studio>") : from,
  email_to: state === "awaiting_reply" ? from : "Jordan Avery <jordan@northwind.studio>",
  email_snippet: snippet,
  email_date: iso(mins),
  email_is_unread: unread,
  email_has_attachment: attach,
  thread_message_count: msgs,
  created_at: iso(mins + 30),
  updated_at: iso(mins),
}));

export const replyCounts = { needs_action: 9, awaiting_reply: 6, pending: 2, resolved: 47, all: 64 };

export function threadsFor(state) {
  if (!state || state === "all") return threads;
  return threads.filter((t) => t.current_state === state);
}

// ─── Email bodies for the detail panel ──────────────────────────────
const bodies = {
  0: `<p>Hi Jordan,</p><br/>
<p>Thanks for turning the revised scope around so quickly. I walked the board through it on Tuesday and they've signed off on everything — including moving appointment reminders into phase one.</p><br/>
<p>Two things before we lock it in:</p>
<ol style="list-style:decimal;padding-left:1.5em"><li>Could you send over the updated timeline with the new phase-one items?</li><li>Can we still realistically hit the <strong>December 12</strong> launch, or should I start managing expectations internally?</li></ol><br/>
<p>I've attached the board's notes in case they're useful for the design team.</p><br/>
<p>Thanks so much,<br/>Priya</p><br/>
<p style="color:#6b7280">Priya Raman<br/>Director of Digital Experience · Lumen Health</p>`,
};
export function emailDetail(emailId) {
  const i = threads.findIndex((t) => t.email_id === emailId);
  const t = threads[i] || threads[0];
  const mine = t.current_state === "awaiting_reply";
  const other = (mine ? t.email_to : t.email_from).split(" <")[0];
  const html = bodies[i] || (mine
    ? `<p>Hi ${other.split(" ")[0]},</p><br/><p>${((x) => x[0].toUpperCase() + x.slice(1))(t.email_snippet.replace(/^You: (Hi \w+, )?/, ""))}</p><br/><p>Best,<br/>Jordan</p><br/><p style="color:#6b7280">Jordan Avery<br/>Founder · Northwind Studio</p>`
    : `<p>Hi Jordan,</p><br/><p>${t.email_snippet}</p><br/><p>Best,<br/>${other}</p>`);
  return {
    id: t.email_id, threadId: t.thread_id, subject: t.email_subject, from: mine ? "Jordan Avery <jordan@northwind.studio>" : t.email_from,
    to: mine ? t.email_to : "Jordan Avery <jordan@northwind.studio>", date: t.email_date, snippet: t.email_snippet,
    body: html, isHtml: true, labelIds: mine ? ["SENT"] : ["INBOX", "IMPORTANT"],
    payload: { parts: t.email_has_attachment ? [{ filename: "" }, { filename: i === 0 ? "Board-notes-Q4.pdf" : "attachment.pdf" }] : [] },
  };
}
export function emailHistory(emailId) {
  const t = threads.find((x) => x.email_id === emailId) || threads[0];
  return {
    history: [{
      id: uuid("9c8d7e6f", 1), rule_id: RULES[0].id, rule_name: RULES[0].name, matched: true, created_at: t.email_date,
      actions_executed: [{ type: "assign_tracking_label", value: "Needs Response", success: true }, { type: "star", success: true }],
      matched_conditions: ["AI: requires response", "Sender is a client contact"], failed_conditions: [],
      ai_reasoning: `Rule "${RULES[0].name}" matched this email. ` + "Client is asking for an updated timeline and confirmation of the Dec 12 launch date. Direct questions from a known contact — needs a reply from Jordan.",
      ai_analysis: { category: "Client", urgency: "high", sentiment: "positive", confidence: 0.94, requiresResponse: true, servedBy: "ai" },
      email_rules: { id: RULES[0].id, name: RULES[0].name, description: RULES[0].description },
    }],
    summary: { totalExecutions: 1, rulesMatched: 1, totalActions: 2 },
  };
}

// ─── Rules ──────────────────────────────────────────────────────────
export const RULES = [
  { name: "Client emails → Needs Response", description: "AI flags client emails that ask a question", enabled: true },
  { name: "Block cold outreach", description: "Archive unsolicited sales pitches and label them", enabled: true },
  { name: "Newsletters → Read Later", description: "Skip the inbox for newsletters and digests", enabled: true },
  { name: "Invoices & receipts → Finance", description: "Label and forward billing mail to finance@", enabled: true },
  { name: "Follow-up nudge after 3 days", description: "Draft a follow-up in your voice when nobody replies", enabled: true },
  { name: "Urgent from VIP clients", description: "Star and mark important", enabled: true },
  { name: "Calendar invites → Meetings", description: "Label meeting requests", enabled: true },
  { name: "Recruiter spam", description: "Trash recruiter cold emails", enabled: false },
].map((r, i) => ({ id: uuid("5e6f7a8b", i + 1), user_id: USER_ID, created_at: iso(60 * 24 * (90 - i * 7)), ...r }));

// ─── Rule executions (rule logs + dashboard recent activity) ────────
// [mins, ruleIdx, subject, from, actions[], category, reasoning, matched]
const E = [
  [3, 1, "Quick question about your agency's growth plans", "Tyler Brooks <tyler@leadsurge-growth.com>", ["archive", "apply_label:Cold Outreach"], "Cold Outreach", "Unsolicited sales pitch from a sender with no prior history. Mass-send markers detected.", true],
  [11, 0, "Re: Q4 patient portal redesign — revised scope", "Priya Raman <priya@lumenhealth.io>", ["assign_tracking_label:Needs Response", "star"], "Client", "Client asks for an updated timeline and confirmation of the Dec 12 launch. Needs a reply.", true],
  [26, 2, "The Weekly Pixel — Issue #214", "The Weekly Pixel <hello@weeklypixel.news>", ["apply_label:Read Later", "archive", "mark_read"], "Newsletter", "Recurring design newsletter. No action required.", true],
  [41, 3, "Receipt for your payment to Cloudnest Hosting", "Cloudnest Billing <billing@cloudnest.host>", ["apply_label:Finance", "forward:finance@northwind.studio"], "Receipt", "Payment receipt — routed to finance.", true],
  [58, 0, "Contract renewal: can we lock pricing before Friday?", "Marcus Bell <marcus.bell@halcyonfreight.com>", ["assign_tracking_label:Needs Response"], "Client", "Renewal decision with a Friday deadline; direct pricing question.", true],
  [77, 4, "Proposal: Sparrow & Finch storefront rebuild", "Olivia Chen <olivia@sparrowandfinch.com>", ["draft_reply"], "Follow-up", "No reply in 3 days. Drafted a friendly follow-up in your writing style.", true],
  [96, 5, "Staging build failing on checkout step", "Tomás Herrera <tomas@meridianlabs.dev>", ["star", "mark_important"], "Urgent", "Production-impacting issue reported by a VIP client.", true],
  [130, 1, "Partnership opportunity — 10x your leads", "Ava Sinclair <ava@growthpilot.agency>", ["archive", "apply_label:Cold Outreach"], "Cold Outreach", "Generic outreach template with tracking pixels; no relationship.", true],
  [171, 6, "Invitation: Fernwood rebrand kickoff", "Hannah Lindqvist <hannah@fernwoodcoffee.com>", ["apply_label:Meetings"], "Meeting", "Calendar invitation for a project kickoff.", true],
  [220, 2, "Design Systems Digest: October roundup", "Design Systems Digest <digest@dsdigest.io>", ["apply_label:Read Later", "archive"], "Newsletter", "Monthly digest newsletter.", true],
  [265, 3, "Invoice #NW-2291 approved — need your W-9", "Dev Okafor <dev@cobaltandpine.co>", ["apply_label:Finance"], "Billing", "Invoice approval thread — finance related.", true],
  [340, 0, "Dashboard handoff — two quick questions", "Elena Sokolova <elena@brightline-analytics.com>", ["assign_tracking_label:Needs Response"], "Client", "Two numbered questions addressed to Jordan.", true],
  [410, 1, "Hiring? We place senior React devs in 48h", "Noah Price <noah@talentbridge-recruit.com>", ["archive", "apply_label:Cold Outreach"], "Cold Outreach", "Recruiting agency cold pitch.", true],
  [530, 4, "Following up on our discovery call", "Rafael Duarte <rafael@keystonerealty.com>", ["draft_reply"], "Follow-up", "Drafted a follow-up nudge — awaiting your approval.", true],
  [700, 2, "Your weekly analytics report", "Brightline Reports <reports@brightline-analytics.com>", ["mark_read", "archive"], "Notification", "Automated weekly report.", true],
  [890, 5, "NDA redlines attached", "Grace Whitfield <grace@ashgrovelegal.com>", ["star"], "Legal", "Legal document awaiting review.", true],
];
export const executions = E.map(([mins, ri, subject, from, actions, category, reasoning, matched], i) => ({
  id: uuid("3c4d5e6f", i + 1),
  user_id: USER_ID,
  rule_id: RULES[ri].id,
  email_id: gid(100 + i),
  email_subject: subject,
  email_from: from,
  matched,
  actions_executed: actions.map((a) => ({ type: a.split(":")[0].replace("apply_label", "label"), value: a.split(":")[1], success: true })),
  action_strings: actions,
  category, reasoning,
  created_at: iso(mins),
  email_rules: { name: RULES[ri].name },
}));

export const ruleLogs = executions.map((e) => {
  const ri = RULES.findIndex((r) => r.id === e.rule_id);
  const other = RULES[(ri + 2) % RULES.length];
  return {
    id: e.id, email_id: e.email_id, email_subject: e.email_subject, email_from: e.email_from,
    email_to: "jordan@northwind.studio", email_date: e.created_at, matched: true,
    actions_executed: e.action_strings,
    rule_executions: [
      { id: e.id + "-a", rule_id: e.rule_id, rule_name: RULES[ri].name, rule_description: RULES[ri].description, matched: true,
        matched_conditions: ["AI category is " + e.category], failed_conditions: [], actions_executed: e.action_strings,
        ai_reasoning: `Rule "${RULES[ri].name}" matched this email. ${e.reasoning}`, ai_analysis: { category: e.category, confidence: 0.91, servedBy: "ai" }, can_undo: true },
      { id: e.id + "-b", rule_id: other.id, rule_name: other.name, rule_description: other.description, matched: false,
        matched_conditions: [], failed_conditions: ["Sender not in list"], actions_executed: [], can_undo: false },
    ],
    rule_summary: { total: 2, matched: 1, failed: 1 },
    created_at: e.created_at, can_undo: true, trigger_source: "realtime",
  };
});

// ─── Dashboard snapshots (sparklines) ───────────────────────────────
const na = [14, 13, 15, 12, 13, 11, 12, 10, 11, 9, 10, 9];
const ar = [3, 4, 4, 5, 4, 6, 5, 5, 7, 6, 6, 6];
export const snapshots = na.map((n, i) => ({
  user_id: USER_ID, recorded_at: iso((na.length - i) * 60 * 13 - 20), needs_action_count: n, awaiting_reply_count: ar[i],
}));

// ─── Notifications ──────────────────────────────────────────────────
const N = (i, o) => ({ id: uuid("2b3c4d5e", i), priority: "normal", actionUrl: null, actionLabel: null, metadata: {}, isRead: false, readAt: null, groupKey: null, groupCount: null, ...o });
export const aiInsights = [
  N(1, { category: "ai_insight", title: "Response Needed", message: "Priya is asking for an updated timeline and whether the Dec 12 launch still holds. Labeled Needs Response.", createdAt: iso(11), actionUrl: "/mail/replies", actionLabel: "Reply now",
    metadata: { aiCardType: "response_needed", emailSubject: "Re: Q4 patient portal redesign — revised scope", emailFrom: "Priya Raman", confidence: 0.94, ruleName: "Client emails → Needs Response" } }),
  N(2, { category: "ai_insight", title: "High Priority", message: "Client reports a 500 error on checkout after the last deploy. Starred and marked important.", createdAt: iso(96), actionUrl: "/mail/replies", actionLabel: "View Email",
    metadata: { aiCardType: "urgent", emailSubject: "Staging build failing on checkout step", emailFrom: "Tomás Herrera", confidence: 0.91 } }),
  N(3, { category: "ai_insight", title: "Cold email blocked", message: "Unsolicited sales pitch with mass-send markers. Archived and labeled Cold Outreach — it never hit your inbox.", createdAt: iso(3),
    metadata: { aiCardType: "blocked", emailSubject: "Quick question about your agency's growth plans", emailFrom: "Tyler Brooks · LeadSurge Growth", confidence: 0.97 } }),
  N(4, { category: "ai_insight", title: "Newsletter archived", message: "Recurring newsletter moved to Read Later and archived. 6 more like it were cleaned up today.", createdAt: iso(26), isRead: true,
    metadata: { aiCardType: "archived", emailSubject: "The Weekly Pixel — Issue #214", emailFrom: "The Weekly Pixel", confidence: 0.98 } }),
  N(5, { category: "ai_insight", title: "Recruiter spam removed", message: "Recruiting agency cold pitch matched your \"Recruiter spam\" rule and was moved to trash.", createdAt: iso(410), isRead: true,
    metadata: { aiCardType: "trashed", emailSubject: "Hiring? We place senior React devs in 48h", emailFrom: "Noah Price · TalentBridge", confidence: 0.89 } }),
  N(6, { category: "ai_insight", title: "Cold email blocked", message: "Generic outreach template with tracking pixels. Archived automatically.", createdAt: iso(130), isRead: true,
    metadata: { aiCardType: "blocked", emailSubject: "Partnership opportunity — 10x your leads", emailFrom: "Ava Sinclair · GrowthPilot", confidence: 0.95 } }),
];
export const bellNotifications = [
  N(20, { category: "response_tracking", priority: "high", title: "Nudge ready for Olivia Chen", message: "No reply in 3 days. A nudge in your voice is ready.", createdAt: iso(14), actionUrl: "/mail/replies", actionLabel: "Review draft" }),
  N(21, { category: "ai_insight", title: "3 emails need your response", message: "Priya, Marcus and Elena are waiting on you.", createdAt: iso(38), actionUrl: "/mail/replies", actionLabel: "Open Replies" }),
  N(23, { category: "response_tracking", title: "Marcus Bell replied", message: "Moved from Awaiting Reply to Needs Response.", createdAt: iso(64) }),
  N(22, { category: "rule_execution", title: "12 cold emails blocked today", message: "\"Block cold outreach\" kept them out of your inbox.", createdAt: iso(72), actionUrl: "/dashboard/rule-logs", actionLabel: "View log" }),
  N(24, { category: "digest", title: "Your daily digest is ready", message: "48 processed · 31 auto-organized · 1h 20m saved.", createdAt: iso(300), isRead: true, actionUrl: "/analytics", actionLabel: "See analytics" }),
  N(25, { category: "ai_insight", title: "Newsletters cleaned up", message: "7 newsletters moved to Read Later.", createdAt: iso(420), isRead: true }),
  N(26, { category: "product_update", title: "New: AI drafts in your voice", message: "Follow-ups now match how you write to each contact.", createdAt: iso(60 * 26), isRead: true }),
];
aiInsights.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
bellNotifications.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
