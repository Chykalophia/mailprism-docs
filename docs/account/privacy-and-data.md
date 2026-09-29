---
sidebar_position: 6
title: Privacy & Data
description: Control what MailPrism learns, how images and trackers are handled, and how to export or clear your data.
---

# Privacy & Data

Everything about how MailPrism *learns* from you, *handles images and trackers*,
and *stores your data* lives under **Settings → Privacy & Activity**. Each control
has a sensible default — you only need to change the ones that matter to you.

:::info AI consent is covered separately
This page does **not** cover the AI Data Processing consent switch — the master
on/off for all AI features. See **[AI Privacy & Consent](../ai/privacy-and-consent.md)**
for that.
:::

---

## Pattern learning

MailPrism can learn from how you organize your inbox in Gmail, so it can suggest
rules and improve over time. The **Pattern Learning** card controls exactly what it
watches.

**Enable Pattern Learning** is the master toggle (on by default — it's a core
feature). When it's on, you choose which actions to learn from:

| Setting | Learns from | Default |
|---------|-------------|---------|
| **Learn from Archives** | When you archive emails | On |
| **Learn from Labels** | When you apply or remove labels | On |
| **Learn from Stars** | When you star or unstar emails | On |
| **Learn from Deletes** | When you delete emails (limited usefulness) | Off |

Turn off any signal you'd rather MailPrism ignore. Turning the master toggle off
stops all of this learning at once.

→ More on what gets learned and how corrections work: **[Pattern learning](../ai/pattern-learning.md)**

---

## AI personalization

The **AI Personalization** card decides how the learned patterns are *used*. Both
options are on by default.

- **AI Personalization** — lets AI use your patterns for personalized suggestions.
  (Recommended.)
- **Auto-Suggest Rules** — automatically suggests new rules based on patterns
  MailPrism detects.

→ See your suggestions: **[Rule suggestions](../rules/suggestions.md)**

---

## Reading behavior

The **Reading Behavior** card controls what happens to an email when you open it.

- **Auto-Mark as Read** — marks an email as read a short time after you start
  viewing it.
- **Mark as Read Delay** — when auto-mark is on, choose how long to wait: 1, 2,
  **3 (default)**, 5, or 10 seconds.

:::tip Pick a delay that fits your skim speed
A longer delay means quick glances won't mark a message read by accident — handy
if you scan your inbox before deciding what to act on.
:::

---

## Email privacy

The **Email Privacy** card controls how images and hidden trackers are handled when
you read mail.

| Setting | What it does | Default |
|---------|--------------|---------|
| **Block All External Images** | Replaces every image with a placeholder until you choose to load it | Off |
| **Block Tracking Pixels** | Detects and blocks hidden trackers while still showing normal images | On (Recommended) |
| **Show Blocked Image Warnings** | Shows a banner when images are blocked, with a button to load them | On |

A few notes:

- **Block Tracking Pixels** is the recommended middle ground — you keep normal
  images but hidden trackers are stripped.
- When **Block All External Images** is on, the tracking-pixel toggle is disabled,
  because *everything* is already blocked.
- *Proxy Images* (loading images through MailPrism to hide your IP) is shown as
  <span class="mp-pill mp-pill--gray">Coming Soon</span> and not yet available.

---

## Activity log

The **Activity Log** card shows recent email actions MailPrism has tracked for
pattern learning. As you organize emails in Gmail, those actions appear here.

- Items show the action, details, and how long ago it happened.
- Auto-tracked items (from watching your Gmail) are marked as such.
- If pattern learning is off, the log invites you to turn it on to start tracking.

---

## Advanced settings

The **Advanced Settings** card sets how long learning data is kept.

- **Data Retention** — how long learning data is kept before automatic cleanup:
  30, 60, **90 days (default)**, 180 days, or 1 year.

---

## Your data

The **Data Management** card handles exporting and clearing your learning data, in
line with your data-protection rights (GDPR).

### Export your data

**Export Data** downloads a copy of all your learning data. The date of your last
export is shown for reference.

### Clear learning data

**Clear AI Learning Data** permanently deletes all detected patterns, activity logs,
and learning corrections. You'll confirm first, because MailPrism then has to
relearn your preferences — which may briefly lower the quality of its suggestions.

:::warning Clearing is permanent
Cleared learning data can't be recovered. Export first if you want a copy.
:::

### Account deletion

Deleting your whole account (not just learning data) is handled elsewhere. See
**[Account & Security → Delete your account](./account-security.md#delete-your-account)**.

---

## Related

- **[AI Privacy & Consent](../ai/privacy-and-consent.md)** — the master AI switch.
- **[Pattern learning](../ai/pattern-learning.md)** — what MailPrism learns and how.
- **[Privacy & Security](../help/privacy-security.md)** — the broader picture.
- **[Account & Security](./account-security.md)** — profile, sign-in, and account deletion.
