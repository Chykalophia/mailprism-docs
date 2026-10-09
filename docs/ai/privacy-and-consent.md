---
sidebar_position: 10
title: AI Privacy & Consent
description: How AI consent works, what turning it on or off changes, and what's sent for analysis versus what's stored.
---

# AI Privacy & Consent

When you sign up, you agree to let MailPrism use AI providers (Google Gemini as the
primary provider, with OpenAI as the fallback) to analyze your email. You
can turn AI off at any time in **Settings → Privacy → AI Data Processing**. While it's
off, nothing is sent for AI analysis.

:::note AI and your plan
Consent is one half; your plan is the other. AI analysis is included on paid plans
(Starter and up). The Free plan runs rule-based automation, though it can still use
the **[AI rule drafter](../rules/building-with-ai.md)** — 10 AI drafts a day.
Bring-your-own-key (BYOK) is available on Business, Enterprise, and Lifetime.
:::

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

Consent starts **on**: the sign-up form asks you to agree to AI processing, and you
can't create an account without ticking that box. After that, there are two places
consent appears:

1. **Settings → Privacy** — the **AI Data Processing** card has a toggle
   labeled *AI Data Processing Consent*. A badge shows whether it's
   <span class="mp-pill mp-pill--green">Active</span> or
   <span class="mp-pill mp-pill--amber">Disabled</span>, and the date you consented.
2. **The dashboard banner** — if you've turned AI off, the dashboard shows an *Enable
   AI-powered features* prompt with **Enable AI Features** and **No Thanks** buttons.

To turn AI on, flip the toggle on (or click **Enable AI Features** on the banner).

To turn it off, flip the toggle off. MailPrism asks you to confirm, because this
**immediately disables all AI features** — including email classification, smart
suggestions, and rule automation. You can re-enable at any time.

## What's sent for analysis vs. what's stored {#whats-sent-for-analysis-vs-what-stored}

It helps to separate the two:

| | What happens |
|--|--------------|
| **Sent for analysis** | The email's **subject**, **sender**, **recipients (To and Cc)**, and **body text**. For reply tracking, MailPrism also sends the **thread** — each message's sender, recipients, date, and text — plus **your own email address**, so the AI can tell which messages are yours. |
| **Stored in your account** | See the list below. |

### What MailPrism stores

| What | How long |
|------|----------|
| **A cache of recent messages** | To display your inbox, MailPrism keeps an **encrypted (AES-256) copy** of the messages it processes. Message bodies are deleted after **7 days** without being opened, and fetched again from Gmail when you open the message. Details such as sender, subject, date, and labels are kept until you delete your account. |
| **AI results** | The signals and summaries AI produces are kept with your rule and action history, so rules can use them and you can see why something happened. |
| **Sent mail you asked MailPrism to learn from** | If you use **[Learn from your sent mail](./writing-profiles.md#learn-from-your-sent-mail)**, the sent emails it analyzes are stored for that writing profile until you press **Forget what was learned**. |

Your mailbox itself stays in Gmail.

:::info AI providers don't train on your data
MailPrism uses the providers' paid API services. Under those terms, your email is
**not used to train their models**. Providers may keep requests for a limited time to
detect abuse — the **[Privacy Policy](https://app.mailprism.ai/privacy)** lists each
provider's retention period.
:::

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
