---
sidebar_position: 3
title: Tracking Profile Settings
description: Fine-tune which senders MailPrism tracks from the Tracking Profile settings page — categories, per-sender rules, and suggested mutes.
---

# Tracking Profile Settings

Most people never need to touch this — the defaults handle a normal inbox. The
**Tracking Profile** settings page is where you go when MailPrism is tracking things it
shouldn't (or skipping things it should), and you want to tune that per sender.

You'll find it under **Settings → Tracking Profile**. Its job is simple: *mute the
noise, keep the signal*.

:::note This page tunes tracking — it doesn't replace it
If you just want sensible automatic tracking, the **Basic** mode covers it — see the
**[Response tracking overview](./overview.md)** and **[Tracking modes](./modes.md)**. To
choose labels, modes, and sync, see **[Settings → Tracking](./labels-and-sync.md)**.
:::

## What you can set here

The Tracking Profile page has three sections.

### Categories

A short whitelist of AI **categories** that should always be treated as worth your
attention, even when the rest of that category is usually noise. Edit it as a set of
chips.

### Sender rules

The heart of the page: a list of **per-sender rules** that decide how MailPrism treats
mail from a given sender or subject pattern. Each rule has a **mode**:

| Mode | What it does |
|------|--------------|
| **Mute** | Skip response tracking for matching mail entirely |
| **Mute first only** | Skip tracking on the first instance, then track as normal |
| **Alerts only** | Don't track, but still surface alerts |
| **Always track** | Force tracking on, overriding broader mutes |

You add and edit these on dedicated **New** and **Edit** pages (no pop-ups), and you can
match on a **sender pattern**, a **subject pattern**, and scope a rule to specific Gmail
accounts. Deleting a rule uses an inline **Undo** so you can change your mind.

:::tip This is the same feature as Exemptions
These per-sender rules are MailPrism's **tracking exemptions** — the way you keep noisy
senders out of tracking. For the full reference, see **[Exemptions](./exemptions.md)**.
:::

### Suggested mutes

When MailPrism notices a sender it thinks you'd want to mute, it can surface a
suggestion here for you to accept or dismiss.

:::note Rolling out
The suggested-mutes section is being wired up to live suggestions. Until then it may show
nothing to act on.
:::

## What this page is *not*

The name "Tracking Profile" can sound like a full rulebook editor — one where you'd
define *needs-response conditions*, *per-state Gmail labels*, *actions that run on each
state transition*, and *auto-resolve timers*, all bundled into named, switchable
profiles.

:::caution A full profiles editor isn't available in the app
MailPrism's engine has a richer profile model under the hood, but there's **no in-app
editor** for needs-response conditions, per-state labels, state-transition actions, or
auto-resolve rules today. What you can configure is on this page (categories +
per-sender rules) and on **[Settings → Tracking](./labels-and-sync.md)** (modes, labels,
and sync).
:::

## Related

- **[Response tracking overview](./overview.md)** — the states and the Replies view.
- **[Tracking modes](./modes.md)** — Basic vs. Advanced tracking.
- **[Tracking labels & sync](./labels-and-sync.md)** — map states to Gmail labels and sync both ways.
- **[Exemptions](./exemptions.md)** — keep noisy senders out of tracking entirely.
- **[Nudges & reminders](./nudges-and-reminders.md)** — automatic follow-ups.
