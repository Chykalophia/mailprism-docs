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
| **Who receives responses** | **Everyone**, **My contacts only**, or **Whitelist only** |

- **My contacts only** — people you've emailed before, or senders you've marked as
  trusted.
- **Whitelist only** — only the email addresses you list get a reply; everyone else is
  skipped.

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
| **Who receives responses** | **Everyone**, **My contacts only**, or **Whitelist only** |

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

## Which emails get a reply

A responder only answers **new mail that lands in your inbox** — not mail you sent,
not old mail, and not emails you re-run rules on. Specifically:

- The email arrived in the last **24 hours** (turning a responder on doesn't reply to
  your backlog).
- It arrived in your workspace's **primary** Gmail account.
- Rule processing is running — **quiet hours** and paused automation also pause
  responders.

Right before replying, MailPrism re-checks that the responder is still on, so turning
it off during the response delay cancels the reply.

## Built-in safety

Auto-responders are deliberately cautious so they never turn into a spam machine or an
auto-reply loop. These protections are always on:

- **No-reply addresses are skipped** — MailPrism won't reply to `no-reply@…` senders.
- **Mailing lists are skipped** — anything carrying an unsubscribe header is left alone.
- **Automated and system mail is skipped** — newsletters, promotions, notifications,
  transactional receipts, spam, and cold outreach don't get a reply, so you avoid loops.
- **Auto-replies are skipped** — mail that is itself an auto-reply (or a bounce) never
  gets one back, so two responders can't loop.
- **Rate limits** — at most **one** auto-reply per sender per day (days run on UTC),
  plus a daily cap across all senders.

:::warning These exclusions can't be turned off
The safety filters and rate limits protect your reputation as a sender. They apply to
every auto-reply, whatever your **Who receives responses** setting — including
addresses on your whitelist. If anything goes wrong while checking them, MailPrism
doesn't send.
:::

## Related

- **[Scheduling & recurrence](../rules/scheduling-recurrence.md)** — the date-range and
  time-based schedules that power these responders behind the scenes.
- **[Response tracking overview](./overview.md)** — what MailPrism does with replies
  once you're back.
