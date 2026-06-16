---
sidebar_position: 2
title: Managing Your Gmail Connection
description: Manage connected Gmail accounts — set primary, per-account sync, labels, permissions, exemptions, processing, and reconnecting.
---

# Managing Your Gmail Connection

Your Gmail connection is what makes everything else possible. Once you've
connected an account, you manage it under **Settings → Gmail**.

:::tip New here?
For first-time setup — the OAuth flow, what each permission means, and adding
multiple accounts — start with **[Connecting Gmail](../getting-started/connecting-gmail.md)**.
This page covers the *ongoing* side: managing accounts you've already connected.
:::

## Connected accounts

**Settings → Gmail** lists every account you've connected. Each row shows the
account, its status badge, and when it last synced.

| Badge | Meaning |
|-------|---------|
| <span class="mp-pill mp-pill--blue">Primary</span> | Your default account for actions that need one. |
| <span class="mp-pill mp-pill--green">Connected</span> | Connected and syncing normally. |
| <span class="mp-pill mp-pill--amber">Inactive</span> | Connected, but sync is turned off. |
| <span class="mp-pill mp-pill--red">Disconnected</span> | Access expired or was revoked — needs reconnecting. |

The page also shows **how many accounts you've used** against your plan's limit. If
you've hit it, you'll see an **Upgrade for more** link. (Limits live on the live
billing page — see **[Billing](./billing.md)**.)

### Set a primary account

One account is your **Primary**. To change it, click **Set Primary** on any other
connected account.

---

## Per-account sync

You can pause processing for one account without disconnecting it. There are two
controls, depending on the account's state:

- **Sync toggle** — under **Sync Settings**, each account has its own switch.
  Turn it **off** to stop automatic syncing and processing for that account; turn
  it back **on** to resume. A paused account shows the **Inactive** badge.
- **Reactivate** — if an account is showing **Inactive**, click **Reactivate** on
  its row to switch sync back on.

Your rules are kept either way — they simply don't run on a paused account until
sync is back on.

---

## Labels

MailPrism keeps a synced copy of your Gmail labels so your rules and label picker
stay current. You can manage labels from the accounts list or from an account's
detail page.

### Sync labels

Click **Sync Labels** on a connected account to pull the latest labels from Gmail.
Use this if you created or renamed labels in Gmail and want MailPrism to catch up.

### Create a label

Click **Create Label** (on the row, or **Add Label** on the account detail page),
then type a name. Use `/` to nest — for example, `Clients/Acme` creates an *Acme*
sub-label under *Clients*. The label is created directly in Gmail.

### Edit or delete a label

On an account's **detail page** (click the account row), the **Gmail Labels**
section lists your custom labels with an email count for each. From here you can:

- **Edit** a label's name or color.
- **Delete** a label. Emails currently carrying it lose the label, but the emails
  themselves stay in Gmail.

:::note System labels aren't shown
Gmail's built-in labels (Inbox, Sent, Spam, and so on) aren't editable here — only
your own custom labels appear.
:::

---

## Account permissions

The **Permissions Info** note on the Gmail page summarizes the access MailPrism
uses. MailPrism requests these Google permissions at connection time:

| Access | What it's for |
|--------|---------------|
| **Read and modify mail** | Read senders, subjects, and content to match rules and power AI analysis; apply/remove labels, archive, star, and mark read/unread when a rule matches. |
| **Manage labels** | Create and manage the labels your rules apply and the labels MailPrism uses for tracking. |
| **Send mail** | Used only by the **forwarding** feature, when a rule you built forwards a message. |
| **Email & profile** | Identify which Google account you connected and show your name in settings. |

Calendar access is **separate and optional** — you grant it only if you opt into
features that use it. You can review or revoke all access anytime from your
**[Google Account permissions](https://myaccount.google.com/permissions)**.

→ Full permission detail and the OAuth flow: **[Connecting Gmail](../getting-started/connecting-gmail.md)**.

---

## Sharing an account (workspaces)

If you work in a team, an account's **detail page** lets the owner control who can
use it.

- **Visibility & Access** — make the account **Private** (only you and people you
  grant) or **Workspace** (visible to all members), and set the default access
  level for workspace members.
- **Individual Access** — grant specific members **Read**, **Write**, or
  **Control** access, change their level, or remove them.

→ More on teams: **[Workspaces & Teams](./workspaces-and-teams.md)**.

---

## Per-account activity, rules & exemptions

Open an account's **detail page** (click its row in **Settings → Gmail**) for a
full picture of that mailbox:

- **Rules** — every custom and system rule that applies to this account, with a
  shortcut to create a new one.
- **Tracking Exemptions** — a read-only list of exemptions affecting this account
  (both workspace-wide and account-specific), so you can answer *"why isn't this
  email being tracked?"*. Edit them from **Settings → Tracking → Exemptions**.
- **Recent Activity** — access changes and rule executions for the account.
- **Analytics** — activity stats for the account.

---

## Email processing

The **Email Processing** card (at the bottom of **Settings → Gmail**) controls
*how* incoming mail is handled across your accounts:

- **Processing Delay** — wait a short time before processing, so Gmail can apply
  its own spam and category labels first. This can also reduce AI costs by letting
  Gmail filter unwanted mail before MailPrism looks at it.
- **Skip Gmail-detected spam** — don't process anything Gmail has already marked
  as spam.
- **Skip promotional emails** — don't process messages in Gmail's Promotions or
  Social tabs.

Click **Save Changes** after adjusting these.

:::tip Pausing all processing
To pause an *individual* account, turn off its **Sync** toggle (see
[Per-account sync](#per-account-sync)). For deeper control over when rules run,
see **[Preferences](./preferences.md)**.
:::

---

## Reconnecting

If Google access expires or is revoked — for example, after a password change or a
long gap in use — the account shows a **Disconnected** badge.

To restore it, click **Reconnect** and approve access in Google's window again.
You must sign in with the **same Google account** — picking a different one is
rejected so your rules stay tied to the right mailbox. Your rules are kept and
resume once the connection is back.

:::warning Automation pauses while disconnected
A disconnected account's rules don't run until you reconnect. Nothing is lost —
your rules and settings are all kept.
:::

---

## Disconnecting

To stop MailPrism from accessing an account, click **Disconnect** on its row and
confirm. Any rules tied to that account stop working until it's reconnected.

You can also remove access from Google directly at
**[myaccount.google.com/permissions](https://myaccount.google.com/permissions)**.

---

## Related

- **[Connecting Gmail](../getting-started/connecting-gmail.md)** — first-time setup, scopes, and adding accounts.
- **[Account & Security](./account-security.md)** — your profile, password, and 2FA.
- **[Workspaces & Teams](./workspaces-and-teams.md)** — sharing accounts with a team.
- **[Troubleshooting](../help/troubleshooting.md)** — fixes for connection problems.
