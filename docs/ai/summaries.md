---
sidebar_position: 8
title: Email Summaries
description: AI-generated email summaries power the ai_summary template variable in automated replies — how they're created, cached, and what gets sent.
---

# Email Summaries

A long email isn't always worth a full read. MailPrism's AI can condense a single
message into a short, plain-language summary.

Today, summaries power the **`{ai_summary}`** variable in **rule reply templates** — for
example, an auto-reply that says *"Here's what you sent:"* followed by `{ai_summary}`.
See **[Templates](../productivity/templates.md)** for the other variables.

:::note No summary button in the inbox
There's no button in the inbox to show a summary for an email you're reading.
Summaries are generated when a rule's template uses `{ai_summary}`.
:::

:::info AI consent required
Summaries use AI, so they only run after you've turned on **AI data processing** in
**Settings → Privacy**. See **[AI privacy & consent](./privacy-and-consent.md)**.
:::

## How a summary is created

When a template needs `{ai_summary}` for an email, MailPrism:

1. Checks for a recent summary of that email — if one exists, it's reused (no new AI
   call).
2. Otherwise, sends the email's text to an AI provider to write the summary.
3. Saves the result for reuse.

## Caching

Summaries are cached for about **24 hours**. Within that window, the same email reuses
its summary — fast and at no extra AI cost. After that, a new summary is written the
next time one is needed.

## What gets sent for analysis

Only the **first 2,000 characters** of the email's body are sent, along with basic
details like the subject and sender. A very long message is summarized from its
opening portion. The providers are the same ones used elsewhere in MailPrism — see
**[AI privacy & consent](./privacy-and-consent.md)**.

:::caution Summaries go out in your emails
With **Send Auto-Reply**, `{ai_summary}` goes out in an email **sent from your
account** with no review step. **Create Draft Reply** only saves a draft in Gmail, so
nothing is sent until you send it yourself. Test the rule first (see
**[Testing rules](../rules/testing.md)**) and prefer **Create Draft Reply** while you
check the wording.
:::

→ Related: **[Reading an email](../inbox/reading-email.md)** · **[AI, Explained](./overview.md)**
