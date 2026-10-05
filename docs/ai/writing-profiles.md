---
sidebar_position: 6
title: Writing Profiles
description: Shape the tone, formality, and length of every reply MailPrism's AI drafts for you.
---

# Writing Profiles

A **writing profile** tells MailPrism's AI *how* to sound when it drafts a message for
you — the tone, the formality, how long the reply runs, and any house rules you want it
to follow. Set one up once, and every AI-generated draft comes out in your voice.

Find them in **Settings → Writing Profiles**.

:::info Works with AI writing help
Profiles shape the drafts you get from **Ask AI** and **AI templates** in the compose
panel. See **[Composing & replying](../inbox/composing.md#ai-writing-help)** and
**[AI, Explained](./overview.md)**.
:::

## What a profile controls

Each profile is a small set of style choices:

| Setting | What it does |
|---------|--------------|
| **Name** | A label so you can tell profiles apart (e.g. *Customer Support*). Required. |
| **Description** | A short note on when to use it. Required. |
| **Tone** | The overall voice — see the table below. |
| **Length preference** | <span class="mp-pill mp-pill--blue">Concise</span> <span class="mp-pill mp-pill--gray">Moderate</span> <span class="mp-pill mp-pill--violet">Detailed</span> |
| **Formality** | A 1–5 slider from **Casual** (1) to **Formal** (5). |
| **Custom instructions** | Optional free-text rules — e.g. *"Always use numbered lists for action items, avoid jargon."* |

### Tones to choose from

| Tone | Reads like |
|------|------------|
| **Professional** | Polished and businesslike — the default. |
| **Friendly** | Warm and approachable. |
| **Formal** | Reserved and proper. |
| **Casual** | Relaxed and conversational. |
| **Concise** | Short and to the point. |
| **Detailed** | Thorough, with full context. |
| **Empathetic** | Understanding and supportive. |
| **Assertive** | Direct and confident. |

:::tip Preview before you commit
Click **Preview** on any profile to read a sample reply written in that tone, so you
can hear how it sounds before you set it as your default.
:::

## The default profile

One profile is your **default** — the style MailPrism uses for AI-generated content
unless something else applies. Pick it from the **Default Style** dropdown at the top of
the page, or use **Set Default** on any profile in the list.

A profile marked as the default shows a <span class="mp-pill mp-pill--violet">Default</span>
badge. Profiles you've customized show a <span class="mp-pill mp-pill--gray">Custom</span>
badge.

## Creating and managing profiles

1. Go to **Settings → Writing Profiles**.
2. Click **Create Profile**.
3. Give it a **name** and **description**, pick a **tone**, **length**, and
   **formality**, and add any **custom instructions**.
4. Click **Create Profile** to save.

From the profile list you can **Preview**, **Set Default**, **Edit**, or **Delete** any
profile. Editing opens the same form with the current values filled in.

## Learn from your sent mail {#learn-from-your-sent-mail}

Tone and instructions describe how you *want* to sound. **Learn from your sent mail**
lets MailPrism read how you *actually* write, so AI drafts sound more like you.

The card sits on **Settings → Writing Profiles** and works on your **default profile**.

| Button | What it does |
|--------|--------------|
| **Analyse my writing** | Reads your recent sent mail and learns your patterns — greetings, sign-offs, tone, formality, and typical length. It doesn't send any email to anyone — but, like all AI analysis, the content of those sent emails is sent to our AI provider to be analyzed. |
| **Analyse new emails** | Runs again, skipping emails it has already analyzed. |
| **Re-analyse recent mail** | Reads your 50 most recent sent emails again, even ones it has seen. |

Analysis uses AI, so it needs AI turned on, and it uses AI credits for each email it hasn't
seen before.

:::info What gets stored
To learn from your sent mail, MailPrism **stores the sent emails it analyzes** for that
profile, along with the patterns it learned. They stay until you press **Forget** (under
**Forget what was learned**).
:::

### Forget what was learned

Press **Forget**, then confirm with **Forget it all**.

| Forget **deletes** | Forget **keeps** |
|--------------------|------------------|
| The stored copies of your sent emails analyzed for this profile | The profile itself |
| The greetings, sign-offs, and other patterns learned from them | The tone, length, formality, and custom instructions you set by hand |
| The auto-detected tone, formality, and length | Everything your *other* profiles have learned |

After you forget, AI drafts go back to using the tone you picked. You can analyse again
at any time.

### Forget the mailbox-wide analysis

Separately, MailPrism may have analysed a **sample of your sent mail** (not tied to any
one profile) to **suggest** writing profiles. When stored results exist, the same card
shows **Forget mailbox analysis**.

- It deletes only that mailbox-wide analysis and the suggestions it produced.
- Your writing profiles **keep** what they've learned — use each profile's own
  **Forget** for that.
- If an analysis is still running, nothing is deleted; try again once it finishes.

## A starting set worth keeping

There are no fixed presets — you build the profiles that fit how *you* write. A common,
low-effort setup:

- **Professional** (your default) — for most replies.
- **Friendly** — for teammates and people you know well.
- **Concise** — for quick acknowledgements and confirmations.

:::tip Let custom instructions do the heavy lifting
Tone and formality set the overall feel; **custom instructions** capture the specifics —
a sign-off you always use, words to avoid, or a format you prefer. That's where a profile
really starts to sound like you.
:::

→ Next: **[Preferences & tuning](./preferences-tuning.md)**
