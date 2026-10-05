---
sidebar_position: 9
title: Import & Export Rules
description: Back up your rules to a JSON file and import them again from the Rules page.
---

# Import & Export Rules

Your rules are portable. You can **export** them to a JSON file as a backup or to share
a setup, and **import** a file to bring rules back in.

Both live in the **More** menu on the **Rules** page.

## Export your rules

From the **Rules** page, open the **More** menu and choose **Export Rules**.

MailPrism downloads a JSON file named like `email-rules-2026-06-15.json` (today's date),
containing your rules. **System rules** (such as the ones MailPrism creates for
auto-responders) are left out.

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
| `category` | The rule's category (for example, general) |
| `message_direction` | Which mail the rule runs on — received, sent, or both (**Run this rule on** in the builder) |
| `applies_to` | Which Gmail accounts the rule covers — see **[Multi-account rules](./multi-account.md)** |
| `gmail_account_ids` | The specific accounts, when the rule isn't for all accounts |

:::note No server-owned data is exported
Rule IDs, your user account, timestamps, and execution history are **not** included.
The only account-specific part is the optional account scope (`gmail_account_ids`) —
see how import handles it below.
:::

## Import rules

From the **Rules** page, open **More → Import Rules** and pick a JSON file (an export
from MailPrism is the easiest starting point).

| Limit / behavior | Details |
|------------------|---------|
| **File size** | Up to **1 MB** |
| **Rules per file** | Up to **100** |
| **Validation** | Each rule is checked the same way the rule builder checks it. A rule that fails is skipped with a reason; the rest still import. |
| **On or off** | Imported rules always arrive **disabled**, so you can review them first. |
| **Priority** | Imported rules are placed **after** your existing rules, keeping the order they had in the file. |
| **Account scope** | Kept only if **every** account ID in the rule is one of your connected accounts. Otherwise the rule is reset to **all accounts**, and the result tells you. |

:::caution Hand-edited files
A rule that includes server fields (such as `id`, `user_id`, or timestamps) or any
key MailPrism doesn't recognize is **rejected**, with a message naming the problem.
Remove those keys and import again.
:::

:::tip After importing
Open each imported rule, check it with **[Testing rules](./testing.md)**, then turn it
on.
:::

→ Next: **[Rule Library](./library.md)** · **[Best practices](./best-practices.md)**
