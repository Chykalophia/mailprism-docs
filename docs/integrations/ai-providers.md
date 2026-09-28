---
sidebar_position: 3
title: AI providers (OpenAI & Anthropic)
description: Connect your own OpenAI or Anthropic key so AI features run through your provider account.
---

# AI providers (OpenAI & Anthropic)

MailPrism can run its AI features through **your own** OpenAI or Anthropic account
instead of MailPrism's. This is the **Bring Your Own Key** (BYOK) feature, and it's
managed under **Settings → Integrations**.

:::tip Setup lives in one place
Connecting OpenAI and Anthropic keys overlaps with the rest of AI setup, so the full
walkthrough lives on one page: **[Bring Your Own Key (BYOK)](../ai/byok.md)**.
:::

## The short version

| Provider | Status | Where to set it up |
|----------|--------|--------------------|
| **OpenAI** | <span class="mp-pill mp-pill--green">Available</span> | Settings → Integrations → OpenAI |
| **Anthropic** (Claude) | <span class="mp-pill mp-pill--green">Available</span> | Settings → Integrations → Anthropic |

When you connect a key:

- AI runs on **your** provider account and rate limits.
- **You're billed directly** by OpenAI or Anthropic.
- MailPrism's platform AI credits **aren't used** for those operations.

Your key is **encrypted at rest** and never logged.

:::note Plan requirement
Available on the **Business** plan. On other plans, the OpenAI and Anthropic
integrations show an **Upgrade** prompt. See
**[Billing & Plans](../account/billing.md)**.
:::

→ **Full guide: [Bring Your Own Key (BYOK)](../ai/byok.md)**

## Related

- **[Bring Your Own Key (BYOK)](../ai/byok.md)** — add, test, replace, and remove keys.
- **[AI usage & cost](../ai/usage-and-cost.md)** — track tokens, cost, and BYOK share.
- **[Integrations overview](./overview.md)** — everything MailPrism connects to.
