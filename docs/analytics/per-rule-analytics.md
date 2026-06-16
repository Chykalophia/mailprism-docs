---
sidebar_position: 1
title: Per-rule analytics
description: Drill into a single rule — its stats, trends, hourly pattern, and the emails it did (and didn't) match.
---

# Per-rule analytics

The main **[Analytics](../analytics.md)** page shows the big picture. To dig into one
rule, open its **analytics page** — from the Top performing rules table (click the
arrow on a row) or from the rule itself.

This view is all about a single rule: how often it runs, when it runs, what it does,
and — crucially — which emails it *didn't* match so you can find out why.

## Header

At the top you'll see the rule's **name**, its **status** (Active or Disabled), and
its description if it has one. A back link returns you to **Rules**.

## Time range

Choose how far back to look:

- **7 Days**
- **30 Days** (the default)
- **90 Days**
- **All Time**

Changing the range refreshes every stat and chart below.

## Stats

Three numbers summarize the rule's activity in the selected range:

| Stat | What it means |
|------|----------------|
| **Executions** | How many times the rule **matched and ran**. |
| **Evaluations** | How many emails were **checked** against the rule. |
| **Not Matched** | How many of those did **not** match. |

## Action distribution

A breakdown of the action types this rule has carried out, each with a count and a
percentage bar — so you can confirm it's doing what you expect (for example,
*labeling* far more often than *forwarding*).

## Activity over time

A line chart of the rule's **daily executions** across the range, so you can spot
when it's busy and when it goes quiet.

## Hourly activity pattern

A 24-hour heatmap showing **when** this rule typically matches emails — darker cells
mean more activity in that hour. This only appears once there's hourly data to show.

## Execution history

A list of the most recent emails this rule processed, split into two tabs:

- **Matched** — emails the rule applied to, with the number of actions taken.
- **Not Matched** — emails that were checked but didn't match.

Each tab is paginated. On the **Not Matched** tab you can also **search** by subject
or sender to find a specific email.

### Why didn't this match? ("Test Why")

On a **Not Matched** email, click **Test Why** to run the rule's conditions against
that email and see the result inline:

- A **Would Match / Would Not Match** badge.
- The **logic** used to combine conditions (AND or OR).
- A line for **each condition** — a green check or red cross, with the field,
  operator, and the value it compared against.

This is the fastest way to understand exactly which condition is blocking a match.
Use **Show / Hide Result** to collapse the details. For more on conditions, see the
**[Conditions reference](../rules/conditions.md)** and **[Rule testing](../rules/testing.md)**.

### Run it now ("Execute")

Also on a **Not Matched** email, **Execute** runs the rule against that one email
right now. You'll get a confirmation telling you whether it matched and how many
actions were applied — handy for backfilling an email the rule missed.

:::note Execute respects your rule's actions
Execute runs the rule's real actions on that email (the same ones it would run
automatically). If it doesn't match, nothing changes — use **Test Why** to see why.
:::

---

→ Next: **[Rule Logs & Undo](./rule-logs-and-undo.md)** — the full, undo-able history
of every rule execution.
