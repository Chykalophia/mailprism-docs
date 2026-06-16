---
sidebar_position: 2
title: Connecting Gmail
description: How MailPrism connects to Gmail, exactly what access it asks for, multiple accounts, reconnecting, label sync, and disconnecting.
---

# Connecting Gmail

MailPrism works directly with your Gmail through Google's secure **OAuth** sign-in.
You approve the connection in Google's own window — MailPrism never sees or stores
your Google password.

## How to connect

1. Sign in to **[app.mailprism.ai](https://app.mailprism.ai)**.
2. Click **Connect Gmail** (on the onboarding screen, or **Settings → Gmail →
   Connect Account**).
3. Choose the Google account you want to automate.
4. Review the access MailPrism requests, then click **Allow**.

You'll be returned to MailPrism with the account connected.

:::info Google Workspace accounts
MailPrism works with personal Gmail and Google Workspace accounts. For a Workspace
account, your administrator may need to approve MailPrism for your organization
before you can connect.
:::

## What access MailPrism asks for

To run your rules, MailPrism requests a specific set of Google permissions. Here's
exactly what each one is for:

| Access | What it's used for |
|--------|--------------------|
| **Read and modify mail** | Read senders, subjects, and content to match your rule conditions and power AI analysis; apply and remove labels, archive, star, and mark read/unread when a rule matches. |
| **Manage labels** | Create and manage the labels your rules apply and the labels MailPrism uses for tracking. |
| **Send mail** | Used only by the email **forwarding** feature, and only when a rule you built forwards a message. |
| **Email & profile** | Identify which Google account you connected and show your display name in account settings. |

MailPrism only uses this access to do the work your rules describe. Nothing is sent,
labeled, or moved unless a rule you created says so.

:::note Calendar (optional, separate)
Some features can request **read-only Calendar** access. That's a separate
permission you grant only if you opt into those features — it isn't part of the
standard Gmail connection.
:::

## Connecting more than one account

You can connect multiple Gmail accounts and automate them together.

- Add another from **Settings → Gmail → Connect Account**.
- Settings shows **how many accounts you've used** and your plan's limit. If you've
  hit the limit, you'll see an option to upgrade. (Limits live on the live billing
  page — see **[Billing](../account/billing.md)**.)
- One account is your **Primary**. To change it, open **Settings → Gmail** and click
  **Set Primary** on another account.

When you build a rule, you can scope it to a specific connected account or apply it
across all of them.

:::caution One mailbox, one workspace
Each Gmail mailbox can be active in only one MailPrism workspace at a time. If an
account is already connected elsewhere, disconnect it there first.
:::

## Per-account sync

Each connected account has its own **Sync** toggle under **Settings → Gmail → Sync
Settings**. Turn sync off to pause automatic processing for that account without
disconnecting it; turn it back on (**Reactivate**) when you're ready.

## Labels

MailPrism keeps a synced copy of your Gmail labels so your rules and label picker
stay current.

- **Sync Labels** — on a connected account, click **Sync Labels** to pull the
  latest labels from Gmail.
- **Create Label** — create a new Gmail label straight from MailPrism. Use `/` to
  nest, for example `Clients/Acme` creates an *Acme* sub-label under *Clients*.

→ More on using labels in rules: **[Conditions reference](../rules/conditions.md)** ·
**[Actions reference](../rules/actions.md)**

## Reconnecting & reauthorizing

Sometimes Google access expires or is revoked — for example, after a password change
or a long period of inactivity. When that happens, the account shows a
**Disconnected** badge in **Settings → Gmail**.

To restore it, click **Reconnect** on that account and approve access again. You
must sign in with the **same Google account** — selecting a different one is
rejected so rules stay tied to the right mailbox. Your rules are kept and resume
once the connection is restored.

## Disconnecting

You can revoke MailPrism's access whenever you like.

**From MailPrism:** go to **Settings → Gmail** and click **Disconnect** on the
account. You'll be asked to confirm.

**From Google:** open
**[myaccount.google.com/permissions](https://myaccount.google.com/permissions)**,
find MailPrism, and choose **Remove access**.

:::warning Disconnecting stops automation
While an account is disconnected, its rules won't run. Your rules are kept — they
resume once you reconnect.
:::

## Security & privacy

- Your connection uses **Google OAuth** — no password sharing.
- Your Gmail access tokens are **stored encrypted**.
- AI features are **opt-in**. Email content is only sent for AI analysis after you
  give consent. See **[AI privacy & consent](../ai/privacy-and-consent.md)**.
- You can **export your data or delete your account** at any time from
  **[Account & Security](../account/account-security.md)**.

More detail lives in **[Privacy & Security](../help/privacy-security.md)**.

## If the connection fails

A few quick fixes if connecting doesn't work the first time:

- **Allow pop-ups / redirects** for `app.mailprism.ai` so Google's sign-in window
  can open.
- **Try a private/incognito window** — browser extensions sometimes block OAuth.
- **For Workspace accounts**, confirm your admin has authorized MailPrism. If Google
  shows "access denied," ask your administrator to approve MailPrism for your
  organization.

Step-by-step help is in **[Troubleshooting](../help/troubleshooting.md)**.
