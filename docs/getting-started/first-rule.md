---
sidebar_position: 3
title: Create Your First Rule
description: Step-by-step guide to creating your first email automation rule
---

# Create Your First Rule

Rules are the heart of MailPrism. They tell MailPrism what to do when certain emails arrive. Let's create your first rule together.

## Understanding Rules

Every rule has three parts:

1. **Name** — A descriptive name so you remember what the rule does
2. **Conditions** — The criteria that must match for the rule to trigger
3. **Actions** — What MailPrism should do when conditions are met

## Step-by-Step: Archive Newsletters

Let's create a practical rule that automatically archives newsletter emails.

### Step 1: Open the Rule Builder

1. From your dashboard, click **Rules** in the sidebar
2. Click **Create Rule** in the top right corner

### Step 2: Name Your Rule

Give your rule a clear, descriptive name:

- **Good:** "Archive Marketing Newsletters"
- **Bad:** "Rule 1"

A good name helps you remember what the rule does when you have many rules.

### Step 3: Set Your Conditions

Click **Add Condition** and configure:

- **Field:** From (email address)
- **Operator:** Contains
- **Value:** newsletter

This will match any email where the sender's address contains "newsletter".

:::tip Combine Conditions
You can add multiple conditions! Click **Add Condition** again to add more. Use **AND** to require all conditions match, or **OR** to match any condition.
:::

### Step 4: Choose Your Action

Click **Add Action** and select:

- **Action Type:** Archive

This will remove the email from your inbox but keep it accessible in All Mail.

### Step 5: Save and Enable

1. Make sure the **Enabled** toggle is on
2. Click **Save Rule**

Your rule is now active!

## Testing Your Rule

Want to make sure it works?

1. Send yourself a test email from an address containing "newsletter"
2. Wait for MailPrism to process it (check your tier's frequency)
3. Check your **Activity Log** to see the rule in action

## More Rule Ideas

Here are some popular first rules to try:

### Label Emails from VIPs

Keep important emails visible:
- **Condition:** From is `boss@company.com`
- **Action:** Apply label "VIP"

### Auto-Archive Social Notifications

Reduce inbox clutter:
- **Condition:** From contains `notifications@`
- **Action:** Archive

### Forward Receipts

Keep financial records organized:
- **Condition:** Subject contains "receipt" OR "invoice"
- **Action:** Forward to `receipts@yourcompany.com`

### Star Urgent Emails

Never miss urgent messages:
- **Condition:** Subject contains "URGENT"
- **Action:** Star email

## Rule Priority

When you have multiple rules, they run in priority order. Higher priority rules run first.

To change priority:
1. Go to **Rules**
2. Drag and drop rules to reorder them
3. Changes save automatically

:::info
If multiple rules match the same email, all matching rules will execute unless a rule has "Stop processing" enabled.
:::

## What's Next?

Now that you've created your first rule, explore more advanced features:

- [**Email Rules Deep Dive**](/features/email-rules) — Learn about all condition types and actions
- [**AI Analysis**](/features/ai-analysis) — Use AI to understand email intent and urgency
- [**Contacts Management**](/features/contacts) — Create allowlists and denylists for smarter rules

---

**Need inspiration?** Check the rule templates in the app for pre-built automation ideas.
