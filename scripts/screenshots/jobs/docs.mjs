// Docs screenshot jobs. `node jobs/docs.mjs > jobs/docs.json`
// name = path under static/img/screens (without .png). dark:true also shoots a -dark variant.
const RULE = "7e1a0c00-0000-4000-8000-000000000001";
const CONTACT = "5c0a0000-0000-4000-8000-000000000001";
const EMAIL = "19a2m0100c7e1d";
const THREAD = "19a2t01000b4f2";
const main = "main";

const j = [];
const add = (name, route, o = {}) => j.push({ name, route, ...o });

// Getting started
add("getting-started/dashboard", "/dashboard", { dark: true });
add("getting-started/onboarding", "/onboarding");
add("getting-started/connecting-gmail", "/settings/gmail");
add("getting-started/sign-in", "/signin", { anon: true });
add("getting-started/sign-up", "/signup", { anon: true });

// Inbox
add("inbox/overview", "/mail/inbox", { dark: true });
add("inbox/email-detail-page", `/emails/${EMAIL}`);
add("inbox/thread-page", `/threads/${THREAD}`);
add("inbox/bulk-select", "/mail/inbox", { steps: [{ click: 'input[type="checkbox"] >> nth=1', force: true }, { click: 'input[type="checkbox"] >> nth=2', force: true }, { click: 'input[type="checkbox"] >> nth=3', force: true }] });
add("inbox/compose", "/mail/inbox", { steps: [{ click: 'button:has-text("Compose")', wait: 2000 }] });
add("inbox/keyboard-shortcuts", "/mail/inbox", { steps: [{ press: "Shift+?", wait: 1500 }] });
add("inbox/more-menu", "/mail/inbox", { steps: [{ click: 'button:has-text("More") >> nth=-1', wait: 1200 }] });
add("inbox/view-replies", "/mail/inbox?view=replies", { dark: true });
add("inbox/view-later", "/mail/inbox?view=later");
add("inbox/view-new-senders", "/mail/inbox?view=screener");
add("inbox/split-newsletters", "/mail/inbox", { steps: [{ click: 'button:has-text("Newsletters") >> nth=0', wait: 1500 }] });
add("inbox/view-options", "/mail/inbox", { steps: [{ click: 'button:has-text("View")', wait: 1200 }] });
add("inbox/why-chip", "/mail/inbox", { steps: [{ eval: 'document.querySelectorAll(\'button[aria-label="Needs you. Why?"]\')[1].click()', wait: 1200 }] });
add("inbox/details-drawer", "/mail/inbox", { steps: [{ click: 'button:has-text("Details")', wait: 1500 }] });
add("inbox/later-menu", "/mail/inbox", { steps: [{ click: 'button:has-text("Later") >> nth=-1', wait: 1200 }] });
add("inbox/bundle-open", "/mail/inbox", { steps: [{ scroll: 'text=Done all', wait: 500 }, { click: 'button:has-text("Updates") >> nth=-1', wait: 1200 }] });
add("inbox/bundle-menu", "/mail/inbox", { steps: [{ scroll: 'text=Done all', wait: 500 }, { click: 'button[aria-label="Choose what Done all does"]', wait: 1200 }] });
add("inbox/settings-inbox", "/settings/inbox", { full: true });
add("inbox/phone", "/mail/inbox", { w: 390, h: 844 });
add("inbox/unsubscribe", "/unsubscribe");
add("inbox/unsubscribe-history", "/unsubscribe", { steps: [{ click: 'button:has-text("History")', wait: 2000 }] });
add("inbox/toolbar-settings", "/settings/toolbar");
add("inbox/quick-actions", "/settings/quick-actions");
add("inbox/command-palette", "/dashboard", { steps: [{ press: "Control+k", wait: 1500 }] });

// Replies / tracking
add("tracking/replies", "/mail/replies", { dark: true });
add("tracking/replies-analytics", "/mail/replies/analytics");
add("tracking/settings", "/settings/tracking");
add("tracking/profile", "/settings/tracking-profile");
add("tracking/nudges", "/settings/nudges");
add("tracking/auto-responder", "/settings/auto-responder");

// Rules
add("rules/hub", "/rules", { dark: true });
add("rules/drafter", "/rules/new", { wait: 8000 });
add("rules/builder", "/rules/new", { wait: 8000, steps: [{ press: "Escape", wait: 1200 }] });
add("rules/edit", `/rules/${RULE}/edit`, { wait: 8000 });
add("rules/detail", `/rules/${RULE}`);
add("rules/analytics", `/rules/${RULE}/analytics`);
add("rules/library", "/rules/library");
add("rules/suggestions", "/suggestions");
add("rules/hub-history", "/rules", { steps: [{ click: 'button:has-text("History")', wait: 2000 }] });
add("rules/hub-builtin", "/rules", { steps: [{ click: 'button:has-text("Built-in")', wait: 2000 }] });
add("rules/hub-more-menu", "/rules", { steps: [{ click: 'button:has-text("More") >> nth=0', wait: 1200 }] });
add("rules/defaults-safety", "/settings/rule-defaults-safety");
add("rules/pre-filter", "/settings/pre-filter-rules");

// Analytics
add("analytics/overview", "/analytics");
add("analytics/rule-logs", "/dashboard/rule-logs");

// Contacts
add("contacts/list", "/contacts");
add("contacts/detail", `/contacts/${CONTACT}`);
add("contacts/new", "/contacts/new");
add("contacts/import", "/contacts/import");
add("contacts/settings", "/settings/contacts");

// AI
add("ai/categories", "/settings/ai-categories");
add("ai/categories-discover", "/settings/ai-categories", { steps: [{ click: 'button:has-text("Discover")', wait: 2000 }] });
add("ai/categories-metrics", "/settings/ai-categories", { steps: [{ click: 'button:has-text("Metrics")', wait: 2500 }] });
add("ai/writing-profiles", "/settings/profiles");
add("ai/privacy", "/settings/privacy");
add("ai/corrections", "/settings/privacy/ai-corrections");
add("ai/byok-anthropic", "/settings/integrations/anthropic");

// Productivity
add("productivity/templates", "/settings/templates");

// Integrations
add("integrations/overview", "/settings/integrations");
add("integrations/calendar", "/settings/calendar");
add("integrations/slack", "/settings/integrations/slack");
add("integrations/webhooks", "/settings/integrations/webhooks");
add("integrations/zapier", "/settings/integrations/zapier");
add("integrations/clickup", "/settings/integrations/clickup");
add("integrations/clickup-routing", "/settings/clickup-routing");
add("integrations/forwarding", "/settings/forwarding");

// Account
add("account/account", "/settings/account");
add("account/security", "/settings/security");
add("account/appearance", "/settings/appearance");
add("account/billing", "/settings/billing", { h: 760 });
add("account/gmail-account", "/settings/gmail", { steps: [{ click: 'text=Northwind Studio >> nth=1', wait: 3000 }] });
add("account/date-time", "/settings/date-time");
add("account/dashboard-prefs", "/settings/dashboard-prefs");
add("account/workspace", "/settings/workspace");
add("account/workspace-invite", "/settings/workspace/invite");
add("account/workspace-roles", "/settings/workspace/roles");
add("account/learning-center", "/settings/learning-center");
add("account/settings-lab", "/settings/lab");

// Notifications
add("notifications/bell", "/dashboard", { steps: [{ click: 'button[aria-label*="otification" i]', wait: 1500 }] });
add("notifications/page", "/dashboard/notifications");
add("notifications/settings", "/settings/notifications");
add("notifications/settings-categories", "/settings/notifications", { steps: [{ click: 'button:has-text("Show advanced settings")', wait: 1200 }, { scroll: 'text=Category Preferences', wait: 600 }] });

// Help
add("help/help-center", "/help");

const out = [];
for (const x of j) {
  out.push(x);
  if (x.dark) out.push({ ...x, theme: "dark" });
}
console.log(JSON.stringify(out, null, 1));
