---
sidebar_position: 1
title: AI, Explained
description: What MailPrism's AI does, how consent works, which plans include it, the signals it reads, and where they show up across the app.
---

# AI, Explained

Plain keyword rules are great, but they can't tell *urgent* from *routine*, or a real
person from a sales blast. That's what MailPrism's AI adds: it reads each email and
turns its understanding into **signals** you can act on — in rules, in tracking, and
across your inbox.

:::info AI consent
When you sign up, you agree to let MailPrism use AI providers (Google Gemini as the
primary provider, with OpenAI and Anthropic as fallbacks) to analyze your email. You
can turn AI off at any time in **Settings → Privacy → AI Data Processing**. While it's
off, nothing is sent for AI analysis. See **[AI privacy & consent](./privacy-and-consent.md)**.
:::

:::note Which plans include AI
AI analysis is included on paid plans (Starter and up). The Free plan runs rule-based
automation. Bring-your-own-key (BYOK) requires the Business plan.

The one exception: the **[AI rule drafter](../rules/building-with-ai.md)** works on
every plan — Free plans get 10 AI drafts a day.
:::

## What the AI does

When AI is on (and your plan includes it), MailPrism reads each incoming email and produces a small set of
structured signals — a category, an urgency level, a sentiment, and a handful of
yes/no flags. Those signals become available everywhere a decision needs to be made:

- **In rules** — every signal is a [condition](../rules/conditions.md#ai-signals) you
  can match on, so automations can react to *what an email means*, not just what words
  it contains.
- **In response tracking** — AI helps decide which threads **need your action** or are
  **awaiting a reply**. See **[Response tracking](../tracking/overview.md)**.
- **In the inbox** — the analysis is surfaced on the email itself, so you can see at a
  glance why something was flagged.

## The signals at a glance

For each email, MailPrism can detect:

| Signal | Values | Good for |
|--------|--------|----------|
| **Category** | What *kind* of email it is (see the [full list](./classification.md#category)) | Sorting and routing |
| **Urgency** | <span class="mp-pill mp-pill--red">high</span> <span class="mp-pill mp-pill--amber">medium</span> <span class="mp-pill mp-pill--green">low</span> | Surfacing what needs you now |
| **Sentiment** | <span class="mp-pill mp-pill--green">positive</span> <span class="mp-pill mp-pill--gray">neutral</span> <span class="mp-pill mp-pill--red">negative</span> | Spotting unhappy senders early |
| **Is spam** | true / false | Extra spam filtering |
| **Is automated** | true / false | Separating machine mail from people |
| **Is cold outreach** | true / false | Filtering unsolicited sales pitches |
| **Needs response / action** | true / false | Driving follow-ups and tracking |

Each signal also carries a **confidence** score, so your rules can require the AI to be
sure before acting. For the full breakdown of every signal and its meaning, see
**[Classification signals](./classification.md)**.

## Where AI shows up

| Area | What AI contributes |
|------|---------------------|
| **Rule conditions** | Match on category, urgency, sentiment, spam, automated, cold outreach, needs-response, and more — see [Conditions reference](../rules/conditions.md#ai-signals) |
| **Response tracking** | Detects threads that need action or are awaiting a reply |
| **AI Insights** | A dashboard widget surfacing recent AI activity (still rolling out — see [AI Insights](./insights.md)) |
| **Classifications settings** | Create your own [custom categories](./custom-categories.md) and train the AI from corrections |

## Which providers are used

By default, AI analysis runs through **MailPrism's managed AI**. **Google Gemini** is
the primary provider, with **OpenAI** and **Anthropic** as fallbacks — MailPrism
selects the provider and model for each task, so you don't choose one. None of these
providers use your data to train their models.

If you'd rather use your own account and API keys, you can bring your own — but
**BYOK supports OpenAI and Anthropic only** (Gemini isn't available as a BYOK
provider). See **[Bring your own key (BYOK)](./byok.md)**.

:::note Model selection is managed for you
MailPrism picks an appropriate model for each task. Specific model names can change as
providers release new versions, so we don't list them here — what stays stable is the
**signals** the AI produces.
:::

## A note on accuracy

AI is excellent on typical email but not perfect. Sarcasm, unusual phrasing, and
highly technical content can be misread. For important automations, **combine an AI
signal with a concrete condition** (like sender relationship). See
**[Best practices](../rules/best-practices.md#combine-ai-with-plain-conditions)**.

→ Next: **[Classification signals](./classification.md)** · **[Custom categories](./custom-categories.md)** · **[AI privacy & consent](./privacy-and-consent.md)**
