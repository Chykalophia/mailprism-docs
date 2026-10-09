---
sidebar_position: 10
title: Quick Actions
description: Built-in and custom keyboard shortcuts for processing email fast.
---

# Quick Actions

**Quick Actions** are keyboard shortcuts for the moves you make on email all day —
archive, star, mark read, forward, and more. MailPrism ships a handful of built-in
ones, and you can create your own.

Manage them in **Settings → Quick Actions**.

## Turn shortcuts on or off

At the top of the page is a single master switch: **Enable keyboard shortcuts**.

- **On** (the default) — your shortcuts fire while you're reading mail.
- **Off** — quick actions only run from toolbar buttons; the key presses do nothing.

This is handy if shortcuts ever get in your way without you wanting to remove them.

## Built-in actions

Every account starts with these presets. You can rename them, change the key, disable
any of them, or hit **Reset** to restore a single one to its default — and
**Reset Built-in** to restore them all.

| Action | Default shortcut | What it does |
|--------|-----------------|--------------|
| **Archive** | `E` | Move the email out of your inbox |
| **Delete** | `Shift+3` | Move the email to Trash |
| **Mark as Read** | `Shift+I` | Mark the email read |
| **Star** | `S` | Star the email |
| **Forward** | `F` | Forward the email |

Built-in actions carry a **Built-in** badge. You can customize their name and shortcut,
but not the underlying action type — use **Reset** to return to defaults.

## Create a custom action

Click **Add Action** and fill in:

1. **Action name** — what it's called in your list (e.g. *Archive and Label*).
2. **Action type** — the operation to perform (see below).
3. **Keyboard shortcut** *(optional)* — the key that triggers it.
4. **Configuration** — only for action types that need it (a label name, a forward
   address, etc.).

### Action types

| Type | Needs configuration |
|------|---------------------|
| **Archive** | — |
| **Star** / **Remove Star** | — |
| **Mark as Read** / **Mark as Unread** | — |
| **Add Label** / **Remove Label** | A Gmail label |
| **Forward Email** | A "forward to" address (optional — without one, the shortcut opens compose in Forward mode) |
| **Delete** | — |
| **Start Nudge** / **Cancel Nudge** | — (starts or cancels a follow-up sequence) |

:::tip Keep custom shortcuts simple
Single keys like `e`, or combos like `shift+l` and `g+a`, are easiest to remember.
Shortcuts use lowercase letters, numbers, and `+` for modifiers.
:::

## Shortcut conflict warning

Two actions can't share the same key. If you pick a shortcut that's already in use,
MailPrism tells you straight away —
*"A quick action with keyboard shortcut "…" already exists"* — so you can choose a free
one. Invalid formats (anything other than lowercase letters, numbers, and `+`) are
rejected with a hint too.

## Tracking usage

Each action shows how many times you've used it, so you can spot which shortcuts are
earning their keep and which to retire.

→ Related: **[Keyboard Shortcuts](./keyboard-shortcuts.md)** · **[Toolbar](./toolbar.md)**
