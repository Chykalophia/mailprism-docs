---
sidebar_position: 1
title: Response Tracking Overview
description: What response tracking is, the states a conversation moves through, the Replies view, and how emails get tracked.
---

# Response Tracking Overview

Some emails aren't chores to file — they're conversations that need to *move*.
**Response tracking** watches your threads and tells you whose turn it is, so nothing
important goes quiet without you noticing.

:::note It tracks *conversations*, not opens
Response tracking is about the **state of a thread** — whether it's waiting on you,
waiting on them, or done. It does **not** track whether someone opened or read your
email. There are no read receipts or open/click pixels.
:::

## The states a thread can be in

Every tracked conversation carries one state at a time. As people reply, MailPrism
moves the thread between these states for you.

| State | What it means |
|-------|---------------|
| <span class="mp-pill mp-pill--red">Needs Action</span> | The thread is waiting on **you** — a reply or an action. |
| <span class="mp-pill mp-pill--amber">Awaiting Reply</span> | You've responded; now you're waiting on **someone else**. |
| <span class="mp-pill mp-pill--blue">Pending</span> | In progress — neither side is clearly blocked right now. |
| <span class="mp-pill mp-pill--green">Resolved</span> | Handled and closed out. |
| <span class="mp-pill mp-pill--gray">Snoozed</span> | Set aside until later, so it's out of your way for now. |

You can match on a thread's state in your automations — see
**[Conditions reference](../rules/conditions.md#response-tracking)**.

## The Replies view

Open **Replies** in the sidebar to work through everything that's being tracked. It's a
split view — the list of tracked threads on the left, the selected conversation on
the right — just like your inbox.

A row of tabs across the top filters the list by state, each with a **live count**:

<span class="mp-pill mp-pill--gray">All</span>
<span class="mp-pill mp-pill--red">Needs Action</span>
<span class="mp-pill mp-pill--amber">Awaiting Reply</span>
<span class="mp-pill mp-pill--blue">Pending</span>
<span class="mp-pill mp-pill--green">Resolved</span>
<span class="mp-pill mp-pill--violet">Untracked</span>

**Untracked** lists emails MailPrism chose **not** to auto-track, so nothing
disappears silently. For each one you can **Track & trust sender** (track it, and
always track future email from that sender) or **Dismiss** it.

The **Needs Action** count is the one that follows you around — it's the badge you'll
see elsewhere in the app, because it's the work that's genuinely waiting on you.

From a tracked thread you can do the same things you'd do in the inbox — reply, archive,
label, nudge — plus **Resolve** it once the conversation is done. If you've connected
more than one Gmail account, the account filter and search work here too.

→ More on the split view and per-email actions: **[Inbox overview](../inbox/overview.md)**

## How emails enter tracking

A conversation can start being tracked in several ways:

| Path in | What triggers it |
|---------|------------------|
| **A rule** | A rule you built runs a tracking action (for example, *Track response needed*). |
| **Manually** | You mark a thread yourself from the inbox or Replies view. |
| **Label import** | You sync a Gmail label you already use into MailPrism's tracking. |
| **Basic mode** | Tracking is automatic — incoming mail and your replies are picked up for you. |
| **AI** | When AI features are on, MailPrism reads a thread and decides whether it's worth tracking. |

How automatic this is depends on your **tracking mode** — see
**[Tracking modes](./modes.md)**.

:::note When AI is used
The AI parts of tracking — reading a thread to judge its state, or filtering out
newsletters and notifications — only run while AI is on and your plan includes it. To
judge a thread, MailPrism sends each message's sender, recipients, date, and text, plus
your own address. With AI off, tracking still works using your rules, manual actions, and email direction.
:::

## Resolving and auto-resolution

A thread leaves your active lists when it's **resolved**. You can resolve a
conversation by hand at any time — but MailPrism can also do it for you:

- **When you reply**, the thread can move on automatically (it's no longer waiting on
  you).
- **After a quiet stretch**, an old conversation can resolve itself so stale items
  don't pile up.

These auto-resolution rules, plus what happens when a tracked email is deleted, are
controlled in your tracking settings — see **[Tracking modes](./modes.md)**.

## Related

- **[Tracking modes](./modes.md)** — Basic vs Advanced.
- **[Tracking profiles](./profiles.md)** — fine-tune what counts as needing a response.
- **[Tracking labels & sync](./labels-and-sync.md)** — link tracking states to Gmail labels.
- **[Tracking exemptions](./exemptions.md)** — skip routine, FYI mail.
- **[Nudges & reminders](./nudges-and-reminders.md)** — follow up on stalled threads.
- **[Auto-responders](./auto-responders.md)** — vacation and after-hours replies.
- **[Actions reference](../rules/actions.md#response-tracking)** — the tracking actions a rule can run.
