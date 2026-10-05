---
sidebar_position: 2
title: Reading an Email
description: The reading view — header and metadata, body rendering, attachments, image blocking, the AI analysis panel, and the full Email Details page.
---

# Reading an Email

Select a thread in the [inbox](./overview.md) and its latest message opens in the
reading panel on the right. This page covers what you see there.

## Header and metadata

The top of the reading view shows the message's key details:

| Field | What it shows |
|-------|---------------|
| **Sender** | The sender's name, with their email address alongside it |
| **Subject** | The subject line |
| **To** | Who the message was addressed to |
| **Date & time** | When the message arrived |
| **Labels** | Labels on the message, shown as pills |
| **Tracking label** | The conversation's [response-tracking](../tracking/overview.md) state, if tracked |

:::tip Removing a label
To take a label off, use the toolbar's **Remove Label**, or hover the colored label
dots on the email's row in the list — a popover shows the full label pills, each with
a remove (×) button. See **[Labels](./labels.md)**.
:::

## The message body

MailPrism renders the full message with its formatting intact. HTML email is cleaned
(sanitized) before display, so links and styling come through safely. The whole
message is shown, including any quoted reply history.

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

When AI rules have run on a message, a collapsible panel titled **"How was this email
classified?"** appears below the body. Open it to see why
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

## The Email Details page

For a deeper look at one email, choose **Email Details** from the toolbar (add it under
**[Toolbar](./toolbar.md)** if you don't see it). It opens a full page with tabs:

| Tab | What's in it |
|-----|--------------|
| **Overview** | The AI classification (or a button to analyze the email), the message, its details, Gmail labels and categories, and an activity log for the email |
| **Sender Analytics** | How this sender emails you |
| **Domain Insights** | What MailPrism knows about the sender's domain |
| **Rules Actions** | Which rules ran on this email and what they did |
| **Test Rules** | Check which of your rules would match this email |

**Thread Details** works the same way for the whole conversation.

To see the rule logs for an email from anywhere, open **Rule Logs** — see
**[Rule Logs & Undo](../analytics/rule-logs-and-undo.md)**.

## Next steps

- Act on the open message → **[Email actions](./email-actions.md)**
- See what rules can read from an email → **[Conditions reference](../rules/conditions.md)**
