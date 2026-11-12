---
title: Route Email Into ClickUp Chat
sidebar_label: ClickUp routing
description: Connect ClickUp, map senders and domains to ClickUp Chat channels, and set a Forward rule to route by sender.
glance:
  time: 5 minutes
  plan: Limited rollout
  where: [Settings, ClickUp Routing]
  app: /settings/clickup-routing
  appLabel: Open ClickUp Routing
---

# Route Email Into ClickUp Chat

A **Forward** rule can post an email into a **ClickUp Chat channel**, cleaned up
for chat. With **ClickUp Routing**, the channel is picked by who sent the email,
so each client's mail lands in that client's project chat.

<Intro>
<InShort>

Connect ClickUp, then in **Settings → ClickUp Routing** click **Add Mapping**
for each sender or domain. Set your Forward rule to **Route by sender**.

</InShort>
<BeforeYouStart>

- ClickUp is in limited rollout. If you don't see it, it isn't on for your
  account yet.
- A ClickUp workspace you can approve access for, with Chat channels.

</BeforeYouStart>
</Intro>

<Steps>
<Step app="/settings/integrations/clickup" shot="/img/screens/integrations/clickup.webp" shotAlt="The ClickUp integration page" hint="Connect ClickUp and approve access in ClickUp.">

## Connect ClickUp

Go to **Settings → Integrations → ClickUp**, click **Connect ClickUp** and
approve access in ClickUp. To add another workspace, click **Connect another
workspace**.

</Step>
<Step
  app="/settings/clickup-routing"
  shot="/img/screens/integrations/clickup-routing.webp"
  shotAlt="ClickUp Routing settings, with the Add Mapping button at the top right"
  spot={{x: 85.8, y: 5.8, w: 10.6, h: 5.4}}
  hint="Add one mapping per sender or domain.">

## Map senders to channels

Open **Settings → ClickUp Routing** and click **Add Mapping**. For **Match type**,
choose:

- **Specific sender**: one email address, such as `priya@lumenhealth.io`.
- **Whole domain**: everyone at a domain, such as `lumenhealth.io`.

Then pick the ClickUp channel. Repeat for each client or project.

</Step>
<Step app="/rules/new" hint="Choose Route by sender on the Forward action.">

## Set the rule to route by sender

In your rule, add the **Forward Email** action, choose your ClickUp destination,
and pick **Route by sender (use my project mapping)**. The other option, **Send
to a fixed channel**, sends every match to one channel.

</Step>
<Step
  shot="/img/screens/integrations/clickup-routing.webp"
  shotAlt="The How routing works note"
  spot={{x: 21.6, y: 64.8, w: 74.8, h: 11.4}}
  hint="Specific senders win over domains. Unmatched mail is never dropped.">

## Know what happens with no match

A **specific sender** mapping wins over a **whole domain** mapping. If nothing
matches, the rule falls back to its fixed channel, or skips the forward. The
email itself is never dropped from your inbox.

</Step>
</Steps>

<DoneWhen>

An email from a mapped sender appears in that sender's ClickUp channel.

</DoneWhen>

:::note Still limited
ClickUp is in early access, so you may see rough edges. If something doesn't
work, [contact support](../help/contact-support.md).
:::

## Related

- [Integrations overview](./overview.md#clickup)
- [Forward to another address](./forwarding.md)
- [Actions reference: Forward options](../rules/actions.md#forward-options)
