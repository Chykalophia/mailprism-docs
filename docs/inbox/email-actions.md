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
| **Clear Labels** | Remove all of *your* labels at once (Gmail system labels stay) |

You can also remove a label directly by hovering its pill in the message header.

→ Full guide: **[Labels](./labels.md)**

## Response tracking

The toolbar can drive [response tracking](../tracking/overview.md) for the whole
conversation:

| Action | What it does |
|--------|--------------|
| **Track** | Start (or stop) tracking this thread |
| **Set State** | Mark the thread <span class="mp-pill mp-pill--amber">Needs Action</span>, <span class="mp-pill mp-pill--blue">Awaiting Reply</span>, <span class="mp-pill mp-pill--gray">Pending</span>, or <span class="mp-pill mp-pill--green">Resolved</span> |

→ Details: **[Response tracking](../tracking/overview.md)**

## Nudges and reminders

| Action | What it does |
|--------|--------------|
| **Nudge Them** | Start an automated follow-up sequence to the recipient |
| **Remind Me** | Set a reminder for yourself to follow up |
| **AI Instant Nudge** | Generate and send an AI-written follow-up right away |

→ Details: **[Nudges & reminders](../tracking/nudges-and-reminders.md)**

## Automation actions

| Action | What it does |
|--------|--------------|
| **Test Rules** | See which of your rules would match this email, and why |
| **Reprocess** | Run your rules against this email again |
| **Run Rule** | Run one specific rule on this email |
| **Mark as…** | Mark the email as Spam, Cold Email, or Newsletter |

→ Learn more: **[Rules overview](../rules/overview.md)** ·
**[Conditions reference](../rules/conditions.md)**

## Snooze

**Snooze** hides an email from your inbox until a time you choose, then brings it back.
It's available as a **[Quick Action](./quick-actions.md)** — a custom keyboard shortcut
you set up in **Settings → Quick Actions** — rather than a default toolbar button.

→ Set one up: **[Quick actions](./quick-actions.md)**

## Unsubscribing

MailPrism handles unsubscribing from its dedicated **Bulk Unsubscribe** manager rather
than a per-email button. It groups noisy senders by brand and domain, shows how often
each emails you, and lets you unsubscribe from many at once — with an **undo** window
in case you change your mind. It uses senders' official unsubscribe links
(`List-Unsubscribe`, one-click where supported, or a body link as a fallback).

You can also keep an **ignore list** of senders or domains so they stay out of the
unsubscribe results.

:::note Where to find it
Open the **Unsubscribe** manager from the dashboard navigation to clean up
subscriptions in bulk.
:::

## Multiple emails at once

To act on several emails together — archive, delete, mark read/unread, star, or label
— select them with their checkboxes in the list. A bulk action bar appears above the
list with the available actions.
