---
sidebar_position: 3
title: Actions Reference
description: Every action a rule can take when it matches — plus the delay and cancel-if-replied options you can set in the builder.
---

# Actions Reference

When a rule's conditions match, it runs its **actions** — in order, top to bottom.
A single rule can run several actions together (for example: *apply a label*, then
*archive*, then *notify me*).

This page is the complete list of actions and the **options** you can set on each
action in the rule builder (a **delay** and **cancel if replied**, on actions that can
be scheduled).

:::tip How to read this page
Pick a group below, find the action you want, then check **[Action options](#action-options)**
for the controls that make it safer — a **delay** and **cancel if replied**.
:::

## Labels & organization

| Action | What it does |
|--------|---------------|
| **Apply Label** | Add a Gmail label |
| **Remove Label** | Remove a Gmail label |
| **Assign Tracking Label** | Apply a MailPrism response-tracking label |
| **Archive** | Remove from the inbox (kept in All Mail) |
| **Move to Trash** | Move the email to Trash |

## Email state

| Action | What it does |
|--------|---------------|
| **Mark as Read** / **Mark as Unread** | Change the read state |
| **Mark as Important** / **Mark as Not Important** | Change Gmail importance |
| **Add Star** / **Remove Star** | Toggle the star |

## Replies & sending

:::caution These actions send mail from your account
Anything that forwards, sends, or replies goes out **from your Gmail**, only because
a rule you built told it to. **Create Draft Reply** is the safest choice — nothing
leaves until you send it. Test the rule first (see **[Testing rules](./testing.md)**).
:::

| Action | What it does |
|--------|---------------|
| **Forward Email** | Forward the email to another address — see **[Forward options](#forward-options)** |
| **Send Email** | Send a new email from a template (or AI) |
| **Create Draft Reply** | Create a reply **draft** — nothing is sent; you review and send |
| **Send Auto-Reply** | Send a reply automatically |
| **Unsubscribe from Sender** | Attempt to unsubscribe from the sender |

**Send Email**, **Create Draft Reply**, and **Send Auto-Reply** use a **template** —
either a canned response or an AI-generated template. Build your templates in settings
before using these actions.

## Response tracking

Keep conversations organized automatically. See
**[Response tracking](../tracking/overview.md)**.

| Action | What it does |
|--------|---------------|
| **Track Response Needed** | Flag the thread as needing your response |
| **Mark Awaiting Reply** | Flag that you're waiting on someone else |
| **Resolve Conversation** | Mark the thread as handled |
| **Update Response State** | Set the thread state directly — **Needs Response**, **Awaiting Reply**, **Pending**, **Resolved**, or **Snoozed** |
| **Reactivate Tracking** | Resume tracking a resolved thread |

## Smart follow-ups

These start a follow-up flow on the email. See
**[Nudges & reminders](../tracking/nudges-and-reminders.md)** for how the flows work.

| Action | What it does |
|--------|---------------|
| **Start Nudge Flow** | Begin a nudge flow (a gentle follow-up sequence) |
| **Start Reminder Flow** | Begin a reminder flow |

## Notify

| Action | What it does |
|--------|---------------|
| **Send Me a Notification Email** | Send yourself a notification email about the match |

---

## Action options

Some action rows in the rule builder have a **delay** option. You'll find it on the
clock icon at the end of the action row.

### Which actions can be delayed

Only actions MailPrism can schedule show the clock icon:

| Can be delayed | No delay control |
|----------------|------------------|
| Apply Label · Remove Label · Mark as Read / Unread · Mark as Important / Not Important · Archive · Move to Trash · Add Star / Remove Star · Forward Email · Send Email | Create Draft Reply · Send Auto-Reply · Send Me a Notification Email · Unsubscribe from Sender · all **Response tracking** actions · Assign Tracking Label · Start Nudge Flow · Start Reminder Flow |

Actions without a delay control always run **right away**, when the rule matches.

### Delay

Wait a set time before the action runs. Choose an **amount** and a **unit** — all five
units save:

<span class="mp-pill mp-pill--gray">Minutes</span>
<span class="mp-pill mp-pill--gray">Hours</span>
<span class="mp-pill mp-pill--gray">Days</span>
<span class="mp-pill mp-pill--gray">Weeks</span>
<span class="mp-pill mp-pill--gray">Months</span>

A delayed action is **scheduled** — it runs later, not at match time.

### Cancel if replied

When an action is delayed, you can tell MailPrism to skip it if a reply lands first:

| Setting | Behavior |
|---------|----------|
| **Don't cancel** | Always run, even if someone replied |
| **Cancel if anyone replies** | Skip if *any* reply arrives |
| **Cancel if I reply** | Skip if *you* reply |
| **Cancel if sender replies** | Skip if the *sender* replies |

:::tip A safe auto-follow-up
Want to follow up only if a conversation goes quiet? Use **Start Nudge Flow** (or
**Start Reminder Flow** to remind just yourself). Nudge flows wait between steps and
**stop automatically when they reply** — see
**[Nudges & reminders](../tracking/nudges-and-reminders.md)**.

For delayed housekeeping, put a **delay** *and* **cancel if replied** on a schedulable
action — for example, **Apply Label** "Follow up" after 3 days, cancelled if the sender
replies.
:::

---

## Forward options

The **Forward Email** action forwards a matching email to a destination you've already
set up. In the rule builder you pick it from a dropdown that lists your **verified
forwarding addresses** and, if one has been set up for your account, your **ClickUp**
destination.

### Choosing a destination

| You set up… | …in |
|-------------|-----|
| **Email addresses** | Your forwarding-address settings (each must be verified before it appears in the dropdown) |
| **ClickUp channels** | A ClickUp destination set up for your account also appears in the same dropdown — see **[ClickUp](../integrations/overview.md#clickup)** (limited availability) |

So the destination is configured **once** in settings, then selected on the Forward
action.

:::note Slack isn't available yet
There's no Slack destination today — Slack is
**[coming soon](../integrations/overview.md#coming-soon)**.
:::

### Cleaning up what's forwarded

Once you pick a destination, the Forward action shows cleaning presets and a live
preview of exactly what will be sent:

| Preset | What's forwarded |
|--------|------------------|
| **Just the new message** (recommended) | The latest reply only — signatures and quoted history removed. |
| **Trim signatures only** | The quoted thread stays for context; the signature goes. |
| **Full email (no cleaning)** | The message exactly as received. |
| **Custom…** | Opens **Advanced cleaning**: remove signatures, remove quoted text (or keep 1–3 prior replies), and clean the subject line. |

**Custom…** also has AI options — clean tricky threads, add a summary, or pull out
action items. They need the **AI email cleanup** add-on, available on **Pro and above**
(or, on the Business plan, your own Anthropic key); otherwise they're shown locked.
See **[Billing → Add-ons](../account/billing.md#ai-email-cleanup)**. Like any action, a forward can also have a **delay**.

---

→ Next: **[Import & export rules](./import-export.md)** · **[Rule Library](./library.md)** ·
**[Best practices](./best-practices.md)**
