---
sidebar_position: 2
title: Connecting Gmail
description: How to connect your Gmail account to MailPrism
---

# Connecting Your Gmail Account

MailPrism works directly with your Gmail inbox through Google's secure OAuth system. This guide explains how to connect your account and what permissions are needed.

## How to Connect

### First-Time Setup

1. Sign in to [app.mailprism.ai](https://app.mailprism.ai)
2. Click **Connect Gmail** on your dashboard
3. Choose your Google account from the popup
4. Review the permissions requested
5. Click **Allow** to authorize MailPrism

### Adding Additional Accounts

You can connect multiple Gmail accounts to MailPrism:

1. Go to **Settings** → **Integrations**
2. Click **Add Gmail Account**
3. Follow the same authorization flow
4. Each account can have its own set of rules

:::info Multiple Accounts
Managing multiple accounts is available on Starter tier and above. Free accounts are limited to one Gmail connection.
:::

## Permissions Explained

When you connect Gmail, Google shows you the permissions MailPrism is requesting. Here's what each one means and why we need it:

### Read Your Emails

**What it allows:** MailPrism can read the content of your emails.

**Why we need it:** To apply your rules, we need to check email content, sender information, and other details to determine which rules should trigger.

### Modify Your Emails

**What it allows:** MailPrism can add labels, archive, move, or delete emails.

**Why we need it:** When a rule triggers, we need to perform the action you specified—like archiving a newsletter or applying a label.

### Send Emails on Your Behalf

**What it allows:** MailPrism can send emails from your account.

**Why we need it:** If you create rules that auto-reply or forward emails, MailPrism needs permission to send those messages.

### Manage Labels

**What it allows:** MailPrism can create and manage Gmail labels.

**Why we need it:** Many automation rules involve applying labels to organize your inbox. We may need to create new labels if they don't exist.

## Security & Privacy

### Your Data is Safe

- **Encrypted in transit:** All communication uses HTTPS/TLS encryption
- **Encrypted at rest:** Your OAuth tokens are encrypted in our database
- **No third-party sharing:** We never share your email data with anyone
- **Minimal access:** We only access what's needed to run your rules

### Revoking Access

You can disconnect MailPrism at any time:

**From MailPrism:**
1. Go to **Settings** → **Integrations**
2. Find your Gmail account
3. Click **Disconnect**

**From Google:**
1. Go to [myaccount.google.com/permissions](https://myaccount.google.com/permissions)
2. Find MailPrism in the list
3. Click **Remove Access**

:::warning
Disconnecting will stop all automation rules for that Gmail account. Your rules will be preserved but won't run until you reconnect.
:::

## Troubleshooting

### Connection Failed

If the Gmail connection fails:

1. **Check popup blockers** — Make sure your browser isn't blocking the Google login popup
2. **Try incognito mode** — Sometimes browser extensions interfere with OAuth
3. **Clear cookies** — Clear cookies for google.com and mailprism.ai, then try again
4. **Check Google Workspace settings** — If using a work account, your admin may need to allow MailPrism

### Token Expired

Gmail tokens occasionally expire. If this happens:

1. Go to **Settings** → **Integrations**
2. Click **Reconnect** next to your Gmail account
3. Complete the authorization flow again

### Permissions Denied

If you accidentally denied a permission:

1. Go to [myaccount.google.com/permissions](https://myaccount.google.com/permissions)
2. Remove MailPrism's access completely
3. Return to MailPrism and connect again
4. This time, accept all permissions

---

**Still having trouble?** Check our [FAQ](/faq) or contact support through the app.
