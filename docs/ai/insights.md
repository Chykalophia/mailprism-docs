---
sidebar_position: 7
title: AI Insights
description: The dashboard widget that surfaces what MailPrism's automations did and noticed — plus the notifications behind it.
---

# AI Insights

**AI Insights** is a dashboard widget that surfaces what MailPrism's automations are
doing on your behalf — so you can see the AI at work without digging through logs.

:::note Rolling out
This widget is still being rolled out. Its toggle in **Settings → Dashboard
Preferences** is currently marked **Coming Soon** and disabled, so AI Insights may not
be available in your account yet. This page describes how it works as it becomes
available.
:::

:::info Needs AI on
Insights only appear while AI is on and your plan includes AI analysis (Starter and
up). If you turn AI off, MailPrism stops analyzing your email and no new insights are
generated. See **[AI privacy & consent](./privacy-and-consent.md)**.
:::

## What it shows

The widget lists your most recent AI activity as compact, color-coded cards. Each card
type covers a different kind of event:

| Card | Means |
|------|-------|
| <span class="mp-pill mp-pill--green">Email Archived</span> | An email was archived by AI or a rule |
| <span class="mp-pill mp-pill--violet">High Priority Detected</span> | An email was flagged as urgent / high priority |
| <span class="mp-pill mp-pill--red">Blocked / Spam Detected</span> | An email was identified as spam or blocked |
| <span class="mp-pill mp-pill--amber">Auto-Deleted by Rule</span> | A rule sent an email to Trash |
| <span class="mp-pill mp-pill--blue">Response Needed</span> | A thread looks like it needs your reply |

Each card shows the email's sender and subject, a short explanation of what happened,
and — when available — a **confidence** badge (how sure the AI was). Cards link
straight to the relevant email or action.

## Where it appears

There are two places insights surface:

- **On your dashboard** — the AI Insights widget shows your five most recent cards,
  with a **View all** link when there are more.
- **In notifications** — the same events are recorded as notifications under the
  **AI Insights** category, so you can review them later from your notification list.

## Dismissing a card

Each card has a dismiss (×) button. Dismissing a card removes that notification — it
doesn't change anything about the email or the rule that created it.

## Turning the widget on or off

The AI Insights widget is controlled by a toggle in **Settings → Dashboard
Preferences**. When it's on, the widget appears between your stats and recent activity.
As noted at the top of this page, that toggle is currently marked **Coming Soon** and
disabled while the widget rolls out.

→ Next: **[Email summaries](./summaries.md)** · **[Pattern learning](./pattern-learning.md)**
