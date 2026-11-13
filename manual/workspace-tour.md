---
title: "Tour the workspace"
description: "A map of Bearly's screens and where each control lives — the sidebar and account menu, the New Chat launcher, the chat's title menu and Share button, thread, side panel, composer, and context strip, the command menu, the Settings window, the other pages, and what changes in the desktop app, on phones, and in the iOS app."
canonical: "https://bearly.ai/docs/manual/workspace-tour/"
markdown: "https://bearly.ai/docs/manual/workspace-tour.md"
---

# Tour the workspace

HTML: [https://bearly.ai/docs/manual/workspace-tour/](https://bearly.ai/docs/manual/workspace-tour/)

> A map of Bearly's screens and where each control lives — the sidebar and account menu, the New Chat launcher, the chat's title menu and Share button, thread, side panel, composer, and context strip, the command menu, the Settings window, the other pages, and what changes in the desktop app, on phones, and in the iOS app.

The web app, a phone browser, the desktop app, and the iOS app all run the same Bearly app, so the screens on this page look alike everywhere. Each area below names its controls as the app shows them and links to the page that covers it in depth. The browser extension is separate: it has its own side panel for quick page actions, covered in [Get Bearly](https://bearly.ai/docs/manual/get-bearly.md).

## The sidebar

The column on the left holds navigation, your projects, and your chats. Hide or show it with the sidebar button at the top left, or with <kbd>⌘</kbd> <kbd>\\</kbd> (<kbd>Ctrl</kbd> <kbd>\\</kbd> on Windows and Linux), which works even while you type. In a narrow window or on a phone it becomes a drawer: tap **Show sidebar** to open it. Picking a row, tapping outside it, pressing <kbd>Esc</kbd>, or opening another page closes it.

From top to bottom:

| Area | What it does | More |
|---|---|---|
| Top row | **Hide sidebar**, then a magnifier (**Search chats**, which opens **Search chats and files**, with **Chats** and **Files** tabs) and **New chat**, which opens the New Chat launcher outside any project. On a project's page and on **Routines**, **Prompt templates**, and **Meetings**, <kbd>⌘</kbd> <kbd>F</kbd> (<kbd>Ctrl</kbd> <kbd>F</kbd> on Windows and Linux) opens search too | [Organize chats](https://bearly.ai/docs/manual/chat/organize.md) |
| **Encrypted chats locked** | Appears when this device can't open your end-to-end encrypted chats yet. **Approve** starts device approval | [Privacy and security](https://bearly.ai/docs/manual/privacy-and-security.md) |
| **Chat** | Opens the New Chat launcher, as **New chat** in the top row does | [The New Chat launcher](#the-new-chat-launcher) |
| **Prompt templates** | Saved prompts with fill-in fields that run as a form in any chat | [Make a prompt template](https://bearly.ai/docs/manual/chat/compose.md#make-a-prompt-template) |
| **Routines** | Prompts that run on a schedule. Pro and higher; on Free it shows only if you already have routines | [Routines](https://bearly.ai/docs/manual/capabilities/routines.md) |
| **Meetings** | Record a meeting or a voice note and get a transcript | [Meetings](https://bearly.ai/docs/manual/capabilities/meetings.md) |
| **Needs attention** | Appears, with its title in orange and a count, when chats are waiting for your approval or have a reply you haven't read, from any project. Opening a chat takes it off the list | [Organize chats](https://bearly.ai/docs/manual/chat/organize.md#needs-attention) |
| **Pinned** | Chats and projects you pinned, from anywhere | [Organize chats](https://bearly.ai/docs/manual/chat/organize.md#pin-chats-and-projects) |
| **Projects** | Your folders of projects, by name, then your other projects, one row each. The header has **New project**, and **Collapse all projects** once any project is expanded. Select a project to open its page; the arrow at the end of its row shows or hides its chats | [Projects](https://bearly.ai/docs/manual/projects.md) |
| Date groups | Every other chat by last activity: **Today**, **This week**, **This month**, then each earlier month of this year, then earlier years | [Organize chats](https://bearly.ai/docs/manual/chat/organize.md) |
| **Archives** | Near the bottom, once you've archived something. Shows how many chats you've archived and opens the archive list | [Organize chats](https://bearly.ai/docs/manual/chat/organize.md) |
| Account menu | The bottom row, with your email, your plan, and the percentage of your allowance used | [The account menu](#the-account-menu) |

**Folding sections.** Select a section's header (**Needs attention**, **Pinned**, **Projects**, or a date group) to fold it, or a folder's row to fold that folder. A folded section shows one row saying what it holds, such as "4 projects" or "2 chats", with a mark if a chat in it is unread, working, or waiting for approval. Bearly remembers which sections you folded on this device. Creating a project unfolds **Projects**.

**Signs on a chat row.** A dot at the end of the row means unread. A spinner means Bearly is working. A shield means the chat is waiting for your approval. A lock reads "Approve this device to open this chat": it's an end-to-end encrypted chat this device can't open yet. A people icon after a project's name means it's shared; hover it to see with how many people.

**More actions** (the **…** on a chat row, shown when you point at the row or tab to it, and always on touch screens) offers **Rename**, **Pin** or **Unpin**, **Move to project...**, **Archive** or **Unarchive**, **Mark unread** or **Mark read**, **Delete**, and **Select** for choosing several chats at once. A project's **…** offers **Pin** or **Unpin**, **Move to folder**, **Rename**, **Archive**, and **Delete**; a folder's **…** offers **Rename** and **Remove folder**. With a mouse, you can also drag a chat onto a project to move it there.

### The account menu

Select the bottom row of the sidebar. The row shows your email, your plan, and how much of this month's plan you've used, plus "+boost" while a Credit Boost is active. The percentage turns red from 90%.

- **Settings** opens the Settings window where you left it (on a phone, at the list of panes).
- **Billing** opens **Settings** → **Billing**.
- **Developers** opens **Settings** → **API keys**. It appears when API keys or personal remote modules are allowed for your account.
- **Organizations** opens your organizations' pages. Your organizations are also listed in Settings, under **Organizations**.
- **Follow us on X**, **Give feedback**, and **Log out**.

On the Free plan, an **Unlock more AI — Go Pro** link above the account row opens **Billing**. See [Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md).

## The New Chat launcher

The launcher is the screen a new chat opens on. Get there with **New chat** or **Chat** in the sidebar, <kbd>⌘</kbd> <kbd>N</kbd> (<kbd>Ctrl</kbd> <kbd>N</kbd> on Windows and Linux), or **New** in the command menu. From inside a project chat, the shortcut and **New** start the new chat in the same project, and the shortcut does the same on a project's page; the sidebar buttons start it outside any project.

- **Headline.** A short line at the top that changes with the date and the time of day. The default is "Ready when you are."
- **Composer.** The same composer as in a chat, with the cursor already in it. Its placeholder rotates; the default is "How can I help today?" If the chat can't be prepared, your draft stays put and a notice offers **Try again**.
- **Project chip.** In the context strip at the foot of the composer, it reads **No project** (tooltip "Start this chat in a project") or the project's name. It opens a picker with "Find or create a project...", **Recent**, **All projects**, **New project**, and **No project**. The project is fixed once the chat starts.
- **Encryption.** One quiet line under the composer says how this chat will be encrypted, with one action. It never stops you sending: a chat that can't be end-to-end encrypted on this device starts with standard encryption instead.
  - Before you set up end-to-end encryption: **Set up end-to-end encryption**, marked **Beta**. Dismissing it asks **Hide encryption setup?**; you can set it up later in **Settings** → **Privacy and security**.
  - When this device hasn't been approved yet: "Encrypted chats are locked on this device" with **Approve**.
  - When this draft is set to end-to-end encryption but this device can't encrypt it yet: "Approve this device to send this chat end-to-end encrypted." (or "Finish setup to send…") with **Use standard encryption**. The send button reads **Approve this device to send** until you approve the device or switch.
  - When Bearly couldn't check your encryption settings in time: "This chat uses standard encryption." with **Turn on end-to-end encryption**.
  - After setup, the lock in the context strip switches this draft between end-to-end and standard encryption. It can't change while the draft has attachments. See [Privacy and security](https://bearly.ai/docs/manual/privacy-and-security.md).
- **Strip controls.** While the chat prepares, the context strip shows **Work locally**, **Permissions**, and **Connectors**; they work once the chat has loaded.
- **Tips.** Short notes appear under the composer, labeled **Tip**, **Note**, **What's new**, or **Required**, and you get at most one tip a day. Dismissing one hides tips for the rest of the day on all your devices. A **Required** notice blocks sending until you select **Acknowledge**.

When a release newer than the last one you saw on this device is out, **What's New** opens on its own in the bottom-right corner of the window, with **Highlights**, **Also new**, and **Fixes & improvements**. To open it yourself, use the command menu → **Show all...** → **Show Release Notes**.

## The chat screen

### Title menu and Share

The chat's title sits at the top center, and the thread scrolls up behind it. In a project chat, the project's name comes first. Select the title to open the chat's menu:

- **Rename.** Turns the title into a text box: <kbd>Enter</kbd> saves, <kbd>Esc</kbd> reverts.
- **Open** plus the project's name, in a project chat. Opens the project's page. See [Projects](https://bearly.ai/docs/manual/projects.md).
- **Files.** Appears once the chat has files, with their count. It opens the side panel on **Files**; while that tab is showing, it reads **Hide files** and closes the panel. See [The side panel](#the-side-panel).
- **Open Browser.** In the desktop app, opens Bearly Browser. When agents have tabs open, it shows how many, and how many are working. It's hidden while Browser is open. See [Browser and computer use](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md).
- **New chat** (<kbd>⌘</kbd> <kbd>⇧</kbd> <kbd>N</kbd>, or <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>N</kbd> on Windows and Linux). Starts a new chat, in the same project when you're in a project chat.
- **All commands** (<kbd>⌘</kbd> <kbd>K</kbd>, or <kbd>Ctrl</kbd> <kbd>K</kbd>). Opens the command menu. See [The command menu](#the-command-menu).

**Share**, the round button in the top-right corner, turns the substance of the conversation into a Page you review before publishing. See [Pages and Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md).

### Thread

- **Messages.** Your messages and Bearly's answers. Controls sit under each one: they appear on hover with a mouse and stay visible on touch screens and in narrow windows. Under your messages: **Copy**, **Edit Query**, **Rerun with same model**, the **Rerun** model menu, a version switcher such as ‹ 2 / 3 ›, **Query info**, and **Delete Query**. Answers have most of the same, plus **Read aloud** on text-only answers and **Edit in Canvas**. While an answer is still running, its controls stay hidden. See [Work with answers](https://bearly.ai/docs/manual/chat/answers.md).
- **Photos.** Several photos sent together show as one stack, the first on top with a count. Select it to open the image viewer, which fills the window: step through the chat's images with the arrows, keys, swipes, or the thumbnail strip, zoom, copy, download, or close.
- **What Bearly is doing.** While an answer runs, one line under it names the current step: "Thinking", what a tool is doing (such as "Checking current prices…"), or "Waiting for your approval". A timer appears once a step passes 10 seconds, and the line hides while the answer's text streams in. When the answer ends, the line becomes a summary such as "Worked 28s · 4 steps", with "1 step failed" if one did; in most chats it also counts the sources Bearly read. Select either to open the answer's **Steps** tab in the side panel, where a running step has a square **Stop**.
- **Approval cards.** When a tool needs your OK, a card shows what it wants to do, with **Deny**, **Allow**, and an **Approval duration** choice. In most chats you can answer it from any of your devices; in a shared chat, only the person who sent the message can, and everyone else sees "Waiting for the person who sent this message". See [Permissions](https://bearly.ai/docs/manual/capabilities/permissions.md).
- **Result cards.** Interactive results such as a Deep Research report, a **Chart**, a YouTube video card, or the image editor. Research results such as sources start folded to one line; select them to expand.
- **Timeline rail.** In windows at least 1,280 pixels wide, chats with 5 or more prompts get a slim rail of ticks on the right edge, one per prompt. Hover a tick for "Prompt N of M" and a preview; select it to jump. Ticks marked **Chapter** label a stretch of the conversation. <kbd>⌘</kbd> <kbd>Shift</kbd> <kbd>↑</kbd> and <kbd>⌘</kbd> <kbd>Shift</kbd> <kbd>↓</kbd> (<kbd>Ctrl</kbd> on Windows and Linux) jump between prompts.
- **Scroll to bottom.** A button that appears when you've scrolled up.
- **Running on another device** or **Stopped responding.** In most chats, if a running answer gets no updates for 2 minutes, a notice above the composer says so, with **Stop**.

### The side panel

Files, file previews, Canvas, and an answer's steps open as tabs in one panel to the right of the chat. Drag its edge to resize it (double-click the edge to reset), and close it with <kbd>Esc</kbd> or **Close panel** at its top right; each tab also has its own close button. In windows narrower than 900 pixels the panel covers the chat. On a phone it's a full-screen sheet: **‹ Chat** goes back, and the count at the top lists the open items.

- **Files.** Every file in the chat, newest first and grouped by day, with **Search files** and **All**, **Uploaded**, **Generated**, and **Project** filters, each with a count. Photos and PDFs show thumbnails, Canvas documents are listed too, and each file has **Jump to message**. Opening a photo opens the image viewer on every image in the chat.
- **A file or Canvas.** Opens as its own tab. See [Documents](https://bearly.ai/docs/manual/capabilities/documents.md) and [Pages and Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md).
- **Steps.** Every step of one answer, live while it runs: thinking, each tool call with its **Input**, **Result**, and, if something failed, **Error**, and how long each took. A running tool call has a stop button. Messages you sent into the running answer appear in order; **Jump to your message** scrolls the chat back to one.

Photos and screenshots you upload with a generic name, such as image.png, are renamed by when you took them, like "Photo Nov 2, 3:13 PM.jpg" or "Screenshot Nov 2, 3:13 PM.png".

### Composer

The message box at the bottom. Its placeholder reads "How can I help? Type / or @ for tools". See [Write, attach, and send](https://bearly.ai/docs/manual/chat/compose.md).

- **Up next.** Above the box, messages waiting to send after the current answer.
- **Left of the toolbar:** **+** (**Attach files** and **Share your screen**); **Take photo** on touch screens; the sliders button, which opens this chat's **Web**, **Style**, **Scholar**, **Reasoning**, **Memories**, and **History** settings plus **Chat Settings**. See [Tune a chat](https://bearly.ai/docs/manual/chat/settings.md).
- **Right of the toolbar:** the model button (**Select model**), which shows the current model's short name; **Start voice call**, with a sound-wave icon; and the send buttons. With nothing running there's one: **Send**. While Bearly works, an empty box shows **Stop**; once you type, you get **Stop**, **Queue**, and **Send**: **Send** adds your message to the running answer, and **Queue** holds it until the answer finishes. Chats that can't take a message mid-answer show only **Stop** and **Send**, and **Send** waits for the answer. See [Send while Bearly is working](https://bearly.ai/docs/manual/chat/compose.md#send-while-bearly-is-working), [Choose and compare models](https://bearly.ai/docs/manual/chat/models.md), and [Voice](https://bearly.ai/docs/manual/chat/voice.md).
- **Top right of the box:** the dictation microphone. See [Voice](https://bearly.ai/docs/manual/chat/voice.md).

### Context strip

A band at the foot of the message box, a shade darker than the box, holds the chat's context:

- **Project.** The chat's project, if it has one; on a new chat, the project chip.
- **Encryption lock.** "End-to-end encrypted" or "Standard encryption". If your organization requires device-only encryption, it reads "Local key encryption" and can't be turned off.
- **Work locally.** Desktop app only. It shows the working folder's name, or "Work locally" with "· Off". Its menu lists recent folders, **Choose folder…**, **Clear folder**, and **Off for this chat** or **Turn on for this chat**. In the web app it opens the desktop download pane; on phones and in the iOS app it's hidden. See [Browser and computer use](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md).
- **Connectors.** The connected service's name, or a count such as "2 connectors". Each row reads **Active**, **Off**, **Connect**, or **Retry**, and **Manage connectors...** opens settings. See [Connectors and skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md).
- **Permissions.** Reads **Permissions**, or **Full access** while Full access is on, with a **Paused** badge if it's paused. It opens **Standard** and **Full access**, your saved approvals with **Revoke**, **Revoke all saved approvals**, and **Clear all permissions**. See [Permissions](https://bearly.ai/docs/manual/capabilities/permissions.md).

While you edit an earlier message, the strip shows **Editing message** with **Cancel**. While Computer Use works in the desktop app, a **Computer** chip shows its status and a **Stop** action.

### The command menu

Press <kbd>⌘</kbd> <kbd>K</kbd> (<kbd>Ctrl</kbd> <kbd>K</kbd> on Windows and Linux) or select the chat's title → **All commands**. It shows the chat's title, a **Search...** box, and two groups:

- **Actions:** **New**, **Delete & New**, **Delete**, **Rename** (opens the chat's title for editing), **Refresh Chat**, **Generate New Name**, **Download as Markdown**, **New Routine** (Pro and higher), and **Show all...**, which adds **Show Release Notes**.
- **Switch Chats:** every chat, including project chats.

See [Keyboard shortcuts](https://bearly.ai/docs/manual/chat/shortcuts.md).

## The Settings window

Settings open in a window over the page you're on, which stays as it was underneath. Open it with <kbd>⌘</kbd> <kbd>,</kbd> (<kbd>Ctrl</kbd> <kbd>,</kbd> on Windows and Linux), the account menu → **Settings**, or the sliders button → **Chat Settings**. Links elsewhere in Bearly that point to a setting, such as **Billing**, open the window on that pane. It opens on the pane you used last. The list of panes is on the left and the open pane on the right; the header shows **Saving...**, **Saved**, or **Not saved**. Close it with <kbd>Esc</kbd>, **Close settings**, or a click outside it; if a save fails, it stays open on that pane showing **Not saved**. On a phone it fills the screen and shows either the list or one pane; select **Settings** at the top of a pane to go back to the list.

| Group | Panes | When a pane shows |
|---|---|---|
| **Account** | **Profile**, **Billing**, **Usage** | **Usage** is on paid plans |
| **Organizations** | Each organization you belong to, and **New organization** | When organizations are available to your account. Selecting one closes Settings and opens that organization's pages. **New organization** is hidden if your admin turned off creating organizations |
| **Chats** | **This chat**, **New chats**, **Permissions**, **Personalization**, **Voice**, **Dictation**, **Skills** | **Permissions** always; the others when you open Settings from a chat. **Voice**, **Dictation**, and **Skills** need those features allowed for your account |
| **Preferences** | **Appearance**, **Phone and SMS** | **Phone and SMS** when texting is allowed |
| **Privacy** | **Privacy and security**, **Devices** | Always |
| **Connections** | **Connectors**, **Chrome extension** | **Connectors** when connectors are allowed. **Chrome extension** in the desktop app only |
| **Desktop app** | **Desktop**, **Runtime**, **Browser**, **Get desktop app** | **Desktop**, **Runtime**, and **Browser** in the desktop app only; **Browser** when Bearly Browser is available to your account. **Get desktop app** everywhere except the desktop app |
| **Developer** | **API keys**, **Modules** | **API keys** when developer API access is allowed, which it is by default. **Modules** only when an organization admin allows personal remote modules |

What each pane holds:

- **Profile**: **Version**, **Lock all data**, **Change email**, **Delete account**, and **Log out**.
- **Billing**: **Current Plan**, **Credit Boost**, and the plan picker. **Usage**: **Current Period** and **Usage by service**.
- **This chat**: settings for this conversation only, under **Model** (**Model**, **Reasoning Effort**), **Responses** (**Language**, **Response Style**, **Temperature**), and **Context** (**Memories**, **Web Search**, **Instructions**), plus **Reset all to defaults**.
- **New chats**: the same settings as defaults for new chats, with **Recommended** as a model choice. Project chats use the project's settings instead.
- **Permissions**: **Start new chats in Full access**, for this device only. See [Permissions](https://bearly.ai/docs/manual/capabilities/permissions.md).
- **Personalization**: what you write in **Name**, **Occupation**, and **About you**, added to your chats only while **Use in chats** is on. See [Personalization](https://bearly.ai/docs/manual/chat/settings.md#personalization).
- **Voice**: the model voice calls use. **Dictation**: **Enable dictation**, the push-to-talk shortcut, what happens after dictation, transcript cleanup, and words and names.
- **Skills**: the **Skill Store** and your installed skills. Installing needs the desktop app.
- **Appearance**: **Theme**, then **Font** and **Font size** under **Text**, for this device only.
- **Phone and SMS**: add and verify a US or Canadian mobile number for texts and codes, or turn texts off.
- **Privacy and security**: **Zero Data Retention only** and **End-to-end encryption** with your approved devices and recovery options.
- **Devices**: where you're signed in, **Sign out all other devices**, and the browser extension and API keys that have their own access.
- **Connectors**: **Your connectors**, **Built-in connectors**, and **Add custom MCP server**.
- **Chrome extension**: **Control Chrome from chat** and the connection status.
- **Desktop**: **Keyboard shortcut**, **Always on top**, **Auto-hide**, **Launch on boot**, and **Latest version**.
- **Runtime**: tools the desktop app installs for local work, the Windows Computer Use helper, and environment variables for local commands.
- **Browser**: **Enable Browser**, **Allow chats to use Browser**, **Block ads and trackers**, **Import browser cookies**, **Reset open tabs**, and **Delete browser data**.
- **Get desktop app**: downloads for Mac, Windows, and Linux.
- **API keys**: keys for calling Bearly models from your own code. **Modules**: remote modules that add tools from your own server.

Every setting, with its options and defaults, is in the [Settings reference](https://bearly.ai/docs/manual/settings-reference.md).

## Other pages

Every page keeps the same sidebar.

- **Prompt templates.** Your templates, with **New template**. With none yet, the page opens on **New template**: describe a prompt you reuse and select **Draft template**, pick one of the **Examples**, or **start from scratch**. Each template has its own page with **Basic information**, **Template design**, and **Field configuration**; changes save automatically. See [Write, attach, and send](https://bearly.ai/docs/manual/chat/compose.md#make-a-prompt-template).
- **Routines.** Your routines, with **New routine**. With none yet, the page opens on **New routine**. Each routine has its own page with its next run, a run timeline, **Run now**, **Pause**, and past runs. See [Routines](https://bearly.ai/docs/manual/capabilities/routines.md).
- **Meetings and recordings.** A recorder with **Online meeting** (desktop app) and **In person or voice note**, **Start recording**, and your recordings with their transcripts. See [Meetings](https://bearly.ai/docs/manual/capabilities/meetings.md).
- **A project's page.** Select a project in the sidebar. Its tabs are **Chats** (with **Ask in this project**), **Files**, **Sharing**, and **Settings**. See [Projects](https://bearly.ai/docs/manual/projects.md).
- **Organizations.** The account menu → **Organizations**, or an organization's row in Settings. Everyone sees **Overview**, **Members**, and **Groups**. Admins also see **Policies**, **Projects**, and **Activity**, plus **Billing** and **Usage** where they apply. The settings list stays on the left, with a back arrow to your chats. See [Organizations](https://bearly.ai/docs/manual/organizations.md).

## In the desktop app

The desktop app for Mac, Windows, and Linux has the same screens plus a few of its own:

- **Summon Bearly from anywhere** with <kbd>⌘</kbd> <kbd>Shift</kbd> <kbd>P</kbd> (<kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>P</kbd> on Windows and Linux). Change it in **Settings** → **Desktop** → **Keyboard shortcut**.
- **The menu bar or tray icon** shows the window when you click it.
- **Closing the window quits Bearly** after asking **Quit Bearly?**. While it's recording a meeting or saving a Browser download to a chat, it asks **Bearly is still working** instead, with **Keep Bearly open** and **Quit when finished**.
- **Updates** download in the background; an **Update ready · Restart** pill at the top installs them.
- **Desktop-only areas**: the **Work locally** chip, **Open Browser**, the **Desktop**, **Runtime**, and **Browser** settings panes, syncing a folder into a project, and running routines.

See [Get Bearly](https://bearly.ai/docs/manual/get-bearly.md).

## On phones and in the iOS app

There's no Android app; on Android, use Bearly in your phone's browser. Bearly runs on Mac, Windows, Linux, iOS, web, and Chrome. On a phone-sized screen, Bearly tells the AI you're on a phone and asks it to keep answers brief and prefer lists over tables.

| Area | Phone browser | iOS app |
|---|---|---|
| Sidebar | A drawer: tap **Show sidebar** | Same |
| Sending | <kbd>Enter</kbd> adds a new line; tap the send button | Same |
| Photos | **Take photo** camera button in the toolbar | Same; opens the rear camera |
| Message controls | Always visible | Same |
| Moving chats | No dragging; use **More actions** → **Move to project...** | Same |
| Side panel | A full-screen sheet with **‹ Chat** | Same |
| Settings | A full-screen sheet: the list, then one pane | Same |
| Timeline rail | Not shown | Not shown |
| Context strip | Shown at the foot of the message box | **Permissions** moves to the send row; the strip appears only while you edit a message |
| **Work locally** | Hidden | Hidden |
| Sign-in | All sign-in options | Email code only |
| Connectors that need a service sign-in | Work in a normal phone browser, but not in an Android app's built-in browser | Show **Web browser required**; set them up in a browser |
| Desktop-only features | A prompt to use Bearly on a computer | Same |
| Routines | Create and manage; they run in the desktop app ("Runs in the desktop app. **Get it**") | Same |
| Meetings | **In person or voice note** only | Same |
| Voice calls | Where the browser supports them; the screen can lock mid-call | The screen stays on during a call; keep the app in front |
| PDFs | Preview in the app | Tapping a PDF opens it outside the app |
| Downloads | A normal browser download | The iOS share sheet |
| Billing | Web billing | App Store purchase and **Restore**; Credit Boost isn't offered in the iOS app |
| **Get desktop app** | **Choose a computer** | Same |

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
- [Related: Privacy and security controls](https://bearly.ai/docs/manual/privacy-and-security.md)
- [Related: Automate with Routines](https://bearly.ai/docs/manual/capabilities/routines.md)
