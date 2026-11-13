import { USER_ID, WORKSPACE_ID, GMAIL_ACCOUNT_ID, LABEL_IDS, iso } from "../persona.mjs";

const rid = (n) => `7e1a0c00-0000-4000-8000-${String(n).padStart(12, "0")}`;
const c = (field, operator, value) => ({ field, operator, value });
const a = (type, value, extra = {}) => ({ type, ...(value !== undefined ? { value } : {}), ...extra });

const base = (n, o) => ({
  id: rid(n), user_id: USER_ID, workspace_id: WORKSPACE_ID, gmail_account_ids: [GMAIL_ACCOUNT_ID], applies_to: "all",
  message_direction: "inbound", enabled: true, priority: n * 10, stop_processing: false,
  created_at: iso(60 * 24 * (120 - n * 7)), updated_at: iso(60 * 24 * (10 + n)), is_deletable: true, is_system_default: false,
  category: "general", ...o,
});

export const USER_RULES = [
  base(1, { name: "Block cold sales pitches", description: "AI spots unsolicited pitches from people you've never emailed and keeps them out of your inbox.",
    conditions: { match: "all", conditions: [c("ai_is_cold_outreach", "is", "Cold outreach"), c("sender_is_contact", "is", "Not a contact")] },
    actions: [a("apply_label", "Cold Outreach"), a("archive"), a("mark_read")], execution_count: 1284, last_executed_at: iso(7) }),
  base(2, { name: "Archive newsletters after 3 days", description: "Newsletters stay readable for 3 days, then quietly move out of the inbox.",
    conditions: { match: "all", conditions: [c("ai_category", "is", "Newsletter"), c("email_age_days", "is", "Older than 3 days")] },
    actions: [a("apply_label", "Read Later"), a("archive")], execution_count: 3961, last_executed_at: iso(22) }),
  base(3, { name: "Label client emails + notify", description: "Tags every message from an active client and pings you when it needs a reply.",
    conditions: { match: "all", conditions: [c("sender_status", "is", "Client list"), c("ai_requires_response_detected", "is", "Needs reply")] },
    actions: [a("apply_label", "Clients"), a("track_response_needed", "Needs Response"), a("notify_email", "Notify me")], execution_count: 842, last_executed_at: iso(14) }),
  base(4, { name: "Receipts → Finance label", description: "Invoices and receipts are filed under Finance and copied to the bookkeeping inbox.",
    conditions: { match: "any", conditions: [c("ai_category", "is", "Receipt"), c("subject", "contains", "invoice")] },
    actions: [a("apply_label", "Finance/Receipts"), a("forward", "books@northwind.studio"), a("archive")], execution_count: 517, last_executed_at: iso(95) }),
  base(5, { name: "VIP: Lumen Health", description: "Priya's team at Lumen Health always lands at the top, starred and tracked.",
    conditions: { match: "all", conditions: [c("from", "contains", "lumenhealth.io")] },
    actions: [a("apply_label", "VIP"), a("track_response_needed", "Needs Response"), a("star"), a("mark_important")], execution_count: 236, last_executed_at: iso(41) }),
  base(6, { name: "Draft replies to meeting requests", description: "When someone asks for time, AI drafts a reply in your voice with your open slots.",
    conditions: { match: "all", conditions: [c("ai_category", "is", "Meeting request"), c("sender_relationship", "is", "Warm or known")] },
    actions: [a("draft_reply", "In your voice"), a("apply_label", "Scheduling")], execution_count: 178, last_executed_at: iso(63) }),
  base(7, { name: "Nudge me if no reply in 3 days", description: "Proposals and quotes you send get a follow-up reminder if the thread goes quiet.",
    conditions: { match: "all", conditions: [c("thread_last_sender", "is", "Me"), c("subject", "contains", "proposal")] },
    actions: [a("mark_awaiting_reply", "Awaiting Reply"), a("start_nudge", "After 3 days")], execution_count: 94, last_executed_at: iso(180) }),
  base(8, { name: "Halcyon Freight shipments → Ops", description: "Shipment and BOL updates from Halcyon Freight go straight to the ops channel.",
    conditions: { match: "all", conditions: [c("from", "contains", "halcyonfreight.com"), c("subject", "contains", "BOL")] },
    actions: [a("forward", "ops@northwind.studio"), a("apply_label", "Ops/Shipping")], execution_count: 61, last_executed_at: iso(60 * 26) }),
  base(9, { name: "Urgent client issues → Priority", description: "AI flags urgent, time-sensitive requests from established clients.",
    conditions: { match: "all", conditions: [c("ai_urgency", "is", "Urgent"), c("sender_relationship", "is", "Established")] },
    actions: [a("apply_label", "Priority"), a("notify_email", "Notify me"), a("star")], execution_count: 47, last_executed_at: iso(60 * 5) }),
  base(10, { name: "Brightline reports → Reports", description: "Weekly analytics digests from Brightline Analytics, filed and out of the way.",
    conditions: { match: "all", conditions: [c("from", "contains", "brightline.io"), c("has_attachment", "is", "Has attachment")] },
    actions: [a("apply_label", "Reports"), a("archive")], execution_count: 32, last_executed_at: iso(60 * 50) }),
  base(11, { name: "Mute calendar auto-replies", description: "Accepted / declined calendar notices skip the inbox.",
    enabled: false,
    conditions: { match: "any", conditions: [c("subject", "starts_with", "Accepted:"), c("subject", "starts_with", "Declined:")] },
    actions: [a("archive"), a("mark_read")], execution_count: 412, last_executed_at: iso(60 * 24 * 9) }),
];

const sys = (n, name, desc, count) => base(100 + n, {
  name, description: desc, is_system_default: true, is_deletable: false, priority: 900 + n,
  conditions: { match: "all", conditions: [c("ai_category", "is", name.replace("Filter ", ""))] },
  actions: [a("apply_label", name.replace("Filter ", "")), a("archive")], execution_count: count, last_executed_at: iso(30 + n * 11),
});
export const SYSTEM_RULES = [
  sys(1, "Filter Cold Emails", "Label and archive unsolicited cold outreach.", 2210),
  sys(2, "Filter Newsletters", "Label and archive newsletters.", 5408),
  sys(3, "Filter Promotions", "Label and archive promotional email.", 3120),
  sys(4, "Filter Social Notifications", "Label and archive social notifications.", 980),
  sys(5, "Filter Receipts & Updates", "Label and archive receipts and updates.", 1450),
];
// Promotions + social off for variety
SYSTEM_RULES[3].enabled = false;

const ALL = [...USER_RULES, ...SYSTEM_RULES];

// Rich "real" version used by the rule detail / edit page for rule 1
export const DETAIL_RULES = {
  [rid(1)]: {
    ...USER_RULES[0],
    conditions: { match: "all", conditions: [
      c("ai_category", "equals", "cold_email"),
      c("sender_relationship", "equals", "cold"),
      c("sender_is_contact", "is_false", false),
    ] },
    actions: [a("apply_label", "Cold Outreach"), a("archive"), a("mark_read")],
  },
  [rid(3)]: {
    ...USER_RULES[2],
    conditions: { match: "all", conditions: [
      c("from", "ends_with", "@lumenhealth.io"),
      c("ai_requires_response_detected", "is_true", true),
    ], groups: [] },
    actions: [a("apply_label", "Clients"), a("track_response_needed"), a("notify_email", "jordan@northwind.studio")],
  },
};

const labelRow = (id, name, mode, color, order, sysType = null) => ({
  id, workspace_id: WORKSPACE_ID, gmail_account_id: null, label_name: name, gmail_label_id: `Label_${order}`, mode,
  is_default_for_mode: order === 1, on_reply_action: "resolve", on_reply_custom_action: null, display_order: order, color,
  is_active: true, created_at: "2026-03-02T15:00:00Z", updated_at: "2026-10-01T15:00:00Z", is_system: !!sysType, system_label_type: sysType, response_tracking_profile_id: null,
});

const day = 24 * 60;
const series = Array.from({ length: 30 }, (_, i) => {
  const d = new Date(Date.now() - (29 - i) * day * 60000);
  const wk = d.getDay() === 0 || d.getDay() === 6;
  const s = Math.round((wk ? 14 : 44) + 12 * Math.sin(i / 2.3) + (i % 5) * 2);
  return { date: d.toISOString().slice(0, 10), successful: s, failed: i % 9 === 0 ? 1 : 0 };
});
const senders = [
  ["Quick question about Northwind's design process", "Tyler Brooks <tyler@growthstackhq.com>"],
  ["Scaling your agency to 7 figures", "Dana Whitfield <dana@pipelineforge.co>"],
  ["15 min to show you our AI SDR?", "Kevin Ortiz <kevin@outreachly.ai>"],
  ["Partnership opportunity for Northwind Studio", "Mira Sato <mira@leadharbor.io>"],
  ["Re: offshore dev team for your clients", "Raj Mehta <raj@codebridge-partners.com>"],
  ["Your website could load 3x faster", "Alex Kim <alex@siteboostlabs.com>"],
  ["Following up on my last note", "Tyler Brooks <tyler@growthstackhq.com>"],
  ["Northwind x Ledgerly — quick intro", "Sam Patel <sam@ledgerly.app>"],
];
const execs = senders.map(([s, f], i) => ({ id: `ex-${i}`, emailId: `em-${i}`, executedAt: iso(7 + i * 97), matched: true, emailSubject: s, emailFrom: f, actionsCount: 3 }));
const notMatched = [
  ["Re: Lumen Health portal — sprint 14 review", "Priya Raman <priya@lumenhealth.io>"],
  ["Invoice #2291 from Cobalt & Pine", "Billing <billing@cobaltandpine.com>"],
  ["Shipment update: BOL 88412", "Marcus Bell <marcus@halcyonfreight.com>"],
].map(([s, f], i) => ({ id: `nm-${i}`, emailId: `nm-${i}`, executedAt: iso(30 + i * 61), matched: false, emailSubject: s, emailFrom: f, actionsCount: 0 }));

function analytics(url) {
  const id = url.pathname.split("/").pop();
  const r = ALL.find((x) => x.id === id) ?? USER_RULES[0];
  const total = r.execution_count;
  return {
    rule: { id: r.id, name: r.name, description: r.description, enabled: r.enabled, priority: r.priority },
    dateRange: "30d",
    stats: { totalExecutions: 1012, totalEvaluations: 4386, notMatched: 3374, successRate: 23.1 },
    actionDistribution: r.actions.map((x, i) => ({ type: x.type, count: 1012 - i * 3 })),
    timeSeries: series,
    hourlyPattern: Array.from({ length: 24 }, (_, h) => {
      const m = Math.max(0, Math.round(55 * Math.exp(-((h - 10) ** 2) / 12) + 20 * Math.exp(-((h - 15) ** 2) / 8)));
      return { hour: h, matched: m, notMatched: m * 3 + 4, total: m * 4 + 4 };
    }),
    executions: {
      matched: { data: execs, total: 1012, page: 1, pageSize: 20, totalPages: 51 },
      notMatched: { data: notMatched, total: 3374, fullTotal: 3374, filteredTotal: 3374, hasMore: true, page: 1, pageSize: 10, totalPages: 338, search: "" },
    },
    _total: total,
  };
}

const exemption = (n, name, sender, mode, source, matches, subject = null) => ({
  id: `5e000000-0000-4000-8000-${String(n).padStart(12, "0")}`, workspace_id: WORKSPACE_ID, created_by: USER_ID, updated_by: USER_ID,
  name, sender_pattern: sender, subject_pattern: subject, subject_exact_match: false, from_display_pattern: null, source, mode, priority: n,
  is_active: true, last_matched_at: iso(n * 37), total_matches: matches, created_at: iso(day * (40 - n)), updated_at: iso(day * 3),
  scopes: [{ gmail_account_id: GMAIL_ACCOUNT_ID }],
});

const T = (n, name, description, category, icon, conds, acts, o = {}) => ({
  id: `a0b10000-0000-4000-8000-${String(n).padStart(12, "0")}`, name, description, category, icon,
  conditions: { match: "all", conditions: Array.from({ length: conds }, () => c("from", "contains", "x")) },
  actions: Array.from({ length: acts }, () => a("archive")), is_ai_powered: false, requires_tier: "free", display_order: n,
  created_at: "2026-05-01T00:00:00Z", updated_at: "2026-09-01T00:00:00Z", is_installed: false, is_deleted: false, rule_id: null, installed_at: null, ...o,
});
const TEMPLATES = [
  T(1, "Block cold outreach", "AI detects unsolicited sales pitches from strangers and archives them before you see them.", "spam", "fa-solid fa-shield-halved", 2, 3, { is_ai_powered: true, is_popular: true, is_installed: true, rule_id: rid(1), installed_at: iso(day * 90) }),
  T(2, "Auto-archive newsletters", "Keep newsletters readable for a few days, then move them out of the inbox automatically.", "newsletters", "fa-solid fa-newspaper", 2, 2, { is_popular: true, is_installed: true, rule_id: rid(2), installed_at: iso(day * 88) }),
  T(3, "File receipts & invoices", "Label receipts, invoices and order confirmations so tax season takes minutes.", "receipts", "fa-solid fa-receipt", 2, 2, { is_installed: true, rule_id: rid(4), installed_at: iso(day * 60) }),
  T(4, "Track emails that need a reply", "AI decides which messages are waiting on you and applies Needs Response.", "response-tracking", "fa-solid fa-reply-all", 2, 1, { is_ai_powered: true, is_popular: true }),
  T(5, "Follow up when there's no reply", "Get a nudge if a thread you started goes quiet for 3 days.", "response-tracking", "fa-solid fa-bell", 2, 2, { is_new: true }),
  T(6, "VIP senders to the top", "Star and mark important every email from the people you name.", "priority", "fa-solid fa-star", 1, 3),
  T(7, "Urgent requests alert", "AI flags time-sensitive asks and notifies you right away.", "priority", "fa-solid fa-bolt", 2, 2, { is_ai_powered: true, requires_tier: "pro" }),
  T(8, "Draft replies in your voice", "For meeting requests and quick questions, AI writes a draft that sounds like you.", "ai", "fa-solid fa-wand-magic-sparkles", 1, 1, { is_ai_powered: true, is_new: true, requires_tier: "pro" }),
  T(9, "Summarize long threads", "Adds an AI summary to threads with more than 6 messages.", "ai", "fa-solid fa-robot", 1, 1, { is_ai_powered: true, is_beta: true, requires_tier: "pro" }),
  T(10, "Client emails → label + notify", "Label every client message and get notified when one needs you.", "professional", "fa-solid fa-briefcase", 2, 3, { is_installed: true, rule_id: rid(3), installed_at: iso(day * 45) }),
  T(11, "Mute app notifications", "Archive routine notifications from tools and bots.", "notifications", "fa-solid fa-bell-slash", 1, 2),
  T(13, "Quarantine first-time senders", "Unknown senders with sales language wait in a review label instead of your inbox.", "spam", "fa-solid fa-user-shield", 2, 2, { is_ai_powered: true, is_new: true }),
  T(14, "Archive recruiter spam", "Unsolicited recruiting and staffing pitches are labeled and archived.", "spam", "fa-solid fa-user-slash", 2, 2),
  T(15, "Weekly digest folder", "Group newsletters under one label and read them when you choose.", "newsletters", "fa-solid fa-layer-group", 1, 2, { is_popular: true }),
  T(16, "Unsubscribe from dormant lists", "Lists you haven't opened in 60 days get an unsubscribe suggestion.", "newsletters", "fa-solid fa-bell-slash", 2, 1, { is_ai_powered: true, is_beta: true }),
  T(17, "Awaiting reply on proposals", "Proposals and quotes you send are tracked until the client responds.", "response-tracking", "fa-solid fa-hourglass-half", 2, 1, { is_installed: true, rule_id: rid(7), installed_at: iso(day * 30) }),
  T(18, "Forward invoices to bookkeeping", "Every invoice is copied to your bookkeeping address automatically.", "receipts", "fa-solid fa-file-invoice-dollar", 2, 2, { is_popular: true }),
  T(19, "Shipping updates out of sight", "Tracking numbers and delivery notices are labeled and archived.", "receipts", "fa-solid fa-truck", 1, 2),
  T(20, "Client threads to the top", "Messages from client domains are starred and labeled Clients.", "priority", "fa-solid fa-building", 1, 2),
  T(21, "Classify by intent", "AI tags each email as request, update, intro or FYI.", "ai", "fa-solid fa-tags", 1, 1, { is_ai_powered: true, requires_tier: "pro" }),
  T(12, "FYI emails skip the inbox", "CC'd and informational messages get labeled FYI and marked read.", "informational", "fa-solid fa-circle-info", 2, 2, { is_ai_powered: true }),
];

const LABEL_NAMES = ["Clients", "Invoices", "Newsletters", "Projects/Lumen Portal", "Team", "Cold Outreach", "Finance/Receipts", "Ops/Shipping", "Priority", "Read Later", "Reports", "Scheduling", "VIP", "Needs Response", "Awaiting Reply", "FYI"];

export default {
  "/api/workspace-labels": { accounts: { [GMAIL_ACCOUNT_ID]: { email: "jordan@northwind.studio", labels: LABEL_NAMES.map((name, i) => ({ name, gmail_label_id: `Label_${100 + i}` })), lastSyncedAt: iso(12) } } },
  "/api/rules": { rules: ALL, beforeAiPhaseActive: false, offloadRecommenderActive: false },
  "/api/history/stats": { stats: { all: 18420, matched: 9312, noMatch: 9108 } },
  "/api/tracking-labels": {
    active_labels: [
      labelRow(LABEL_IDS.needs_response, "Needs Response", "active", "#EF4444", 1, "needs_response"),
      labelRow(LABEL_IDS.awaiting_reply, "Awaiting Reply", "active", "#F59E0B", 2, "awaiting_reply"),
    ],
    passive_labels: [
      labelRow(LABEL_IDS.fyi, "FYI", "passive", "#3B82F6", 3),
      labelRow(LABEL_IDS.scheduled, "Scheduled", "passive", "#8B5CF6", 4),
    ],
    mode_settings: { active_mode_reminder_days: [1, 3, 7], active_mode_follow_up_after_days: 5, passive_mode_auto_archive_after_days: null },
  },
  "/api/tracking-exemptions": { exemptions: [
    exemption(1, "Sign-in & security alerts", "no-reply@accounts.*", "ignore_all", "curated", 312),
    exemption(2, "Design tool comment digests", "notifications@pixelboard.app", "first_instance_only", "manual", 148),
    exemption(3, "Cobalt & Pine billing", "billing@cobaltandpine.com", "alerts_only", "ai_suggested", 26),
    exemption(4, "Deploy bot", "bot@shipyard-ci.dev", "ignore_all", "curated", 904),
    exemption(5, "Halcyon Freight auto-tracking", "tracking@halcyonfreight.com", "ignore_all", "ai_suggested", 77, "Shipment status"),
    exemption(6, "Lumen Health — always track", "*@lumenhealth.io", "track_all", "manual", 236),
  ] },
  "/api/analytics/rules/*": analytics,
  "/api/rules/templates": { templates: TEMPLATES },
  "/api/rules/generate-from-nl": {
    message: "Got it. Here's a rule that keeps Lumen Health front and center: when someone from their domain sends something that needs your reply, it's starred, labeled Clients and tracked as Needs Response until you answer. Want me to also nudge you if a thread sits unanswered for a day?",
    ruleDraft: {
      name: "VIP: Lumen Health",
      description: "Star, label and track every email from the Lumen Health team.",
      enabled: true, priority: 5, stop_processing: false,
      conditions: { match: "all", conditions: [c("from", "contains", "@lumenhealth.io"), c("ai_requires_response_detected", "is_true", true)] },
      actions: [a("star"), a("apply_label", "Clients"), a("track_response_needed", "Needs Response")],
    },
    suggestions: ["Yes, nudge me after 1 day", "Also mark them important", "Looks good"],
    conversationComplete: false,
  },
  "/api/rules/*": (url) => {
    const id = url.pathname.split("/")[3];
    const r = DETAIL_RULES[id] ?? ALL.find((x) => x.id === id) ?? USER_RULES[0];
    return { rule: r };
  },
};
