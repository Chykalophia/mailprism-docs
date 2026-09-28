---
sidebar_position: 2
title: Troubleshooting
description: Fixes for the most common issues — connecting Gmail, banners, rules that won't fire, notifications, and undo.
---

# Troubleshooting

Most issues fall into a few buckets. Find yours below.

## Gmail won't connect

Work through these in order:

1. **Allow pop-ups** for the MailPrism app so Google's sign-in window can open.
2. **Try a private/incognito window** — browser extensions sometimes block OAuth.
3. **Clear cookies** for `google.com` and the MailPrism site, then try again.
4. **Workspace account?** Your admin may need to authorize MailPrism for your org.

See **[How to connect](../getting-started/connecting-gmail.md#how-to-connect)** and
**[If the connection fails](../getting-started/connecting-gmail.md#if-the-connection-fails)**.

## "Reconnect Gmail" or reauthorization needed

Google access tokens can expire, or you (or an admin) may revoke access from your
Google account. When that happens, MailPrism can't read or organize your mail until you
reconnect.

- Open **Settings → Gmail Accounts** and use **Reconnect** on the affected account.
- You'll go through Google's consent screen again — approve the same permissions.

See **[Reconnecting & reauthorizing](../getting-started/connecting-gmail.md#reconnecting--reauthorizing)**.

:::note Why this happens
Reauthorization is normal and occasional. It does **not** mean anything is wrong with
your account — it's how Google keeps OAuth connections secure.
:::

## "Connections to Google are paused" (rate-limit banner)

If you see an amber/orange/red banner saying **all connections to Google's API are
paused**, MailPrism has hit a Gmail rate limit and is **temporarily** holding back
requests to avoid extending the penalty.

- The banner shows a **live countdown** and the affected **account**.
- **Nothing is broken** — processing resumes automatically when the countdown ends.
- You don't need to reconnect or change anything; just wait for it to clear.

This is most likely after a large burst of activity (for example, a big bulk action or
a brand-new account doing its first sync).

## "AI features temporarily unavailable" (AI health banner)

A warning banner reading **"[Provider] is temporarily unavailable"** (or **"AI features
temporarily unavailable"**) means an AI provider is having a hiccup.

- **Your rules and non-AI features keep working** — only AI conditions and AI analysis
  are affected while the provider is down.
- The banner is **dismissible** and reappears if a different provider goes down.
- If it persists and you use **[BYOK](../ai/byok.md)**, check your key's status and your
  provider account in **Settings → Privacy / Integrations**.

## A rule isn't firing

Run the **Test** tool first — it shows exactly what matched and what didn't, without
taking any action. See **[Testing rules](../rules/testing.md)**. Then check, in order:

1. **Is the rule enabled?** Look at its toggle.
2. **Do the conditions actually match?** Test with a real example email's sender and
   subject. Use the test result to see **which condition didn't match**.
3. **AND when it should be OR?** Over-strict logic is the usual culprit. See
   **[Combining conditions](../rules/conditions.md#combining-conditions)**.
4. **Using AI conditions?** Confirm **AI features are on** in **Settings → Privacy** —
   AI conditions never match while AI is off. See **[AI overview](../ai/overview.md)**.
5. **Quiet hours.** Quiet hours pause rule processing during the window, and mail that
   arrives then isn't run later. Check the window in **Settings → Rule Defaults & Safety → Scheduling**.
   See **[Quiet hours](../rules/overview.md#quiet-hours)**.
6. **Scheduled runs.** If a push notification was missed, the email waits for
   MailPrism's next scheduled background run, which **Processing frequency**,
   cooldown, and rate limits can slow. See
   **[How often rules run](../rules/overview.md#how-often-rules-run)**.
7. **Priority / Stop processing.** A higher-priority rule with **Stop processing** on
   may be handling the email first. See
   **[The order rules run in](../rules/overview.md#the-order-rules-run-in)**.
8. **Plan limits.** Check your usage in **[Billing](../account/billing.md#usage)**.

:::tip Narrow it down fast
Temporarily simplify the rule to a single condition. If it fires, add conditions back
one at a time until you find the one that was too strict — or let the **Test** result
point you straight to it.
:::

## A rule did too much

If a rule matched mail you didn't intend:

- **Undo it** from the Rule Logs (see below), then **tighten the conditions** — add an
  AND (for example, also require a sender relationship).
- **Disable** the rule while you adjust it, rather than deleting it.
- For sending actions, switch **Send reply** to **Draft reply** until you trust it.

See **[Best practices](../rules/best-practices.md)**.

## I can't undo an action

The **Rule Logs** include an **Undo** button, but it has limits:

- **Grace period.** Undo is only available for a configurable window after the action
  ran (a workspace setting, **Settings → Rule Defaults & Safety → Undo Settings**). After that, the option expires.
- **Already undone.** An action can only be undone once.
- **Irreversible actions.** Moving to Trash, sending, and forwarding can't be reversed
  and won't offer Undo. Most label, archive, and read/unread changes can.

If Undo isn't offered, check the action type and how long ago it ran.

## I'm not getting MailPrism emails

1. Check your **spam/junk** folder.
2. Add MailPrism's sender address to your contacts.
3. Confirm the digest is **on** and review delivery time in
   **[Notifications](../account/notifications.md)**.
4. Check your **category preferences** — a category you've muted won't send a digest.

## AI signals look wrong

AI is strong but not perfect — sarcasm and unusual phrasing can trip it up. For
important rules, **combine an AI condition with a plain one** (like sender
relationship) for reliability. You can also correct the AI over time; see
**[AI personalization](../account/privacy-and-data.md#ai-personalization)**.

## Still stuck?

Email **[hello@mailprism.ai](mailto:hello@mailprism.ai)** — include the rule name and
an example email if it's about a specific automation, so we can help faster.
