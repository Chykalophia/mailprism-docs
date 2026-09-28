---
sidebar_position: 1
title: FAQ
description: Quick answers to the most common questions about MailPrism — getting started, Gmail access, AI, tracking, billing, and more.
---

# Frequently Asked Questions

Short answers to the things people ask most. Each one links to a fuller page if you
want the detail.

## Getting started

### What is MailPrism?

MailPrism is email automation for Gmail. You build **rules** — "when an email matches
this, do that" — and MailPrism runs them for you on a schedule you choose. It also
**tracks the conversations you're waiting on** so replies don't slip, and on paid plans
uses **AI** to read each email's category, urgency, and sentiment so your rules can
be smarter than keyword filters.

See **[How rules work](../rules/overview.md)** and the **[AI overview](../ai/overview.md)**.

### How do I get access?

MailPrism is in an **invite-only closed beta**. If you have an invite, open the invite
link — it takes you to sign-up with your code filled in. If not, join the waitlist at
**[app.mailprism.ai/beta](https://app.mailprism.ai/beta)**.

Each code works once and is tied to the email you sign up with. If you sign up with
Google, enter the address of the Google account you'll choose. See
**[Quick Start](../getting-started/quick-start.md)**.

### Google says MailPrism is "unverified" — is that OK?

Yes, during the beta. Google's verification of MailPrism is still in progress, so Google
may show an "unverified app" screen when you connect Gmail. Click **Advanced**, then
**Go to MailPrism (unsafe)**, to continue — Google uses that label for every app it
hasn't finished reviewing.

### How do I get started?

Sign up, connect Gmail, and create your first rule — about five minutes start to
finish. Follow the **[Quick Start](../getting-started/quick-start.md)**, then the
**[onboarding walkthrough](../getting-started/onboarding.md)**.

### Does it work with Google Workspace?

Yes — personal Gmail and Google Workspace both work. For Workspace, your admin may need
to approve MailPrism for your organization. See
**[Connecting Gmail](../getting-started/connecting-gmail.md)**.

### Is there a free plan?

Plan names and what each includes live on the live pricing page and your in-app
**Billing** screen. See **[Billing & Plans](../account/billing.md)** — we don't list
prices here because they can change.

## Gmail & permissions

### Why does MailPrism need access to my email?

To run your rules, it needs to read mail (to check conditions and, if enabled, run AI
analysis) and organize it (apply labels, archive, star, mark read). MailPrism only acts
on your mail through things you do in the app, rules you create, and features you turn
on. Reply tracking is on by default and applies MailPrism's tracking labels — you can
change or turn it off in **Settings → Tracking Labels**. Every permission and its purpose is listed in
**[What access MailPrism asks for](../getting-started/connecting-gmail.md#what-access-mailprism-asks-for)**.

### Does MailPrism request "send" access?

Yes. **Send mail** is used when you send or reply from MailPrism, and when a feature you
turned on sends on your behalf — forwarding, auto-replies, auto-responders, nudges, and
unsubscribe requests sent by email. MailPrism never sends email you didn't write or set
up.

### Is my data safe?

Your connection uses **Google OAuth** (no password sharing), your access tokens are
stored **encrypted**, and you can turn AI analysis off anytime. AI providers don't train
on your data. You can export your learning data
or delete your account anytime. See **[Privacy & Security](./privacy-security.md)**.

### Can I connect more than one account?

Yes. Connect several Gmail accounts and automate them together; one is your **Primary**.
Each rule can target a specific account or apply to all of them. See
**[Connecting more than one account](../getting-started/connecting-gmail.md#connecting-more-than-one-account)**.

### How do I disconnect Gmail?

**Settings → Gmail Accounts → Disconnect**, or remove access from your
**[Google account permissions](https://myaccount.google.com/permissions)**. See
**[Disconnecting](../getting-started/connecting-gmail.md#disconnecting)**.

## Rules & automation

### How quickly do rules run?

You choose. Processing frequency is **configurable** in **Settings → Scheduling**:

- **Real-time** — process new mail as it arrives.
- **Hourly** — once per hour.
- **Daily** — once per day.

MailPrism also receives Gmail push notifications, so real-time mode reacts promptly. See
**[Processing frequency](../rules/overview.md#processing-frequency)**.

### What if several rules match the same email?

Rules run in **priority order** (highest first). Turn on **Stop processing** for a rule
to prevent lower-priority rules from also running on that email. See
**[The order rules run in](../rules/overview.md#the-order-rules-run-in)**.

### Why didn't my rule run?

The usual reasons: the rule is **disabled**, the **conditions don't match**, **AI is
off** for an AI condition, you're inside **quiet hours**, or you've hit a **plan limit**.
The fastest way to debug is the built-in **Test** tool and the **Rule Logs**. See
**[Troubleshooting → A rule isn't firing](./troubleshooting.md#a-rule-isnt-firing)**.

### Can I test a rule before trusting it?

Yes. The **Test** card runs your rule against recent emails (or one specific email) and
shows what matched and what didn't — without taking any action. See
**[Testing rules](../rules/testing.md)**.

### Can I undo an action a rule took?

Usually, yes. The **Rule Logs** include an **Undo** button within a grace period.
Irreversible actions (like permanently trashing a message) can't be undone. See
**[Troubleshooting → Undo limits](./troubleshooting.md#i-cant-undo-an-action)**.

### Can I back up my rules?

Yes — **export your rules to JSON** and re-import them later. See
**[Import & export rules](../rules/import-export.md)**.

## AI

### Is AI on by default?

Yes. When you sign up, you agree to let MailPrism use AI providers (Google Gemini as the
primary provider, with OpenAI and Anthropic as fallbacks) to analyze your email. You can
turn AI off at any time in **Settings → Privacy → AI Data Processing**. While it's off,
nothing is sent for AI analysis, and your rules use the non-AI conditions. See
**[AI privacy & consent](../ai/privacy-and-consent.md)**.

### What's sent to the AI providers?

The email's subject, sender, recipients (To/Cc), and body text. For reply tracking, the
thread's participants and your own address are sent too. Providers don't use it to train
their models. See
**[What's sent vs. what's stored](../ai/privacy-and-consent.md#whats-sent-for-analysis-vs-what-stored)**.

### Which plans include AI?

AI analysis is included on paid plans (Starter and up). The Free plan runs rule-based
automation. Bring-your-own-key (BYOK) requires the Business plan. Free plans can still
use the **[AI rule drafter](../rules/building-with-ai.md)** — 10 AI drafts a day.

### What can the AI detect?

Category, urgency, sentiment, and yes/no signals like *needs response*, *is automated*,
and **cold outreach** — each usable as a rule condition. See
**[AI classification](../ai/classification.md)**.

### Can I use my own AI keys?

Yes — **BYOK** (Bring Your Own Key) lets you connect your own **OpenAI** or
**Anthropic** key on the **Business** plan. See **[BYOK](../ai/byok.md)**.

### What does AI analysis cost me?

You can track AI operations, tokens, and cost — and how much runs on your own key — in
**[AI usage & cost](../ai/usage-and-cost.md)**.

## Response tracking & follow-ups

### What is response tracking?

MailPrism tracks the **state of each conversation** — for example *needs action*,
*awaiting reply*, *resolved*, or *snoozed* — so you can see what's waiting on you and
what's waiting on them. This is **reply-state** tracking based on who sent the last
message; MailPrism does **not** use open or pixel tracking. See
**[Response tracking](../tracking/overview.md)**.

### What are nudges?

Two follow-up helpers:

- **Nudge Them** — sends polite follow-up emails to someone who hasn't replied.
- **Remind Me** — reminds *you* about an email that needs attention.

Both are configurable and use a `@Nudge` Gmail label. See
**[Nudges & reminders](../tracking/nudges-and-reminders.md)**.

## Accounts, teams & billing

### Can I work with a team?

Yes — workspaces support members, roles, and invitations. See
**[Workspaces & teams](../account/workspaces-and-teams.md)**.

### Can I change plans anytime?

Yes — upgrade or downgrade from **Settings → Billing**. See
**[Billing & Plans](../account/billing.md)**.

### How do I update my card or get an invoice?

Open the **Stripe customer portal** via **Manage Subscription** on the Billing page;
your invoices are there too. See
**[Manage your subscription](../account/billing.md#manage-your-subscription-stripe)**.

### I have a lifetime code — where do I enter it?

On the Billing page, in the lifetime-code field. See
**[Redeem a lifetime code](../account/billing.md#redeem-a-lifetime-code)**.

## Feedback & support

### How do I give feedback or report a bug?

Email **[hello@mailprism.ai](mailto:hello@mailprism.ai)**. For a bug, include what you
did, what you expected, what happened instead, and a screenshot if you can. During the
beta, email is the most reliable way to reach the team.

### Still stuck?

Read **[Troubleshooting](./troubleshooting.md)**, or email
**[hello@mailprism.ai](mailto:hello@mailprism.ai)**.
