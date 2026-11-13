---
sidebar_position: 3
title: Alerts, Digests & Reports
description: The notification emails MailPrism sends — instant alerts, the daily digest and the weekly activity report — and how to control them.
---

# Alerts, Digests & Reports

MailPrism can email you about what's happening in your account in three ways.
All three come from **MailPrism &lt;noreply@mail.mailprism.ai&gt;** and go to
the email address you sign in with.

| Email | When | Set it up in |
|-------|------|--------------|
| **Notification alert** | Shortly after a notification, one email per notification | Category Preferences → **Email** |
| **Daily digest** | Once a day at your chosen hour | Email Digest → **Daily digest** |
| **Weekly activity report** | Once a week | Currently paused |

<Screenshot
  src="/img/screens/notifications/settings.webp"
  alt="Settings → Notifications showing the In-App Notifications switch, the Email Digest frequency choice, and Category Preferences"
  caption="Settings → Notifications"
/>

---

## Notification alerts

An alert is an email copy of one in-app notification. You only get alerts for
categories where you turned **Email** on.

<Screenshot
  src="/img/screens/emails/notification-alert.webp"
  alt="A notification alert email: MailPrism header, a red-edged card tagged AI Insight with the notification title and message, an Open email button, and a footer with Manage notification preferences and Unsubscribe links"
  width={720}
/>

- **Subject:** the notification's title.
- **Body:** the category tag, the title, the message, and a button to the
  email, rule or setting it's about.
- **Timing:** urgent notifications go out right away, high-priority ones within
  about 30 seconds, everything else within about a minute.

To choose which categories email you, open **Settings → Notifications →
Category Preferences → Show advanced settings**, then turn **Email** on or off
for each category.

<Screenshot
  src="/img/screens/notifications/settings-categories.webp"
  alt="Category Preferences expanded, with In-app and Email switches for each notification category"
/>

---

## Daily digest

The digest is one email a day that rounds up your unread notifications, grouped
by category, with a count of how many are high priority.

<Screenshot
  src="/img/screens/emails/digest-daily.webp"
  alt="A daily digest email: a Quick Summary with 5 total and 1 high priority, then notifications grouped under AI, Rule, Tracking and System, and a View All Notifications button"
  width={720}
/>

- **Subject:** *Your Daily MailPrism Digest - 5 updates* (the number changes).
- **When:** at the hour you pick under **Delivery time**, in your time zone.
- **What's in it:** your notifications since the last digest. An email alert you
  already got still appears here.

Turn it on under **Settings → Notifications → Email Digest → Daily digest**.
The digest and the per-category alerts are separate: you can have either,
both, or neither.

---

## Weekly activity report

:::note Paused
The weekly report is switched off for everyone at the moment, so it doesn't
appear in your settings. This is what it looks like when it returns.
:::

<Screenshot
  src="/img/screens/emails/weekly-report.webp"
  alt="The weekly activity report email: time saved this week, emails processed, rules executed, a numbered list of top performing rules, and buttons to View Dashboard and Manage Rules"
  width={720}
/>

- **Subject:** *Your Weekly MailPrism Activity Report*
- **What's in it:** time saved, emails processed, rules run, and your four
  busiest rules for the past seven days.

---

## Unsubscribing

Every alert, digest and report has two links at the bottom:

- **Manage notification preferences** opens Settings → Notifications.
- **Unsubscribe** opens a page that asks *"Unsubscribe from notification
  emails?"*. Clicking **Yes, unsubscribe me** turns off the digest, the weekly
  report and email for every category in one step. In-app notifications keep
  working.

You can turn any of it back on in Settings → Notifications.

:::caution Rule notification emails are different
Emails from a rule's **Send Me a Notification Email** action are part of that rule, so the
Unsubscribe link doesn't stop them. Edit the rule and remove the action instead.
See [Rule notification emails](./rule-notification-emails.md).
:::
