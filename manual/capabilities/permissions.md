---
title: "Approvals, permissions, and Full access"
description: "How Bearly asks before using tools outside the chat, how long each approval lasts, how to review and revoke saved approvals in the Permissions control, how Standard and Full access differ, what always asks, starting new chats in Full access, organization Agent access, routine permission mode, and spoken approvals."
canonical: "https://bearly.ai/docs/manual/capabilities/permissions/"
markdown: "https://bearly.ai/docs/manual/capabilities/permissions.md"
---

# Approvals, permissions, and Full access

HTML: [https://bearly.ai/docs/manual/capabilities/permissions/](https://bearly.ai/docs/manual/capabilities/permissions/)

> How Bearly asks before using tools outside the chat, how long each approval lasts, how to review and revoke saved approvals in the Permissions control, how Standard and Full access differ, what always asks, starting new chats in Full access, organization Agent access, routine permission mode, and spoken approvals.

When a chat wants to reach outside itself, such as reading a local file, opening a site, working in Chrome, using a connected service, running a skill script, or controlling your screen, Bearly shows an approval card first. You decide how long each approval lasts. If you'd rather not be asked, **Full access** lets one chat on one device use its enabled tools without asking, with a short list of checks that always ask anyway.

## Approval cards

A card shows a title, the reason, and, for most tools, a **Details** disclosure with the specifics, such as the file path, site, or connector. A command shows on the card itself. Its buttons are **Deny**, **Stop** where offered, an **Approval duration** menu when longer approvals are offered, and the Allow button. Risky actions get a red Allow button.

| Approval duration | Allow button reads | Lasts |
|---|---|---|
| **Once** | **Allow** | This one action |
| **This response** | **Allow for this response** | "until this response ends", including if it errors or you stop it |
| **This session** | **Allow for now** | "until this chat reloads or you revoke access" |
| **This chat** | **Allow for this chat** | "in future responses in this chat on this device until you revoke access" |

Work locally uses its own labels for read-only approvals: **Allow reads for this response**, **Allow reads for now**, and **Allow reads this chat**. Some tools word their button differently, and some show no duration menu because they approve one action at a time.

After you decide, the card shows **Allowed**, **Denied**, **Stopped**, or **Allowed by Full access**.

**Deny** blocks that action, and Bearly continues without it where it can. **Stop** ends the whole task.

### What Standard asks for, by tool

| Tool | What asks first |
|---|---|
| [Work locally](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md#work-locally) | Every read, write, edit, file transfer, and command, with the command or file on the card |
| [Bearly Browser](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md#bearly-browser) | **Let this chat use this site?** for each new site; **Confirm this Browser action** before a submission or other consequential action; **Allow this visual Browser action?**; **Save this website file to chat?**; **Run this website tool?** |
| [Control Chrome](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md#control-chrome) | **Read your Chrome tabs**, **Control Chrome**, or **Use Chrome DevTools**; a higher level covers the lower ones |
| [Computer Use](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md#computer-use) | **Use your computer** for the task; **Confirm this computer action** before a consequential step your request didn't cover, or when a safety check is raised |
| [Connectors](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md#connectors) | **Connect** plus the service's name, when Bearly connects a new service for you; **Allow** plus the connector's name before using its tools |
| [Skill scripts](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md#skills) | A card titled with the skill and the script's path that shows the command, with the runtime and timeout in **Details** |
| Chat management | Listing your chats, reading other chats, and **Delete this chat?** before deleting |
| People Search | **Search for people?**, **Build the brief?**, and the other People Search confirmations before lookups that use your plan allowance |
| [Email and texts](https://bearly.ai/docs/manual/capabilities/email-and-text.md) | Nothing: asking for the email or text is the approval |

## The Permissions control

Next to the message box, the **Permissions** control shows this chat's mode and saved approvals. It reads **Full access** while Full access is on, with a **Paused** badge when it's paused. In the iOS app on a phone, it shows only a shield icon.

Open it to see:

- **Permissions** and "This chat · this device" — everything here applies only to this chat on this device.
- **Standard** — "Ask for approval when needed. Saved approvals still apply."
- **Full access** — "Use enabled tools without asking each time."
- The saved approvals, each with its duration and **Revoke**. With none: "No saved approvals in this chat."
- **Revoke all saved approvals**, and **Clear all permissions**, which also switches the chat to Standard.

Revoking stops the work in progress and makes Bearly ask again next time. Stopping a response doesn't remove approvals.

Saved approvals never sync to your other devices and never apply to routines. Each open window keeps its own copy, so if a chat is open in two windows, revoke in each. Approvals for a chat are deleted with the chat. Disconnecting, signing in again, or changing a connector's settings resets its approvals.

## Full access

Full access lets a chat use its enabled tools without asking each time. It covers only tools that are already on for the chat. It never turns on a tool, connects an account, grants a system permission, or removes the checks listed under [What always asks](#what-always-asks).

**Use it when:** you trust the task and the content it touches, and approving each step slows you down, for example a long refactor in a dedicated project folder.
**You need:** Full access available to your account and app version. On a managed organization, it's allowed unless an administrator turned it off. In the desktop app it covers every tool below; on the web, phones, and the iOS app it covers connectors only.



1. In the chat, select **Permissions** next to the message box, then **Full access**.
2. Read **Enable full access?** — "Bearly can use enabled tools to read, change, or delete files, run programs, and act in signed-in apps and websites without asking each time. Mistakes or instructions in untrusted content can cause unintended changes." It lists the enabled tools and says it "Applies to this chat on this device."
3. Select **Enable full access**, or **Cancel** to stay in Standard.



**What you get:** the control reads **Full access**, and actions run without cards; each shows **Allowed by Full access**. Tools and accounts you enable later in the chat are included.
**Limits:** "Organization rules, operating-system permissions, and required safety checks still apply." It's one chat on one device; other chats, other devices, and copies of the chat don't inherit it.
**Combines with:** [Routines](https://bearly.ai/docs/manual/capabilities/routines.md#permission-mode), which have their own, separate Full access.

The tools Full access can cover appear in the dialog as "Local files and commands", "Enabled skill scripts", "Computer control", "Bearly Browser", "Connected Chrome", and "Connected tools" (connectors). With nothing enabled it says "Enable an external tool in this chat to use Full Access."

> **Caution — Full access acts without checking with you**
> In Full access, Bearly can change or delete files, run programs, send messages, and act in signed-in sites without a card. Instructions hidden in a web page, file, or email can steer it. Use it in chats where you know what the task will touch.


### How long it stays on

Full access stays on in that chat on that device until you choose **Standard**: "Stays on in this chat on this device until you choose Standard or revoke it." Restarting the app, sleep, time away, and losing your connection don't turn it off.

It pauses only when Bearly or your device can't allow it: your organization turned it off, your account isn't eligible, or the desktop app needs an update. The control then shows the **Paused** badge, and the chat uses Standard approvals in the meantime ("Full access is paused. Approvals apply until it turns back on."). The pause notice says why:

- "Update Bearly to keep using Full access on this device. Until then, Bearly asks before using tools."
- "Your team turned off Full access. Bearly asks before using tools until your team turns it back on."
- "Full access isn't available right now. Bearly asks before using tools until it is, then turns Full access back on."

A paused chat keeps your choice. Once Full access is allowed again, it turns back on by itself when you send the next message or when the window comes back into focus. You can also open **Permissions** and select **Resume full access**.

To turn it off, open the control and select **Standard**. Bearly stops current work where it can; actions already finished elsewhere aren't undone. Your saved approvals stay.

### Start new chats in Full access

**App Settings** → **Privacy & Security** → **Start new chats in Full access**: "New chats on this device use your enabled tools without asking. Not recommended unless you know what you're doing."

Turning it on asks **Start every new chat in Full access?**, which warns that agents make mistakes and that "instructions hidden in web pages, files, or emails can steer them", and notes it "Applies on this device only. You can switch any chat back to Standard from Permissions." Select **Turn on**. It doesn't change existing chats, chats where you chose Standard, or routines. If Full access isn't available, the setting says why, for example "Your team administrator turned off Full Access."

## What always asks

These keep asking even in Full access:

- **Connecting a new service** — the **Connect** card for a connector.
- **Chat management** — listing your chats, reading other chats, and deleting chats.
- **Computer Use safety checks** — the **Confirm this computer action** card raised by a safety check during the task.
- **People Search lookups that use your plan allowance** — such as **Search for people?** and **Build the brief?**.
- **Routine consent** — turning on unattended local access or browser access for a routine.
- **Certificate warnings** in Bearly Browser — only you can decide.

Your computer's own permission prompts, such as macOS **Accessibility** and **Screen Recording**, or a Windows administrator prompt, are always yours to answer.

## Approvals in a voice call

During a voice call, with voice models that support it, Bearly reads a pending approval aloud and takes your spoken answer; with other voice models, the card stays on screen for you to answer. Say a complete reply such as "yes", "approve", "allow once", or "sure, go ahead". "Don't ask me again" or "allow for this chat" approves for this chat when that duration is offered. "No" or "deny" skips the action; "stop" ends the task and the call. Questions, conditions, and blanket approvals leave the card waiting. Routine consent cards always need the on-screen card. This listens for words, not for your voice, so use the card when others nearby could answer.

## Routines

A routine doesn't use the chat's approvals or the chat's Full access. In **Standard**, of the tools that would ask in a chat, a scheduled run can use only what you turned on for that routine: selected connectors, skill scripts you allowed, unattended local access, and Bearly Browser on the sites you approved. Anything else that needs approval is denied, and the run continues without it. A routine's own **Full access** is enabled in its editor on the desktop device that runs it, and a material edit sends it back to **Full access needs review**. See [Automate with Routines](https://bearly.ai/docs/manual/capabilities/routines.md#permission-mode).

## For organization administrators

On a managed organization, Full access eligibility is a separate setting from feature policies. Open **Organizations**, choose the organization, and on **Overview** find **Agent access**: "Control who can let agents use enabled external tools without asking for approval each time."

- **Allow full access by default** — on unless an administrator turned it off. "Each member must still enable it for each chat or routine on its device."
- **Turn off full access for everyone** — "stops within 60 seconds", turns off the default, and removes individual exceptions. Saved tool approvals remain. Confirm with **Turn off for everyone**.
- Per member, in **Members** → **Member settings** → **Full access**: **Use organization default**, **Allow full access**, or **Do not allow full access**.

Group administrators can't grant Full access. Allowing it doesn't turn on tools your policies turn off. See [Organizations](https://bearly.ai/docs/manual/organizations.md).

## Try this

### Approve a batch of edits once

A folder of files renamed and updated with one approval instead of forty.

**Why it works:** a **This response** approval covers every matching action until the answer ends, then expires on its own, so you review the plan once and nothing carries over to the next request.
**You need:** the desktop app; Work locally on for the chat with the folder chosen.



1. Ask for the plan before any change:

   ```text
   List the files in this folder you'd rename to the pattern YYYY-MM-DD-title.pdf, and what each new name would be. Don't change anything yet.
   ```

2. Check the list, then ask: "Go ahead with exactly that list."
3. At the first card, open **Details**, choose **This response**, and select **Allow for this response** — the rest of the renames run without cards.
4. When the answer ends, the approval ends with it.



**Swap in:** **This chat** when you'll keep working in the same folder for days; **Once** when each action needs its own look.
**If it stalls:** if a card asks for something outside the plan, deny it and ask Bearly why.

### Give one chat Full access for one folder

A chat that can work through a project folder without stopping, while every other chat keeps asking.

**Why it works:** Full access belongs to one chat on one device, and covers only the tools enabled in that chat. Pairing it with a dedicated working folder keeps the work focused.
**You need:** the desktop app; Full access available to your account; your organization allows **Work locally**.



1. Start a new chat for this work only, select **Work locally** → **Choose folder…**, and pick the project folder — keep backups of anything important.
2. Select **Permissions** → **Full access**, read the dialog, and select **Enable full access**.
3. Ask for the job and its boundary:

   ```text
   Update every import of the old logger to the new one in this folder, run the tests, and fix what breaks. Don't touch anything outside this folder or push anything.
   ```

4. When you're done, open **Permissions** and select **Standard**.



**Swap in:** turn on Bearly Browser in the same chat to check a local page after each change; keep Standard and use **This chat** approvals instead when you want a record of each step.
**If it stalls:** if the control shows **Paused**, read the notice; Full access comes back by itself once it's allowed again.

### Check what a chat can do, and take it back

A clean slate in a chat where you approved more than you meant to.

**Why it works:** every saved approval for a chat on this device is listed in one place, and revoking stops current work at once.
**You need:** nothing beyond the chat.



1. Select **Permissions** next to the message box — saved approvals are listed with their durations.
2. Select **Revoke** beside one, or **Clear all permissions** to switch to Standard and remove them all.
3. If the chat is open in another window, repeat there.



**Swap in:** **Revoke all saved approvals** to keep Full access but drop the saved approvals.
**If it stalls:** for a routine, change its own settings in the routine editor; chat approvals never applied to it.

## Related

- [Let Bearly use a browser, your files, and your computer](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md) — the tools these approvals cover.
- [Privacy and security](https://bearly.ai/docs/manual/privacy-and-security.md) — how Bearly handles your data.
- [Choose how Bearly uses external tools](https://bearly.ai/docs/settings/agent-permissions.md) in the feature guides.

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Send email and texts](https://bearly.ai/docs/manual/capabilities/email-and-text.md)
- [Next: Building blocks: how Bearly's features connect](https://bearly.ai/docs/manual/combine/building-blocks.md)
- [Related: Let Bearly use a browser, your files, and your computer](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md)
- [Related: Connect apps and add skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md)
- [Related: Automate with Routines](https://bearly.ai/docs/manual/capabilities/routines.md)
- [Related: Run Bearly for an organization](https://bearly.ai/docs/manual/organizations.md)
