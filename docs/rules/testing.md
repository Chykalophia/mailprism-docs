---
sidebar_position: 5
title: Testing Rules
description: Try a rule against your recent email, see why a message didn't match, and run a rule on demand.
---

# Testing Rules

Before you trust a rule to run on its own, test it. MailPrism lets you check a rule
against real email, dig into *why* a message didn't match, and run a rule on demand —
all without waiting for the next email to arrive.

## Test against recent emails

The **Test Rule** card is on an existing rule's **Edit** page. It lets you run the rule
against your most recent messages without changing anything.

1. Save the rule first, then open it and choose **Edit**. (The new-rule screen doesn't
   have the Test Rule card.)
2. In the **Test Rule** card, choose **Test Against Last 10 Emails**.
3. MailPrism evaluates the rule against those messages and shows a summary.

You get a count of how many emails **Matched**, didn't match (**No Match**), and were
**Skipped**, followed by a row per email so you can see exactly which ones the rule
caught.

:::note Testing never changes your mailbox
A test only *evaluates* the rule — it never runs the actions. No labels are applied,
nothing is archived, forwarded, or deleted. Testing is always safe.
:::

### Rules that use AI conditions

If your rule includes AI conditions (category, urgency, sentiment, and similar),
MailPrism analyzes each email as part of the test. AI analysis takes a few seconds per
message, so AI-based tests run against **fewer emails** to stay fast. If a test runs
long, some emails are marked **Skipped** and you'll see a notice — test again with
fewer emails or simpler conditions.

## Test a single email

You don't have to test against a batch. From a rule's **[Analytics](../analytics.md)**
page, you can test one specific email against that one rule and get a detailed,
condition-by-condition breakdown.

This is the fastest way to answer the question every rule-builder eventually asks:

## "Why didn't this match?"

On a rule's Analytics page, open the **Not Matched** tab. It lists recent emails the
rule *was checked against but didn't act on*. For any of them, choose **Test Why**.

MailPrism re-evaluates that email against the rule and expands an inline breakdown
showing:

- Whether the rule **Would Match** or **Would Not Match** overall.
- The **logic** in use — **AND**, **OR**, or **NOT**.
- **Each condition** with a clear pass/fail mark, the field and operator, and the
  value it was compared against.

That makes it obvious where a rule falls short — for example, a **Subject contains
"invoice"** condition failing because the real subject said "Invoice #1042" and an
exact-match operator was used, or an AND rule failing because one of several
conditions didn't pass.

:::tip Read the failing condition, then fix it
A failed condition usually points straight at the fix: loosen an operator
(`equals` → `contains`), correct a typo in the value, or switch the group logic from
**AND** to **OR**. Then test again.
:::

## Run a rule now ("Execute")

Sometimes a rule is correct — you just want it to act on an email it already skipped.
On the **Not Matched** tab, each email has an **Execute** button that runs the rule
against that one message **for real**.

- If the email **matches**, the rule's actions run and MailPrism confirms how many
  actions were applied.
- If it still **doesn't match**, you'll get a note suggesting **Test Why** to see the
  details.

:::caution Execute is not a test — it runs the actions
Unlike testing, **Execute** actually applies the rule's actions to that email (labels,
archive, forward, and so on). Use **Test Why** first if you're unsure whether the rule
will match.
:::

## Which tool to use

| You want to… | Use |
|--------------|-----|
| Sanity-check a new rule against real mail | **Test Against Last 10 Emails** (rule editor) |
| Understand why one email was skipped | **Test Why** (Analytics → Not Matched) |
| Apply a correct rule to an email it missed | **Execute** (Analytics → Not Matched) |

→ Next: **[Rule Library](./library.md)** · See also **[Analytics & logs](../analytics.md)**
