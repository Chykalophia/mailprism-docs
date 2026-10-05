---
sidebar_position: 11
title: Bring Your Own Key (BYOK)
description: Connect your own OpenAI or Anthropic API key so AI analysis runs through your account.
---

# Bring Your Own Key (BYOK)

By default, AI analysis runs through MailPrism. **Bring Your Own Key (BYOK)** lets you
connect your own provider account instead, so analysis is billed to you directly and
runs against your own rate limits.

## Supported providers

| Provider | Status |
|----------|--------|
| **OpenAI** | <span class="mp-pill mp-pill--green">Available</span> |
| **Anthropic** (Claude) | <span class="mp-pill mp-pill--green">Available</span> |

These are the only providers you can bring a key for today. Other providers are not
yet available for BYOK.

:::note Tier requirement
Available on the **Business**, **Enterprise**, and **Lifetime** plans. On other plans, the OpenAI and Anthropic
integrations show an **Upgrade** prompt. See **[Billing & Plans](../account/billing.md)**
for what your plan includes.
:::

## What changes when you use BYOK

Once you've added a valid key (and AI processing is on), MailPrism's AI features
run on **your** key first:

- Those calls run on **your** account and **your** rate limits.
- **You're billed directly** by OpenAI or Anthropic at their rates.
- MailPrism's platform AI credits are **not consumed** for calls your key handles.

If you've added both keys, OpenAI goes first unless you've chosen Anthropic as your
preferred provider.

### What runs on your key

| Runs on your key | Stays on MailPrism's AI |
|------------------|-------------------------|
| Email classification and analysis in your rules, thread and reply detection, tracking-label decisions, contact categories, AI rule drafting, rule and category suggestions, smart filtering, smart-field extraction, AI replies and drafts, nudge follow-ups, summaries, writing-style analysis | Manual **Analyze** on a single email, the **Test Rule** preview, similar-correction lookups when drafting, follow-up safety checks, contact **AI Fix**, and profile context suggestions |

:::info When MailPrism's AI steps in
If your key fails (for example, it hits its own limit or is revoked), MailPrism falls
back to its own AI so nothing stops working — and those fallback calls **do** use
platform credits.
:::

Your key is **encrypted at rest** and never logged or exposed.

## Adding a key

1. Go to **Settings → Integrations**.
2. Choose **OpenAI** or **Anthropic**.
3. Click to add a key, paste your API key, and save. MailPrism validates it for you.

Get your key from the provider:

- **OpenAI** — the [OpenAI API keys page](https://platform.openai.com/api-keys).
- **Anthropic** — the [Anthropic Console](https://console.anthropic.com/).

Once saved, the integration shows the key's status
(<span class="mp-pill mp-pill--green">Valid</span>,
<span class="mp-pill mp-pill--gray">Pending</span>, or
<span class="mp-pill mp-pill--red">Invalid</span>), when it was added, when it was
last tested, and how many requests it's handled.

## Managing a key

From the provider's integration page you can:

- **Test** — re-validate the key against the provider.
- **Replace** — swap in a new key.
- **Remove** — delete the key. After removal, MailPrism falls back to platform
  credits for that provider's operations.

:::warning Keep your key secure
Treat your API key like a password. Never share it or paste it into client-side code.
You can revoke and regenerate keys anytime from your provider's console.
:::

## Seeing what your key is doing

The **[Analytics](../analytics.md)** page tracks AI operations, tokens, and cost, and
shows what share of operations used your own keys versus the platform. See
**[AI usage & cost](./usage-and-cost.md)** for the details.

## Related

- **[AI privacy & consent](./privacy-and-consent.md)** — how consent works; AI must be on for BYOK to be used.
- **[AI usage & cost](./usage-and-cost.md)** — track tokens, cost, and BYOK share.
