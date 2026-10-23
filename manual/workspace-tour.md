---
title: "Tour the workspace"
description: "A map of Bearly's screens and where each control lives — the sidebar and account menu, the New Chat launcher, the chat header, thread, composer, and context strip, the command menu, the Settings window, the other pages, and what changes in the desktop app, on phones, and in the iOS app."
canonical: "https://bearly.ai/docs/manual/workspace-tour/"
markdown: "https://bearly.ai/docs/manual/workspace-tour.md"
---

# Tour the workspace

HTML: [https://bearly.ai/docs/manual/workspace-tour/](https://bearly.ai/docs/manual/workspace-tour/)

> A map of Bearly's screens and where each control lives — the sidebar and account menu, the New Chat launcher, the chat header, thread, composer, and context strip, the command menu, the Settings window, the other pages, and what changes in the desktop app, on phones, and in the iOS app.

The web app, a phone browser, the desktop app, and the iOS app all run the same Bearly app, so the screens on this page look alike everywhere. Each area below names its controls as the app shows them and links to the page that covers it in depth. The browser extension is separate: it has its own side panel for quick page actions, covered in [Get Bearly](https://bearly.ai/docs/manual/get-bearly.md).

## The sidebar

The column on the left holds navigation, your projects, and your chats. In a narrow window or on a phone it becomes a drawer: tap **Open sidebar** to show it, and picking an item closes it again.

From top to bottom:

| Area | What it does | More |
|---|---|---|
| **Chat** | Your chats | [Organize chats](https://bearly.ai/docs/manual/chat/organize.md) |
| **Prompt Templates** | Saved prompts with fill-in fields that run as a form in any chat | [Write, attach, and send](https://bearly.ai/docs/manual/chat/compose.md) |
| **Routines** | Prompts that run on a schedule. Pro and higher; on Free it shows only if you already have routines | [Routines](https://bearly.ai/docs/manual/capabilities/routines.md) |
| **Meetings and Recordings** | Record a meeting or a voice note and get a transcript | [Meetings](https://bearly.ai/docs/manual/capabilities/meetings.md) |
| Magnifier (**Search conversations**) | Opens **Search chats and files...**, with **Chats** and **Files** tabs. Shortcut <kbd>⌘</kbd> <kbd>F</kbd> (<kbd>Ctrl</kbd> <kbd>F</kbd> on Windows and Linux) | [Organize chats](https://bearly.ai/docs/manual/chat/organize.md) |
| **New Chat** | Opens the New Chat launcher, outside any project | [The New Chat launcher](#the-new-chat-launcher) |
| **Needs attention** | Appears with a count when other chats are waiting for an approval or have replies you haven't read. Select it to see **Awaiting approval** and **Unread**; select it again to show all chats | [Organize chats](https://bearly.ai/docs/manual/chat/organize.md) |
| **Projects** | Your projects. The header has **Collapse all projects** and **New project**; each project opens to **Settings**, **Docs & Data**, a button to start a chat, and its chats | [Projects](https://bearly.ai/docs/manual/projects.md) |
| **Pinned** | Chats you pinned | [Organize chats](https://bearly.ai/docs/manual/chat/organize.md) |
| Date groups | Every other chat by last activity: **Today**, **This Week**, **This Month**, then each earlier month of this year, then earlier years | [Organize chats](https://bearly.ai/docs/manual/chat/organize.md) |
| **Archives** | Shows how many chats you've archived and opens the archive list | [Organize chats](https://bearly.ai/docs/manual/chat/organize.md) |
| Account menu | The bottom row, with your email, plan badge, and usage meter | [The account menu](#the-account-menu) |

**Signs on a chat row.** An accent bar on the left means unread. A spinner means Bearly is working. A shield means the chat is waiting for your approval. A lock reads "Approve this device to open this chat": it's an end-to-end encrypted chat this device can't open yet.

**More actions** (the **…** on a chat row, shown on hover, and always on touch screens and for the open chat) offers **Rename**, **Pin** or **Unpin**, **Move to project...**, **Archive** or **Unarchive**, **Mark unread** or **Mark read**, **Delete**, and **Select** for choosing several chats at once. With a mouse, you can also drag a chat onto a project to move it there.

### The account menu

Select the bottom row of the sidebar. The row shows your email, your plan, and a usage meter with a percentage, plus "+boost" while a Credit Boost is active.

- **App Settings** opens the Settings window where you left it.
- **Billing & Pro** opens **Settings** → **Billing**.
- **Developers** opens **Settings** → **API Keys**. It appears when API keys or personal remote modules are allowed for your account.
- **Organizations** opens the organizations console.
- **Follow us on X**, **Give Feedback**, and **Logout**.

On the Free plan, an **Unlock more AI — Go Pro** banner in the sidebar opens **Billing**. See [Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md).

## The New Chat launcher

The launcher is the screen a new chat opens on. Get there with **New Chat** in the sidebar, <kbd>⌘</kbd> <kbd>N</kbd> (<kbd>Ctrl</kbd> <kbd>N</kbd> on Windows and Linux), or **New** in the command menu. From inside a project chat, the shortcut and **New** start the new chat in the same project; the sidebar button starts it outside any project.

- **Headline.** A short line at the top that changes with the date and the time of day. The default is "Ready when you are."
- **Composer.** The same composer as in a chat, with the cursor already in it. Its placeholder rotates; the default is "How can I help today?" If the chat can't be prepared, your draft stays put and a notice offers **Try again**.
- **Project chip.** "Start this chat in a project" opens a picker with "Find or create a project...", **Recent**, **All projects**, **New project**, and **No project**. The chip then reads "Starting in project" with the project's name. The project is fixed once the chat starts.
- **Encryption.** Before you set up end-to-end encryption, a dismissible "Set up end-to-end encryption" prompt sits under the composer. After setup, a lock in the strip switches this draft between end-to-end and standard encryption. It can't change while the draft has attachments. See [Privacy and security](https://bearly.ai/docs/manual/privacy-and-security.md).
- **Work locally.** In the desktop app, the chip shows but stays disabled until the chat loads ("Available once the chat loads").
- **Tips.** Short notes appear under the composer, labeled **Tip**, **Note**, **What's new**, or **Required**, and you get at most one tip a day. Dismissing one hides tips for the rest of the day on all your devices. A **Required** notice blocks sending until you select **Acknowledge**.

When a release newer than the last one you saw on this device is out, **What's New** opens on its own, with **Highlights**, **Also new**, and **Fixes & improvements**. To open it yourself, use the command menu → **Show all...** → **Show Release Notes**.

## The chat screen

### Header

From left to right:

- **Project and title.** In a project chat, the project's name comes first. Select the title to rename the chat: <kbd>Enter</kbd> saves, <kbd>Esc</kbd> reverts.
- **Browse files.** Appears once the chat has files. It opens a drawer with **Project**, **Uploaded**, and **Generated** tabs. See [Documents](https://bearly.ai/docs/manual/capabilities/documents.md).
- **New chat.** A pen icon, shown only while the sidebar is closed.
- **Share.** Turns the substance of the conversation into a Page you review before publishing. See [Pages and Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md).
- **Open Browser.** In the desktop app, a globe that opens Bearly Browser. See [Browser and computer use](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md).
- **…** opens the command menu. See [The command menu](#the-command-menu).

### Thread

- **Messages.** Your messages and Bearly's answers. Controls sit under each one: they appear on hover with a mouse and stay visible on touch screens and in narrow windows. Under your messages: **Copy**, **Edit Query**, **Rerun with same model**, the **Rerun** model menu, a version switcher such as ‹ 2 / 3 ›, **Query info**, and **Delete Query**. Answers have most of the same, plus **Read aloud** on text-only answers and **Edit in Canvas**. See [Work with answers](https://bearly.ai/docs/manual/chat/answers.md).
- **Thinking.** A model's reasoning, folded into collapsible **Thinking** steps.
- **Tool steps.** Each tool Bearly uses shows as a collapsible row with **Input**, **Result**, and, if something failed, **Error**.
- **Approval cards.** When a tool needs your OK, a card shows what it wants to do, with **Deny**, **Allow**, and an **Approval duration** choice. See [Permissions](https://bearly.ai/docs/manual/capabilities/permissions.md).
- **Result cards.** Interactive results such as a Deep Research report, a **Chart**, a YouTube video card, or the image editor.
- **Timeline rail.** In windows at least 1,280 pixels wide, chats with 5 or more prompts get a slim rail of ticks on the right edge, one per prompt. Hover a tick for "Prompt N of M" and a preview; select it to jump. Ticks marked **Chapter** label a stretch of the conversation. <kbd>⌘</kbd> <kbd>Shift</kbd> <kbd>↑</kbd> and <kbd>⌘</kbd> <kbd>Shift</kbd> <kbd>↓</kbd> (<kbd>Ctrl</kbd> on Windows and Linux) jump between prompts.
- **Scroll to bottom.** A button that appears when you've scrolled up.

### Composer

The message box at the bottom. Its placeholder reads "How can I help? Type / or @ for tools". See [Write, attach, and send](https://bearly.ai/docs/manual/chat/compose.md).

- **Up next.** Above the box, messages you queued while Bearly was working.
- **Left of the toolbar:** **+** (**Attach files** and **Share your screen**); **Take photo** on touch screens; the sliders button, which opens this chat's **Web**, **Style**, **Scholar**, **Reasoning**, **Memories**, and **History** settings plus **Chat Settings**. See [Tune a chat](https://bearly.ai/docs/manual/chat/settings.md).
- **Right of the toolbar:** the model button (**Select model**), which shows the current model's short name; **Start voice call**, with a sound-wave icon; and the send button, which reads **Send message**, **Queue message** while Bearly works and you have a draft, or **Stop** while Bearly works and the box is empty. See [Choose and compare models](https://bearly.ai/docs/manual/chat/models.md) and [Voice](https://bearly.ai/docs/manual/chat/voice.md).
- **Top right of the box:** the dictation microphone. See [Voice](https://bearly.ai/docs/manual/chat/voice.md).

### Context strip

A row of chips under the message box:

- **Project.** The chat's project, if it has one.
- **Encryption lock.** "End-to-end encrypted" or "Standard encryption". If your organization requires device-only encryption, it reads "Local key encryption" and can't be turned off.
- **Work locally.** Desktop app only. It shows the working folder's name, or "Work locally" with "· Off". Its menu lists recent folders, **Choose folder…**, **Clear folder**, and **Off for this chat** or **Turn on for this chat**. In the web app it opens the desktop download pane; on phones and in the iOS app it's hidden. See [Browser and computer use](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md).
- **Connectors.** The connected service's name, or a count such as "2 connectors". Each row reads **Active**, **Off**, **Connect**, or **Retry**, and **Manage connectors...** opens settings. See [Connectors and skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md).
- **Permissions.** Reads **Permissions**, or **Full access** while Full access is on, with a **Paused** badge if it's paused. It opens **Standard** and **Full access**, your saved approvals with **Revoke**, **Revoke all saved approvals**, and **Clear all permissions**. See [Permissions](https://bearly.ai/docs/manual/capabilities/permissions.md).

While you edit an earlier message, the strip shows **Editing message** with **Cancel**. While Computer Use works in the desktop app, a **Computer** chip shows its status and a **Stop** action.

### The command menu

Press <kbd>⌘</kbd> <kbd>K</kbd> (<kbd>Ctrl</kbd> <kbd>K</kbd> on Windows and Linux) or select **…** in the header. It shows the chat's title, a **Search...** box, and two groups:

- **Actions:** **New**, **Delete & New**, **Delete**, **Rename**, **Refresh Chat**, **Generate New Name**, **Download as Markdown**, **New Routine** (Pro and higher), and **Show all...**, which adds **Show Release Notes**.
- **Switch Chats:** every chat, including project chats.

See [Keyboard shortcuts](https://bearly.ai/docs/manual/chat/shortcuts.md).

## The Settings window

Open it with <kbd>⌘</kbd> <kbd>,</kbd> (<kbd>Ctrl</kbd> <kbd>,</kbd> on Windows and Linux), the account menu → **App Settings**, or the sliders button → **Chat Settings**. It opens on the pane you used last. The header shows **Saving...**, **Saved**, or **Not saved**; if a save fails, the window stays open showing **Not saved**. In a narrow window, a dropdown at the top replaces the list of panes.

| Section | Panes | When a pane shows |
|---|---|---|
| **Chats** | **This Chat**, **New Chats**, **Personalization**, **Voice**, **Dictation** | In a chat. **Voice** and **Dictation** need those features allowed for your account |
| **Settings** | **Appearance**, **Get Desktop App**, **Skills**, **Connectors**, **Privacy & Security**, **Billing**, **Usage**, **Phone & SMS**, **Account**, **Devices** | **Get Desktop App** is hidden inside the desktop app. **Usage** is on paid plans. **Connectors** and **Phone & SMS** need those features allowed |
| **Desktop** | **Desktop**, **Browser**, **Runtime**, **Chrome Extension** | Desktop app only. **Browser** appears when Bearly Browser is available to your account |
| **Developer** | **API Keys**, **Modules** | **API Keys** when developer API access is allowed, which it is by default. **Modules** only when an organization admin allows personal remote modules |

What each pane holds:

- **This Chat**: settings for this conversation only: **Model**, **Language**, **Response Style**, **Memories**, **Web Search**, **Reasoning Effort**, **Instructions**, **Temperature**, and **Reset all to defaults**.
- **New Chats**: the same settings as defaults for new chats, with **Recommended** as a model choice. Project chats use the project's settings instead.
- **Personalization**: what you write in **Name**, **Occupation**, and **About you**, added to your chats only while the switch is on. See [Personalization](https://bearly.ai/docs/manual/chat/settings.md#personalization).
- **Voice**: the model voice calls use. **Dictation**: **Enable dictation**, the push-to-talk shortcut, what happens after dictation, transcript cleanup, and words and names.
- **Appearance**: **Theme**, **Font**, and **Font size**, for this device only.
- **Get Desktop App**: downloads for Mac, Windows, and Linux.
- **Skills**: the **Skill Store** and your installed skills. Installing needs the desktop app.
- **Connectors**: **Your connectors**, **Built-in connectors**, and **Add custom MCP server**.
- **Privacy & Security**: **Zero Data Retention only**, **End-to-end encryption**, and **Start new chats in Full access**, among others.
- **Billing**: **Current Plan**, **Credit Boost**, and the plan picker. **Usage**: **Current Period** and **Usage by service**.
- **Phone & SMS**: add and verify a US or Canadian mobile number for texts and codes, or turn texts off.
- **Account**: **Version**, **Lock all data**, **Delete account**, and **Log out**.
- **Devices**: where you're signed in, **Sign out all other devices**, and **Browser extension and API keys**.
- **Desktop**: **Keyboard shortcut**, **Always on top**, **Auto-hide**, **Launch on boot**, and **Latest version**.
- **Browser**: **Enable Browser**, **Allow chats to use Browser**, **Block ads and trackers**, **Import browser cookies**, **Reset open tabs**, and **Delete browser data**.
- **Runtime**: tools the desktop app installs for local work, the Windows Computer Use helper, and environment variables for local commands.
- **Chrome Extension**: **Control Chrome from chat** and the connection status.
- **API Keys**: keys for calling Bearly models from your own code. **Modules**: remote modules that add tools from your own server.

Every setting, with its options and defaults, is in the [Settings reference](https://bearly.ai/docs/manual/settings-reference.md).

## Other pages

- **Prompt Templates.** Make your first with **Create Prompt Template**, or later with **New Prompt**, which opens the **AI Prompt Builder** with **Popular Ideas**. The editor has **Basic Information**, **Template Design**, and **Field Configuration**; your list is **My Prompts**.
- **Routines.** A **Create a routine** box where you describe the result and the timing, then **Draft routine**; **Start from scratch** for a blank editor; your routines with their badges; and a **Next seven days** strip. See [Routines](https://bearly.ai/docs/manual/capabilities/routines.md).
- **Meetings and Recordings.** Source cards for **Online meeting** (desktop app) and **In person or voice note**, **Start recording**, and your recordings with their transcripts. See [Meetings](https://bearly.ai/docs/manual/capabilities/meetings.md).
- **Project Settings and Docs & Data.** Open from a project in the sidebar. Settings covers sharing, encryption, the project's chat settings, skills, and, in the desktop app, **Local Directory Sync**. Docs & Data holds the project's files. See [Projects](https://bearly.ai/docs/manual/projects.md).
- **Organizations.** The account menu → **Organizations**. Everyone sees **Overview**, **Members**, and **Groups**. Admins also see **Policies**, **Projects**, and **Activity**, plus **Billing** and **Usage** where they apply. See [Organizations](https://bearly.ai/docs/manual/organizations.md).

## In the desktop app

The desktop app for Mac, Windows, and Linux has the same screens plus a few of its own:

- **Summon Bearly from anywhere** with <kbd>⌘</kbd> <kbd>Shift</kbd> <kbd>P</kbd> (<kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>P</kbd> on Windows and Linux). Change it in **Settings** → **Desktop** → **Keyboard shortcut**.
- **The menu bar or tray icon** shows the window when you click it.
- **Closing the window quits Bearly** after asking **Quit Bearly?**. While it's recording a meeting or saving a Browser download to a chat, it asks **Bearly is still working** instead, with **Keep Bearly open** and **Quit when finished**.
- **Updates** download in the background; an **Update ready · Restart** pill at the top installs them.
- **Desktop-only areas**: the **Work locally** chip, **Open Browser**, the **Desktop** settings section, and running routines.

See [Get Bearly](https://bearly.ai/docs/manual/get-bearly.md).

## On phones and in the iOS app

There's no Android app; on Android, use Bearly in your phone's browser. Bearly runs on Mac, Windows, Linux, iOS, web, and Chrome. On a phone-sized screen, Bearly tells the AI you're on a phone and asks it to keep answers brief and prefer lists over tables.

| Area | Phone browser | iOS app |
|---|---|---|
| Sidebar | A drawer: tap **Open sidebar** | Same |
| Sending | <kbd>Enter</kbd> adds a new line; tap the send button | Same |
| Photos | **Take photo** camera button in the toolbar | Same; opens the rear camera |
| Message controls | Always visible | Same |
| Moving chats | No dragging; use **More actions** → **Move to project...** | Same |
| Timeline rail | Not shown | Not shown |
| Context strip | Shown under the message box | **Permissions** moves to the send row; the strip appears only while you edit a message |
| **Work locally** | Hidden | Hidden |
| Sign-in | All sign-in options | Email code only |
| Connectors that need a service sign-in | Work in a normal phone browser, but not in an Android app's built-in browser | Show **Web browser required**; set them up in a browser |
| Desktop-only features | A prompt to use Bearly on a computer | Same |
| Routines | Create and manage; they run in the desktop app ("Runs in the desktop app. **Get it**") | Same |
| Meetings | **In person or voice note** only | Same |
| Voice calls | Where the browser supports them; the screen can lock mid-call | The screen stays on during a call; keep the app in front |
| PDFs | Preview in the app | **Open PDF** opens them outside the app |
| Downloads | A normal browser download | The iOS share sheet |
| Billing | Web billing | App Store purchase and **Restore**; Credit Boost isn't offered in the iOS app |
| **Get Desktop App** | **Choose a computer** | Same |

The iOS app has no share extension, widgets, or push notifications. Most Bearly updates reach the iOS app without an App Store update, because the app loads the live Bearly app; changes to the app's own features, such as purchases, need a new App Store version.

## Related

- [What Bearly is](https://bearly.ai/docs/manual/what-is-bearly.md)
- [Get Bearly](https://bearly.ai/docs/manual/get-bearly.md)
- [Keyboard shortcuts](https://bearly.ai/docs/manual/chat/shortcuts.md)
- [Settings reference](https://bearly.ai/docs/manual/settings-reference.md)
- [Fix common problems](https://bearly.ai/docs/manual/troubleshooting.md)

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md)
- [Next: Write, attach, and send](https://bearly.ai/docs/manual/chat/compose.md)
- [Related: Get Bearly on every device](https://bearly.ai/docs/manual/get-bearly.md)
- [Related: Organize, find, share, and export chats](https://bearly.ai/docs/manual/chat/organize.md)
- [Related: Automate with Routines](https://bearly.ai/docs/manual/capabilities/routines.md)
- [Related: Record and use meetings](https://bearly.ai/docs/manual/capabilities/meetings.md)
