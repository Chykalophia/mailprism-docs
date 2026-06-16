---
sidebar_position: 1
title: How Rules Work
description: The anatomy of a MailPrism rule, the order rules run in, and how often they process your mail.
---

# How Rules Work

Rules are the engine of MailPrism. Each rule is a single idea:

> **When** an email matches my **conditions**, run my **actions**.

That's the whole model. Everything else on this page is detail — the parts of a
rule, the order they run in, and how often MailPrism processes new mail.

## Anatomy of a rule

Every rule is built from the same parts. You set them in the rule builder
(**Rules → Create Rule**) and can change them any time.

| Part | What it does |
|------|---------------|
| **Name** | How you'll recognize the rule in your list. |
| **Description** | Optional notes about what the rule is for. |
| **Conditions** | The *when* — what an email must match. Combine with AND / OR / NOT and nested groups. |
| **Actions** | The *what* — what happens when the conditions match. You can add several; they run in order. |
| **Priority** | The order rules run in when more than one could match. |
| **Stop processing** | If on, no later rules run on that email once this rule matches. |
| **Applies to** | All connected Gmail accounts, or only specific ones. |
| **Enabled** | A simple on/off toggle. Disabled rules are kept but never run. |

### Conditions, briefly

Conditions match on far more than just the sender. You can match on subject,
body, labels, attachments, **the time and day**, how often a sender mails you,
your **relationship** with the sender, **response-tracking state**, and **AI
signals** like urgency and category.

→ The full list: **[Conditions reference](./conditions.md)**

### Actions, briefly

When a rule matches, it can label, archive, star, mark read, forward, draft or
send a reply, unsubscribe, update response tracking, start a nudge, notify you,
and more. Actions within a rule run **in order**, top to bottom.

→ The full list: **[Actions reference](./actions.md)**

## The order rules run in

When an email arrives, MailPrism doesn't run your rules at random. It sorts them
by **priority**, then works down the list.

:::warning Lower number = higher priority
Priority is a number, and **the lowest number runs first**. A rule with priority
**0** runs before a rule with priority **10**. `0` is the highest priority you can
set on a normal rule.
:::

So the running order is:

1. Sort every enabled rule by priority — **lowest number first**.
2. Evaluate each rule's conditions against the email, in that order.
3. When a rule matches, run its actions.
4. If a matching rule has **Stop processing** turned on, stop there for this
   email. Otherwise, keep going and let other matching rules run too.

### Stop processing

By default, an email can match — and be acted on by — several rules. **Stop
processing** changes that: once the rule matches, MailPrism runs its actions and
then stops evaluating any later (lower-priority) rules for that email.

:::tip Priority + Stop processing = control
Give a high-priority "VIP sender" rule a low priority number (e.g. `0`) and turn
on **Stop processing**. Important senders are then handled first, before any
broad catch-all rule can archive or relabel them.
:::

### What "matched" means

A rule matches when its conditions evaluate to true for the email. You combine
conditions with **AND**, **OR**, and **NOT**, and you can nest them into groups
for precise logic — for example *(From contains "amazon" OR "ebay") AND Subject
contains "shipped"*. The [Conditions reference](./conditions.md) covers this in
full.

## How often rules run

MailPrism reacts to your mail in two ways, working together:

- **Gmail push notifications** — Gmail tells MailPrism the moment something
  changes, so processing can start without waiting for a fixed polling interval.
- **A processing frequency you choose** — under **Settings → Scheduling** you set
  how often rules process new mail.

### Processing frequency

The **Processing frequency** setting (Settings → Scheduling) has three options:

| Option | What it means |
|--------|---------------|
| <span class="mp-pill mp-pill--green">Real-time</span> | Process emails as they arrive (as often as your plan allows). |
| <span class="mp-pill mp-pill--blue">Hourly</span> | Process new emails once per hour. |
| <span class="mp-pill mp-pill--blue">Daily</span> | Process new emails once per day. |

The same Scheduling page also lets you tune **batch size** (how many emails a
single run handles), a **cooldown** between runs, and a **per-hour rate limit**.

### Quiet hours

If you turn on **Quiet hours** (Settings → Scheduling), rules pause during the
window you set. Emails that arrive during quiet hours are **queued and processed
when the window ends** — nothing is skipped, just delayed. Quiet hours use the
timezone from your **Date & Time** settings.

:::note Plan limits
How much MailPrism can process each month depends on your plan. See your current
limits and usage in **Billing** rather than relying on a number here.
:::

## Where rules run: applies to

A rule can run on **all** your connected Gmail accounts or only **specific**
ones. Set this with the **Applies to** option when you build or edit a rule —
handy when a work-only or personal-only automation shouldn't touch your other
inbox.

## Managing your rules

On the **Rules** page you can:

- **Filter** by status — **All**, **Active**, **Paused**, or **Errors** — and
  **search** by name or description.
- **Enable or disable** a rule with its toggle, without deleting it.
- **View**, **edit**, or **delete** a rule from its card.
- **Export** all your rules to a JSON file from the **More** menu (for backup or
  moving between accounts).
- See each rule's **execution count** and **last activity** at a glance.
- Open **Execution History** to see every run, and **undo** recent rule actions.

→ See **[Analytics & logs](../analytics.md)** for the audit trail and the undo
grace period.

### Core rules

Some rules ship as system defaults and carry a <span class="mp-pill mp-pill--blue">Core
Rule</span> badge — for example the rules that keep response tracking working.
You can **turn a core rule off**, but you **can't delete it**. Everything is
logged in your Execution History either way.

## What's next

- **[Conditions reference](./conditions.md)** — every field and operator.
- **[Actions reference](./actions.md)** — every action and its options.
- **[Rule library](./library.md)** — start from a ready-made template.
- **[Best practices](./best-practices.md)** — keep rules reliable as they grow.
