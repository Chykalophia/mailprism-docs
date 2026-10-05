---
sidebar_position: 3
title: Custom Categories
description: Create and tune your own AI classification categories, see suggestions, track accuracy, and teach the AI from your corrections.
---

# Custom Categories

The built-in [categories](./classification.md#category) cover most inboxes, but yours is
unique. In **Settings → AI Categories** you can create your own categories, adjust
the built-in ones, and train the AI to match how *you* think about email.

:::info Pro+ feature
Creating custom categories and editing the built-in (system) ones requires a **Pro,
Business, Enterprise, or Lifetime** plan. Everyone can view their definitions and
accuracy metrics. For current plans, see the in-app pricing page.
:::

The manager is organized into tabs:

| Tab | What it does |
|-----|--------------|
| **Definitions** | Your categories — built-in and custom |
| **Discover** | AI scans your inbox and suggests brand-new categories |
| **Optimizations** | Suggestions to improve accuracy, learned from your corrections |
| **History** | Your past classification corrections |
| **Metrics** | How accurate the classifications have been |

## Definitions

Each category is shown as a row with its icon, name, and description. Badges tell you
what kind it is:

- <span class="mp-pill mp-pill--gray">System</span> — a built-in MailPrism category.
- <span class="mp-pill mp-pill--amber">Customized</span> — a built-in category you've edited.
- <span class="mp-pill mp-pill--amber">Disabled</span> — turned off and not used for classification.

From here you can **Edit** any category, **Reset** a customized one back to its
built-in defaults, or **Delete** a category you created. (Built-in categories can be
edited or reset, but not deleted.)

## Creating a category

Choose **Add Category** and fill in the form. A category has these parts:

### Basic information

| Field | What it's for |
|-------|---------------|
| **Classification type** | Whether this defines a **category**, an **urgency** level, or a **sentiment** |
| **Display name** | The human-friendly name (e.g. *Important Client*) |
| **Category key** | A short machine name, auto-generated from the display name |
| **Icon** & **Color** | How it looks in the app |
| **Description** | A short line shown in the UI |

### AI definition

This is what actually teaches the AI when to apply the category.

| Field | What it's for |
|-------|---------------|
| **Definition prompt** | A clear description of when an email belongs in this category. Be specific. |
| **Keywords** | Comma-separated words that hint at this category (e.g. *urgent, deadline, priority*) |
| **Sender patterns** | Comma-separated email patterns (e.g. `@important-client.com`, `ceo@`) |

### Learning examples

| Field | What it's for |
|-------|---------------|
| **Positive examples** | Subjects that **should** match (one per line) |
| **Negative examples** | Subjects that should **not** match (one per line) |

### Behavior settings

| Setting | What it does |
|---------|--------------|
| **Confidence threshold** | The minimum AI confidence (50–95%) required before this category is applied |
| **Priority** | Higher-priority categories are evaluated first (1–100) |
| **Enabled** | Whether the category is used when classifying email |

:::tip Write the definition like you'd brief a person
The definition prompt is the most important field. Describe the *intent* — "emails from
clients about active projects that need a timely reply" — not just keywords. Keywords,
sender patterns, and examples sharpen it.
:::

Once saved, your custom category behaves like any other: it can drive
[rule conditions](../rules/conditions.md#ai-signals) and appears in your metrics.

## Discover: suggested categories

The **Discover** tab asks the AI to look at a sample of your recent inbox and propose
**new** categories you don't have yet. Each suggestion comes with evidence — example
emails, the patterns it noticed, and the domains involved — so you can judge it before
accepting.

:::note Usage limits apply
Discover runs analyze a batch of emails and are subject to monthly run limits and a
cooldown between runs (shown in the tab). Limits depend on your plan.
:::

## Optimizations: learning from corrections

When you correct a classification — for example, recategorizing an email — MailPrism
remembers it. The **Optimizations** tab scans your correction history for repeating
patterns and suggests concrete improvements, such as adding a keyword or sender pattern
to a category.

For each suggestion you can **Apply** it (the change is made to the category) or
**Dismiss** it. Use **Find Patterns** / **Refresh** to re-scan.

:::note A few corrections are needed first
The system needs at least a handful of similar corrections before a reliable pattern
emerges — so suggestions appear once you've given it something to learn from.
:::

## History

The **History** tab lists your past corrections. This is the raw material the
Optimizations tab learns from, and it's where corrections can be reviewed.

## Metrics

The **Metrics** tab shows how the classifications are performing:

- **Accuracy rate**, **emails classified**, **average confidence**, and **corrections
  this month** at a glance.
- A **confusion** view showing which categories get mixed up with which.
- A **weekly accuracy trend**.
- **Accuracy by category**, with an up/down trend arrow per category.

The more you correct, the better these numbers get — your feedback feeds directly back
into the AI's accuracy.

→ Next: **[Smart rules](./smart-rules.md)** · **[Classification signals](./classification.md)**
