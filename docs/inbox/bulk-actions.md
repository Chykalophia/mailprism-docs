---
sidebar_position: 4
title: Bulk Actions
description: Select several emails at once and act on all of them in one click.
---

# Bulk Actions

When you have a stack of emails to clear, you don't have to handle them one by one.
Tick the checkboxes, and a **bulk action bar** appears at the top of the list so you
can act on the whole selection at once.

## Selecting emails

- **Click a checkbox** on any row to add that email to your selection.
- Click more checkboxes to keep adding.
- Press **Ctrl/Cmd + A** to select every email currently shown in the list.
- The bar shows a running count — for example, **5 selected**.

The selection only ever covers the emails *in view*. Switch tabs, change the account
filter, or move to another page and the selection clears to whatever is now on screen,
so you never accidentally act on emails you can't see.

## What you can do

Once one or more emails are selected, the bar offers these actions:

| Action | What it does | Confirmation |
|--------|--------------|--------------|
| **Archive** | Removes the emails from the inbox without deleting them. | No |
| **Mark Read** | Marks the selection as read. | No |
| **Mark Unread** | Marks the selection as unread. | No |
| **Delete** | Moves the emails to Gmail's Trash. | **Yes** — asks before deleting |

To dismiss the bar without acting, press the **×** at its left edge to clear the
selection.

:::note Delete asks first
Delete is the only bulk action that prompts you to confirm. It moves messages to
**Trash**, where Gmail keeps them for 30 days — so you can still undo it from Gmail if
you change your mind.
:::

## Works across multiple accounts

If you've connected more than one Gmail account, a bulk action correctly targets each
email's *own* mailbox. You can select emails from different accounts in the same list
and one click applies the action to all of them, account by account.

## When some succeed and some don't

If part of a bulk action fails (a network hiccup, for example), MailPrism tells you how
many went through and how many didn't — and leaves the **failed** emails still selected
so you can retry them with a single click. The list always refreshes to match Gmail's
real state afterward.

## Single-email actions

Looking to **star**, **label**, **snooze**, or **unsubscribe** an email? Those run on
one email at a time from the row or the email view — see
**[Email actions](./email-actions.md)** and **[Labels](./labels.md)**. To re-run your
automations against a message, open it and use the rule tools described in
**[Rules & automation](../rules/overview.md)**.

→ Next: **[Composing & replying](./composing.md)**
