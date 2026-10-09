---
sidebar_position: 11
title: Best Practices
description: Patterns that keep your rules reliable, predictable, and easy to maintain.
---

# Best Practices

A few habits keep your automations doing exactly what you expect — even as your rule
list grows.

## Start simple, then grow

Begin each rule with **one condition and one or two actions**. Confirm it behaves
the way you want, then add conditions or actions. Small rules are easier to reason
about and easier to fix.

## Test before you enable

Don't wait for live email to find out a rule is too broad. **Test it first** — run it
against your recent inbox to see what it would have matched, and check *why* a specific
message did or didn't match. Tighten or loosen the conditions, then enable it.

:::tip Catch mistakes safely
Testing is read-only — it shows what *would* happen without taking any action. It's the
fastest way to spot a rule that catches too much before it touches your mail. See
**[Testing rules](./testing.md)**.
:::

## Name rules so future-you understands them

A good name says what the rule *does*:

- ✅ "Archive marketing newsletters"
- ✅ "Star urgent emails from key clients"
- ❌ "Rule 4"

## Order matters: use priority and "stop processing"

When several rules could touch the same email:

- Give important rules a **higher priority** so they run first.
- Turn on **Stop processing** for VIP or catch-all rules, so the right rule "wins"
  and others don't pile on.

A reliable pattern: a high-priority **VIP rule** (Stop processing **on**) at the top,
then your general rules below it.

## Combine AI with plain conditions

AI is powerful but not perfect — sarcasm, edge cases, and very technical mail can be
misread. The most reliable rules **pair an AI signal with a concrete condition**, so a
single AI miss can't trigger something important on its own:

> Category is <span class="mp-pill mp-pill--red">urgent</span> **AND** From relationship is
> <span class="mp-pill mp-pill--gray">established</span>

The plain condition (here, the sender relationship) acts as a guardrail around the AI
judgment. A few good combinations:

- **AI category + a known sender or domain** — only act on AI's read when it's from
  someone you trust.
- **AI urgency + a subject keyword** — confirm the AI's call with a hard signal.
- **AI Category = Cold Email + Is Known Contact is false** — avoid flagging people you know.

This is more dependable than relying on a single AI signal alone. See
**[Conditions](./conditions.md)** for every field you can combine, and
**[AI features](../ai/overview.md)** for how the AI signals work.

## Be careful with actions that send

Forwarding, sending, and auto-replies go out **from your Gmail**. For those:

- Prefer **Create Draft Reply** over **Send Auto-Reply** while you build trust in a rule.
- For follow-ups that should only go out when a thread goes quiet, use a
  **[nudge flow](../tracking/nudges-and-reminders.md)** — it stops when they reply.
  Replies and drafts can't be delayed; delays (with **cancel if replied**) work on
  actions like labels, archive, and forward. See
  **[Scheduling & recurrence](./scheduling-recurrence.md)**.

## Check the logs

After enabling a rule, glance at **Analytics** and the **Rule Logs** to confirm it's
matching the right mail. If it's catching too much or too little, tighten or loosen
its conditions. See **[Analytics](../analytics.md)**.

## Disable instead of delete (at first)

If a rule misbehaves, **turn it off** rather than deleting it. You keep the setup and
can re-enable it after a small fix.

:::tip Back up your setup
You can **export your rules to JSON** from the Rules page — handy before a big
reorganization — and import them back later. See **[Import & export rules](./import-export.md)**.
:::
