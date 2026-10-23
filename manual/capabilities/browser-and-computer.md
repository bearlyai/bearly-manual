---
title: "Let Bearly use a browser, your files, and your computer"
description: "How a Bearly desktop chat browses sites in Bearly Browser, works in your signed-in Chrome tabs, reads and edits files and runs commands with Work locally, and operates apps with Computer Use, including the approvals each asks for and how to choose between them."
canonical: "https://bearly.ai/docs/manual/capabilities/browser-and-computer/"
markdown: "https://bearly.ai/docs/manual/capabilities/browser-and-computer.md"
---

# Let Bearly use a browser, your files, and your computer

HTML: [https://bearly.ai/docs/manual/capabilities/browser-and-computer/](https://bearly.ai/docs/manual/capabilities/browser-and-computer/)

> How a Bearly desktop chat browses sites in Bearly Browser, works in your signed-in Chrome tabs, reads and edits files and runs commands with Work locally, and operates apps with Computer Use, including the approvals each asks for and how to choose between them.

In the desktop app, a chat can do more than answer: it can open and use websites, work in the Chrome you already use, read and change files in a folder you pick, run commands, and click and type in the apps on your screen. Each tool asks before it acts unless you've turned on [Full access](https://bearly.ai/docs/manual/capabilities/permissions.md), and each one can be turned off by your organization.

All four tools need the desktop app for Mac, Windows, or Linux. On the web and on phones, chats that used them stay readable, but Bearly can't look at or change anything on your computer until you return to that chat in the desktop app. See [Get Bearly on every device](https://bearly.ai/docs/manual/get-bearly.md).

## Which one to use

| You want Bearly to | Use | Why |
|---|---|---|
| Read or act on websites that don't need your everyday sign-ins | [Bearly Browser](#bearly-browser) | It's a separate browser with its own sign-ins, and routines can use it too |
| Work in a site you're already signed in to in Chrome, or inspect a page's console and network activity | [Control Chrome](#control-chrome) | It uses your real Chrome profile and its sessions |
| Read, create, or change files, run commands, or process a folder | [Work locally](#work-locally) | Direct file and command access is faster and more reliable than clicking through apps |
| Use a native app that has no other route in, such as a desktop accounting or design app | [Computer Use](#computer-use) | It sees the screen and controls the mouse and keyboard |
| Summarize the page you're reading, without the desktop app | The browser extension's side panel | See [Browser extension](https://bearly.ai/docs/manual/get-bearly.md#browser-extension) |

| | Bearly Browser | Control Chrome | Work locally | Computer Use |
|---|---|---|---|---|
| Works in | The desktop app | The desktop app plus Chrome with the Bearly Companion extension | The desktop app | The desktop app |
| Uses your sign-ins | Only ones you sign in to or import into Bearly Browser | Yes, your Chrome profile | Whatever your computer account can reach | Whatever is on screen |
| Standard asks before | Each new site, submissions, visual clicks, downloads, website tools | Reading tabs, controlling tabs, or using DevTools | Each read, write, edit, file transfer, and command | The task, then consequential actions |
| In routines | Yes, with browser access on listed sites | No | Yes, with unattended local access | No |
| Organization control | **Browser** | **Chrome extension browser** | **Work locally** | **Computer Use** |

Bearly picks the tool from your request. Name the one you want ("in Chrome", "in Bearly Browser", "in this folder") when it matters.

## Bearly Browser

Bearly Browser is a browser built into the desktop app. Chats work in their own tabs in the background; you can open the panel to watch, browse yourself, or take over a tab. Its sign-ins belong to this Bearly account on this device and are separate from your everyday browser.

**Use it when:** comparing public pages, checking a site you've signed in to inside Bearly Browser, testing a site running on your computer (`http://localhost`) or local network, or giving a routine a browser.
**You need:** the desktop app; your organization allows **Browser**.



1. Open **App Settings** → **Desktop** → **Browser** and turn on **Enable Browser** and **Allow chats to use Browser** — the first makes the browser available, the second lets chats drive it. Both are on by default.
2. Optional: under **Import browser cookies**, choose a **Browser profile** and select **Import** — this copies current site sign-ins from Chrome or Edge into Bearly Browser. Only cookies are copied, never passwords, history, bookmarks, or autofill.
3. Ask in a chat, naming the site and the boundary:

   ```text
   In Bearly Browser, open the pricing pages for these three tools and compare their plans in a table. Don't sign in, start a trial, or submit anything.
   ```

4. At **Let this chat use this site?**, check the site, pick an **Approval duration**, and select the Allow button — approval covers that one site for this chat. Another site asks separately.
5. To watch, select the **Open Browser** globe in the title bar. Tabs a chat opened show a robot icon, and their tooltip reads **Agent-owned tab**; tabs you opened show a globe. Select **Take over this tab** to pause the agent while you work on the page, and **Resume this tab's agent** to hand it back.



**What you get:** the answer in the chat, plus open tabs you can inspect. Bearly can open, read, screenshot, click, type, choose options, scroll, press keys, and save a download into the chat.
**Limits:** up to eight tabs across your chats. In Standard, these also ask first: **Confirm this Browser action** before a form submission or other consequential action, **Allow this visual Browser action?** for clicks on canvases and embedded frames, and **Save this website file to chat?** for downloads (one file up to 50 MiB, never opened or run). Passwords, payment details, file uploads, CAPTCHAs, and system permission prompts stay with you. Only you can decide on a certificate warning; neither an approval nor Full access can skip it. A page load Bearly started that takes more than 10 seconds is stopped.
**Combines with:** [Routines](https://bearly.ai/docs/manual/capabilities/routines.md#browser-access) for scheduled site checks on exact sites; [Work locally](#work-locally) to fix a site you're building.

To point at part of a page, select **Capture and annotate page**, click an element or drag over a region, answer **What should Bearly change or inspect?**, and select **Attach** (<kbd>⌘</kbd> <kbd>Enter</kbd> or <kbd>Ctrl</kbd> <kbd>Enter</kbd>). The capture goes into your message.

Two reset actions sit at the bottom of the Browser settings. **Reset open tabs** → **Reset tabs** closes tabs and clears their history and site approvals; sign-ins stay. **Delete browser data** → **Delete data** signs this account out of sites in Bearly Browser and deletes its cookies, cache, and site storage on this device.

## Control Chrome

With the Bearly Companion extension installed, a desktop chat can work in your everyday Chrome: list and switch tabs, open pages, read them and their console output, take screenshots, click, type, scroll, and, with the highest approval, inspect network activity and run DevTools commands. It uses your Chrome profile, so sites you're signed in to stay signed in.

**Use it when:** the work is in a site you're already signed in to, you want to point at a tab you have open, or you're debugging a page with the console and network log.
**You need:** the desktop app, Chrome itself (not another browser) with the Bearly Companion extension, and your organization allows **Chrome extension browser**. The extension doesn't need to be signed in to Bearly for this.



1. In the desktop app, open **App Settings** → **Desktop** → **Chrome Extension** — the pane is titled **Control Chrome from chat** and shows the connection status.
2. If it says **Chrome extension not connected**, select **Install Chrome extension** and add it to Chrome — or turn the extension back on if it's off.
3. Keep Chrome and the desktop app open until the status reads **Connected to Chrome** — pairing happens on its own, and it survives restarting either app.
4. Ask in a chat and name Chrome:

   ```text
   In Chrome, read the pull request tab I have open and list what changed and what still needs review. Don't post anything.
   ```

5. Approve the level Bearly asks for — a higher level covers the lower ones.



| Prompt | What it allows |
|---|---|
| **Read your Chrome tabs** | The tab list, page text, screenshots, console output, and page events |
| **Control Chrome** | Everything above, plus opening and closing tabs, navigating, clicking, typing, scrolling, and key presses |
| **Use Chrome DevTools** | Everything above, plus network requests and responses, storage, running JavaScript, debugging, profiling, and request interception |

**What you get:** results in the chat, from the tabs you see. While Bearly is attached to a tab, Chrome shows its own debugging banner.
**Limits:** page reads blank out password and payment-card field values, and Bearly can never open other extensions' pages. Tabs Bearly opened stay open when the chat finishes. Finishing, stopping, or closing a chat doesn't detach Bearly from your tabs; quitting the desktop app or Chrome does. Routines can't use Chrome. To use Chrome with Full access, keep the extension up to date; an older one shows "Update the Bearly browser extension to use Chrome with Full access, or switch this chat to Standard."
**Combines with:** Deep Research, by having the chat read an internal page first and then research the public web about it (see [Research](https://bearly.ai/docs/manual/capabilities/research.md)); [Work locally](#work-locally) for debugging with DevTools.

> **Caution — This is your real browser**
> Bearly acts in your signed-in Chrome profile and sees whatever those tabs show. At the DevTools level that includes request contents and stored session data. Page text can contain instructions written to mislead an assistant. State limits in your request, and use Bearly Browser when the task doesn't need your own sign-ins.


## Work locally

**Work locally** lets a chat read, write, and edit files and run commands on your computer. You pick a working folder; Bearly shows each action and asks before it runs.

**Use it when:** cleaning or combining a folder of spreadsheets, converting or renaming files, editing a code project, or producing a file you want saved on your computer.
**You need:** the desktop app; your organization allows **Work locally**.



1. In a desktop chat, select the **Work locally** chip next to the message box, then **Choose folder…** and pick the folder — the chip then shows the folder's name. Recent folders appear in the same menu.
2. Describe the result and what must not change:

   ```text
   Read the CSV files in this folder and make one monthly summary workbook. Don't change the source files. Add the finished workbook to this chat.
   ```

3. Review each card: it shows the command or the file. Open **Details** for the working folder, the timeout, or whether a write overwrites a file, then pick an **Approval duration**. For reads, the Allow button then reads **Allow reads for this response**, **Allow reads for now**, or **Allow reads this chat**; an approval for writes, edits, or commands also covers reads.
4. Check the result. Ask Bearly to reopen a file it made, or to run a check. Ask it to "add it to this chat" to keep a file with the conversation.
5. Select **Stop** to stop the response; a running command stops with it.



**What you get:** files changed or created on your computer, and chat files when you ask for them. The tools appear in the chat as **Shell**, **Read File**, **Write File**, **Edit File**, **Attach File** (a local file into the chat), and **Save Locally** (a chat file onto your computer).
**Limits:** a command times out after 2 minutes unless Bearly sets a longer limit, up to 10 minutes. Bearly won't start servers, watchers, or anything meant to keep running; start those yourself. **Attach File** and **Save Locally** handle files up to 50 MB. If you deny a request, Bearly doesn't retry the same one. Bearly installs the runtimes it needs for scripts the first time a task uses them; you can see them under **App Settings** → **Desktop** → **Runtime**.
**Combines with:** [Routines](https://bearly.ai/docs/manual/capabilities/routines.md#unattended-local-access) with unattended local access; [skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md#skills) whose scripts run on your computer; [Pages](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md) built from what it computes.

The chip's menu also has **Clear folder** (go back to a private folder for this chat), **Off for this chat**, and **Turn on for this chat**. Without a chosen folder, Bearly works in a private folder of its own for that chat. The folder and any chat-length approvals belong to this chat on this device.

> **Caution — The folder is not a sandbox**
> The working folder is where Bearly starts, not a boundary. An approved command can reach any file your computer account can. Use a folder that holds only what the task needs, and keep backups of anything important.


## Computer Use

Computer Use lets Bearly complete a task in the apps on your screen. It takes screenshots, reads the apps' accessibility text, and clicks, types, scrolls, drags, and uses keyboard shortcuts. Computer use runs on your device; the screenshots it takes while working go to the model you picked.

**Use it when:** the task lives in a desktop app with no file or web route, such as reading figures from an open report window, changing a setting in an app, or moving data between two apps.
**You need:** the desktop app on Mac, Windows, or Linux; your organization allows **Computer Use** and at least one of the models Computer Use supports. On a Mac, Bearly needs **Accessibility** and **Screen Recording** permission in **System Settings** → **Privacy & Security**.



1. Open the app and window involved and leave it visible — there's no mode to switch on.
2. Ask for the whole task and where to stop:

   ```text
   In the spreadsheet that's open, sort the Budget tab by due date. Stop before saving.
   ```

3. At **Use your computer**, open **Details** to see the goal, the model, the data that goes to it (relevant conversation context, attachments, screenshots, and app text captured while working), and the access (the full desktop: screenshots, focus, mouse, and keyboard). Pick an **Approval duration** and allow.
4. Watch the **Computer** chip by the message box: it shows the status, such as **Looking** or **Working** in an app. Select **Stop** on the chip to end the task.
5. Read the **Computer Use** step in the answer: it lists the screen, the apps, and the actions taken.



**What you get:** the task done in the app, with a record of each action.
**Limits:** one Computer Use task at a time per chat. Bearly's own windows are never a target. Routines never see or control your screen. Before a consequential action your request didn't already authorize, such as sending, publishing, buying, deleting, or changing account or security settings, Bearly asks **Confirm this computer action**; Full access covers this one. A safety check raised during the task also shows **Confirm this computer action**, and that one always asks, even with Full access.
**Combines with:** [Run Python and charts](https://bearly.ai/docs/manual/capabilities/data-and-code.md) after it reports what it read; [email](https://bearly.ai/docs/manual/capabilities/email-and-text.md) to send the result.

On a Mac, if a permission is missing, Bearly says "Computer Use needs Accessibility and Screen Recording access." Turn on **Bearly** under both in **System Settings** → **Privacy & Security**, then send the request again. On Windows, Bearly may offer **Finish setting up Computer Use** for a small helper that controls protected and background windows more reliably; select **Finish setup** and approve the administrator prompt. Its status lives at **App Settings** → **Desktop** → **Runtime** → **Windows Computer Use helper**.

If your organization's model policy blocks every model Computer Use supports, Bearly says so instead of starting.

> **Caution — Computer Use sees the whole screen**
> Close or hide anything you don't want in a screenshot before you approve the task, and stay nearby while it works.


## Website tools

Some websites publish their own tools for assistants. When the page you're on offers them, Bearly can list and run them in Bearly Browser or in Chrome. Running one asks **Run this website tool?** and shows the site, the tool, and whether the site says the tool only reads or may change data. The site controls what its tool actually does, so treat the label as the site's claim.

## Try this

### Chart a table from a dashboard you're signed in to

A chart and a CSV of the table, built from a page only your Chrome sign-in can see.

**Why it works:** Control Chrome reads the page in your own signed-in profile, so the table's text lands in the chat. Bearly saves it as a CSV file, and charts work from CSV files in the chat, so the next step can plot it or compute with Run Python.
**You need:** the desktop app with Chrome showing **Connected to Chrome**; your organization allows **Chrome extension browser** and **Charts** or **Run Python**.



1. Open the dashboard in Chrome and set the filters and date range you want — Bearly reads what the tab shows.
2. In a desktop chat, ask:

   ```text
   In Chrome, read the monthly revenue table on the analytics tab I have open. Save it as a CSV in this chat, chart revenue by month, and point out the two biggest changes. Don't click anything.
   ```

   Bearly lists your tabs and asks **Read your Chrome tabs**.
3. Choose **This response** and allow — one approval covers the tab list, the page read, and a screenshot if it takes one.
4. Check the chart against the dashboard, then ask follow-ups in the same chat; the CSV stays in the chat's files.



**Swap in:** allow **Control Chrome** and say "click Next until the last page" for paginated tables; use Bearly Browser when the site doesn't need your everyday sign-in; ask for an interactive Page with `/visualize` instead of a chart.
**If it stalls:** if the table loads as you scroll, scroll it fully into view yourself or allow **Control Chrome**. If you see "Chrome extension control could not complete that action", ask Bearly to list your Chrome tabs again.

### Turn a folder of CSV exports into a one-page summary

A combined `summary.csv` in the folder and a one-page summary in the chat, without uploading the exports one by one.

**Why it works:** Work locally runs commands in your folder, so Bearly can combine the files with command-line tools or a short script it writes and runs. What the commands print comes back into the chat, where Bearly can build a Page from it.
**You need:** the desktop app; your organization allows **Work locally**.



1. Select **Work locally** → **Choose folder…** and pick the folder of exports — the chip shows its name.
2. Ask:

   ```text
   Combine every CSV in this folder by month and region without changing the source files. Write the totals to summary.csv in this folder, then make a one-page summary with a table and the three biggest month-over-month changes, and add it to this chat.
   ```

3. For the reads, choose **This response** and select **Allow reads for this response**. When the command and the write appear, open **Details**, confirm the path is `summary.csv` and nothing is overwritten, then allow.
4. Open the summary in the chat; `summary.csv` is in your folder.



**Swap in:** ask Bearly to **Save Locally** the summary Page into the folder too; put the same request in a routine with [unattended local access](https://bearly.ai/docs/manual/capabilities/routines.md#unattended-local-access) to refresh it every Monday; use `/visualize` for a chart you can filter.
**If it stalls:** a command that runs past its time limit stops; ask Bearly to work one file at a time. For very large files, ask it to read only the header and the first 100 rows before deciding on a plan.

### Find and fix a bug in a site running on your computer

A fixed page, confirmed in the same browser tab Bearly used to find the problem.

**Why it works:** Bearly Browser can open `http://localhost`, so Bearly can see the bug, and Work locally can edit the project, so it can fix it. Reloading the same tab confirms the change.
**You need:** the desktop app; your organization allows **Browser** and **Work locally**; your development server already running.



1. Start your development server yourself — Bearly won't start long-running processes.
2. Select **Work locally** → **Choose folder…** and pick the project folder.
3. Ask:

   ```text
   Open http://localhost:3000/settings in Bearly Browser and find out why the Save button does nothing. Then fix it in this folder and reload the page to confirm. Don't start any servers.
   ```

4. Approve the site, then the reads and edits Bearly shows.
5. Ask for a short summary of what changed and why.



**Swap in:** use Chrome with **Use Chrome DevTools** when you need console errors and failed network requests; select **Capture and annotate page** to point at the broken element.
**If it stalls:** if the page doesn't load, check the server is still running. If Bearly proposes starting the server, deny it and start it yourself.

### Read figures from a desktop app and chart them

A chart of numbers that only exist in a native app's window.

**Why it works:** Computer Use reads what's on screen and reports it back to the chat. Computer Use can't run Python itself, but the chat can, so the next step charts the figures it returned.
**You need:** the desktop app; your organization allows **Computer Use** and **Run Python** or **Charts**; on a Mac, Accessibility and Screen Recording permission.



1. Open the app and the report window with the figures.
2. Ask:

   ```text
   In the accounting app that's open, read the twelve monthly totals from the Reports window. Don't change anything. Then chart them and tell me which months stand out.
   ```

3. At **Use your computer**, check **Details** and allow **Once** — the task is short.
4. Watch the **Computer** chip; select **Stop** if it heads somewhere unexpected.



**Swap in:** if the app can export a CSV, use Work locally on the export instead; it's faster and exact. Add "then email me the chart" to send it (see [Send email and texts](https://bearly.ai/docs/manual/capabilities/email-and-text.md)).
**If it stalls:** bring the window into view and ask Bearly to continue. On a Mac, grant the permissions Bearly names and resend.

## Related

- [Approvals, permissions, and Full access](https://bearly.ai/docs/manual/capabilities/permissions.md) — every approval card and what Full access covers.
- [Automate with Routines](https://bearly.ai/docs/manual/capabilities/routines.md) — what a scheduled run can do in Bearly Browser and on your computer.
- [Bearly Browser](https://bearly.ai/docs/features/browser.md), [Control Chrome](https://bearly.ai/docs/features/chrome-control.md), [Work locally](https://bearly.ai/docs/features/work-locally.md), and [Computer Use](https://bearly.ai/docs/features/computer-use.md) in the feature guides.

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Record and use meetings](https://bearly.ai/docs/manual/capabilities/meetings.md)
- [Next: Connect apps and add skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md)
- [Related: Approvals, permissions, and Full access](https://bearly.ai/docs/manual/capabilities/permissions.md)
- [Related: Get Bearly on every device](https://bearly.ai/docs/manual/get-bearly.md)
- [Related: Automate with Routines](https://bearly.ai/docs/manual/capabilities/routines.md)
- [Related: Research the web, papers, people, products, and places](https://bearly.ai/docs/manual/capabilities/research.md)
