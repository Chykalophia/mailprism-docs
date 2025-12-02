---
sidebar_position: 5
title: Email Templates
description: Save time with reusable templates and AI-assisted writing
---

# Email Templates

Email templates help you respond faster with consistent, professional messages. Create reusable templates for common responses and let AI help personalize them.

## What Are Templates?

Templates are pre-written email responses you can use with one click:

- **Save time** — No more typing the same responses repeatedly
- **Stay consistent** — Ensure professional, on-brand messaging
- **Reduce errors** — Pre-approved content means fewer mistakes
- **Personalize easily** — Variables automatically fill in details

## Creating Templates

### Basic Template

1. Go to **Settings** → **Email Templates**
2. Click **Create Template**
3. Fill in:
   - **Name** — How you'll identify this template
   - **Subject** (optional) — Pre-fill the subject line
   - **Body** — The email content
4. Click **Save**

### Template Example

**Name:** Meeting Follow-Up

**Subject:** Great meeting today!

**Body:**
```
Hi {{first_name}},

Thank you for taking the time to meet today. I enjoyed our discussion about {{topic}}.

As discussed, I'll {{next_step}} and follow up by {{date}}.

Please let me know if you have any questions in the meantime.

Best regards,
{{my_name}}
```

## Template Variables

Variables automatically personalize your templates:

### Available Variables

| Variable | Description | Example Output |
|----------|-------------|----------------|
| `{{first_name}}` | Recipient's first name | John |
| `{{last_name}}` | Recipient's last name | Smith |
| `{{full_name}}` | Recipient's full name | John Smith |
| `{{email}}` | Recipient's email | john@example.com |
| `{{company}}` | Recipient's company | Acme Corp |
| `{{my_name}}` | Your name | Jane Doe |
| `{{my_email}}` | Your email | jane@company.com |
| `{{today}}` | Current date | March 15, 2024 |
| `{{tomorrow}}` | Tomorrow's date | March 16, 2024 |

### Custom Variables

Create your own variables in **Settings** → **Contact Information**:

- `{{booking_link}}` — Your calendar link
- `{{phone}}` — Your phone number
- `{{signature}}` — Your email signature
- Any custom key-value pairs you define

### Fallback Values

Handle missing data with fallback values:

```
Hi {{first_name|there}},
```

If first_name is unknown, the email will say "Hi there,"

## Template Categories

Organize templates into categories:

### Default Categories

- **General** — Everyday responses
- **Sales** — Prospect and client communication
- **Support** — Customer service responses
- **Follow-up** — Meeting and conversation follow-ups
- **Out of Office** — Absence notifications

### Custom Categories

Create your own:

1. Go to **Settings** → **Email Templates**
2. Click **Manage Categories**
3. Add, rename, or remove categories

## Using Templates

### In Gmail (via Add-on)

1. Compose or reply to an email
2. Click the MailPrism icon
3. Select a template
4. Review and personalize
5. Send

### In Automation Rules

Use templates in auto-reply actions:

```
Condition: Subject contains "pricing"
Action: Reply with template "Pricing Information"
```

### Quick Insert

Use keyboard shortcuts for faster access:

- **Cmd/Ctrl + Shift + T** — Open template picker
- Type template name to filter
- Press Enter to insert

## AI-Assisted Templates

### AI Writing Assistance

Let AI help draft templates:

1. Click **Create with AI**
2. Describe what you want:
   - "Write a polite follow-up after a sales call"
   - "Create a thank you email for referrals"
3. Review and edit the AI draft
4. Save as template

### AI Personalization

When using templates, AI can enhance them:

- **Adjust tone** — More formal or casual
- **Add context** — Reference previous conversation
- **Localize** — Adapt for recipient's timezone/culture

Enable in **Settings** → **AI Preferences** → **Template Enhancement**

## Template Best Practices

### Keep It Flexible

Write templates that work in multiple situations:

**Too Specific:**
```
Thank you for your order of Product X on Monday.
```

**More Flexible:**
```
Thank you for your recent order. We appreciate your business!
```

### Use Clear Variable Names

When recipients might see variable names (if data is missing):

```
Hi {{first_name|Valued Customer}},
```

### Include a Personal Touch

Leave room for customization:

```
[Add personal note here]

Thank you for your continued partnership.
```

### Test Before Using

1. Create the template
2. Use **Preview** to see how it renders
3. Send a test email to yourself
4. Verify all variables work correctly

## Template Sharing

### Team Templates (Business Tier)

Share templates across your team:

1. Create or edit a template
2. Enable **Share with team**
3. Choose visibility:
   - **Team-wide** — Everyone can use
   - **Specific users** — Select who can access

### Import/Export

Move templates between accounts:

1. Go to **Settings** → **Email Templates**
2. Click **Export** to download JSON
3. Use **Import** on another account

## Template Analytics

Track how templates perform:

### Usage Stats

- Times used this month
- Most popular templates
- Usage by team member (Business)

### Performance Metrics

When paired with Response Tracking:

- Open rates by template
- Response rates by template
- Average response time

## Tier Availability

| Feature | Free | Starter | Pro | Business |
|---------|------|---------|-----|----------|
| Number of templates | 5 | 25 | 100 | Unlimited |
| Custom variables | 3 | 10 | 25 | Unlimited |
| Categories | 1 | 5 | 10 | Unlimited |
| AI writing assistance | ❌ | ❌ | ✅ | ✅ |
| Team sharing | ❌ | ❌ | ❌ | ✅ |

---

**Need template ideas?** Check our [FAQ](/faq) for common examples.
