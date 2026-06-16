---
sidebar_position: 9
title: Export Rules
description: Back up your rules to a JSON file from the Rules page.
---

# Export Rules

Your rules are portable. You can **export** them to a JSON file as a backup or to share
a setup.

## Export your rules

From the **Rules** page, open the **More** menu and choose **Export Rules**.

MailPrism downloads a JSON file named like `email-rules-2026-06-15.json` (today's date),
containing every rule on your account.

### What's in the file

The export is plain, readable JSON:

| Field | What it is |
|-------|------------|
| `version` | The export format version |
| `exportedAt` | When the file was created (timestamp) |
| `rulesCount` | How many rules are included |
| `rules` | The list of rules |

Each rule in the list keeps only the **portable** parts:

| Field | What it is |
|-------|------------|
| `name` | The rule's name |
| `description` | The rule's description |
| `enabled` | Whether the rule was on |
| `conditions` | The full condition logic — see **[Conditions](./conditions.md)** |
| `actions` | The full action list — see **[Actions](./actions.md)** |
| `stop_processing` | Whether the rule stops later rules from running |
| `priority` | The rule's priority order |

:::note No account-specific data is exported
IDs, your user account, connected Gmail accounts, and execution history are **not**
included. The file describes *what the rules do*, not *whose* they are — so it's safe
to share and safe to import elsewhere.
:::

## Importing rules

:::caution Not yet available in the app
There's no **import** button in MailPrism yet — the export above is the shipped path.
Restoring or moving rules from a JSON file isn't something you can do from the UI today.

If you need to recreate a setup on another account, rebuild the rules from your export
file as a reference, or use the **[Rule Library](./library.md)** templates as a starting
point.
:::

→ Next: **[Rule Library](./library.md)** · **[Best practices](./best-practices.md)**
