---
title: "Projects: shared context, files, and settings"
description: "How Bearly projects work, including creating one, sidebar actions, roles and sharing, every Project Settings control, Docs & Data files and desktop folder sync, how project chats inherit settings and memory, password protection, archiving, and tested setups."
canonical: "https://bearly.ai/docs/manual/projects/"
markdown: "https://bearly.ai/docs/manual/projects.md"
---

# Projects: shared context, files, and settings

HTML: [https://bearly.ai/docs/manual/projects/](https://bearly.ai/docs/manual/projects/)

> How Bearly projects work, including creating one, sidebar actions, roles and sharing, every Project Settings control, Docs & Data files and desktop folder sync, how project chats inherit settings and memory, password protection, archiving, and tested setups.

A project keeps related chats, files, instructions, and chat defaults in one place. Every chat you start inside it can use the project's files and follows the project's settings, and you can share the whole project with people in your organization.

## Create a project

A project is the right container when you'll come back to the same material across many chats: a client engagement, a research topic, a course, or a product launch.

**You need:** your organization's **Create projects** policy on, if you belong to one. If **Require project passwords** is on, the password switch is already on and can't be turned off.



1. In the sidebar, find **Projects** and select **New project** (the folder-plus icon) — this opens **Create New Project**.
2. Enter a **Project Name** — Bearly suggests an icon from the name, and you can pick another from the icon picker.
3. Optional: turn on **Enable password encryption?**, then enter a **Password** of at least 8 characters and **Confirm Password** — see [Password protection](#password-protection) before you do.
4. Select **Create Project** — Bearly opens the new project's **Settings** page so you can set it up.



You can also start a chat in a project from the new-chat screen. Select the project chip under the composer ("Start this chat in a project"), then search with **Find or create a project...**, pick from **Recent** or **All projects**, or choose **New project**. **No project** starts an ordinary chat. The chip can't be changed once the chat starts; to move the chat later, use **Move to project...**.

## Find your way around a project

Select a project in the sidebar to expand it. You'll see:

- **Settings** — Project Settings, covered [below](#project-settings).
- **Docs & Data** — the project's files.
- **Start chat** — a new chat inside the project.
- The project's chats, pinned chats first. Chats you archived individually don't appear here.

A people icon marks a shared project. The **Projects** header also has **Collapse all projects**.

The project's **…** menu offers **Rename** (owners), **Archive** or **Unarchive**, and **Delete** (owners). An archived project shows **Delete · unarchive first**.

### Move chats into or out of a project

Open a chat's **…** menu and select **Move to project...**. Search with **Search projects...**, or pick from **Pinned**, **Recent**, or **All projects**. **Remove from project** moves the chat back to your main chat list without deleting it. You can't move a chat into an archived project. See [Organize chats](https://bearly.ai/docs/manual/chat/organize.md).

## Roles

| Role | What the role picker says | What they can do |
| --- | --- | --- |
| **No Access** | — | Nothing through this grant |
| **Reader** | "Can view chats and files within the project." | View the project and take part in its existing chats |
| **Writer** | "Can view, participate, and create new chats within the project." | Everything a Reader can, plus start chats, add and delete project files, edit shared project settings, and add or remove project Skills when their policy allows adding Skills |
| **Owner** | "Full access including managing project settings, permissions, and deletion." | Everything a Writer can, plus rename, delete, password protection, sharing, and the project icon |

Projects have no public link. Only people you share with can open them.

## Project Settings

Open a project and select **Settings**. The page header shows the project icon, which an owner can change, and an owner badge. Below it are the sections in this order.

### Collaboration

**You need:** to be the project's owner, to belong to at least one organization, and your organization's **Project collaboration** policy on.

The row shows **Private** or **Shared**, with **Share** or **Manage**. The share panel reads "Share with a person, group, or whole organization." and has three parts:

- **People** — search with "Search teammates by name or email" (type at least 2 characters). Only members of your organizations appear, and each organization's **Member directory** setting decides whether its members can be found. **People with access** lists everyone already shared.
- **Groups** — your organization's groups. An inactive group shows **Unavailable**.
- **Organizations** — share with everyone in an organization at once.

Give each row a role: **No Access**, **Reader**, **Writer**, or **Owner**. Select **Done** to close. You can share with individuals only inside your own organizations. Organization admins can see and remove organization and group access from the [Projects tab](https://bearly.ai/docs/manual/organizations.md).

### Encryption

Owners manage project passwords here. Others see "Only owners can manage encryption." The status reads **Protected**, **Device Encrypted**, or **Not Protected**, with **Protect**, **Lock**, **Change**, or **Remove** as they apply. See [Password protection](#password-protection).

### Project Chat Settings

This card sets the defaults for chats in the project ("Default settings for chats in this project."). In a shared project it's called **Shared Project Settings** ("Default settings for everyone in this shared project."). Turn the card on with its switch. The badge reads **Enabled** or **Disabled**, and changes save automatically.

| Field | Options | What it does | Lockable |
| --- | --- | --- | --- |
| **Model** | Models available to your account | The model project chats use | Yes |
| **Language** | **Default** or a reply language | The language replies are written in | Yes |
| **Response Style** | **Default** or a style such as **Concise** or **Formal** | Tone and length of replies | Yes |
| **Temperature** | **Factual** (0.5), **Default** (1), **Creative** (1.5), or a slider from 0 to 2 | How focused or varied replies are | Yes |
| **Instructions** | Free text ("Custom instructions for this project...") | Added to every chat in the project | Yes |
| **Disable Personalization** | Switch: "Ignore user personalization settings in this project" | Your name, occupation, and About you aren't sent in project chats | No |
| **Always Search Documents** | Switch: "Always search project documents before responding" | Every message searches the project's files before the reply | Yes |

The lock beside a field decides whether people can change it in their own chats. Its tooltip reads "Users can change..." or "Users cannot change...". If your organization's policy controls a field, it shows "Disabled by policy." In a shared project only Writers and Owners can edit this card ("Only project writers and owners can modify shared project settings.").

> **Tip — When to turn on Always Search Documents**
> Turn it on when nearly every question in the project depends on its files, such as a contract set or a research library. Leave it off when most chats are general and only some need the files. Chats can still search the files when you ask. It has no effect in end-to-end encrypted chats, which can't search documents.


### Skills

"Skills available to chats in this project." Writers and Owners can add or remove project Skills when their policy allows adding Skills. Otherwise the section says "Your policy lets you use shared Skills, but not add or remove them." or "Only project writers and owners can change project Skills." See [Connectors and Skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md).

### Personal Chat Settings

In a shared project, each person also gets **Personal Chat Settings**: "Your personal settings that override shared project settings." It has the same fields and switch as the shared card. Your choices apply only to you and only to fields the shared settings leave unlocked.

### Local Directory Sync

**You need:** the [desktop app](https://bearly.ai/docs/manual/get-bearly.md), Writer access ("You need writer permissions to create directory syncs."), and file uploads allowed by your organization.



1. Select **Add Directory**, then **Browse** to choose a folder — Bearly copies its files into the project.
2. Decide on **Auto-remove** — when on, a file deleted from the folder is removed from the project too.
3. Set **Max file size** (1 to 1000 MB, default 100 MB) and, if you like, **File types** as comma-separated extensions — only matching files are synced.
4. Select **Create Sync**.



Each sync has **Sync now**, **Configure sync**, and delete ("Delete this sync? Files already synced will remain in the project."). Syncs set up on another device are listed with that device's name and can only be deleted from here.

## Docs & Data

**Docs & Data** holds the project's files. Every chat in the project can use them without attaching them again.

- **Upload** with the button, or drag files onto the page ("Drop files here").
- Each upload shows **Waiting...**, a percentage, then **Complete**. A failed upload can be dismissed. After upload, Bearly analyzes the file so chats can search it.
- **Search files...** filters by name. Switch between grid and list view.
- Select mode lets you pick several files and **Delete** them together.
- Select a file to open **File Details**: rename it, read its **Document Information** (Description, Topics, People, Extracted Text), check **Analysis Engines**, use **Rerun Analysis** or **Get help** if something failed, see its **Directory Sync** source, **Download File**, or **Delete File**.

A file that needs attention shows "Analysis failed or incomplete". Deleting a project file is permanent.

**Limits:** each file can be up to 300 MB, and a project holds up to 2 GB of files on every plan. Writers and Owners add files; Readers see "You need writer access to add files to this Project." Your organization can turn uploads off ("File uploads are disabled by your organization.") or turn off project files ("Project files are disabled by your organization."). See [Documents](https://bearly.ai/docs/manual/capabilities/documents.md) for what chats can do with files.

## How project chats inherit settings

A project chat builds its settings in layers. A later layer overrides an earlier one, unless an earlier layer locks the field:

1. Bearly's defaults.
2. Your organization's explicit chat rules and feature controls.
3. The project's shared settings (**Project Chat Settings** or **Shared Project Settings**).
4. Your **Personal Chat Settings** in a shared project.
5. **This Chat** in Settings, or the composer controls for that one chat.

Two layers that apply to ordinary chats are skipped in projects: your **New Chats** defaults and your organization's **Chat defaults**. In a project chat, **Settings** → **New Chats** reads "Default settings are not available in project chats. Use Project Settings to configure." Organization feature controls and locks still apply. See [Chat settings](https://bearly.ai/docs/manual/chat/settings.md).

Project **Instructions** are added to every chat in the project, alongside any instructions on the chat itself.

### Memories in a project

In a project chat, the composer's sliders menu offers **Memories**: **Off**, **Project Only**, or **All Chats**. Project chats start on **Project Only**, which recalls context only from other chats in the same project. **All Chats** searches all your chats. Your organization's **Memory Recall** policy can turn Memories off, and end-to-end encrypted chats don't use Memories.

## Password protection

A project password adds a lock to the project's files and settings. While the project is locked, its chats are read-only and **Settings** and **Docs & Data** ask for the password. Use it for material that should need a second step to open on each device.

**You need:** to be the project's owner.



1. Open the project's **Settings** and, under **Encryption**, select **Protect** — "Set a password to encrypt this project. We cannot recover your data if you forget it."
2. Enter a password of at least 8 characters and confirm it, then select **Protect** — the status changes to **Protected**.
3. Select **Lock** when you're done — chats become read-only until the password is entered again.
4. To unlock, open **Settings** or **Docs & Data**, enter the password, and select **Unlock** — turn on **Unlock all rooms that use this password?** to unlock other items that share it.



- **Change** asks for the **Current password** and a new one, then **Change Password**.
- **Remove** warns "Protection will be permanently removed. Anyone with account access can view this project." Select **Remove Protection** to confirm. **Remove** is hidden when your organization requires project passwords.
- **Settings** → **Account** → **Lock all data** relocks every password-protected project on this device.

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

**Why it works:** **Always Search Documents** makes every message search Docs & Data before the reply, and project **Instructions** apply to every chat. Locking both keeps individual chats from turning them off.
**You need:** Owner or Writer access; files in **Docs & Data** that have finished analysis.



1. Upload your sources in **Docs & Data** and wait until each shows **Complete** — files still being analyzed can't be searched yet.
2. In **Settings**, turn on **Project Chat Settings**, then turn on **Always Search Documents** and lock it — every chat now searches the files first.
3. In **Instructions**, add a citation rule and lock it:

   ```text
   Answer only from the project files. After each claim, name the file and quote the passage you used. If the files don't cover the question, say so instead of guessing.
   ```

4. Select **Start chat** and ask a question the files answer — check that the reply names the file and quotes it.



**Swap in:** use **Local Directory Sync** on the desktop app so new files in a folder join the knowledge base automatically. Set **Response Style** to **Concise** for short answers.
**If it stalls:** a file showing "Analysis failed or incomplete" can't be searched. Open **File Details** and select **Rerun Analysis**. If replies ignore the files, confirm the card reads **Enabled**.

### A shared project where each person picks their own model

A team works from the same files and instructions, but each collaborator uses the model they prefer.

**Why it works:** shared settings apply to everyone, and **Personal Chat Settings** override any field the shared settings leave unlocked. Lock what must stay the same and leave **Model** open.
**You need:** Owner access, an organization with **Project collaboration** on, and teammates in that organization.



1. In **Settings**, turn on **Shared Project Settings**, write the team's **Instructions**, and lock them — everyone works from the same brief.
2. Leave the lock on **Model** open — each person can choose their own.
3. Select **Share**, add teammates or a group, and give them **Writer** — they can start chats and add files.
4. Each collaborator opens **Settings** in the project, turns on **Personal Chat Settings**, and picks a **Model** — their chats use that model, while the instructions stay shared.



**Swap in:** lock **Model** too when results must be comparable across the team. Give **Reader** to people who should only follow along.
**If it stalls:** a teammate who can't change a field is looking at a locked one or a field set by organization policy ("Disabled by policy."). If **Share** is missing, check that you belong to an organization and that **Project collaboration** is on.

### Keep a client's context inside its project

Recall stays within one client's chats, and nothing about you rides along.

**Why it works:** **Memories** on **Project Only** recalls only chats in this project, and **Disable Personalization** stops your profile from being added to project chats.
**You need:** Owner or Writer access to change project settings.



1. In the project's **Settings**, turn on **Project Chat Settings** and turn on **Disable Personalization** — your name and profile aren't added to project chats.
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
- [Related: Connect apps and add skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md)
- [Related: Get Bearly on every device](https://bearly.ai/docs/manual/get-bearly.md)
- [Related: Work with files and documents](https://bearly.ai/docs/manual/capabilities/documents.md)
