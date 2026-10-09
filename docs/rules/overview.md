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
| **Run this rule on** | **Received and sent mail**, **Received mail only**, or **Sent mail only**. Most rules only need received mail. |
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

- **Gmail push notifications** — Gmail tells MailPrism the moment new mail arrives,
  and MailPrism processes it right away.
- **Scheduled background runs** — MailPrism also checks for mail on a schedule, to
  catch anything a notification missed.

### Processing frequency

The **Processing frequency** setting is in **Settings → Rule Defaults & Safety →
Execution Settings**. It has three options: **Real-time**, **Hourly**, and **Daily**.

:::caution What this setting changes today
**Processing frequency** only paces MailPrism's **scheduled background runs**. Mail that
arrives through a Gmail push notification is processed as it arrives (unless
**[quiet hours](#quiet-hours)** are active), whichever option you pick. So choosing **Hourly** or **Daily** does **not** hold new mail back until the
next hour or day.
:::

The same **Execution Settings** card also lets you tune **batch size** (how many emails a
single scheduled run handles), a **cooldown** between runs, and a **per-hour rate
limit**.

### Quiet hours

If you turn on **Quiet Hours** (**Settings → Rule Defaults & Safety → Quiet Hours**),
quiet hours pause rule processing during the window. Quiet hours use the timezone from
your **Date & Time** settings.

:::caution Quiet hours skip, they don't queue
Mail that arrives during quiet hours isn't saved up and run when the window ends. Don't
rely on quiet hours to delay an action until morning.
:::

:::note Plan limits
How much MailPrism can process each month depends on your plan. See your current
limits and usage in **Billing** rather than relying on a number here.
:::

## Where rules run: applies to

A rule can run on **all** your connected Gmail accounts or only **specific**
ones. Set this with the **Applies to** option when you build or edit a rule —
handy when a work-only or personal-only automation shouldn't touch your other
inbox.

### Received or sent mail

**Run this rule on** (in the rule builder's advanced options) picks which messages
the rule looks at:

| Option | Runs on |
|--------|---------|
| **Received and sent mail** | Everything |
| **Received mail only** | Mail sent to you |
| **Sent mail only** | Mail you send |

Narrowing it skips work on messages the rule doesn't care about.

## Managing your rules

The **Rules** page has four tabs:

| Tab | What's in it |
|-----|--------------|
| **Active** | The rules you created. **Enable or disable** a rule with its toggle, or **edit** or **delete** it. |
| **Built-in** | MailPrism's built-in filters, grouped by purpose. Turn each one on or off. Tracking and the auto-responder link out to their own settings pages. |
| **Muted** | Senders you've muted, with a **Mute a sender** option. Unmuting gives you a few seconds to undo. |
| **All · History** | Every rule, including built-in ones, with filters for **source** and **phase**. Open a rule's **history** to see its past runs and versions. |

Also on the page:

- **Create Rule** — opens the **[AI drafter](./building-with-ai.md)**, with a switch to
  the **Rule builder**.
- **Browse Templates** — the **[Rule library](./library.md)**.
- **More → Export Rules** — download your rules as a JSON file (for backup or
  moving between accounts).
- **More → Import Rules** — bring rules in from a JSON file. They arrive turned off.
  See **[Import & export rules](./import-export.md)**.

Built-in rules can be turned off, but not deleted.

### Pre-filter rules (advanced)

**Settings → Pre-Filter Rules** tunes which email **categories** MailPrism keeps out
of your action queue before tracking and rules look at them. It has two cards:

| Card | Who can edit | Applies to |
|------|--------------|------------|
| **Workspace overrides** | Workspace owners and admins (others see it read-only) | Everyone in the workspace |
| **Per-account overrides** | You | One of your connected Gmail accounts (pick it from the **Account** list) |

In each card you can:

- **Categories kept out of the action queue** — check more categories to filter, or
  uncheck a default to let it surface again.
- **Always treat as urgent** — add categories that always stay actionable. The locked
  ones can't be removed.
- **Pre-filter enabled** — **Inherit (default)**, **On**, or **Off**.

Click **Save overrides** to apply. The most specific setting wins:
**account override → workspace override → system default**. An empty override simply
inherits the layer below it.

→ See **[Analytics & logs](../analytics.md)** for the audit trail and the undo
grace period.

## What's next

- **[Conditions reference](./conditions.md)** — every field and operator.
- **[Actions reference](./actions.md)** — every action and its options.
- **[Rule library](./library.md)** — start from a ready-made template.
- **[Best practices](./best-practices.md)** — keep rules reliable as they grow.
