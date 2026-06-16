---
sidebar_position: 1
title: Email Templates
description: Save reusable replies — canned quick replies, AI-powered templates, and template variables that fill in from each email.
---

# Email Templates

Stop retyping the same answers. MailPrism gives you two kinds of saved reply, plus
**variables** that personalize them automatically:

- **Quick replies** — fixed, canned text you reuse word-for-word.
- **AI templates** — a prompt that generates a tailored reply on the spot.

Manage both under **Settings → Templates**. You insert them while writing — see
**[Composing & replying](../inbox/composing.md)**.

## Quick replies (canned responses)

A quick reply is a saved snippet you drop into a message. Each one has:

| Field | What it's for |
|-------|---------------|
| **Name** | A label so you can find it (e.g. *"Thanks for reaching out"*). Required. |
| **Subject** | The subject line, used when the reply starts a *new* email. Optional. |
| **Message** | The body text. This is the reply itself. Required. |
| **Shortcut** | An optional typing shortcut — must start with **/** (e.g. `/thanks`). |

To add one, open **Settings → Templates → Quick Replies** and click **Add Reply**.
Edit or delete any reply from the same list. MailPrism shows a small **Used _n_×**
counter so you can see which replies you actually lean on.

:::tip Insert with a slash
If you gave a quick reply a shortcut like `/thanks`, you can type it straight into the
compose box. Slash commands open a quick menu right at your cursor — see
**[Composing & replying](../inbox/composing.md)**.
:::

### Enhance with AI

Next to each quick reply is an **Enhance** button. It rewrites the snippet with AI —
handy for tightening wording or adjusting tone — and you review the result before it
replaces your text. This needs [AI features](../ai/overview.md) turned on.

## AI templates

An AI template is a saved **prompt** rather than fixed text. When you use it, AI reads
the email you're replying to and generates a fresh, contextual reply that follows the
prompt's instructions.

:::note Premium feature
AI templates are a premium feature and depend on your plan. The app marks the section
accordingly and links you to upgrade if it isn't included. Check **Settings → Billing**
or the [pricing page](https://mailprism.ai/pricing) for what your plan includes.
:::

### System vs. custom templates

| Type | What it is |
|------|------------|
| **System templates** | Ready-made templates MailPrism ships, marked **System**. Read-only as-is, but you can customize a copy. |
| **Custom templates** | Templates you create yourself, from scratch. |

Create your own with **Create Template**. You give it a **name**, an optional
**description**, a **category** (General, Meetings, Sales, Support, Personal, Other),
and the **prompt template** itself.

### Smart fields

A template's prompt can include **smart fields** — AI-powered variables written as
`{{FIELD_NAME}}`. For each one you define a **field name**, a **type** (Text, List,
Number, Yes/No, or Date), and an **AI instruction** telling the AI what to pull from
the email (for example, *"Extract the meeting date mentioned in the email"*). The AI
fills the field in when it generates the reply.

### Enable, disable, and preview

| Control | What it does |
|---------|--------------|
| **Toggle (on/off)** | Enable a template for quick access, or disable it without deleting it. |
| **Preview** | Test the template against a real email to see what it would produce, before you rely on it. |
| **Customize** | On a system template, makes an editable copy you can change. |
| **Edit** | Change one of your own (or customized) templates. |

### Revert to default

When you customize a system template, it's marked **Customized**. If you want the
original back, use **Revert** — your changes are discarded and the template returns to
the version MailPrism ships. This affects only your copy.

:::caution Revert is permanent
Reverting a customized template discards your edits and can't be undone.
:::

## Template variables

Both kinds of template support **variables** — placeholders that fill in from the
email's context or your own settings when the reply is created. Common ones:

| Variable | Fills in with |
|----------|---------------|
| `{sender_name}` | The name of the person who emailed you |
| `{sender_email}` | The sender's email address |
| `{original_subject}` | The subject of the incoming email |
| `{ai_summary}` | An AI-written summary of the email |
| `{signature}` | Your [signature](./signatures.md) |
| `{booking_link}` | Your calendar / booking link |
| `{phone_number}` | Your phone number |
| `{business_hours}` | Your business hours |
| `{business_address}` | Your business address |

:::note Two styles of placeholder
Quick replies and hybrid content use single braces — `{sender_name}`. AI template
smart fields use double braces — `{{FIELD_NAME}}`. The editor inserts the right style
for you, so you rarely have to type them by hand.
:::

## Static, AI, and hybrid

Templates fall into three working styles:

| Style | How it works |
|-------|--------------|
| **Static** | Fixed content — no variables, no AI. A plain canned reply. |
| **AI generated** | Fully written by AI from your instructions. |
| **Hybrid** | A template with variables like `{sender_name}` or `{ai_summary}` that fill in per email. |

A **hybrid** template is the middle ground: you keep control of the wording but let
MailPrism slot in details automatically.

## Where templates show up

You'll reach your templates from:

- The **Templates** button in the [compose panel](../inbox/composing.md).
- The **/** slash menu while writing.
- Any [rule action](../rules/actions.md) that drafts or sends a reply.

→ Keep your sign-off consistent: **[Signatures](./signatures.md)** ·
write in your own voice: **[Writing profiles](../ai/writing-profiles.md)**
