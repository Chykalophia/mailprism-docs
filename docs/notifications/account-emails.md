---
sidebar_position: 5
title: Account Emails
description: "Welcome, subscription, invitations, verification codes, payment problems, beta invites, sign-in emails and security notices: what each looks like and when it is sent."
---

# Account Emails

These emails are about your account rather than your mail. You can't turn them
off, because each one is the only way to finish something you or a teammate
started. They come from **MailPrism &lt;noreply@mail.mailprism.ai&gt;** unless
noted.

| Email | Sent when | Expires |
|-------|-----------|---------|
| [Welcome](#welcome) | You finish signing up and reach onboarding | — |
| [Subscription confirmed](#subscription-confirmed) | A paid plan starts after checkout | — |
| [Workspace invitation](#workspace-invitation) | A workspace owner or admin invites you | 7 days |
| [Forwarding address verification](#forwarding-address-verification) | You add a forwarding address | 60 minutes |
| [Payment failed](#payment-failed) | Your subscription payment is declined | — |
| [Beta invite](#beta-invite) | You're let in from the beta waitlist | Depends on the code |
| [Sign-in emails](#sign-in-emails) | You sign up, reset your password, change your email, or change how you sign in | A short time |

Every one of them has the same look: a white card with the MailPrism name at the
top, one indigo button, and a short footer.

---

## Welcome

**Subject:** *Welcome to MailPrism!*

<Screenshot
  src="/img/screens/emails/welcome.webp"
  alt="Welcome email: Welcome to MailPrism, a short note about connecting Gmail, and a Get Started button"
  width={720}
/>

Sent once, the first time you reach the onboarding page after signing up.
**Get Started** opens your dashboard. If it doesn't arrive, it's sent again the
next time you open onboarding. Accounts made before the welcome email existed
don't get it.

---

## Subscription confirmed

**Subject:** *Your MailPrism Pro subscription is active!* (with your plan's name)

<Screenshot
  src="/img/screens/emails/subscription-confirmation.webp"
  alt="Subscription confirmed email naming the Pro plan, monthly, with a Go to Dashboard button"
  width={720}
/>

Sent when a checkout for a paid plan goes through. It names the plan and whether
you pay monthly or yearly. Manage the plan in **Settings › Billing**. See
[Billing & Plans](../account/billing.md).

---

## Workspace invitation

**Subject:** *You're invited to join Northwind Studio on MailPrism*

<Screenshot
  src="/img/screens/emails/workspace-invite.webp"
  alt="Workspace invitation email with the workspace name Northwind Studio and the Editor role in a highlighted box, an Accept invitation button, and a note that the invitation expires in 7 days"
  width={720}
/>

Sent to each address you invite from **Settings → Workspace → Invite**. It
names the workspace and the role they'll have (Viewer, Editor, Admin or
Owner). **Accept invitation** opens MailPrism, where they sign in (or sign up)
and join the workspace.

The link works for **7 days**. Resending the invitation from the workspace page
starts a new 7 days. See [Workspaces & Teams](../account/workspaces-and-teams.md#invitations).

---

## Forwarding address verification

**Subject:** *Verify your forwarding address for MailPrism*

<Screenshot
  src="/img/screens/emails/forwarding-verification.webp"
  alt="Verification email with a six-digit code in a highlighted box, a note that it expires in 60 minutes, and steps to enter the code in Settings → Forwarding"
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
  alt="Payment failed email with the amount due, a warning that features may be limited until the payment goes through, an Update payment method button, and common reasons a payment fails"
  caption="The amount shown here is an example."
  width={720}
/>

Sent when your card is declined for a subscription payment. **Update payment
method** opens the secure billing portal, where you can change your card. Your
plan features may be limited until the payment goes through.

See [Billing & Plans](../account/billing.md#payment-method).

---

## Beta invite

**Subject:** *Your MailPrism Beta Invite Code*

<Screenshot
  src="/img/screens/emails/beta-invite.webp"
  alt="Beta invite email with the invite code in a highlighted box, the access level and when it expires, a Sign up now button and three getting-started steps"
  width={720}
/>

Sent when you're let in from the beta waitlist. **Sign up now** opens the
invite page with your code already filled in. If the code is single-use, the
email says so; don't share it.

---

## Sign-in emails

These come from our sign-in provider on MailPrism's behalf, in the same design as
the rest. Each link works once and only for a short time, so use it soon after it
arrives. If it has expired, start again from the sign-in page.

<Screenshot
  src="/img/screens/emails/auth-confirmation.webp"
  alt="Confirm your email: a short note and a Confirm email button, with the link written out underneath"
  width={720}
/>

| You did this | You get | Subject |
|--------------|---------|---------|
| Signed up with email and password | A link to confirm your email address | *Confirm your email for MailPrism* |
| Clicked **Forgot password?** | A link to choose a new password | *Reset your MailPrism password* |
| Changed your email in **Settings › Account** | A link to confirm the change | *Confirm your new email for MailPrism* |

<Screenshot
  src="/img/screens/emails/auth-recovery.webp"
  alt="Reset your password: a Reset password button, a note that the link works once, and a line saying to ignore it if you didn't ask"
  width={720}
/>

If you signed up with Google, you won't get a confirmation or password email:
Google handles that sign-in.

### Security notices

After a change to how you sign in, you get a short notice so you'd know if someone
else made it. If you didn't make the change, reset your password and contact us at
hello@mailprism.ai.

| After this | Subject |
|------------|---------|
| Your password changed | *Your MailPrism password was changed* |
| Your email address changed | *Your MailPrism email was changed* |
| A sign-in method (such as a passkey or authenticator app) was added | *A sign-in method was added to your MailPrism account* |
| A sign-in method was removed | *A sign-in method was removed from your MailPrism account* |

<Screenshot
  src="/img/screens/emails/auth-password-changed.webp"
  alt="Your password was changed: names the account and says what to do if you didn't make the change"
  width={720}
/>

---

## Messages to support

**Help → Contact Support** sends your message to the MailPrism team at
hello@mailprism.ai. There's no automatic receipt; a person replies to your
account email, usually from that address.
