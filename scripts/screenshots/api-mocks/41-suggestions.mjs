import { USER_ID, WORKSPACE_ID, GMAIL_ACCOUNT_ID, iso } from "../persona.mjs";

const c = (field, operator, value) => ({ field, operator, value });
const S = (n, detector_type, o) => ({
  id: `5a6e0000-0000-4000-8000-${String(n).padStart(12, "0")}`, user_id: USER_ID, workspace_id: WORKSPACE_ID, gmail_account_id: GMAIL_ACCOUNT_ID,
  detector_type, status: "pending", sample_email_ids: [], created_at: iso(n * 47 + 12), updated_at: iso(n * 47 + 12),
  expires_at: iso(-60 * 24 * 7), ...o,
});

const SUGGESTIONS = [
  S(1, "priority_sender", {
    title: "Prioritize Lumen Health",
    description: "You reply to Priya Raman and the Lumen Health team within 40 minutes on average. Star their mail and track it as Needs Response.",
    reasoning: "Across the last 30 days you replied to 31 of 33 threads from lumenhealth.io, usually within the hour, and starred 12 of them by hand.",
    confidence: 0.94, confidence_level: "high", score: 92, event_count: 33,
    evidence: [{ label: "Emails", value: 33 }, { label: "Reply rate", value: "94%" }, { label: "Avg. reply", value: "38 min" }],
    proposed_conditions: { match: "all", conditions: [c("from", "contains", "@lumenhealth.io")] },
    proposed_actions: [{ type: "star" }, { type: "track_response_needed" }],
  }),
  S(2, "automated_system_noise", {
    title: "Archive deploy notifications",
    description: "Build and deploy alerts from Shipyard CI arrive 20+ times a day and you never open them. Label them Builds and skip the inbox.",
    reasoning: "142 messages from bot@shipyard-ci.dev in 14 days. 0 opened, 0 replied, 38 archived by hand.",
    confidence: 0.91, confidence_level: "high", score: 88, event_count: 142,
    evidence: [{ label: "Emails", value: 142 }, { label: "Opened", value: "0%" }, { label: "Per day", value: "~10" }],
    proposed_conditions: { match: "all", conditions: [c("from", "equals", "bot@shipyard-ci.dev")] },
    proposed_actions: [{ type: "apply_label", value: "Builds" }, { type: "archive" }, { type: "mark_read" }],
  }),
  S(3, "consistent_action", {
    title: "File Cobalt & Pine invoices",
    description: "Every invoice from Cobalt & Pine gets labeled Finance and forwarded to books@northwind.studio. Let MailPrism do it for you.",
    reasoning: "You applied the same two actions to all 9 invoices from cobaltandpine.com since July.",
    confidence: 0.87, confidence_level: "high", score: 84, event_count: 9,
    evidence: [{ label: "Same action", value: "9 of 9" }, { label: "Label", value: "Finance" }],
    proposed_conditions: { match: "all", conditions: [c("from", "contains", "cobaltandpine.com"), c("subject", "contains", "invoice")] },
    proposed_actions: [{ type: "apply_label", value: "Finance" }, { type: "forward", value: "books@northwind.studio" }],
  }),
  S(4, "smart_analyzer", {
    title: "Draft replies to discovery-call requests",
    description: "New-business inquiries asking for a call follow the same pattern. AI can draft a reply in your voice with your booking link.",
    reasoning: "AI found 14 inbound inquiries with nearly identical replies from you: thanks, two time options and your calendar link.",
    confidence: 0.78, confidence_level: "medium", score: 74, event_count: 14,
    evidence: [{ label: "Similar replies", value: 14 }, { label: "Avg. length", value: "62 words" }],
    proposed_conditions: { match: "all", conditions: [c("ai_category", "equals", "work"), c("subject", "contains", "call")] },
    proposed_actions: [{ type: "draft_reply" }],
  }),
  S(5, "dead_sender", {
    title: "Unsubscribe from 6 dormant newsletters",
    description: "You haven't opened anything from these lists in 60+ days, including Growth Weekly and The Agency Ledger.",
    reasoning: "6 senders, 214 emails since August, 0 opens.",
    confidence: 0.83, confidence_level: "high", score: 79, event_count: 214,
    evidence: [{ label: "Senders", value: 6 }, { label: "Emails", value: 214 }, { label: "Last opened", value: "74 days" }],
    proposed_conditions: { match: "any", conditions: [c("from", "contains", "growthweekly.co")] },
    proposed_actions: [{ type: "unsubscribe" }, { type: "archive" }],
  }),
  S(6, "awaiting_reply", {
    title: "Nudge Halcyon Freight after 2 days",
    description: "Quotes you send to Marcus Bell often sit unanswered. Track them as Awaiting Reply and remind you after 2 days.",
    reasoning: "4 of your last 7 threads with halcyonfreight.com needed a manual follow-up.",
    confidence: 0.68, confidence_level: "medium", score: 63, event_count: 7,
    evidence: [{ label: "Follow-ups", value: "4 of 7" }, { label: "Avg. wait", value: "3.1 days" }],
    proposed_conditions: { match: "all", conditions: [c("to", "contains", "halcyonfreight.com")] },
    proposed_actions: [{ type: "mark_awaiting_reply" }, { type: "start_nudge" }],
  }),
];

export default {
  "/api/suggestions/v2/stats": { total: 23, pending: SUGGESTIONS.length, accepted: 14, dismissed: 3,
    by_detector: { priority_sender: 1, automated_system_noise: 1, consistent_action: 1, smart_analyzer: 1, dead_sender: 1, awaiting_reply: 1 } },
  "/api/suggestions/v2": { suggestions: SUGGESTIONS },
};
