import { WORKSPACE_ID, USER_ID } from "../persona.mjs";
export default {
  "/api/workspaces": { workspaces: [{ id: WORKSPACE_ID, name: "Northwind Studio", owner_id: USER_ID, subscription_tier: "pro", subscription_status: "active", icon: "fa-solid fa-building", color: "#8B5CF6", settings: {}, account_count: 2, member_count: 4, rule_count: 12, created_at: "2026-03-02T15:00:00Z", updated_at: "2026-10-15T15:00:00Z" }], count: 1 },
};
