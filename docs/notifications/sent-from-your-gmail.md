---
sidebar_position: 6
title: Emails Sent From Your Gmail
description: The features that send email as you, from your own Gmail account, and where to control each one.
---

# Emails Sent From Your Gmail

Some MailPrism features send email **as you**. These go out through your
connected Gmail account, so your contacts see your name and address, and a copy
lands in your Gmail **Sent** folder like anything else you send.

MailPrism only sends these when you've set them up. Nothing here is turned on
by default.

| Feature | What goes out | Who writes it | Control it in |
|---------|---------------|---------------|---------------|
| [Auto-responder](../tracking/auto-responders.md) | Your vacation or after-hours reply | You (subject and message) | Settings → Auto-Responder |
| [Nudges](../tracking/nudges-and-reminders.md) | A follow-up when someone hasn't replied | You choose the template; AI wording on some plans | Settings → Nudge Flows, or **Nudge** on an email |
| [Rule: Send Auto-Reply](../rules/actions.md#replies--sending) | A reply to emails that match the rule | You, in the rule | The rule |
| [Rule: Forward Email](../rules/actions.md#forward-options) | The matching email, forwarded | The original sender | The rule, plus a [verified forwarding address](./account-emails.md#forwarding-address-verification) |
| [Bulk Unsubscribe](../inbox/unsubscribe.md) | An unsubscribe request, only for lists that ask for one by email | MailPrism, a standard request | Unsubscribe page |

---

## Auto-responder

<Screenshot
  src="/img/screens/tracking/auto-responder.webp"
  alt="Settings → Auto-Responder with the vacation responder on, a start and end date, a subject line using the original subject, and a response message"
/>

Built-in safety skips no-reply addresses, mailing lists, automated mail and
other auto-replies, and replies to each sender at most once a day. See
[Auto-Responders](../tracking/auto-responders.md#built-in-safety).

## Nudges

<Screenshot
  src="/img/screens/tracking/nudges.webp"
  alt="Settings → Nudge Flows showing active nudges, follow-ups sent this week, the global nudge settings, and a list of emails with nudges in progress"
/>

A nudge stops as soon as the other person replies. See
[Nudges & Reminders](../tracking/nudges-and-reminders.md).

---

## Limits that protect your account

- **Forwarding** has a per-day and per-hour cap you can lower in
  **Settings → Forwarding Rules → Forwarding Settings**. Gmail's own sending
  limits also apply; the lower one wins.
- **Forwarding addresses** must be verified before any rule can send to them.
