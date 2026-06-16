---
sidebar_position: 5
title: Composing & Replying
description: Write new messages and replies without leaving MailPrism — with templates, AI help, and slash commands.
---

# Composing & Replying

You can write and send mail right inside MailPrism. Click **Compose** in the inbox
header to start a new message, or use **Reply**, **Reply All**, or **Forward** on an
email you're reading. Either way, the **compose panel** opens with everything you need.

## The compose panel

| Part | What it's for |
|------|---------------|
| **From** | Which account (and alias) the message is sent from — see below. |
| **To / Cc / Bcc** | Recipients. Cc and Bcc are hidden until you click the **Cc** or **Bcc** toggle. |
| **Subject** | The subject line *(new messages and forwards only — replies keep the thread's subject)*. |
| **Message body** | Where you write. Type plain text, and use **/** for templates. |
| **Original message** | On a reply or forward, click **Show original message** to view the quoted thread. |

The panel header shows the mode — **Reply**, **Reply All**, **Forward**, or **New
Message** — so you always know what you're sending.

## Recipients with autocomplete

As you type in **To**, **Cc**, or **Bcc**, MailPrism suggests matches from your
**contacts** by name or email address. Use the arrow keys to pick one, or just keep
typing a full address.

- Each recipient becomes a removable chip.
- Paste a comma-, semicolon-, or newline-separated list to add several at once.
- Press **Backspace** in an empty field to remove the last chip.

:::tip No surprise sends
A suggestion is only chosen when you deliberately arrow onto it. If you type an address
and press Enter, MailPrism adds exactly what you typed — it won't silently swap in a
look-alike contact.
:::

## Choosing the account to send from

If you've connected more than one Gmail account, the **From** field becomes a picker so
you can choose which account sends the message. If the selected account has verified
**send-as aliases** in Gmail, those appear too, so you can send as an alias. With a
single account and no aliases, **From** simply shows your address. See
**[Gmail connection](../account/gmail-connection.md)**.

## Templates and quick replies

Click **Templates** in the footer (or type **/** in the body) to insert a saved reply
without retyping it:

- **Quick replies** — your canned responses, including any `{{variables}}`, which fill
  in from the email's context.
- **AI templates** — prompts that generate a tailored reply on the spot.

Manage these in **Templates** (under Productivity).

## AI writing help

MailPrism can draft the message for you:

- **Ask AI** — from the Templates menu or the **/** menu, describe what you want to say
  (for example, *"Politely decline the meeting and suggest next week instead"*) and
  MailPrism writes a draft you can edit before sending.
- **AI templates** generate a reply that fits the email you're responding to.

Learn more in **[AI features](../ai/overview.md)**.

## Slash commands

Type **/** at the start of a line (or after a space) to open a quick menu right at your
cursor. Keep typing to filter, then use the arrow keys and **Enter** (or **Tab**) to
insert a quick reply, run an AI template, or jump to **Ask AI**. Press **Escape** to
close it.

## Signatures

Signatures come from your Gmail send-as settings — the account or alias you choose in
the **From** field determines the signature Gmail applies.

## Sending, drafts, and discarding

| Button | What it does |
|--------|--------------|
| **Send** | Sends the message. You need at least one recipient. |
| **Minimize** (–) | Tucks the panel away without losing your work. |
| **Discard** (trash) | Throws the draft away and deletes its saved copy. |

- Press **Ctrl/Cmd + Enter** anywhere in the body to send.
- Drafts are saved automatically as you write, so a reply you started is waiting for you
  the next time you open that thread. **Discard** removes the saved draft for good.

→ Next: **[Labels & organization](./labels.md)**
