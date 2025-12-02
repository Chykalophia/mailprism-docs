---
sidebar_position: 4
title: Contacts
description: Manage allowlists, denylists, and sender relationships
---

# Contacts

The Contacts feature helps you organize senders into meaningful groups. Create allowlists for VIPs, denylists for unwanted senders, and define relationships that power your automation rules.

## Contact Lists

### Allowlist

Senders on your allowlist receive priority treatment:

- Emails never get auto-archived or deleted
- Rules can give these senders special handling
- Use for: bosses, clients, family, important contacts

**Adding to Allowlist:**

1. Go to **Contacts** → **Allowlist**
2. Click **Add Contact**
3. Enter email address or domain
4. Optionally add a note

### Denylist

Senders on your denylist can be automatically handled:

- Create rules to auto-archive or delete
- Block without unsubscribing
- Use for: persistent spammers, unwanted senders

**Adding to Denylist:**

1. Go to **Contacts** → **Denylist**
2. Click **Add Contact**
3. Enter email address or domain
4. Choose default action (archive/delete/none)

### VIP List

A special subset of your allowlist for the most important senders:

- Get notifications for VIP emails
- VIP emails are always starred
- Never missed in your inbox

## Adding Contacts

### Individual Email Addresses

Add specific email addresses:

```
john.smith@company.com
```

### Domain-Wide Rules

Add entire domains to cover all addresses:

```
@company.com          — All emails from company.com
@*.company.com        — Includes subdomains
```

### Bulk Import

Import multiple contacts at once:

1. Go to **Contacts**
2. Click **Import**
3. Upload a CSV file with email addresses
4. Map columns and confirm

CSV format:
```csv
email,list,note
john@example.com,allowlist,Key client
spam@unwanted.com,denylist,Persistent spam
```

## Sender Relationships

Define relationships to add context to your contacts:

### Available Relationships

| Relationship | Description |
|--------------|-------------|
| **Client** | Paying customers |
| **Prospect** | Potential customers |
| **Vendor** | Suppliers and service providers |
| **Partner** | Business partners |
| **Colleague** | Coworkers |
| **Friend** | Personal contacts |
| **Family** | Family members |
| **Other** | Custom relationship |

### Using Relationships in Rules

Create rules based on relationships:

```
Condition: Sender relationship is "Client"
Action: Apply label "Client Emails", Star
```

```
Condition: Sender relationship is "Family"
Action: Apply label "Personal", Never archive
```

## Smart Contact Detection

MailPrism can automatically suggest contacts based on your email patterns:

### Frequent Senders

Contacts who email you regularly are suggested for your allowlist:

1. Go to **Contacts** → **Suggestions**
2. Review frequent senders
3. Click **Add to Allowlist** or **Ignore**

### Reply Patterns

People you frequently reply to are likely important:

- MailPrism tracks your reply patterns
- Suggests adding responsive contacts to VIP list
- Helps identify key relationships

## Using Contacts in Rules

### Contact-Based Conditions

| Condition | Description |
|-----------|-------------|
| **Is on Allowlist** | Sender is allowlisted |
| **Is on Denylist** | Sender is denylisted |
| **Is VIP** | Sender is in VIP list |
| **Relationship is** | Sender has specific relationship |
| **Is Known Contact** | Sender is in any list |
| **Is Unknown** | Sender is not in any list |

### Example Rules

**VIP Treatment:**
```
Condition: Sender is VIP
Action: Star, Apply label "VIP", Send notification
```

**Handle Unknown Senders:**
```
Condition: Sender is Unknown
     AND: Subject contains "urgent"
Action: Apply label "Review", Keep in inbox
```

**Client Priority:**
```
Condition: Sender relationship is "Client"
     AND: AI urgency is "High"
Action: Star, Send notification, Apply label "Priority"
```

## Managing Contacts

### Edit Contact Details

1. Go to **Contacts**
2. Click on any contact
3. Update details:
   - Change list (allowlist/denylist)
   - Update relationship
   - Add/edit notes
   - View email history

### Remove Contacts

1. Find the contact in your list
2. Click the **...** menu
3. Select **Remove from list**

Or bulk remove:

1. Select multiple contacts using checkboxes
2. Click **Bulk Actions**
3. Choose **Remove Selected**

### Move Between Lists

Move a contact from allowlist to denylist (or vice versa):

1. Click on the contact
2. Click **Move to...**
3. Select the destination list

## Sync with Google Contacts

MailPrism can sync with your Google Contacts:

### Enable Sync

1. Go to **Settings** → **Integrations**
2. Find **Google Contacts**
3. Click **Connect**
4. Authorize access

### Sync Options

- **Import from Google** — Add Google Contacts to allowlist
- **Auto-sync** — Keep lists updated with Google changes
- **Sync frequency** — How often to check for updates

### Starred Contacts

Google Contacts marked with a star can automatically be added to your VIP list.

## Contact Insights

### Sender Analytics

View statistics for any contact:

- Total emails received
- Average response time (yours and theirs)
- Common topics/subjects
- Peak communication times

### Relationship Health

Track communication patterns:

- **Active** — Regular communication
- **Cooling** — Less frequent recently
- **Dormant** — No contact in 30+ days

## Privacy

### Your Data

- Contact lists are stored securely in your account
- Only you can access your contact information
- Contacts are never shared with third parties

### Contact Data Sources

- Manual additions
- Import from CSV
- Google Contacts sync (optional)
- AI suggestions (based on your email patterns)

---

**Need help organizing contacts?** Check our [FAQ](/faq).
