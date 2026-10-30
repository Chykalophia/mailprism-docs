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
quiet hours is **held**, and rules and tracking process it shortly after the window
ends — within about 15 minutes. Held mail more than 7 days old is dropped without
being processed. The window uses your timezone from [Date & Time](#date--time).

### Execution settings

| Setting | What it controls |
|---------|------------------|
| **Catch-up frequency** | **Every scheduled run (as often as your plan allows)**, **Scheduled catch-up at most once per hour**, or **Scheduled catch-up at most once per day** — paces MailPrism's scheduled catch-up run |
| **Batch size** | Maximum emails processed per scheduled run (the rest process next time) |
| **Cooldown** | Minimum minutes between processing runs |
| **Max executions per hour** | A rate limit to prevent runaway processing |

:::note New mail isn't held back
New mail is processed as it arrives, whatever **Catch-up frequency** says. See
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
  hours. **Apply Label** and **Remove Label** are never blocked, so rules can chain
  off each other's labels.

### Domain legitimacy gate

A spam and cost guard that runs **before AI**. When enabled, MailPrism skips emails
from sender domains that don't resolve — or, optionally, have no reachable website.

- **Check DNS** — block when the domain doesn't resolve at all.
- **Check website** — stricter; also block when the domain has no website. *(May
  false-positive on legitimate email-only domains.)*
- **Action when blocked** — **Label** (keep in inbox), **Archive** (remove from
  inbox), or **Trash** (recoverable in Gmail for 30 days). For the Label action you
  can set the **Label name**.

### Spam protection

The **Spam Protection** card catches obvious spam before AI runs, and learns from what
you mark as spam in Gmail.

- **Catch spam automatically** — **On by default.** Catches mail from senders you
  reported as spam, and *fake follow-ups*: a stranger you never wrote to, sent to
  "undisclosed recipients", posing as a reply or carrying an unsubscribe link. Anyone
  you've written to or trusted is never caught.
- **What to do with caught email** — **Move to Spam (Gmail deletes it after 30 days)**
  (the default; it also tells Gmail, which helps its own filter), **Archive (keep it,
  out of the inbox)**, or **Label only (keep it in the inbox)**.
- **Label for caught email** — added to every caught email so you can find them,
  including in Spam. Default: `MailPrism/Spam`.
- **Learn from my spam clicks** — **On by default.** When you mark an email as spam in
  Gmail, future mail from that sender is caught too. Moving one of MailPrism's catches
  out of Spam tells it that sender is fine.

**Learned senders** lists the senders it has learned, each with a **Forget** button.
**Caught in the last 30 days** lists recent catches with the reason for each.

### Undo grace period

- **Undo grace period** (in **Undo Settings**) — how long automated actions can be
  reversed: **24**, **48**, or **72 hours**. During this window you can undo most
  label, archive, and read/unread changes from your logs. Moving to Trash, moving to
  Spam, sending, and forwarding can't be undone.

→ Reverse a rule's changes: **[Rule Logs & Undo](../analytics/rule-logs-and-undo.md)**

---

## Forwarding addresses

Under **Settings → Forwarding Rules**, manage the addresses your rules can forward email
to. (Set up the forwarding action itself in your rules.)

### Adding and verifying

- **Add Address** with an email and an optional nickname. MailPrism emails a
  **6-digit verification code** to that address. The code expires after an hour.
- An address **must be verified** before it can receive forwarded mail. Click **Enter
  code** next to the address and type the code from that email. Use **Resend
  Verification** for a new code. Five wrong guesses lock the code until you request a
  new one.
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
