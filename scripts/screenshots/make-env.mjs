// Prints a .env.local for the MailPrism app that points it at the fake Supabase.
// node make-env.mjs > ../../../MailPrism/.env.local   (back up any real one first)
import crypto from "node:crypto";
const b = (o) => Buffer.from(JSON.stringify(o)).toString("base64url");
const key = (role) => {
  const h = b({ alg: "HS256", typ: "JWT" });
  const p = b({ role, iss: "supabase-demo", exp: 4102444800 });
  return `${h}.${p}.` + crypto.createHmac("sha256", "demo-secret").update(`${h}.${p}`).digest("base64url");
};
const hex = "0123456789abcdef".repeat(4);
console.log(`NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=${key("anon")}
SUPABASE_SERVICE_ROLE_KEY=${key("service_role")}
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
GOOGLE_CLIENT_ID=demo.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=demo
STRIPE_SECRET_KEY=sk_test_demo
STRIPE_WEBHOOK_SECRET=whsec_demo
API_KEY_ENCRYPTION_KEY=${hex}
ENCRYPTION_KEY=${[...hex].reverse().join("")}
UNSUBSCRIBE_SIGNING_SECRET=demo-docs-secret
CSRF_SECRET=demo-csrf-secret-demo-csrf-secret-123456
NEXT_TELEMETRY_DISABLED=1`);
