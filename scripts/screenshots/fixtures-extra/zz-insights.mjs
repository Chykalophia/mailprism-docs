import inbox from "./inbox.mjs";
import tracking from "./tracking.mjs";
import { USER_ID, WORKSPACE_ID, iso } from "../persona.mjs";
import { PEOPLE } from "../scripts/insights-data.mjs";
const prev = tracking.tables?.email_response_tracking || inbox.tables?.email_response_tracking;

// ~30 days of tracked conversations for /mail/replies/analytics
function buildTracking() {
  const rows = [];
  let n = 0;
  const ext = PEOPLE.filter((p) => p[3] !== "team");
  for (let d = 29; d >= 0; d--) {
    const per = 5 + ((d * 7) % 5) + (d < 10 ? 2 : 0);
    for (let k = 0; k < per; k++) {
      const p = ext[(d * 3 + k * 5) % ext.length];
      const created = d * 1440 + 60 + k * 97;
      const r = (d * 13 + k * 7) % 20;
      let state = "resolved", resolvedAfter;
      // response time buckets: mostly fast
      resolvedAfter = [25, 40, 50, 90, 130, 170, 200, 260, 330, 480, 600, 900, 1200, 1500, 2100, 2600, 3200, 45, 75, 5000][r];
      if (d < 3 && k % 3 === 0) state = "needs_response";
      else if (d < 4 && k % 4 === 1) state = "awaiting_reply";
      else if (d < 1) state = "needs_response";
      if (resolvedAfter > created && state === "resolved") resolvedAfter = Math.floor(created / 2);
      rows.push({
        id: `rt-${++n}`, user_id: USER_ID, workspace_id: WORKSPACE_ID, current_state: state,
        email_from: `${p[0]} <${p[1]}>`, created_at: iso(created), state_entered_at: iso(state === "resolved" ? created - resolvedAfter : created - 10),
        resolved_at: state === "resolved" ? iso(created - resolvedAfter) : null,
      });
    }
  }
  return rows;
}
export const TRACKING = buildTracking();

export default {
  tables: {
    email_response_tracking: (sp) => {
      // Only the /mail/replies/analytics hook selects exactly these columns.
      const sel = (sp.get("select") || "").replace(/\s+/g, "");
      if (sel === "id,current_state,email_from,state_entered_at,created_at,resolved_at") return TRACKING;
      return typeof prev === "function" ? prev(sp) : prev || [];
    },
  },
};
