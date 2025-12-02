---
sidebar_position: 2
title: Workspace Settings
description: Configure team settings, integrations, and workspace preferences
---

# Workspace Settings

Workspace settings control shared configurations for your team. These settings affect all members of your workspace.

## Workspace Overview

### Workspace Details

Manage basic workspace information:

1. Go to **Settings** → **Workspace**
2. Edit your workspace:
   - **Workspace Name** — Your team or company name
   - **Workspace URL** — Custom subdomain (Business tier)
   - **Logo** — Workspace branding
   - **Description** — Internal notes about the workspace

### Workspace ID

Your unique workspace identifier is displayed here. Use this when:

- Contacting support
- Configuring API integrations
- Setting up webhooks

## Team Management

### Inviting Team Members

Add people to your workspace:

1. Go to **Settings** → **Workspace**
2. Find **Team Members**
3. Click **Invite Member**
4. Enter their email address
5. Select their role
6. Click **Send Invitation**

### Member Roles

| Role | Permissions |
|------|-------------|
| **Owner** | Full access, billing, can delete workspace |
| **Admin** | Manage members, rules, and settings |
| **Member** | Create and manage own rules |
| **Viewer** | View-only access to shared content |

### Managing Members

For each team member, you can:

- **Change Role** — Update their permissions
- **Resend Invitation** — For pending invites
- **Remove** — Remove from workspace
- **View Activity** — See their recent actions

### Pending Invitations

View and manage outstanding invites:

- See who hasn't accepted yet
- Resend invitation emails
- Cancel pending invitations
- Set invitation expiration

## Integrations

### Gmail Accounts

Manage connected Gmail accounts:

1. Go to **Settings** → **Integrations**
2. View all connected accounts:
   - Connection status
   - Last sync time
   - Emails processed
3. Actions:
   - **Reconnect** — Refresh OAuth tokens
   - **Disconnect** — Remove Gmail access

### Adding More Gmail Accounts

Connect additional Gmail accounts:

1. Click **Add Gmail Account**
2. Complete the OAuth flow
3. Configure account-specific settings

[Detailed Gmail setup guide →](/getting-started/connecting-gmail)

### Third-Party Integrations

Connect external services (varies by tier):

| Integration | Description | Tier Required |
|-------------|-------------|---------------|
| **Slack** | Send notifications to Slack | Starter+ |
| **Zapier** | Connect to 5000+ apps | Pro+ |
| **Webhooks** | Custom HTTP callbacks | Pro+ |
| **API Access** | Full REST API | Business |

## Default Settings

### New Member Defaults

Set defaults for new team members:

- **Default Role** — Role assigned to new invites
- **Default Rules** — Starter rules for new members
- **Onboarding** — Welcome message and setup guide

### Rule Defaults

Set workspace-wide rule defaults:

- **Default Priority** — Starting priority for new rules
- **Shared Labels** — Labels available to all members
- **Approval Required** — Require admin approval for new rules

## Billing (Workspace)

### Subscription Overview

View your workspace subscription:

- Current plan and tier
- Number of seats used/available
- Billing cycle and next payment
- Usage statistics

### Manage Seats

Adjust your team size:

1. Go to **Settings** → **Billing**
2. Click **Manage Seats**
3. Add or remove seats
4. Review prorated charges
5. Confirm changes

### Payment Methods

Manage workspace payment:

- Add/remove payment methods
- Set default payment method
- View payment history
- Download invoices

### Upgrade/Downgrade

Change your workspace plan:

1. Go to **Settings** → **Billing**
2. Click **Change Plan**
3. Select new tier
4. Review feature changes
5. Confirm and pay

:::info Downgrade Notice
When downgrading, some features may become unavailable. We'll notify you of any affected rules or settings.
:::

## Data & Compliance

### Data Retention

Configure how long data is kept:

| Data Type | Free | Starter | Pro | Business |
|-----------|------|---------|-----|----------|
| Email logs | 7 days | 30 days | 60 days | 90 days |
| Activity history | 7 days | 30 days | 60 days | Custom |
| Analytics | 30 days | 90 days | 1 year | Custom |

### Export Workspace Data

Export all workspace data:

1. Go to **Settings** → **Workspace**
2. Click **Export Data**
3. Select what to export:
   - Rules and configurations
   - Team member list
   - Activity logs
   - Analytics data
4. Choose format (JSON/CSV)
5. Download or receive via email

### Compliance Settings

For regulated industries (Business tier):

- **Audit Logging** — Detailed action logs
- **Data Residency** — Choose data storage region
- **SSO/SAML** — Enterprise single sign-on
- **Custom DPA** — Data Processing Agreement

## Danger Zone

### Transfer Ownership

Transfer workspace to another member:

1. Go to **Settings** → **Workspace**
2. Find **Danger Zone**
3. Click **Transfer Ownership**
4. Select the new owner
5. Confirm with your password

:::warning
You'll lose owner privileges after transfer. The new owner will have full control.
:::

### Delete Workspace

Permanently delete the workspace:

1. Go to **Settings** → **Workspace**
2. Find **Danger Zone**
3. Click **Delete Workspace**
4. Enter workspace name to confirm
5. Enter your password
6. Click **Permanently Delete**

:::danger
This action is irreversible. All workspace data, rules, and member access will be permanently deleted.
:::

## API Keys

### Managing API Keys

Create and manage API access:

1. Go to **Settings** → **API Keys**
2. Click **Create API Key**
3. Name your key and set permissions
4. Copy the key (shown once only)
5. Use in your applications

### API Key Permissions

Set granular permissions:

- **Read** — View rules and data
- **Write** — Create and modify rules
- **Execute** — Trigger rule processing
- **Admin** — Full API access

### Revoking Keys

To revoke an API key:

1. Find the key in your list
2. Click **Revoke**
3. Confirm revocation

The key stops working immediately.

---

**Questions about workspace settings?** Check our [FAQ](/faq) or contact support.
