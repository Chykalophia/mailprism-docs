---
sidebar_position: 1
title: Email Rules
description: Master the rule builder to automate any email workflow
---

# Email Rules

Rules are the foundation of MailPrism's automation. This guide covers everything you need to know about creating powerful, flexible email rules.

## Rule Anatomy

Every rule consists of:

- **Name** — Identifies the rule in your list
- **Description** (optional) — Notes about what the rule does
- **Conditions** — When should this rule trigger?
- **Actions** — What should happen when it triggers?
- **Priority** — Order of execution when multiple rules match
- **Enabled/Disabled** — Toggle rules on and off

## Conditions

Conditions determine which emails trigger your rule. You can combine multiple conditions with AND/OR logic.

### Available Condition Fields

| Field | Description | Example |
|-------|-------------|---------|
| **From** | Sender email address | `newsletter@company.com` |
| **To** | Recipient address | `sales@yourcompany.com` |
| **Subject** | Email subject line | `Invoice #` |
| **Body** | Email content | `unsubscribe` |
| **Has Attachment** | Whether email has files | Yes/No |
| **Label** | Existing Gmail labels | `INBOX`, `STARRED` |
| **Date** | When email was received | Last 24 hours |

### Condition Operators

| Operator | Use Case |
|----------|----------|
| **Is** | Exact match |
| **Is Not** | Exclude exact match |
| **Contains** | Partial match anywhere |
| **Does Not Contain** | Exclude partial match |
| **Starts With** | Match beginning |
| **Ends With** | Match ending |
| **Matches Regex** | Advanced pattern matching |

### Combining Conditions

**AND Logic** — All conditions must match:
```
From contains "amazon" AND Subject contains "order"
```

**OR Logic** — Any condition can match:
```
From contains "newsletter" OR From contains "marketing"
```

**Mixed Logic** — Group conditions for complex rules:
```
(From contains "amazon" OR From contains "ebay") AND Subject contains "shipped"
```

## Actions

Actions define what happens when conditions match.

### Available Actions

| Action | Description |
|--------|-------------|
| **Archive** | Remove from inbox, keep in All Mail |
| **Delete** | Move to trash |
| **Mark as Read** | Remove unread status |
| **Mark as Unread** | Add unread status |
| **Star** | Add star marker |
| **Apply Label** | Add a Gmail label |
| **Remove Label** | Remove a Gmail label |
| **Forward** | Send to another address |
| **Reply** | Send automatic reply |
| **Move to** | Move to specific label/folder |

### Multiple Actions

You can add multiple actions to a single rule. They execute in order:

1. Apply label "Receipts"
2. Archive
3. Forward to `accounting@company.com`

### Action: Forward

Forward emails to another address automatically:

- **To:** The destination email address
- **Include Original:** Whether to include the full original email
- **Add Note:** Optional message to prepend

:::warning
Forwarded emails are sent from your Gmail account. Use responsibly.
:::

### Action: Reply

Send automatic responses:

- **Template:** Choose from your saved templates
- **Delay:** Optional wait time before sending
- **Only Once:** Prevent multiple replies to the same thread

## Priority and Execution

### Rule Priority

When multiple rules could match an email:

1. Rules execute in priority order (highest first)
2. All matching rules execute by default
3. Use "Stop processing" to prevent subsequent rules

### Stop Processing

Enable "Stop processing" on a rule to prevent lower-priority rules from running if this rule matches. Useful for:

- VIP rules that should override everything
- Catch-all rules that handle remaining emails

### Execution Frequency

How often MailPrism checks for new emails:

| Tier | Frequency |
|------|-----------|
| Free | Every 15 minutes |
| Starter | Every 10 minutes |
| Pro | Every 5 minutes |
| Business | Every 2 minutes |

## Advanced Features

### Regex Matching

For complex patterns, use Regular Expressions:

```regex
# Match invoice numbers like INV-12345
Subject matches regex: INV-\d{5}

# Match any @company.com subdomain
From matches regex: .*@.*\.company\.com
```

### Time-Based Conditions

Create rules that only run during specific times:

- **Business Hours:** Only 9 AM - 5 PM
- **Weekdays Only:** Skip weekends
- **Date Range:** Active for specific dates

### AI-Enhanced Conditions

On Pro tier and above, use AI analysis as conditions:

- **Urgency Level:** High, Medium, Low
- **Sentiment:** Positive, Neutral, Negative
- **Intent:** Question, Request, FYI, Complaint

[Learn more about AI Analysis →](/features/ai-analysis)

## Managing Rules

### Enable/Disable Rules

Toggle rules without deleting them:
1. Go to **Rules**
2. Click the toggle next to any rule
3. Disabled rules are greyed out

### Duplicate Rules

Copy existing rules as a starting point:
1. Click the **...** menu on any rule
2. Select **Duplicate**
3. Edit the copy as needed

### Export/Import Rules

Backup or share your rules:
1. Go to **Settings** → **Workspace**
2. Click **Export Rules** to download JSON
3. Use **Import Rules** to restore

## Best Practices

### Start Simple

Begin with basic rules, then add complexity:
1. One condition, one action
2. Test and verify
3. Add more conditions as needed

### Use Descriptive Names

Good names make management easier:
- "Archive newsletters from marketing lists"
- "Forward invoices to accounting team"
- "Star emails from key clients"

### Test Before Enabling

Use the **Test Rule** feature:
1. Create your rule (keep disabled)
2. Click **Test Rule**
3. See which recent emails would match
4. Enable once satisfied

### Review Activity Log

Regularly check what your rules are doing:
1. Go to **Activity Log**
2. Filter by rule name
3. Verify expected behavior

---

**Need help building a specific rule?** Check our [FAQ](/faq) for common examples.
