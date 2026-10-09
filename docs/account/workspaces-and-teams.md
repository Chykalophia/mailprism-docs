---
sidebar_position: 3
title: Workspaces & Teams
description: Set up your workspace, invite teammates, assign roles, track usage, and keep labels in sync across accounts.
---

# Workspaces & Teams

A **workspace** is the container for everything in MailPrism — your connected
Gmail accounts, rules, contacts, and team members all live inside one. Manage it
under **Settings → Workspace**.

You can belong to more than one workspace (for example, a personal one and a
team one) and switch between them at any time.

---

## Workspace settings

Under the **General** section you can give your workspace an identity:

- **Name** — what the workspace is called.
- **Icon & color** — pick an icon and a color so the workspace is easy to spot
  in the switcher.

A live **preview** shows how your icon, color, and name look together. Click
**Save Changes** to apply.

### Require two-factor authentication

The **Security** card lets the workspace **owner** turn on **Require two-factor
authentication for members**. Admins can see the setting but can't change it.

What it does today:

| While it's on… | Result |
|----------------|--------|
| A member who **has** 2FA set up | Can't turn their 2FA off (unless their membership has been exempted). |
| A member who **hasn't** set up 2FA | Can **still sign in** — the requirement doesn't lock anyone out yet. |

:::tip Ask members to turn 2FA on
Because members without 2FA aren't blocked, ask your team to enable it themselves
under **Settings → Security**. See
**[Two-factor authentication](./account-security.md#two-factor-authentication-2fa)**.
:::

---

## Switching workspaces

If you belong to more than one workspace, a **Switch Workspace** panel appears at
the top of the page. Each entry shows the workspace's icon, name, and member
count, with your current workspace marked **Current**.

- Select any other workspace to switch to it.
- Use **New** to create another workspace.

:::tip
The switcher only appears when you have more than one workspace. With a single
workspace there's nothing to switch between, so it's hidden.
:::

---

## Team members & roles

The **Team Members** section lists everyone in the workspace, each with a role
badge. Roles control what a member can do:

| Role | What they can do |
|------|------------------|
| <span class="mp-pill mp-pill--violet">Owner</span> | Full control, including billing and ownership. There is one owner. |
| <span class="mp-pill mp-pill--green">Admin</span> | Manage the team and rules, add Gmail accounts, view history — **but not billing**. |
| <span class="mp-pill mp-pill--amber">Editor</span> | Create and edit rules, and view history. Cannot manage the team, accounts, or delete rules. |
| <span class="mp-pill mp-pill--gray">Viewer</span> | Read-only access to rules and history. |

### Changing a role or removing a member

Open the **⋯** menu next to any non-owner member to:

- **Make Admin**, **Make Editor**, or **Make Viewer** — change their role.
- **Make *Role name*** — give them one of your [custom roles](#roles--permissions).
  These appear below a divider once the workspace has custom roles.
- **Remove from Team** — revoke their access.

The owner's role can't be changed from this menu. Invitations always use a built-in
role — to give a new member a custom role, assign it from this menu after they join.

### Roles & Permissions

**Settings → Roles & Permissions** shows every role in the workspace:

- **Built-in roles** — Owner, Admin, Editor, and Viewer. Available on every plan;
  they can't be edited or deleted.
- **Custom roles** — your own roles, created with **New role**. You give each one a
  name, an optional description, and pick its permissions. A custom role always
  narrows a built-in role — it can never grant more. Assign one from the **⋯** menu
  next to a member (see above).

:::note Custom roles need Business
Custom roles are included in the **Business** plan. On other plans, the Custom roles
area shows an upgrade panel with a **See plans** link. A role that's still assigned
to someone can't be deleted.
:::

---

## Invitations

Use **Invite** (in the Team Members section) to open the full invitation page.
You can invite people three ways:

### Single invitation

Enter one **email address**, choose a **role** (Viewer, Editor, or Admin), and
click **Send Invitation**.

### Bulk invitation

Paste multiple addresses — one per line or comma-separated — pick one **role for
all**, and send. A live preview shows how many addresses were detected. Up to
**50** invitations can be sent at once.

### Import from CSV

Upload a `.csv` or `.txt` file in the format `email,role` (role is optional and
defaults to Viewer). You'll see a preview table before importing, and the same
50-per-import limit applies.

:::note Owner isn't an assignable role
Invitations can only grant **Viewer**, **Editor**, or **Admin**. Ownership stays
with the workspace owner.
:::

### Managing pending invitations

Both the Workspace page and the invite page show a **Pending Invitations** list.
For each invitation you can:

- **Cancel** it before it's accepted.
- **Resend** it if it has expired.

Invitations that pass their expiry date are marked **Expired**.

---

## Usage & limits

The **Usage** section shows how much of your plan you're using, with a progress
bar for each item:

- **Gmail Accounts**
- **Team Members**
- **Rules**
- **Emails Processed** (this month)
- **AI Credits** (this month)

When a limit is reached, the bar turns amber and then red as you approach it.
Unlimited items show as **Unlimited**.

:::info Limits depend on your plan
The exact numbers come from your current plan. To see or change them, see
**[Billing & Plans](./billing.md)** or the in-app Billing page — this page never
hardcodes plan limits.
:::

---

## Label sync across accounts

When you connect **two or more** Gmail accounts, a **Label Sync** section
appears. It keeps a single rule label applied consistently across every account,
even when each account uses a different Gmail label name.

> **Example:** your rule labels something **@urgent**. Label Sync can apply
> **@urgent** in one account, **Action Required** in another, and skip a third
> entirely.

### The sync wizard

Click **Add Label Sync** to step through a short wizard:

1. **Name** — the shared label name you'll reference in your rules (for example
   `@urgent`, `Follow Up`, or `Work/Projects`). It doesn't have to match any
   existing Gmail label.
2. **Strategy** — choose one:
   - **Use one label for all** — every account uses the same Gmail label,
     created automatically if it's missing.
   - **Customize per account** — pick a different label for each account, or skip
     accounts that don't need it.
3. **Accounts** (customize only) — for each account, choose **Same as rule
   label**, an **existing Gmail label**, a label you type in, or **Do not sync**.

MailPrism may also offer **suggestions** based on labels it finds across your
accounts — click **Sync now** on a suggestion to set it up in one step.

Existing synced labels appear in a list where you can **Edit** or **Delete**
them. Deleting a sync removes the mappings only — it never deletes the Gmail
labels themselves.

→ More on labels in rules: **[Conditions reference](../rules/conditions.md)**

---

## Delete a workspace

The **Danger Zone** at the bottom holds the **Delete Workspace** action. This is
permanent — all data, rules, and team members are removed and it cannot be
undone.

To confirm, you must type the workspace's exact name before the delete button
unlocks.

:::danger This can't be undone
Deleting a workspace permanently removes everything inside it. Export anything
you want to keep first — see **[Privacy & Data](./account-security.md)**.
:::

---

## What's next

- **[Billing & Plans](./billing.md)** — plans, usage, and the Stripe portal.
- **[Managing your Gmail connection](./gmail-connection.md)** — add or remove
  the accounts in your workspace.
- **[Notifications](./notifications.md)** — control alerts and digests.
