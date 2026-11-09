---
sidebar_position: 2
title: In-App Notifications
description: The bell, the notifications page, toasts, and banners — what each one shows and how to act on it.
---

# In-App Notifications

Inside the app, MailPrism tells you things in four places. Each one is for a
different kind of news.

| Where | Use it for | Stays until |
|-------|-----------|-------------|
| **The bell** | Things that happened while you were away | You read or clear it |
| **The notifications page** | The full history, filtered by category | You clear it |
| **Toasts** | "Done" or "That didn't work" right after you act | A few seconds |
| **Banners** | A problem that affects your whole account | The problem is fixed |

---

## The bell

The bell sits at the top right of every main page. A red badge shows how many
notifications you haven't read.

<Screenshot
  src="/img/screens/notifications/bell.webp"
  alt="The notification bell open over the dashboard, listing recent notifications with icons, times and action links"
  caption="Click the bell to see your latest notifications. Each one links to the email, rule or setting it's about."
/>

- Click a notification's link (for example **Review draft** or **Open Replies**)
  to jump straight to what it's about.
- Use the check mark on a notification to mark it read.
- **Mark all as read** clears the badge.

---

## The notifications page

**Dashboard → Notifications** (`/dashboard/notifications`) shows everything,
newest first. Filter by category with the chips at the top, or tick
**Unread only**.

<Screenshot
  src="/img/screens/notifications/page.webp"
  alt="The notifications page with category filter chips (All, Rules, AI Insights, System, Billing, Security, Features, Digest) and a list of notifications"
/>

### What creates a notification

| Category | Example you might see | Why it was sent |
|----------|----------------------|-----------------|
| **Rules** | *Rule "Receipts → Finance" failed* | A rule hit an error on an email |
| **Rules** | *Paused rules that kept changing one email's labels* | Two rules kept undoing each other on one conversation |
| **AI Insights** | *"Block cold outreach" moved an email to Trash* | An AI-driven rule trashed, starred, or marked an email important |
| **Response Tracking** | *Tracked email auto-resolved* | A tracked email was deleted or archived, and your settings resolve it |
| **Security** | *Skipped a suspicious email from example-domain.biz* | A sender's domain failed the legitimacy check. Use **Allow this domain** if it's real |
| **System** | *Gmail reconnection required* | Google revoked MailPrism's access to one of your accounts |
| **System** | *A forwarding destination was turned off* | A Slack, Teams or webhook destination kept failing |
| **Label Conflicts** | *2 rules disabled due to label conflicts* | You disconnected an account whose labels those rules used |
| **Billing** | *Your subscription is no longer paying for a workspace* | A workspace you paid for was transferred |
| **New Features / Product Updates** | Announcements | Sent by the MailPrism team |

If an unread notification about the same thing is already waiting, MailPrism
doesn't add a second one.

---

## Toasts

Toasts are the short messages at the corner of the screen after you do
something. They come in four kinds:

| Kind | Looks like | Example |
|------|-----------|---------|
| **Success** | Green check | *Label sync saved* |
| **Error** | Red | An action that didn't go through, with the reason |
| **Warning** | Amber | A partial result, such as some emails in a bulk action failing |
| **Info** | Blue | Something is still running in the background |

Many success toasts for email actions include **Undo**. Click it before the
toast disappears to reverse the action.

---

## Banners

Banners appear across the top of the app when something affects your whole
account, for example:

- **Reconnect Gmail** — Google needs you to sign in again.
- **Connections to Google are paused** — Google is rate-limiting requests for a
  few minutes.
- **AI features temporarily unavailable** — the AI provider is down; rules that
  don't use AI keep running.

See [Troubleshooting](../help/troubleshooting.md) for what to do about each.

---

## Turning notifications off

In-app notifications, and which categories show up, are controlled in
**Settings → Notifications**. See
[Notification settings](../account/notifications.md).
