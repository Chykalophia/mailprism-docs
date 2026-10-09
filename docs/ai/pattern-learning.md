---
sidebar_position: 9
title: Pattern Learning
description: How MailPrism learns from your email habits to suggest automations — what it watches, and how to control it.
---

# Pattern Learning

**Pattern learning** lets MailPrism watch how you organize your inbox — what you
archive, label, star, and delete — and spot repeating habits. Those patterns power
**rule suggestions**, so you can automate the things you already do by hand.

You're in full control: you choose which actions are watched, and you can turn the whole
feature off. Settings live in **Settings → Privacy** (the **Pattern Learning** card).

## What MailPrism learns from

When pattern learning is on, you decide which of your actions it tracks:

| Action watched | What it tracks | On by default? |
|----------------|----------------|----------------|
| **Archives** | When you archive emails | Yes |
| **Labels** | When you apply or remove labels | Yes |
| **Stars** | When you star or unstar emails | Yes |
| **Deletes** | When you delete emails | No |

:::note Why deletes are off by default
Deleting is a blunt action — people delete for many different reasons — so MailPrism
treats it as **optional** and leaves it off unless you opt in.
:::

Each toggle is independent, so you can let MailPrism learn from labels and archives
while ignoring everything else.

## What it powers

Detected patterns feed MailPrism's **suggestions**: instead of building every rule from
scratch, you get proposed automations based on what you actually do. Pattern learning is
treated as a **core feature** of how MailPrism gets more helpful over time.

You can also see how much it has learned. The Privacy page shows running totals for:

- **Patterns Detected** — distinct habits MailPrism has spotted.
- **Actions Logged** — email actions recorded for learning.
- **Learning Corrections** — times your feedback adjusted what the AI learned.

## Correction history

When you give feedback on the AI's classifications — agreeing, disagreeing, or
correcting them — MailPrism records it so the AI can learn and improve its accuracy over
time. You can review this history from the **Classification Feedback** card in
**Settings → Privacy** (it opens `/settings/privacy/ai-corrections`), where each entry
is tracked as:

- **Agreed** — you confirmed the AI got it right.
- **Corrections** — you changed the AI's result.
- **AI Learned** — feedback the AI has since incorporated.

From that page you can filter your feedback, **export** it, mark items as learned, or
clear it.

## Turning pattern learning on or off

In **Settings → Privacy → Pattern Learning**, the **Enable Pattern Learning** toggle
controls the whole feature. Turn it off and MailPrism stops watching your actions
entirely; the per-action toggles only apply while it's on.

:::tip Managing your learning data
The Privacy page also lets you **export** all your account data or **clear** what
MailPrism has learned at any time. Clearing keeps your activity log and sender
corrections. See **[Privacy & Data](../account/privacy-and-data.md#your-data)**.
:::

→ Related: **[AI, Explained](./overview.md)** · **[Smart rules](./smart-rules.md)**
