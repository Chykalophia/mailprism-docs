---
sidebar_position: 1
title: Contacts Overview
description: Your MailPrism contacts — the people you actually email. Browse, search, add, import, and keep them in sync.
---

# Contacts

MailPrism contacts are **the people you actually communicate with** — not your Google
Contacts. MailPrism builds the list by scanning your Gmail **Sent** folder, so a contact
is someone you've genuinely exchanged email with. That real history is what powers
[cold-email detection](../ai/classification.md) and lets your
[rules](../rules/conditions.md#sender-relationship) treat trusted senders differently
from strangers.

:::info Not Google Contacts
Your MailPrism contact list is separate from Google Contacts. It reflects who you email,
which is exactly what MailPrism needs to spot cold outreach and personalize automation.
:::

## The contacts list

Open **Contacts** to see everyone MailPrism knows about. Each row shows:

- **Name** — the contact's display name (falls back to their email address).
- A <span class="mp-pill mp-pill--blue">Domain</span> badge if the entry matches a whole
  domain rather than one address.
- A status badge — <span class="mp-pill mp-pill--green">Trusted</span>,
  <span class="mp-pill mp-pill--red">Blocked</span>, or
  <span class="mp-pill mp-pill--gray">Normal</span>.
- The email address, company domain, total email count, and when you last interacted.
- Their category, if one is set.

At the top, a stats row summarizes your list: **Total Contacts**, **Companies**,
**Trusted**, and **Auto-detected**.

### Search and filter

| Control | What it does |
|---------|--------------|
| **Search** | Find contacts by name or email address |
| **Status** | Filter by All, Normal, Trusted (allowlist), or Blocked (denylist) |
| **Category** | Filter to a single contact category |

Use **Clear** to reset every filter at once.

## Contact detail

Click any contact to open their detail page. It shows the full record:

| Field | What it means |
|-------|---------------|
| **First / Last / Display Name** | The contact's name |
| **Email** or **Domain** | The address or domain this contact matches |
| **Status** | Trusted, Blocked, or Normal — see [Categories & relationships](./categories-and-relationships.md#contact-status) |
| **Category** | The assigned category, if any |
| **Relationship** | Unknown, Cold, Warm, or Established — [how it's computed](./categories-and-relationships.md#relationship-type) |
| **Total Interactions** | Total emails exchanged |
| **Last Interaction** | When you last emailed each other |
| **Source** | How the contact was added (manual, sent scan, inbound, imported) |
| **Notes** | Anything you've jotted down |

An **Email Activity** card breaks the totals into **Emails Sent**, **Emails Received**,
and **Total**.

### Keeping a contact current

For email contacts, the detail page offers:

- **Refresh** — re-reads the contact's name from your Gmail message headers.
- **AI Fix** — uses AI to analyze email signatures and fill in name details.
- **Edit** — change name, status, category, or notes.
- **Delete** — remove the contact (this can't be undone).

:::note AI Fix is a Business feature
The **AI Fix** button appears only on Business-tier workspaces, and only when
[AI features are turned on](../ai/overview.md). Plain **Refresh** is always available.
:::

## Adding a contact

Choose **Add Contact** and fill in the form:

1. **Type** — an **Email Address** (one person) or a **Domain** (everyone at, say,
   `example.com`).
2. **Email / Domain** — the value to match.
3. **First / Last / Display Name** — optional name fields.
4. **Status** — Normal, Trusted (allowlist), or Blocked (denylist).
5. **Category** — optional. See [contact categories](./categories-and-relationships.md#contact-categories).
6. **Notes** — anything you want to remember.

### AI category detection

On Business-tier workspaces with [AI enabled](../ai/overview.md), an **AI Assist** badge
appears next to the Category field and a **Detect** button suggests the best category
from the email or domain you entered. Pick it or override it — you're always in control.

## Importing contacts

Open **Import Contacts** to build your list from Gmail. MailPrism scans your **Sent**
folder and creates a contact for each recipient that clears your thresholds.

| Setting | What it controls |
|---------|------------------|
| **Lookback Period** | How far back to scan — 7 days up to 1 year (90 days recommended) |
| **Minimum Emails** | Only include recipients you've emailed at least this many times (recommended: 3) |

Start the sync and a progress bar shows the page being scanned and recipients found. A
**Sync History** card below logs each run with the emails processed, new and updated
contacts, and how long it took.

:::tip CSV import is on the way
Manual CSV upload is marked **Coming Soon** in the app. For now, import is from Gmail.
You *can* already **export** your contacts to CSV from the **More** menu on the Contacts
page.
:::

## Bulk actions

From the **More** menu on the Contacts page:

- **Refresh** — reload the list.
- **Re-analyze All** *(Business + AI)* — re-reads names for every auto-detected contact
  from Gmail headers in a batch.
- **Export Contacts** — download the whole list as a CSV file.
- **Import Contacts** — jump to the Gmail import screen.
- **Delete All & Re-sync** — delete every auto-detected contact and re-import them from
  Gmail with corrected parsing. **Manually created contacts are not affected.**

## How contacts get created automatically

You don't have to add contacts by hand. MailPrism creates them as it works:

- **From your Sent folder** — when you run an import, or as part of background syncing,
  recipients you email become contacts.
- **From inbound email** — when a new message is processed, the sender can be added
  automatically.

### The auto-contact filter

MailPrism shouldn't turn every cold pitch or newsletter blast into a contact. The
**auto-contact filter** stops that. After AI analyzes an inbound email, if the message
matches one of your **excluded signals**, the auto-created contact is removed.

By default, the filter is **on** and excludes:

<span class="mp-pill mp-pill--amber">Cold outreach</span>
<span class="mp-pill mp-pill--red">Spam</span>
<span class="mp-pill mp-pill--gray">Automated / no-reply</span>
<span class="mp-pill mp-pill--gray">Newsletters</span>
<span class="mp-pill mp-pill--amber">Promotions</span>
<span class="mp-pill mp-pill--gray">Sales & marketing</span>

You can also exclude **Notifications** and **Social media**, or turn the filter off
entirely, under **Settings → Contacts**.

:::note Your real relationships are protected
The filter only ever removes a freshly auto-created **cold** contact — one you've never
emailed back and have barely received from. Contacts you've replied to, or added
yourself, are never touched.
:::

→ Next: **[Categories & relationships](./categories-and-relationships.md)**
