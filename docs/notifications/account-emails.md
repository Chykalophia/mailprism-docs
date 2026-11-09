---
sidebar_position: 5
title: Account Emails
description: Invitations, verification codes, payment problems, beta invites and sign-in emails — what each looks like and when it's sent.
---

# Account Emails

These emails are about your account rather than your mail. You can't turn them
off, because each one is the only way to finish something you or a teammate
started. They come from **MailPrism &lt;noreply@mail.mailprism.ai&gt;** unless
noted.

| Email | Sent when | Expires |
|-------|-----------|---------|
| [Workspace invitation](#workspace-invitation) | A workspace owner or admin invites you | 7 days |
| [Forwarding address verification](#forwarding-address-verification) | You add a forwarding address | 60 minutes |
| [Payment failed](#payment-failed) | Your subscription payment is declined | — |
| [Beta invite](#beta-invite) | You're let in from the beta waitlist | Depends on the code |
| [Sign-in emails](#sign-in-emails) | You sign up, reset your password or change your email | A short time |

---

## Workspace invitation

**Subject:** *You're invited to join Northwind Studio on MailPrism*

<Screenshot
  src="/img/screens/emails/workspace-invite.webp"
  alt="Workspace invitation email with a purple header, the workspace name Northwind Studio, an Editor role badge, an Accept Invitation button, and a note that the invitation expires in 7 days"
  width={720}
/>

Sent to each address you invite from **Settings → Workspace → Invite**. It
names the workspace and the role they'll have (Viewer, Editor, Admin or
Owner). **Accept Invitation** opens MailPrism, where they sign in (or sign up)
and join the workspace.

The link works for **7 days**. Resending the invitation from the workspace page
starts a new 7 days. See [Workspaces & Teams](../account/workspaces-and-teams.md#invitations).

---

## Forwarding address verification

**Subject:** *Verify your forwarding address for MailPrism*

<Screenshot
  src="/img/screens/emails/forwarding-verification.webp"
  alt="Verification email with a green header and a six-digit verification code in a large box, a note that it expires in 60 minutes, and steps to enter the code in Settings → Forwarding"
  width={720}
/>

Before a rule can forward mail to a new address, the owner of that address has
to prove they want it. MailPrism sends a **6-digit code** to the new address.
Enter it in **Settings → Forwarding Rules** next to the address.

- The code expires after **60 minutes**. Use **Resend** for a fresh one.
- After 5 wrong guesses the code stops working, so request a new one.
- If you didn't add the address, ignore the email. Nothing is forwarded to an
  unverified address.

---

## Payment failed

**Subject:** *Action Required: Your MailPrism payment failed*

<Screenshot
  src="/img/screens/emails/payment-failed.webp"
  alt="Payment failed email with a red header, the amount due, a warning that features may be limited until payment is resolved, an Update Payment Method button, and common reasons for failure"
  caption="The amount shown here is an example."
  width={720}
/>

Sent when your card is declined for a subscription payment. **Update Payment
Method** opens the secure billing portal, where you can change your card. Your
plan features may be limited until the payment goes through.

See [Billing & Plans](../account/billing.md#payment-method).

---

## Beta invite

**Subject:** *Your MailPrism Beta Invite Code*

<Screenshot
  src="/img/screens/emails/beta-invite.webp"
  alt="Beta invite email with a purple header, an invite code in large letters, when the code expires, the access level, a Sign Up Now button and three getting-started steps"
  width={720}
/>

Sent when you're let in from the beta waitlist. **Sign Up Now** opens the
invite page with your code already filled in. If the code is single-use, the
email says so; don't share it.

---

## Sign-in emails

Your sign-in emails (confirming a new account, resetting a password and
confirming a new email address) are sent by our sign-in provider on
MailPrism's behalf. Each contains a single link that only works for a short
time, so use it soon after it arrives. If it has expired, start again from the
sign-in page.

| You did this | You get |
|--------------|---------|
| Signed up with email and password | A link to confirm your email address |
| Clicked **Forgot password?** | A link to choose a new password |
| Changed your email in **Settings → Account** | A link, sent to the new address, to confirm the change |

If you signed up with Google, you won't get a confirmation or password email:
Google handles that sign-in.

---

## Messages to support

**Help → Contact Support** sends your message to the MailPrism team at
hello@mailprism.ai. There's no automatic receipt; a person replies to your
account email, usually from that address.
