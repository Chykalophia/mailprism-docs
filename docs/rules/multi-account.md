---
sidebar_position: 7
title: Rules Across Multiple Accounts
description: Choose whether a rule runs on every connected Gmail account or just one.
---

# Rules Across Multiple Accounts

If you've connected more than one Gmail account to MailPrism, each rule can run on
**all** of your accounts or be scoped to **one specific account**. This lets you keep
work and personal automations separate while sharing the rules that should apply
everywhere.

:::note Only shows up with more than one account
The account scope option appears only when you have **two or more** Gmail accounts
connected. With a single account there's nothing to choose — every rule runs on that
account. See **[Connecting Gmail](../getting-started/connecting-gmail.md)** to add
another account.
:::

## Setting the scope

When you create or edit a rule, the **Basic Information** section includes an
**Apply to Account** picker. Choose one of:

| Option | What it means |
|--------|---------------|
| **All connected accounts** | The rule runs on email from every Gmail account you've connected. |
| *A specific account* (by address) | The rule runs only on email arriving in that one account. |

That's the whole control — pick "all" or pick one account, then save the rule.

## When to scope to a specific account

Scope a rule to one account when the automation only makes sense there:

- **Work-only filing** — label and route project mail in your work inbox, and leave
  your personal inbox untouched.
- **Account-specific senders** — a newsletter or vendor that only ever emails one of
  your addresses.
- **Different labels per account** — when each account has its own label set, point
  the rule at the account whose labels it uses.

Leave a rule on **All connected accounts** when it's a habit you want everywhere —
archiving promotions, flagging email from your manager, filing receipts.

:::tip Match labels to the account
Labels live inside a specific Gmail account. If a rule applies a label, make sure that
label exists in the account(s) the rule runs on — otherwise the action can't complete.
A specific-account scope keeps this simple.
:::

## How scope affects testing

When you **[test a rule](./testing.md)**, MailPrism uses the rule's scope to decide
which account's email to pull from. A rule scoped to a specific account is tested
against *that* account; an "all accounts" rule is tested against your primary active
account. If the scoped account isn't available, MailPrism falls back to an active
account so the test can still run.

→ Next: **[Scheduling & recurrence](./scheduling-recurrence.md)** · See also
**[How rules work](./overview.md)**
