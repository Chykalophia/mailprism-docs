---
sidebar_position: 7
title: Auto-Responders
description: Reply automatically while you're away or outside business hours — with built-in safety so you never spam newsletters, no-reply addresses, or the same sender twice.
---

# Auto-Responders

Auto-responders send a reply for you when you can't. MailPrism gives you **two
independent responders** — one for vacations, one for after hours — and you can run
either, both, or neither. Find them under **Settings → Auto-responder**.

| Responder | Triggers on | Schedule style |
|-----------|-------------|----------------|
| **Vacation** | You being away between two dates | A date range |
| **After-hours** | Mail arriving outside your working hours | Set hours on set days |

:::note Vacation takes priority
If both responders would fire on the same email, the **Vacation** responder wins — so
you won't send a "we're closed for the evening" reply while you're actually on holiday.
:::

## Vacation responder

Turn this on when you're away. It replies to incoming mail between your start and end
dates, then goes quiet again.

| Setting | What it controls |
|---------|------------------|
| **Start date / End date** | The window when the responder is active |
| **Subject line** | The reply subject (use `{original_subject}` to echo theirs) |
| **Response message** | The body of the reply (use `{sender_name}` for the sender's name) |
| **Workflow** | **Send immediately**, or **Create draft for review** |
| **Response delay** | A short wait before replying — 30 sec to 5 min (1 min recommended) |
| **Who receives responses** | **Everyone**, **My contacts only**, or a **Whitelist** |

When you choose **Whitelist**, you add specific email addresses that should always get
a reply — useful for important contacts when everyone else is filtered out.

:::tip Why the response delay?
The short delay lets Gmail finish classifying the email first — so the responder can
correctly skip a newsletter or promo that hasn't been sorted yet. Leave it at the
recommended setting unless you have a reason to change it.
:::

## After-hours responder

This one replies to mail that lands **outside** your working hours, then waits for the
next business day.

| Setting | What it controls |
|---------|------------------|
| **Business hours** | A start time and end time (e.g. `09:00`–`17:00`) |
| **Work days** | The days those hours apply (e.g. Mon–Fri) |
| **Timezone** | So your hours track your local clock |
| **Subject line** | The reply subject (`{original_subject}` echoes theirs) |
| **Response message** | The body (use `{business_hours}` to show your schedule) |
| **Workflow** | **Send immediately**, or **Create draft for review** |
| **Response delay** | A short wait before replying — 15 sec to 2 min (30 sec recommended) |
| **Who receives responses** | **Everyone**, **My contacts only**, or a **Whitelist** |

Replies go out only for mail that arrives **outside** the hours and days you mark as
working time.

## Draft vs. send

Both responders share the **Workflow** choice:

- **Send immediately** — the reply goes out on its own.
- **Create draft for review** — MailPrism writes the reply and leaves it as a draft, so
  you can check it before anything is sent.

:::tip Try draft mode first
If you're nervous about automatic replies, set the workflow to **draft** for a day. You'll
see exactly what *would* have gone out, with zero risk of an unwanted send.
:::

## Built-in safety

Auto-responders are deliberately cautious so they never turn into a spam machine or an
auto-reply loop. These protections are always on:

- **No-reply addresses are skipped** — MailPrism won't reply to `no-reply@…` senders.
- **Mailing lists are skipped** — anything carrying an unsubscribe header is left alone.
- **Automated and system mail is skipped** — newsletters, promotions, notifications,
  transactional receipts, spam, and cold outreach don't get a reply, so you avoid loops.
- **Rate limits** — at most **one** auto-reply per sender per day, plus a daily cap
  across all senders.

:::warning These exclusions can't be turned off
The safety filters and rate limits protect your reputation as a sender. They apply to
every auto-reply regardless of your **Who receives responses** setting — except for
addresses you add to a **Whitelist**, which always receive a reply.
:::

## Related

- **[Scheduling & recurrence](../rules/scheduling-recurrence.md)** — the date-range and
  time-based schedules that power these responders behind the scenes.
- **[Response tracking overview](./overview.md)** — what MailPrism does with replies
  once you're back.
