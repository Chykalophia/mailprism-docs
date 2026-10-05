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

If a rule did something you didn't want, you can **undo** it — MailPrism reverses the
changes **that rule** made to the email.

When an execution can be undone, an **Undo** button appears on its row. If a run
can't be undone (see below), there's no button. After you undo, the entry is marked
**Undone** and the **Undone** stat goes up.

### What Undo reverses

Undo reverses these actions:

- **Apply Label** / **Remove Label** (your own labels and Gmail's system labels)
- **Mark as Read** / **Mark as Unread**
- **Mark as Important** / **Not Important**
- **Archive** (puts the email back in your inbox)
- **Add Star** / **Remove Star**

If the rule acted on the whole conversation, undo acts on the whole conversation too.

Undo only reverses what *that rule* changed — it leaves alone anything another rule
did, and anything you changed yourself since.

Response-tracking labels (like Needs Action or Awaiting Reply) are left alone —
those follow the conversation's current **[tracking state](../tracking/overview.md)**.

### The grace period

Undo is only available for a limited time after a rule runs. The window is the
**undo grace period** in your workspace's **safety settings** — **48 hours by
default**, and adjustable by a workspace owner or admin.

Once that window passes, the execution can no longer be undone.

:::note Where to change it
Change it in **Settings → Rule Defaults & Safety → Undo Settings** (24, 48 or 72 hours).
:::

### What can't be undone

| Limitation | Why |
|------------|-----|
| **Irreversible actions** — **Move to Trash**, **Send Auto-Reply**, **Forward Email**, **Unsubscribe from Sender**, **Start Workflow** | If any of these ran in an execution, the whole execution has no Undo button — a sent or forwarded message can't be recalled. |
| **Side effects that stay** — **Create Draft Reply**, **Send Me a Notification Email**, tracking actions, nudge and reminder flows | These don't block undo, but undo doesn't reverse them: the draft stays, the notification was already sent, and tracking follows the conversation. |
| **Nothing to reverse** | If the rule didn't change anything undo can restore, there's no button. |
| **Already undone** | An execution can only be undone once. |
| **Past the grace period** | The undo window has closed (see above). |
| **The email no longer exists** | If the message was permanently deleted, there's nothing to restore. |

:::tip One undo per email at a time
After you undo one rule on an email, refresh the page to undo another rule on the same
email.
:::

---

← Back to **[Analytics](../analytics.md)** · See also **[Per-rule analytics](./per-rule-analytics.md)**
