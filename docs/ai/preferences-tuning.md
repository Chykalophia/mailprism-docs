---
sidebar_position: 5
title: Preferences & Tuning
description: Dial in how MailPrism's AI behaves — confidence, auto-apply, dry-run, learning, and notifications.
---

# Preferences & Tuning

MailPrism's AI works out of the box, but you can shape how cautious or hands-off it is.
The controls live in two places in **Settings**: **Rule Defaults** (how AI acts on your
mail) and **Privacy & Activity** (what AI is allowed to learn and process).

:::info Needs AI on
None of the AI settings below apply while AI is turned off (**Settings → Privacy →
AI Data Processing**) or on the Free plan, which doesn't include AI analysis. **Dry run
mode** and **Notify on rule execution** are general rule settings and still work. See
**[AI privacy & consent](./privacy-and-consent.md)** for how consent works.
:::

## How sure the AI has to be

In **Settings → Rule Defaults → AI Configuration**, the **AI confidence threshold**
sets the minimum confidence an AI signal needs before a rule acts on it.

- **Higher** (e.g. 90%+) — fewer false positives, but the AI may skip borderline mail.
- **Lower** (e.g. 60–70%) — catches more, at the cost of the odd wrong call.
- **85%** is the recommended starting point for most people.

## Let the AI act — or just watch

By default MailPrism is cautious. Two switches in **Rule Defaults → Safety Settings**
decide how much it does on its own:

| Setting | What it does |
|---------|--------------|
| **Manual AI label approval** | When **on**, AI-suggested labels are logged but **not** applied automatically — you stay in the loop. Turn it **off** to let AI apply labels without confirmation. |
| **Dry run mode** | Rules evaluate and log what they *would* do, but take no action. Perfect for testing a setup before it touches real mail. |

:::tip Try dry-run first
Turning on **Dry run mode** is the safest way to trial new automations. Watch the
**Rule Logs** to see exactly what *would* have happened, then switch it off once you
trust the results.
:::

## Stay informed

Also in **Rule Defaults → Safety Settings**:

- **Notify on rule execution** — get a notification whenever a rule fires. Handy while
  you're building trust in your automations; easy to switch off once they're humming
  along.

## What the AI is allowed to learn

In **Settings → Privacy & Activity**, you control how much MailPrism personalizes to you:

| Setting | What it does |
|---------|--------------|
| **Pattern Learning** | The master switch for learning from your habits. With it on, you can choose what to watch — **archives**, **labels**, **stars**, and (optionally) **deletes**. |
| **AI Personalization** | Lets AI use those learned patterns to make personalized suggestions. |
| **Auto-Suggest Rules** | Surfaces new rules based on patterns it spots. |

Turning **Pattern Learning** off stops MailPrism from learning new patterns entirely.
For the full picture — including the activity log, data export, and deletion — see
**[Privacy & Security](../help/privacy-security.md)**.

## Keep results consistent

A few habits keep AI behaving predictably as your mail changes:

- **Raise the confidence threshold** if a smart rule is acting on mail it shouldn't.
- **Pair AI signals with plain conditions** — see
  **[Best practices](../rules/best-practices.md#combine-ai-with-plain-conditions)**.
- **Check the Rule Logs** after a change; they capture the AI's reasoning so you can see
  *why* a rule fired.

→ Next: **[Writing profiles](./writing-profiles.md)** · **[Smart rules](./smart-rules.md)**
