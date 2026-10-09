---
sidebar_position: 11
title: Bulk Unsubscribe
description: Clean up your inbox in one place — the Bulk Unsubscribe manager groups noisy senders by brand and domain, with undo and an ignore list.
---

# Bulk Unsubscribe

Newsletters, receipts, and promotional blasts pile up. MailPrism's **Bulk Unsubscribe
Manager** is a dedicated page that finds the senders cluttering your inbox and lets you
unsubscribe from many at once.

:::note It's a page, not a button
Unsubscribing in MailPrism happens from this manager — not from a per-email toolbar
button. Open the **Unsubscribe** page from your dashboard navigation.
:::

## What the manager shows

At the top, a row of stats summarizes your subscriptions:

| Stat | What it counts |
|------|----------------|
| **Active Senders** | Unique senders detected in your mail |
| **Domains** | How many sender domains are tracked |
| **Unsubscribed** | Senders you've successfully unsubscribed from |
| **Emails Blocked** | An estimate of the messages you've prevented |

Below the stats, three tabs organize the work: **Senders**, **History**, and
**Ignored**.

## Senders, grouped by brand and domain

The **Senders** tab lists subscriptions grouped by **brand and domain**. Each group
shows the brand name, the domain, how many individual senders it covers, the total
email count, and when the last email arrived (**Last: …**). The group header also has
an **Unsubscribe All** button that unsubscribes from every sender in that group at
once.

Expand a group to see the individual senders inside it. Each sender has a
**frequency** badge (daily, weekly, monthly, occasional) so you can spot the noisiest
offenders fast, and these actions:

| Action | What it does |
|--------|--------------|
| **Unsub** | Unsubscribe from that single sender |
| **Ignore** (eye-slash) | Hide the sender so it stops appearing in the list |

Use the **search box** to filter by sender name, email, or domain, and **Expand All** /
**Collapse All** to move through long lists quickly.

## How detection works

MailPrism analyzes your mail to find subscription senders, then uses each sender's
*official* unsubscribe mechanism:

1. **One-click unsubscribe link** — MailPrism first tries the standard one-click
   request (an HTTP **POST**), and if the sender doesn't accept that, falls back to
   simply visiting the link (a **GET**).
2. **Unsubscribe email** — when a sender offers a `mailto:` unsubscribe address,
   MailPrism can send the unsubscribe email for you.
3. **Body link** — an unsubscribe link found in the email's body is also supported.

:::note Some unsubscribes take time
MailPrism uses senders' real unsubscribe channels, so a few may take a day or two to
fully take effect on the sender's side.
:::

## Undo a mistake

Changed your mind? Every unsubscribe waits **5 seconds** before it's actually carried
out, and the **History** tab keeps a record you can act on.

- Each entry shows the sender, the **method** used, and a status —
  <span class="mp-pill mp-pill--amber">pending</span>,
  <span class="mp-pill mp-pill--green">completed</span>, or
  <span class="mp-pill mp-pill--red">failed</span>.
- While an action is still **pending**, an **Undo** button cancels it before it runs.

:::tip Catch it early
The undo window is only 5 seconds, so if you unsubscribed by accident, hit **Undo** in
the History tab right away.
:::

## The ignore list

Some senders you want to *keep* — even if MailPrism detects them — without seeing them
in the unsubscribe list every time. Add them to your **ignore list** and they're hidden
from the Senders tab.

- Ignore a sender from the Senders tab with the **eye-slash** button.
- Manage everything you've ignored in the **Ignored** tab, where you can **Remove** a
  sender to bring it back into the list.

:::note Ignore ≠ unsubscribe
Ignoring a sender only hides it from the unsubscribe manager. It doesn't unsubscribe you
or block the mail — you'll still receive those emails in your inbox.
:::

→ Related: **[Email actions](./email-actions.md)** ·
**[Inbox overview](./overview.md)**
