---
sidebar_position: 6
title: Analytics & Logs
description: See what your automations did, how well they worked, and your AI usage and cost.
---

# Analytics & Logs

The **Analytics** page is where you confirm your automations are pulling their
weight. It also doubles as your audit trail, alongside the **Rule Logs**.

:::tip Two sides of the same coin
**Analytics** answers *"are my rules working?"* with charts and totals. The
**[Rule Logs](./analytics/rule-logs-and-undo.md)** answer *"what exactly happened
to this email?"* line by line — and let you **undo** a rule's changes.
:::

## Time range

Pick a time range at the top of the page:

- **7 Days**
- **30 Days** (the default)
- **90 Days**

Several numbers also show a **trend** — how the current period compares to the one
before it (for example, executions this period vs. the previous period).

## Overview

Four headline numbers across the top:

| Metric | What it tells you |
|--------|--------------------|
| **Total Rules** | How many rules you have, with a note of how many are **active**. |
| **Rules Executed** | How many times rules ran in the period, with a trend. |
| **Success Rate** | The share of executions that **matched** out of the total evaluated. |
| **Emails Processed** | How many emails MailPrism handled in the period. |

## Execution breakdown

A clear split of what happened across every time a rule was evaluated:

- **Matched** — the conditions were met (the rule applied).
- **Not matched** — the rule was evaluated but didn't apply.

Each is shown as a count, a percentage of the total, and a bar — plus the **total
executions** for the period.

:::note Why the two may not add up to 100%
Executions that were **skipped** or **failed** count toward the total but are neither
matched nor not matched, so the two percentages can total less than 100%.
:::

## Top performing rules

A table of your busiest rules, sorted by how often they ran:

| Column | Meaning |
|--------|---------|
| **Rule Name** | The rule. |
| **Executions** | How many times it ran in the period. |
| **Success Rate** | The share that matched, shown as a bar (green / amber / red). |
| **Actions** | How many actions it carried out. |

Click the arrow on any row to open that rule's own
**[per-rule analytics](./analytics/per-rule-analytics.md)** for a closer look.

## Action distribution

A breakdown of *which actions* your rules took most — labels applied, archived,
forwarded, AI drafts created, auto-replies sent, tracking labels, marked read,
starred, nudges, and so on. Each shows a count and a bar, so you can see
where the automation is actually happening.

## AI usage

If your rules use AI features, this section keeps spending transparent:

| Metric | What it shows |
|--------|---------------|
| **Operations** | Total AI operations in the period. |
| **Total Cost** | The estimated cost of those operations. |
| **Tokens Used** | Total tokens consumed. |
| **BYOK** | The share of operations that ran on **your own** API keys. |
| **Provider distribution** | The split between providers (for example, OpenAI vs. Anthropic). |

The **BYOK** badge only appears once some operations run on your own keys. See
**[Bring your own key (BYOK)](./ai/byok.md)** for how to bring your own keys.

## Export & refresh

Open the **More** menu (top right) for two options:

- **Refresh** — pull the latest numbers.
- **Export Data** — download a CSV that includes the overview, top rules, action
  distribution, AI usage, and a day-by-day breakdown for the selected range.

## Rule Logs

From the header, **Rule Logs** opens the line-by-line history of every rule
execution — what matched, what didn't, the actions taken, and (for AI rules) the
reasoning behind the decision. It's also where you **undo** a rule's changes.

→ See **[Rule Logs & Undo](./analytics/rule-logs-and-undo.md)**.

:::tip Use logs to debug a rule
If a rule isn't behaving, the Rule Logs show exactly what it matched (or didn't).
That's usually faster than guessing — see
**[Troubleshooting](./help/troubleshooting.md)**.
:::
