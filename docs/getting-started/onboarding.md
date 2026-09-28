---
sidebar_position: 5
title: Onboarding & Setup
description: The three-step setup flow and the optional noise-defaults profile that quiets routine senders.
---

# Onboarding & Setup

When you first sign in, MailPrism walks you through a short guided setup. It has
**three steps**, and you can leave and come back — your progress is saved.

## The three steps

| Step | What you do |
|------|-------------|
| **1. Connect Gmail** | Link the Gmail account you want to automate. |
| **2. Create Rules** | Build your first automation, or start from a template. |
| **3. Go Live** | Turn automation on and head to your dashboard. |

The progress bar at the top shows where you are. Completed steps are checked, and
you can click back to any step you've finished.

### Step 1 — Connect Gmail

Click **Connect Gmail** and approve access in Google's own window. MailPrism never
sees your password.

→ Full detail on access and permissions: **[Connecting Gmail](./connecting-gmail.md)**

:::tip Not ready yet?
You can choose **Skip for now** and connect Gmail later from **Settings → Gmail Accounts**.
Automation won't run until an account is connected.
:::

### Step 2 — Create Rules

A **rule** tells MailPrism how to handle matching email automatically. You have two
ways to start:

- **Browse Templates** — pick a ready-made rule (for example, *Archive
  Newsletters*, *Priority Inbox*, or *Auto-Label*) and adjust it.
- **Create Custom Rule** — build one from scratch.

→ A guided walkthrough: **[Create your first rule](./first-rule.md)** ·
Ready-made rules: **[Rule Library](../rules/library.md)**

You can also choose **I'll create rules later** and move straight to the final step.

### Step 3 — Go Live

The last step shows a checklist — *Gmail connected* and *First rule created* — so
you can see what's done. Click **Activate & Go to Dashboard** to turn automation on.

From here, your rules run as new mail arrives. Timing controls such as quiet hours
live in **Settings → Rule Defaults & Safety → Scheduling**. You can test any rule manually from the **Rules**
page, and review or undo what rules did from the **Rule Logs**.

→ See **[How rules work](../rules/overview.md)** for the full processing and timing
model.

## Quiet the noise (optional)

After your first visit to the dashboard, MailPrism may offer a second, optional
one-screen setup: **noise defaults**. It's a curated list of senders that most
people don't need to act on — automated sign-in receipts, security-scan digests,
marketing emails, bot and CI notifications, calendar reminders, and one-time
account emails.

### How it works

- Every suggested sender starts **checked**. Leave the ones you want quieted
  checked, and uncheck any you'd rather keep seeing.
- Use **Select all** or **Select none** to start from either extreme.
- Click **Apply** to add your selection, or **Skip for now** to dismiss the screen.

Each suggestion has a **mode** that controls how strictly it's quieted:

| Mode | What it means |
|------|----------------|
| <span class="mp-pill mp-pill--gray">Mute</span> | Don't surface this sender as something to act on. |
| <span class="mp-pill mp-pill--amber">Alerts only</span> | Keep it visible in your digest, but don't flag every message. |
| <span class="mp-pill mp-pill--green">Always track</span> | Keep tracking it normally. |

:::info Real alerts always come through
Words like *breach*, *suspended*, or *payment failed* are never quieted — even from
a sender you've muted, an urgent message still reaches you.
:::

These defaults set up your **tracking profile**, which decides which conversations
MailPrism watches for follow-ups. You can edit, add, or remove any of them later
from **Settings → Tracking Profile**.

→ Learn more about follow-up tracking: **[Response tracking](../tracking/overview.md)**

## Where to go next

| If you want to… | Read |
|------------------|------|
| Get oriented in the app | [Your dashboard](./dashboard.md) |
| Understand rules in depth | [How rules work](../rules/overview.md) |
| Turn on AI sorting | [AI features](../ai/overview.md) |
| Tune what gets tracked | [Response tracking](../tracking/overview.md) |
