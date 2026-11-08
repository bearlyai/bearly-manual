---
title: "Settings reference"
description: "Every pane and control in Bearly's Settings window, in the order the app shows them, with options, defaults, and what each control does, plus how to open Settings, read its save status, and find the panes that only appear on some platforms or plans."
canonical: "https://bearly.ai/docs/manual/settings-reference/"
markdown: "https://bearly.ai/docs/manual/settings-reference.md"
---

# Settings reference

HTML: [https://bearly.ai/docs/manual/settings-reference/](https://bearly.ai/docs/manual/settings-reference/)

> Every pane and control in Bearly's Settings window, in the order the app shows them, with options, defaults, and what each control does, plus how to open Settings, read its save status, and find the panes that only appear on some platforms or plans.

This page walks through the Settings window pane by pane. Each table lists the control's exact label, its options and default, and what it changes, with a link to the page that explains it in depth.

## Open Settings

Settings open in a window over the page you're on; the page stays as it was underneath.

- Press <kbd>⌘</kbd> <kbd>,</kbd> on a Mac, or <kbd>Ctrl</kbd> <kbd>,</kbd> on Windows and Linux. Settings opens at the pane you used last.
- Open the account menu at the bottom of the sidebar and select **Settings**.
- In a chat, select the sliders icon in the composer, then **Chat Settings**. This opens **This chat**.
- The account menu's **Billing** opens **Billing**, and **Developers** opens **API keys**.
- In the model picker, the **ZDR on · Some models hidden** banner's **Change** link opens **Privacy and security**.

The window is titled **Settings**, with the list of panes on the left and the open pane on the right. Panes are grouped under **Account**, **Organizations**, **Chats**, **Preferences**, **Privacy**, **Connections**, **Desktop app**, and **Developer**. On a phone the window fills the screen and shows the list or one pane at a time; **Back to settings** returns to the list.

Changes save on their own. The header shows **Saving...**, then **Saved**. If a save fails it shows **Not saved**, and hovering shows why. Close Settings with <kbd>Esc</kbd>, **Close settings**, or a click outside the window. It stays open while a change hasn't saved, so check your connection and try again. For text boxes such as **Instructions**, click outside the box to save.

## Which panes you see

| Group | Pane | Shown when |
| --- | --- | --- |
| Account | **Profile**, **Billing** | Always |
| Account | **Usage** | On a paid plan |
| Organizations | Each organization, and **New organization** | Organizations are available to you. **New organization** is hidden when an admin turns off creating organizations |
| Chats | **This chat** | When you open Settings from a chat |
| Chats | **New chats**, **Permissions**, **Personalization** | Always |
| Chats | **Voice** | Your organization allows voice calls |
| Chats | **Dictation** | Your organization allows dictation |
| Chats | **Skills** | Skills are allowed for you |
| Preferences | **Appearance** | Always |
| Preferences | **Phone and SMS** | Your organization allows text messages |
| Privacy | **Privacy and security**, **Devices** | Always |
| Connections | **Connectors** | Your organization allows connectors |
| Connections | **Chrome extension** | In the desktop app |
| Desktop app | **Desktop**, **Runtime** | In the desktop app |
| Desktop app | **Browser** | In the desktop app, when Bearly Browser is available to you |
| Desktop app | **Get desktop app** | On the web, a phone browser, or the iOS app |
| Developer | **API keys** | Your organization allows Developer API access (on unless an admin turns it off) |
| Developer | **Modules** | Your organization's policy turns on **Personal remote modules** |

There's no notifications pane and no setting for the app's display language. Reply language is under **Language** in **This chat** and **New chats**.

## Account

### Profile

| Control | What it does |
| --- | --- |
| **Version** | Shows the build you're running and when it was built |
| **Lock all data** | "Lock all password-protected notebooks. You'll need to re-enter passwords." **Lock**, then **Lock All**, relocks every password-protected project on this device. |
| **Change email** | "Move your account to a different email. We confirm both addresses, then finish the change." |
| **Delete account** | "Review what is deleted and retained, then verify this request by email." **Delete** opens the deletion steps. |
| **Log out** | "Sign out of your Bearly account." Bearly syncs your recent changes, then clears its data from this device. |

See [Delete your account](https://bearly.ai/docs/manual/privacy-and-security.md).

### Billing

Your **Current Plan** card (**Manage billing**, **Restore**, **Cancel**, or **Reactivate**), **Credit Boost** on eligible plans, and the plan picker with **Monthly** and **Yearly** (**17% off**). Seat holders also see their organization seat. See [Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md).

### Usage

Paid plans only. **Current Period** shows the percentage used, when credits reset, **Used this month**, **Monthly limit**, **Today**, and **Boost remaining**, with a **Billing** button. **Usage by service** lists each month's models and paid tools with **Service**, **Calls**, and **Cost**. See [Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md).

## Organizations

Each organization you belong to has a row here. Selecting one closes Settings and opens that organization's pages; **New organization** creates one. See [Run Bearly for an organization](https://bearly.ai/docs/manual/organizations.md).

## Chats

### This chat

"Settings for this conversation only. Changes here don't affect other chats." The rows are grouped under **Model**, **Responses**, and **Context**. A row disappears when your project or organization locks it. See [Chat settings](https://bearly.ai/docs/manual/chat/settings.md).

| Control | Options and default | What it does |
| --- | --- | --- |
| **Model** | Models available to you. Default: the chat's current model. | The model that answers in this chat. See [Models](https://bearly.ai/docs/manual/chat/models.md). |
| **Language** | **Default**, or a language such as English, English (UK & AU), French, German, Hindi, Japanese, Mandarin Chinese, Portuguese, Spanish, and more | The language replies are written in |
| **Response Style** | **Normal** (default), **Classic**, **No Style**, **Learning**, **Concise**, **Explanatory**, **Formal** | Tone and length of replies |
| **Memories** | **Off**, **Auto**. Default comes from **New chats**. | Whether the chat recalls earlier conversations |
| **Web Search** | **Off**, **Auto**. Default comes from **New chats**. | Whether the chat searches the web on its own |
| **Reasoning Effort** | **Default**, **None**, **Low**, **Medium**, **High**, **Extra High** | How much the model reasons before answering |
| **Instructions** | Free text ("Custom instructions for this chat...") | Standing directions for this chat |
| **Temperature** | **Factual** (0.5), **Default** (1), **Creative** (1.5), or a slider from 0 to 2 | How focused or varied replies are. Above 1.5: "High temperatures may produce incoherent output." |
| **Reset all to defaults** | Button. Appears once this chat has its own value for any row. | Returns this chat to your **New chats** settings, then reapplies project and organization rules |

### New chats

"These settings apply to all new chats by default." It has the same rows as **This chat**, plus **Recommended** under **Model**, which is the default and lets Bearly choose. Defaults: **Response Style** Normal, **Memories** Auto, **Web Search** Auto. In a project chat this pane reads "Default settings are not available in project chats. Use Project Settings to configure." Saved to your account. See [Projects](https://bearly.ai/docs/manual/projects.md).

### Permissions

Applies to new chats on this device.

| Control | Options and default | What it does |
| --- | --- | --- |
| **Start new chats in Full access** | Switch, off by default. This device only. | "New chats on this device use your enabled tools without asking. Not recommended unless you know what you're doing." Asks you to confirm first ("Start every new chat in Full access?"). Unavailable when your organization doesn't allow Full access. |

See [Permissions](https://bearly.ai/docs/manual/capabilities/permissions.md).

### Personalization

"Tell the AI about yourself so it can tailor responses to your needs." Saved to your account.

| Control | Options and default | What it does |
| --- | --- | --- |
| **Use in chats** | Switch, off by default | "Include your profile context in your chats." |
| **Name** | Text. | "How should the AI address you?" |
| **Occupation** | Text | "What do you do?" |
| **About you** | Text | "What should the AI know about you?" |

"This is shared with AI models in your conversations." The fields are unavailable while the switch is off. Bearly adds what you enter here to your chats only while the switch is on. See [Privacy and security controls](https://bearly.ai/docs/manual/privacy-and-security.md).

### Voice

"Voice calls use this model to listen, answer, and run actions. Calls use your plan allowance."

| Control | Options and default | What it does |
| --- | --- | --- |
| **Model** | Voice models available on your plan | The model for your next voice call ("Takes effect on your next call."). On Free it reads "Choosing a voice model needs a paid plan." |

See [Voice](https://bearly.ai/docs/manual/chat/voice.md).

### Dictation

"Click the dictation button to start or stop. You can also hold Right Shift while you speak." and "Live audio is sent through Bearly for transcription."

| Control | Options and default | What it does |
| --- | --- | --- |
| **Enable dictation** | Switch, off by default | Turns dictation on |
| **Keyboard shortcut** | Default **Right Shift** | "Hold while Bearly is focused." to dictate |
| **After dictation** | **Fill the composer** (default), **Send immediately** | Whether the transcript waits for you or sends right away |
| **Transcript cleanup** | Switch, off by default | "Fix punctuation and phrasing with a fast, low-reasoning model." |
| **Model** | Cleanup models available to you | The model that cleans up the transcript |
| **Instructions** | Free text | "Applied after transcription. The original audio is not sent." |
| **Vocabulary** | Free text | "Names, acronyms, and technical terms." to recognize |
| **Replacements** | One pair per line | "One exact spoken → written pair per line." |

If your organization blocks it, the pane reads "Your team has disabled audio transcription." See [Voice](https://bearly.ai/docs/manual/chat/voice.md).

### Skills

On the web, a phone browser, or the iOS app this pane reads "Use Skills in the desktop app" — "Skills install local files and can run approval-gated commands, so they need Bearly for desktop." with **Get Bearly**. In the desktop app, this is where you add and manage Skills. See [Connectors and Skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md).

## Preferences

### Appearance

Saved on this device only. **Theme** shows each theme as a card; **Font** and **Font size** are under **Text**.

| Control | Options and default | What it does |
| --- | --- | --- |
| **Theme** | **System** (default, follows your device's light or dark mode), **Light**, **Dark**, **Midnight**, **Dracula**, **Rose Pine**, **Synthwave**, **Nord**, **Corporate**, **Coffee**, **Talin**, **Funky** | "Choose your color scheme." In the iOS app it also switches the app between light and dark. |
| **Font** | **Bearly** (default), **System**, **Humanist**, **Neogrotesque**, **Classic**, **Industrial** | The interface font |
| **Font size** | **Small** (14px), **Standard** (16px, default), **Large** (18px), **Largest** (20px) | Text size across the app |

### Phone and SMS

| Control | What it does |
| --- | --- |
| **Set up text messages** | "Add a US or Canadian mobile number for verification codes and notifications." Shows **Not set up** until you do. |
| **Send test text** | Sends a test message to your verified number |
| **Change number** | Replaces the number |
| **Turn off text messages** | "Stops codes and notifications. Same as replying STOP." |
| **Remove phone number** | "Deletes the number from your Bearly account." |

**Verify your phone again** with **Action needed** appears when Bearly needs you to confirm the number again. See [Email and text](https://bearly.ai/docs/manual/capabilities/email-and-text.md).

## Privacy

### Privacy and security

| Control | Options and default | What it does |
| --- | --- | --- |
| **Zero Data Retention only** | Switch, off by default. Saved to your account. | Bearly shows only zero-retention models, and automatic fallbacks stay on them too. Applies to chat models. See [Zero Data Retention only](https://bearly.ai/docs/manual/chat/models.md#zero-data-retention-only). |
| **End-to-end encryption** (**Beta**) | **Set up end-to-end encryption**, or **Approve this device** on a new device | Encrypts new chats on your devices. After setup: **Encrypt all new chats with this key**, **Approved devices**, **Approve a device**, and **Recovery** (passkeys and **Replace recovery phrase**). |

**Start new chats in Full access** moved to [Permissions](#permissions). See [Privacy and security controls](https://bearly.ai/docs/manual/privacy-and-security.md).

### Devices

"Where your Bearly account is signed in. Sign out of any device you don't recognize."

| Control | What it does |
| --- | --- |
| **Sign out all other devices** | Signs out everywhere except here. API keys keep working. |
| Device rows | Name, **This device**, approximate location, last active ("Active now" within two minutes), and **Sign out** |
| **Browser extension and API keys** | "These have separate access. Remove a key to disconnect anything using it." Each key shows when it was created and last used, with **Remove**. |

The list refreshes on its own while it's open.

## Connections

### Connectors

"Chats using Full access can use connections you add or reconnect here without asking for tool approval."

| Control | What it does |
| --- | --- |
| **Your connectors** | "Connect services and MCP servers to use their tools in chats and Routines." Servers your organization supplies show "Managed by your team policy". |
| **Add custom MCP server** | Adds a server by HTTPS address, or an npm package in the desktop app |
| **Built-in connectors** | "Add a preconfigured service, then connect your account." Includes Notion, Linear, GitHub, and more, each with **Add** |

See [Connectors and Skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md).

### Chrome extension

**Control Chrome from chat**: "Use your regular Chrome tabs and signed-in sessions." Bearly can navigate, read pages, fill forms, and inspect console and network activity, asking for approval in Standard.

| Status | What it means |
| --- | --- |
| **Connected to Chrome** | The extension is ready |
| **Chrome extension not connected** | Select **Install Chrome extension**, then keep Chrome and the desktop app open |
| **Finishing secure connection…** | Wait a moment |
| **Update Bearly** | This desktop version can't manage the connection. Update the app. |
| **Disabled by your workspace** | "Your workspace policy does not allow Chrome control." |

This pane appears only in the desktop app. Chrome control connects on your computer and doesn't need the extension's own Bearly sign-in. Bearly Browser is a separate, isolated browser.

## Desktop app

**Desktop**, **Runtime**, and **Browser** appear only in the desktop app on Mac, Windows, and Linux; **Get desktop app** appears everywhere else. See [Browser and computer](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md).

### Desktop

| Control | Options and default | What it does |
| --- | --- | --- |
| **Keyboard shortcut** | Default <kbd>⌘</kbd> <kbd>Shift</kbd> <kbd>P</kbd> on a Mac, <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>P</kbd> on Windows and Linux. **Set** or **Change** records a new one, then **Save** or **Cancel**. **Disable** clears it. | "Global hotkey to summon Bearly." |
| **Always on top** | Switch | "Keep the window above other apps." |
| **Auto-hide** | Switch | "Hide when Bearly loses focus." Bring it back with your shortcut. |
| **Launch on boot** | **Enabled** or **Disabled** (default) | Starts Bearly when you sign in to your computer |
| **Latest version** | Read-only | Your installed version and whether an update is available |

### Runtime

| Control | What it does |
| --- | --- |
| **Managed runtimes** | "Desktop tools Bearly installs and verifies for local work." Each shows **Ready**, **Installing**, **Not installed**, **Error**, or **Verifying**, when it installs, and a verify button. **Refresh runtimes** checks again. |
| **Windows Computer Use helper** | Windows only. "Install the helper for reliable control of protected and background windows." Installing, updating, or removing it asks for administrator approval. |
| **Environment variables** | "Inherited by local commands, skills, video downloads, and runtime checks." **Add variable**, then **Save**, or **Reset** to discard. Values are hidden until you reveal them. Saved on this device only. |

### Browser

| Control | Options and default | What it does |
| --- | --- | --- |
| **Enable Browser** | On by default | "Keep Bearly Browser available to you and your chats. Turning it off does not delete site data." |
| **Allow chats to use Browser** | On by default | Lets chats drive Bearly Browser. In Standard, Bearly asks before new sites. In Full access it doesn't. |
| **Block ads and trackers** | On by default | Blocks ads and trackers in Bearly Browser |
| **Import browser cookies** | Choose a **Browser profile** | "Bring current site sign-ins from Chrome or Edge into Bearly Browser. Cookies only—never passwords, history, bookmarks, or autofill." |
| **Reset open tabs** | Button | "Close tabs and clear workspace history and approvals. Site sign-ins remain." |
| **Delete browser data** | Button | "Delete cookies, cache, and local site storage for this Bearly account on this device." |

### Get desktop app

**Get Bearly for desktop**, with **Download for macOS**, **Windows**, or **Linux** for the computer you're on and **Other platforms**. On a phone or the iOS app it lists the computers to choose from. Downloads open in your browser. This pane doesn't appear inside the desktop app. See [Get Bearly](https://bearly.ai/docs/manual/get-bearly.md).

## Developer

### API keys

| Control | What it does |
| --- | --- |
| **Create API key** | Opens a form with a required **Note** (up to 50 characters, such as "Production App"), then **Create** |
| Key rows | Show or hide the key, **Copy**, and **Delete** |

"Keep your API keys secure. Never share them publicly." A key acts as your account until you delete it here or remove it under **Devices**. See [API and agents](https://bearly.ai/docs/manual/api-and-agents.md).

### Modules

Appears only when your organization's policy turns on **Personal remote modules**. **Add Module** takes an **Endpoint** (http or https), a **Module Name**, and a **Secret Key**. Connected modules show **CONNECTED** and **Remove**. "Only add modules from trusted sources."

## Settings that live elsewhere

| Setting | Where |
| --- | --- |
| Web, Scholar, Style, Reasoning, Memories, History for one chat | The sliders icon beside the composer. See [Chat settings](https://bearly.ai/docs/manual/chat/settings.md). |
| **Permissions** (Standard or Full access) for one chat | **Permissions** at the foot of the composer. See [Permissions](https://bearly.ai/docs/manual/capabilities/permissions.md). |
| Project defaults and skills | The project's **Settings** tab. Sharing and passwords are on its **Sharing** tab, and folder sync on its **Files** tab. See [Projects](https://bearly.ai/docs/manual/projects.md). |
| Organization members, policies, seats | Account menu → **Organizations**, or the organization's row in Settings. See [Run Bearly for an organization](https://bearly.ai/docs/manual/organizations.md). |

> **Note — Where settings are saved**
> **Appearance**, **Start new chats in Full access**, and the desktop panes are saved on each device. **New chats**, **Personalization**, **Voice**, **Dictation**, and **Zero Data Retention only** are saved to your account and follow you to every device.

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Privacy and security controls](https://bearly.ai/docs/manual/privacy-and-security.md)
- [Next: Guide for AI assistants](https://bearly.ai/docs/manual/for-ai-assistants.md)
- [Related: Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md)
- [Related: Run Bearly for an organization](https://bearly.ai/docs/manual/organizations.md)
- [Related: Tune a chat: settings, style, reasoning, and memory](https://bearly.ai/docs/manual/chat/settings.md)
- [Related: Choose and compare models](https://bearly.ai/docs/manual/chat/models.md)
