---
title: "Privacy and security controls"
description: "Every privacy and security control in Bearly and what it changes, including Zero Data Retention only, end-to-end encryption with recovery phrase, device approval, and passkeys, personalization, memories and web search, project passwords, tool permissions, signed-in devices, logging out, account deletion, text messages, and admin-only controls."
canonical: "https://bearly.ai/docs/manual/privacy-and-security/"
markdown: "https://bearly.ai/docs/manual/privacy-and-security.md"
---

# Privacy and security controls

HTML: [https://bearly.ai/docs/manual/privacy-and-security/](https://bearly.ai/docs/manual/privacy-and-security/)

> Every privacy and security control in Bearly and what it changes, including Zero Data Retention only, end-to-end encryption with recovery phrase, device approval, and passkeys, personalization, memories and web search, project passwords, tool permissions, signed-in devices, logging out, account deletion, text messages, and admin-only controls.

This page lists every control that changes what Bearly stores, what reaches an AI model, and who can open your work, with the exact path to each one.

## What applies to every account

- Bearly doesn't train AI models on your chats.
- No ads. We don't sell your data.
- Chats and files are encrypted at rest, each with its own key.
- AI labs never learn who is asking: no name, account, or IP address reaches them. Anything you type about yourself is still part of your message.
- Web and image search run on a provider that keeps nothing after it answers.
- Computer use runs on your device. It's in the desktop app only, and the screenshots you approve go to the model you picked.

What you type, attach, or let a tool read still goes to the model handling your request. The controls below decide how much context goes with it and where your chats are kept.

## Quick reference

| Control | Where | What it does | How to undo |
| --- | --- | --- | --- |
| **Zero Data Retention only** | **Settings** → **Privacy & Security** | Chats use only zero-retention models, and fallbacks stay on them | Turn it off |
| End-to-end encryption | **Settings** → **Privacy & Security**, and the lock beside the composer | New chats are encrypted on your devices | Choose standard encryption for a new chat. Existing encrypted chats stay encrypted. |
| **Encrypt all new chats with this key** | Same pane, after setup | Makes end-to-end encryption the default for new chats | Turn it off |
| **Personalization** | **Settings** → **Personalization** | Controls whether your name, occupation, and About you go to the model | Turn it on or off |
| **Memories** | **This Chat**, **New Chats**, or the composer | Off stops recall of earlier chats | Set it back to **Auto** |
| **Web Search** | **This Chat**, **New Chats**, or the composer | Off stops the chat from searching the web on its own | Set it back to **Auto** |
| Project password | Project **Settings** → **Encryption** → **Protect** | Adds a password lock to a project, and its chats are read-only while locked | **Remove** |
| **Lock all data** | **Settings** → **Account** | Relocks every password-protected project on this device | Enter the passwords again |
| **Permissions** | Composer | **Standard** asks before tools act. **Full access** doesn't. | Switch back |
| Saved approvals | Composer → **Permissions** | **Revoke all saved approvals** or **Clear all permissions** | Approve again |
| **Devices** | **Settings** → **Devices** | Signs out other devices and removes extension or API keys | Sign in again |
| **Log out** | **Settings** → **Account**, or the account menu | Syncs, then clears Bearly's data from this device | Sign in |
| **Delete account** | **Settings** → **Account** | Schedules permanent deletion after email verification | **Cancel scheduled deletion** before the final reminder |
| Text messages | **Settings** → **Phone & SMS** | Stops texts or deletes your number | Set it up again |
| Browser data | **Settings** → **Browser** (desktop app) | Resets tabs and approvals, deletes cookies and site data, blocks trackers | — |

## Zero Data Retention only

Turn on **Zero Data Retention only** and Bearly shows only zero-retention models, and automatic fallbacks stay on them too. Reach for it when a chat may include confidential material and you want no model provider keeping prompts or replies after it answers.

**You need:** any plan, on any platform. It's off by default.



1. Open **Settings** → **Privacy & Security** — the pane reads "Only use AI routes where providers do not retain your prompts or responses after processing. Automatic fallbacks follow the same rule."
2. Turn on **Zero Data Retention only** — the model picker now hides models without a zero-retention route.



**What you get:** in the model picker, every model has a **ZDR** or **Standard** badge ("Zero data retention" or "Standard retention"). While the setting hides models, the picker shows **ZDR on · Some models hidden** with a **Change** link back to this pane. The setting belongs to your account, so it applies on every device once they sync.

**Limits:**

- It covers the language models that write and work in your chats, including the models Bearly uses inside chat tools such as Council's experts. Council can offer fewer experts when it's on.
- It doesn't cover image and video generation, transcription, text extraction from files, voice calls, or other tool services. Deep Research, People Search, Scholar's academic web search, YouTube search, and reading web pages also reach their usual services.
- If settings can't sync, Bearly keeps the rule on and the switch is unavailable: "Settings sync is unavailable. Zero Data Retention routes remain required until Bearly reconnects." The banner reads **ZDR on until settings sync**.
- If your organization also limits models, you see only models allowed by both, and the banner notes **managed account**.

**Combines with:** [Models](https://bearly.ai/docs/manual/chat/models.md) to pick among zero-retention models, and the [organization model allow-list](https://bearly.ai/docs/manual/organizations.md) for a team-wide rule.

## End-to-end encryption

End-to-end encryption is opt-in, applies to new chats only, and is labeled **Beta**. Turn on end-to-end encryption and your new chats are encrypted on your devices. Bearly stores and syncs only the locked copies. Bearly can't read your end-to-end encrypted chats: not the messages, the titles, or the files.

Signing in isn't enough to open your encrypted chats. A new device needs approval from one you already use, your recovery phrase, or a passkey.

**Use it when:** a chat holds material only you should be able to open later, such as legal, medical, or personal records. Each message still goes to the model you picked, so this protects what's stored, not what the model sees.

**You need:** nothing extra on a personal account. On a managed organization, an admin must turn on **End-to-end encryption** in your policy, and **Require local encryption** must be off. On the desktop app, a version newer than 5.2.8.

### Set it up on your first device



1. Open **Settings** → **Privacy & Security** and, under **End-to-end encryption**, select **Set up end-to-end encryption** — the pane reads "Your chats are already encrypted. Keep the keys to end-to-end encrypted chats on devices you approve." You can also start from **Set up end-to-end encryption** under the new-chat composer.
2. Under **Name this device**, keep or edit the suggested name, such as "Bearly on iPhone" — you'll see this name when approving devices later. Select **Continue**.
3. **Save your recovery phrase**: Bearly shows 24 words. Use **Copy** or **Download** (some phones show **Save**), or take a screenshot on a phone or a photo of the screen on a computer, and keep one copy somewhere other than this device.
4. Check "I saved my recovery phrase. If I lose it and every approved device, Bearly can't recover my encrypted chats." and select **Continue**.
5. Leave **Encrypt all new chats with this key** on — "Existing chats stay as they are." Optional: select **Store a passkey in my keychain**. Then select **Done**.



> **Danger — Save your recovery phrase**
> Lose every device and your recovery phrase, and nobody can recover your encrypted chats, including Bearly. Keep the phrase somewhere safe and separate from your devices, or also store a passkey.


### Choose encryption for each new chat

After setup, a lock appears beside the project picker on a new chat. Orange and closed means "End-to-end encrypted". Gray and open means "Standard encryption". Turning encryption off for a draft asks you to confirm, and you can't change it while the draft has attachments ("Remove attachments before changing encryption"). If your organization requires device-only encryption, the lock is yellow, reads "Local key encryption", and can't be changed.

### Approve a new device

Each browser and app needs its own approval, even on the same computer.



1. Sign in on the new device, open **Settings** → **Privacy & Security**, and select **Approve this device**. Name the device and select **Ask another device to approve** — it shows a **Verification code** and waits.
2. On a device you already approved, open **Settings** → **Privacy & Security** → **Approve a device** and choose the new device by name.
3. Enter the verification code shown on the new device, then approve — the new device can now open your encrypted chats.



From an approved phone, you can instead open "Using an approved phone? Scan instead" on the new device and scan the code with Bearly's scanner (**Approve a device** → **Scan QR code**), not the phone's Camera app. Requests expire after 10 minutes, and **Request another approval code** starts a new one. Without an approved device, choose **Use my recovery phrase instead** and select **Unlock this device**, or use **Unlock with my keychain** if you saved a passkey.

### Manage devices and recovery

Once this device is unlocked, the pane shows:

- **Approved devices**: "These devices can open your encrypted chats and approve another device." **Remove** asks first and explains the result. Removing your only device means "You'll need your recovery phrase to get back in." Removing this device locks your encrypted chats here until another device approves it or you use your recovery phrase. Anything a removed device already downloaded stays on it.
- **Recovery**: your saved passkeys with **Remove**, **Store a passkey in my keychain** ("Use your device keychain to unlock Bearly on a replacement device.") where your device supports it, and **Replace recovery phrase** ("Creates a new recovery phrase. The previous phrase or key stops working.").

### What changes in an encrypted chat

- Memories are off. The setup screen says so.
- The chat can't search documents, and **Always Search Documents** has no effect. Reading a specific file still works.
- The chat doesn't appear in **Search chats and files**.
- The AI in a regular chat can't list, read, rename, move, or delete your encrypted chats.
- When you send a prompt, "Bearly's execution service, the selected AI provider and tools still receive what they need."
- A routine made from an encrypted chat keeps its instructions and results in standard storage, and its runs wait until a device is unlocked. If a routine texts you each result, the routine editor notes that the text summary leaves end-to-end encryption.
- Publishing a Page asks you to confirm that Bearly will store a readable copy of only the published Page, its preview, and any file you include. The chat stays encrypted.
- On a device that isn't approved, encrypted chats appear as "Encrypted chat" placeholders, and a banner reads "Encrypted chats are locked on this device" with **Approve**.

**Limits:**

- Bearly can still see when each encrypted chat was last saved and when you last read it.
- Clearing a browser's site data removes that browser's key, so it needs approval again.
- Desktop app versions 5.2.8 and earlier can't hold a key. They stay locked and can start standard chats.
- Passkeys depend on your device's keychain. The option appears only where it works.
- If your organization later stops allowing it, setup and new encrypted chats stop, but existing ones stay available: "Your organization doesn't allow new end-to-end encrypted chats. Your existing ones stay available."

**Combines with:** [Projects](https://bearly.ai/docs/manual/projects.md), since an encrypted chat's title and project link are encrypted too, and [Routines](https://bearly.ai/docs/manual/capabilities/routines.md), with the storage note above.

## Personalization

**Settings** → **Personalization** decides what Bearly tells the model about you. The **Personalization** switch is off by default.

- Turn on **Personalization** ("Include your profile context in your chats.") and fill in **Name**, **Occupation**, and **About you**. "This is shared with AI models in your conversations."
- With the switch off, nothing from your profile is added to your chats.
- A project can turn on **Disable Personalization**, and then nothing from your profile is included in that project's chats.

## Memories and Web Search

**Memories** lets a chat recall earlier conversations. In **Settings** → **This Chat** or **New Chats**, choose **Off** or **Auto**. In the composer's sliders menu, choose **Off** or **All Chats**, or **Project Only** inside a project. Deleting a chat deletes its memory. Your organization's **Memory Recall** policy can turn Memories off for everyone.

**Web Search** set to **Off** stops a chat from searching the web on its own. Tools you start on purpose, such as Deep Research, still reach the web. Set **New Chats** → **Web Search** to **Off** to make that the default. See [Chat settings](https://bearly.ai/docs/manual/chat/settings.md).

## Project passwords and Lock all data

A project password locks a project's files and settings. While it's locked, its chats are read-only. Bearly can't recover a forgotten password, and you enter it again on each new device and after you log out. A project password is a separate lock on stored project data, not end-to-end encryption. See [Password protection](https://bearly.ai/docs/manual/projects.md).

**Settings** → **Account** → **Lock all data** relocks every password-protected project on this device. The pane still calls them "notebooks". Select **Lock**, then confirm with **Lock All** — Bearly clears saved passwords on this device and reloads.

## Permissions: Standard and Full access

The **Permissions** button beside the composer decides whether Bearly asks before it uses tools that act outside the chat, such as local files, Computer Use, Bearly Browser, Chrome, Skill scripts, and connectors.

- **Standard**: "Ask for approval when needed. Saved approvals still apply."
- **Full access**: "Use enabled tools without asking each time." Turning it on asks **Enable full access?** and applies to this chat on this device only. Organization rules, operating-system permissions, and required safety checks still apply. Full access never turns on a tool or connects an account.
- **Saved approvals · _N_** lists approvals you've given, each scoped to "This response", "This session", or "This chat · this device", with **Revoke**. **Revoke all saved approvals** clears them. **Clear all permissions** switches to Standard and revokes them all.
- **Settings** → **Privacy & Security** → **Start new chats in Full access** makes new chats on this device start in Full access. It asks **Start every new chat in Full access?** first. Existing chats and routines aren't changed. If Full access isn't available for your account or app, the switch says why.

Routines have their own Full access setting in the routine editor. On a managed organization, admins decide who may use Full access under [Agent access](https://bearly.ai/docs/manual/organizations.md). See [Permissions](https://bearly.ai/docs/manual/capabilities/permissions.md).

## Devices

**Settings** → **Devices** lists where your account is signed in: "Where your Bearly account is signed in. Sign out of any device you don't recognize." Each row shows the device, **This device** for the one you're on, an approximate location, and when it was last active, with **Sign out**.

- **Sign out all other devices** keeps this device signed in and keeps your API keys.
- **Browser extension and API keys**: "These have separate access. Remove a key to disconnect anything using it." Each key shows when it was created and last used, with **Remove**.

## Log out

**Settings** → **Account** → **Log out**, or **Logout** in the account menu: "Bearly syncs your recent changes, then clears its data from this device. You'll need to sign in again." If some changes haven't synced, Bearly asks before discarding them. Logging out also ends the session on Bearly's side.

## Delete your account

**You need:** to transfer or close any organizations you administer, and to transfer ownership or remove collaborators from shared work. Bearly blocks the request until you do.



1. Open **Settings** → **Account** and, beside **Delete account**, select **Delete** — the dialog lists what's deleted and what's kept.
2. Review the subscription note. A web subscription is canceled when the deletion runs, so cancel first if it could renew in the next 24 hours. An App Store subscription isn't canceled, and unused time and credits aren't refunded. **Manage subscription** helps you cancel.
3. Select **Email verification code**, enter the six-digit **Verification code** and your full **Account email**, then select **Schedule account deletion**.
4. Save the **Deletion receipt** and scheduled time — Bearly also emails the schedule to your account address.



| Deleted | Kept as restricted records |
| --- | --- |
| Chats, projects, documents, and generated files | Invoices, payment and subscription records |
| Settings, saved prompts, phone profile, and team membership | Usage and transaction totals needed for reconciliation |
| API keys, extension credentials, and Bearly sessions | Required fraud, dispute, consent, tax, and legal records |

Deletion runs 24 hours after you verify. You can keep using Bearly until then. To cancel, select **Delete** again and **Cancel scheduled deletion**. Cancelling closes when Bearly sends the final reminder, about one hour before deletion.

## Phone & SMS

**Settings** → **Phone & SMS** manages text messages. Set it up with a US or Canadian mobile number for verification codes and notifications. Once verified, the pane offers **Send test text**, **Change number**, **Turn off text messages** ("Stops codes and notifications. Same as replying STOP."), and **Remove phone number** ("Deletes the number from your Bearly account."). The pane appears when your organization's **Text messages** policy allows it. See [Email and text](https://bearly.ai/docs/manual/capabilities/email-and-text.md).

## Controls only an organization admin can set

On a managed organization, admins can set these for members in a policy. The full list is in the [policy control catalog](https://bearly.ai/docs/manual/organizations.md).

- **PII Blocker** replaces email addresses, phone numbers, credit card numbers, and US Social Security numbers with "[REDACTED: _type_]" before a message is sent, and shows **Personal Information Redacted**.
- **End-to-end encryption** must be turned on before members can set up encrypted chats.
- **Require local encryption** makes new chats open only on the device that created them, and blocks end-to-end encryption.
- **Lock existing chats** converts existing chats to device-only. It can't be undone.
- **File uploads** and **Memory Recall** turn off attachments and Memories.
- **Model access** limits which models members can pick, and **Agent access** decides who may use Full access.

## Related

- [Settings reference](https://bearly.ai/docs/manual/settings-reference.md) — every pane and control
- [Projects](https://bearly.ai/docs/manual/projects.md) — project passwords and sharing
- [Run Bearly for an organization](https://bearly.ai/docs/manual/organizations.md) — admin controls
- [Privacy and security in Bearly](https://bearly.ai/docs/privacy-security.md) and [Delete your Bearly account](https://bearly.ai/docs/account/delete-account.md)
- [Privacy Policy](https://bearly.ai/privacy-policy.md)

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Run Bearly for an organization](https://bearly.ai/docs/manual/organizations.md)
- [Next: Settings reference](https://bearly.ai/docs/manual/settings-reference.md)
- [Related: Choose and compare models](https://bearly.ai/docs/manual/chat/models.md)
- [Related: Projects: shared context, files, and settings](https://bearly.ai/docs/manual/projects.md)
- [Related: Automate with Routines](https://bearly.ai/docs/manual/capabilities/routines.md)
- [Related: Tune a chat: settings, style, reasoning, and memory](https://bearly.ai/docs/manual/chat/settings.md)
