---
sidebar_position: 2
title: Google Calendar
description: Connect Google Calendar so AI can check your availability and suggest meeting times in replies.
---

# Google Calendar

When you reply to an email about scheduling, MailPrism can check your calendar and
suggest times you're actually free. This page explains how to connect Google Calendar
and control what it can see.

:::tip What it reads — and what it doesn't
MailPrism reads **free/busy** data only (whether a block of time is taken), never the
titles, guests, or details of your events. Calendar data is fetched on demand when
generating a reply and **is not stored**.
:::

## What you can do with it

- **AI sees your availability.** When AI generates a reply, it can include open time
  slots from your selected calendars.
- **Auto-detect scheduling.** MailPrism can automatically notice when an email is
  about scheduling and offer availability — you don't have to ask.
- **Pick which calendars count.** Choose exactly which of your calendars are checked
  for busy time.

## Connect Google Calendar

1. Connect a Gmail account first if you haven't — see
   **[Connecting Gmail](../getting-started/connecting-gmail.md)**.
2. Go to **Settings → Calendar**.
3. If you have more than one Gmail account, choose which one to set up at the top.
4. Click **Connect Calendar** and grant **read-only** calendar access in the Google
   prompt.

Once connected, the page shows a **Connected** badge and your calendars appear below.

:::note Granting calendar access
Connecting adds a calendar permission to a Gmail account you've already connected. You
grant it through Google's standard consent screen — MailPrism only requests
**read-only** access.
:::

## Choose your calendars

Under **Calendars**, tick the calendars you want MailPrism to check for availability.
Your primary calendar is listed first. Only the calendars you select are used.

## Settings

| Setting | What it does |
|---------|--------------|
| **Enable Calendar Integration** | Master switch — allows AI to use your calendar when generating replies |
| **Auto-Detect Scheduling Intent** | AI automatically spots scheduling emails and includes availability |
| **Visibility** | **Workspace** lets teammates see your availability; **Private** keeps calendar data to you only |

## Preview your availability

Use **Availability Preview** to load your upcoming busy blocks from the calendars
you selected. This is a quick way to confirm MailPrism is reading the right calendars
before you rely on it in replies. You need at least one calendar selected to load a
preview.

## Disconnect

On the **Connection Status** card, click **Disconnect** to revoke calendar access.
MailPrism stops checking your calendar immediately. Your Gmail connection itself is
unaffected.

## Related

- **[Connecting Gmail](../getting-started/connecting-gmail.md)** — required before
  you can connect a calendar.
- **[AI features overview](../ai/overview.md)** — AI must be on for scheduling
  suggestions to appear.
- **[Integrations overview](./overview.md)** — everything MailPrism connects to.
