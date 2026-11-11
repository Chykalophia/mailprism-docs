---
sidebar_position: 4
title: Rule Notification Emails
description: The email MailPrism sends when a rule with the Send Me a Notification Email action matches.
---

# Rule Notification Emails

Add the **Send Me a Notification Email** action to a rule and MailPrism emails you each time
that rule matches. It's the simplest way to hear about a specific kind of
email, such as anything from a key client, without watching your inbox.

<Screenshot
  src="/img/screens/emails/rule-notification.webp"
  alt="A rule notification email: Rule Triggered, the rule name, the matched email's subject, the actions taken, a View rule button, and a footer explaining why you got it"
  width={720}
/>

| Part | What it shows |
|------|---------------|
| **Subject** | *MailPrism: Rule "VIP clients to Slack" triggered* |
| **Matched email** | The subject line of the email that matched |
| **Actions taken** | Everything else the rule did, such as labels applied |
| **Button** | **View rule**: opens the rule that sent it |
| **Footer** | Why you got it, and how to stop it |

It goes to the email address of the rule's owner, from
**MailPrism &lt;noreply@mail.mailprism.ai&gt;**. Each match sends at most one
email, even if MailPrism retries the rule.

## Set it up

1. Open the rule in **Rules** and click **Edit**.
2. Under **Actions**, add **Send Me a Notification Email**.
3. Save.

To stop the emails, remove the action or turn the rule off. The footer of every
notification says so too. Unsubscribing from digest and alert emails doesn't affect
them.

:::tip Prefer chat?
If you'd rather get these in Slack, Teams or Google Chat, use a
[chat destination](./chat-and-webhooks.md) instead.
:::

## Related

- [Actions reference](../rules/actions.md#notify)
- [Alerts, digests & reports](./alerts-and-digests.md)
