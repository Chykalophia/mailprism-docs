---
sidebar_position: 3
title: Create Your First Rule
description: Build a simple rule that labels and archives newsletters, from start to finish.
glance:
  time: 5 minutes
  plan: Every plan
  where: [Rules, Create rule, Rule builder]
  app: /rules/new
  appLabel: Open Create rule
---

# Create Your First Rule

A **rule** is a simple instruction: **when** an email matches your conditions,
**do** the actions you chose. This guide builds a classic one together:
*label and archive newsletters automatically.*

<Intro>
<InShort>

Open **Rules → Create rule**, switch to **Rule builder**, name the rule, add the
condition **From contains `newsletter`**, add the actions **Apply label** and
**Archive**, then save with the rule switched on.

</InShort>
<BeforeYouStart>

- A connected Gmail account. See **[Connect Gmail](./connecting-gmail.md)**.
- About five minutes.
- Optional: a Gmail label called `Newsletters`. You can also create it while
  adding the action.

</BeforeYouStart>
</Intro>

<Steps>
<Step
  app="/rules/new"
  shot="/img/screens/rules/builder.webp"
  shotAlt="Create New Rule page, with the Describe it and Rule builder switch at the top right"
  spot={{x: 88.6, y: 7.6, w: 8.9, h: 4.6}}
  hint="Choose Rule builder to build the rule by hand.">

## Open the rule builder

Go to **Rules → Create rule**. The page opens on the
**[AI drafter](../rules/building-with-ai.md)**, which is handy later. For this
guide, choose **Rule builder** at the top right, or **Build it manually instead**.

</Step>
<Step
  shot="/img/screens/rules/edit.webp"
  shotAlt="The rule builder form, with the Rule Name field highlighted"
  spot={{x: 20.4, y: 24.6, w: 37.6, h: 5.4}}
  hint="Type a short name you’ll recognise in a long list.">

## Name it

Give the rule a clear name like **Archive newsletters**. Good names make a long
rule list easy to scan later. A description is optional.

</Step>
<Step
  shot="/img/screens/rules/edit.webp"
  shotAlt="The Conditions card, with the Field, Operator and Value row highlighted"
  spot={{x: 22.6, y: 90.9, w: 71, h: 5.6}}
  hint="Pick From, then contains, then type newsletter.">

## Add a condition

Add one condition to start: **From** · *contains* · `newsletter`.

This matches mail from any address that contains the word *newsletter*. You can
add more conditions later and combine them with **ALL**, **ANY** or **NOT**.
Every field and operator is in the **[Conditions reference](../rules/conditions.md)**.

</Step>
<Step hint="Actions run in the order you list them.">

## Add actions

Add two actions. They run in order:

1. **Apply label** → `Newsletters`
2. **Archive**

Matching mail is now labelled and moved out of your inbox, but kept and
searchable in Gmail. Every action is in the **[Actions reference](../rules/actions.md)**.

</Step>
<Step
  shot="/img/screens/rules/edit.webp"
  shotAlt="The Enabled switch next to the rule name"
  spot={{x: 58.3, y: 23.8, w: 18.4, h: 6}}
  hint="Leave Enabled on, then save.">

## Save and switch it on

Save the rule and check that **Enabled** is on. From now on, MailPrism labels
and archives matching mail as it arrives. During **quiet hours** it waits until
the window ends. See **[How rules work](../rules/overview.md#how-often-rules-run)**.

</Step>
<Step
  app="/rules"
  shot="/img/screens/rules/detail.webp"
  shotAlt="A rule's page, showing total matches, match rate and recent activity"
  spot={{x: 19.3, y: 23.9, w: 78, h: 15}}
  hint="Matches and recent activity show what the rule did.">

## Watch it work

Open the rule from **Rules** to see how many emails it matched and which actions
ran. **[Rule logs](../analytics/rule-logs-and-undo.md)** keep the full history,
with Undo where an action can be reversed.

</Step>
</Steps>

<DoneWhen>

A new newsletter arrives, carries the **Newsletters** label, and is no longer in
your inbox. If nothing matched yet, wait for the next one or widen the condition.

</DoneWhen>

## Helpful next moves

- **Start small.** One condition, one or two actions. Add more once it behaves
  the way you want.
- **Use priority and "stop processing"** when several rules could touch the same
  email. See **[How rules work](../rules/overview.md)**.
- **Bring in AI** for things keywords can't catch, like "is this urgent?" or "is
  this a cold sales pitch?". See **[AI features](../ai/overview.md)**.
- **Start from a template.** The **[Rule Library](../rules/library.md)** has
  ready-made rules you can tweak.

:::note
Want patterns that hold up over time? Read **[Best practices](../rules/best-practices.md)**.
:::
