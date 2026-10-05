---
sidebar_position: 1
title: Account & Security
description: Manage your profile, password, two-factor authentication, passkeys, active sessions, and account deletion.
---

# Account & Security

Everything about *you* lives in two places:

- **Settings → Account** — your profile, password, and the Danger Zone.
- **Settings → Security** — passkeys, two-factor authentication, and active sessions.

This page walks through both.

## Your profile

Open **Settings → Account** to see your profile.

| Field | Editable? | Where it comes from |
|-------|-----------|----------------------|
| **Avatar** | No | Pulled from [Gravatar](https://gravatar.com) for your email address. |
| **Display name** | No | Derived automatically from your email address. |
| **Email address** | Yes | Your sign-in email. Click **Change** to update it. |

### Changing your email

1. Next to **Email Address**, click **Change**.
2. Type the new address and click **Save**.
3. A verification email is sent — confirm it to complete the change.

:::note Avatar and display name are read-only
MailPrism doesn't store a custom avatar or display name. Your avatar comes from
Gravatar (set one up at [gravatar.com](https://gravatar.com)), and your display
name is derived from your email.
:::

---

## Password

You change your password by email rather than typing a new one into the app.

1. Go to **Settings → Account** (or **Settings → Security**).
2. In the **Password** row, click **Change Password**.
3. Check your inbox for a secure reset link and follow it to set a new password.

The button shows **Email Sent** once the link is on its way.

---

## Two-factor authentication (2FA)

Two-factor authentication adds a second step to sign-in: after your password, you
enter a 6-digit code from an authenticator app. Manage it under **Settings →
Security**, in the **Password & Authentication** card.

The card shows whether 2FA is **Enabled** or **Disabled**, and — when enabled —
how many **recovery codes** you have left.

### Setting up 2FA

1. In **Settings → Security**, click **Enable 2FA**.
2. **Scan the QR code** with an authenticator app — Google Authenticator, Authy,
   1Password, and similar apps all work.
   - Can't scan? A code is shown beneath the QR image — enter it into your app
     manually.
3. Click **Continue**, then enter the **6-digit code** from your app and click
   **Verify & Enable**.
4. MailPrism shows your **recovery codes**. Save them (see below), tick *I have
   saved these recovery codes*, then click **I've Saved My Codes**.

### Recovery codes

Recovery codes get you back in if you lose access to your authenticator app.

- You receive a set of one-time codes when you enable 2FA.
- Each code works **once**.
- Use **Copy All Codes** to copy them, then store them somewhere safe.

:::warning Store recovery codes separately
Keep your recovery codes somewhere other than the phone that holds your
authenticator app — a password manager or a printed copy. If you lose both your
device *and* your codes, you may be locked out.
:::

### Turning off 2FA

Click **Manage 2FA**, then **Disable 2FA**. Disabling 2FA also deletes your
recovery codes; if you re-enable it later, you'll get a fresh set.

:::note Workspace requirement
If a workspace you belong to **requires two-factor authentication**, you can't turn
2FA off while you're a member. See
**[Workspaces & Teams → Require two-factor authentication](./workspaces-and-teams.md#require-two-factor-authentication)**.
:::

---

## Passkeys

Passkeys let you sign in with your device's fingerprint, face recognition, or a
security key — no password to type. Manage them under **Settings → Security**, in
the **Passkeys** card.

### Adding a passkey

1. In **Settings → Security**, click **Add Passkey**.
2. (Optional) Give it a name like *My iPhone* or *Work Laptop* so you can tell
   your passkeys apart later.
3. Click **Add Passkey** and follow your device's prompt — Touch ID, Face ID,
   Windows Hello, or a hardware security key.

You can register up to **10 passkeys**.

### Renaming and removing passkeys

Each passkey in the list shows when it was **added** and **last used**.

- **Rename** — click **Rename**, type a new name, and **Save**.
- **Remove** — click **Remove**, then confirm. A removed passkey can no longer be
  used to sign in.

### Browser support

Passkeys need a modern browser. MailPrism supports **Chrome, Safari, Edge, and
Firefox**. If your browser doesn't support passkeys, MailPrism shows a warning and
the **Add Passkey** button is unavailable.

:::tip Built-in authenticators
If your device supports **Touch ID, Face ID, or Windows Hello**, MailPrism will
say so — those make passkey sign-in fast and passwordless.
:::

---

## Active sessions

Under **Settings → Security**, expand **Active Sessions** to see everywhere your
account is currently signed in. Each session shows its **device / browser**, **IP
address**, and **last activity** date. Your current session is marked **Current**.

- **Revoke** — sign out a single session you don't recognize.
- Your current session can't be revoked from this list (you're using it).

:::tip Seeing something unfamiliar?
If a session looks like it isn't yours, **Revoke** it and then **change your
password** straight away.
:::

---

## Danger Zone — delete your account {#delete-your-account}

The **Danger Zone** at the bottom of **Settings → Account** permanently deletes
your account.

### Before you delete

Account deletion **cannot be undone**. If you want to keep a copy of your data,
export it first from **[Privacy & Data](./privacy-and-data.md)**.

### How deletion works

1. In the Danger Zone, click **Delete Account**.
2. To confirm, type the exact phrase **`DELETE my account permanently`** into the
   confirmation box. The delete button stays disabled until it matches exactly.
3. Click **Yes, delete my account**.

### What gets deleted

Deletion is permanent and removes everything tied to your account, including:

- All your MailPrism data — rules, settings, contacts, and history.
- Your connected **Gmail accounts** (MailPrism stops watching them).
- **Workspaces you own**, plus your membership in any other workspaces.
- Any **lifetime code** you redeemed.
- Your **subscription**, which is cancelled automatically.

After deletion you're signed out and can't sign back in with the same account.

:::warning Deletion is permanent
Once you confirm, your account and data are gone for good. Export anything you
want to keep beforehand.
:::

---

## Related

- **[Managing your Gmail connection](./gmail-connection.md)** — accounts, sync, labels, and reconnecting.
- **[Privacy & Data](./privacy-and-data.md)** — export your data and control what MailPrism stores.
- **[Workspaces & Teams](./workspaces-and-teams.md)** — members, roles, and shared accounts.
- **[Privacy & Security](../help/privacy-security.md)** — how MailPrism keeps your data safe.
