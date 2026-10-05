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

Manage both under **Settings → Email Templates**. You insert them while writing — see
**[Composing & replying](../inbox/composing.md)**.

## Quick replies (canned responses)

A quick reply is a saved snippet you drop into a message. Each one has:

| Field | What it's for |
|-------|---------------|
| **Name** | A label so you can find it (e.g. *"Thanks for reaching out"*). Required. |
| **Subject** | The subject line, used when the reply starts a *new* email. Optional. |
| **Message** | The body text. This is the reply itself. Required. |
| **Shortcut** | An optional typing shortcut — must start with **/** (e.g. `/thanks`). |

To add one, open **Settings → Email Templates → Quick Replies** and click **Add Reply**.
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
AI templates are a premium feature — the section shows a
<span class="mp-pill mp-pill--violet">Pro</span> badge. Check **Settings → Billing**
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
original back, use **Revert to Default** — your changes are discarded and the template returns to
the version MailPrism ships. This affects only your copy.

:::caution Revert is permanent
Reverting a customized template discards your edits and can't be undone.
:::

## Template variables

Templates support **variables** — placeholders that fill in from the email's context
or your own settings. There are **two styles**, depending on where the template is used.

:::note Which braces?
- **Quick replies** (inserted while you compose) use **double braces and capitals** —
  `{{SENDER_NAME}}`.
- **Rule reply templates** (used by rule actions like Create Draft Reply and Send
  Auto-Reply) use **single braces and lowercase** — `{sender_name}`.
- AI template **smart fields** also use double braces — `{{FIELD_NAME}}`.
:::

### Quick-reply variables {#variables}

| Variable | Fills in with |
|----------|---------------|
| `{{SENDER_NAME}}` · `{{SENDER_FIRST_NAME}}` | The sender's full / first name |
| `{{SENDER_EMAIL}}` | The sender's email address |
| `{{RECIPIENT_NAME}}` · `{{RECIPIENT_FIRST_NAME}}` | Your full / first name |
| `{{EMAIL_SUBJECT}}` | The subject of the original email |
| `{{EMAIL_DATE}}` | The date the original email arrived |
| `{{TODAY_DATE}}` · `{{TODAY_SHORT_DATE}}` | Today's date (long / short) |
| `{{CURRENT_TIME}}` · `{{CURRENT_DAY}}` | The current time / day of the week |
| `{{NEXT_WEEK_DATE}}` | The date one week from today |
| `{{SIGNATURE}}` | Your default [signature](./signatures.md) |
| `{{BOOKING_LINK}}` | Your calendar / booking link |
| `{{PHONE_NUMBER}}` | Your phone number |
| `{{BUSINESS_HOURS}}` · `{{BUSINESS_ADDRESS}}` | Your business hours / address |

:::caution Unfilled variables stay in the text
If MailPrism can't fill a quick-reply variable — say you haven't saved a booking link —
it's left in the message exactly as typed (`{{BOOKING_LINK}}`). Fill it in or delete it
before you send.
:::

### Rule reply-template variables

| Variable | Fills in with |
|----------|---------------|
| `{sender_name}` · `{sender_email}` | The sender's name / email address |
| `{original_subject}` | The subject of the incoming email |
| `{ai_summary}` | An AI-written summary of the email — see **[Email summaries](../ai/summaries.md)** |
| `{signature}` | Your [signature](./signatures.md) |
| `{booking_link}` · `{phone_number}` | Your booking link / phone number |
| `{business_hours}` · `{business_address}` | Your business hours / address |

## Static, AI, and hybrid

Templates fall into three working styles:

| Style | How it works |
|-------|--------------|
| **Static** | Fixed content — no variables, no AI. A plain canned reply. |
| **AI generated** | Fully written by AI from your instructions. |
| **Hybrid** | A template with variables (like `{{SENDER_NAME}}`, or `{ai_summary}` in a rule reply) that fill in per email. |

A **hybrid** template is the middle ground: you keep control of the wording but let
MailPrism slot in details automatically.

## Where templates show up

You'll reach your templates from:

- The **Templates** button in the [compose panel](../inbox/composing.md).
- The **/** slash menu while writing.
- Any [rule action](../rules/actions.md) that drafts or sends a reply.

→ Keep your sign-off consistent: **[Signatures](./signatures.md)** ·
write in your own voice: **[Writing profiles](../ai/writing-profiles.md)**
