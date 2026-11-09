import { USER_ID, iso } from "../persona.mjs";
const qa = (n, name, description, keyboard_shortcut, action_type, action_config, use_count, is_preset, preset_key) => ({
  id: `9a000000-0000-4000-8000-${String(n).padStart(12, "0")}`, user_id: USER_ID, name, description, keyboard_shortcut, action_type,
  action_config, use_count, is_enabled: true, sort_order: n, is_preset, preset_key, created_at: iso(60 * 24 * 90), updated_at: iso(60 * 24 * 3),
});
export default {
  tables: {
    quick_actions: [
      qa(0, "Archive", "Move email to archive", "e", "archive", {}, 1842, true, "archive"),
      qa(1, "Delete", "Move email to trash", "shift+3", "delete", {}, 211, true, "delete"),
      qa(2, "Mark as Read", "Mark email as read", "shift+i", "mark-read", {}, 960, true, "mark-read"),
      qa(3, "Star", "Add star to email", "s", "star", {}, 388, true, "star"),
      qa(4, "Forward", "Forward email", "f", "forward", {}, 74, true, "forward"),
      qa(5, "File to Finance", "Label as Finance/Receipts", "g+f", "apply-label", { labelId: "Label_12", labelName: "Finance/Receipts" }, 129, false, null),
      qa(6, "Send to bookkeeping", "Forward to books@northwind.studio", "shift+b", "forward", { forwardAddress: "books@northwind.studio" }, 46, false, null),
      qa(7, "Snooze until tomorrow", "Hide until 9 AM tomorrow", "z", "snooze", { snoozeDuration: 960 }, 58, false, null),
    ],
    canned_responses: [
      { id: "ca000000-0000-4000-8000-000000000001", user_id: USER_ID, name: "Thanks, on it", subject: null, body: "Thanks {{first_name}}, got it. I'll take a look and get back to you by end of day tomorrow.\n\nJordan", shortcut: "/onit", category: "general", created_at: iso(60 * 24 * 40), updated_at: iso(60 * 24 * 4) },
      { id: "ca000000-0000-4000-8000-000000000002", user_id: USER_ID, name: "Schedule a call", subject: null, body: "Happy to talk this through. Here's my calendar, pick any 30-minute slot that works: northwind.studio/meet\n\nJordan", shortcut: "/call", category: "meetings", created_at: iso(60 * 24 * 30), updated_at: iso(60 * 24 * 9) },
      { id: "ca000000-0000-4000-8000-000000000003", user_id: USER_ID, name: "Invoice received", subject: "Re: Invoice", body: "Thanks, invoice received. Our team pays on net-30 terms, so you'll see it by {{due_date}}.", shortcut: "/inv", category: "finance", created_at: iso(60 * 24 * 20), updated_at: iso(60 * 24 * 20) },
      { id: "ca000000-0000-4000-8000-000000000004", user_id: USER_ID, name: "Not a fit right now", subject: null, body: "Thanks for reaching out. We're not looking for this right now, but I'll keep your details on file.", shortcut: "/pass", category: "sales", created_at: iso(60 * 24 * 12), updated_at: iso(60 * 24 * 12) },
    ],
    email_signatures: [
      { id: "5a000000-0000-4000-8000-000000000001", user_id: USER_ID, name: "Work", content: "Jordan Avery\nFounder, Northwind Studio\nnorthwind.studio · (415) 555-0186", is_default: true, include_in_replies: true, include_in_new: true, created_at: iso(60 * 24 * 100), updated_at: iso(60 * 24 * 10) },
      { id: "5a000000-0000-4000-8000-000000000002", user_id: USER_ID, name: "Short", content: "Jordan", is_default: false, include_in_replies: true, include_in_new: false, created_at: iso(60 * 24 * 60), updated_at: iso(60 * 24 * 60) },
    ],
  },
};
