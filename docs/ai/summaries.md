---
sidebar_position: 8
title: Email Summaries
description: AI-generated summaries of individual emails — how they're created and cached behind the scenes. The in-app summary view is still rolling out.
---

# Email Summaries

A long email isn't always worth a full read. **Email summaries** are designed to let
MailPrism's AI condense a single message into a short, plain-language summary so you
can grasp the gist fast.

:::caution No summary button in the app yet
The summary engine exists behind the scenes, but there is **no button or menu in the
app today** to generate or display a per-email summary on demand. This page describes
how summaries are built and cached; the in-app view that surfaces them is still rolling
out. To get the gist of an email now, open it from the **[inbox](../inbox/reading-email.md)**.
:::

:::info AI consent required
Summaries use AI, so they only run after you've turned on **AI data processing**.
Without consent, MailPrism returns a prompt to enable it in **Settings → Privacy**
instead of generating a summary. See **[AI privacy & consent](./privacy-and-consent.md)**.
:::

## How a summary is created

When a summary is requested for an email, MailPrism:

1. Checks whether a summary already exists for that email — if so, the **cached**
   version is returned instantly (no new AI call).
2. Confirms your **AI processing consent** is on. If it isn't, you're asked to enable AI
   in Settings → Privacy first.
3. Sends the email's content to an AI provider to generate the summary.
4. Stores the result so future requests are served from the cache.

## Caching

Each summary is generated **once per email** and then saved.

- The first request runs the AI and stores the result.
- Every later request for the same email returns the **cached** summary — fast and at
  no additional AI cost.

This keeps summaries quick to reopen and avoids re-running the AI on the same message.

## What gets sent for analysis

To produce the summary, the email's text is sent to an AI provider (the same providers
used elsewhere in MailPrism — see **[AI privacy & consent](./privacy-and-consent.md)**). Very
long emails are **truncated** before analysis, so an extremely long message may be
summarized from its earlier portion.

:::note Tied to your AI setup
Summaries run through whichever AI setup you use — MailPrism's managed AI, or your own
provider if you've set up **[BYOK](./byok.md)**.
:::

→ Related: **[Reading an email](../inbox/reading-email.md)** · **[AI, Explained](./overview.md)**
