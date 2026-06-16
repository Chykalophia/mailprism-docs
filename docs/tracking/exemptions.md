---
sidebar_position: 5
title: Exemptions
description: Mute the noise — per-sender and per-domain rules that skip tracking, surface only true alerts, or force tracking, with retroactive cleanup.
---

# Exemptions

Some senders generate a lot of mail that doesn't need a reply — weekly digests,
automated reports, bot reviews, FYI notifications. **Exemptions** (managed under
**Settings → Tracking Profile**) are per-sender and per-subject rules that tell
MailPrism's response tracking how to treat that mail, so the **Needs Action** list stays
meaningful.

MailPrism ships with **curated defaults** that handle most of the common noise. You only
need exemptions when you want to tune behaviour for a specific sender.

:::note Exemptions vs. tracking
Exemptions shape what *enters* tracking. To control how tracked threads move and resolve,
see **[Tracking profiles](./profiles.md)**; to map states to Gmail labels, see
**[Tracking labels & sync](./labels-and-sync.md)**.
:::

## How a rule matches

Each exemption matches on any combination of three patterns (at least one is required):

| Pattern | Matches on |
|---------|------------|
| **Sender** | `user@domain.com` for one address, or `@domain.com` for any sender at that domain. |
| **Subject** | A substring of the subject (case-insensitive), or the full subject when **exact match** is on. |
| **From display name** | The sender's display name — useful for splitting a bot from a human on the same address (e.g. `[bot]` matches "Renovate [bot]" but not the person). |

Rules can apply to **all accounts** in your workspace, or to **specific Gmail accounts**
only. A **priority** decides order when several rules could match — lower runs first.

## The four modes

A rule's **mode** decides what happens when a matching email arrives.

| Mode | What it does |
|------|--------------|
| **Mute** | Skip state evaluation entirely — the email never gets a tracking state. Best for high-noise senders you trust. |
| **Mute first only** | Skip the first message of a new thread; replies track normally. |
| **Alerts only** | Pass through, but surface **only true incidents** (failed payment, account locked, breach) and filter the rest. |
| **Always track** | Force tracking past the cold-outreach and automated filters — for senders MailPrism's filters incorrectly hide. |

:::info Mute vs. pass-through
**Mute** and **Mute first only** *skip* tracking. **Alerts only** and **Always track**
let the email through but *change how it's evaluated*. That distinction matters for the
retroactive tool below.
:::

## The audit view ("Why this fired")

Every exemption keeps a history of its recent decisions, reachable from the rule's
**History** link. Each entry shows the timestamp, what the rule did
(skipped, passed as alerts-only, forced tracking, or retroactively untracked), and the
email it acted on.

Each rule also shows a **match counter** — how many times it has fired and when it last
did — so you can spot rules that are doing nothing, or doing too much. Older audit
entries are pruned after 90 days.

## Retroactive apply

A new exemption normally affects **new** mail only. **Retroactive apply** runs the rule
against emails you've **already** received and untracks the matches — handy after you add
a rule for a sender that's been cluttering your Needs Action list for weeks.

Before it runs, MailPrism shows you a **preview**: how many emails match and a few example
subjects, so you understand the blast radius.

:::caution Retroactive is one-way
Untracking is not automatically reversed if you later change or delete the rule — you'd
re-track those threads manually from the inbox. For very large batches, MailPrism asks
you to type the rule's name to confirm.
:::

### Retroactive only works on Mute rules

Retroactive apply is available for **Mute** and **Mute first only** rules — the ones that
*skip* tracking, so there's a clear "untrack these past emails" action.

It is **not** available for **Alerts only** or **Always track**, because those change how
*new* emails are evaluated rather than skipping them — there's nothing past to undo. To
clean up history for one of those senders, temporarily switch the rule to **Mute**, run
Retroactive, then switch it back.

## Related

- **[Tracking profiles](./profiles.md)** — conditions, per-state labels, actions, and reminders.
- **[Tracking labels & sync](./labels-and-sync.md)** — designate Gmail labels and sync both ways.
- **[Response tracking overview](./overview.md)** — the states and the Replies view.
