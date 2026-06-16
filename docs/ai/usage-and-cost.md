---
sidebar_position: 12
title: AI Usage & Cost
description: Track AI operations, tokens, and cost — including how much ran on your own keys and which providers were used.
---

# AI Usage & Cost

Every time MailPrism uses AI, it records what happened — the operation, the provider,
the tokens used, and the cost. You can see all of it on the **Analytics** page, so
there are no surprises.

## Where to find it

Open **[Analytics](../analytics.md)** and look at the **AI Usage** card. Use the time
range tabs at the top of the page — **7 days**, **30 days**, or **90 days** — to
change the window. If there's no AI activity in that window yet, the card says so.

## What's tracked

The AI Usage card shows:

| Metric | What it means |
|--------|---------------|
| **Operations** | How many AI operations ran (each analysis, summary, or generation). |
| **Total Cost** | The total estimated spend for those operations. |
| **Tokens Used** | The total tokens consumed across all operations. |
| **BYOK share** | The percentage of operations that ran on **your own keys** (shown when you've used BYOK). |
| **Provider Distribution** | The split of operations by provider, as a percentage each. |

:::info BYOK indicator
When some operations used your own API keys, a **Using Your Own Keys** badge shows
the percentage. See **[Bring your own key (BYOK)](./byok.md)**.
:::

## Per-key totals

If you use **[BYOK](./byok.md)**, each key's own integration page
(**Settings → Integrations → OpenAI / Anthropic**) also shows how many requests that
key has handled, alongside its status and when it was last tested.

## Exporting

The Analytics page can export your data to **CSV** from the **More → Export Data**
menu. The export includes an AI usage section with total operations, total tokens,
total cost, and BYOK share for the selected time range.

## Why a cost might read as zero

Cost is estimated from each model's known pricing. If an operation used a model
MailPrism doesn't have pricing for, its cost is recorded as **0** rather than guessed
— so the totals stay honest. Operations that are handled without calling AI also cost
nothing.

## Related

- **[Analytics](../analytics.md)** — the full analytics dashboard.
- **[Bring your own key (BYOK)](./byok.md)** — run AI on your own account.
- **[AI privacy & consent](./privacy-and-consent.md)** — AI is opt-in.
