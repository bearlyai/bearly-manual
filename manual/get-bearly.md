---
title: "Get Bearly on every device"
description: "Where Bearly runs (web app, phone browsers, desktop app, iOS app, Chrome extension), how to install and sign in on each, what the desktop app adds, and a table of which capabilities work on which platform."
canonical: "https://bearly.ai/docs/manual/get-bearly/"
markdown: "https://bearly.ai/docs/manual/get-bearly.md"
---

# Get Bearly on every device

HTML: [https://bearly.ai/docs/manual/get-bearly/](https://bearly.ai/docs/manual/get-bearly/)

> Where Bearly runs (web app, phone browsers, desktop app, iOS app, Chrome extension), how to install and sign in on each, what the desktop app adds, and a table of which capabilities work on which platform.

Bearly runs on Mac, Windows, Linux, iOS, web, and Chrome. Sign in with the same account everywhere and your chats and projects follow you. Most of Bearly works the same on every platform; the work that touches your own computer, such as local files, a built-in browser, desktop control, and scheduled runs, needs the desktop app.

There is no Android app. On Android, use the web app in your phone's browser.

| Platform | What it is | How to get it |
|---|---|---|
| Web app | Bearly in a desktop browser | Go to `https://bearly.ai/dashboard` and sign in |
| Phone browser | The same web app on a phone or tablet, including Android | Open `https://bearly.ai/dashboard` in your phone's browser |
| Desktop app | Bearly for Mac, Windows, and Linux, plus local and browser tools | **App Settings** → **Get Desktop App**, or `bearly.ai/download/mac`, `/windows`, or `/linux` |
| iOS app | Bearly for iPhone and iPad (iOS 17 or later) | Search for Bearly in the App Store |
| Browser extension | **Bearly Companion** for Chrome: page summaries in a side panel, and the link that lets the desktop app control Chrome | Chrome Web Store, or **Install Chrome extension** in the desktop app |

## Web app

The web app is the full Bearly workspace in a desktop browser: chat with the models your plan includes, attach files, research, build Pages, generate images and video, record meetings from your microphone, set up projects and organizations, and manage routines.

**Use it when:** you're on a computer you don't own, you want nothing to install, or you only need chat, research, and documents.
**You need:** a current desktop browser and a Bearly account.

Features that need your computer show a prompt instead of failing. For example, **Work locally** opens **Get Bearly for desktop** with "Work locally lets Bearly read, edit, and run files in a folder you choose — available on the Bearly desktop app." Other desktop-only features show **Use the desktop app** with a **Get Bearly** button.

## Phone browsers

On a phone or a narrow window, the sidebar becomes a drawer: select **Open sidebar** to show it, and it closes when you pick a chat. Everything in the web app works except the desktop-only features, which show **Use Bearly on desktop**.

**Use it when:** you're on Android, or on an iPhone without the app.
**You need:** a current mobile browser.

- Connectors that need a service sign-in work in a normal mobile browser. On Android, they don't work in the in-app browser another app opens when you tap a link; those show **Web browser required**. Open the link in your browser app instead.
- You can add Bearly to your home screen from your browser's menu. It still needs a connection.
- The camera button **Take photo** appears on phones, tablets, and touch screens.

## Desktop app

The desktop app is Bearly in its own window, plus the tools that work on your computer. It loads Bearly from the internet, so it needs a connection. If it can't connect, it shows "We can't reach Bearly." and keeps retrying.

**Use it when:** you want Bearly to work with files on your computer, browse sites for you, control apps, run routines on a schedule, or record online meetings with computer audio.
**You need:** a Mac (one download works on every Mac processor type), a Windows x64 PC, or a Linux x64 computer.


**Mac**



1. In the web app, open the account menu at the bottom of the sidebar, select **App Settings**, then **Get Desktop App** and **Download for macOS**. You can also go to `bearly.ai/download/mac`.
2. Open the downloaded `.dmg` and drag **Bearly** into **Applications** — Bearly needs to run from Applications. If you open it from somewhere else, it offers **Move to Applications**.
3. Open Bearly and sign in.




**Windows**



1. In the web app, open **App Settings** → **Get Desktop App** → **Download for Windows**, or go to `bearly.ai/download/windows`.
2. Open the installer and follow the steps — it installs for your user account by default; you can choose to install it for everyone on the PC.
3. Open Bearly and sign in.




**Linux**



1. In the web app, open **App Settings** → **Get Desktop App** → **Download for Linux**, or go to `bearly.ai/download/linux`. This is an AppImage for x64 computers.
2. Mark the AppImage as executable if your system asks, then open it.
3. Sign in.






### What the desktop app adds

- **Work locally** — Bearly reads, edits, and runs files in a folder you pick, with your approval. The **Get Desktop App** pane calls this Cowork. See [Let Bearly use a browser, your files, and your computer](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md).
- **Bearly Browser** — a separate browser inside the app that chats can work in. Same page.
- **Control Chrome** — Bearly works in your everyday Chrome tabs through the Bearly Companion extension. Same page.
- **Computer Use** — Bearly clicks and types in the apps on your screen after you approve the task. Same page.
- **Installed skills and skill scripts**, and **npm MCP servers**. See [Connect apps and add skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md).
- **Running routines.** You can create routines anywhere, but they run only in the desktop app, on the device they're installed on, while it's open. See [Automate with Routines](https://bearly.ai/docs/manual/capabilities/routines.md).
- **Online meeting** recording with computer audio and your microphone, on Windows and on macOS 13 or later. Linux records your microphone only. See [Meetings](https://bearly.ai/docs/manual/capabilities/meetings.md).
- **Local Directory Sync** for projects, and saving videos and transcripts over your own connection. See [Projects](https://bearly.ai/docs/manual/projects.md) and [Videos and posts](https://bearly.ai/docs/manual/capabilities/videos-and-posts.md).
- **Runtime** settings, where Bearly installs and checks the tools local work uses and keeps environment variables for local commands and skills.
- Full access for all of these tools. On other platforms it covers connectors only. See [Approvals, permissions, and Full access](https://bearly.ai/docs/manual/capabilities/permissions.md).

### Desktop settings

Open **App Settings** and look under the **Desktop** section. **Desktop**, **Runtime**, and **Chrome Extension** appear only in the desktop app; **Browser** appears there when Bearly Browser is available to your account.

| Setting | What it does |
|---|---|
| **Keyboard shortcut** | "Global hotkey to summon Bearly." The default is <kbd>⌘</kbd> <kbd>Shift</kbd> <kbd>P</kbd> on Mac and <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>P</kbd> on Windows and Linux. It brings the Bearly window forward. Select **Change** to record a new one, or **Disable**. |
| **Always on top** | Keeps the window above other apps. It turns off when you quit. |
| **Auto-hide** | Hides Bearly when it loses focus. Bring it back with the keyboard shortcut. |
| **Launch on boot** | **Enabled** starts Bearly when you sign in to your computer. Off by default. |
| **Latest version** | Shows your installed version and whether a newer one exists. |

The app also puts an icon in the menu bar (Mac) or system tray (Windows and Linux); select it to show the window. Closing the window quits Bearly after **Quit Bearly?**. If Bearly is recording a meeting or saving a download, **Bearly is still working** offers **Keep Bearly open** or **Quit when finished**.

### Updates

The desktop app downloads updates in the background. When one is ready, **Update ready · Restart** appears at the top of the window; select it to restart into the new version. Most improvements arrive without a new download, because the app loads the current Bearly from the web. A feature that needs a newer app shows **Update Bearly**.

## iOS app

The iOS app is the same Bearly workspace for iPhone and iPad, with a few differences:

- **Sign-in is by email only.** Enter your email, select **Continue**, and type the code Bearly emails you. The account buttons shown on other platforms are hidden in the app.
- **Plans are bought through the App Store.** Plan cards read **Purchase** followed by the plan name. **Restore** checks the App Store for a subscription you already have. **Manage Account**, **Invoices**, and **Cancel** open the App Store's subscription settings. One-time Credit Boosts aren't sold in the app; buy them from the web or desktop app. If you subscribed through the App Store, other platforms show **Manage in iOS App**. See [Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md).
- **Connectors that need a service sign-in** show **Web browser required**. Connect and use those in a regular browser. Custom servers that use a token, custom headers, or no sign-in work in the app.
- **Desktop-only features** show a prompt to use Bearly on a computer. You can still create and edit routines in the app; they run in the desktop app.
- **Downloads** open the iOS share sheet. Links Bearly opens go to Safari or the app that owns the link.
- During a voice call, the screen stays on. Keep the app in front.

The app loads the current Bearly from the web, so most improvements arrive without an App Store update.

## Browser extension

**Bearly Companion** is Bearly's Chrome extension. It does two separate jobs:

- **On its own**, it adds a side panel that summarizes, explains, or answers questions about the page you're reading.
- **With the desktop app**, it lets a desktop chat work in your regular Chrome tabs. That connection needs no extension sign-in. See [Control Chrome](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md#control-chrome).

**Use it when:** you want a quick summary or answer about the page in front of you without opening Bearly.
**You need:** Chrome and a Bearly account.



1. Install **Bearly Companion** from the Chrome Web Store — in the desktop app, **App Settings** → **Desktop** → **Chrome Extension** → **Install Chrome extension** opens it.
2. Select the Bearly icon in the Chrome toolbar — the side panel opens.
3. Select **Sign in with Bearly**. In the window that opens, check the account shown under **Connect the Bearly extension**, then select **Continue** — the extension gets its own key, not your dashboard login.
4. Select **Allow website access** and approve Chrome's request — this one grant covers every site, and Bearly still reads a page only when you choose an action. The panel then shows **Ready for this page**.



**What you get:** above the composer, **Summarize** (main points, then key takeaways), **Explain** (the page in plain language), and **Explain selection** (needs selected text). The **Ask this page** box answers questions from the page; follow-ups can compare pages you visited in the same window. A small **Open Bearly actions** button at the bottom-right of pages runs the same actions and shows answers in the panel; its menu also has **Hide on this page**, **Don't show on this site**, and **Hide Forever**.
**Limits:** one conversation per Chrome window, kept until you select **Clear conversation**, close the window, quit Chrome, or disconnect. Questions can be up to 4,000 characters. Quick actions can't click, navigate, or use other tools, and they use one fixed model. The extension has no keyboard shortcut or right-click menu.

When you run an action, the extension sends the page's readable text (or only your selection, for **Explain selection**) and a picture of the visible part of the tab. Scroll away from anything you don't want in that picture.

Settings live behind the gear in the panel: **Response language**, **Quick actions** (which presets show, and their order), **Website access**, **Page button**, and **Disconnect Bearly**. Disconnecting removes Bearly from this browser; your account and work stay in Bearly. You can also remove the extension's key from any device under **App Settings** → **Devices** → **Browser extension and API keys**.

## Sign in

Bearly has no passwords. On the sign-in screen, enter your **Email** and select **Continue**; Bearly emails you a code made of three words. Type or paste it and select **Sign in**. Above the email field, the web and desktop apps also offer **Continue with** buttons for signing in with an existing account, including your organization's single sign-on where an administrator has set it up. The iOS app offers email sign-in only.

- **Desktop app:** account-button sign-in opens your default browser. Finish there, and the browser hands you back to the app. If it doesn't, the browser page offers **Retry desktop sign-in**.
- **Staying signed in:** you stay signed in until you sign out. **App Settings** → **Devices** lists every device signed in to your account, with **Sign out** on each and **Sign out all other devices**.
- **End-to-end encrypted chats** need more than sign-in: a new device needs approval from one you already use, your recovery phrase, or a passkey. See [Privacy and security](https://bearly.ai/docs/manual/privacy-and-security.md).

## What works where

"Desktop" means the desktop app on Mac, Windows, and Linux.

| Capability | Web app | Phone browser | Desktop app | iOS app | Extension |
|---|---|---|---|---|---|
| Chat with models, files, and Pages | Yes | Yes | Yes | Yes | No |
| Web research and Deep Research | Yes | Yes | Yes | Yes | No |
| Images, video, and spoken audio | Yes | Yes | Yes | Yes | No |
| Run Python (cloud) | Yes | Yes | Yes | Yes | No |
| Voice calls | Yes, not in Firefox | Where the browser supports it | Yes | Yes | No |
| Dictation | Yes | Yes | Yes | Yes | No |
| Meeting recording with the microphone | Yes | Yes | Yes | Yes | No |
| Online meeting with computer audio | No | No | Windows and macOS 13 or later | No | No |
| Projects | Yes | Yes | Yes | Yes | No |
| Project Local Directory Sync | No | No | Yes | No | No |
| End-to-end encrypted chats | Yes | Yes | Yes | Yes | No |
| Create and manage routines | Yes | Yes | Yes | Yes | No |
| Run routines | No | No | Yes, on the installed device | No | No |
| Connectors with a service sign-in | Yes | Yes, not in Android in-app browsers | Yes | No | No |
| Connectors with a token, headers, or no sign-in | Yes | Yes | Yes | Yes | No |
| npm MCP servers | No | No | Yes | No | No |
| Built-in skills (Visualize, Bearly AI Models) | Yes | Yes | Yes | Yes | No |
| Installed skills and skill scripts | No | No | Yes | No | No |
| Work locally | No | No | Yes | No | No |
| Bearly Browser | No | No | Yes | No | No |
| Control Chrome | No | No | Yes, with Chrome and the extension | No | Needed for it |
| Computer Use | No | No | Yes | No | No |
| Full access | Connectors only | Connectors only | All enabled tools | Connectors only | No |
| Send email and texts from a chat | Yes | Yes | Yes | Yes | No |
| Summarize or ask about the page you're on | No | No | No | No | Yes |
| Buy or change a plan | Yes | Yes | Yes | App Store | No |
| Credit Boosts | Yes | Yes | Yes | No | No |
| API keys | Yes | Yes | Yes | Yes | No |
| Global keyboard shortcut and tray icon | No | No | Yes | No | No |

Your organization's policy can turn many of these features off, and some features need a paid plan. See [Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md) and [Organizations](https://bearly.ai/docs/manual/organizations.md).

## Related

- [Tour the workspace](https://bearly.ai/docs/manual/workspace-tour.md) — where everything is once you're signed in.
- [Let Bearly use a browser, your files, and your computer](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md) — the desktop tools in detail.
- [Use Bearly from scripts and agents](https://bearly.ai/docs/manual/api-and-agents.md) — API keys and links that open Bearly with a prompt.

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: What Bearly is](https://bearly.ai/docs/manual/what-is-bearly.md)
- [Next: Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md)
- [Related: Let Bearly use a browser, your files, and your computer](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md)
- [Related: Connect apps and add skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md)
- [Related: Automate with Routines](https://bearly.ai/docs/manual/capabilities/routines.md)
- [Related: Record and use meetings](https://bearly.ai/docs/manual/capabilities/meetings.md)
