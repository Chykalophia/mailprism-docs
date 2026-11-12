---
title: Sign In With a Passkey
sidebar_label: Passkeys and verification
description: Add a passkey so you can sign in with your fingerprint, face or a security key, and learn when MailPrism asks you to verify again.
glance:
  time: 2 minutes
  plan: Every plan
  where: [Settings, Security, Passkeys]
  app: /settings/security
  appLabel: Open Security settings
---

# Sign In With a Passkey

A **passkey** lets you sign in with your device's fingerprint, face recognition
or a hardware security key, with no password to type. It also counts as your
second factor, so MailPrism can check it's really you.

<Intro>
<InShort>

In **Settings → Security**, click **Add Passkey**, name it, and follow your
device's prompt. Next time, click **Sign in with passkey** on the sign-in screen.

</InShort>
<BeforeYouStart>

- A recent version of Chrome, Safari, Edge or Firefox.
- A device with Touch ID, Face ID or Windows Hello, a phone, or a security key.

</BeforeYouStart>
</Intro>

<Steps>
<Step
  app="/settings/security"
  shot="/img/screens/account/security.webp"
  shotAlt="Security settings, with the Add Passkey button in the Passkeys card"
  spot={{x: 86, y: 18.2, w: 8.9, h: 4.4}}
  hint="Add Passkey starts your device's own prompt.">

## Add a passkey

Open **Settings → Security** and click **Add Passkey** in the **Passkeys** card.
If you already have a second factor, MailPrism asks for it first.

</Step>
<Step hint="A name like My iPhone helps you tell passkeys apart.">

## Name it and confirm on your device

Optionally give it a name like *My iPhone* or *Work laptop*, click **Add
Passkey**, then follow your device's prompt: Touch ID, Face ID, Windows Hello or
your security key.

</Step>
<Step
  shot="/img/screens/account/security.webp"
  shotAlt="The list of registered passkeys, with when each was added and last used"
  spot={{x: 23, y: 24.2, w: 72.6, h: 28}}
  hint="Each passkey shows when it was added and last used.">

## Check it's listed

Your new passkey appears in the list with when it was **added** and **last
used**. You can register up to **10**. Use **Rename** or **Remove** to tidy the
list. A removed passkey can't be used to sign in.

</Step>
<Step hint="No email or password needed.">

## Sign in with it

Next time, click **Sign in with passkey** on the sign-in screen. Your device
asks for your fingerprint, face or key, and you're in. The button is hidden in
browsers that don't support passkeys.

</Step>
</Steps>

<DoneWhen>

You can sign out, click **Sign in with passkey**, and get back in without typing
a password.

</DoneWhen>

## When MailPrism asks you to verify again {#step-up}

Once you have a passkey or an authenticator app, MailPrism sometimes asks for it
again before going further. This is called a **step-up** check. You'll see it:

- **After signing in with Google**, unless you've turned that off. See
  [Google sign-in](./account-security.md#google-sign-in).
- **When your verification has expired** on a session that's been open a while.
- **Before changing your sign-in security**, such as adding or removing a passkey
  or authenticator app, or turning off the Google sign-in check.

Use whichever factor you have: **Verify with passkey**, the 6-digit code from
your authenticator app, or one of your **recovery codes**. Each recovery code
works once.

:::tip Lost your device?
Sign in with a different passkey, your authenticator app, or a recovery code,
then remove the lost passkey. Nothing works? [Contact support](../help/contact-support.md).
:::

## Related

- [Account and security](./account-security.md): password, two-factor
  authentication, sessions.
- [Workspaces and teams](./workspaces-and-teams.md#require-two-factor-authentication):
  when a workspace requires a second factor.
