---
sidebar_position: 8
title: Preferences
description: Dashboard widgets, date & time formats, rule scheduling, safety limits, and forwarding addresses.
---

# Preferences

The settings that tune *how MailPrism behaves day to day* — your dashboard layout,
how dates and times appear, when your rules run, the safety limits around
automation, and where emails can be forwarded.

:::note Other settings have their own pages
Looking for theme, density, and font size? See **[Appearance](./appearance.md)**.
For pattern learning, image blocking, and data export, see
**[Privacy & Data](./privacy-and-data.md)**.
:::

---

## Dashboard preferences

Under **Settings → Dashboard**, control what your dashboard shows.
These are saved **locally in your browser**.

### Widgets

Show or hide each widget:

- **Stats Cards** — overview statistics at the top.
- **Recent Activity** — a feed of recent email processing and rule executions.
- **Quick Actions** — shortcuts to common tasks.
- **AI Insights** — cards for your most recent AI activity, like emails archived, urgent
  mail flagged, or spam blocked. See **[AI Insights](../ai/insights.md)**. **On by default.**
- **Rule Performance** is listed as
  <span class="mp-pill mp-pill--gray">Coming Soon</span> and can't be toggled yet.

### Layout & auto-refresh

- **Layout Density** — **Compact** (more content, less spacing) or **Comfortable**
  (balanced spacing).
- **Enable auto-refresh** — keep dashboard data current automatically, and choose a
  **Refresh Interval** when it's on.

→ What each widget shows: **[Your dashboard](../getting-started/dashboard.md)**

---

## Date & time

Under **Settings → Date & Time**, set how dates and times appear throughout
MailPrism. A **Preview** card shows the result live. These settings are **saved to
your account** and apply across all your devices — they don't change how emails are
sent or received.

- **Timezone** — auto-detected from your browser; change it to view times in a
  different zone. Used by features like [quiet hours](#quiet-hours).
- **Date Format** — many options, from `MM/DD/YYYY` and `DD/MM/YYYY` to long and
  ordinal styles like *January 16th, 2026*.
- **Time Format** — **12-hour** (2:30 PM) or **24-hour** (14:30).
- **First Day of Week** — **Sunday** or **Monday**, affecting weekly calendars and
  date pickers.

---

## Scheduling

Under **Settings → Rule Defaults & Safety**, the **Quiet Hours** and **Execution
Settings** cards control *when* and *how* your rules run. Changes take effect
immediately after saving.

### Quiet hours

Turn on **Enable Quiet Hours** to pause rule processing during a set window (for
example, overnight). Pick a **Start time** and **End time**. Mail that arrives during
quiet hours isn't queued for later, so don't rely on quiet hours to delay an action
until morning. The window uses your timezone from [Date & Time](#date--time).

### Execution settings

| Setting | What it controls |
|---------|------------------|
| **Processing frequency** | **Real-time**, **Hourly**, or **Daily** — paces MailPrism's scheduled background runs |
| **Batch size** | Maximum emails processed per scheduled run (the rest process next time) |
| **Cooldown** | Minimum minutes between processing runs |
| **Max executions per hour** | A rate limit to prevent runaway processing |

:::note Push notifications aren't held back
Mail that arrives through a Gmail push notification is processed as it arrives, whatever
**Processing frequency** says. See
**[How often rules run](../rules/overview.md#how-often-rules-run)**.
:::

---

## Safety

Under **Settings → Rule Defaults & Safety**, set the guardrails around automation. We recommend
keeping confirmations and bulk approval on, especially while you're building new
rules.

### Execution limits

- **Max emails per execution** — cap per rule run (recommended: 50).
- **Daily action limit** — total actions across all rules per day, from **1** to
  **10,000**.
- **Hourly action limit** — actions per hour, from **1** to **1,000**.

There's no "unlimited" setting — `0` isn't accepted.

If a rule matches more emails than a limit allows, it processes them in batches over
time.

### Confirmations

- **Confirm critical actions** — ask before archive, delete, or label operations.
  (Recommended.)
- **Require approval for bulk actions** — manual approval when a rule affects 10 or
  more emails at once. (Recommended.)
- **Prevent duplicate actions** — block the same action on the same email within 24
  hours.

### Domain legitimacy gate

A spam and cost guard that runs **before AI**. When enabled, MailPrism skips emails
from sender domains that don't resolve — or, optionally, have no reachable website.

- **Check DNS** — block when the domain doesn't resolve at all.
- **Check website** — stricter; also block when the domain has no website. *(May
  false-positive on legitimate email-only domains.)*
- **Action when blocked** — **Label** (keep in inbox), **Archive** (remove from
  inbox), or **Trash** (recoverable in Gmail for 30 days). For the Label action you
  can set the **Label name**.

### Undo grace period

- **Undo grace period** (in **Undo Settings**) — how long automated actions can be
  reversed: **24**, **48**, or **72 hours**. During this window you can undo most
  label, archive, and read/unread changes from your logs. Moving to Trash, sending,
  and forwarding can't be undone.

→ Reverse a rule's changes: **[Rule Logs & Undo](../analytics/rule-logs-and-undo.md)**

---

## Forwarding addresses

Under **Settings → Forwarding Rules**, manage the addresses your rules can forward email
to. (Set up the forwarding action itself in your rules.)

### Adding and verifying

- **Add Address** with an email and an optional nickname. MailPrism sends a
  **verification email** to that address.
- An address **must be verified** — the recipient clicks the link to confirm — before
  it can receive forwarded mail. Use **Resend Verification** if needed.
- Toggle an address on or off, send a **test** forward, or remove it.

### Forwarding settings

- **Max forwards per day** and **Max forwards per hour** — rate limits to prevent
  abuse.
- **Include original headers** — preserve the original sender info and metadata.
- **Subject tag prefix** — an optional tag prepended to forwarded subjects, such as
  `[FWD]`.

:::warning Forward responsibly
Forwarded emails include all original content. Only forward to addresses you trust
and have permission to share with.
:::

---

## Related

- **[Appearance](./appearance.md)** — theme, density, and font size.
- **[Privacy & Data](./privacy-and-data.md)** — learning, image blocking, and data export.
- **[How rules work](../rules/overview.md)** — execution model and timing.
- **[Rule Logs & Undo](../analytics/rule-logs-and-undo.md)** — reverse automated actions.
