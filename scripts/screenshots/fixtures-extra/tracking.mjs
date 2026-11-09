// "tracking" group: dashboard stats/sparklines/activity + replies SSR list.
import { USER_ID, GMAIL_ACCOUNT_ID, LABEL_IDS } from "../persona.mjs";
import { threads, executions, RULES, snapshots } from "../scripts/tracking-data.mjs";

// Interprets the applyStateFilter() query shape (or=..., current_state=...) used by
// lib/services/response-tracking/state-filter.ts.
function trackingRows(sp) {
  const or = sp.get("or") || "";
  const cs = sp.get("current_state") || "";
  const tl = sp.get("tracking_label_config_id") || "";
  let rows = threads;
  if (or.includes(LABEL_IDS.needs_response) && !or.includes(LABEL_IDS.awaiting_reply)) rows = rows.filter((r) => r.current_state === "needs_action");
  else if (or.includes(LABEL_IDS.awaiting_reply) && !or.includes(LABEL_IDS.needs_response)) rows = rows.filter((r) => r.current_state === "awaiting_reply");
  else if (/^in\./.test(cs) && cs.includes("needs_action")) rows = rows.filter((r) => r.current_state === "needs_action");
  if (tl.startsWith("eq.")) rows = rows.filter((r) => r.tracking_label_config_id === tl.slice(3));
  return [...rows].sort((a, b) => b.state_entered_at.localeCompare(a.state_entered_at));
}
const COUNTS = { needs_action: 9, awaiting_reply: 6, pending: 2, resolved: 47 };
export default {
  tables: {
    email_response_tracking: trackingRows,
    rule_execution_history: executions,
    email_rules: RULES,
    dashboard_stat_snapshots: snapshots,
    user_gmail_accounts: [{ id: GMAIL_ACCOUNT_ID, user_id: USER_ID, gmail_email: "jordan@northwind.studio", is_primary: true, needs_reauth: false }],
  },
  counts: {
    // HEAD count queries; make "resolved"/"all" totals look like a lived-in account.
    email_response_tracking: (sp) => {
      const or = sp.get("or") || "", cs = sp.get("current_state") || "";
      if (cs === "eq.resolved") return COUNTS.resolved;
      if (cs === "eq.pending") return COUNTS.pending;
      if (or.includes("tracking_label_config_id.in.")) return 64;
      return trackingRows(sp).length;
    },
    rule_execution_history: 38,
  },
};
