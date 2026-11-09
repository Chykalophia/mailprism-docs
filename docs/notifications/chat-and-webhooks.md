---
sidebar_position: 7
title: Chat & Webhook Messages
description: What MailPrism posts to Slack, Discord, Microsoft Teams, Google Chat and webhooks when a rule forwards an email there.
---

# Chat & Webhook Messages

A **destination** is a Slack, Discord, Microsoft Teams or Google Chat channel,
or your own webhook URL. Point a rule at a destination and MailPrism posts each
matching email there.

:::note In limited rollout
Destinations are being turned on gradually. If your account doesn't have them
yet, each destination page says **In limited rollout**. You can still see,
pause and delete any destination you already have.
:::

<Screenshot
  src="/img/screens/integrations/slack.webp"
  alt="Settings → Integrations → Slack page showing the In limited rollout notice, an empty Your Slack destinations list, and numbered steps to create a Slack incoming webhook"
  caption="Each chat app has its own page under Settings → Integrations, with setup steps for that app."
/>

---

## What a message contains

Every chat message carries the same facts, formatted for that app:

| Part | Example |
|------|---------|
| **Title** | The email's subject, or *(no subject)* |
| **From** | *Priya Raman &lt;priya@lumenhealth.io&gt;* |
| **Date** | When the email arrived |
| **Labels** | The email's labels, if any |
| **Rule** | The rule that sent it |
| **Attachments** | How many, and their file names (not the files) |
| **Snippet** | The first line or two of the email |
| **Body** | Only if you turned on **Include email body** for that destination |
| **Button** | **View in MailPrism** |

### Including the full body

By default only the snippet is sent. To send the body too, turn on **Include
email body** for the destination. MailPrism shows you exactly what will leave
your account and asks you to agree first. Long bodies are cut to fit each app's
message limit.

### Test messages

**Send test** posts a sample that starts *"Test delivery from MailPrism. This
is a sample message, not your email."* Use it to check the channel before a rule
relies on it.

---

## Webhooks

Webhook destinations receive the same email as **signed JSON** in a `POST`.
Each request carries `webhook-id`, `webhook-timestamp` and `webhook-signature`
headers, so your server can check it really came from MailPrism using the
signing secret shown once when you create the destination.

Zapier, Make and n8n all accept these webhooks. See the setup steps on
**Settings → Integrations → Webhooks** and **Zapier**.

---

## When a destination keeps failing

If a destination keeps rejecting messages (for example, the channel was
deleted), MailPrism turns it off and sends you a notification: *A forwarding
destination was turned off*. Fix the channel or URL, then turn the destination
back on in its settings page.
