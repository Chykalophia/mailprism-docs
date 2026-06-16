---
sidebar_position: 1
title: Quick Start
description: From sign-up to your first working automation in about five minutes.
---

# Quick Start

Welcome to MailPrism. This guide takes you from zero to your first working
automation in about five minutes.

:::tip You'll need
A Gmail account (personal or Google Workspace) and a few minutes. No credit card
required to start.
:::

## The three steps

MailPrism's onboarding is just three steps. Do them in order and you're done.

### 1. Create your account

Go to **[app.mailprism.ai](https://app.mailprism.ai)** and sign up. You'll land in a
short setup flow that walks you through the next two steps.

### 2. Connect Gmail

Click **Connect Gmail**. Google asks you to choose your account and approve the
access MailPrism needs to read and organize your mail.

This uses Google's standard OAuth — MailPrism never sees your Google password.

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

:::note Need a hand?
Use the **Help** button inside the app, or browse the **[FAQ](../help/faq.md)** and
**[Troubleshooting](../help/troubleshooting.md)** guides.
:::
