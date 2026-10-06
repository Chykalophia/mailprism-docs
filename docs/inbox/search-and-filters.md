---
sidebar_position: 7
title: Search & Filters
description: Find any email fast with search and the inbox view, account, and label filters.
---

# Search & Filters

Two tools narrow down what you see: the **search box** for finding specific mail, and
the **filters** for slicing the list by view, account, and label.

## Search

The search box sits above the email list. Type a few words and MailPrism searches your
mail through Gmail — across the **subject**, **sender**, **recipients**, and message
**content** — and shows the matches.

Search runs against your real mailbox, not just what's on screen — it covers the whole
**current tab**, including emails beyond the current page. To search everything, switch
to the **All Mail** tab first.

### Gmail search operators

Because search runs through Gmail, you can use Gmail's own search operators for precise
results. A few of the most useful:

| Operator | Finds |
|----------|-------|
| `from:` | Mail from a sender — e.g. `from:boss@company.com` |
| `to:` | Mail sent to someone — e.g. `to:me` |
| `subject:` | A word in the subject — e.g. `subject:invoice` |
| `has:attachment` | Mail with files attached |
| `is:unread` | Unread mail |
| `label:` | Mail with a given label — e.g. `label:clients` |
| `after:` / `before:` | Mail by date — e.g. `after:2026/01/01` |

:::tip One operator at a time
An operator works best on its own line of text with **no spaces in the value** — like
`from:acme.com` or `subject:report`. If you type several words separated by spaces,
MailPrism treats the whole thing as an exact phrase to match, rather than as separate
operators. To combine an operator with extra terms, lean on the **filters** below.
:::

To clear a search, press the **×** in the box.

## Filters

### View

Tabs above the list switch which slice of your mailbox you're looking at:

| View | Shows |
|------|-------|
| **Inbox** | Your inbox (the default). |
| **Unread** | Only unread mail. |
| **Starred** | Only starred mail. |
| **Sent** | Mail you've sent. |
| **All Mail** | Everything across your mailbox. |
| **Spam** | Mail Gmail flagged as spam. |
| **Trash** | Deleted mail (Gmail clears it after 30 days). |

Only the **Inbox** tab shows a badge with your unread count.

### Account

If you've connected more than one Gmail account, the **account filter** lets you view
one account at a time or all of them together. Your choice is remembered as you move
around. See **[Gmail connection](../account/gmail-connection.md)**.

### Label

To filter by a label, search with the `label:` operator (see above). More on labels in
**[Labels & organization](./labels.md)**.

## Putting it together

Search and filters stack. Pick the **Unread** view, choose one account, and search
`from:acme.com` to see only unread mail from that company in that mailbox — then clear
the search to widen back out.

→ Back to: **[Inbox overview](./overview.md)** · **[Bulk actions](./bulk-actions.md)**
