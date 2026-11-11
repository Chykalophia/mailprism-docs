---
sidebar_position: 1
title: Inbox Overview
description: The unified inbox — views, splits, row states, sections, bundles, Later, Done and the Details drawer.
---

# Inbox Overview

The inbox is built to answer one question first: **what needs you?** Every row says
whether it needs you, whether you're waiting on someone, or whether it's just for
your information. Bulk mail folds into bundles, so you can clear all of it in one
click. Click **Inbox** in the sidebar to get started.

<Screenshot
  src="/img/screens/inbox/overview.webp"
  srcDark="/img/screens/inbox/overview-dark.webp"
  alt="The unified inbox: views in the sidebar, the list with Needs you and Waiting on them chips, a bundle row, and the open email on the right"
/>

## The layout

- **Sidebar**: the four inbox views (Inbox, Replies, Later, New senders).
- **List**: your conversations, with view pills, split tabs and search above them.
- **Reader**: the email you selected. A summary strip at the top shows who it's from,
  its state, and the **Later**, **Done**, **Delete** and **Details** buttons.

On a phone the list fills the screen and opening an email slides the reader over it.
A thumb bar at the bottom holds the main actions, and you can swipe a row: swipe
right to set it aside until tomorrow morning, swipe left to mark it Done.

<Screenshot
  src="/img/screens/inbox/phone.webp"
  alt="The inbox on a phone"
  width={390}
/>

## Views

The four views sit in the sidebar and as pills above the list.

| View | What it shows |
|------|---------------|
| **Inbox** | Everything that's still open |
| **Replies** | Conversations that need you, and ones where you're waiting on them |
| **Later** | Mail you set aside, with the reason you gave and when it comes back |
| **New senders** | First emails from people you haven't decided about yet |

<Screenshot
  src="/img/screens/inbox/view-replies.webp"
  srcDark="/img/screens/inbox/view-replies-dark.webp"
  alt="The Replies view: only conversations that need you or are waiting on a reply"
/>

**Replies** is the same list, narrowed to [tracked conversations](../tracking/overview.md).
The full Replies page, with its analytics and holds, is still there: open it from the
dashboard's reply cards, or press **G** then **R**.

**Later** lists each set-aside email with its reason and the time it comes back.

<Screenshot
  src="/img/screens/inbox/view-later.webp"
  alt="The Later view: three emails, each with its reason and when it comes back"
/>

**New senders** works like a screener. Each row says it's the first email from that
address and offers **Let in** or **Screen out**. Mail from someone you let in always
reaches your inbox. Mail from someone you screen out skips it.

<Screenshot
  src="/img/screens/inbox/view-new-senders.webp"
  alt="The New senders view with Let in and Screen out buttons on each row"
/>

## Splits

Tabs under the view pills narrow the list by what the mail is for. They use Gmail's
own categories, so they match what Gmail shows.

| Split | What's in it |
|-------|--------------|
| **All** | Everything in the current view |
| **People** | Gmail's Primary category: mail from people |
| **Updates** | Receipts, notifications, social and forum mail |
| **Newsletters** | Gmail's Promotions category |

<Screenshot
  src="/img/screens/inbox/split-newsletters.webp"
  alt="The Newsletters split, with a newsletter bundle and a cold email"
/>

## What a row shows

Every row is one **conversation**: the sender, subject, how long ago it arrived, a
message count when there's more than one, and colored dots for its labels. A blue
dot before the name means unread.

Rows that need something carry a **state chip**:

| Chip | Meaning |
|------|---------|
| <span class="mp-pill mp-pill--red">Needs you</span> | Someone is waiting on you: a question, a request, a decision |
| <span class="mp-pill mp-pill--amber">Waiting on them</span> | You replied and are waiting for their answer |
| <span class="mp-pill mp-pill--violet">Later</span> | Set aside, coming back at a time you chose |
| <span class="mp-pill mp-pill--green">Done</span> | Handled |
| <span class="mp-pill mp-pill--blue">New sender</span> | The first email from this address |

Mail with no chip is **FYI**: nothing for you to do.

A **Waiting on them** row also has a small ring on the right. It fills up as the date
you expect a reply gets closer, turns amber on the day, and turns red once it's late.
The line under the subject says how long it's been and when you expected an answer.

When you hover a row, quick buttons appear on its right: **Reply** (R), **Later** (L),
**Done** (E), **Track** (T) or **Nudge** (N) where they fit, and **Delete** (#).

### Why is this here?

Click a state chip to see why the email got that state, for example "Priya asked you a
direct question". If it's wrong, choose what it should be. Tick **Always do this for
mail from** the sender's domain to make that a rule.

<Screenshot
  src="/img/screens/inbox/why-chip.webp"
  alt="The Why popover on a Needs you row, with the reason and the It should be choices"
/>

## Sections and grouping

By default the list is split into **sections**:

1. **Needs you or waiting**: anything with a Needs you or Waiting on them chip.
2. **New for you**: unread mail.
3. **Previously seen**: everything else.

The **View** button above the list turns sections on or off, groups the list by day
(Today, Yesterday, This week, Earlier) instead, and turns bundles on or off. Row density
lives in **Settings › Appearance**.

<Screenshot
  src="/img/screens/inbox/view-options.webp"
  alt="The View menu with Sections, Group by day and Bundle bulk senders"
/>

## Bundles

When two or more FYI emails share a type, they fold into one **bundle** row:
**Newsletters & promotions**, **Updates**, **Social** or **Forums & lists**. Click the
bundle to open it and see what's inside.

<Screenshot
  src="/img/screens/inbox/bundle-open.webp"
  alt="An open Updates bundle showing its three emails"
/>

**Done all** clears the whole bundle in one click. By default that archives the emails
and marks them read. The **▾** next to it lets you pick something else for this bundle:

- Archive and mark read (the default)
- Mark read, keep in inbox
- Archive only (keeps them unread)
- Apply a label and archive
- Run a rule

Tick **Always do this for** the bundle to remember your choice.

<Screenshot
  src="/img/screens/inbox/bundle-menu.webp"
  alt="The Done all menu on a bundle, with its five choices"
/>

## Later, Done and Delete

- **Later** sets an email aside: **Later today**, **In 3 hours**, **Tomorrow morning**,
  **This weekend**, **Next week**, or a date and time you pick. You can add a reason
  ("Waiting on the contract") so you remember why when it comes back. It leaves the
  inbox and shows up in the **Later** view until then.
- **Done** archives the conversation, marks it read, and marks it handled if it was
  being tracked.
- **Delete** moves it to the trash.

<Screenshot
  src="/img/screens/inbox/later-menu.webp"
  alt="The Later menu with a reason field and the time choices"
/>

After any of these, an **Undo** bar appears at the bottom of the screen for a few
seconds. Click **Undo** or press **Z** to take it back. The bar pauses while your mouse
is over it.

### Rule suggestions

If you clear three emails from the same sender in a day, MailPrism offers to make
it automatic: **Make the rule** archives and marks their mail read from then on. Choose
**Not now** to dismiss it, or **Never for this sender** to stop being asked.

## The Details drawer

**Details** in the summary strip opens a drawer about the sender and the conversation:
how often you've written to each other, when you first and last talked, your
relationship, the thread's state and why, and when you expect a reply. Pin it to keep
it open beside every email you read.

<Screenshot
  src="/img/screens/inbox/details-drawer.webp"
  alt="The Details drawer with the sender's history and the thread's state"
/>

## Expecting a reply

When you reply, a bar under the composer asks **Expect a reply by**: no, or one of a few
dates. Pick one and the conversation moves to **Waiting on them** as soon as you send,
with the ring counting down to that date.

## Settings › Inbox

**Settings › Inbox** holds the same grouping switches as the View menu, the default
for **Done all**, the label or rule that Done all uses, and any per-bundle choices
you've saved with **Always do this**.

<Screenshot
  src="/img/screens/inbox/settings-inbox.webp"
  alt="Settings › Inbox: grouping, the Done all default, and per-bundle choices"
/>

## Search, accounts and pages

- **Search** filters the current view by sender, subject or text. Clear it with **×**.
- With **more than one Gmail account** connected, an account picker appears above the
  list. Choose **All accounts** or a single account.
- When there's more than one page, **Previous / Next** and **Page X of Y** appear at the
  bottom.
- New mail and changes appear on their own. **Refresh** forces an update.

## Reading and unread status

Opening an email doesn't mark it read unless you turn on **Auto-Mark as Read** in
**Settings › Privacy › Reading Behavior**. See
**[Privacy & Data](../account/privacy-and-data.md#reading-behavior)**.

→ More: **[Reading an email](./reading-email.md)** ·
**[Email actions](./email-actions.md)** ·
**[Bulk actions](./bulk-actions.md)** ·
**[Keyboard shortcuts](./keyboard-shortcuts.md)**
