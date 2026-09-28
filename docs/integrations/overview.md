---
sidebar_position: 1
title: Integrations overview
description: What MailPrism connects to today, what's on the way, and where to set each one up.
---

# Integrations overview

MailPrism connects to a few outside services to make your inbox smarter. This page
lists every integration, what it does, and whether it's available today.

:::tip Available vs. Coming soon
Only the integrations marked <span class="mp-pill mp-pill--green">Available</span>
can be used by everyone right now. <span class="mp-pill mp-pill--amber">Limited</span>
means part of it is in the app but it isn't fully self-serve yet. The ones marked
<span class="mp-pill mp-pill--gray">Coming soon</span> are not ready yet — there's
nothing to set up.
:::

## At a glance

| Integration | What it does | Status |
|-------------|--------------|--------|
| **Google Calendar** | Lets AI check your free/busy time and suggest meeting slots when you reply | <span class="mp-pill mp-pill--green">Available</span> |
| **OpenAI** | Use your own OpenAI key for AI features (Bring Your Own Key) | <span class="mp-pill mp-pill--green">Available</span> |
| **Anthropic** (Claude) | Use your own Anthropic key for AI features (Bring Your Own Key) | <span class="mp-pill mp-pill--green">Available</span> |
| **Slack** | Send notifications to Slack channels | <span class="mp-pill mp-pill--gray">Coming soon</span> |
| **Notion** | Save emails and data to Notion databases | <span class="mp-pill mp-pill--gray">Coming soon</span> |
| **Zapier** | Connect MailPrism to thousands of other apps | <span class="mp-pill mp-pill--gray">Coming soon</span> |
| **Webhooks** | Send email events to your own endpoints | <span class="mp-pill mp-pill--gray">Coming soon</span> |
| **ClickUp** | Forward emails into ClickUp Chat channels, routed by sender | <span class="mp-pill mp-pill--amber">Limited</span> |

## Available now

### Google Calendar

Connect Google Calendar so MailPrism's AI can see when you're free and suggest times
when you reply to a scheduling email. It reads **free/busy** information only — never
your event details — and the data is used on demand, not stored.

→ **[Set up Google Calendar](./calendar.md)**

### AI provider keys (OpenAI & Anthropic)

If you'd rather run AI features through your own provider account, you can connect an
**OpenAI** or **Anthropic** key. This is part of MailPrism's **Bring Your Own Key**
(BYOK) feature, so it's documented alongside the rest of AI setup.

→ **[Connect a provider key (BYOK)](../ai/byok.md)** · **[About AI provider keys](./ai-providers.md)**

## Limited

### ClickUp

A **Forward** rule can post an email into a **ClickUp Chat channel**, cleaned up for
chat. **Settings → ClickUp Routing** lets you pick the channel automatically by who
sent the email:

- **Add Mapping** — map a **specific sender** or a **whole domain** to a ClickUp
  channel.
- A specific-sender match wins over a domain match.
- If nothing matches, the rule falls back to its fixed channel (or skips the
  forward) — the email itself is never dropped.

:::caution Not fully self-serve yet
ClickUp Routing needs a connected ClickUp workspace, and there's no button to connect
one in **Settings → Integrations** yet. If the page says no workspaces are connected,
email **[hello@mailprism.ai](mailto:hello@mailprism.ai)** to get set up.
:::

## Coming soon

These integrations aren't available yet. Each one shows a **Coming Soon** notice in
the app, and there's nothing to configure until they ship.

- **Slack** — receive email and rule notifications in your team's channels.
- **Notion** — save emails and email data into Notion databases.
- **Zapier** — connect MailPrism to thousands of other apps and automate workflows.
- **Webhooks** — receive email and rule events at your own endpoints.

We'll announce each one as it becomes available — keep an eye on your email or check
the **Integrations** page in the app.

## Where to find integrations

- **Google Calendar** lives under **Settings → Calendar**.
- **ClickUp** routing lives under **Settings → ClickUp Routing**.
- **OpenAI** and **Anthropic** keys live under **Settings → Integrations**.

:::note Your keys stay private
Every API key and access token MailPrism stores is **encrypted at rest** and never
logged or exposed. You can disconnect any integration at any time.
:::
