---
sidebar_position: 3
title: Create Your First Rule
description: A guided walkthrough — build a simple, useful rule from start to finish.
---

# Create Your First Rule

A **rule** is a simple instruction: **when** an email matches your conditions,
**do** the actions you chose. Let's build one together.

We'll make a classic: *automatically label and archive newsletters.*

## Step 1 — Open the rule builder

Go to **Rules**, then click **New Rule**. You'll see two areas:

- **Conditions** — *when* should this rule run?
- **Actions** — *what* should happen when it does?

:::tip Prefer a head start?
Open the **Rule Library** instead and pick a ready-made template, then tweak it.
See **[Rule Library](../rules/library.md)**.
:::

## Step 2 — Name it

Give the rule a clear name like **“Archive newsletters.”** Good names make a long
rule list easy to scan later. A description is optional but helpful.

## Step 3 — Add a condition

Add one condition to start:

> **From** · *contains* · `newsletter`

This matches mail from any address containing the word *newsletter*. You can add
more conditions later and combine them with **AND / OR / NOT**.

→ Every field and operator: **[Conditions reference](../rules/conditions.md)**

## Step 4 — Add actions

Add two actions, which run in order:

1. **Apply label** → `Newsletters`
2. **Archive**

Now matching mail is tagged and moved out of your inbox — but kept and searchable.

→ Every action: **[Actions reference](../rules/actions.md)**

## Step 5 — Save and enable

Save the rule and make sure its toggle is **on**. From now on, when a matching
email is processed, MailPrism labels and archives it for you. How often that
happens depends on your **processing frequency** (real-time, hourly, or daily) —
see **[How rules work](../rules/overview.md)**.

## Step 6 — Watch it work

Open **Analytics** (or **Rule Logs**) to see what your rule has done: how many
emails it matched and which actions ran. This is your audit trail.

If something isn't matching the way you expect, you can edit the rule, narrow or
widen its conditions, or pause it — nothing is permanent.

## Helpful next moves

- **Be specific to start.** One condition, one or two actions. Add complexity once
  it behaves the way you want.
- **Use priority and "stop processing"** when you have several rules that could
  touch the same email. See **[How rules work](../rules/overview.md)**.
- **Bring in AI** for things keywords can't catch — “is this urgent?”, “is this a
  cold sales pitch?”. See **[AI features](../ai/overview.md)**.

:::note
Want patterns that hold up over time? Read **[Best practices](../rules/best-practices.md)**.
:::
