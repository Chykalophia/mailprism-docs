import crypto from "node:crypto";
import { WORKSPACE_ID, GMAIL_ACCOUNT_ID, LABEL_IDS } from "./persona.mjs";
const b64 = (o) => Buffer.from(JSON.stringify(o)).toString("base64url");
export const USER_ID = "8f2c1a4e-5b6d-4c7e-9f10-2a3b4c5d6e7f";
const now = Math.floor(Date.now() / 1000);
const claims = { sub: USER_ID, aud: "authenticated", role: "authenticated", email: "jordan@northwind.studio", aal: "aal1", amr: [{ method: "oauth", timestamp: now }], session_id: "0b9e2c1d-7a4f-4e3b-8c2d-1f0e9d8c7b6a", iat: now, exp: now + 86400 * 30, iss: "http://127.0.0.1:54321/auth/v1" };
const h = b64({ alg: "HS256", typ: "JWT" }), pl = b64(claims);
export const ACCESS_TOKEN = `${h}.${pl}.` + crypto.createHmac("sha256", "demo-secret").update(`${h}.${pl}`).digest("base64url");
const user = {
  id: USER_ID, aud: "authenticated", role: "authenticated", email: "jordan@northwind.studio", email_confirmed_at: "2026-03-02T15:00:00Z",
  app_metadata: { provider: "google", providers: ["google"] },
  user_metadata: { full_name: "Jordan Avery", name: "Jordan Avery", avatar_url: null },
  created_at: "2026-03-02T15:00:00Z", updated_at: "2026-10-15T15:00:00Z", factors: [],
};
const session = () => ({ access_token: ACCESS_TOKEN, refresh_token: "demo-refresh", token_type: "bearer", expires_in: 86400 * 30, expires_at: now + 86400 * 30, user });
export default {
  user, session,
  rpc: {},
  counts: {},
  singleDefaults: {},
  tables: {
    workspace_members: [{ workspace_id: WORKSPACE_ID, user_id: USER_ID, role: "owner", status: "active", created_at: "2026-03-02T15:00:00Z" }],
    workspaces: [{ id: WORKSPACE_ID, name: "Northwind Studio", owner_id: USER_ID, subscription_tier: "pro", subscription_status: "active", icon: "fa-solid fa-building", color: "#8B5CF6", settings: {}, created_at: "2026-03-02T15:00:00Z", updated_at: "2026-10-15T15:00:00Z" }],
    gmail_accounts: [{ id: GMAIL_ACCOUNT_ID, user_id: USER_ID, workspace_id: WORKSPACE_ID, gmail_email: "jordan@northwind.studio", email: "jordan@northwind.studio", display_name: "Jordan Avery", is_active: true, is_primary: true, status: "active", created_at: "2026-03-02T15:00:00Z" }],
    tracking_label_configs: [
      { id: LABEL_IDS.needs_response, workspace_id: WORKSPACE_ID, system_label_type: "needs_response", name: "Needs Response", color: "#EF4444", is_system: true },
      { id: LABEL_IDS.awaiting_reply, workspace_id: WORKSPACE_ID, system_label_type: "awaiting_reply", name: "Awaiting Reply", color: "#F59E0B", is_system: true },
    ],

    users: [{ id: USER_ID, email: user.email, full_name: "Jordan Avery", name: "Jordan Avery", onboarding_completed: true, tracking_profile_onboarding_status: "completed", subscription_tier: "pro", subscription_status: "active", ai_consent_given: true, ai_processing_consent: true, automation_enabled: true, last_processed_at: new Date().toISOString(), emails_processed_this_month: 4182, ai_analyses_this_month: 1290, created_at: "2026-03-02T15:00:00Z" }],
  },
};
