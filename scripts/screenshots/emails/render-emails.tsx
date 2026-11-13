// Renders every MailPrism email from the app's own template code with fake
// sample data, writing <out>/<id>.html plus <out>/index.json (subject, from, to).
// Run from the MailPrism repo root: npx tsx <this file> <outDir>
import fs from "node:fs";
import path from "node:path";
import { generateVerificationEmail } from "@/lib/templates/verification-email";
import { generateBetaInviteEmail } from "@/lib/templates/beta-invite-email";
import { generatePaymentFailedEmail } from "@/lib/templates/payment-failed-email";
import { generateWorkspaceInvitationEmail } from "@/lib/templates/workspace-invitation-email";
import { renderEmailLayout } from "@/lib/templates/layout/email-layout";
import { TEMPLATE_DEFAULTS } from "@/lib/templates/defaults";
import { TemplateRenderer } from "@/lib/notifications/templates/template.renderer";
import {
  NotificationCategory,
  NotificationPriority,
  type Notification,
} from "@/lib/notifications/types";
import type { EmailTemplateId } from "@/lib/types/email-templates";
import { AUTH_EMAIL_TEMPLATES } from "@/lib/templates/auth-email-templates";

const out = process.argv[2] ?? "emails-out";
fs.mkdirSync(out, { recursive: true });
const APP = "https://app.mailprism.ai";
const TO = "jordan@northwind.studio";
const FROM = "MailPrism <noreply@mail.mailprism.ai>";
const index: Record<string, { subject: string; from: string; to: string }> = {};

function save(id: string, subject: string, html: string, to = TO, from = FROM) {
  fs.writeFileSync(path.join(out, `${id}.html`), html);
  index[id] = { subject, from, to };
}

function sub(text: string, vars: Record<string, string>) {
  return text.replace(/\{\{(\w+)\}\}/g, (m, k: string) => vars[k] ?? m);
}

function templated(id: EmailTemplateId, vars: Record<string, string>) {
  const d = TEMPLATE_DEFAULTS[id].defaults;
  const content = {
    subject: sub(d.subject, vars),
    heading: sub(d.heading, vars),
    bodyText: sub(d.bodyText, vars),
    ctaLabel: d.ctaLabel ? sub(d.ctaLabel, vars) : undefined,
    ctaUrl: d.ctaUrl ? sub(d.ctaUrl, vars) : undefined,
    footerText: sub(d.footerText ?? "", vars),
  };
  return { subject: content.subject, html: renderEmailLayout(content) };
}

const minsAgo = (m: number) => new Date(Date.now() - m * 60000);
let n = 0;
function notif(p: Partial<Notification> & Pick<Notification, "category" | "title" | "message">): Notification {
  n += 1;
  return {
    id: `00000000-0000-4000-8000-${String(n).padStart(12, "0")}`,
    userId: "8f2c1a4e-5b6d-4c7e-9f10-2a3b4c5d6e7f",
    priority: NotificationPriority.NORMAL,
    actionUrl: null,
    actionLabel: null,
    metadata: {},
    groupKey: null,
    groupCount: null,
    readAt: null,
    emailQueuedAt: null,
    emailSentAt: null,
    deletedAt: null,
    createdAt: minsAgo(n * 37),
    updatedAt: minsAgo(n * 37),
    ...p,
  };
}

async function main() {
  // Legacy hardcoded templates
  save(
    "forwarding-verification",
    "Verify your forwarding address for MailPrism",
    generateVerificationEmail({ recipientEmail: "ops@northwind.studio", verificationCode: "482913", expiresInMinutes: 60 }),
    "ops@northwind.studio",
  );
  save(
    "workspace-invite",
    "You're invited to join Northwind Studio on MailPrism",
    generateWorkspaceInvitationEmail({
      recipientEmail: "sam.okafor@northwind.studio",
      workspaceName: "Northwind Studio",
      role: "editor",
      inviteUrl: `${APP}/invite?token=demo`,
      expiresInDays: 7,
    }),
    "sam.okafor@northwind.studio",
  );
  save(
    "payment-failed",
    "Action Required: Your MailPrism payment failed",
    generatePaymentFailedEmail({
      userName: "Jordan",
      amountCents: 2400,
      currency: "usd",
      updatePaymentUrl: `${APP}/settings/billing`,
      supportEmail: "hello@mailprism.ai",
    }),
  );
  save(
    "beta-invite",
    "Your MailPrism Beta Invite Code",
    generateBetaInviteEmail({
      recipientEmail: "riley@cobaltandpine.co",
      inviteCode: "PRISM-7KQ2-XW9D",
      codeTypeDescription: "Early access",
      expiresInHours: 168,
      signupUrl: `${APP}/beta/invite/PRISM-7KQ2-XW9D`,
      maxUses: 1,
    }),
    "riley@cobaltandpine.co",
  );

  // Hybrid template sent in production
  const rule = templated("rule_notification", {
    userName: "Jordan",
    ruleName: "VIP clients to Slack",
    emailSubject: "Re: Lumen Health portal, revised timeline",
    actionsSummary: "Applied label Clients/Lumen, marked important, sent you this email",
    ruleUrl: `${APP}/rules/7e1a0c00-0000-4000-8000-000000000001`,
    appUrl: APP,
  });
  save("rule-notification", rule.subject, rule.html);

  // Welcome and subscription confirmation
  for (const id of ["welcome", "subscription_confirmation"] as const) {
    const t = templated(id, {
      userName: "Jordan",
      appUrl: APP,
      resetUrl: `${APP}/auth/reset-password`,
      expiresInMinutes: "60",
      planName: "Pro",
      billingPeriod: "monthly",
    });
    save(id.replace(/_/g, "-"), t.subject, t.html);
  }

  // React Email notification templates
  const r = new TemplateRenderer();
  const alert = notif({
    category: NotificationCategory.AI_INSIGHT,
    priority: NotificationPriority.HIGH,
    title: "Urgent: Halcyon Freight needs a signed SOW today",
    message:
      "Marcus Bell asked for the signed statement of work before 5 PM. MailPrism marked it Needs Response and kept it at the top of your inbox.",
    actionUrl: `${APP}/mail/inbox`,
    actionLabel: "Open email",
  });
  const a = await r.renderNotification(alert, "Jordan", TO);
  save("notification-alert", a.subject, a.html);

  const digestItems = [
    alert,
    notif({ category: NotificationCategory.RULE_EXECUTION, title: "Rule \"Newsletters to Read Later\" ran 14 times", message: "14 newsletters were labeled Read Later and archived.", actionUrl: `${APP}/dashboard/rule-logs`, actionLabel: "View rule log" }),
    notif({ category: NotificationCategory.RESPONSE_TRACKING, title: "3 emails are still awaiting a reply", message: "Priya Raman (Lumen Health), Dana Whitfield (Brightline Analytics) and 1 more have not answered in 3 days.", actionUrl: `${APP}/mail/replies`, actionLabel: "Open Replies" }),
    notif({ category: NotificationCategory.AI_INSIGHT, title: "Cold outreach blocked", message: "5 cold sales emails were archived before they reached your inbox.", actionUrl: `${APP}/mail/inbox`, actionLabel: "Review" }),
    notif({ category: NotificationCategory.SYSTEM, title: "Gmail account needs to reconnect", message: "studio@northwind.studio lost access. Reconnect it to keep rules running.", actionUrl: `${APP}/settings/gmail`, actionLabel: "Reconnect" }),
  ];
  const daily = await r.renderDigest(digestItems, "Jordan", "daily", TO);
  save("digest-daily", daily.subject, daily.html);

  const weekly = await r.renderWeeklyReportEmail(
    {
      emailsProcessed: 1284,
      rulesExecuted: 412,
      timeSaved: "3h 25m",
      topRules: [
        { name: "Newsletters to Read Later", count: 118 },
        { name: "Receipts to Finance", count: 74 },
        { name: "Block cold outreach", count: 51 },
        { name: "VIP clients to Slack", count: 22 },
      ],
    },
    { email: TO, name: "Jordan" },
  );
  save("weekly-report", "Your Weekly MailPrism Activity Report", weekly.html);

  // Supabase Auth emails, with sample values in place of Supabase's placeholders
  const fill: Record<string, string> = {
    ConfirmationURL: `${APP}/auth/confirm?token=demo`,
    Email: TO,
    NewEmail: "jordan.avery@northwind.studio",
    OldEmail: "jordan@northwind.studio",
    Token: "731 204",
    FactorType: "Authenticator app",
  };
  for (const t of AUTH_EMAIL_TEMPLATES) {
    const html = t.html().replace(/\{\{ \.(\w+) \}\}/g, (m, k: string) => fill[k] ?? m);
    save(`auth-${t.key.replace(/_/g, "-")}`, t.subject, html);
  }

  fs.writeFileSync(path.join(out, "index.json"), JSON.stringify(index, null, 2));
  console.log("rendered", Object.keys(index).length, "emails to", out);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
