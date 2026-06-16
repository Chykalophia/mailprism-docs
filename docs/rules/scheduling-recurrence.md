---
sidebar_position: 8
title: Scheduling & Recurrence
description: Make a rule active only during a date range or certain hours, auto-disable it when the window ends, and delay or repeat actions.
---

# Scheduling & Recurrence

Most rules run the moment a matching email arrives. But some automations should only
be live *for a while* — like a vacation auto-reply — or should run *some time after*
an email lands. MailPrism handles both.

This page covers three related ideas:

- **Rule schedules** — when a rule is allowed to run (a date range, or certain hours).
- **Auto-disable** — turning a scheduled rule off automatically when its window ends.
- **Delayed & recurring actions** — running an action later, not instantly.

## Rule schedules

A **schedule** limits *when* a rule is active. There are two kinds.

| Schedule | What it does | Used by |
|----------|--------------|---------|
| **Date range** | The rule is active between a **start date** and an **end date** (in your timezone) | Vacation / out-of-office responders |
| **Time-based** | The rule is active during — or *outside* — set **hours** on chosen **days of the week** | After-hours responders |

:::info Where schedules come from
You don't hand-build these schedules on a normal rule. MailPrism sets them up for you
when you turn on an **auto-responder** — the **Vacation** responder creates a
date-range schedule, and the **After-hours** responder creates a time-based schedule.
You'll find these under **Settings → Auto-responder**.
:::

### Date-range schedule (vacation)

When you set a vacation responder's **start** and **end** dates, MailPrism only runs
the auto-reply rule between those dates. Outside the window, the rule sits idle — no
replies go out. Everything is evaluated in the **timezone** you choose, so "ends
June 30" means the end of June 30 where you are.

### Time-based schedule (after-hours)

An after-hours responder is active *outside* your business hours. You set:

- **Business hours** — a start time and end time (for example, `09:00`–`17:00`).
- **Work days** — which days those hours apply (for example, Monday–Friday).
- **Timezone** — so the hours track your local clock.

The responder then replies only to mail that arrives **outside** those hours.

## Auto-disable when the window ends

A scheduled rule can **turn itself off** once its end date passes, instead of just
going dormant. This keeps your Rules list honest: a finished vacation responder shows
as **disabled**, not lingering as "on."

:::tip Why this matters
Auto-disable means you won't come back from vacation to find the responder quietly
still armed. When the end date passes, the rule flips to **off** on its own.
:::

## Delayed actions

Instead of scheduling the *whole rule*, you can delay a single **action**. In the
rule editor, click the **clock** icon next to any action to add a delay.

A delayed action waits a set amount of time before it runs:

- **Wait** a number of **minutes, hours, days, weeks, or months**.
- Then run the action (apply a label, send a reply, archive, and so on).

### Cancel if replied

When you add a delay, you also get a **"then…"** option that can **cancel the action
if there's a reply** before it runs. This is what makes polite follow-ups safe:

| Cancel if replied | The delayed action is skipped when… |
|-------------------|-------------------------------------|
| **You reply** | *you* respond in the thread first |
| **The sender replies** | the *other person* responds first |
| **Anyone replies** | either side responds first |

> Example: *Wait 3 days, then draft a follow-up — but cancel it if anyone replies.*

This pairs perfectly with follow-up and nudge automations. See
**[Nudges & reminders](../tracking/nudges-and-reminders.md)**.

## Recurring actions

Some automations repeat on a cadence — daily, weekly, monthly — rather than running
once. MailPrism's auto-responders use this internally to keep replying for the length
of your vacation or every evening after hours, without you re-arming anything.

:::note Recurrence is mostly behind the scenes
Recurring schedules power features like **auto-responders** and **follow-up bumps**.
You configure those features directly — you don't hand-write a recurrence rule in the
normal rule editor. For repeating follow-ups, set up an auto-responder
(**Settings → Auto-responder**) or a **[nudge flow](../tracking/nudges-and-reminders.md)**
rather than a one-off rule.
:::

## Putting it together

A vacation responder is the clearest example of all of these working as one:

1. You pick **start** and **end** dates → a **date-range schedule**.
2. The responder **repeats** its reply for the whole window → **recurrence**.
3. A short **response delay** lets Gmail classify the email first → a **delay**.
4. When your end date passes, the rule **auto-disables** → **auto-disable**.

→ Learn the basics: **[Conditions](./conditions.md)** · **[Actions](./actions.md)** ·
**[Best practices](./best-practices.md)**
