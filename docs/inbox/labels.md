---
sidebar_position: 6
title: Labels & Organization
description: Apply and remove Gmail labels, control which labels show, and find email by label.
---

# Labels & Organization

MailPrism uses your existing **Gmail labels** — the same ones you see in Gmail. Apply
and remove them here, and they sync straight back to your mailbox.

## Applying and removing a label

Use the **label** action on an email's toolbar (or in the email view) to open the
**label picker**:

- **Add a label** — the picker lists your labels that aren't already on the email.
- **Remove a label** — it lists only the labels currently on the email.
- Start typing to filter the list, then click a label or press **Enter** to apply it.

Each label shows its color so it's easy to recognize. See
**[Email actions](./email-actions.md)** for where the label button lives on the toolbar.

:::note Creating a new label
The picker shows the labels in your Gmail account. To create a brand-new label in
MailPrism, go to **Settings → Gmail Accounts** and use **Create Label** on the account.
(Labels you create in Gmail also appear here after they sync.)
:::

## User labels vs. Gmail system labels

Gmail has two kinds of labels:

| Type | Examples | In MailPrism |
|------|----------|--------------|
| **Your labels** | *Clients*, *Receipts*, *Travel* | Shown on emails and offered in the label picker. |
| **System labels** | INBOX, IMPORTANT, STARRED, SENT, CATEGORY_* | Hidden by default — they have their own controls. |

System labels are kept out of the picker on purpose: actions like **Star**,
**Important**, and **Archive** already manage them directly, so listing them again would
only add noise.

### Showing system labels

If you *want* to see Gmail's built-in labels on your emails, turn on **Show Gmail system
labels** under **Settings → Appearance**. It's off by default because most people find
labels like INBOX and IMPORTANT distracting (under **Settings → Appearance**).

## Finding email by label

To pull up everything with a given label, use the **search** box with Gmail's
`label:` operator. Search only looks inside the **current tab**, so switch to the
**All Mail** tab first — otherwise results are limited to the tab you're on (on the
**Inbox** tab, only labelled mail that's still in your inbox). For example:

```
label:clients
```

Combine it with other terms to narrow further. See
**[Search & filters](./search-and-filters.md)** for the full syntax.

## Nested labels

If you organize Gmail with nested labels (a parent label with sub-labels, like
`Clients/Acme`), MailPrism shows the label name exactly as Gmail stores it, and you can
search for it the same way:

```
label:clients/acme
```

## Automating labels

Rules can apply or remove labels for you — for example, label every newsletter or tag
anything from a key client automatically. See **[Actions reference](../rules/actions.md)**.

→ Next: **[Search & filters](./search-and-filters.md)**
