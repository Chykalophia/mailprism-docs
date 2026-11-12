---
title: Forward Email to Another Address
sidebar_label: Forward to another address
description: Add and verify a forwarding address, set your limits, then build a rule that forwards matching email to it.
glance:
  time: 5 minutes, plus checking the other inbox for a code
  where: [Settings, Forwarding Rules]
  app: /settings/forwarding
  appLabel: Open Forwarding Rules
---

# Forward Email to Another Address

Send copies of certain emails somewhere else automatically: receipts to your
accountant, client mail to an assistant, alerts to a shared inbox. You add the
address once, prove you control it, then point a rule at it.

<Intro>
<InShort>

In **Settings → Forwarding Rules**, click **Add Address**, then enter the
6-digit code MailPrism emails to that address. Then add a **Forward Email**
action to a rule and pick the address.

</InShort>
<BeforeYouStart>

- Access to the other inbox, to read the verification code.
- Permission to share that mail. Forwarded emails include all original content.

</BeforeYouStart>
</Intro>

<Steps>
<Step
  app="/settings/forwarding"
  shot="/img/screens/integrations/forwarding.webp"
  shotAlt="Forwarding Rules settings, with the Add Address button at the top right"
  spot={{x: 85.8, y: 5.8, w: 10.6, h: 5.4}}
  hint="Add Address opens a short form.">

## Add the address

Open **Settings → Forwarding Rules** and click **Add Address**. Enter the
**Email Address**, and optionally a **Nickname** such as *Accountant* so it's
easy to pick later.

</Step>
<Step hint="The code expires after 60 minutes.">

## Verify it

MailPrism emails a **6-digit code** to the new address. Next to the address,
click **Enter code** and type it in. The code expires after 60 minutes; use
**Resend Verification** for a new one. After five wrong tries, request a new
code.

An address must be verified before rules can forward to it.

</Step>
<Step
  shot="/img/screens/integrations/forwarding.webp"
  shotAlt="Forwarding Settings: Max forwards per day and Max forwards per hour"
  spot={{x: 22.6, y: 73.4, w: 73.4, h: 11.4}}
  hint="Daily and hourly caps stop a rule from flooding the other inbox.">

## Check your limits

Under **Forwarding Settings**, click **Edit** to change:

- **Max forwards per day** (1 to 2,000) and **Max forwards per hour** (1 to 500).
  MailPrism also applies its own caps; the lower one wins.
- **Include original headers**: adds the original From, To, Cc, Date and Subject
  above the forwarded message.
- **Subject tag prefix**: an optional tag such as `[FWD]` at the start of the subject.

</Step>
<Step app="/rules/new" hint="Pick the verified address from the Forward Email dropdown.">

## Point a rule at it

Create or edit a rule, add the **Forward Email** action, and choose the address
from the dropdown. Only verified addresses appear there. New to rules? Start
with [Create your first rule](../getting-started/first-rule.md).

</Step>
</Steps>

<DoneWhen>

A matching email arrives in the other inbox, and it appears under
**Forwarding Activity** on the Forwarding Rules page, which also shows how
much of your limit is used.

</DoneWhen>

:::warning Forward responsibly
Forwarding sends the whole email from your Gmail account. It can't be undone from [Rule logs](../analytics/rule-logs-and-undo.md). Only forward
to people you trust and have permission to share with.
:::

## Related

- [Actions reference: Forward options](../rules/actions.md#forward-options)
- [Preferences: Forwarding addresses](../account/preferences.md#forwarding-addresses)
- [ClickUp routing](./clickup-routing.md): forward into ClickUp Chat instead.
