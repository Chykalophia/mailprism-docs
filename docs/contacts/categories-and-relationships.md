---
sidebar_position: 2
title: Categories & Relationships
description: How contact categories, status (allowlist / denylist / normal), and relationship type work — and how they drive cold-outreach detection and rules.
---

# Categories & Relationships

Every contact carries three pieces of information that shape how MailPrism treats their
email: a **category** (how you've grouped them), a **status** (whether you trust or
block them), and a **relationship type** (how well you actually know them). This page
explains all three and how they feed [rules](../rules/conditions.md#sender-relationship)
and [cold-outreach detection](../ai/classification.md).

## Contact categories

A **category** is a label you put on a contact to organize your list — for example,
*Client* or *Vendor*. Categories come in two kinds.

### System categories

MailPrism ships with a set of predefined categories everyone can use:

<span class="mp-pill mp-pill--violet">Family</span>
<span class="mp-pill mp-pill--violet">Friend</span>
<span class="mp-pill mp-pill--blue">Colleague</span>
<span class="mp-pill mp-pill--blue">Client</span>
<span class="mp-pill mp-pill--gray">Vendor</span>
<span class="mp-pill mp-pill--gray">Partner</span>
<span class="mp-pill mp-pill--gray">Acquaintance</span>
<span class="mp-pill mp-pill--amber">VIP</span>

### Custom categories

You can also create your own categories with two scopes:

| Scope | Who can see it |
|-------|----------------|
| **Personal** | Private to you |
| **Workspace** | Shared with everyone in your workspace |

Assign a category when you add or edit a contact, or filter the contacts list by
category. On Business-tier workspaces with [AI enabled](../ai/overview.md), the
**Detect** button can suggest a category automatically.

:::tip Don't confuse category with status
A **category** is for *your* organization (Client, Vendor, VIP). **Status** is what
changes how MailPrism *handles* the email (trust or block). They're independent — a VIP
client can also be on your allowlist.
:::

## Contact status

A contact's **status** is the lever that changes how MailPrism handles their email.
There are three values:

| Status | Label in app | What it does |
|--------|--------------|--------------|
| `allowlist` | <span class="mp-pill mp-pill--green">Trusted</span> | Trusted sender. **Never** flagged as a cold email. |
| `denylist` | <span class="mp-pill mp-pill--red">Blocked</span> | Blocked sender. Treated as unwanted. |
| `normal` | <span class="mp-pill mp-pill--gray">Normal</span> | Standard contact, no special treatment. |

New contacts are **Normal** by default. Set the status when you add or edit a contact,
or filter the list by status.

### Status on a whole domain

Because a contact can be a **domain** as well as a single address, you can trust or
block everyone at a company in one entry. When MailPrism checks an incoming sender
against domain-level contacts, **denylist wins over allowlist** if both somehow apply —
blocking is the safer default.

### Using status in rules

In [rule conditions](../rules/conditions.md#sender-relationship), status appears as
**Trust Status**:

<span class="mp-pill mp-pill--green">Trusted contact</span> (`allowlist`)
<span class="mp-pill mp-pill--red">Blocked sender</span> (`denylist`)
<span class="mp-pill mp-pill--gray">Not specified</span> (`normal`)

You can also match **Is Known Contact** (true / false) to act on anyone in — or not in —
your contacts.

## Relationship type

While **status** is something you set, **relationship type** is something MailPrism
**computes** from your interaction history with a contact. It answers "how well do I
actually know this person?"

| Relationship | Label in app | Meaning |
|--------------|--------------|---------|
| `unknown` | <span class="mp-pill mp-pill--gray">Unknown</span> | No interaction history yet |
| `cold` | <span class="mp-pill mp-pill--amber">Cold</span> | You've received from them but never emailed them |
| `warm` | <span class="mp-pill mp-pill--blue">Warm</span> | Some back-and-forth history |
| `established` | <span class="mp-pill mp-pill--green">Established</span> | A regular contact with a real history |

### How it's calculated

MailPrism recomputes the relationship every time it records an interaction, using your
sent and received counts:

- **Unknown** — no interactions recorded at all.
- **Cold** — you've **never sent** them an email, even if they've emailed you. This is
  the signal cold-outreach detection leans on.
- **Established** — you've sent at least one email **and** there are **6 or more total
  interactions** spanning **more than 30 days** of history.
- **Warm** — everything in between: you've emailed them and have at least one
  interaction, but haven't yet crossed the established threshold.

:::note Why "never sent = cold" matters
A stranger who lands one email in your inbox is, by definition, someone you've never
written to — so they read as **cold**. That's exactly the pattern unsolicited sales and
outreach follow, which is why relationship type is so useful for filtering.
:::

## How this feeds cold-outreach detection and rules

These three properties work together:

1. **Cold-outreach detection.** A `cold` relationship — a sender you've never emailed —
   is a strong hint the message is unsolicited. Combined with AI's
   [cold-outreach signal](../ai/classification.md), it helps MailPrism separate genuine
   first-contact from sales spam. An `allowlist` status overrides this: trusted senders
   are **never** flagged as cold.

2. **The auto-contact filter.** When an inbound email is excluded (cold outreach, spam,
   automated, and so on), MailPrism only removes the auto-created contact if it's still
   `cold` with no outbound email — so your real relationships stay safe. See
   [the auto-contact filter](./overview.md#the-auto-contact-filter).

3. **Rules.** In [conditions](../rules/conditions.md#sender-relationship) you can match
   on **Sender History** (the relationship), **Trust Status**, and **Is Known Contact**
   to build automations like *"if a cold sender pitches me, archive it"* or *"never
   touch email from a trusted contact."*

→ Back to: **[Contacts overview](./overview.md)** · More on
**[classification signals](../ai/classification.md)**
