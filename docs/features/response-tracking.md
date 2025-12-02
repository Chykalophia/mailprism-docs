---
sidebar_position: 3
title: Response Tracking
description: Know when your emails are opened and track response rates
---

# Response Tracking

Response tracking helps you understand how recipients interact with your emails. Know when emails are opened, track response rates, and get insights into your communication effectiveness.

## What Response Tracking Does

When enabled, MailPrism tracks:

- **Email Opens** — When and how many times your email was opened
- **Response Status** — Whether you received a reply
- **Response Time** — How long it took to get a reply
- **Thread Activity** — Ongoing conversation tracking

## How It Works

### Open Tracking

When you send an email with tracking enabled:

1. MailPrism adds an invisible tracking pixel to your email
2. When the recipient opens the email, the pixel loads
3. MailPrism records the open with timestamp
4. You see the status update in your dashboard

:::info
Open tracking requires the recipient's email client to load images. Some clients block images by default, which may affect accuracy.
:::

### Response Tracking

MailPrism monitors your inbox for replies:

1. You send a tracked email
2. MailPrism watches for incoming emails in the same thread
3. When a reply arrives, the status updates to "Replied"
4. Response time is calculated automatically

## Enabling Response Tracking

### Global Settings

Enable tracking for all outgoing emails:

1. Go to **Settings** → **Response Tracking**
2. Toggle **Enable Response Tracking**
3. Choose default settings for new emails

### Per-Email Settings

Override global settings for individual emails:

1. Compose your email in Gmail
2. Look for the MailPrism tracking toggle
3. Enable or disable for this specific email

### Rule-Based Tracking

Create rules to automatically track certain emails:

```
Condition: To contains "@client.com"
Action: Enable response tracking
```

## Viewing Tracking Data

### Dashboard Overview

Your dashboard shows:

- **Tracked Emails Sent** — Total emails with tracking
- **Open Rate** — Percentage opened
- **Response Rate** — Percentage that received replies
- **Avg Response Time** — Typical time to reply

### Email Detail View

Click any tracked email to see:

- **Status** — Not opened / Opened / Replied
- **Open Count** — How many times opened
- **First Opened** — Timestamp of first open
- **Last Opened** — Most recent open
- **Response Received** — When they replied

### Activity Timeline

See a chronological view:

```
Mar 15, 10:30 AM — Email sent to john@example.com
Mar 15, 2:45 PM  — Email opened (first time)
Mar 15, 2:47 PM  — Email opened (second time)
Mar 16, 9:15 AM  — Reply received
```

## Status Indicators

### Email States

| Status | Icon | Meaning |
|--------|------|---------|
| **Sent** | ✉️ | Email delivered, not yet opened |
| **Opened** | 👁️ | Recipient opened the email |
| **Replied** | ↩️ | You received a response |
| **No Response** | ⏰ | Opened but no reply after X days |

### Visual Indicators

In your email list:

- **Gray dot** — Sent, not opened
- **Blue dot** — Opened, awaiting reply
- **Green dot** — Replied
- **Orange dot** — Needs follow-up

## Follow-Up Reminders

Get notified when emails need attention:

### Automatic Reminders

Configure reminders in Settings:

1. Go to **Settings** → **Response Tracking**
2. Enable **Follow-up Reminders**
3. Set reminder timing (e.g., "3 days after open, no reply")

### Custom Reminder Rules

Create rules for specific scenarios:

```
Condition: Email opened > 2 days ago
     AND: No reply received
     AND: To contains "@prospect.com"
Action: Send notification, Add to follow-up list
```

## Analytics and Reports

### Weekly Summary

Receive a weekly email with:

- Emails sent with tracking
- Open and response rates
- Top responders
- Emails needing follow-up

### Export Data

Export your tracking data:

1. Go to **Settings** → **Response Tracking**
2. Click **Export Tracking Data**
3. Choose date range and format (CSV/JSON)

## Privacy Considerations

### For You (Sender)

- Tracking data is stored securely in your account
- Only you can see your tracking information
- Data is retained based on your tier (7-90 days)

### For Recipients

- Tracking pixels are invisible and lightweight
- No personal data is collected from recipients
- Recipients can block tracking by disabling images

### Ethical Use

We encourage transparent communication:

- Consider disclosing tracking in business contexts
- Use tracking data to improve communication, not to manipulate
- Respect recipient preferences and privacy

## Tier Availability

| Feature | Free | Starter | Pro | Business |
|---------|------|---------|-----|----------|
| Open tracking | ❌ | ✅ | ✅ | ✅ |
| Response tracking | ❌ | ✅ | ✅ | ✅ |
| Follow-up reminders | ❌ | ❌ | ✅ | ✅ |
| Analytics dashboard | ❌ | Basic | Full | Full |
| Data retention | — | 7 days | 30 days | 90 days |

## Troubleshooting

### Opens Not Registering

If opens aren't being tracked:

1. **Image blocking** — Recipient's email client may block images
2. **Preview pane** — Some clients don't trigger opens in preview
3. **Text-only mode** — HTML emails required for tracking

### Delayed Updates

Tracking data may be slightly delayed:

- Open events update within minutes
- Response detection runs with email polling frequency
- Dashboard stats refresh every hour

---

**Questions about tracking?** Check our [FAQ](/faq).
