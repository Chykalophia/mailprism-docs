---
title: Work Through Your Replies
sidebar_label: Replies page and analytics
description: Use the Replies page to clear the conversations that need you, and read Response Analytics to see how quickly you reply.
glance:
  time: 3 minutes
  where: [Replies]
  app: /mail/replies
  appLabel: Open Replies
---

# Work Through Your Replies

The **Replies page** lists the conversations MailPrism is
[tracking](../tracking/overview.md) for you: the ones waiting on you, and the
ones where you're waiting on someone else. This guide shows how to clear it,
then how to read **Response Analytics**.

<Intro>
<InShort>

Open **Replies**, keep the list on **Needs Action**, and work top to bottom:
read why each one needs you, then reply, nudge, archive or change its state.
**More → View Analytics** shows your response times.

</InShort>
<BeforeYouStart>

- A connected Gmail account with [reply tracking](../tracking/overview.md) on.
- Some tracked conversations. New accounts fill up as mail arrives.

</BeforeYouStart>
</Intro>

<Steps>
<Step
  app="/mail/replies"
  shot="/img/screens/tracking/replies.webp"
  shotDark="/img/screens/tracking/replies-dark.webp"
  shotAlt="The Replies page, with the state filter set to Needs Action"
  spot={{x: 17.4, y: 6.2, w: 27.6, h: 4.6}}
  hint="Needs Action is the default list. Switch it to see other states.">

## Open Replies and pick a list

Open the **Replies page** from a reply card on the dashboard, or press **G** then
**R**. The filter at the top picks which list you see, each with a live count:

<span class="mp-pill mp-pill--gray">All</span>
<span class="mp-pill mp-pill--red">Needs Action</span>
<span class="mp-pill mp-pill--amber">Awaiting Reply</span>
<span class="mp-pill mp-pill--blue">Pending</span>
<span class="mp-pill mp-pill--green">Resolved</span>
<span class="mp-pill mp-pill--violet">Untracked</span>

Start with **Needs Action**. What each state means is in
[Response tracking](../tracking/overview.md).

</Step>
<Step
  shot="/img/screens/tracking/replies.webp"
  shotDark="/img/screens/tracking/replies-dark.webp"
  shotAlt="A row in the Replies list, with its one-line reason under the subject"
  spot={{x: 16.6, y: 17.6, w: 29.4, h: 12.6}}
  hint="Each row carries a one-line reason it needs you.">

## Open the top conversation

Click a row to open it on the right. Under each subject, a short line says why
it's in this list, so you can pick the most urgent one at a glance. Use the
search box to find a sender or subject.

</Step>
<Step
  shot="/img/screens/tracking/replies.webp"
  shotDark="/img/screens/tracking/replies-dark.webp"
  shotAlt="The Why this needs your action note under the open email"
  spot={{x: 47, y: 79.2, w: 52, h: 14.2}}
  hint="The reason, in plain words. Wrong? Use Wrong label? above the email.">

## Check why it needs you

Under the email, **Why this needs your action** explains the call MailPrism
made. If it's wrong, click **Wrong label?** above the email and choose the label
it should have had. MailPrism uses that to make better calls next time.

</Step>
<Step
  shot="/img/screens/tracking/replies.webp"
  shotDark="/img/screens/tracking/replies-dark.webp"
  shotAlt="The action bar: Reply All, Forward, Tracked, Nudge, Archive and More"
  spot={{x: 47, y: 20.2, w: 52.4, h: 4.8}}
  hint="Reply, nudge, archive, or change its state from the Tracked menu.">

## Act on it

Use the action bar above the email:

- **Reply** or **Reply All**. Once you've replied, the conversation can move on by itself.
- **Nudge** sets a reminder to follow up. See [Nudges and reminders](../tracking/nudges-and-reminders.md).
- **Tracked** changes its state, for example to **Resolved** when nothing more is needed.
- **Archive** clears it from your inbox.

</Step>
<Step
  app="/mail/replies/analytics"
  shot="/img/screens/tracking/replies-analytics.webp"
  shotAlt="Response Analytics: totals, Activity Timeline, Status Breakdown and response times"
  spot={{x: 20.4, y: 10.8, w: 76, h: 20.2}}
  hint="Totals for the period you pick: 7, 30 or 90 days.">

## See how you're doing

From the Replies page, open **More (⋮) → View Analytics**. **Response Analytics**
shows, for the last 7, 30 or 90 days:

- **Total Tracked**, **Response Rate**, **Avg Response Time** and **Overdue**.
- **Activity Timeline**: tracked emails and responses per day.
- **Status Breakdown**: how many conversations are in each state now.
- **Top Senders Requiring Response**: who is waiting on you, and for how long.
- **Response Time Distribution**: how quickly you usually reply, from *Under 1 hour*
  to *Over 3 days*.

</Step>
</Steps>

<DoneWhen>

**Needs Action** shows zero, or only conversations you've chosen to leave for later.

</DoneWhen>

## The Untracked list

**Untracked** isn't a state. It lists emails MailPrism chose **not** to track,
so nothing disappears silently. For each one you can **Track & trust sender**
(track it, and always track that sender from now on) or **Dismiss** it.

## Related

- [Response tracking](../tracking/overview.md): states, and how mail enters tracking.
- [Tracking modes](../tracking/modes.md): how automatic tracking is.
- [Inbox overview](./overview.md): the Replies view inside the inbox.
