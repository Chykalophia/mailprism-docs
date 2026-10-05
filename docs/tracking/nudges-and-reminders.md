---
sidebar_position: 6
title: Nudges & Reminders
description: Set up automatic follow-ups — chase a reply from someone, or remind yourself about a thread — that stop the moment the conversation moves.
---

# Nudges & Reminders

A **nudge** is an automatic follow-up. You start it on an email, and MailPrism keeps
the thread on your radar — sending a polite chase or a reminder on a schedule you set,
then stopping itself the moment the conversation moves.

There are two kinds, and MailPrism picks the right one for you automatically.

## The two flow types

| Flow | What it does | When you'd use it |
|------|--------------|-------------------|
| **Nudge Them** | Sends a follow-up **to the recipient** who hasn't replied yet | You sent an email and want a response |
| **Remind Me** | Sends a reminder **to you** about a thread that needs attention | Someone emailed you and you don't want to forget to act |

:::tip MailPrism auto-detects which one
When you click **Nudge** on an email, MailPrism checks the sender. If *you* sent the
email, it starts a **Nudge Them** flow. If someone else sent it, it starts a
**Remind Me** flow. You can always override this from the dropdown.
:::

## Starting a nudge on an email

Every email has a **Nudge** split-button:

- **Click the main button** to start a nudge with the auto-detected flow and your
  default settings.
- **Click the chevron** to open the menu and choose exactly what you want:
  - **Nudge Them** — start a recipient follow-up right away.
  - **Remind Me** — start a self-reminder right away.
  - **Configure Nudge… / Configure Reminder…** — open a quick setup popup to tweak
    the timing and tone *before* starting.
  - **AI Instant Nudge** — send one AI-written follow-up immediately, with no
    scheduled sequence. You confirm first; if AI can't write it, a standard template
    is sent instead.

Once a nudge is running, the button changes to show its state, and the menu offers
**Pause**, **Resume**, **View Schedule**, **Edit Settings…**, and **Cancel**.

## Flow configuration

Whether you use the quick setup popup or a saved template, a flow has these settings.

| Setting | What it controls |
|---------|------------------|
| **Delays** | How long to wait before each follow-up (e.g. day 2, then 4, then 7) |
| **Delay unit** | The unit for those delays: **minutes**, **hours**, **days**, or **weeks** |
| **Tone** | Which built-in follow-up message is sent: **Professional**, **Friendly**, **Casual**, **Formal**, or **Urgent** |
| **Max follow-ups** | The most messages this flow will ever send — **1–5** in the quick setup popup, up to **10** in a saved flow template (depending on your plan) — so you're never pushy |

:::info Follow-ups use built-in templates
Scheduled follow-ups are sent from MailPrism's built-in messages for the tone you
pick. AI-written scheduled follow-ups are **coming soon** — the quick setup popup's
**AI-generated messages** switch doesn't change what's sent yet. Only **AI Instant
Nudge** writes its message with AI.
:::

### Reading the schedule

The quick setup popup builds the schedule from a **first delay**, a repeat
**interval**, and a **maximum** count. For example, "first in 2 days, then every 2
days, max 3" produces three follow-ups. The popup shows a live **Schedule** preview so
you can see exactly when each message would go out.

## When a nudge stops (completion triggers)

A flow ends as soon as **any** of its completion triggers fires:

| Trigger | The flow completes when… |
|---------|--------------------------|
| **Recipient replies** | The other person responds (always on) |
| **Max reached** | The last allowed follow-up has been sent (on by default) |
| **I archive** | You archive the email |
| **Tracking label removed** | A specific tracking label is taken off the email |

After it ends, MailPrism records **why** it stopped — reply received, max reached,
cancelled, or label removed — so you can tell at a glance whether your follow-up
landed.

:::tip Stop on reply keeps you polite
The most important trigger, **Recipient replies**, is always on. The moment they
write back, the chasing stops — no awkward "did you get my last email?" after they've
already answered.
:::

## Active-nudge states

A running nudge moves through these states:

| State | Meaning |
|-------|---------|
| <span class="mp-pill mp-pill--green">Active</span> | Running and waiting for the next scheduled send |
| <span class="mp-pill mp-pill--amber">Paused</span> | Temporarily stopped by you — resume it any time |
| <span class="mp-pill mp-pill--gray">Completed</span> | Finished (a reply came in, the max was hit, or a trigger fired) |
| <span class="mp-pill mp-pill--gray">Cancelled</span> | Stopped early by you or the system |

You can see every active nudge — its progress bar, how long it's been waiting, and
when the next message goes out — under **Settings → Nudge Flows**.

## The @Nudge label

While a nudge is active, MailPrism adds a Gmail label called **`@Nudge`** to the email.
It's automatically applied when the nudge starts and removed when the nudge completes
or is cancelled. The label shows up in Gmail (with an amber color) so you can always
spot which threads are currently being followed up — even from the Gmail app.

## Saved flow templates

If you reuse the same timing again and again, save it as a **flow template** under
**Settings → Nudge Flows → Flow Templates**. A template stores a name, a flow type
(Nudge Them or Remind Me), its full configuration, and its completion triggers.

- Mark one template per type as your **default**, so the plain **Nudge** button uses it.
- Edit or delete templates any time (you can't delete the default until you unset it).

## Global settings

Under **Settings → Nudge Flows → Global Settings** you control how nudges behave across the
whole account:

| Setting | What it does |
|---------|--------------|
| **Enable nudge flows** | Master switch for automatic follow-ups |
| **Stop on reply** | Shown as **Always on** — nudges always stop as soon as the recipient replies. You can't turn it off. |
| **AI-written follow-ups** | Shown as **Coming soon**. Follow-ups are sent from built-in message templates today. |

## Related

- **[Response tracking overview](./overview.md)** — how MailPrism decides a thread is
  *Awaiting Reply* in the first place.
- **[Scheduling & recurrence](../rules/scheduling-recurrence.md)** — delays and
  "cancel if replied," the same building blocks nudges use.
