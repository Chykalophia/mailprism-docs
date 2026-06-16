---
sidebar_position: 2
title: Conditions Reference
description: Every field a rule can match on, the operators each one allows, and how to combine them.
---

# Conditions Reference

A **condition** decides whether a rule should run on an email. This is the
complete list of fields you can match on, exactly as they appear in the rule
builder, grouped the same way the builder groups them. Each field shows the
operators it allows and — where the field is a fixed choice — the exact values
you can pick.

Combine conditions with **AND / OR / NOT** and nested groups (see [Combining
conditions](#combining-conditions) at the end).

:::note Reading the operator column
Most fields offer the **"does not"** variant of each operator too (Does Not Equal,
Does Not Contain, and so on). Those are listed where they apply.
:::

---

## Basic fields

The everyday email properties — who sent it, what it says, and your relationship
with the sender.

### Sender and recipient

| Field | Matches on | Operators |
|-------|------------|-----------|
| **From (Email)** | Sender's email address only, e.g. `notifications@github.com` | equals · does not equal · contains · does not contain · matches regex · does not match regex |
| **From (Name)** | Sender's display name only, e.g. `Peter Krzyzek` | equals · does not equal · contains · does not contain · starts with · does not start with · matches regex · does not match regex |
| **From (Full)** | The full sender header — name *and* email together | contains · does not contain · starts with · does not start with · matches regex · does not match regex |
| **To (Email)** | A recipient's email address only | equals · does not equal · contains · does not contain · matches regex · does not match regex |
| **To (Name)** | A recipient's display name only | equals · does not equal · contains · does not contain · starts with · does not start with · matches regex · does not match regex |
| **To (Full)** | The full recipient header — name *and* email together | contains · does not contain · starts with · does not start with · matches regex · does not match regex |

:::tip From (Email) vs From (Full)
Use **From (Email)** to match a precise address and ignore the display name. Use
**From (Full)** when the part you care about is in the display name, such as
`"vercel[bot]"`.
:::

### Content

| Field | Matches on | Operators |
|-------|------------|-----------|
| **Subject** | The subject line | equals · does not equal · contains · does not contain · starts with · does not start with · matches regex · does not match regex |
| **Body** | The email's text content | contains · does not contain · matches regex · does not match regex |
| **Has Attachment** | Whether the email includes file attachments | is true · is false |

### Status and labels

| Field | Matches on | Operators |
|-------|------------|-----------|
| **Is Unread** | Whether the email is unread | is true · is false |
| **Has Gmail Label** | Whether the email has a specific Gmail label (you pick the label) | equals · does not equal |

### Sender relationship

| Field | Matches on | Operators |
|-------|------------|-----------|
| **Sender History** | How well you know this sender (see values below) | equals · does not equal |
| **Is Known Contact** | Whether the sender exists in your contacts | is true · is false |
| **Trust Status** | The sender's trust level in your contacts (see values below) | equals · does not equal |

**Sender History** values:

<span class="mp-pill mp-pill--amber">First-time sender</span> (`cold`)
<span class="mp-pill mp-pill--blue">Have exchanged before</span> (`warm`)
<span class="mp-pill mp-pill--green">Regular contact</span> (`established`)
<span class="mp-pill mp-pill--gray">Unknown</span> (`unknown`)

**Trust Status** values:

<span class="mp-pill mp-pill--green">Trusted contact</span> (`allowlist`)
<span class="mp-pill mp-pill--red">Blocked sender</span> (`denylist`)
<span class="mp-pill mp-pill--gray">Not specified</span> (`normal`)

→ More on relationships: **[Contacts](../contacts/categories-and-relationships.md)**

---

## Content (sender volume)

How much a particular sender emails you — useful for spotting noisy senders.

| Field | Matches on | Operators |
|-------|------------|-----------|
| **Sender Daily Volume** | Emails received from this sender per day | equals · does not equal · greater than · less than |
| **Sender Weekly Volume** | Emails received from this sender per week | equals · does not equal · greater than · less than |
| **Sender Monthly Volume** | Emails received from this sender per month | equals · does not equal · greater than · less than |
| **Total Email History** | Total emails ever exchanged with this sender | equals · does not equal · greater than · less than |

---

## Time-based fields

Match on *when* an email arrived — perfect for "only during work hours" or
"weekends only" automations.

| Field | Matches on | Operators |
|-------|------------|-----------|
| **Email Age (Hours)** | How many hours ago the email arrived | equals · does not equal · greater than · less than |
| **Email Age (Days)** | How many days ago the email arrived | equals · does not equal · greater than · less than |
| **Received Time of Day** | The clock time it was received (`HH:MM`) | before · after · between |
| **Received Day** | Which day(s) it arrived (see values below) | is |

**Received Day** values:

<span class="mp-pill mp-pill--gray">Weekdays (Mon–Fri)</span>
<span class="mp-pill mp-pill--gray">Weekend (Sat–Sun)</span>
<span class="mp-pill mp-pill--gray">Monday</span> … <span class="mp-pill mp-pill--gray">Sunday</span> (any single day)

---

## AI analysis {#ai-signals}

These fields read MailPrism's AI analysis of the email and expose the result as a
condition. They require AI features to be turned on, and some spend AI credits
each time they run.

| Field | Matches on | Operators |
|-------|------------|-----------|
| **AI Category** | The AI-detected type of email (see values below) | equals · does not equal |
| **AI Urgency** | The AI-detected urgency level (see values below) | equals · does not equal |
| **AI Sentiment** | The AI-detected emotional tone (see values below) | equals · does not equal |
| **AI: Response Priority** | The AI's suggested response urgency (see values below) | equals · does not equal |
| **AI: Email Needs Response** | The AI thinks the email needs a reply from you *(uses AI credits)* | is true · is false |
| **AI: Requires External Action** | The AI detects an action outside email — sign in, approve, update payment, etc. *(uses AI credits)* | is true · is false |
| **AI: Sender Expects Reply** | The AI thinks the sender is expecting a reply *(uses AI credits)* | is true · is false |
| **AI: Is Automated Email** | The email is machine-generated with no human sender (receipts, alerts) | is true · is false |
| **AI: Thread State** | The AI's single tracking state for the conversation *(uses AI credits; needs AI thread tracking)* | equals · does not equal |
| **AI: Thread State Confidence** | How confident the AI is in that state, from `0.0` to `1.0` | greater than · less than · equals |

**AI Category** values:

<span class="mp-pill mp-pill--violet">Urgent</span>
<span class="mp-pill mp-pill--violet">Important</span>
<span class="mp-pill mp-pill--gray">Personal</span>
<span class="mp-pill mp-pill--gray">Work</span>
<span class="mp-pill mp-pill--gray">Financial/Billing</span>
<span class="mp-pill mp-pill--gray">Newsletter</span>
<span class="mp-pill mp-pill--gray">Promotional</span>
<span class="mp-pill mp-pill--amber">Cold Email</span>
<span class="mp-pill mp-pill--red">Spam</span>
<span class="mp-pill mp-pill--gray">Social</span>
<span class="mp-pill mp-pill--gray">Notification</span>
<span class="mp-pill mp-pill--gray">Transactional</span>
<span class="mp-pill mp-pill--gray">System</span>
<span class="mp-pill mp-pill--gray">Other</span>

**AI Urgency** values:
<span class="mp-pill mp-pill--red">High</span>
<span class="mp-pill mp-pill--amber">Medium</span>
<span class="mp-pill mp-pill--green">Low</span>

**AI Sentiment** values:
<span class="mp-pill mp-pill--green">Positive</span>
<span class="mp-pill mp-pill--gray">Neutral</span>
<span class="mp-pill mp-pill--red">Negative</span>

**AI: Response Priority** values:
<span class="mp-pill mp-pill--red">Urgent</span>
<span class="mp-pill mp-pill--amber">High</span>
<span class="mp-pill mp-pill--gray">Normal</span>
<span class="mp-pill mp-pill--green">Low</span>

**AI: Thread State** values:
<span class="mp-pill mp-pill--red">Needs Action</span>
<span class="mp-pill mp-pill--amber">Awaiting Reply</span>
<span class="mp-pill mp-pill--blue">Pending (FYI/Monitor)</span>
<span class="mp-pill mp-pill--green">Resolved (Complete)</span>

→ Learn what each signal means: **[AI features](../ai/overview.md)**

---

## Response tracking

Match on the state of the whole **conversation**, not just one message — and on
label changes that happen to it. See **[Response tracking](../tracking/overview.md)**.

### Conversation state

| Field | Matches on | Operators |
|-------|------------|-----------|
| **Response Status** | The current tracking state of the thread (see values below) | equals · does not equal |
| **Last Sender** | Who sent the most recent message (see values below) | equals · does not equal |
| **Time Awaiting Reply** | Hours you've been waiting for a reply | equals · does not equal · greater than · less than |
| **Total Messages in Thread** | Total messages in the thread, all participants | equals · does not equal · greater than · less than |
| **Your Messages in Thread** | How many messages you have sent in the thread | equals · does not equal · greater than · less than |
| **Time Since Last Message** | Hours since the last message in the thread | equals · does not equal · greater than · less than |

**Response Status** values:
<span class="mp-pill mp-pill--red">Needs Response</span>
<span class="mp-pill mp-pill--amber">Awaiting Reply</span>
<span class="mp-pill mp-pill--green">Resolved</span>
<span class="mp-pill mp-pill--blue">Snoozed</span>
<span class="mp-pill mp-pill--gray">Not Tracked</span>

**Last Sender** values:
<span class="mp-pill mp-pill--blue">User (Me)</span>
<span class="mp-pill mp-pill--gray">External Party</span>

### Recipient position

| Field | Matches on | Operators |
|-------|------------|-----------|
| **I'm in TO Recipients** | You are in the **To** field — a strong signal that action is needed | is true · is false |
| **I'm in CC Recipients** | You are in the **Cc** field — usually just FYI | is true · is false |

### Label changes

These trigger on the moment a label is **added** or **removed**, which makes them
great for chaining automations off another rule's labelling.

| Field | Matches on | Operators |
|-------|------------|-----------|
| **Gmail Label Added** | A specific Gmail label was just added (you pick the label) | equals · does not equal |
| **Gmail Label Removed** | A specific Gmail label was just removed (you pick the label) | equals · does not equal |
| **System Label Added** | A configured system label was added (see values below) | equals |
| **System Label Removed** | A configured system label was removed (see values below) | equals |
| **Tracking Label Added** | A specific tracking label was just assigned (you pick it) | equals · does not equal |
| **Tracking Label Removed** | A specific tracking label was just removed (you pick it) | equals · does not equal |
| **Has Tracking Label** | The email currently has a specific tracking label (you pick it) | equals · does not equal |
| **Tracking Label Mode** | The tracking label's mode (see values below) | equals · does not equal |

**System Label** values (add and remove):
<span class="mp-pill mp-pill--red">Needs Response / Action Required</span>
<span class="mp-pill mp-pill--amber">Awaiting Reply</span>
<span class="mp-pill mp-pill--green">Resolved</span>

**Tracking Label Mode** values:
<span class="mp-pill mp-pill--green">Active</span>
<span class="mp-pill mp-pill--gray">Passive</span>

### Thread updates

| Field | Matches on | Operators |
|-------|------------|-----------|
| **Thread Has New Message** | The thread just received a new message | is true · is false |
| **New Message Direction** | Whether the new message was inbound or outbound (see values below) | equals · does not equal |

**New Message Direction** values:
<span class="mp-pill mp-pill--blue">Inbound (from others)</span>
<span class="mp-pill mp-pill--gray">Outbound (sent by me)</span>

---

## Operators by type

The operators a field offers depend on what kind of value it holds. The tables
above already list each field's exact set — this is the quick summary.

| Value type | Operators |
|------------|-----------|
| **Text** | equals · contains · starts with · ends with · matches regex — plus the **"does not"** version of each |
| **Yes / No** | is true · is false |
| **Number / Duration** | equals · does not equal · greater than · less than |
| **Time of day** | before · after · between |
| **Day** | is |

:::tip Regex for power users
`matches regex` unlocks precise patterns — for example, match invoice numbers
with `INV-\d{5}`, or any subdomain of a company with `.*@.*\.company\.com`.
Matching is case-insensitive, and extremely long or unsafe patterns are rejected
for performance.
:::

---

## Combining conditions

A rule's conditions are joined by one of three modes, and you can nest them into
groups for precise logic.

- **AND** ("all") — every condition must match.
- **OR** ("any") — any one condition is enough.
- **NOT** — the rule matches only when none of the conditions are true.
- **Groups** — nest conditions to express exactly what you mean, for example:

  > *(Sender History is `cold` **AND** AI Category is `Cold Email`)*
  > **OR**
  > *(Subject contains "unsubscribe")*

Groups can be nested several levels deep, and each level shows a different color
in the builder so the structure stays readable.

## What's next

- **[How rules work](./overview.md)** — priority, stop-processing, and timing.
- **[Actions reference](./actions.md)** — every action and its options.
- **[Rule library](./library.md)** — start from a ready-made template.
