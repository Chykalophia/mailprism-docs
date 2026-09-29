---
sidebar_position: 4
title: Tracking Labels & Sync
description: Turn Gmail labels into tracking labels, choose active or passive behaviour, set what happens on reply, and sync both ways with Gmail.
---

# Tracking Labels & Sync

Tracking labels let MailPrism organise follow-ups **using Gmail's own labels**, so your
tracking is visible in Gmail too — not locked inside MailPrism. You choose which labels
MailPrism treats as tracking labels, how each one behaves, and whether changes sync both
ways.

You'll find these settings under **Settings → Tracking Labels**.

## Two modes: Basic and Advanced

Tracking labels live inside the broader response-tracking setup, which has two modes:

| Mode | Who it's for |
|------|--------------|
| **Basic** | Zero configuration. MailPrism tracks automatically using built-in **system labels** based on email direction (incoming → Needs Action, your reply → Awaiting Reply). Optional AI filtering skips newsletters and notifications. |
| **Advanced** | Full control. Create your **own** tracking labels, link them to Gmail labels, and assign them with rules. |

Switching to Basic doesn't delete your custom labels — they're **paused** and preserved,
and come back when you switch to Advanced.

## System labels

System labels are the built-in ones for MailPrism's core states. You can't delete them,
but you **can** link each one to a Gmail label so the state shows up in Gmail.

| System state | Meaning |
|--------------|---------|
| <span class="mp-pill mp-pill--amber">Needs Action</span> | Inbound emails requiring your attention. |
| <span class="mp-pill mp-pill--blue">Awaiting Reply</span> | Outbound emails waiting for a recipient's response. |
| <span class="mp-pill mp-pill--gray">Pending</span> | Low-priority items to track without urgency. |
| <span class="mp-pill mp-pill--green">Resolved</span> | Completed or closed threads. |

## Custom tracking labels (Advanced mode)

In Advanced mode you can designate your own labels as tracking labels. Each one has:

| Setting | What it does |
|---------|--------------|
| **Label name** | What it's called. |
| **Tracking state** | Which MailPrism state the label represents — Needs Action, Awaiting Reply, Pending, or Resolved. |
| **Gmail label** | An existing Gmail label to link to, for two-way sync (optional). |
| **Colour** | A colour for the label, chosen from the palette. |
| **Default for state** | Mark a label as the one MailPrism uses by default for its state. |

### Active vs. passive mode

Each tracking label behaves in one of two ways:

| Behaviour | What it means |
|-----------|---------------|
| **Active** | Prominent — the email stays visible, with reminders and follow-up prompts. For important threads you don't want to lose. |
| **Passive** | Quiet — "fire and forget" until they reply. Hidden, no reminders, until a response lands. |

### On-reply action

You also decide what happens to a tracked email **when the recipient replies**:

| On reply | Result |
|----------|--------|
| **Needs Action** | Move the thread back to Needs Action — the conversation continues. |
| **Resolved** | Mark it resolved — the conversation is complete. |
| **Custom** | Run your own actions: apply or remove labels, archive, star, mark read, snooze, or move to a specific state. |

## Bidirectional Gmail sync

Because tracking labels map to **real Gmail labels**, changes flow both ways:

- **MailPrism → Gmail** — when MailPrism updates a thread's state, it applies or removes
  the matching Gmail label. New tracking labels are created in Gmail for you.
- **Gmail → MailPrism** — label a thread yourself in Gmail (or another client) and
  MailPrism picks it up. Run **Sync from Gmail** under **Maintenance** to import threads
  that already carry a tracking label.

### Label exclusivity

To avoid a thread being both "resolved" and "still tracking" at once, MailPrism enforces
**label exclusivity** by default: a thread can't carry a Resolved label *and* an active
tracking label in Gmail at the same time. You can turn this off in **Tracking Mode**.

### Keeping things tidy

The **Maintenance** section gives you two housekeeping tools:

- **Sync from Gmail** — import emails that already have a tracking label in Gmail.
- **Cleanup stale entries** — remove tracking records whose Gmail label has since been
  deleted, so MailPrism's lists match Gmail.

You can also choose **what happens when a tracked email is trashed or deleted**:
auto-resolve it, notify you and then resolve, or keep tracking it.

## Related

- **[Tracking profiles](./profiles.md)** — bundle conditions, labels, actions, and reminders together.
- **[Exemptions](./exemptions.md)** — stop noisy senders from being tracked at all.
- **[Response tracking overview](./overview.md)** — the states and the Replies view.
- **[Inbox labels](../inbox/labels.md)** — applying and managing labels on individual emails.
