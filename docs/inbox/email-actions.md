---
sidebar_position: 3
title: Email Actions
description: Everything you can do to a single email — reply, forward, archive, star, label, delete, mark read, track, nudge, and open in Gmail.
---

# Email Actions

When you open an email in the [reading view](./reading-email.md), an **action toolbar**
sits above the message. It holds the most common moves; anything that doesn't fit goes
into the **⋯ overflow menu** at the end.

:::tip Your toolbar, your way
The toolbar is fully configurable. Choose which actions are buttons, which live in the
overflow menu, their order, and whether each shows an icon, text, or both — under
**Settings → Toolbar**.
:::

## Replying and forwarding

These open MailPrism's compose panel below the message, pre-filled and ready.

| Action | What it does |
|--------|--------------|
| **Reply** | Reply to the sender |
| **Reply All** | Reply to the sender and all other recipients |
| **Forward** | Send the message on to someone else |

→ Writing the response: **[Composing](./composing.md)**

### …in Gmail

Each compose action has an **in Gmail** variant — **Reply in Gmail**, **Reply All in
Gmail**, and **Forward in Gmail** — which opens the message in Gmail's own composer in
a new tab instead. Handy when you want Gmail's full editor. These live in the dropdown
next to Reply All / Forward.

## Quick actions

| Action | What it does |
|--------|--------------|
| **Archive** | Removes the email from the inbox (keeps it in All Mail) |
| **Star / Unstar** | Toggles Gmail's star |
| **Mark Read / Unread** | Toggles read status (the button reflects the current state) |
| **Important** | Toggles Gmail's *Important* marker |
| **Delete** | Moves the email to Trash |
| **Open in Gmail** | Opens the message in Gmail in a new tab |

:::caution Delete moves to Trash
**Delete** sends the email to Trash, where Gmail removes it permanently after 30 days.
It isn't an immediate permanent delete.
:::

## Labels

| Action | What it does |
|--------|--------------|
| **Add Label** | Apply a Gmail label — opens a picker, or applies a preset label if one's configured |
| **Remove Label** | Remove a label from the email |

You can also remove a label from the list: hover the colored label dots on an email's
row to open its label pills, each with a remove (×) button.

→ Full guide: **[Labels](./labels.md)**

## Response tracking

The toolbar can drive [response tracking](../tracking/overview.md) for the whole
conversation:

| Action | What it does |
|--------|--------------|
| **Track** | Start (or stop) tracking this thread |
| **Needs Action** · **Awaiting Reply** · **Pending** · **Resolve** | Set the thread to <span class="mp-pill mp-pill--amber">Needs Action</span>, <span class="mp-pill mp-pill--blue">Awaiting Reply</span>, <span class="mp-pill mp-pill--gray">Pending</span>, or <span class="mp-pill mp-pill--green">Resolved</span> |

→ Details: **[Response tracking](../tracking/overview.md)**

## Nudges and reminders

| Action | What it does |
|--------|--------------|
| **Nudge Them** | Start an automated follow-up sequence to the recipient. Its dropdown also offers **Remind Me** and **AI Instant Nudge**. |
| **AI Instant Nudge** | Generate and send an AI-written follow-up right away (you confirm first) |

→ Details: **[Nudges & reminders](../tracking/nudges-and-reminders.md)**

## Automation actions

| Action | What it does |
|--------|--------------|
| **Test Rules** | See which of your rules would match this email, and why |
| **Reprocess** | Run your rules against this email again |
| **Email Details** · **Thread Details** | Open the full details page for this email or conversation — see **[Reading an email](./reading-email.md#the-email-details-page)** |

:::note Not available in the Inbox yet
A few toolbar items can be added in **Settings → Toolbar** but don't work in the Inbox
yet — clicking them shows *"That action isn't available here yet"*: **Set State…**,
the standalone **Remind Me** button, **Mark as…**, **Clear Labels**, and **Custom**.
**Run Rule** currently opens **Test Rules**. Use the individual state buttons above,
the **Nudge Them** dropdown, and **Add / Remove Label** instead.
:::

→ Learn more: **[Rules overview](../rules/overview.md)** ·
**[Conditions reference](../rules/conditions.md)**

## Unsubscribing

MailPrism handles unsubscribing from its dedicated **Bulk Unsubscribe** manager rather
than a per-email button. It groups noisy senders by brand and domain, shows how often
each emails you, and lets you unsubscribe from many at once — with an **undo** window
in case you change your mind. It uses senders' official unsubscribe methods
(one-click where supported, then a regular link, an unsubscribe email, or a link found
in the email body).

You can also keep an **ignore list** of senders so they stay out of the unsubscribe
results. See **[Unsubscribe](./unsubscribe.md)**.

:::note Where to find it
Open the **Unsubscribe** manager from the dashboard navigation to clean up
subscriptions in bulk.
:::

## Multiple emails at once

To act on several emails together — **Archive**, **Mark Read**, **Mark Unread**, or
**Delete** — select them with their checkboxes in the list. A bulk action bar appears above the
list with the available actions.
