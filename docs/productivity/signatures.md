---
sidebar_position: 2
title: Signatures
description: Create email signatures, pick a default, and have it added automatically to AI-written replies.
---

# Signatures

A **signature** is the sign-off that goes at the bottom of your messages — your name,
title, and any contact details you like to include. MailPrism lets you save signatures
and reuse them so you never retype them.

Manage them under **Settings → Email Templates → Email Signatures**.

## Create a signature

1. Open **Settings → Email Templates → Email Signatures**.
2. Click **Add Signature**.
3. Give it a **name** (e.g. *Work* or *Personal*) so you can tell several apart.
4. Enter the **content** — type it across as many lines as you need.
5. Save.

Edit or delete any signature from the same list. Your first signature is set as the
default automatically.

## Set a default

The **default** signature is the one MailPrism reaches for first. Each signature in the
list has a **Set Default** action; the current default is marked with a **Default**
badge. Setting a new default clears the badge from the old one — you always have exactly
one default.

## Auto-append to AI replies

When MailPrism uses AI to draft a reply for you, it knows about your signature. Instead
of inventing its own sign-off, the AI **leaves the ending open and your signature is
added automatically**. That keeps every AI-written reply ending in your real, consistent
sign-off rather than a generic *"Best regards"*.

This works hand-in-hand with the signature [template variable](./templates.md#template-variables)
— `{{SIGNATURE}}` in quick replies, `{signature}` in rule reply templates — which
drops your default signature in wherever you place it.

:::tip Keep AI replies sounding like you
Your signature handles the sign-off; your [writing profile](../ai/writing-profiles.md)
handles the tone and length of the reply itself. Together they keep AI-written email
recognizably yours.
:::

## Signatures when you compose by hand

When you write a message yourself in the [compose panel](../inbox/composing.md),
**no signature is added automatically** — neither your MailPrism signature nor your
Gmail send-as signature. To include one, insert a quick reply that contains
`{{SIGNATURE}}`, or type it yourself.

AI-written replies in compose have your **default** MailPrism signature added at the
end.

→ Related: **[Email templates](./templates.md)** ·
**[Composing & replying](../inbox/composing.md)**
