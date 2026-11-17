---
title: "Approvals, permissions, and Full access"
description: "How Bearly asks before it acts outside the chat, answering a card Once, This chat, or Always for each kind of action, the one card that covers a whole Code Mode step, the per-reply limits on sending and spending, what always asks, reviewing and changing answers in the Permissions panel and Settings, Full access, organization Agent access, routine permission mode, and spoken approvals."
canonical: "https://bearly.ai/docs/manual/capabilities/permissions/"
markdown: "https://bearly.ai/docs/manual/capabilities/permissions.md"
---

# Approvals, permissions, and Full access

HTML: [https://bearly.ai/docs/manual/capabilities/permissions/](https://bearly.ai/docs/manual/capabilities/permissions/)

> How Bearly asks before it acts outside the chat, answering a card Once, This chat, or Always for each kind of action, the one card that covers a whole Code Mode step, the per-reply limits on sending and spending, what always asks, reviewing and changing answers in the Permissions panel and Settings, Full access, organization Agent access, routine permission mode, and spoken approvals.

When a chat wants to reach outside itself, such as reading a local file, opening a site, working in Chrome, using a connected app, running a skill script, or controlling your screen, Bearly shows an approval card first. You answer for the kind of action: just this once, for the rest of this chat, or always. If you'd rather not be asked at all, **Full access** lets one chat on one device use its enabled tools without asking, with a short list of checks that always ask anyway.

## Approval cards

A card's title says what Bearly is about to do, such as **Let this chat use this site?** or **Make more images or speech?**. Under it, "Bearly will:" names the kind of action, such as **Change files** or **Spend from your plan**, then the reason. A command or file path shows on the card itself, and **Show details** opens the specifics, such as the site, connector, or tool.

The buttons are **Deny**, **Stop** where offered, **Once**, **This chat**, and **Always**:

| Answer | Covers |
|---|---|
| **Once** | This one action |
| **This chat** | Every action of this kind in this chat, on this device, until you change it in **Permissions** |
| **Always** | Every action of this kind, in every chat, on every device you're signed in on |

**Always** asks you to confirm. The card swaps its buttons for what it covers, for example "Bearly will read files without asking, in every chat, on every device you're signed in on. Undo it in Permissions.", with **Back** and a confirm button such as **Always allow reading files**.

Some cards add a menu under the buttons, **This chat and Always cover**, set to the kind of action. Change it to:

- **Only** plus the one thing the card names, such as **Only example.com** on a site card. This applies to this chat only, so **Always** is unavailable while it's selected.
- **Everything (Full access)**, "Every enabled tool, without asking". This opens the **Enable full access?** dialog; see [Full access](#full-access). It's offered only where Full access is available for the chat on this device.

Bearly Browser's site card, **Let this chat use this site?**, is the one where **Once** covers more than one action: it lets Bearly use that site until the reply ends, because opening, reading, and clicking on a page each use the site.

After you answer, the card shows **Allowed**, **Allowed in this chat**, **Always allowed**, **Denied**, **Stopped**, or **Allowed by Full access**. A card for a kind you've just allowed with **This chat** or **Always** closes by itself, except a card for a destructive action, such as deleting or overwriting, which always waits for its own answer.

In most chats, a card waiting for an answer shows on every device where the chat is open, and you can answer it on any of them; on the others it reads "Asked on another device". In a shared chat, only the person who sent the message can approve its actions; everyone else sees "Waiting for the person who sent this message".

**Deny** blocks that action, and Bearly continues without it where it can. In the answer's **Steps**, that call opens to "You declined this." **Stop** ends the whole task. A step's time in **Steps** leaves out the time it waited for your answer.

### One card for a whole step

With [**Execution Mode**](https://bearly.ai/docs/manual/chat/settings.md#execution-mode) set to **Code Mode**, one step can make many tool calls. Before it starts, one card lists every kind of action the step will take that you haven't already allowed, under "Bearly will:", such as **Read files** and **Change files**. Its title is the step's description, or one such as **Bearly wants to read files and change files**, and **Show details** shows the code Bearly wrote. You answer for the whole step:

- **Once** allows those kinds of action for this step only.
- **This chat** and **Always** allow every listed kind, as on any card. **Always** asks you to confirm, with a button such as **Always allow both**.
- **Deny** lets the step go on without any of the listed actions; those calls aren't allowed and don't ask again during the step.
- **Stop**, where offered, ends the task.

Each action still shows in **Steps** as it happens. Cards that always ask, and the per-reply limit cards, still come up on their own for the call that needs them. If your organization requires asking each time, the card reads "Your team requires asking each time." and offers only **Once**; each action in the step then asks for itself.

### Kinds of action

| Kind | What it covers | Cards you'll see |
|---|---|---|
| **Read files** | "Open, list and search files on your computer." | [Work locally](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md#work-locally) reading a file or attaching one to the chat |
| **Change files** | "Create, edit and save files on your computer." | Work locally writing, editing, or saving a file |
| **Run commands** | "Run shell commands and skill scripts on your computer." | Work locally commands, shown on the card; [skill scripts](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md#skills), on a card titled with the skill and the script's path |
| **Control your computer** | "Move the pointer, type and click in your apps." | [Computer Use](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md#computer-use): **Use your computer**, **Confirm this computer action** before a consequential step your request didn't cover, and **Use your keyboard and pointer briefly** |
| **Use websites in your browser** | "Open sites, fill in forms and click in your signed-in browser." | [Bearly Browser](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md#bearly-browser): **Let this chat use this site?**, **Confirm this Browser action**, **Allow this visual Browser action?**, **Save this website file to chat?**, **Run this website tool?**. [Chrome](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md#control-chrome): **Read your Chrome tabs**, **Control Chrome**, **Use Chrome DevTools**; a higher level covers the lower ones |
| **Use connected apps** | "Read and change data in Gmail, Calendar and your other connected apps." | [Connectors](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md#connectors): **Allow** plus the connector's name; Gmail and Google Calendar cards such as **Create this Gmail draft?** |
| **Send messages** | "Send email and texts beyond 3 in one reply." | **Send more messages?**; see [Per-reply limits](#per-reply-limits) |
| **Spend from your plan** | "Paid lookups, images, speech, video and model runs beyond a reply's allowance." | The per-reply limit cards |

## Per-reply limits

In one reply, Bearly sends a few messages and makes a few paid items without asking. Past these limits, each additional one asks first:

| Limit in one reply | What counts | Card |
|---|---|---|
| 3 messages | [Send Email and Send SMS](https://bearly.ai/docs/manual/capabilities/email-and-text.md), together | **Send more messages?** |
| 4 images or speech clips | [Imagine](https://bearly.ai/docs/manual/capabilities/images-video-audio.md#imagine), Touch Up, [Upscale](https://bearly.ai/docs/manual/capabilities/images-video-audio.md#upscale), [Remove background](https://bearly.ai/docs/manual/capabilities/images-video-audio.md#remove-background), and [Read aloud](https://bearly.ai/docs/manual/capabilities/images-video-audio.md#read-aloud), together | **Make more images or speech?** |
| 1 video | [Make Video and Edit Video](https://bearly.ai/docs/manual/capabilities/images-video-audio.md#make-video) | **Make another video?** |
| 1 model run | [Council of Experts](https://bearly.ai/docs/manual/capabilities/research.md#council-of-experts) and [Computer Use](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md#computer-use) tasks, together | **Start another model run?** |
| 5 paid lookups | [Best Pick](https://bearly.ai/docs/manual/capabilities/research.md#best-pick), [SEO data](https://bearly.ai/docs/manual/capabilities/research.md#seo-data), [X](https://bearly.ai/docs/manual/capabilities/videos-and-posts.md#x), [hotel search](https://bearly.ai/docs/manual/capabilities/research.md#hotel-search), the [property, sanctions, and package lookups](https://bearly.ai/docs/manual/capabilities/research.md#property-sanctions-and-package-lookups), [Translate Document](https://bearly.ai/docs/manual/capabilities/documents.md#translate-document), and Scholar's journal-site search | **Run more paid lookups?** |

The card says what the reply has done so far, such as "This reply has made 4 images or speech clips. More count against your plan." **Once** allows one more. **This chat** or **Always** for **Send messages** or **Spend from your plan** stops these cards for that kind. **Deny** refuses the rest of that reply's calls past the same limit, such as more images, without another card.

Each message you send starts a fresh count, including one you send while an answer is still running and each thing you say in a voice call. Work that Council of Experts' experts do counts toward the same reply's limits. Full access never answers these cards, and [routines](https://bearly.ai/docs/manual/capabilities/routines.md) don't count against them.

## What always asks

The Permissions panel and Settings say it in one line: "Bearly asks every time before it deletes chats or files, publishes or shares, changes who pays, connects an account, or sets up unattended access. Reading your other chats can be allowed for one chat, never always."

These cards have **Deny** and one confirm button, such as **Allow**, which is red for a deletion or unattended access. **This chat**, **Always**, and Full access never cover them, except reading your other chats, which can be allowed for this chat:

- **Deleting** — **Delete this chat?** (or how many chats), and **Delete "file name"?** for a file Bearly made in the chat. Every deletion gets its own card.
- **Reading your other chats** — listing your chats or reading another chat. The card also offers **This chat**.
- **People Search lookups** — **Search for people?**, **Find work emails for…**, **Enrich… leads?**, and **Build the brief?**, with "Bearly will:" naming the lookup, such as **Search for people** or **Build a brief about a person**. Each shows what it will look up and asks every time.
- **Connecting an account** — the **Connect** card for a connector, such as **Connect Linear?**.
- **Unattended access** — turning on unattended local access or browser access for a [routine](https://bearly.ai/docs/manual/capabilities/routines.md).
- **Computer Use safety checks** — a **Confirm this computer action** card raised by a safety check during the task.
- **Certificate warnings** in Bearly Browser — only you can decide.

Your computer's own permission prompts, such as macOS **Accessibility** and **Screen Recording**, or a Windows administrator prompt, are always yours to answer.

## The Permissions control

At the foot of the message box, the **Permissions** control opens this chat's permissions. It reads **Permissions**, with a count when the chat has answers saved, or **Full access** while Full access is on, with a **Paused** badge when it's paused. In the iOS app on a phone, it shows only a shield icon.

Open it to see:

- **Permissions** and "This chat".
- **Ask first** — "Bearly asks before it acts, unless you've said yes below."
- **Full access** — "Use enabled tools without asking. This chat on this device." When Full access can't be turned on here, the reason shows under it.
- **What Bearly may do without asking** — each kind of action with a menu: **Ask**, **This chat** ("Until you change it here"), or **Always** ("Every chat, on every device"). Choosing **Always** asks you to confirm, as on a card. While Full access is on, every kind except **Send messages** and **Spend from your plan** reads **Full access**.
- Single things you allowed with **Only**, or a site you allowed **Once**, listed under their kind with how long they last and **Revoke**. Others are under **Also allowed in this chat**.
- The line on what always asks.
- **Ask about everything again** — "Clears this chat's answers and turns Full access off. Always answers stay; change them in Settings."

Setting a kind back to **Ask**, revoking, or **Ask about everything again** stops the reply in progress, so nothing it planned runs on the old answer, and Bearly asks again next time. Stopping a reply doesn't change your answers.

**This chat** answers stay on the device where you gave them and never apply to routines; only a card still waiting for an answer can be answered from another device. Each open window keeps its own copy, so if a chat is open in two windows, change it in each. A chat's answers are deleted with the chat. Disconnecting a connector, signing in to it again, or changing its settings resets its answers.

**Always** answers belong to your account. Setting one back to **Ask** on any device stops it everywhere from the next action.

### Settings → Permissions

**Settings** → **Permissions** lists your **Always** answers under **What Bearly may do without asking**: "Always applies in every chat, on every device you're signed in on." Each kind shows what it covers and a menu with **Ask** or **Always**; choosing **Always** asks you to confirm. Answers for a single chat are in that chat's **Permissions** control. The same pane holds [Start new chats in Full access](#start-new-chats-in-full-access).

## Full access

Full access lets a chat use its enabled tools without asking each time. It covers only tools that are already on for the chat. It never turns on a tool, connects an account, grants a system permission, covers **Send messages** or **Spend from your plan**, or removes the checks listed under [What always asks](#what-always-asks).

**Use it when:** you trust the task and the content it touches, and approving each step slows you down, for example a long refactor in a dedicated project folder.
**You need:** Full access available to your account and app version. On a managed organization, it's allowed unless an administrator turned it off. In the desktop app it covers every tool below; on the web, phones, and the iOS app it covers connectors only.



1. In the chat, select **Permissions** at the foot of the message box, then **Full access**. You can also choose **Everything (Full access)** in a card's **This chat and Always cover** menu.
2. Read **Enable full access?** — "Bearly can use enabled tools to read, change, or delete files, run programs, and act in signed-in apps and websites without asking each time. Mistakes or instructions in untrusted content can cause unintended changes." It lists the enabled tools and says it "Applies to this chat on this device."
3. Select **Enable full access**, or **Cancel** to keep asking first.



**What you get:** the control reads **Full access**, and actions run without cards; each shows **Allowed by Full access**. Tools and accounts you enable later in the chat are included.
**Limits:** "Organization rules, operating-system permissions, and required safety checks still apply." Per-reply limits and People Search still ask. It's one chat on one device; other chats, other devices, and copies of the chat don't inherit it.
**Combines with:** [Routines](https://bearly.ai/docs/manual/capabilities/routines.md#permission-mode), which have their own, separate Full access.

The tools Full access can cover appear as "Local files and commands", "Enabled skill scripts", "Computer control", "Bearly Browser", "Connected Chrome", "Connected tools" (connectors), "Connected Gmail accounts", and "Connected Google Calendar accounts". With nothing enabled it says "Enable an external tool in this chat to use Full Access."

> **Caution — Full access acts without checking with you**
> In Full access, Bearly can change or delete files, run programs, and act in signed-in apps and sites without a card. Instructions hidden in a web page, file, or email can steer it. Use it in chats where you know what the task will touch.


### How long it stays on

Full access stays on in that chat on that device until you choose **Ask first**: "Stays on in this chat on this device until you choose Ask first." Restarting the app, sleep, time away, and losing your connection don't turn it off.

It pauses only when Bearly or your device can't allow it: your organization turned it off, your account isn't eligible, or the desktop app needs an update. The control then shows the **Paused** badge, and the chat asks first in the meantime ("Full access is paused. Approvals apply until it turns back on."). The pause notice says why:

- "Update Bearly to keep using Full access on this device. Until then, Bearly asks before using tools."
- "Your team turned off Full access. Bearly asks before using tools until your team turns it back on."
- "Full access isn't available right now. Bearly asks before using tools until it is, then turns Full access back on."

A paused chat keeps your choice. Once Full access is allowed again, it turns back on by itself when you send the next message or when the window comes back into focus. You can also open **Permissions** and select **Resume full access**.

To turn it off, open the control and select **Ask first**. Bearly stops current work where it can; actions already finished elsewhere aren't undone. Your **This chat** and **Always** answers stay.

### Start new chats in Full access

**Settings** → **Permissions** → **Start new chats in Full access**: "New chats on this device use your enabled tools without asking. Not recommended unless you know what you're doing."

Turning it on asks **Start every new chat in Full access?**, which warns that agents make mistakes and that "instructions hidden in web pages, files, or emails can steer them", and notes it "Applies on this device only. You can switch any chat back to Ask first from Permissions." Select **Turn on**. It doesn't change existing chats, chats where you chose **Ask first**, or routines. If Full access isn't available, the setting says why, for example "Your team administrator turned off Full Access."

## Approvals in a voice call

During a voice call, with voice models that support it, Bearly reads a pending approval aloud and takes your spoken answer; with other voice models, the card stays on screen for you to answer. Say a complete reply such as "yes", "approve", "allow once", or "sure, go ahead" to allow it once. "Don't ask me again" or "allow for this chat" answers **This chat** when the card offers it. **Always** and **Everything (Full access)** are on the card only. "No" or "deny" skips the action; "stop" ends the task and the call. Questions, conditions, and blanket approvals leave the card waiting. Routine consent cards always need the on-screen card. This listens for words, not for your voice, so use the card when others nearby could answer.

## Routines

A routine doesn't use the chat's answers, your **Always** answers, or the chat's Full access, and its runs don't count against per-reply limits. In **Standard**, of the tools that would ask in a chat, a scheduled run can use only what you turned on for that routine: selected connectors, skill scripts you allowed, unattended local access, and Bearly Browser on the sites you approved. Anything else that needs approval is denied, and the run continues without it. A routine's own **Full access** is enabled in its editor on the desktop device that runs it, and a material edit sends it back to **Full access needs review**. See [Automate with Routines](https://bearly.ai/docs/manual/capabilities/routines.md#permission-mode).

## For organization administrators

On a managed organization, Full access eligibility is a separate setting from feature policies. Open **Organizations**, choose the organization, and on **Overview** find **Agent access**: "Control who can let agents use enabled external tools without asking for approval each time."

- **Allow full access by default** — on unless an administrator turned it off. "Each member must still enable it for each chat or routine on its device."
- **Turn off full access for everyone** — "stops within 60 seconds", turns off the default, and removes individual exceptions. Confirm with **Turn off for everyone**.
- Per member, in **Members** → select the member → **Full access**: **Use organization default**, **Allow full access**, or **Do not allow full access**.

A member without Full access also can't answer **This chat** or **Always**: cards offer only **Deny** and **Once**, with "Your team requires asking each time.", and the Permissions panel and Settings show every kind as **Ask**. Answers they saved earlier stop applying but aren't deleted.

Group administrators can't grant Full access. Allowing it doesn't turn on tools your policies turn off. See [Organizations](https://bearly.ai/docs/manual/organizations.md).

## Try this

### Approve a batch of edits once

A folder of files renamed and updated without a card for every file.

**Why it works:** **This chat** covers every action of one kind in this chat, so you review the plan once, answer the first card, and the rest run. Setting the kind back to **Ask** afterwards takes it back.
**You need:** the desktop app; Work locally on for the chat with the folder chosen.



1. Ask for the plan before any change:

   ```text
   List the files in this folder you'd rename to the pattern YYYY-MM-DD-title.pdf, and what each new name would be. Don't change anything yet.
   ```

2. Check the list, then ask: "Go ahead with exactly that list."
3. At the first card, check the command or file, then select **This chat** — the rest of that kind run without cards. If a card for another kind appears, such as **Change files** after **Run commands**, answer it the same way.
4. When the renames are done, open **Permissions** and set those kinds back to **Ask**.



**Swap in:** **Only** in the card's **This chat and Always cover** menu to allow just that one thing; **Once** when each action needs its own look; **Always** for a kind you never want to be asked about.
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

4. When you're done, open **Permissions** and select **Ask first**.



**Swap in:** turn on Bearly Browser in the same chat to check a local page after each change; keep **Ask first** and answer **This chat** for each kind instead when you want to see each kind of action before it starts.
**If it stalls:** if the control shows **Paused**, read the notice; Full access comes back by itself once it's allowed again.

### Check what a chat can do, and take it back

A clean slate in a chat where you allowed more than you meant to.

**Why it works:** every answer that applies to a chat, from this chat and from **Always**, is listed in one panel, and changing one stops current work at once.
**You need:** nothing beyond the chat.



1. Select **Permissions** at the foot of the message box — each kind of action shows **Ask**, **This chat**, or **Always**.
2. Set a kind back to **Ask**, select **Revoke** beside a single site or item, or select **Ask about everything again** to clear this chat's answers and turn Full access off.
3. To take back an **Always** answer, set it to **Ask** here or in **Settings** → **Permissions**; it stops on every device.
4. If the chat is open in another window, repeat there.



**Swap in:** **Ask first** to turn off Full access but keep your other answers.
**If it stalls:** for a routine, change its own settings in the routine editor; chat answers never applied to it.

## Related

- [Let Bearly use a browser, your files, and your computer](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md) — the tools these approvals cover.
- [Privacy and security](https://bearly.ai/docs/manual/privacy-and-security.md) — how Bearly handles your data.
- [Choose how Bearly uses external tools](https://bearly.ai/docs/settings/agent-permissions.md) in the feature guides.

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Send email and texts](https://bearly.ai/docs/manual/capabilities/email-and-text.md)
- [Next: Building blocks: how Bearly's features connect](https://bearly.ai/docs/manual/combine/building-blocks.md)
- [Related: Tune a chat: settings, style, reasoning, and memory](https://bearly.ai/docs/manual/chat/settings.md)
- [Related: Let Bearly use a browser, your files, and your computer](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md)
- [Related: Connect apps and add skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md)
- [Related: Make images, video, and audio](https://bearly.ai/docs/manual/capabilities/images-video-audio.md)
