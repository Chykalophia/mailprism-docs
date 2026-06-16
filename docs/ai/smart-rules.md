---
sidebar_position: 4
title: Smart Rules
description: Use AI signals — urgency, category, sentiment — as conditions in your rules.
---

# Smart Rules

A **smart rule** is just a normal rule that uses one or more **AI signals** as
conditions. It lets you automate things keywords can't express — like *"is this
actually urgent?"* or *"is this a cold sales pitch?"*

:::info Turn on AI first
Smart rules need AI features enabled. See **[AI, Explained](./overview.md)** and
**[AI privacy & consent](./privacy-and-consent.md)**.
:::

## The AI fields you can match on

Every signal MailPrism detects is available as a condition. The values are the same
ones listed in **[Classification signals](./classification.md)** and the
**[Conditions reference](../rules/conditions.md#ai-signals)**:

| Field | Values |
|-------|--------|
| **Category** | urgent · important · personal · work · financial · newsletter · promotional · cold_email · spam · social · notification · transactional · system |
| **Urgency** | <span class="mp-pill mp-pill--red">high</span> <span class="mp-pill mp-pill--amber">medium</span> <span class="mp-pill mp-pill--green">low</span> |
| **Sentiment** | <span class="mp-pill mp-pill--green">positive</span> <span class="mp-pill mp-pill--gray">neutral</span> <span class="mp-pill mp-pill--red">negative</span> |
| **Is spam** · **Is automated** · **Is cold outreach** | true / false |

## Building one

It works exactly like any rule — you just pick an AI field as the condition:

1. **Rules → New Rule.**
2. Add a condition and choose an AI field — **Category**, **Urgency**, **Sentiment**,
   **Is spam**, **Is automated**, or **Is cold outreach**.
3. Add your actions.
4. Save and enable.

## Examples worth copying

**Surface urgent mail**

> **When** Urgency is <span class="mp-pill mp-pill--red">high</span>
> **then** Star · Mark important · Notify me by email

**Quiet the cold pitches**

> **When** Is cold outreach is `true` **AND** Sender relationship is
> <span class="mp-pill mp-pill--gray">cold</span>
> **then** Apply label `Cold outreach` · Archive

**Catch unhappy customers fast**

> **When** Sentiment is <span class="mp-pill mp-pill--red">negative</span> **AND**
> Category is <span class="mp-pill mp-pill--gray">work</span>
> **then** Star · Track response needed

**Tidy the noise**

> **When** Is automated is `true` **AND** Category is
> <span class="mp-pill mp-pill--gray">notification</span>
> **then** Apply label `Notifications` · Mark read · Archive

## Make smart rules dependable

- **Pair AI with a plain condition.** Combining urgency with sender relationship is
  more reliable than urgency alone.
- **Start with safe actions** — label, star, notify — before letting a smart rule
  archive or reply.
- **Use confidence where it helps.** Response-tracking conditions expose an AI
  **confidence** value (`0.0`–`1.0`) so you can require the AI to be sure. You can
  also raise the global **AI confidence threshold** in **Settings → Rule Defaults**
  so AI conditions only fire when the model is sure enough. See
  **[Conditions reference](../rules/conditions.md#response-tracking)**.
- **Tune the signals themselves.** If a category or urgency call feels consistently
  off, adjust how MailPrism reads your mail in
  **[Preferences & tuning](./preferences-tuning.md)**.

:::tip Check your work
After enabling a smart rule, review the **Rule Logs** to see what it matched — the
log captures the AI's reasoning, so you can tell *why* it fired.
:::

→ Next: **[Preferences & tuning](./preferences-tuning.md)**
