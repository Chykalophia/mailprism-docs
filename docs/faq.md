---
sidebar_position: 100
title: FAQ
description: Frequently asked questions about MailPrism
---

# Frequently Asked Questions

Find answers to common questions about MailPrism.

## Getting Started

### What is MailPrism?

MailPrism is an AI-powered email automation platform for Gmail. It helps you automatically organize, filter, forward, and respond to emails based on intelligent rules you create.

### Is MailPrism free to use?

Yes! MailPrism offers a free tier that includes:
- 1 Gmail account connection
- 5 automation rules
- 1,000 emails processed per month
- 10 AI analyses per month

[See all plans →](/pricing-comparison)

### How do I get started?

1. Sign up at [app.mailprism.ai](https://app.mailprism.ai)
2. Connect your Gmail account
3. Create your first rule
4. Watch MailPrism automate your inbox!

[Full quick start guide →](/getting-started/quick-start)

### Does MailPrism work with Google Workspace?

Yes! MailPrism works with both personal Gmail accounts and Google Workspace (formerly G Suite) accounts. Your Workspace administrator may need to approve MailPrism for your organization.

## Gmail & Permissions

### Why does MailPrism need access to my emails?

To apply your automation rules, MailPrism needs to:
- **Read emails** — To check if they match your rule conditions
- **Modify emails** — To apply actions like archiving, labeling, or forwarding
- **Send emails** — To send auto-replies if you create reply rules

[Full permissions explanation →](/getting-started/connecting-gmail#permissions-explained)

### Is my email data safe?

Absolutely. We take security seriously:
- All data is encrypted in transit and at rest
- OAuth tokens are encrypted with AES-256
- We never share your data with third parties
- You can disconnect and delete your data anytime

### Can I connect multiple Gmail accounts?

Yes, on Starter tier and above. The Free tier is limited to one Gmail account. Each account can have its own set of rules.

### How do I disconnect my Gmail?

1. Go to **Settings** → **Integrations**
2. Find your Gmail account
3. Click **Disconnect**

You can also revoke access directly from [Google Account settings](https://myaccount.google.com/permissions).

## Rules & Automation

### How often does MailPrism check my inbox?

It depends on your tier:
- **Free:** Every 15 minutes
- **Starter:** Every 10 minutes
- **Pro:** Every 5 minutes
- **Business:** Every 2 minutes

### Can I test a rule before enabling it?

Yes! Use the **Test Rule** feature:
1. Create your rule (keep it disabled)
2. Click **Test Rule**
3. See which recent emails would have matched
4. Enable once you're satisfied

### What happens if multiple rules match the same email?

By default, all matching rules execute in priority order. Use the "Stop processing" option on a rule to prevent subsequent rules from running.

### Can I undo an automated action?

Yes, for most actions. Go to your **Activity Log**, find the action, and click **Undo**. Note that some actions (like forwarding) cannot be undone after they occur.

### Why didn't my rule trigger?

Common reasons:
1. **Rule is disabled** — Check the toggle
2. **Conditions don't match** — Review your conditions
3. **Email already processed** — MailPrism only processes new emails
4. **Polling delay** — Wait for next inbox check
5. **Quota exceeded** — Check your usage limits

## AI Features

### What can AI analyze in my emails?

MailPrism's AI can detect:
- **Intent** — What the sender wants (question, request, FYI, etc.)
- **Urgency** — How quickly a response is needed
- **Sentiment** — Emotional tone (positive, neutral, negative)
- **Category** — Type of email (work, personal, marketing, etc.)

### Is AI analysis accurate?

AI analysis is highly accurate for most emails but not perfect. Complex emails, sarcasm, or highly technical content may occasionally be misclassified. We recommend combining AI conditions with traditional conditions for the most reliable rules.

### Can I use my own AI API keys?

Yes! Business tier users can use BYOK (Bring Your Own Key) to connect their own OpenAI or Anthropic API keys. This gives you:
- Use of your existing API credits
- Your own rate limits
- Direct cost control

[BYOK setup guide →](/settings/ai-preferences#byok-bring-your-own-key)

### Does AI analysis cost extra?

No, AI analysis is included in your tier's monthly quota:
- **Free:** 10 analyses/month
- **Starter:** 100 analyses/month
- **Pro:** 500 analyses/month
- **Business:** Unlimited

### What happens to my email content during AI analysis?

Email content is sent to our AI provider (OpenAI or Anthropic) for analysis. The content is processed in real-time and not stored by the AI provider. Analysis results are stored in your MailPrism account.

## Billing & Plans

### How do I upgrade my plan?

1. Go to **Settings** → **Billing**
2. Click **Change Plan**
3. Select your new tier
4. Complete payment

Upgrades take effect immediately.

### Can I downgrade my plan?

Yes. Go to **Settings** → **Billing** → **Change Plan**. Your downgrade takes effect at the end of your current billing period. You may need to reduce usage to fit within the new tier's limits.

### Do you offer refunds?

We offer a 14-day money-back guarantee for first-time subscribers. Contact support within 14 days of your first payment for a full refund.

### Is there an annual discount?

Yes! Pay annually and save 20% compared to monthly billing. Annual plans are available for all paid tiers.

### What payment methods do you accept?

We accept all major credit cards (Visa, Mastercard, American Express) via Stripe. Business tier customers can also pay by invoice.

## Technical Questions

### Does MailPrism work offline?

No, MailPrism requires an internet connection. It's a cloud-based service that connects to Gmail's servers to process your emails.

### Is there a mobile app?

MailPrism is currently web-based. The web app works on mobile browsers, but we recommend using it on desktop for the best experience. A Gmail Add-on for in-Gmail actions is planned.

### Can I use MailPrism with email clients other than Gmail web?

MailPrism works at the Gmail server level, so your automation runs regardless of which client you use to read email. Whether you use Gmail web, Apple Mail, Outlook, or any other client, your rules still apply.

### Is there an API?

Yes, Business tier includes full API access. You can:
- Create and manage rules programmatically
- Query email processing history
- Integrate with your own systems

API documentation is available in the app.

### What about email attachments?

MailPrism can detect whether emails have attachments and use that as a rule condition. Attachment content is not analyzed by AI unless you explicitly enable it.

## Privacy & Security

### Who can see my email data?

Only you. MailPrism staff cannot access your email content. We use encryption and access controls to protect your data.

### Is MailPrism GDPR compliant?

Yes. We comply with GDPR and other privacy regulations. You can:
- Download all your data
- Delete your account and data
- Control what data is processed

### How long is my data retained?

Data retention depends on your tier:
- **Free:** 7 days
- **Starter:** 30 days
- **Pro:** 60 days
- **Business:** 90 days (customizable)

### Can I use MailPrism for my business?

Absolutely! Many businesses use MailPrism. For regulated industries or enterprise needs, our Business tier includes:
- Custom data retention
- Audit logging
- SSO/SAML (coming soon)
- Custom DPA available

## Troubleshooting

### My rules aren't working

1. Check that the rule is enabled
2. Verify conditions match the emails you expect
3. Confirm you haven't exceeded your email quota
4. Check the Activity Log for errors
5. Try the Test Rule feature to debug

### I'm not receiving MailPrism emails

1. Check your spam folder
2. Add `noreply@mailprism.ai` to your contacts
3. Verify your notification settings
4. Check if quiet hours are enabled

### Gmail won't connect

1. Ensure popup blockers aren't interfering
2. Try in an incognito/private window
3. Clear cookies and try again
4. For Workspace accounts, check with your admin

[Full troubleshooting guide →](/getting-started/connecting-gmail#troubleshooting)

## Contact & Support

### How do I contact support?

Use the help button in the app to send us a message. We typically respond within 24 hours on business days.

### Is there a community forum?

Not currently, but we're considering it! Follow our [roadmap](https://app.mailprism.ai/settings/roadmap) for updates.

### Can I request a feature?

Yes! Visit the [roadmap](https://app.mailprism.ai/settings/roadmap) in the app to suggest and vote on features.

---

**Still have questions?** Contact us through the app or check our [documentation](/).
