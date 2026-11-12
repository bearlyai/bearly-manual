---
title: "Projects: shared context, files, and settings"
description: "How Bearly projects work, including creating one, the project page and its Chats, Files, Sharing, and Settings tabs, roles and sharing, every project setting, project files and desktop folder sync, how project chats inherit settings and memory, password protection, archiving, and tested setups."
canonical: "https://bearly.ai/docs/manual/projects/"
markdown: "https://bearly.ai/docs/manual/projects.md"
---

# Projects: shared context, files, and settings

HTML: [https://bearly.ai/docs/manual/projects/](https://bearly.ai/docs/manual/projects/)

> How Bearly projects work, including creating one, the project page and its Chats, Files, Sharing, and Settings tabs, roles and sharing, every project setting, project files and desktop folder sync, how project chats inherit settings and memory, password protection, archiving, and tested setups.

These instructions cover Bearly on the web and desktop, including the web app in a phone browser.

A project keeps related chats, files, instructions, and chat defaults in one place. Every chat you start inside it can use the project's files and follows the project's settings, and you can share the whole project with people in your organization.

## Create a project

A project is the right container when you'll come back to the same material across many chats: a client engagement, a research topic, a course, or a product launch.

**You need:** your organization's **Create projects** policy on, if you belong to one. If **Require project passwords** is on, the password switch is already on and can't be turned off.



1. In the sidebar, find **Projects** and select **New project** (the folder-plus icon) — this opens **Create New Project**.
2. Enter a **Project Name** — Bearly suggests an icon from the name, and you can pick another from the icon picker.
3. Optional: turn on **Enable password encryption?**, then enter a **Password** of at least 8 characters and **Confirm Password** — see [Password protection](#password-protection) before you do.
4. Select **Create Project** — Bearly opens the new project's **Settings** tab so you can set it up, and unfolds **Projects** in the sidebar.



You can also start a chat in a project from the new-chat screen. Select the project chip at the foot of the composer (it reads **No project**; its tooltip says "Start this chat in a project"), then search with **Find or create a project...**, pick from **Recent** or **All projects**, or choose **New project**. **No project** starts an ordinary chat. The chip can't be changed once the chat starts; to move the chat later, use **Move to project...**.

Or ask Bearly in any chat, for example "Create a project called Client onboarding". It creates an empty project without leaving your chat, and you can then ask it to move chats into it. If a project with that name already exists, Bearly asks whether to use that one or make a second. It follows the same **Create projects** policy; when your organization requires project passwords, create the project yourself with **New project**, because only you can set the password.

## Find your way around a project

Select a project in the sidebar to open its page. It opens on the **Chats** tab. The header shows the project's icon and name, whether it's **Private**, **Shared**, or "Shared with 3 people", **Password protected** or **Device encrypted** if it is, and who created it. **Share** opens the **Sharing** tab; at phone width it's in the **More project actions** menu (**…**). The page has four tabs:

- **Chats** — ask something in the project, and the project's chats. See [Chats tab](#chats-tab).
- **Files** — the project's files and, in the desktop app, synced folders. See [Files tab](#files-tab).
- **Sharing** — who has access, and password protection. See [Sharing tab](#sharing-tab).
- **Settings** — the icon, chat defaults, and Skills, plus your own settings in a shared project. See [Settings tab](#settings-tab).

In the sidebar, each project has one row. The arrow at the end of the row (**Show chats** or **Hide chats**) shows or hides its chats under it, pinned chats first. Opening a project, or a chat in it, unfolds it. Chats you archived individually don't appear there. While a project's chats are hidden, a mark on its row tells you a chat in it is working, waiting for your approval, or unread. A people icon after the name marks a shared project; hover it to see with how many people. Select the **Projects** heading to fold the whole section; it then reads, for example, "4 projects". The heading has **New project**, and **Collapse all projects** once any project is expanded.

The project's **…** menu in the sidebar offers **Rename** (owners), **Archive** or **Unarchive**, and **Delete** (owners). An archived project shows **Delete · unarchive first**.

### Chats tab

**Ask in this project** is a message box: type a question and select **Ask in a new chat**, and Bearly starts a chat in the project with your question and opens it. If the chat can't start, your question stays in the box with **Retry**. **New chat** beside it opens an empty chat in the project. An empty project shows example questions such as "Summarize the files in this project".

Below it are the project's chats, pinned first, then by latest activity. Each row shows its status ("Waiting for approval", "Bearly is working", "Unread", "Locked on this device", "End-to-end encrypted", "Device encrypted") and when it started, such as "Started today". More than eight chats are grouped under **Pinned**, **Today**, **This week**, and **Earlier**. Each chat's **…** offers **Rename**, **Pin** or **Unpin**, **Move to project…**, **Archive**, **Mark read** or **Mark unread**, and **Delete**, which asks "Delete this chat?" first.

On any of the project's tabs, <kbd>⌘</kbd> <kbd>N</kbd> (<kbd>Ctrl</kbd> <kbd>N</kbd> on Windows and Linux; a web browser may keep this key for its own windows) also starts a new chat in the project.

### Move chats into or out of a project

Open a chat's **…** menu and select **Move to project...**. Search with **Search projects...**, or pick from **Pinned**, **Recent**, or **All projects**. **Remove from project** moves the chat back to your main chat list without deleting it. You can't move a chat into an archived project. See [Organize chats](https://bearly.ai/docs/manual/chat/organize.md).

## Roles

| Role | What the role picker says | What they can do |
| --- | --- | --- |
| **No Access** | — | Nothing through this grant |
| **Reader** | "Can view chats and files within the project." | View the project and its files, and take part in its existing chats |
| **Writer** | "Can view, participate, and create new chats within the project." | Everything a Reader can, plus start chats, add, rename, and delete project files, edit shared project settings, and add or remove project Skills when their policy allows adding Skills |
| **Owner** | "Full access including managing project settings, permissions, and deletion." | Everything a Writer can, plus rename, delete, password protection, sharing, and the project icon |

In most shared chats, only the person who sent a message can approve that answer's actions or add to it while it runs. Everyone else sees "Waiting for the person who sent this message" on its approval cards, and a message they send waits until the answer finishes.

Projects have no public link. Only people you share with can open them.

## Files tab

**Files** holds the project's files. Every chat in the project can search and read them without attaching them again.

- **Upload** with the button, or drop files anywhere on the page ("Drop files here"). An empty project shows **Add files to this project** with **Upload**.
- Each upload shows **Waiting…**, "Uploading" with a percentage, then **Added**. You can cancel one in progress or dismiss a failed one. After upload, Bearly reads the file so chats can search it: the file shows **Reading…**, or **Couldn't read** with **Retry**. A file Bearly couldn't read stays saved, but chats may not be able to search it.
- **Search files** filters by name.
- To work on several files, hover a file and tick its checkbox, or use <kbd>⌘</kbd>-click or <kbd>Shift</kbd>-click (<kbd>Ctrl</kbd>-click on Windows and Linux). A bar shows how many are selected, with **Select all**, **Clear**, and **Delete**.
- Each file's **…** offers **Details**, **Download**, **Rename**, **Select**, and **Delete…**. **Details** opens a panel beside the list (a sheet on phones) with the file's size, type, and when it was added; **About this file** (topics, people, dates, and its text); its reading status, with **Get help** if a step failed; where it was synced from; **Download**; and delete.

To keep a file from a chat in the project, ask in a chat that's in the project, for example "Copy budget.xlsx into this project". Bearly saves a copy on the **Files** tab and shows it in the chat with the project's name under the file. The original stays in the chat. You need Writer access, and each file can be up to 100 MB. Project files aren't end-to-end encrypted, so when you copy a file out of an end-to-end encrypted chat, Bearly tells you the project copy is a regular project file.

Deleting a project file is permanent; Bearly asks "Delete this file?" first.

**Limits:** each file can be up to 1000 MB, and a project holds up to 2 GB of files on every plan. Writers and Owners add files; Readers can open and download them, and files sent to the project from elsewhere are refused with "You need writer access to add files to this Project." When your organization turns off file uploads or project files, **Upload** and **Sync a folder** don't appear, and files sent from elsewhere are refused with "File uploads are disabled by your organization." or "Project files are disabled by your organization." See [Documents](https://bearly.ai/docs/manual/capabilities/documents.md) for what chats can do with files.

### Sync a folder

Keep a folder on your computer copied into the project.

**You need:** the [desktop app](https://bearly.ai/docs/manual/get-bearly.md), Writer access, and file uploads and project files allowed by your organization. Synced folders don't appear on the web, on phones, or in the iOS app.



1. On the **Files** tab, select **Sync a folder** — "Files in the folder are added to this project and kept up to date while the desktop app is open on this device."
2. Select **Choose folder…** and pick the folder.
3. Optional: list **Only these file types** as comma-separated extensions (leave it empty to sync every file), set **Skip files larger than** (1 to 1000 MB, default 100 MB), and turn on **Remove files deleted from the folder** so a file deleted from the folder is removed from the project too.
4. Select **Start syncing**.



Synced folders are listed above the files, each with the device it syncs from and when it last synced. On this device, a folder has a sync-now button and **…** → **Edit…** or **Delete…** ("Delete this synced folder?"; files already synced stay in the project). Folders synced from another device show that device's name and can only be deleted from here.

## Sharing tab

**You need:** to be the project's owner to change access, to belong to at least one organization, and your organization's **Project collaboration** policy on. Anyone with access can open the tab and see who else has it. If you can't change it, the tab says why: "Only owners can change who has access.", "Your organization has turned off project sharing.", or "Join or create an organization to share projects."

- **People** — "Readers see chats and files. Writers also start chats. Owners manage sharing and settings." Search with "Add people by name or email" (type at least 2 characters). Only members of your organizations appear, and each organization's **Member directory** setting decides whether its members can be found. **People with access** lists everyone already shared, you first.
- **Groups** — your organization's groups. "Everyone in a group gets the access you choose." An inactive group shows **Unavailable**. The section is hidden when your organizations have no groups.
- **Organization access** — give everyone in an organization the same access.

Give each row a role: **No Access**, **Reader**, **Writer**, or **Owner**. Changes apply right away, and once someone else has access the header reads **Shared**. You can share with individuals only inside your own organizations. Organization admins can see and remove organization and group access from the [Projects tab](https://bearly.ai/docs/manual/organizations.md).

### Encryption

Owners manage the project password under **Encryption** → **Password protection**. Others see "Only owners can manage encryption." The row reads "Protected. Opening this project needs its password.", "Device encrypted. Its key stays on your devices.", or "Not protected. Anyone with access can open it.", with **Protect**, **Lock**, **Change**, or **Remove** as they apply. See [Password protection](#password-protection).

## Settings tab

The **Settings** tab has, in order: **Project**, the project's chat settings, **Skills**, and, in a shared project, **Your chat settings**.

### Project

**Icon** — "Shown beside the project in the sidebar." Only owners can change it; others see "Only owners can change the icon."

### Project chat settings

This section sets the defaults for chats in the project ("Defaults for new chats in this project."). In a shared project it's called **Shared project settings** ("Defaults for everyone's chats in this project."). Turn it on with **Use project defaults** ("New chats in this project start with the settings below."); the fields stay dimmed while it's off, and changes save automatically.

| Field | Options | What it does | Lockable |
| --- | --- | --- | --- |
| **Model** | **Not set**, or models available to your account | The model project chats use | Yes |
| **Language** | **Default** or a reply language | The language replies are written in | Yes |
| **Response style** | **Default** or a style such as **Concise** or **Formal** | Tone and length of replies | Yes |
| **Temperature** | **Factual** (0.5), **Default** (1), **Creative** (1.5), or a slider from **Focused** to **Creative** (0 to 2) | How focused or varied replies are | Yes |
| **Instructions** | Free text ("What every chat in this project should know or do") | Added to every chat in the project | Yes |
| **Always search documents** | Switch: "Search the project's files before every answer." | Every message searches the project's files before the reply | Yes |
| **Disable personalization** | Switch: "Ignore each person's personalization settings in this project." | Your name, occupation, and About you aren't sent in project chats | No |

Each lockable field has a lock button beside it. Its tooltip names the field, such as "Members can change Model" or "Members can't change Model"; select it to lock the field so people can't change it in their own chats or in **Your chat settings**, where it then reads "Locked by the project owner." If your organization's policy controls a field, the field and its lock are unavailable, with "Disabled by policy." Only Writers and Owners can edit shared settings ("Only project writers and owners can change shared project settings.").

> **Tip — When to turn on Always search documents**
> Turn it on when nearly every question in the project depends on its files, such as a contract set or a research library. Leave it off when most chats are general and only some need the files. Chats can still search the files when you ask. It has no effect in end-to-end encrypted chats, which can't search documents.


### Skills

"Skills available to chats in this project." Writers and Owners can add or remove project Skills when their policy allows adding Skills. Otherwise the section says "Your policy lets you use shared Skills, but not add or remove them." or "Only project writers and owners can change project Skills." See [Connectors and Skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md).

### Your chat settings

In a shared project, each person also gets **Your chat settings**: "Your own overrides of the shared settings. Only you see them." Turn on **Use my settings** ("Your chats in this project use these instead of the shared ones.") and pick your values. It has the same fields as the shared section, without locks. Your choices apply only to you and only to fields the shared settings leave unlocked.

## How project chats inherit settings

A project chat builds its settings in layers. A later layer overrides an earlier one, unless an earlier layer locks the field:

1. Bearly's defaults.
2. Your organization's explicit chat rules and feature controls.
3. The project's shared settings (**Project chat settings**, or **Shared project settings** in a shared project).
4. **Your chat settings** in a shared project.
5. **This chat** in Settings, or the composer controls for that one chat.

Two layers that apply to ordinary chats are skipped in projects: your **New chats** defaults and your organization's **Chat defaults**. In a project chat, **Settings** → **New chats** reads "Default settings are not available in project chats. Use Project Settings to configure." Organization feature controls and locks still apply. See [Chat settings](https://bearly.ai/docs/manual/chat/settings.md).

Project **Instructions** are added to every chat in the project, alongside any instructions on the chat itself.

### Memories in a project

In a project chat, the composer's sliders menu offers **Memories**: **Off**, **Project Only**, or **All Chats**. Project chats start on **Project Only**, which recalls context only from other chats in the same project. **All Chats** searches all your chats. Your organization's **Memory Recall** policy can turn Memories off, and end-to-end encrypted chats don't use Memories.

## Password protection

A project password adds a lock to the project's files and settings. While the project is locked, its chats are read-only and its tabs ask for the password. Use it for material that should need a second step to open on each device.

**You need:** to be the project's owner.



1. Open the project's **Sharing** tab and, under **Encryption**, select **Protect** next to **Password protection** — "Set a password to encrypt this project. We can't recover your data if you forget it."
2. Enter a **Password (at least 8 characters)** and **Confirm password**, then select **Protect** — the row reads "Protected. Opening this project needs its password."
3. Select **Lock** when you're done — chats become read-only until the password is entered again.
4. To unlock, open any of the project's tabs, enter the password, and select **Unlock** — turn on **Unlock all rooms that use this password?** to unlock other items that share it.



- **Change** asks for the **Current password** and a new one twice, then **Change password**.
- **Remove** warns "This removes the password for good. Anyone with access to the project can open it." Select **Remove protection** to confirm. **Remove** is hidden when your organization requires project passwords.
- **Settings** → **Profile** → **Lock all data** relocks every password-protected project on this device.

**Limits:**

- Bearly can't recover a forgotten project password, and there's no reset. Store it somewhere safe.
- You enter the password again on each new device and after you log out.
- A project password is a separate lock on stored project data. It isn't [end-to-end encryption](https://bearly.ai/docs/manual/privacy-and-security.md), and messages you send still go to the model as usual.
- **Device Encrypted** means the project is locked with a key kept on one device, as happens when an organization requires device-only encryption. It opens only on that device, and there's no password to change.

## Archive or delete a project

**Archive** hides a project from the sidebar without deleting anything. Archived items are listed under **Archives** at the bottom of the sidebar, where you can open the project's chats or select **Unarchive**.

**Delete** (owners only) asks you to confirm **Delete Project**: "This action cannot be undone. The project and its settings will be permanently deleted." The **Also delete all chats in this project** switch decides what happens to the chats:

- Off: "Chats will be moved back to your main chat list".
- On: "All chats will be permanently deleted".

Unarchive a project before deleting it.

## Setups that work well

### A knowledge base that always cites its files

Every answer in the project checks the project's files first and points to the passage it used.

**Why it works:** **Always search documents** makes every message search the project's files before the reply, and project **Instructions** apply to every chat. Locking both keeps individual chats from turning them off.
**You need:** Owner or Writer access; files on the project's **Files** tab that Bearly has finished reading.



1. Upload your sources on the **Files** tab and wait until none shows **Reading…** — files still being read can't be searched yet.
2. On the **Settings** tab, turn on **Use project defaults**, then turn on **Always search documents** and lock it — every chat now searches the files first.
3. In **Instructions**, add a citation rule and lock it:

   ```text
   Answer only from the project files. After each claim, name the file and quote the passage you used. If the files don't cover the question, say so instead of guessing.
   ```

4. On the **Chats** tab, type a question the files answer into **Ask in this project** and select **Ask in a new chat** — check that the reply names the file and quotes it.



**Swap in:** use **Sync a folder** on the **Files** tab in the desktop app so new files in a folder join the knowledge base automatically. Set **Response Style** to **Concise** for short answers.
**If it stalls:** a file showing **Couldn't read** can't be searched; select **Retry** on it, or open **Details** to see why. If replies ignore the files, confirm **Use project defaults** is on.

### A shared project where each person picks their own model

A team works from the same files and instructions, but each collaborator uses the model they prefer.

**Why it works:** shared settings apply to everyone, and **Your chat settings** override any field the shared settings leave unlocked. Lock what must stay the same and leave **Model** open.
**You need:** Owner access, an organization with **Project collaboration** on, and teammates in that organization.



1. On the **Settings** tab, turn on **Use project defaults** under **Shared project settings**, write the team's **Instructions**, and lock them — everyone works from the same brief.
2. Leave the lock on **Model** open — each person can choose their own.
3. Select **Share**, add teammates or a group, and give them **Writer** — they can start chats and add files.
4. Each collaborator opens the project's **Settings** tab, turns on **Use my settings** under **Your chat settings**, and picks a **Model** — their chats use that model, while the instructions stay shared.



**Swap in:** lock **Model** too when results must be comparable across the team. Give **Reader** to people who should only follow along.
**If it stalls:** a teammate who can't change a field is looking at one the project locked ("Locked by the project owner.") or one set by organization policy ("Disabled by policy."). If **Share** is missing, check that you belong to an organization and that **Project collaboration** is on; the **Sharing** tab says which.

### Keep a client's context inside its project

Recall stays within one client's chats, and nothing about you rides along.

**Why it works:** **Memories** on **Project Only** recalls only chats in this project, and **Disable personalization** stops your profile from being added to project chats.
**You need:** Owner or Writer access to change project settings.



1. On the project's **Settings** tab, turn on **Use project defaults** and turn on **Disable personalization** — your name and profile aren't added to project chats.
2. Start a chat in the project and open the composer's sliders menu — confirm **Memories** shows **Project Only**.
3. Ask about earlier work:

   ```text
   What did we decide about the launch timeline in earlier chats in this project?
   ```

   — Bearly recalls only from chats in this project.



**Swap in:** set **Memories** to **Off** for a chat that shouldn't draw on anything earlier. Add a project password for a client whose files need a second step to open.
**If it stalls:** if Memories is missing, your organization may have turned off **Memory Recall**.

## Related

- [Run Bearly for an organization](https://bearly.ai/docs/manual/organizations.md) — groups, the Projects tab, and project policies
- [Privacy and security controls](https://bearly.ai/docs/manual/privacy-and-security.md) — project passwords next to the other privacy controls
- [Chat settings](https://bearly.ai/docs/manual/chat/settings.md) and [Organize chats](https://bearly.ai/docs/manual/chat/organize.md)
- [Team recipes](https://bearly.ai/docs/manual/combine/team-recipes.md)

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Recipes for teams and projects](https://bearly.ai/docs/manual/combine/team-recipes.md)
- [Next: Run Bearly for an organization](https://bearly.ai/docs/manual/organizations.md)
- [Related: Organize, find, share, and export chats](https://bearly.ai/docs/manual/chat/organize.md)
- [Related: Work with files and documents](https://bearly.ai/docs/manual/capabilities/documents.md)
- [Related: Get Bearly on every device](https://bearly.ai/docs/manual/get-bearly.md)
- [Related: Connect apps and add skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md)
