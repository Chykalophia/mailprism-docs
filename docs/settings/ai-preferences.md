---
sidebar_position: 3
title: AI Preferences
description: Configure AI providers, analysis settings, and BYOK
---

# AI Preferences

Configure how MailPrism uses artificial intelligence to analyze and process your emails. Customize AI behavior, choose providers, and optionally use your own API keys.

## AI Analysis Settings

### Enable/Disable AI

Toggle AI analysis for your account:

1. Go to **Settings** → **AI Preferences**
2. Toggle **Enable AI Analysis**
3. When enabled, emails are analyzed for intent, urgency, and sentiment

:::info
Disabling AI analysis means your rules can only use traditional conditions (sender, subject, keywords). AI-based conditions will not trigger.
:::

### Analysis Types

Choose which analyses to perform:

| Analysis | Description | Performance Impact |
|----------|-------------|-------------------|
| **Intent Detection** | What does the sender want? | Low |
| **Urgency Level** | How quickly needs response? | Low |
| **Sentiment** | Emotional tone of email | Low |
| **Summarization** | Brief overview of content | Medium |
| **Entity Extraction** | Names, dates, amounts | Medium |
| **Full Analysis** | All of the above | Higher |

Select which analyses you need. Fewer analyses = faster processing.

### Analysis Triggers

Control when AI analysis runs:

- **All Emails** — Analyze every incoming email
- **Rule-Matched Only** — Only analyze when a rule condition requires it
- **Manual Only** — Only analyze when explicitly requested

**Recommendation:** Use "Rule-Matched Only" for best performance and cost efficiency.

## AI Providers

### Available Providers

MailPrism supports multiple AI providers:

| Provider | Model | Best For |
|----------|-------|----------|
| **OpenAI** | GPT-4 | General purpose, fast |
| **Anthropic** | Claude | Nuanced understanding, safety |

### Choosing a Provider

1. Go to **Settings** → **AI Preferences**
2. Find **AI Provider**
3. Select your preference:
   - **Auto (Recommended)** — MailPrism chooses based on task
   - **OpenAI** — Always use OpenAI
   - **Anthropic** — Always use Anthropic

### Provider Fallback

If your primary provider is unavailable:

- MailPrism automatically falls back to the alternative
- Analysis continues without interruption
- You're notified of any fallback events

## BYOK (Bring Your Own Key)

### What is BYOK?

BYOK lets you use your own AI provider API keys instead of MailPrism's shared keys. Benefits:

- **Use your credits** — Apply existing API credits/agreements
- **Higher limits** — Your own rate limits apply
- **Cost control** — Pay providers directly
- **Enterprise agreements** — Use negotiated pricing

### BYOK Availability

| Tier | BYOK Available |
|------|----------------|
| Free | No |
| Starter | No |
| Pro | No |
| Business | Yes |

### Setting Up BYOK

1. Go to **Settings** → **API Keys**
2. Find **AI Provider Keys**
3. Click **Add Key**
4. Select provider (OpenAI or Anthropic)
5. Paste your API key
6. Click **Save & Verify**

Your key is encrypted and stored securely.

### Getting API Keys

**OpenAI:**
1. Go to [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Click **Create new secret key**
3. Name it (e.g., "MailPrism")
4. Copy the key immediately (shown once)

**Anthropic:**
1. Go to [console.anthropic.com/settings/keys](https://console.anthropic.com/settings/keys)
2. Click **Create Key**
3. Name it (e.g., "MailPrism")
4. Copy the key immediately

### BYOK Fallback

When using BYOK:

- **Primary:** Your API key is used first
- **Fallback:** If your key fails (quota exceeded, invalid), MailPrism's shared keys are used
- **Notification:** You're notified when fallback occurs

To disable fallback (use only your keys):
1. Go to **Settings** → **API Keys**
2. Disable **Allow Fallback to Platform Keys**

:::warning
Without fallback, AI analysis will fail if your key has issues.
:::

## AI Classifications

### Custom Categories

Define your own email categories:

1. Go to **Settings** → **AI Classifications**
2. Click **Add Category**
3. Define:
   - **Name** — Category label
   - **Description** — What belongs here
   - **Keywords** — Helpful context for AI
   - **Examples** — Sample emails (optional)

### Custom Urgency Definitions

Customize what "urgent" means for your business:

1. Go to **Settings** → **AI Classifications**
2. Find **Urgency Definitions**
3. Edit each level:
   - **Critical** — Examples and criteria
   - **High** — Examples and criteria
   - **Medium** — Examples and criteria
   - **Low** — Examples and criteria

Example customization:
```
Critical: Customer production outage, legal deadline today
High: Customer request, deadline this week
Medium: Internal request, no immediate deadline
Low: FYI, newsletters, general updates
```

### Custom Intent Types

Add business-specific intents:

1. Go to **Settings** → **AI Classifications**
2. Find **Intent Types**
3. Click **Add Intent**
4. Define the intent and examples

Example custom intents:
- "Demo Request" — Prospects wanting product demos
- "Support Ticket" — Customer support issues
- "Partnership Inquiry" — Business development

## AI Transparency

### View AI Decisions

For each analyzed email, see:

- **Confidence Score** — How certain the AI is (0-100%)
- **Key Factors** — What influenced the decision
- **Raw Output** — Full AI response (advanced)

Access in email detail view → **AI Analysis** tab.

### Audit Trail

Review all AI analyses:

1. Go to **Activity Log**
2. Filter by **AI Analysis**
3. See all emails analyzed, results, and confidence

### Dispute Resolution

If AI gets it wrong:

1. Open the email
2. Click **AI Analysis** tab
3. Click **Report Incorrect**
4. Select the correct classification
5. Submit feedback

Your feedback helps improve accuracy over time.

## Usage and Limits

### AI Usage Dashboard

Monitor your AI usage:

1. Go to **Settings** → **AI Preferences**
2. View **Usage This Month**:
   - Total analyses
   - By provider
   - By analysis type
   - Remaining quota

### Tier Limits

| Tier | AI Analyses/Month |
|------|-------------------|
| Free | 10 |
| Starter | 100 |
| Pro | 500 |
| Business | Unlimited* |

*Business BYOK usage is limited only by your API key quota.

### Exceeding Limits

When you reach your limit:

1. AI analysis stops for remaining emails
2. Rules with AI conditions don't trigger
3. Traditional conditions still work
4. You're notified to upgrade or wait for reset

Limits reset on your billing date.

## Performance Optimization

### Speed vs. Accuracy

Balance processing speed and analysis depth:

- **Fast Mode** — Basic analysis, faster processing
- **Balanced** — Standard analysis, good accuracy
- **Thorough** — Deep analysis, highest accuracy

### Batch Processing

For high-volume accounts:

- **Batch Size** — How many emails to analyze together
- **Queue Priority** — Order of processing
- **Retry Policy** — How to handle failed analyses

## Privacy Settings

### Data Handling

- **Minimal Data** — Send only necessary content to AI
- **Full Context** — Include thread history for better analysis
- **Exclude Attachments** — Never send attachment content

### Retention

AI analysis results are retained according to your tier's data retention policy. Original email content is not stored by AI providers.

### Opt-Out

To completely avoid AI processing:

1. Disable AI Analysis in settings
2. No email content is sent to AI providers
3. Only traditional rule conditions work

---

**Questions about AI settings?** Check our [FAQ](/faq) or contact support.
