---
sidebar_position: 1
title: Inbox Overview
description: Read and work through your mail inside MailPrism — the email list, conversation threads, views, account filter, search, and pagination.
---

# Inbox Overview

MailPrism isn't only a rules engine — you can read and clear your mail right inside
it, with your automations and AI signals close at hand. Click **Inbox** in the sidebar to get
started.

## The two-panel layout

The inbox is a **split view**:

- **Left** — your email list, grouped into conversation threads.
- **Right** — the email you've selected, with its full content and an action toolbar.

On narrow screens the panels stack: the list shows first, and selecting an email
slides the reading view in over it (with a **Back to list** control).

→ Reading view details: **[Reading an email](./reading-email.md)** ·
per-email actions: **[Email actions](./email-actions.md)**

## What each list row shows

Every row represents a **conversation thread**, showing the latest message plus:

| Element | What it tells you |
|---------|-------------------|
| **Sender** | Who the latest message is from |
| **Subject + preview** | The subject line and a short snippet |
| **Date** | When the latest message arrived |
| **Unread** | Bolder styling marks unread threads |
| **Star** | Whether you've starred it |
| **Labels** | User labels on the thread (system labels are hidden by default) |
| **Thread count** | How many messages are in the conversation |
| **Attachment** | A paperclip when the thread has files |

:::tip Show system labels
By default the list hides Gmail's system labels (`INBOX`, `UNREAD`, etc.) to stay
readable. You can opt to show them under **Settings → Appearance → Labels**.
:::

## Conversation threading

Email is really a series of *conversations*. MailPrism groups messages that share a
thread into one row, so you follow the whole back-and-forth in one place — and so
[response tracking](../tracking/overview.md) can reason about who replied last and
what's still open. Expand a thread to see its individual messages.

## Views

Tabs at the top of the list switch between Gmail's standard mailboxes:

<span class="mp-pill mp-pill--violet">Inbox</span>
<span class="mp-pill mp-pill--gray">Unread</span>
<span class="mp-pill mp-pill--gray">Starred</span>
<span class="mp-pill mp-pill--gray">Sent</span>
<span class="mp-pill mp-pill--gray">All Mail</span>
<span class="mp-pill mp-pill--gray">Spam</span>
<span class="mp-pill mp-pill--gray">Trash</span>

The **Inbox** tab shows an unread count badge. The **Unread** view is the quickest
way to filter down to just what you haven't read yet.

## Search

The search box filters the current view by free text — sender, subject, or message
content. Clear it with the **×** to return to the full list.

## Filter by account

If you've connected **more than one Gmail account**, an account selector appears above
the list. Choose **All accounts** to see everything together, or pick a single account
to focus. (With one account connected, the selector is hidden.) Your choice is
remembered for the session.

→ Connecting more accounts: **[Connecting Gmail](../getting-started/connecting-gmail.md)**

## Reading and unread status

By default, opening an email **doesn't** mark it read. To have MailPrism mark emails
read after you've viewed them for a few seconds, turn on **Auto-Mark as Read** in
**Settings → Privacy → Reading Behavior** — see
**[Privacy & Data](../account/privacy-and-data.md#reading-behavior)**.

To set status manually, use **Mark read / unread** in the email toolbar — see
**[Email actions](./email-actions.md)**.

## Pagination

When a view has more results than fit on one page, **Previous / Next** controls and a
**Page X of Y** indicator appear at the bottom of the list. If new mail arrives on
page 1 while you're further back, a banner offers to jump you to the top.

:::note Live updates
A small status dot by the title shows the live-update connection. When it's green, new
mail and changes appear in the list automatically — no manual refresh needed. There's
also a **Refresh** button if you want to force an update.
:::

## Working through mail in bulk

Select multiple threads with their checkboxes to act on them all at once —
**Archive**, **Mark Read**, **Mark Unread**, or **Delete**. A bulk action bar appears
above the list whenever one or more threads are selected.
