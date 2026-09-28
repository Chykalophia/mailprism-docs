---
sidebar_position: 2
title: Rule Logs & Undo
description: The line-by-line history of every rule execution — what matched, the actions taken, the AI's reasoning, and how to undo a rule's changes.
---

# Rule Logs & Undo

The **Rule Logs** are your audit trail: a detailed history of every rule execution
on your emails. Where **[Analytics](../analytics.md)** shows the totals, this page
shows *exactly* what happened to each email — and lets you **undo** a rule's changes.

Open it from the **Rule Logs** button on the Analytics page.

## Summary stats

Four cards across the top summarize your history:

| Stat | What it counts |
|------|----------------|
| **Total Executions** | Every recorded rule run. |
| **Matched** | Runs where the rule's conditions were met. |
| **Actions Executed** | The total number of actions carried out. |
| **Undone** | How many executions you've undone. |

## Filters

Narrow the list down with any combination of:

- **Rule** — show only executions from one rule.
- **Status** — All, Matched, or Not matched.
- **From Date** / **To Date** — limit to a date range.
- **Search** — match by email subject or sender.

Use **Clear filters** to reset everything. You can also arrive here pre-filtered from
a link elsewhere in the app (for example, jumping straight to the history for one
email).

## Log entries

Each entry is one email that rules ran against. The row shows:

- The email **subject** and **sender**.
- **When** it ran.
- How many rules **matched** (for example, *"2 of 5 rules matched"*).
- An **AI analyzed** marker if AI was involved.
- A short summary of the **actions** taken (with a *+N more* badge if there were many).
- An **Undone** badge if you've already reverted it.

### Expand for the full story

Click an entry to expand it. For **each rule** that ran against the email you'll see:

- A **Matched / Not Matched** badge and the rule's name.
- **Matched conditions** — the conditions that passed.
- **Failed conditions** — the conditions that didn't.
- **Actions executed** — exactly which actions ran.

### AI reasoning & feedback

When a rule used AI, the expanded view includes an **AI Analysis** panel with:

- The AI's **classification** and a **confidence** percentage.
- The **reasoning** behind the decision, in plain language.
- **Was this helpful?** — a thumbs-up / thumbs-down so you can tell MailPrism when the
  AI got it right or wrong. Your feedback helps tune future decisions.

See **[AI features](../ai/overview.md)** for more on how MailPrism reads your email.

## Undo

If a rule did something you didn't want, you can **undo** it — MailPrism restores the
email to the state it was in *before* the rule ran.

When an execution is reversible and hasn't been undone yet, an **Undo** button appears
on its row. After you undo, the entry is marked **Undone** and the **Undone** stat
goes up.

### What Undo restores

Undo puts the email back to its original state, including:

- **Labels** (both your own labels and Gmail's system labels)
- **Read / unread** status
- **Starred** status
- **Inbox** placement (whether it was in your inbox)
- **Important** marker

### The grace period

Undo is only available for a limited time after a rule runs. The window is the
**undo grace period** in your workspace's **safety settings** — **48 hours by
default**, and adjustable by a workspace owner or admin.

Once that window passes, the execution can no longer be undone.

:::note Where to change it
Change it in **Settings → Rule Defaults & Safety → Undo Settings** (24, 48 or 72 hours).
:::

### What can't be undone

Undo can't reverse everything:

| Limitation | Why |
|------------|-----|
| **Irreversible actions** — moving to **Trash**, **sending** a reply or email, **forwarding** | A sent or forwarded message can't be recalled, and trash is flagged as not undo-able. |
| **Already undone** | An execution can only be undone once. |
| **Past the grace period** | The undo window has closed (see above). |
| **The email no longer exists** | If the message was permanently deleted, there's nothing to restore. |

:::tip Undo acts on the email, not the clock
Undo recalculates the labels and flags needed to match the original state and applies
them in Gmail. If you've changed the email yourself since the rule ran, undo still
restores the rule's original snapshot.
:::

---

← Back to **[Analytics](../analytics.md)** · See also **[Per-rule analytics](./per-rule-analytics.md)**
