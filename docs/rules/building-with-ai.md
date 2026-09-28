---
sidebar_position: 4
title: Building Rules with AI
description: The AI Rule Drafter — describe an automation in plain language, review the draft, and create the rule. It's where Create Rule opens.
---

# Building Rules with AI

Not sure how to translate "archive every newsletter from TechCrunch" into conditions
and actions? The **AI Rule Drafter** does it for you: you describe what you
want in plain language, and it builds a complete rule — conditions, actions, and all —
that you review before it's created.

**Create Rule** opens on the AI drafter. Describe what you want, review the draft, then
create it — or switch to **Rule builder** to set conditions yourself. Free plans get 10
AI drafts a day.

:::info Plans and AI
Drafting works on every plan. The Free plan's daily count resets at midnight UTC; paid
plans have no daily cap. The drafter uses AI, so it needs AI turned
on in **Settings → Privacy → AI Data Processing**.
:::

## How it works

Go to **Rules → Create Rule**. The page opens with the drafter; the toggle at the top
switches between **Describe it** (the drafter) and **Rule builder**.

The drafter is a short conversation. You type what you want; it replies with a
**rule draft** you can read, refine, and turn into a rule.

1. **Describe your goal.** Type something like *"Forward receipts to my accountant"*
   or *"Auto-label invoices and skip the inbox."*
2. **Read the draft.** The AI returns a draft showing the **conditions** (the *when*)
   and **actions** (the *what*) it chose, plus a name and description.
3. **Refine if needed.** If it's not quite right, just say so — *"only from
   gmail.com addresses"* or *"label it Finance instead."* The drafter keeps the
   conversation context and updates the draft.
4. **Create it.** Click **Create This Rule** to save it as a normal rule that starts
   running on new email — or **Edit Details** to open the draft in the rule builder and
   check every field first. If a draft is missing conditions or actions, only **Edit
   Details** is available.

## Refining a draft

The drafter remembers the conversation, so you can shape the rule in steps instead of
getting it perfect on the first try.

| You say | What it does |
|---------|-----------------------|
| *"Also archive it"* | Adds an **archive** action to the existing draft. |
| *"Only during work hours"* | Adds a **business hours** condition. |
| *"Use the Finance label, not Receipts"* | Changes the label in the action. |
| *"Match any of these, not all"* | Switches the condition logic to **OR**. |

## What it can build

The drafter is built on the same building blocks as the manual builder, so anything
you can express as conditions and actions is fair game:

- **Filing** — label and archive newsletters, receipts, or notifications.
- **Routing** — forward certain mail to a teammate or another verified address.
- **Prioritizing** — star or mark important email from specific people.
- **Follow-ups** — draft a polite nudge after a few quiet days.

For the full set of fields and actions it can draw on, see the
**[Conditions reference](./conditions.md)** and **[Actions reference](./actions.md)**.

## Once a rule exists

However a rule is created — by the drafter or in the rule builder — it's a normal
rule. You can:

- **[Test it](./testing.md)** against your recent email to confirm it matches what
  you expect.
- **[Scope it to specific accounts](./multi-account.md)** if you have more than one
  Gmail account connected.
- Edit, disable, or delete it any time from the **Rules** list.

:::caution Always review before relying on a rule
An AI-drafted rule comes from your words — it doesn't read your mind. Check the
conditions and actions (and run a quick test) before you rely on it,
especially for rules that archive, forward, or delete mail.
:::

→ Next: **[Testing rules](./testing.md)**
