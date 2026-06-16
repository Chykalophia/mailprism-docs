---
sidebar_position: 4
title: Building Rules with AI
description: The AI Rule Drafter — describe an automation in plain language and have it turned into a rule. Still rolling out; the New Rule screen is the manual builder for now.
---

# Building Rules with AI

Not sure how to translate "archive every newsletter from TechCrunch" into conditions
and actions? The **AI Rule Drafter** is designed to do it for you: you describe what
you want in plain language, and it builds a complete rule — conditions, actions, and
all — that you can review before saving.

:::caution Not yet available in the app
The AI Rule Drafter is still rolling out. The **New Rule** screen in the app today is
the manual builder — you set conditions and actions yourself — and there is no
"describe it in plain language" option on it yet. This page describes how the drafter
is intended to work; you can build the same rules now with the
**[manual builder](./overview.md)**.
:::

## How it's intended to work

The drafter is a short conversation. You type what you want; it replies with a
**rule draft** you can read, refine, and turn into a rule.

1. **Describe your goal.** Type something like *"Forward receipts to my accountant"*
   or *"Auto-label invoices and skip the inbox."*
2. **Read the draft.** The AI returns a draft showing the **conditions** (the *when*)
   and **actions** (the *what*) it chose, plus a name and description.
3. **Refine if needed.** If it's not quite right, just say so — *"only from
   gmail.com addresses"* or *"label it Finance instead."* The drafter keeps the
   conversation context and updates the draft.
4. **Save the rule.** When the draft looks right, it's saved as a normal rule and
   starts running on new email.

## Refining a draft

The drafter remembers the conversation, so you can shape the rule in steps instead of
getting it perfect on the first try.

| You say | What it's meant to do |
|---------|-----------------------|
| *"Also archive it"* | Adds an **archive** action to the existing draft. |
| *"Only during work hours"* | Adds a **business hours** condition. |
| *"Use the Finance label, not Receipts"* | Changes the label in the action. |
| *"Match any of these, not all"* | Switches the condition logic to **OR**. |

## What it's meant to build

The drafter is built on the same building blocks as the manual builder, so anything
you can express as conditions and actions is fair game:

- **Filing** — label and archive newsletters, receipts, or notifications.
- **Routing** — forward certain mail to a teammate, a Slack-style address, or a tool.
- **Prioritizing** — star or mark important email from specific people.
- **Follow-ups** — draft a polite nudge after a few quiet days.

For the full set of fields and actions it can draw on, see the
**[Conditions reference](./conditions.md)** and **[Actions reference](./actions.md)**.

## Once a rule exists

However a rule is created — by hand or, in future, by the drafter — it's a normal
rule. You can:

- **[Test it](./testing.md)** against your recent email to confirm it matches what
  you expect.
- **[Scope it to specific accounts](./multi-account.md)** if you have more than one
  Gmail account connected.
- Edit, disable, or delete it any time from the **Rules** list.

:::caution Always review before relying on a rule
An AI-drafted rule comes from your words — it doesn't read your mind. When the drafter
ships, check the conditions and actions (and run a quick test) before you rely on it,
especially for rules that archive, forward, or delete mail.
:::

→ Next: **[Testing rules](./testing.md)**
