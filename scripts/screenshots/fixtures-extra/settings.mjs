// Settings group fixtures (owned by the "settings" screenshot agent).
import { USER_ID, WORKSPACE_ID, iso } from "../persona.mjs";
import base from "../fixtures.mjs";
const P = (id, name, tone, formality, len, n, minsAgo, extra = {}) => ({
  id, user_id: USER_ID, profile_name: name, detected_tone: tone, manual_tone: null, manual_formality_score: formality,
  manual_length_preference: len, manual_custom_instructions: null, is_default: false, enabled: true,
  applies_to_domains: [], applies_to_labels: [], sample_email_count: n, last_analyzed_at: iso(minsAgo), ...extra,
});
export default {
  tables: {
    features: [
      // [key, name, category, [free, pro, business, enterprise] (true/false or display string)]
      ["emails", "Emails processed / month", "limits", ["500", "15,000", "50,000", "Custom"]],
      ["inboxes", "Connected Gmail accounts", "limits", ["1", "3", "10", "Unlimited"]],
      ["rules", "Automation rules", "limits", ["3", "50", "Unlimited", "Unlimited"]],
      ["ai_class", "AI classification & categories", "ai_features", [false, true, true, true]],
      ["tracking", "Response tracking labels", "ai_features", [true, true, true, true]],
      ["cold", "Cold-email blocking", "ai_features", [false, true, true, true]],
      ["drafts", "AI drafts in your writing voice", "ai_features", [false, true, true, true]],
      ["nudges", "Follow-up nudges", "features", [false, true, true, true]],
      ["autoresp", "Vacation & after-hours responder", "features", [true, true, true, true]],
      ["cleanup", "Newsletter & unsubscribe cleanup", "features", [false, true, true, true]],
      ["byok", "Bring your own AI key (BYOK)", "ai_features", [false, false, true, true]],
      ["team", "Shared team workspace", "collaboration", ["—", "Up to 3", "Up to 10", "Unlimited"]],
      ["roles", "Roles & permissions", "collaboration", [false, false, true, true]],
      ["passkeys", "Passkeys & 2FA", "security", [true, true, true, true]],
      ["enforce2fa", "Enforce 2FA for members", "security", [false, false, true, true]],
      ["support", "Support", "support", ["Community", "Email", "Priority", "Dedicated"]],
    ].map(([k, name, category, vals], i) => ({
      id: `7b6c5d4e-0001-4000-8000-0000000000${String(i).padStart(2, "0")}`, feature_key: k, feature_name: name, feature_description: name, category, display_order: i, feature_type: "boolean", is_active: true, is_highlight: false, created_at: "2026-01-10T00:00:00Z", updated_at: "2026-09-01T00:00:00Z",
      tier_features: ["free", "pro", "business", "enterprise"].map((t, j) => ({ is_enabled: vals[j] !== false, feature_value: typeof vals[j] === "string" ? { value: true, display: vals[j] } : { value: vals[j] }, pricing_tiers: { tier_key: t } })),
    })),
    pricing_tiers: [
      ["free", "Free", "Try MailPrism on one inbox with core automation.", 0, 0, "paper-plane", "#6b7280", 1, false, false, 0, { max_rules: 3, max_emails_per_month: 500, max_ai_analyses_per_month: 0, max_team_members: 1, history_days: 7 }],
      ["starter", "Starter", "AI essentials for a single busy inbox.", 7, 70, "seedling", "#10b981", 2, false, true, 14, { max_rules: 10, max_emails_per_month: 2500, max_ai_analyses_per_month: 500, max_team_members: 1, history_days: 30 }],
      ["pro", "Pro", "Full AI triage, tracking labels, nudges and drafts in your voice.", 19, 190, "rocket", "#8b5cf6", 3, true, true, 7, { max_rules: 50, max_emails_per_month: 15000, max_ai_analyses_per_month: 3000, max_team_members: 3, history_days: 90 }],
      ["business", "Business", "For teams: shared workspaces, multiple inboxes and your own AI keys.", 49, 490, "building", "#3b82f6", 4, false, true, 7, { max_rules: null, max_emails_per_month: 50000, max_ai_analyses_per_month: 10000, max_team_members: 10, history_days: 365 }],
      ["enterprise", "Enterprise", "Custom volume, security review and a dedicated success manager.", 199, 1990, "shield-halved", "#ec4899", 5, false, false, 0, { max_rules: null, max_emails_per_month: null, max_ai_analyses_per_month: null, max_team_members: null, history_days: 730 }],
      ["lifetime", "Lifetime", "Friends & family.", 0, 0, "infinity", "#f59e0b", 6, false, false, 0, { is_public: false }],
    ].map(([tier_key, display_name, description, price_monthly, price_annual, icon, color, sort_order, is_popular, has_trial, trial_days, extra]) => ({
      id: `9a8b7c6d-0001-4000-8000-00000000000${sort_order}`, tier_key, display_name, description, price_monthly, price_annual, icon, color, sort_order, is_popular, has_trial, trial_days,
      max_actions_per_rule: 10, max_templates: 25, stripe_price_id_monthly: null, stripe_price_id_annual: null, is_active: true, is_public: true, created_at: "2026-01-10T00:00:00Z", updated_at: "2026-09-01T00:00:00Z", ...extra,
    })),
    // Narrow override: ONLY the /onboarding/tracking-profile server guard selects exactly this one column.
    // Every other users query gets the shared base row untouched.
    users: (sp) => (sp.get("select") || "").replace(/\s/g, "") === "tracking_profile_onboarding_status"
      ? [{ id: USER_ID, tracking_profile_onboarding_status: null }]
      : base.tables.users,

    nudge_flows: [
      { id: "b2c3d4e5-0001-4000-8000-000000000001", user_id: USER_ID, name: "Client follow-up", flow_type: "nudge_them", config: { delays: [3, 5, 7], maxFollowUps: 3, tone: "friendly", useAI: true, includeThread: true }, is_default: true, created_at: iso(60*24*90), updated_at: iso(60*24*3) },
      { id: "b2c3d4e5-0001-4000-8000-000000000002", user_id: USER_ID, name: "Proposal chaser", flow_type: "nudge_them", config: { delays: [2, 4], maxFollowUps: 2, tone: "professional", useAI: true, includeThread: true }, is_default: false, created_at: iso(60*24*60), updated_at: iso(60*24*9) },
      { id: "b2c3d4e5-0001-4000-8000-000000000003", user_id: USER_ID, name: "Invoice reminder", flow_type: "nudge_them", config: { delays: [7, 7, 7], maxFollowUps: 3, tone: "formal", useAI: false, includeThread: true }, is_default: false, created_at: iso(60*24*80), updated_at: iso(60*24*20) },
      { id: "b2c3d4e5-0001-4000-8000-000000000004", user_id: USER_ID, name: "Remind me to reply", flow_type: "remind_me", config: { delays: [1, 2], maxFollowUps: 2, tone: "professional", useAI: false, includeThread: false }, is_default: false, created_at: iso(60*24*70), updated_at: iso(60*24*15) },
    ],
    active_nudges: [
      ...[
        ["Proposal: Lumen Health patient portal redesign", "priya.raman@lumenhealth.io", 4, 60*20, 1, 3],
        ["Re: Q4 retainer — scope & next steps", "marcus.bell@halcyonfreight.com", 3, 60*26, 1, 3],
        ["Invoice #NW-2291 — September design sprint", "accounts@cobaltandpine.com", 8, 60*30, 1, 3],
        ["Brand workshop dates for November?", "elena.vasquez@brightline-analytics.com", 2, 60*44, 0, 3],
        ["Contract redlines — Tidewater Coffee site", "sam.okafor@tidewatercoffee.co", 6, 60*52, 2, 3],
        ["Final homepage copy for sign-off", "hannah.lee@meridianlegal.com", 5, 60*70, 1, 2],
      ].map(([subj, to, daysAgo, nextIn, done, max], i) => ({
        id: `c3d4e5f6-0001-4000-8000-00000000000${i+1}`, user_id: USER_ID, email_id: `18f${i}a2b3c4d5e6f7`, gmail_account_id: "c41d2e8f-6a9b-4c3d-8e7f-1a2b3c4d5e6f",
        thread_id: `18f${i}a2b3c4d5e6f7`, status: i === 4 ? "paused" : "active", config_snapshot: { emailSubject: subj, recipientEmail: to, delays: [3, 5, 7] },
        next_action_at: new Date(Date.now() + nextIn*60000).toISOString(), actions_completed: done, max_actions: max, created_at: iso(daysAgo*60*24),
      })),
      ...Array.from({ length: 14 }, (_, i) => ({ id: `d4e5f6a7-0001-4000-8000-0000000000${String(i).padStart(2,"0")}`, user_id: USER_ID, status: "completed", completion_reason: i < 11 ? "recipient_replied" : "max_reached", actions_completed: i % 3 === 0 ? 2 : 1, completed_at: iso(60*24*(i%6)), thread_id: "x", created_at: iso(60*24*10) })),
    ],
    user_writing_profiles_v2: [
      P("a1b2c3d4-0001-4000-8000-000000000001", "Jordan — Client Voice", "friendly", 0.5, "moderate", 412, 60 * 26, {
        is_default: true, description: "Warm and direct. Short paragraphs, first names, a clear next step in every reply.",
        manual_custom_instructions: "Sign off with \"Cheers, Jordan\". Never use \"per my last email\".",
      }),
      P("a1b2c3d4-0001-4000-8000-000000000002", "New Business Pitches", "professional", 0.75, "detailed", 138, 60 * 50, {
        description: "Confident, outcome-led proposals for prospects. Leads with results and timelines.",
        applies_to_labels: ["Leads"],
      }),
      P("a1b2c3d4-0001-4000-8000-000000000003", "Team & Contractors", "casual", 0.25, "brief", 286, 60 * 30, {
        description: "Quick, friendly check-ins with the studio team and freelancers.",
        applies_to_domains: ["northwind.studio"],
      }),
      P("a1b2c3d4-0001-4000-8000-000000000004", "Invoices & Finance", "formal", 1, "brief", 64, 60 * 72, {
        description: "Precise and polite for billing, payment reminders and accountants.",
        applies_to_domains: ["ledgerline.co", "cobaltandpine.com"],
      }),
    ],
  },
};
