---
title: "Connect apps and add skills"
description: "How to connect services and your own MCP servers to Bearly, turn a connector on for a chat or a routine, sign in on each device, and install and run skills, including the built-in Visualize and Bearly AI Models skills, with platform limits and approvals."
canonical: "https://bearly.ai/docs/manual/capabilities/connectors-and-skills/"
markdown: "https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md"
---

# Connect apps and add skills

HTML: [https://bearly.ai/docs/manual/capabilities/connectors-and-skills/](https://bearly.ai/docs/manual/capabilities/connectors-and-skills/)

> How to connect services and your own MCP servers to Bearly, turn a connector on for a chat or a routine, sign in on each device, and install and run skills, including the built-in Visualize and Bearly AI Models skills, with platform limits and approvals.

Connectors give a chat another app's own tools: find a page in your workspace, read an issue, check a deployment. Skills give Bearly a reusable method for a kind of work, with instructions and, sometimes, scripts it can run on your computer. Both are set up once in **App Settings** and then used by name in chats and routines.

## Connectors

A connector is an MCP server: a service that offers tools Bearly can call. Bearly comes with presets for common services, and you can add any server you trust.

**Use it when:** you want answers from your own work apps, such as open issues, recent deployments, or a workspace page, or you want Bearly to make a change there that you've asked for.
**You need:** your organization allows **MCP Connectors**; to add your own servers, it also allows **Personal MCP servers**. Connectors that need a service sign-in can't be connected in the iOS app (see [Where connectors work](#where-connectors-work)).

A connector goes through three states:

- **Installed** — it's in your list under **Your connectors**, but not signed in or checked yet.
- **Connected** — Bearly reached it; a green dot appears by its name.
- **Active** — you turned it on in a chat. A connected connector does nothing in a chat until you do.

### Add a built-in connector

The **Built-in connectors** list offers Notion, Linear, Calendly, Vercel, Cloudflare, GitHub, Stripe, Webflow, Atlassian, Sentry, and Intercom.



1. Open the account menu at the bottom of the sidebar, select **App Settings**, then **Connectors**.
2. Under **Built-in connectors**, select **Add** beside the service — it moves to **Your connectors**, not yet signed in.
3. Select **Connect** and finish the service's own sign-in in the window that opens — read the permissions it asks for before approving.
4. Back in Bearly, the green dot shows it's connected.



### Add your own MCP server



1. Open **App Settings** → **Connectors** and select **Add custom MCP server**.
2. Choose a **Transport**: **HTTPS** for a server on the web, or **npm package** to run a package on your computer (desktop app only). Give it a **Name**.
3. For HTTPS, enter the **Server URL** (a Streamable HTTP server over HTTPS) and pick **Authentication**: **OAuth (automatic)** for servers with MCP sign-in (optionally with **OAuth scopes**), **Bearer token**, **Custom headers**, or **No authentication**. For npm, enter the **npm package**, any **Arguments**, and **Environment variables**.
4. Select **Add and check** — Bearly saves the server, contacts it, and lists the tools it found. If it can't connect, the reason appears under the row.



Tokens and header values you enter are stored in this Bearly profile on this device. An npm server runs on your computer as you, so it can reach your files.

> **Caution — Only add servers you trust**
> A remote server sees what each tool call sends it and can return instructions along with its results. An npm package runs on your computer with your access. Add a server because you know who publishes it.


### Turn a connector on in a chat



1. In the chat, select **Connectors** next to the message box — rows show **Active**, **Off**, **Connect**, **Retry**, or **Web browser required**.
2. Select a connected service to make it **Active** — the chip then shows its name, or the number of active connectors.
3. Ask for a specific result and say what must not change:

   ```text
   Using Linear, list the issues assigned to me that changed this week, grouped by project. Don't edit anything.
   ```

4. At **Allow Linear?** (the card names your connector), pick an **Approval duration** and allow — the card warns that "This connected server controls what its tools do." One approval covers that server's tools, including ones that change data.



**What you get:** answers built from the service's own data, and changes made there when you ask for them. Bearly can do only what the server's tools and your account in that service allow.
**Limits:** a tool image over 20 MB is rejected. Approvals reset when you disconnect, sign in again, or change the server's settings. A server's own "read-only" labels don't limit an approval.
**Combines with:** [Routines](https://bearly.ai/docs/manual/capabilities/routines.md#tools-and-skills) for scheduled digests; [Pages](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md) and `/visualize` to turn results into a page; [email](https://bearly.ai/docs/manual/capabilities/email-and-text.md) to send them.

You can also ask Bearly to find and connect a service for you, in a typed chat or a voice call: "connect Linear and show my open issues". Bearly asks with a card such as **Connect Linear?**, and that card always asks, even in Full access. If the service needs a sign-in, Bearly then shows **Continue sign-in**.

### Sign in on each device

A connection belongs to the Bearly profile where you set it up: this browser, the desktop app, or the iOS app. It isn't copied to your other devices. Connect the service again on each one you use. Routines use the connections on the device that runs them; if a selected connector isn't connected there, the run says so.

**Disconnect** drops the sign-in but keeps the connector in your list. The pencil (**Edit**) changes a server you added. The **Remove** X takes it out of your list. None of these delete anything in the service itself; to revoke Bearly's access there, use the service's own connected-apps settings.

### Servers from your organization

An organization administrator can add servers to a policy under **Team MCP servers**. They appear in your list with **Managed by your team policy**. You still sign in with your own account: select **Connect**, or the pencil (**Set up authentication**) to enter your own token or header value.

### Where connectors work

| Where | Servers with a token, headers, or no sign-in | Servers with a service sign-in | npm servers |
|---|---|---|---|
| Desktop app | Yes | Yes | Yes |
| Web app and phone browsers | Yes | Yes | No |
| iOS app | Yes | No, shows **Web browser required** | No |
| A browser opened inside another app on Android | Yes | No | No |

npm servers off the desktop app show **Desktop required** and "npm MCP servers require the Bearly desktop app."

## Skills

A skill is a folder with an instruction file and, often, supporting files and scripts. When you ask for it, or when your request clearly matches what it's for, Bearly opens the skill and follows its method. Scripts in a skill run on your computer, with your approval.

**Use it when:** you want the same method every time, such as a house style for documents, a review checklist, a report built the same way each week, or a workflow your team shares.
**You need:** the desktop app to install skills and run their scripts; your organization allows **Skills**, and **Add Skills** to install them. Built-in skills work on every platform.

### Built-in skills

- **Visualize** — type `/visualize` and describe what you want to see. It turns an idea, layout, process, or dataset into a focused visual: an interactive planner or simulation when controls help, and a generated picture only when you ask for one.
- **Bearly AI Models** — lets scripts Bearly writes call Bearly's models with a short-lived token: chat models, image generation, document text recognition, web search, HTML-to-PDF, and audio transcription. In Work locally and skill scripts, the token is supplied to each run automatically and lasts about five minutes. See the recipe [Classify a folder of files with Bearly's models](#classify-a-folder-of-files-with-bearlys-models).

### Install a skill



1. In the desktop app, open **App Settings** → **Skills** — the **Skill Store** opens.
2. Under **Skill repositories**, expand a repository to see its skills, and select **Install** beside one.
3. Read **Install third-party skill?** — it shows the source and warns that a skill "can include instructions and scripts. It may be wrong or malicious, and local execution can modify or delete data". Select **I understand the risks** only for a source you trust.
4. The skill appears under **Installed** as **Enabled**.



To install from somewhere else, use **Install from source**: **Git** with **Add Repository**, an HTTPS **URL ZIP** with its **SHA-256** and **Install**, or a **Folder** with **Import Folder** (copies it) or **Link Folder** (uses it in place). Under **Installed**, **Pause** hides a skill from chats, **Enable** brings it back, **Uninstall** removes a copied skill, and **Unlink** disconnects a linked folder without deleting it.

If your organization limits who adds skills, the pane says "Admins can add and remove Skills. You can browse repositories and pause Skills already available here."

### Use a skill in a chat



1. Type `/skill` in the message box — enabled skills appear in the list, each as `/skill-` followed by its name.
2. Pick one and describe the job — Bearly opens that skill before answering.
3. If the skill needs a script, a card titled with the skill and the script's path appears, showing the command. Open **Details** for the file, runtime, any packages it installs, and the timeout. Pick an **Approval duration** and allow, or **Deny**.



**What you get:** work done the skill's way. A longer approval is saved as "Run" plus the skill's name plus "scripts" and covers that skill's scripts.
**Limits:** scripts run as you on your computer; it isn't a sandbox. Installed skills and their files are on this desktop only; on the web and phones, chats that used one stay readable, but Bearly can't open its files there.
**Combines with:** [Routines](https://bearly.ai/docs/manual/capabilities/routines.md#tools-and-skills), where a skill's **Allow scripts** switch lets its scripts run unattended; [Work locally](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md#work-locally); [Projects](https://bearly.ai/docs/manual/projects.md), where owners and writers can attach skills to every chat in the project.

Your organization can also turn off **Skill scripts** separately from **Work locally**.

## Try this

### Get a weekly issue digest by email

Every Friday afternoon, an email listing what closed and what's still open in your tracker.

**Why it works:** a routine pins the connectors you pick, with **Read-only** keeping the run to tools that only look things up. The run's answer becomes the email, because **Email each result** sends each finished result to you.
**You need:** Pro or higher; the desktop app open on the device that runs the routine; Linear (or another tracker) connected on that device; your organization allows **MCP Connectors**, **Routines**, and **Email notifications**.



1. Connect Linear in **App Settings** → **Connectors** in the desktop app — routines use that device's connections.
2. Open **Routines** and type into **Create a routine**, then select **Draft routine**:

   ```text
   Every Friday at 4 PM, list the Linear issues closed this week and the ones still open in the current cycle, grouped by project, with owners.
   ```

3. In the editor, open **Tools and skills** → **Plugin** → **Connectors**, pick Linear, and set its **Tools** to **Read-only**.
4. Turn on **Email each result** and select **Create routine**. To see the first digest now, open the routine again from **Your routines** and select **Run now**.



**Swap in:** GitHub instead of Linear for pull requests; **Text each result** for a two-line summary instead of an email; a **Notification filter** such as "only if something is overdue".
**If it stalls:** if the run says the connector isn't connected, connect it on the device shown in **Run location**. If **Read-only** leaves no tools for the job, set **Tools** to **All** and keep "don't change anything" in the instructions.

### Turn open pull requests into a status page

A one-page view of open pull requests, grouped by reviewer and age, that you can share.

**Why it works:** the connector returns the pull requests as data in the chat, and `/visualize` turns data already in the chat into a Page.
**You need:** GitHub connected and turned on in the chat; your organization allows **MCP Connectors**.



1. Select **Connectors** by the message box and make GitHub **Active**.
2. Ask:

   ```text
   Using GitHub, list the open pull requests in our main repository with author, reviewers, and days open. Don't comment or change anything.
   ```

   Approve **Allow GitHub?** for **This response**.
3. Type `/visualize` and ask:

   ```text
   Make a status page from these pull requests: group them by reviewer, flag anything open more than 7 days, and add a filter by author.
   ```

4. Open the Page in the chat, and publish it if you want a link (see [Pages and canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md)).



**Swap in:** Sentry issues or Vercel deployments instead of pull requests; email the page to yourself afterward.
**If it stalls:** the connector's tools decide what Bearly can list. If it can't filter the way you asked, ask for everything first and filter in the next turn.

### Classify a folder of files with Bearly's models

A `labels.csv` that tags hundreds of text files, made by a script that calls Bearly's models for each one.

**Why it works:** Work locally runs a script Bearly writes in your folder, and the built-in Bearly AI Models skill gives that script a short-lived token for Bearly's models, so each file gets its own model call. You don't create or paste an API key, and usage counts on your Bearly account.
**You need:** the desktop app; your organization allows **Work locally** and **Skills**.



1. Select **Work locally** → **Choose folder…** and pick the folder of files.
2. Ask:

   ```text
   Use the Bearly AI Models skill. Write a script that reads every .txt file in this folder, asks a fast model to label each as bug, billing, or how-to, and writes filename and label to labels.csv. Try it on 5 files first, show me the results, then run it on the rest.
   ```

3. Review the script and the command in **Details**, then allow — the trial run on 5 files shows the labels before the full run.
4. Open `labels.csv`, or ask Bearly to add it to the chat.



**Swap in:** summaries instead of labels; image generation or transcription for a folder of prompts or recordings; a [routine with unattended local access](https://bearly.ai/docs/manual/capabilities/routines.md#unattended-local-access) to label new files every morning.
**If it stalls:** a script that runs longer than its time limit stops; ask Bearly to process the files in batches. If calls start failing after a few minutes, the token expired; ask Bearly to get a fresh one and continue.

## Related

- [Approvals, permissions, and Full access](https://bearly.ai/docs/manual/capabilities/permissions.md) — what each connector and script approval covers.
- [Use Bearly from scripts and agents](https://bearly.ai/docs/manual/api-and-agents.md) — API keys for code that runs outside Bearly.
- [Connectors](https://bearly.ai/docs/features/connectors.md) and [Skills](https://bearly.ai/docs/features/skills.md) in the feature guides.

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Let Bearly use a browser, your files, and your computer](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md)
- [Next: Automate with Routines](https://bearly.ai/docs/manual/capabilities/routines.md)
- [Related: Make Pages and edit in Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md)
- [Related: Send email and texts](https://bearly.ai/docs/manual/capabilities/email-and-text.md)
- [Related: Projects: shared context, files, and settings](https://bearly.ai/docs/manual/projects.md)
- [Related: Approvals, permissions, and Full access](https://bearly.ai/docs/manual/capabilities/permissions.md)
