// Demo inbox data for the "inbox" screenshot group. All people/companies fictional.
import { GMAIL_ACCOUNT_ID, USER_ID, WORKSPACE_ID, iso } from "../persona.mjs";

export const L = {
  needs: "Label_101", awaiting: "Label_102", clients: "Label_103", invoices: "Label_104",
  news: "Label_105", cold: "Label_106", fyi: "Label_107", lumen: "Label_108", team: "Label_109",
};

export const GMAIL_LABELS = [
  { id: L.needs, name: "Needs Response", type: "user", color: "#fb4c2f", textColor: "#ffffff" },
  { id: L.awaiting, name: "Awaiting Reply", type: "user", color: "#ffad47", textColor: "#ffffff" },
  { id: L.clients, name: "Clients", type: "user", color: "#8e63ce", textColor: "#ffffff" },
  { id: L.invoices, name: "Invoices", type: "user", color: "#16a766", textColor: "#ffffff" },
  { id: L.news, name: "Newsletters", type: "user", color: "#4a86e8", textColor: "#ffffff" },
  { id: L.cold, name: "Cold Outreach", type: "user", color: "#999999", textColor: "#ffffff" },
  { id: L.fyi, name: "FYI", type: "user", color: "#2da2bb", textColor: "#ffffff" },
  { id: L.lumen, name: "Projects/Lumen Portal", type: "user", color: "#a479e2", textColor: "#ffffff" },
  { id: L.team, name: "Team", type: "user", color: "#3c78d8", textColor: "#ffffff" },
];

const ME = "Jordan Avery <jordan@northwind.studio>";
// [id, thread, from, subject, snippet, minsAgo, unread, starred, important, attach, labels, category]
const RAW = [
  ["m01", "t01", "Priya Raman <priya@lumenhealth.co>", "Patient portal — revised scope before Thursday's board review?", "Hi Jordan, the board moved our review up to Thursday. Could you send a revised scope that splits the appointment scheduler into its own phase, plus a rough timeline?", 12, true, true, true, true, [L.needs, L.clients], "work"],
  ["m02", "t02", "Marcus Bell <marcus.bell@halcyonfreight.com>", "Re: Dispatch dashboard — UAT feedback round 2", "Thanks for the quick turnaround. Drivers love the new route view. Two small things from the ops team: the export button and the date filter on mobile.", 41, true, false, true, true, [L.needs, L.clients], "work"],
  ["m02a", "t02", "Marcus Bell <marcus.bell@halcyonfreight.com>", "Dispatch dashboard — UAT feedback", "Attached is the first round of UAT notes from the Tacoma depot.", 60 * 26, false, false, false, true, [L.clients], "work"],
  ["m03", "t03", "Elena Voss <elena@cobaltandpine.com>", "Contract countersigned — kickoff Monday?", "Great news: legal signed off this morning and the countersigned SOW is attached. Does Monday at 10am work for the kickoff call?", 95, true, false, false, true, [L.clients], "work"],
  ["m04", "t04", "Sam Okafor <sam@northwind.studio>", "Homepage hero — v3 mocks ready for review", "Pushed v3 of the Cobalt & Pine hero to the shared board. Went with the warmer palette you suggested; mobile variants are in the second frame.", 140, false, true, false, false, [L.team], "work"],
  ["m05", "t05", "Brightline Analytics <billing@brightline-analytics.io>", "Your October invoice #BL-20481 is ready", "Invoice #BL-20481 for $349.00 is now available. Payment will be charged to the card ending 4417 on October 20.", 185, false, false, false, true, [L.invoices], "financial"],
  ["m06", "t06", "Aisha Patel <aisha@meridianlegal.co>", "Following up: NDA for the Meridian rebrand", "Just bumping this to the top of your inbox. Once the NDA is back we can share the brand audit and get you a brief by end of week.", 230, true, false, true, false, [L.needs, L.clients], "work"],
  ["m07", "t07", "The Pixel Ledger <hello@pixelledger.news>", "Issue #142: Variable fonts in production, the honest version", "This week: what we learned shipping variable fonts to 2M users, a teardown of three agency sites, and the tools we keep coming back to.", 290, false, false, false, false, [L.news], "newsletter"],
  ["m08", "t08", "Daniel Kim <daniel@fernway.app>", "Quick question about Northwind's design process", "Hi Jordan, I noticed Northwind Studio works with healthcare clients. We help agencies 3x their pipeline with AI-personalised outbound...", 340, false, false, false, false, [L.cold], "cold_outreach"],
  ["m09", "t09", "Ravi Shah <ravi@tallgrasscap.com>", "Intro: Jordan <> Mei (Orchard Robotics)", "Jordan, meet Mei, who runs product at Orchard Robotics. They're rebuilding their marketing site ahead of a Series B and I told her you're the person to talk to.", 420, false, true, true, false, [], "work"],
  ["m10", "t10", "Kiln Hosting <alerts@kilnhost.io>", "Deploy succeeded: lumen-portal-staging", "Build #482 deployed to lumen-portal-staging in 1m 54s. 0 warnings. Preview URL is ready.", 510, false, false, false, false, [L.fyi, L.lumen], "notification"],
  ["m11", "t11", "Mei Lin <mei@orchardrobotics.com>", "Re: Intro — site rebuild ahead of our Series B", "Thanks Ravi! Jordan, would love to find 30 minutes next week. We're aiming to launch the new site by mid-January.", 60 * 20, false, false, false, false, [L.awaiting], "work"],
  ["m12", "t12", "Paperline Payroll <no-reply@paperline.io>", "Payroll for October 15 has been approved", "Your payroll run for 4 team members has been approved and will be deposited on October 15.", 60 * 23, false, false, false, false, [L.fyi], "financial"],
  ["m13", "t13", "Jenna Brooks <jenna@cobaltandpine.com>", "Brand guidelines PDF + logo files", "As promised, here are the brand guidelines and the full logo package (SVG + PNG). Let me know if the team needs anything else.", 60 * 30, false, true, false, true, [L.clients], "work"],
  ["m14", "t14", "Tomás Rivera <tomas@quarrystudio.co>", "Freelance availability for November", "Hey Jordan! I've got about 15 hours a week free through November if you need extra hands on front-end or motion.", 60 * 44, false, false, false, false, [], "personal"],
  ["m15", "t15", "UX Brief <digest@uxbrief.com>", "The state of design systems in 2026", "Our annual survey is out: 1,800 teams on tokens, theming and what actually gets adopted.", 60 * 50, false, false, false, false, [L.news], "newsletter"],
  ["m16", "t16", "Owen Price <owen@halcyonfreight.com>", "Invoice NW-1047 approved — payment scheduled Friday", "Hi Jordan, finance approved invoice NW-1047. Payment is scheduled for this Friday via ACH.", 60 * 70, false, false, false, false, [L.clients, L.invoices], "financial"],
  ["m17", "t17", "Leah Morgan <leah@studiofinch.co>", "Coffee next week?", "It's been ages! Are you free for coffee near the studio next Tuesday or Wednesday morning?", 60 * 76, false, false, false, false, [], "personal"],
  ["m18", "t18", "Nora Walsh <nora@lumenhealth.co>", "Accessibility audit results", "Sharing the WCAG audit from our compliance team. Mostly good news. Three contrast issues on the intake form are the main items.", 60 * 96, false, false, false, true, [L.clients, L.lumen], "work"],
];

export const emails = () => RAW.map(([id, threadId, from, subject, snippet, mins, unread, starred, important, attach, labels, category]) => {
  const labelIds = ["INBOX", ...(unread ? ["UNREAD"] : []), ...(starred ? ["STARRED"] : []), ...(important ? ["IMPORTANT"] : []), ...labels];
  return {
    id: "19a2" + id.padEnd(5, "0") + "c7e1d", threadId: "19a2" + threadId + "000b4f2", from, subject, to: ME, date: iso(mins), snippet, labelIds,
    isUnread: unread, isStarred: starred, isImportant: important, hasAttachment: attach,
    processingStatus: "processed", lastProcessedAt: iso(Math.max(mins - 1, 0)), totalExecutions: 2, rulesMatched: labels.length ? 2 : 1,
    totalActionsExecuted: labels.length + 1, hasUndoableActions: true, aiCategory: category, aiConfidence: 0.94, gmailAccountId: GMAIL_ACCOUNT_ID,
  };
});
export const eid = (short) => "19a2" + short.padEnd(5, "0") + "c7e1d";
export const tid = (short) => "19a2" + short + "000b4f2";

export const PRIYA_HTML = `<div style="font-family:Inter,Arial,sans-serif;font-size:14px;line-height:1.6">
<p style="margin:0 0 12px">Hi Jordan,</p>
<p style="margin:0 0 12px">Quick heads-up: our board moved the digital roadmap review up to <strong>this Thursday</strong>, so I'd love to bring them an updated plan for the patient portal.</p>
<p style="margin:0 0 12px">Two things would really help:</p>
<ol style="margin:0 0 12px;padding-left:22px">
<li><strong>Revised scope</strong> that splits the appointment scheduler into its own phase. Our IT team needs another few weeks on the EHR integration, and I don't want it to hold up the rest of the launch.</li>
<li><strong>A rough timeline</strong> for Phase 1 (patient profile, messaging, billing) vs. Phase 2 (scheduler). Even ranges are fine for now.</li>
</ol>
<p style="margin:0 0 12px">I've attached the notes from our IT sync, including their integration estimate. If it's easier to walk through live, I'm free Wednesday after 2pm.</p>
<p style="margin:0 0 12px">Thanks so much, I know it's a quick turnaround!</p>
<p style="margin:0 0 12px">Best,<br/>Priya</p>
<p style="color:#6b7280;font-size:12px">Priya Raman · Director of Digital Experience<br/>Lumen Health · (415) 555-0142</p>
</div>`;

export const BODIES = {
  m02: `<p style="margin:0 0 12px">Hi Jordan,</p><p style="margin:0 0 12px">Thanks for the quick turnaround on round 1. Drivers love the new route view, and dispatch says it's already saving them time on morning assignments.</p><p style="margin:0 0 12px">Two small things from the ops team:</p><ul style="margin:0 0 12px;padding-left:22px"><li>The <strong>CSV export</strong> drops the trailer ID column</li><li>The <strong>date filter</strong> overlaps the map on smaller phones</li></ul><p style="margin:0 0 12px">Screenshots attached. Could we get these into the Friday build?</p><p style="margin:0 0 12px">Cheers,<br/>Marcus</p>`,
  m03: `<p style="margin:0 0 12px">Hi Jordan,</p><p style="margin:0 0 12px">Great news: legal signed off this morning and the countersigned SOW is attached.</p><p style="margin:0 0 12px">Does <strong>Monday at 10am</strong> work for the kickoff call? I'll bring Jenna from brand and our CMO.</p><p style="margin:0 0 12px">Elena</p>`,
};

export const HISTORY_PRIYA = {
  history: [
    {
      id: "e7c1a9d2-1111-4c2b-9a1e-000000000001", rule_id: "r-needs-response", rule_name: "Needs Response (auto-tracking)", matched: true,
      actions_executed: [{ type: "apply_label", value: "Needs Response" }, { type: "track_response_needed" }, { type: "star" }],
      matched_conditions: ["new_message_direction (inbound) → ✓", "ai_requires_response_detected (true) → ✓", "sender_is_contact (true) → ✓"],
      failed_conditions: [],
      ai_reasoning: "Rule \"Needs Response (auto-tracking)\" matched this email. AI detected this email requires a response Urgency level: high Sentiment: positive Summary: Client asks for a revised portal scope (scheduler split into Phase 2) and a timeline before Thursday's board review.",
      ai_analysis: { category: "work", urgency: "high", sentiment: "positive", confidence: 0.96, requiresResponse: true, expectsReply: true, servedBy: "ai", summary: "Client asks for a revised portal scope (scheduler split into Phase 2) and timeline before Thursday's board review." },
      created_at: iso(11), email_rules: { id: "r-needs-response", name: "Needs Response (auto-tracking)", description: "Track emails that need a reply" },
    },
    {
      id: "e7c1a9d2-1111-4c2b-9a1e-000000000002", rule_id: "r-clients", rule_name: "Label client emails", matched: true,
      actions_executed: [{ type: "apply_label", value: "Clients" }, { type: "apply_label", value: "Projects/Lumen Portal" }, { type: "mark_important" }],
      matched_conditions: ["from contains \"lumenhealth.co\" → ✓", "ai_category equals \"work\" → ✓"],
      failed_conditions: [],
      ai_reasoning: "Rule \"Label client emails\" matched this email. AI classified this email as: work Urgency level: high",
      ai_analysis: { category: "work", urgency: "high", sentiment: "positive", confidence: 0.96, requiresResponse: true, expectsReply: true, servedBy: "ai" },
      created_at: iso(11), email_rules: { id: "r-clients", name: "Label client emails", description: "Clients + project labels" },
    },
  ],
  summary: { totalExecutions: 2, rulesMatched: 2, totalActions: 6 },
};

export const AI_REPLY = `Hi Priya,

Thanks for the heads-up on Thursday, happy to get this turned around for you.

Splitting the scheduler into its own phase makes a lot of sense given the EHR timeline. Here's what I'm thinking:

• Phase 1 (patient profile, secure messaging, billing): 7–8 weeks, launching mid-December
• Phase 2 (appointment scheduler + EHR integration): 5–6 weeks, kicking off once your IT team confirms the API spec

I'll send over the revised scope doc with a timeline graphic by end of day Wednesday so you have it well before the board review. Wednesday at 2:30 also works if you'd like to walk through it live first.

Best,
Jordan`;

export const userGmailAccounts = [{
  id: GMAIL_ACCOUNT_ID, user_id: USER_ID, workspace_id: WORKSPACE_ID, gmail_email: "jordan@northwind.studio", account_name: "Northwind Studio", sender_name: "Jordan Avery",
  is_active: true, is_primary: true, needs_reauth: false, last_sync_at: iso(1), created_at: "2026-03-02T15:00:00Z",
}];
