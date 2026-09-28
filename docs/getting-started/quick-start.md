---
sidebar_position: 1
title: Quick Start
description: From sign-up to your first working automation in about five minutes.
---

# Quick Start

Welcome to MailPrism. This guide takes you from zero to your first working
automation in about five minutes.

:::info MailPrism is in closed beta
MailPrism is **invite-only** right now.

- **Have an invite?** Open your invite link — it takes you to sign-up with your invite
  code filled in.
- **No invite yet?** Join the waitlist at
  **[app.mailprism.ai/beta](https://app.mailprism.ai/beta)**.

Each invite code works **once**. When you use it, it's tied to the email you sign up
with — if you sign up with Google, enter the address of the Google account you'll pick.
:::

:::tip You'll need
An invite, a Gmail account (personal or Google Workspace), and a few minutes.
:::

## The three steps

MailPrism's onboarding is just three steps. Do them in order and you're done.

### 1. Create your account

Open your invite link (or go to **[app.mailprism.ai](https://app.mailprism.ai)** and
choose sign-up). The form asks for:

- Your **email** — for Google sign-up, the address of the Google account you'll choose.
- Your **beta invite code**, if the invite link didn't fill it in.
- Your **consent to AI processing**. MailPrism uses AI providers (Google Gemini as the
  primary provider, with OpenAI and Anthropic as fallbacks) to analyze your email. You
  can turn AI off later in **Settings → Privacy → AI Data Processing** — see
  **[AI privacy & consent](../ai/privacy-and-consent.md)**.

You'll then land in a short setup flow that walks you through the next two steps.

### 2. Connect Gmail

Click **Connect Gmail**. Google asks you to choose your account and approve the
access MailPrism needs to read and organize your mail.

This uses Google's standard OAuth — MailPrism never sees your Google password.

:::caution "Google hasn't verified this app"
During the beta, Google may show this warning when you connect Gmail. That's expected:
Google's verification of MailPrism is still in progress. To continue, click
**Advanced**, then **Go to MailPrism (unsafe)**, and review the permissions as normal.
Google uses that label for every app it hasn't finished reviewing.
:::

→ Full details, including what each permission means: **[Connecting Gmail](./connecting-gmail.md)**

### 3. Create your first rule

A rule is a simple **"when this email arrives, do that"** instruction. You can
build one from scratch or start from the **Rule Library** of ready-made templates.

The fastest first rule:

1. Open **Rules → New Rule**.
2. Add a condition — for example, **From** *contains* `newsletter`.
3. Add an action — for example, **Apply label** `Newsletters`, then **Archive**.
4. Save and enable it.

→ A guided walkthrough: **[Create your first rule](./first-rule.md)**

That's it — onboarding is complete and your automation is live.

## What happens next

When a new email matches a rule, the rule's actions run automatically. **You choose
how often that happens** — under **Settings → Scheduling** you can set processing to:

| Frequency | What it does |
|-----------|--------------|
| **Real-time** | Process emails as soon as they arrive *(as often as your plan allows)* |
| **Hourly** | Process new mail once per hour |
| **Daily** | Process new mail once per day |

MailPrism also listens for Gmail's own notifications about new mail, so real-time
processing reacts quickly rather than waiting on a fixed clock.

You can watch everything it does in **Analytics** and the **Rule Logs**, and you can
pause or change any rule at any time.

→ Fine-tune timing, quiet hours, and batch size: **[How rules work](../rules/overview.md)**

## Where to go next

| If you want to… | Read |
|------------------|------|
| Understand how rules really work | [How rules work](../rules/overview.md) |
| See every condition you can match on | [Conditions reference](../rules/conditions.md) |
| See every action a rule can take | [Actions reference](../rules/actions.md) |
| Let AI sort by urgency, category, and tone | [AI features](../ai/overview.md) |
| Get comfortable with the dashboard | [Your dashboard](./dashboard.md) |

:::note Need a hand, or found a bug?
Email **[hello@mailprism.ai](mailto:hello@mailprism.ai)** — beta feedback is very
welcome. You can also browse the **[FAQ](../help/faq.md)** and
**[Troubleshooting](../help/troubleshooting.md)** guides.
:::
