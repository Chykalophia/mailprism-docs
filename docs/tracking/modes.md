---
sidebar_position: 2
title: Tracking Modes
description: Basic mode (zero-config, automatic) vs Advanced mode (custom labels and rules) — and how to switch between them.
---

# Tracking Modes

Response tracking runs in one of two modes. **Basic** is automatic and needs no setup;
**Advanced** trades that simplicity for full control. You choose under
**Settings → Response Tracking → Tracking Mode**, and you can switch any time.

The two modes are **mutually exclusive** — turning one on turns the other off.

## Basic mode

Zero configuration. MailPrism tracks threads automatically based on **who sent the
last message**:

- **Incoming emails** become <span class="mp-pill mp-pill--red">Needs Action</span>.
- **When you reply**, the thread moves to <span class="mp-pill mp-pill--amber">Awaiting Reply</span>.
- **When they respond**, it returns to <span class="mp-pill mp-pill--red">Needs Action</span>.
- **Resolve** a thread when the conversation is complete.

This uses MailPrism's built-in **system labels** for the core states — you don't
create or manage any labels yourself.

### AI noise filtering

Basic mode includes an optional **AI-powered filtering** toggle (recommended). With it
on, MailPrism skips newsletters, notifications, and promotional mail that don't need a
response, so your **Needs Action** list stays meaningful instead of filling up with
noise.

:::note AI filtering needs AI on
This toggle only does anything while AI is on and your plan includes it. With AI off, Basic
mode still tracks threads by direction — it just won't filter out the noise.
:::

→ See **[Response tracking overview](./overview.md)** for what each state means.

## Advanced mode

Full control. Instead of automatic direction-based tracking, you build your own
workflow:

- **Create custom tracking labels** for your specific needs.
- **Link them to Gmail labels** for two-way sync.
- **Use rules** to assign tracking labels automatically when emails match your
  conditions.

The built-in **system labels** for the core states are still available — in Advanced
mode you can map each one to a Gmail label of your choice.

→ Build the rules that drive Advanced mode with the
**[Actions reference](../rules/actions.md#response-tracking)**, and manage labels in
**[Tracking labels & sync](./labels-and-sync.md)**.

## Settings that apply to both modes

A few tracking settings work the same regardless of mode.

### Enforce label exclusivity

On by default. This prevents a single thread from carrying **both** a *Resolved* label
and an active tracking label in Gmail at the same time — so a conversation can't look
"done" and "still open" at once.

### When tracked emails are deleted

Choose what happens to tracking when a tracked email is trashed or deleted in Gmail:

| Option | What happens |
|--------|---------------|
| **Auto-resolve** *(default)* | The thread leaves active tracking immediately. |
| **Notify then resolve** | You get a notification first, then it resolves. |
| **Keep tracking** | Deletion doesn't change the tracking state. |

:::tip Save your changes
The tracking settings page has a **Save Changes** button — your mode switch and toggle
changes apply once you save.
:::

## Related

- **[Response tracking overview](./overview.md)** — the states and the Replies view.
- **[Tracking profiles](./profiles.md)** — tune what counts as needing a response.
- **[Tracking labels & sync](./labels-and-sync.md)** — system and custom labels.
- **[Tracking exemptions](./exemptions.md)** — skip routine mail entirely.
- **[Actions reference](../rules/actions.md#response-tracking)** — tracking actions for rules.
