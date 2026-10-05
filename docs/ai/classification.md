---
sidebar_position: 2
title: Classification Signals
description: Every signal MailPrism's AI produces for an email — category, urgency, sentiment, and the yes/no flags — with what each one means.
---

# Classification Signals

When [AI is turned on](./overview.md), MailPrism reads each email and produces a set of
**signals**. This page explains every signal, the values it can take, and what each
value means. All of these are available as rule
[conditions](../rules/conditions.md#ai-signals).

:::info Requires AI
These signals only exist when AI features are enabled. See
**[AI, Explained](./overview.md)** and **[AI privacy & consent](./privacy-and-consent.md)**.
:::

## Category

The category is MailPrism's best guess at *what kind* of email this is. These are the
built-in categories:

<span class="mp-pill mp-pill--red">urgent</span>
<span class="mp-pill mp-pill--violet">important</span>
<span class="mp-pill mp-pill--gray">personal</span>
<span class="mp-pill mp-pill--gray">work</span>
<span class="mp-pill mp-pill--gray">financial</span>
<span class="mp-pill mp-pill--gray">newsletter</span>
<span class="mp-pill mp-pill--amber">promotional</span>
<span class="mp-pill mp-pill--amber">cold_email</span>
<span class="mp-pill mp-pill--red">spam</span>
<span class="mp-pill mp-pill--blue">social</span>
<span class="mp-pill mp-pill--gray">notification</span>
<span class="mp-pill mp-pill--gray">transactional</span>
<span class="mp-pill mp-pill--gray">system</span>
<span class="mp-pill mp-pill--gray">other</span>

| Category | Meaning |
|----------|---------|
| **urgent** | Needs your attention right now |
| **important** | High-priority, but not time-critical |
| **personal** | From friends, family, or your personal life |
| **work** | Job- or project-related |
| **financial** | Invoices, billing, receipts, statements |
| **newsletter** | Subscriptions and recurring digests |
| **promotional** | Marketing, sales, and offers |
| **cold_email** | Unsolicited outreach you didn't ask for. The AI doesn't pick this as a category directly — it comes from the **cold outreach** detector, so **AI Category = Cold Email** matches whenever cold outreach is detected. |
| **spam** | Unwanted or junk mail |
| **social** | Notifications from social networks |
| **notification** | Automated alerts from apps and services |
| **transactional** | Order confirmations, shipping, account actions |
| **system** | System-generated mail (e.g. delivery reports) |
| **other** | Anything that doesn't fit the categories above |

:::tip You can add your own
Categories aren't fixed. On Pro and above you can create **custom categories** and even
edit the built-in ones. See **[Custom categories](./custom-categories.md)**.
:::

## Urgency

How time-sensitive the email is.

| Value | Meaning |
|-------|---------|
| <span class="mp-pill mp-pill--red">high</span> | Act soon |
| <span class="mp-pill mp-pill--amber">medium</span> | Worth attention, not pressing |
| <span class="mp-pill mp-pill--green">low</span> | No rush |

## Sentiment

The emotional tone the AI reads in the message.

| Value | Meaning |
|-------|---------|
| <span class="mp-pill mp-pill--green">positive</span> | Friendly, appreciative, upbeat |
| <span class="mp-pill mp-pill--gray">neutral</span> | Matter-of-fact |
| <span class="mp-pill mp-pill--red">negative</span> | Frustrated, unhappy, or critical |

Great for spotting an unhappy customer before it escalates.

## Yes / No signals

These are simple true/false flags. Each is usable as a rule condition with an
*is true* / *is false* operator.

| Signal | Means it's `true` when… |
|--------|--------------------------|
| **Is spam** | The email looks like junk or unwanted mail |
| **Is automated** | The email is machine-generated with no human sender (receipts, notifications, system alerts) |
| **Is cold outreach** | The email is an unsolicited sales pitch or cold outreach |
| **Needs response (detected)** | The email looks like it needs a reply from you |
| **Requires action (detected)** | The email needs an action *outside* email — sign in, approve, update payment, etc. |
| **Sender expects reply (detected)** | The sender appears to be waiting on a response from you |

:::note Cold outreach vs. needs-response
An email can't be both "cold outreach" and "needs a response" at the same time — by
design, flagging something as cold outreach keeps it out of your needs-action queue.
:::

The last three signals — **needs response**, **requires action**, and **expects
reply** — also feed [response tracking](../tracking/overview.md), which decides a
whole thread's state rather than judging a single message.

## Confidence

Every classification carries a **confidence** score from `0.0` to `1.0` — how sure the
AI is about its answer. You can use this to keep automations conservative: the global
**AI confidence threshold** (**Settings → Rule Defaults & Safety → AI Configuration**,
50–100%) sets how sure the AI must be before an AI condition matches. For thread state
there's also a condition you can use directly:

> *If AI: Thread State is `Needs Action` **and** AI: Thread State Confidence is greater
> than `0.8`, star it.*

Two related, optional values may also be present:

- **Alternative category** — the AI's runner-up guess, when it was torn between two.
- **Category confidence** — confidence specific to the category choice.

:::tip Combine AI with a plain condition
For anything destructive (archive, delete, forward), pair an AI signal with a concrete
condition like sender relationship, and require high confidence. See
**[Best practices](../rules/best-practices.md#combine-ai-with-plain-conditions)**.
:::

## Where these appear

| Signal | As a rule condition |
|--------|---------------------|
| Category | **AI Category** |
| Urgency | **AI Urgency** |
| Sentiment | **AI Sentiment** |
| Is spam | **AI Category** = Spam |
| Is automated | **AI: Is Automated Email** |
| Is cold outreach | **AI Category** = Cold Email |
| Needs response | **AI: Email Needs Response** |
| Requires action | **AI: Requires External Action** |
| Sender expects reply | **AI: Sender Expects Reply** |
| Thread state confidence | **AI: Thread State Confidence** |

See the full **[Conditions reference](../rules/conditions.md#ai-signals)**.

→ Next: **[Custom categories](./custom-categories.md)** · **[Smart rules](./smart-rules.md)**
