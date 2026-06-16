---
sidebar_position: 2
title: Reading an Email
description: The reading view — header and metadata, body rendering, quoted-text collapse, attachments, image blocking, and the AI analysis panel.
---

# Reading an Email

Select a thread in the [inbox](./overview.md) and its latest message opens in the
reading panel on the right. This page covers what you see there.

## Header and metadata

The top of the reading view shows the message's key details:

| Field | What it shows |
|-------|---------------|
| **Sender** | The sender's name, with their email address alongside it |
| **Subject** | The subject line (or *(no subject)*) |
| **To** | Who the message was addressed to |
| **Cc** | Copied recipients, when present |
| **Date & time** | When the message arrived |
| **Labels** | Labels on the message — hover a label to remove it |
| **Tracking label** | The conversation's [response-tracking](../tracking/overview.md) state, if tracked |

There's also a subtle **Rule history** link that jumps to the logs filtered to this
exact email, so you can see which rules ran on it.

## The message body

MailPrism renders the full message with its formatting intact. HTML email is cleaned
(sanitized) before display, so links and styling come through safely.

While the full body loads, you may briefly see a **preview** badge over a short
snippet — the complete message replaces it a moment later.

### Quoted text is collapsed

Long reply chains are kept tidy. The new part of the message shows by default, and the
quoted history below it is hidden behind a **Show quoted text** toggle. Click it to
expand the older content, and **Hide quoted text** to fold it away again.

## Attachments

When a message includes files, an **attachment indicator** appears in the header
showing how many are attached. To download or view the files themselves, open the
message in Gmail — see **[Email actions](./email-actions.md)**.

## Image blocking and privacy

To protect your privacy, MailPrism can block remote images before they load. Remote
images often include **tracking pixels** that tell the sender exactly when (and how
often) you opened their email.

When images are blocked, a banner shows:

- How many images were blocked, and whether any are **tracking pixels**.
- A **Load Images** button to show them for that message.

:::tip You're in control
Image blocking is a privacy setting. Turn it on or off — and choose whether to block
all images or only tracking pixels — under **Settings → Privacy**.
:::

## The AI analysis panel

When AI features are on and MailPrism has analyzed a message, a collapsible panel
titled **"How was this email classified?"** appears below the body. Open it to see why
MailPrism handled the email the way it did.

It has two parts:

### AI classification

| Item | What it tells you |
|------|-------------------|
| **Classification** | The category the AI assigned the email |
| **Confidence** | How sure the AI is, shown as a percentage |
| **Reasoning** | A plain-language explanation of the AI's read on the email |
| **Was this helpful?** | Thumbs up / down to give feedback that improves future results |

The reasoning often references the same signals your rules can match on — for example,
whether the email **requires a response**, its **urgency**, or its **sentiment**. You
can act on every one of those signals in your automations: see the
**[AI signals](../rules/conditions.md#ai-signals)** and
**[Response tracking](../rules/conditions.md#response-tracking)** conditions.

### Rules matched

Below the classification, the panel lists each rule that fired on this email, with the
**conditions that matched** and the **actions it took** — so automation is never a
black box.

→ Learn more: **[AI features overview](../ai/overview.md)** ·
**[Smart rules](../ai/smart-rules.md)**

:::note Feedback teaches MailPrism
The thumbs up / down on the AI panel feeds back into how MailPrism classifies your
mail over time. A quick rating when something looks wrong pays off later.
:::

## Next steps

- Act on the open message → **[Email actions](./email-actions.md)**
- See what rules can read from an email → **[Conditions reference](../rules/conditions.md)**
