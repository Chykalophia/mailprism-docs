---
sidebar_position: 4
title: Glossary
description: Plain-language definitions of the terms you'll meet across MailPrism.
---

# Glossary

A quick reference for the words MailPrism uses. Each term links to the page that
covers it in full.

## Rules & automation

**Rule** — An automation: *when* an email matches your **conditions**, MailPrism runs
your **actions**. See **[How rules work](../rules/overview.md)**.

**Condition** — A test an email must pass for a rule to apply (e.g. *From contains
"newsletter"*). See **[Conditions reference](../rules/conditions.md)**.

**Action** — Something a rule does when it matches (label, archive, reply, …). See
**[Actions reference](../rules/actions.md)**.

**Priority** — The order rules run in. **Lower number runs first** (`0` is highest).
See **[How rules work](../rules/overview.md#the-order-rules-run-in)**.

**Stop processing** — A rule option that prevents lower-priority rules from running on
an email once this rule matches.

**Core rule** — A system default rule (for example, the ones that power response
tracking). You can turn it off but not delete it.

**Template** — A pre-written rule (in the **[Rule Library](../rules/library.md)**) or a
reusable reply (see **[Templates](../productivity/templates.md)**).

**Suggestion** — A rule MailPrism proposes from your email patterns. See
**[Suggestions](../rules/suggestions.md)**.

## AI

**AI signals** — What MailPrism's AI reads from an email — **category**, **urgency**,
**sentiment**, and yes/no flags like **is spam**, **is automated**, **is cold
outreach**. See **[Classification](../ai/classification.md)**.

**Confidence** — How sure the AI is about a signal, from `0.0` to `1.0`. You can
require a minimum in rules.

**Consent** — You agree to AI processing when you sign up, and can turn it off anytime
in **Settings → Privacy → AI Data Processing**; while it's off, nothing is sent for AI
analysis. See
**[AI privacy & consent](../ai/privacy-and-consent.md)**.

**BYOK** — "Bring your own key": use your own OpenAI or Anthropic API key. See
**[BYOK](../ai/byok.md)**.

**Writing profile** — A saved tone/length style for AI-written replies. See
**[Writing profiles](../ai/writing-profiles.md)**.

## Response tracking

**Thread state** — Where a conversation stands:
<span class="mp-pill mp-pill--red">Needs Action</span> (a reply or action is needed
from you), <span class="mp-pill mp-pill--amber">Awaiting Reply</span> (you're waiting on
them), <span class="mp-pill mp-pill--blue">Pending</span> (FYI / monitor),
<span class="mp-pill mp-pill--green">Resolved</span> (complete), or
<span class="mp-pill mp-pill--blue">Snoozed</span> (hidden until later). See
**[Response tracking](../tracking/overview.md#the-states-a-thread-can-be-in)**.

**Tracking label** — A Gmail label MailPrism uses to track a thread's state, kept in
sync with Gmail. See **[Tracking labels & sync](../tracking/labels-and-sync.md)**.

**Exemption** — A rule that keeps certain senders out of tracking. See
**[Exemptions](../tracking/exemptions.md)**.

**Nudge** — An automatic, gentle follow-up. **Nudge Them** chases a recipient who
hasn't replied; **Remind Me** pings you. See
**[Nudges & reminders](../tracking/nudges-and-reminders.md)**.

**Auto-responder** — An automatic reply for vacation or after-hours. See
**[Auto-responders](../tracking/auto-responders.md)**.

## Contacts

**Allowlist / Denylist** — A trusted sender (never treated as cold) / a blocked
sender. See **[Categories & relationships](../contacts/categories-and-relationships.md)**.

**Relationship** — How well you know a sender:
<span class="mp-pill mp-pill--amber">cold</span>,
<span class="mp-pill mp-pill--blue">warm</span>, or
<span class="mp-pill mp-pill--green">established</span> — computed from your history.

## Account

**Workspace** — Your MailPrism environment; can be shared with a team. See
**[Workspaces & teams](../account/workspaces-and-teams.md)**.

**Passkey** — Passwordless sign-in with your device's biometrics or a security key.
See **[Account & security](../account/account-security.md#passkeys)**.

**2FA** — Two-factor authentication: a one-time code in addition to your password.

**Lifetime code** — A one-time code that unlocks permanent access. See
**[Billing](../account/billing.md#redeem-a-lifetime-code)**.

**Quiet hours** — A window where rules pause; mail is queued until it ends. See
**[Preferences](../account/preferences.md#scheduling)**.

**Undo** — Reverse a rule's changes within a grace period, from the
**[Rule Logs](../analytics/rule-logs-and-undo.md)**.
