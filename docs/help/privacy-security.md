---
sidebar_position: 3
title: Privacy & Security
description: How MailPrism connects to Gmail, what it stores, how AI consent works, and the controls you have over your account and data.
---

# Privacy & Security

MailPrism is built privacy-first: you stay in control of your inbox and your data. This
page covers the connection, AI, account protection, and your data rights — with links
to the exact settings.

## How the Gmail connection works

- MailPrism connects through **Google OAuth** — you approve access in Google's own
  window, and MailPrism **never sees or stores your Google password**.
- Your Gmail **access tokens are stored encrypted**.
- You can revoke access anytime from **Settings → Gmail Accounts** or from your
  **[Google account permissions](https://myaccount.google.com/permissions)**.

### What MailPrism can and can't do

The connection requests a specific, minimal set of permissions:

| Access | What it's for |
|--------|---------------|
| **Read & modify mail** | Read senders, subjects, and content to match conditions and (if enabled) run AI; apply labels, archive, star, mark read. |
| **Manage labels** | Create and manage the labels your rules and tracking use. |
| **Send mail** | Used when you send or reply from MailPrism, and when a feature you turned on sends on your behalf — forwarding, auto-replies, auto-responders, nudges, and unsubscribe requests sent by email. MailPrism never sends email you didn't write or set up. |
| **Email & profile** | Identify the connected Google account and show your display name. |

Calendar access (read-only) is **separate and optional** — you grant it only if you opt
into Calendar features. Full detail:
**[What access MailPrism asks for](../getting-started/connecting-gmail.md#what-access-mailprism-asks-for)**.

:::note What MailPrism does on its own
MailPrism only acts on your mail through things you do in the app, rules you create,
and features you turn on. Reply tracking is on by default and applies MailPrism's
tracking labels — you can change or turn it off in **Settings → Tracking Labels**.
:::

## AI consent

When you sign up, you agree to let MailPrism use AI providers (Google Gemini as the
primary provider, with OpenAI and Anthropic as fallbacks) to analyze your email. You
can turn AI off at any time in **Settings → Privacy → AI Data Processing**. While it's
off, nothing is sent for AI analysis.

When AI is on (and your plan includes it — Starter and up):

- The email's **subject, sender, recipients (To/Cc), and body text** are sent to an AI
  provider to produce the signals — category, urgency, sentiment, and so on. For reply
  tracking, the thread's participants and your own address are sent too.
- Providers **don't use your data to train their models**.
- The **results** are kept with your rule and action history so rules can use them.
- Turning AI off stops new analysis; your non-AI rules keep working.

## What MailPrism stores

- **A cache of recent messages** — an **encrypted (AES-256) copy** of the messages
  MailPrism processes, so it can show your inbox. Message bodies are deleted after
  **7 days** without being opened; details such as sender, subject, date, and labels
  are kept until you delete your account.
- **AI results** — kept with your rule and action history.
- **Sent mail you asked it to learn from** — if you use **Learn from your sent mail**,
  the analyzed sent emails are stored until you press **Forget what was learned**. See
  **[Writing profiles](../ai/writing-profiles.md#learn-from-your-sent-mail)**.

Prefer your own provider account? **[BYOK](../ai/byok.md)** lets you bring your own
OpenAI or Anthropic key. For exactly what's sent versus stored, see
**[AI privacy & consent](../ai/privacy-and-consent.md#whats-sent-for-analysis-vs-what-stored)**.

## Tracking & images: we block trackers, we don't add them

Two things often get confused — here's the distinction:

- **Incoming mail:** MailPrism can **block tracking pixels** and external images so
  senders can't tell when you opened their email or where you are. **Block Tracking
  Pixels** is on by default. See
  **[Email privacy](../account/privacy-and-data.md#email-privacy)**.
- **Your response tracking:** the conversation states MailPrism shows (needs action,
  awaiting reply, resolved, and so on) are based on **who sent the last message** —
  reply-state tracking. MailPrism does **not** add open-tracking or click pixels to
  your outgoing mail.

## Protecting your account

Secure the account itself under **Settings → Security**:

- **Two-factor authentication (2FA)** with an authenticator app, plus
  **[recovery codes](../account/account-security.md#recovery-codes)** for backup.
- **[Passkeys](../account/account-security.md#passkeys)** — sign in with your device's
  biometrics or PIN instead of a password.
- **[Active sessions](../account/account-security.md#active-sessions)** — see where
  you're signed in and sign out devices you don't recognize.

Full walkthrough: **[Account & Security](../account/account-security.md)**.

## Your data, your controls

- **Export your data** — download a copy of your learning data anytime (GDPR). See
  **[Export your data](../account/privacy-and-data.md#export-your-data)**.
- **Clear learning data** — permanently delete detected patterns, activity logs, and
  corrections. See
  **[Clear learning data](../account/privacy-and-data.md#clear-learning-data)**.
- **Delete your account** — remove your account and its data, with a typed
  confirmation to prevent accidents. See
  **[Delete your account](../account/account-security.md#delete-your-account)**.
- **Disconnect Gmail** — immediately stop all access. See
  **[Disconnecting](../getting-started/connecting-gmail.md#disconnecting)**.

:::warning Deletion is permanent
Account deletion and clearing learning data can't be undone. Export first if you want a
copy.
:::

## Questions about data handling

For specifics about data processing and your rights, see MailPrism's
**[Privacy Policy](https://mailprism.ai/privacy)** and
**[Terms of Service](https://mailprism.ai/terms)**, or email
**[hello@mailprism.ai](mailto:hello@mailprism.ai)**.
