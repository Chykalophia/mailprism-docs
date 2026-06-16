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
    scheduled sequence (when available).

Once a nudge is running, the button changes to show its state, and the menu offers
**Pause**, **Resume**, **View Schedule**, **Edit Settings…**, and **Cancel**.

## Flow configuration

Whether you use the quick setup popup or a saved template, a flow has these settings.

| Setting | What it controls |
|---------|------------------|
| **Delays** | How long to wait before each follow-up (e.g. day 2, then 4, then 7) |
| **Delay unit** | The unit for those delays: **minutes**, **hours**, **days**, or **weeks** |
| **Tone** | The voice of AI-written messages: **Professional**, **Friendly**, **Casual**, **Formal**, or **Urgent** |
| **Use AI** | Whether follow-ups are AI-generated (personalized to the thread) or use a fixed template |
| **Max follow-ups** | The most messages this flow will ever send (1–5) — so you're never pushy |
| **Template** | A custom message to send instead of an AI-written one |
| **Include thread** | Whether to quote the original conversation in the follow-up |

:::info AI is opt-in
The **Use AI** toggle only appears for **Nudge Them** flows, and AI features must be
turned on for your account. With AI off, follow-ups use your template instead.
**Remind Me** flows don't use AI by default — a simple reminder doesn't need it.
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
| **Recipient replies** | The other person responds (on by default) |
| **Max reached** | The last allowed follow-up has been sent (on by default) |
| **I archive** | You archive the email |
| **Tracking label removed** | A specific tracking label is taken off the email |

After it ends, MailPrism records **why** it stopped — reply received, max reached,
cancelled, or label removed — so you can tell at a glance whether your follow-up
landed.

:::tip Pause on reply keeps you polite
The most important trigger, **Recipient replies**, is on by default. The moment they
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
when the next message goes out — under **Settings → Nudges**.

## The @Nudge label

While a nudge is active, MailPrism adds a Gmail label called **`@Nudge`** to the email.
It's automatically applied when the nudge starts and removed when the nudge completes
or is cancelled. The label shows up in Gmail (with an amber color) so you can always
spot which threads are currently being followed up — even from the Gmail app.

## Saved flow templates

If you reuse the same timing again and again, save it as a **flow template** under
**Settings → Nudges → Flow Templates**. A template stores a name, a flow type
(Nudge Them or Remind Me), its full configuration, and its completion triggers.

- Mark one template per type as your **default**, so the plain **Nudge** button uses it.
- Edit or delete templates any time (you can't delete the default until you unset it).

## Global settings

Under **Settings → Nudges → Global Settings** you control how nudges behave across the
whole account:

| Setting | What it does |
|---------|--------------|
| **Enable nudge flows** | Master switch for automatic follow-ups |
| **Pause on reply** | Stop sending nudges as soon as the recipient replies |
| **Smart timing** | Let AI pick the best time of day to send each nudge |

:::note Smart timing needs AI
The **Smart timing** option uses AI to choose send times, so it requires AI features to
be turned on for your account.
:::

## Related

- **[Response tracking overview](./overview.md)** — how MailPrism decides a thread is
  *Awaiting Reply* in the first place.
- **[Scheduling & recurrence](../rules/scheduling-recurrence.md)** — delays and
  "cancel if replied," the same building blocks nudges use.
