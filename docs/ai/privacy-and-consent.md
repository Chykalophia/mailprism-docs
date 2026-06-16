---
sidebar_position: 10
title: AI Privacy & Consent
description: How AI consent works, what turning it on or off changes, and what's sent for analysis versus what's stored.
---

# AI Privacy & Consent

MailPrism's AI features are **opt-in**. Nothing about your email is sent for AI
analysis until you turn AI processing on — and you can turn it back off at any time.

## How consent works

AI processing is controlled by a single consent setting. While it's **off**:

- No email content is sent to an AI provider for analysis.
- All AI features stay disabled — email classification, smart suggestions, and any
  rule conditions that depend on AI.
- Your non-AI rules keep running normally on their plain conditions.

While it's **on**, MailPrism may analyze your emails with AI to power those features.

:::info One switch, all AI features
The consent setting is the master switch. When it's off, every AI feature is off —
there's no way for AI to run without it.
:::

## Where to turn it on or off

There are two places consent appears:

1. **Settings → Privacy & Activity** — the **AI Data Processing** card has a toggle
   labeled *AI Data Processing Consent*. A badge shows whether it's
   <span class="mp-pill mp-pill--green">Active</span> or
   <span class="mp-pill mp-pill--amber">Disabled</span>, and the date you consented.
2. **The dashboard banner** — if AI is off, the dashboard shows an *Enable
   AI-powered features* prompt with **Enable AI Features** and **No Thanks** buttons.

To turn AI on, flip the toggle on (or click **Enable AI Features** on the banner).

To turn it off, flip the toggle off. MailPrism asks you to confirm, because this
**immediately disables all AI features** — including email classification, smart
suggestions, and rule automation. You can re-enable at any time.

## What's sent for analysis vs. what's stored {#whats-sent-for-analysis-vs-what-stored}

It helps to separate the two:

| | What happens |
|--|--------------|
| **Sent for analysis** | When an email is analyzed, its content (sender, subject, body) is sent to an AI provider to produce signals like category, urgency, and sentiment. |
| **Stored in your account** | The **results** of the analysis — the signals — are stored so your rules can use them and you can see them later. Your mailbox itself stays in Gmail. |

A few details worth knowing:

- MailPrism only analyzes an email when there's a reason to — many routine,
  machine-generated emails are handled without sending anything to AI.
- Identical emails can reuse a previous result instead of being re-analyzed.
- Your Gmail access is always **stored encrypted**.

For the providers behind analysis and how to use your own, see
**[Bring your own key (BYOK)](./byok.md)**.

## What turning AI off does to your rules

Turning AI off doesn't break your automations. Rules that use **AI conditions**
(like *urgency is high*) simply stop matching on those conditions. Every rule built
on plain conditions — sender, subject, labels, timing — keeps working exactly as
before.

:::tip Mix AI with plain conditions
For important automations, pair an AI signal with a concrete condition so the rule
still does something sensible even if AI is ever turned off. See
**[Best practices](../rules/best-practices.md)**.
:::

## Related

- **[AI, explained](./overview.md)** — what the AI reads and how it's used.
- **[AI usage & cost](./usage-and-cost.md)** — track operations, tokens, and spend.
- **[Privacy & Security](../help/privacy-security.md)** — the broader picture.
