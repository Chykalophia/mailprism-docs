---
sidebar_position: 10
title: AI Suggestions
description: Let MailPrism spot patterns in your inbox and propose rules — then accept, dismiss, or mute each one.
---

# AI Suggestions

You don't have to think up every rule yourself. **AI Suggestions** scans your recent
inbox, finds patterns in how you handle mail, and proposes ready-to-use rules. You
stay in control — each suggestion is yours to **accept**, **dismiss**, or **mute**.

Open it from **Suggestions** in the sidebar.

## How it works

1. Click **Generate Suggestions**. MailPrism scans your recent inbox to look for
   patterns.
2. Suggestions appear as cards — usually within seconds.
3. For each one, choose **Accept**, **Dismiss**, or **Mute**.

Accepting a suggestion turns it into a real rule that runs on future email.

:::info You decide when to scan
Suggestions don't appear on their own — you trigger a scan with **Generate
Suggestions** whenever you want a fresh look at your inbox.
:::

## What MailPrism looks for

Suggestions are grouped into types you can filter with the tabs at the top.

| Tab | What it finds |
|-----|---------------|
| **Noise** | Newsletters and automated email you rarely open or engage with |
| **Patterns** | Senders where you *consistently* do the same thing (always archive, always star, and so on) |
| **Priority** | People you reply to or star often — candidates to mark important |
| **AI** | Subtler patterns the AI spots, like auto-labeling, forwarding, or cleanup opportunities |
| **All** | Every pending suggestion, across types |

## Reading a suggestion card

Each card gives you enough to decide at a glance:

- A **type badge** (Noise, Patterns, Priority, AI) so you know what kind it is.
- A **confidence** level — <span class="mp-pill mp-pill--green">high</span>
  <span class="mp-pill mp-pill--violet">medium</span>
  <span class="mp-pill mp-pill--amber">low</span> — for how sure MailPrism is.
- A **score** that ranks how strong the suggestion is.
- A short **title** and **description** of what the rule would do.
- **Evidence** chips — the stats behind it (for example, how many emails from a sender).
- A **Details** toggle that explains the AI's reasoning.

## Accept, dismiss, or mute

| Action | What happens |
|--------|--------------|
| **Accept** | Creates a rule from the suggestion's conditions and actions, and starts running it on future email |
| **Dismiss** | Removes this one suggestion — similar ones can still appear later |
| **Mute** | Stops this kind of suggestion from coming back |

:::caution Accepted rules run right away
Unlike a template from the **[Rule Library](./library.md)** (which is created
*disabled* so you can review it first), an **accepted suggestion's rule is enabled
immediately**. If you'd rather check it before it acts, open it in **Rules** and turn
it off until you've reviewed — or run a quick **[test](./testing.md)** first.
:::

### Accept several at once

When a tab has more than one pending suggestion, an **Accept All** button appears so
you can turn the whole batch into rules in one click. Use it only when you're
confident in the group — every accepted rule goes live right away.

## Choosing an account

If you've connected more than one Gmail account, a selector lets you scan **all
connected accounts** or just **one**. A suggestion you accept becomes a rule scoped to
the account it came from. See **[Connecting Gmail](../getting-started/connecting-gmail.md)**.

## Tips

- **Start with high-confidence Noise and Patterns** — these are the safest wins
  (auto-archiving newsletters, labeling routine senders).
- **Mute aggressively.** If a suggestion type isn't useful to you, mute it so the list
  stays focused on things you'll actually use.
- **Re-generate after a busy week.** New habits in your inbox produce new, more
  relevant suggestions.
- **Review before trusting send actions.** If an accepted rule sends or forwards mail,
  open it in **Rules** and confirm it does exactly what you expect.

→ Related: **[Rule Library](./library.md)** · **[Conditions](./conditions.md)** ·
**[Best practices](./best-practices.md)**
