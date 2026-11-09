import { userGmailAccounts, tid } from "../scripts/inbox-data.mjs";
import { USER_ID, WORKSPACE_ID } from "../persona.mjs";
const tracking = { [tid("t01")]: "needs_response", [tid("t02")]: "needs_response", [tid("t06")]: "needs_response", [tid("t11")]: "awaiting_reply" };
export default {
  tables: {
    user_gmail_accounts: userGmailAccounts,
    email_response_tracking: (sp) => {
      const t = (sp.get("thread_id") || "").replace(/^eq\./, "");
      return tracking[t] ? [{ thread_id: t, current_state: tracking[t], user_id: USER_ID, workspace_id: WORKSPACE_ID }] : [];
    },
  },
  rpc: {
    get_gmail_account_limit_for_workspace: [{ current_count: 1, limit_count: 5, tier: "pro", can_add_more: true }],
  },
};
