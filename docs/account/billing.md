---
sidebar_position: 4
title: Billing & Plans
description: Manage your subscription, view usage, update payment, find invoices, add-ons, and redeem lifetime codes.
---

# Billing & Plans

Everything money-related lives under **Settings → Billing**.

:::info Where to find current prices
Plans, prices, and what's included change over time, so this page never hardcodes
numbers. For the latest, see the **[pricing page](https://mailprism.ai/pricing)**
or the live plan comparison on the in-app Billing page.
:::

---

## Your current plan

The **Current Plan** card at the top shows:

- Your plan name and a status badge — **Active**, **Trial**, **Past Due**,
  **Canceled**, or **Free**.
- Your billing cycle (**Monthly** or **Annual**) and the next renewal date — or,
  if you've canceled, when access expires.
- A **Cancels at period end** badge if you've scheduled a cancellation.

The actions on this card depend on your plan:

- **Free** — an **Upgrade** button to move to a paid plan.
- **Paid** — **Manage Subscription** (opens the Stripe portal) and **Upgrade**.
- **Lifetime** — no billing controls; it simply reads *Lifetime access — no
  renewal needed*.

---

## Plans

MailPrism offers a free tier plus paid plans:

- **Free** — get started at no cost.
- **Starter**, **Pro**, **Business** — increasing limits and features.
- **Enterprise** — custom needs and support.
- **Lifetime** — one-time access, activated with a code (see [Redeem a lifetime
  code](#redeem-a-lifetime-code)).

The **plan comparison** on the Billing page highlights your current plan against
the others. (Lifetime and other unlimited accounts don't see the comparison —
there's nothing to upgrade to.)

To change plans, use **Upgrade** on the Current Plan card. Billing — including
switching between **monthly** and **annual** — is handled in the secure Stripe
portal.

---

## Usage

A set of usage cards shows how much you've used this period:

- **Rules Executed**
- **Emails Processed**
- **AI Credits**

Each card shows the percent of your plan's allowance used. Unlimited and Lifetime
accounts see **∞ unlimited** instead.

:::tip Want your AI spend in detail?
Operations, tokens, and cost breakdowns live in
**[Analytics](../analytics.md)**.
:::

---

## Manage your subscription (Stripe)

**Manage Subscription** opens the secure **Stripe customer portal**, where you
can:

- Update or replace your **payment method**.
- Change or cancel your plan.
- Download your full **invoice history**.

MailPrism never stores your card details — payment is handled entirely by Stripe.

---

## Payment method

The **Payment Method** card shows the card on file (brand and last four digits,
plus expiry when available). Use **Update** to change it in the Stripe portal.

If you're on Free or Lifetime, or have no card saved, this card shows an empty
state instead.

---

## Invoices & billing history

The **Billing History** card lists your past charges, each with a date, amount,
and a status badge (**Paid**, **Failed**, or pending). For each one you can
download a formal **Invoice** (with line items and tax) or a payment **Receipt**,
or **View** it on Stripe.

Paid-plan users also get a **View Full History in Stripe** link for the complete
record.

---

## Add-ons

### AI email cleanup

The **AI email cleanup** add-on runs an extra AI pass that tidies messy
forwarded threads — long reply chains, wrapped emails, multi-hop forwards —
before they reach your assistant. The card adapts to your situation:

- **Paid plan, not yet enabled** — an **Enable** button starts checkout.
- **Already enabled** — shows the renewal date and a **Cancel at period end**
  option.
- **You use your own Anthropic key (BYOK)** — you're already covered; cleanup
  runs against your key and no add-on is needed.
- **Free plan** — upgrade to a paid plan to unlock it.

:::info Add-on pricing
The add-on price is shown on the card itself and in the Stripe checkout, not
here. See **[BYOK & AI keys](../ai/byok.md)** if you'd rather bring your own AI
key.
:::

---

## Redeem a lifetime code

Have a lifetime code? On the Billing page, find the **Redeem Lifetime Code** card:

1. Enter your code in the field. Codes use **uppercase letters, numbers, and
   hyphens** (for example, `LTD-MAILPRISM-…`); the field uppercases your input
   automatically.
2. Click **Redeem**.

You'll see a confirmation once it's applied, and your account switches to
**Lifetime** access. The redemption card is hidden once you're already on
Lifetime.

:::note Code format
Lifetime codes are at least 10 characters and contain only letters, numbers, and
hyphens. If the code is rejected, double-check it for typos.
:::

---

## Common billing questions

- **Can I switch plans anytime?** Yes — use **Upgrade** on the Current Plan card,
  then manage the change in Stripe.
- **How do I update my card or get a receipt?** Open the Stripe portal via
  **Manage Subscription**; payment methods and invoices both live there.
- **Need help?** Billing questions go to support — there's a help link at the
  bottom of the Billing page. You can also check the **[FAQ](../help/faq.md)**.

---

## What's next

- **[Workspaces & Teams](./workspaces-and-teams.md)** — see your plan's usage and
  limits in context.
- **[Analytics](../analytics.md)** — detailed AI usage and cost.
- **[BYOK & AI keys](../ai/byok.md)** — bring your own AI provider key.
