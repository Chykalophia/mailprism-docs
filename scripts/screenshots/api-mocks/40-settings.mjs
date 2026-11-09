// Settings group API mocks (owned by the "settings" screenshot agent). Only settings-page endpoints.
import { USER_ID, WORKSPACE_ID, iso } from "../persona.mjs";
let n = 0;
const END_LABEL = new Date(Date.now() + 864e5 * 16).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
const D = (type, key, name, desc, icon, color, extra = {}) => ({
  id: `f6a7b8c9-0001-4000-8000-${String(++n).padStart(12, "0")}`, user_id: extra.custom ? USER_ID : null, classification_type: type, category_key: key,
  display_name: name, description: desc, icon, color, definition_prompt: desc, keywords: [], sender_patterns: [], examples_positive: [], examples_negative: [],
  confidence_threshold: 0.7, priority: n, is_enabled: extra.disabled ? false : true, is_system_default: !extra.custom, base_definition_id: extra.customized ? "base-" + key : null,
  correction_count: extra.corrections || 0, last_learned_at: extra.corrections ? iso(60 * 20) : null, learning_version: 1, created_at: "2026-03-02T15:00:00Z", updated_at: iso(60 * 48),
});
const definitions = [
  D("category", "client_work", "Client Work", "Active projects, feedback and approvals from current clients", "fa-solid fa-briefcase", "#4F46E5", { custom: true, corrections: 12 }),
  D("category", "new_business", "New Business", "Inbound leads, RFPs and partnership enquiries worth a reply", "fa-solid fa-handshake", "#10B981", { custom: true, corrections: 5 }),
  D("category", "invoices", "Invoices & Billing", "Invoices, receipts, payment confirmations and finance questions", "fa-solid fa-file-invoice-dollar", "#F59E0B", { customized: true, corrections: 3 }),
  D("category", "cold_outreach", "Cold Outreach", "Unsolicited sales pitches, SEO offers and lead-gen sequences", "fa-solid fa-snowflake", "#06B6D4", { customized: true, corrections: 21 }),
  D("category", "newsletters", "Newsletters", "Digests, product updates and subscriptions you read later", "fa-solid fa-newspaper", "#A855F7"),
  D("category", "notifications", "Notifications", "Automated alerts from tools, calendars and shipping updates", "fa-solid fa-bell", "#6B7280"),
  D("category", "team", "Team & Contractors", "Internal threads with the studio team and freelancers", "fa-solid fa-people-group", "#EC4899", { custom: true }),
  D("urgency", "urgent", "Urgent", "Deadlines today, blocked launches, a client waiting on you", "fa-solid fa-fire", "#EF4444"),
  D("urgency", "this_week", "This Week", "Needs a reply in the next few days", "fa-solid fa-calendar-week", "#F97316"),
  D("urgency", "whenever", "Whenever", "No time pressure — read when convenient", "fa-solid fa-mug-hot", "#3B82F6"),
  D("sentiment", "positive", "Positive", "Happy clients, approvals, thank-yous", "fa-solid fa-face-smile", "#059669"),
  D("sentiment", "neutral", "Neutral", "Routine questions and logistics", "fa-solid fa-face-meh", "#6B7280"),
  D("sentiment", "frustrated", "Frustrated", "Escalations and unhappy tone — handle personally", "fa-solid fa-face-frown", "#EF4444"),
];
export default {
  "/api/mfa/status": { enabled: true, factorId: "fac-totp-0001", recoveryCodesRemaining: 8 },
  "/api/passkeys": { passkeys: [
    { id: "pk-0001", name: "MacBook Pro (Touch ID)", deviceType: "multiDevice", backedUp: true, transports: ["internal", "hybrid"], createdAt: "2026-05-04T10:12:00Z", lastUsedAt: iso(60 * 3), credentialIdPreview: "Xk3pQ9aL" },
    { id: "pk-0002", name: "iPhone 16", deviceType: "multiDevice", backedUp: true, transports: ["internal", "hybrid"], createdAt: "2026-05-04T10:20:00Z", lastUsedAt: iso(60 * 50), credentialIdPreview: "Rf8mTw2N" },
    { id: "pk-0003", name: "Security key (USB-C)", deviceType: "singleDevice", backedUp: false, transports: ["usb", "nfc"], createdAt: "2026-07-18T16:40:00Z", lastUsedAt: iso(60 * 24 * 12), credentialIdPreview: "Hb5vZc7Q" },
  ] },
  "/api/auth/sessions": { sessions: [
    { id: "s-0001", userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0 Safari/537.36", ipAddress: "203.0.113.24", lastActive: iso(1), isCurrent: true },
    { id: "s-0002", userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1", ipAddress: "198.51.100.71", lastActive: iso(95), isCurrent: false },
    { id: "s-0003", userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:132.0) Gecko/20100101 Firefox/132.0", ipAddress: "203.0.113.140", lastActive: iso(60 * 30), isCurrent: false },
  ] },
  [`/api/workspaces/${WORKSPACE_ID}/roles`]: { roles: [] },
  [`/api/workspaces/${WORKSPACE_ID}/members`]: { members: [
    { id: "m-0001", user_id: USER_ID, user: { email: "jordan@northwind.studio", display_name: "Jordan Avery" }, role: "owner", role_id: null, joined_at: "2026-03-02T15:00:00Z", status: "active" },
    { id: "m-0002", user_id: "u-0002", user: { email: "maya@northwind.studio", display_name: "Maya Chen" }, role: "admin", role_id: null, joined_at: "2026-03-09T14:10:00Z", status: "active" },
    { id: "m-0003", user_id: "u-0003", user: { email: "theo@northwind.studio", display_name: "Theo Lindqvist" }, role: "editor", role_id: null, joined_at: "2026-04-21T09:30:00Z", status: "active" },
    { id: "m-0004", user_id: "u-0004", user: { email: "ana@northwind.studio", display_name: "Ana Okonkwo" }, role: "editor", role_id: null, joined_at: "2026-06-03T16:45:00Z", status: "active" },
    { id: "m-0005", user_id: "u-0005", user: { email: "devon@northwind.studio", display_name: "Devon Park" }, role: "viewer", role_id: null, joined_at: "2026-09-14T11:00:00Z", status: "active" },
  ] },
  [`/api/workspaces/${WORKSPACE_ID}/invitations`]: { invitations: [
    { id: "inv-0001", email: "sofia.marquez@northwind.studio", role: "editor", status: "pending", created_at: iso(60 * 26), expires_at: new Date(Date.now() + 864e5 * 6).toISOString(), invited_by: USER_ID },
  ] },
  [`/api/workspaces/${WORKSPACE_ID}/limits`]: { limits: [
    { key: "limits.emails.monthly", kind: "quota", value: 50000 },
    { key: "limits.ai_analyses.monthly", kind: "quota", value: 10000 },
    { key: "limits.gmail_accounts.max", kind: "quota", value: 10 },
    { key: "limits.team_members.max", kind: "quota", value: 10 },
    { key: "limits.rules.max", kind: "unlimited" },
  ] },
  "/api/auto-responder": { data: {
    vacation: { enabled: true, startDate: new Date(Date.now() + 864e5 * 9).toISOString().slice(0, 10), endDate: new Date(Date.now() + 864e5 * 16).toISOString().slice(0, 10), timezone: "America/New_York",
      subject: `Out of office until ${END_LABEL} — Re: {original_subject}`,
      body: `Hi {sender_name},\n\nThanks for your note! I'm away from the studio with limited access to email until ${END_LABEL}.\n\nFor anything project-related, Maya Chen (maya@northwind.studio) has the keys and can help right away. Otherwise I'll reply as soon as I'm back.\n\nCheers,\nJordan`,
      workflow: "send", responseDelaySeconds: 60, targetAudience: "contacts", whitelist: [], systemRuleId: "rule-vacation" },
    afterHours: { enabled: true, businessHoursStart: "09:00", businessHoursEnd: "18:00", workDays: [1, 2, 3, 4, 5], timezone: "America/New_York",
      subject: "Got it — I'll reply first thing tomorrow",
      body: "Hi {sender_name},\n\nThanks for reaching out. Our studio hours are 9am–6pm ET, Monday to Friday, so I'll get back to you first thing next business day.\n\nIf it's urgent, just reply with URGENT in the subject and it'll jump the queue.\n\nJordan",
      workflow: "draft", responseDelaySeconds: 30, targetAudience: "everyone", whitelist: [], systemRuleId: "rule-after-hours" },
  } },
  "/api/settings/ai-classifications": { definitions, hasProAccess: true },
  "/api/settings/ai-classifications/metrics": { summary: {
    overall: { totalClassified: 4182, accuracyRate: 96.4, avgConfidence: 0.91, correctionsThisMonth: 41 },
    byCategory: [
      { categoryKey: "client_work", accuracyRate: 98.1, totalClassified: 1204, trend: "improving" },
      { categoryKey: "new_business", accuracyRate: 94.2, totalClassified: 318, trend: "improving", topConfusion: "cold_outreach" },
      { categoryKey: "invoices", accuracyRate: 99.0, totalClassified: 286, trend: "stable" },
      { categoryKey: "cold_outreach", accuracyRate: 95.7, totalClassified: 742, trend: "improving", topConfusion: "new_business" },
      { categoryKey: "newsletters", accuracyRate: 97.9, totalClassified: 1011, trend: "stable" },
      { categoryKey: "notifications", accuracyRate: 98.6, totalClassified: 621, trend: "stable" },
    ],
    trends: [ { period: "2026-05", accuracyRate: 89.2 }, { period: "2026-06", accuracyRate: 91.5 }, { period: "2026-07", accuracyRate: 93.1 }, { period: "2026-08", accuracyRate: 94.8 }, { period: "2026-09", accuracyRate: 95.9 }, { period: "2026-10", accuracyRate: 96.4 } ],
  } },
};
