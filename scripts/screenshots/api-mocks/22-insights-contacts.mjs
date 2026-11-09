import { USER_ID, WORKSPACE_ID, iso } from "../persona.mjs";
import { PEOPLE } from "../scripts/insights-data.mjs";
const CATS = ["Family", "Friend", "Colleague", "Client", "Vendor", "Partner", "Acquaintance", "VIP"];
const catId = (n) => `7ca70000-0000-4000-8000-00000000000${CATS.indexOf(n) + 1}`;
const categories = [
  ...CATS.map((n) => ({ id: catId(n), user_id: null, workspace_id: null, name: n, is_system: true, created_by: null, created_at: "2026-03-02T15:00:00Z", updated_at: "2026-03-02T15:00:00Z", scope: "system" })),
  { id: "7ca70000-0000-4000-8000-000000000010", user_id: USER_ID, workspace_id: WORKSPACE_ID, name: "Investor", is_system: false, created_by: USER_ID, created_at: "2026-05-02T15:00:00Z", updated_at: "2026-05-02T15:00:00Z", scope: "workspace" },
];
const ROLE_CAT = { client: "Client", partner: "Partner", vendor: "Vendor", prospect: "Acquaintance", team: "Colleague", investor: "VIP" };
const NOTES = {
  "Priya Raman": "Lead on the Lumen Health patient portal redesign. Prefers concise updates, Tuesday check-ins.",
  "Marcus Bell": "Halcyon Freight ops dashboard, phase 2 kicking off in November.",
  "Samuel Reyes": "Seed investor. Monthly update goes out first Monday.",
};
// [sent, received, lastMinsAgo, rel, status, source]
const STATS = [
  [148, 173, 22, "established", "allowlist", "sent_scan"], [96, 121, 75, "established", "allowlist", "sent_scan"],
  [71, 88, 190, "established", "normal", "sent_scan"], [54, 62, 340, "established", "normal", "sent_scan"],
  [38, 45, 600, "established", "normal", "sent_scan"], [22, 31, 1300, "established", "normal", "received_scan"],
  [4, 9, 1500, "warm", "normal", "received_scan"], [212, 240, 45, "established", "allowlist", "sent_scan"],
  [187, 199, 110, "established", "allowlist", "sent_scan"], [19, 24, 2600, "established", "normal", "sent_scan"],
  [33, 40, 2900, "established", "allowlist", "manual"], [2, 3, 3100, "warm", "normal", "received_scan"],
  [27, 30, 4300, "established", "normal", "sent_scan"], [12, 18, 5200, "established", "normal", "received_scan"],
  [15, 17, 6100, "established", "normal", "sent_scan"], [0, 4, 7000, "cold", "normal", "received_scan"],
  [41, 52, 7900, "established", "normal", "sent_scan"], [18, 21, 8600, "established", "allowlist", "manual"],
  [9, 14, 10100, "established", "normal", "sent_scan"], [13, 16, 12000, "established", "normal", "import"],
];
export const contacts = PEOPLE.map(([name, email, , role], i) => {
  const [s, r, last, rel, status, source] = STATS[i];
  const cat = ROLE_CAT[role];
  const [first, ...rest] = name.split(" ");
  return {
    id: `5c0a0000-0000-4000-8000-0000000000${String(i + 1).padStart(2, "0")}`, user_id: USER_ID, workspace_id: WORKSPACE_ID,
    entry_type: "email", value: email, value_normalized: email, first_name: first, last_name: rest.join(" "), display_name: name,
    notes: NOTES[name] || null, status, priority_level: status === "allowlist" ? 90 : 50, relationship_type: rel, source,
    emails_sent: s, emails_received: r, total_interactions: s + r, first_interaction_at: iso(60 * 24 * (120 + i * 9)), last_interaction_at: iso(last),
    visibility_scope: role === "team" || role === "client" ? "workspace" : "private",
    contact_category_id: cat === "VIP" && role === "investor" ? categories[8].id : catId(cat),
    contact_category: role === "investor" ? { id: categories[8].id, name: "Investor", is_system: false } : { id: catId(cat), name: cat, is_system: true },
    created_by: USER_ID, created_at: iso(60 * 24 * (110 + i * 8)), updated_at: iso(last),
  };
}).sort((a, b) => new Date(b.last_interaction_at) - new Date(a.last_interaction_at));
// add a blocked cold-email domain to show denylist
contacts.push({ ...contacts[contacts.length - 1], id: "5c0a0000-0000-4000-8000-000000000099", entry_type: "domain", value: "growthhackers-outreach.net", value_normalized: "growthhackers-outreach.net", first_name: null, last_name: null, display_name: "Cold outreach domain", notes: "Blocked automatically after 14 cold pitches.", status: "denylist", priority_level: 1, relationship_type: "cold", source: "received_scan", emails_sent: 0, emails_received: 14, total_interactions: 14, contact_category_id: null, contact_category: null, last_interaction_at: iso(16000) });
const counts = { total: 21, allowlist: 7, denylist: 1, normal: 13, autoDetected: 15, manual: 2 };
export default {
  "/api/contacts": (u) => (u.searchParams.get("counts") === "true" ? { counts } : { contacts, total: contacts.length, hasMore: false }),
  "/api/contacts/categories": { categories, total: categories.length },
  "/api/contacts/sync": { status: "completed", lastSyncAt: iso(14), contactsFound: 21, emailsProcessed: 4182 },
  "/api/contacts/5c0a0000-*": (u) => ({ contact: contacts.find((c) => u.pathname.endsWith(c.id)) || contacts[0] }),
};
