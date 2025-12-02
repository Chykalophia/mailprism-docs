---
sidebar_position: 2
title: AI Analysis
description: Let AI understand your emails for smarter automation
---

# AI Analysis

MailPrism uses artificial intelligence to understand the meaning behind your emails—not just keywords. This enables smarter automation that adapts to context.

## What AI Analysis Does

When AI analysis is enabled, MailPrism examines each email to determine:

- **Intent** — What is the sender trying to accomplish?
- **Urgency** — How quickly does this need attention?
- **Sentiment** — What is the emotional tone?
- **Category** — What type of email is this?
- **Summary** — A brief overview of the content

## How It Works

### Processing Flow

1. New email arrives in your inbox
2. MailPrism retrieves the email content
3. AI analyzes the email (typically 1-2 seconds)
4. Analysis results are attached to the email
5. Your rules can use these results as conditions

### AI Providers

MailPrism uses industry-leading AI models:

- **OpenAI GPT-4** — Advanced language understanding
- **Anthropic Claude** — Nuanced analysis and safety

You can choose your preferred provider in Settings, or let MailPrism select automatically.

## Analysis Types

### Intent Detection

Understand what the sender wants:

| Intent | Description | Example |
|--------|-------------|---------|
| **Question** | Asking for information | "What time is the meeting?" |
| **Request** | Asking for action | "Please send the report" |
| **FYI** | Informational, no action needed | "Just wanted to let you know..." |
| **Complaint** | Expressing dissatisfaction | "I'm unhappy with..." |
| **Thank You** | Expressing gratitude | "Thanks for your help!" |
| **Follow-up** | Continuing a conversation | "Following up on..." |
| **Introduction** | First contact | "I wanted to introduce myself..." |

### Urgency Levels

Prioritize what needs attention:

| Level | Description | Typical Response Time |
|-------|-------------|----------------------|
| **Critical** | Immediate action required | Minutes |
| **High** | Same-day response needed | Hours |
| **Medium** | Response within 1-2 days | Days |
| **Low** | No time pressure | Week+ |

### Sentiment Analysis

Understand emotional context:

| Sentiment | Description |
|-----------|-------------|
| **Positive** | Happy, satisfied, grateful |
| **Neutral** | Factual, businesslike |
| **Negative** | Frustrated, disappointed |
| **Mixed** | Contains both positive and negative |

### Auto-Categorization

Emails are automatically categorized:

- **Work** — Professional correspondence
- **Personal** — Friends and family
- **Transactional** — Receipts, confirmations
- **Marketing** — Newsletters, promotions
- **Social** — Social media notifications
- **Updates** — Service updates, alerts

## Using AI in Rules

### AI-Based Conditions

Create rules that trigger on AI analysis:

**Example: Prioritize Urgent Emails**
```
Condition: Urgency is "High" or "Critical"
Action: Star email, Apply label "Urgent"
```

**Example: Auto-Reply to Questions**
```
Condition: Intent is "Question"
Action: Reply with template "I'll get back to you shortly"
```

**Example: Flag Complaints**
```
Condition: Sentiment is "Negative" AND Intent is "Complaint"
Action: Apply label "Needs Attention", Forward to support@
```

### Combining with Traditional Conditions

Mix AI and traditional conditions:

```
Condition: From contains "@important-client.com"
     AND: Urgency is "High"
Action: Star, Send notification
```

## AI Transparency

### Understanding Decisions

For every AI analysis, you can see:

- **Confidence Score** — How certain the AI is
- **Key Phrases** — What influenced the decision
- **Reasoning** — Brief explanation of the analysis

Access this in the email detail view or Activity Log.

### Accuracy and Limitations

AI analysis is highly accurate but not perfect:

- **Strengths:** Understanding context, nuance, and implied meaning
- **Limitations:** May misinterpret sarcasm, cultural references, or highly technical content

:::tip
Use AI conditions alongside traditional conditions for the most reliable rules.
:::

## Configuration

### Enable/Disable AI Analysis

1. Go to **Settings** → **AI Preferences**
2. Toggle **Enable AI Analysis**
3. Choose which types of analysis to perform

### Choose AI Provider

1. Go to **Settings** → **AI Preferences**
2. Select your preferred provider
3. Or choose "Auto" for best performance

### BYOK (Bring Your Own Key)

Business tier users can use their own API keys:

1. Go to **Settings** → **API Keys**
2. Add your OpenAI or Anthropic API key
3. Your key is encrypted and stored securely

Benefits of BYOK:
- Use your existing API credits
- Higher rate limits
- Full control over your AI usage

[Learn more about AI Preferences →](/settings/ai-preferences)

## Pricing and Limits

AI analysis usage depends on your tier:

| Tier | AI Analyses/Month |
|------|-------------------|
| Free | 10 |
| Starter | 100 |
| Pro | 500 |
| Business | Unlimited |

Each email analyzed counts as one analysis. View your usage in **Settings** → **Billing**.

## Privacy and Security

### Data Handling

- Email content is sent to AI providers for analysis
- Analysis happens in real-time; content is not stored by AI providers
- Results are stored in your MailPrism account

### Opting Out

If you prefer not to use AI:
1. Disable AI Analysis in Settings
2. Your rules will only use traditional conditions
3. No email content is sent to AI providers

---

**Questions about AI?** Check our [FAQ](/faq) or [AI Preferences guide](/settings/ai-preferences).
