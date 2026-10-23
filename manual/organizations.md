---
title: "Run Bearly for an organization"
description: "How to create and run a Bearly organization, including managed and unmanaged organizations, every console tab and setting (Overview, Agent access, Microsoft Entra and provisioning, Access banner, Members, Groups, Projects, Policies, Billing seats, Usage, Activity), and the complete policy control catalog."
canonical: "https://bearly.ai/docs/manual/organizations/"
markdown: "https://bearly.ai/docs/manual/organizations.md"
---

# Run Bearly for an organization

HTML: [https://bearly.ai/docs/manual/organizations/](https://bearly.ai/docs/manual/organizations/)

> How to create and run a Bearly organization, including managed and unmanaged organizations, every console tab and setting (Overview, Agent access, Microsoft Entra and provisioning, Access banner, Members, Groups, Projects, Policies, Billing seats, Usage, Activity), and the complete policy control catalog.

An organization holds your members, groups, and policies in one place. Admins add people, share projects with the whole organization or a group, buy seats, and, on a managed organization, decide which models and features members can use.

## Managed and unmanaged organizations

| | Unmanaged | Managed |
| --- | --- | --- |
| Who sets it up | Anyone can create one | Bearly sets it up for your email domain after you request it with **Upgrade to Managed** |
| Members | Added by an admin, active right away | Same, plus people on your email domain can join automatically |
| Groups, shared projects, access banner, activity log | Yes | Yes |
| Seat billing | Yes, when offered | Yes, unless Bearly provides your plan directly |
| Policies, spending limits, usage reports | No (**Policies** shows **Managed only**) | Yes |
| Member directory, managed-domain access, member suspension | No | Yes |
| Agent access, Microsoft Entra sign-in and provisioning | No | Yes |

Consumer email domains can't be managed. On a managed organization, most policy, agent access, and spending rules apply to members whose email is on the managed domain.

## Create or open an organization



1. Open the account menu at the bottom of the sidebar and select **Organizations** — the console opens your first organization's **Overview**, or **No organizations yet**.
2. With no organizations, enter a name in **Organization name (min 4 chars)** and select **Create**. Otherwise select **New organization**, enter an **Organization name** (4 to 18 characters), and select **Create organization**.
3. Bearly opens the new organization's **Overview** — the header pill shows **Admin** ("You can manage this organization").



To switch organizations, open **Organizations** again and pick another one. Members of a managed organization who aren't its admins can't create organizations.

### Tabs and who sees them

| Tab | Who sees it |
| --- | --- |
| **Overview**, **Members**, **Groups** | Everyone in the organization |
| **Billing** | Admins, when seat billing is offered and Bearly doesn't already provide the organization's plan |
| **Usage** | Admins of a managed organization |
| **Policies**, **Projects** | Admins |
| **Activity** | Admins |

## Overview

The header shows the organization's name (admins can select the pencil to rename it, 4 to 18 characters), its plan badge or **Free plan**, its managed domain if it has one, and the member count. Admins also see tiles for **Members**, **Plan**, and, when they apply, **Billing · Seats** and **Policies**.

### Upgrade to Managed

An admin of a free, unmanaged organization can request a managed organization.



1. Select **Upgrade to Managed** — "Request a managed organization plan. Our team will set up billing and configure your organization."
2. Choose a **Plan**: **Pro**, **Analyst**, **Research**, or **Max**.
3. Optional: enter your email **Domain** — "Users with this email domain will automatically join your organization."
4. Select **Send Request** — the header shows **Request is being reviewed** while Bearly reviews it.



Sending the request doesn't change your plan. Bearly's team follows up to set up billing and the domain.

### Your membership

Members see **Your membership** with their **Role** and **Policy**. **Leave organization** removes your access to its shared chats and projects. On a managed domain you can't leave yourself: "Your membership is managed by _domain_." The last admin can't leave.

### Settings

Admins see a **Settings** section:

- **Managed-domain access** (managed): how people with your domain join. **Automatically add anyone with @_domain_** (the default) or **Require an organization administrator to add each person**. Turning off automatic access doesn't remove current members, and the new rule reaches all of Bearly within ten minutes. With the second option, someone on your domain who isn't a member is told to contact an administrator.
- **Member directory** (managed): whether ordinary members can find managed-domain teammates by name or email. **All managed members** or **Disabled for members**. It never shows roles, policies, spending limits, or invite status. It affects teammate search in project sharing and the **Members** tab.
- **Delete organization**: only for a free, unmanaged organization. Type the name in **Confirm name** and **Confirm name again**, then select **Delete organization**. Managed organizations and organizations with a paid plan show a note to contact support instead.

## Access banner

The access banner shows members a message they must accept before they can use Bearly, for example an acceptable-use notice. It's available on every organization.



1. On **Overview**, find **Access banner** and select **Configure**.
2. Turn on **Show access banner** — "Members must accept it before they can continue."
3. Fill in **Heading** (default "Before you continue", up to 120 characters), **Message (Markdown)** (required, up to 20,000 characters), and **Accept button text** (default "Accept & Continue", up to 80 characters).
4. Optional: turn on **Let members sign out** — the banner adds a **Sign out** option.
5. Choose a **Frequency**: **Session** (each time the app or browser opens), **Daily** (the default), or **Weekly**.
6. Check **Preview** or **Open preview**, then select **Save banner** — **Discard changes** throws away unsaved edits.



**Limits:** acceptance is remembered per device and per version of the banner, so each device asks separately, and saving a change asks everyone again.

## Agent access

**You need:** a managed organization and the admin role.

Agent access decides who on your managed domain may use Full access, which lets agents use enabled tools without asking for approval each time. See [Permissions](https://bearly.ai/docs/manual/capabilities/permissions.md).

- **Allow full access by default** is on unless an admin turns it off. "Applies to members on your managed domain. Each member must still enable it for each chat or routine on its device. Change individual exceptions in Members."
- **Turn off full access for everyone** opens a dialog with the number of eligible members: "Active full access stops within 60 seconds. The organization default will be off, and all individual exceptions will be removed. Saved tool approvals remain." Confirm with **Turn off for everyone**.
- Per member: **Members** → **Member settings** → **Full access**: **Use organization default**, **Allow full access**, or **Do not allow full access**. Changes save immediately, and the member still chooses when to turn Full access on.

Only organization admins can change these. Group admins and policies can't grant Full access, and allowing it doesn't turn on tools a policy has turned off. Changes appear in **Activity**.

## Microsoft Entra and provisioning

**You need:** a managed organization and the admin role. The section reads "Set up Microsoft sign-in and optional user and group provisioning for this organization."

### Microsoft sign-in



1. Select **Setup Microsoft Entra** (or **Manage Microsoft Entra**).
2. **Configure sign-in**: copy the **Directory tenant ID** from the Microsoft Entra admin center and paste it in. Turn on **Allow Microsoft sign-in**, then select **Save and continue**. Signing in with an emailed code stays available as a recovery option.
3. **Grant admin consent**: select **Connect Microsoft** and sign in as a Microsoft tenant administrator to approve Bearly — the sign-in opens in your system browser, which supports smart cards and Conditional Access.
4. **Test sign-in** with an account whose email ends in your managed domain.



You only provide the tenant ID, never an application secret. Microsoft sign-in works only for a verified email that exactly matches the managed domain. The card shows **Enabled** once it's set up. Members then sign in with **Continue with Microsoft** on the sign-in screen. The iOS app doesn't offer that button and signs in with an emailed code.

### User and group provisioning

The provisioning card ("Sync assigned Microsoft Entra users and groups. Bearly administrators keep control of roles and policies.") shows **Configured** and **SCIM 2.0** once set up.



1. Select **Set up provisioning** — Bearly shows the **Tenant URL** to copy.
2. Select **Generate token** — the secret token is shown once. "Copy it now. Bearly will not show it again."
3. In your provisioning app, map Entra object IDs to externalId and userPrincipalName to userName, and leave roles and policies unmapped.



**Rotate token** replaces the token. **Disable** stops updates: "Existing people and groups stay in Bearly, but Microsoft can no longer update them." Deprovisioning a person suspends their membership. Synced groups show **Synced** and are changed in your identity provider.

## Members

Ordinary members see a **Member directory** search ("Find a teammate by name or email.") when the directory is on, or "Member lookup is disabled by an organization admin."

Admins see **Members (_N_)** with **Search members…**, **Load more**, **Add member**, and **Bulk add members**.

### Add a member



1. Select **Add member** and enter a **Name** and **Email**.
2. Turn on **Organization admin** only for someone who needs full management permissions.
3. For an email on your managed domain, pick a **Policy** (the default policy is preselected) and, optionally, a **Limit** that overrides the policy's spending limit.
4. Select **Add Member** — the person is a member right away.



Admins add members directly. There's no invitation for the person to accept. If the email already belongs to a member, Bearly says "A member with this email already exists."

### Bulk add members

Select **Bulk add members**, then **Select CSV File** under **Upload CSV File**. The file needs two columns, name and email, in either order, and a header row is detected automatically. **Ready to Add Members** shows who will be added, who already exists, and the current count.

**Sync Mode** ("Remove members not in CSV") treats the file as the full roster and lists members who will be removed. The button changes to **Add _N_ Members**, **Add _N_ & Remove _N_**, or **Remove _N_ Members**. Results show Added, Removed, Skipped, and Errors. On a managed organization, every email must use the managed domain.

### Edit or remove a member

Select a member's row or the **Member settings** gear:

| Setting | What it does |
| --- | --- |
| **Name** | Display name. **Email** is read-only. |
| **Organization admin** | "Full management permissions across the organization." |
| **Account access** (managed) | Turn off to suspend: "Suspension blocks Bearly immediately and keeps the membership for recovery." |
| **Individual policy** (managed) | "Overrides group and organization policies for this member." **Use group or organization policy** clears it. |
| **Full access** (managed) | The member's [Agent access](#agent-access) exception |
| **Individual monthly spend limit** (managed) | "Overrides the policy's spend limit for this member. Leave blank to use the policy limit." |

Rows show badges such as **Admin**, **Suspended**, the member's effective policy and where it comes from, and their spending limit. **Remove** asks you to confirm and can't be undone. Bearly won't remove or demote the last active admin.

> **Caution — Removing someone on an auto-join domain**
> If your organization adds everyone on the domain automatically, a removed member joins again the next time they use Bearly. To block access, turn off **Account access** to suspend them instead.


## Groups

Groups split an organization into departments or teams, each with its own members, policy, and shared projects. **Groups (_N_)** reads "Manage membership, policies, and shared projects for each group." Admins create one with **Add group**.

- **Members**: "Membership grants access to projects shared with this group." Organization admins search "Find an organization member to add…". Group admins type an existing member's exact email. Only organization admins can use **Make group admin** and **Remove admin role**. Synced memberships can't be removed by hand.
- **Policy and settings**: **Policy** (organization default or a policy from your list), **Priority**, and **Active** ("Inactive groups do not grant policy or project access."). A group admin can customize an assigned policy, which makes a copy for that group, but can't change its spending limit.
- **Usage** (managed): the same report as the organization's **Usage** tab, limited to the group. It isn't a bill.
- **Shared projects**: "Projects shared with this group that you can access. Project owners manage sharing in project settings."

Members who don't manage a group see only its **Shared projects**. Deleting a group removes the access it granted right away. Organization-wide and individual access stay.

## Projects

The **Projects** tab lists every project shared with the whole organization or one of its groups, with its audience, owners, and creation date.

- **Remove access** takes away the organization's and its groups' access. People the owner shared with directly keep access, and chats people started in the project stay in their chat lists.
- **Delete project** is available once none of the project's owners is still an active member. Its chats move back to the people who started them.

Both actions appear in **Activity**. Admins see project titles, owners, and sharing here, not project content. To share a project, its owner uses **Settings** → **Collaboration** in the project. See [Projects](https://bearly.ai/docs/manual/projects.md).

## Policies

**You need:** a managed organization. On an unmanaged one, the tab shows **Managed only** and **Upgrade to Managed**.

**Policies (_N_)** reads "Control what members can reach. The default policy applies to every new member." Each row shows **Default** and "New features: On" or "Off". **Add policy** creates one. **Disable new features by default**, confirmed with **Disable by default**, switches every policy so features added later start off. Current access doesn't change.

### The policy editor

| Section | Controls |
| --- | --- |
| **Policy** | **Policy name** (4 to 18 characters). **Monthly spend limit** in USD per month: "Applies per managed-domain member. Leave blank to use the plan allowance." |
| **Chat defaults** | **Enable chat defaults** sets **Model**, **Instructions**, **Language**, and **Temperature** for members' chats outside projects. Each field is **Locked** ("Members can't change this") or **Unlocked**. When off: "Chat defaults are off. Members use their own model, instructions, language, and temperature." |
| **Models** | **Model access**: **Off**, **Allow-list**, or **Deny-list**. Search **Filter available models** by model, provider, family, or ZDR, and move entries between **Available models** and **Allowed models** or **Denied models**. "A provider or model family also covers versions released later." An allow-list can't be empty. |
| **Feature access** | **New feature default**: **Enabled by default** ("Features added later are available automatically.") or **Disabled by default** ("Features added later must be enabled here."), then the feature switches in the catalog below |
| **Skills** extras | **Policy Skills**: "Skills available in free chats for users on this policy. Project skills add to these." |
| **Code & Automation** extras | **Team MCP servers**: "Servers added here appear automatically for members on this policy. Members provide their own authentication values." **Add server** takes an HTTPS address or an npm package. |
| **Developer** extras | **Remote modules**: **Add module** with an endpoint, module name, and secret key |

**Summarize the Policy** writes a plain-language **AI policy summary**, and **Email me a copy** sends it to you. The footer has **Make Default** ("All new organization members will be assigned to this policy."), **Delete**, an **Unsaved changes** marker, **Cancel**, and **Save**.

### Which policy applies

1. A member's **Individual policy**, if set.
2. Otherwise, the highest-priority active group policy among their groups. If two top groups have the same priority, the member's row reports that the effective policy couldn't be resolved, and access fails closed.
3. Otherwise, the organization's default policy.

A member's **Individual monthly spend limit** beats the policy's limit. When a member reaches it, chat continues on **Bearly Fast** only until the limit resets. See [After paid credits run out](https://bearly.ai/docs/manual/plans-and-credits.md).

Model access, spending limits, and **Developer API access** are enforced by Bearly's servers. Most feature switches are enforced in the Bearly app.

## Policy control catalog

**Starts** tells you a control's value in a new policy. "Follows default" means it's on when **New feature default** is **Enabled by default** and off when it's **Disabled by default**. "Off" controls stay off until you turn them on, in either mode. A switch is grayed out while a control it needs is off. Some organizations see a few more controls than are listed here.

### Web & Research

| Control | Description in the editor | What it changes | Needs | Starts |
| --- | --- | --- | --- | --- |
| **Web** | Allow members to use web tools in chat. | Web search, image search, reading web pages, Deep Research, Scholar, YouTube, and Best Pick | — | Follows default |
| **Chat web search** | Allow web search inside chats. | Image search, Deep Research, Best Pick, Scholar's academic web search, and YouTube's Find and Check claims depend on it | — | Follows default |
| **Image search** | Allow chats to find and display images from the public web. | Image results in chat | Web, Chat web search | Follows default |
| **Deep Research** | Allow members to run Deep Research. | Long-form research reports (also needs the Analyst plan) | Web, Chat web search | Follows default |
| **Scholar** | Allow chats to search academic papers and cite passages from them. | Academic paper search | Web | Follows default |
| **YouTube** | Allow chats to watch, summarize and cut YouTube videos. Finding what a video names and checking its figures also need Chat web search. | YouTube video tools | Web | Follows default |
| **Best Pick** | Allow chats to research products and recommend one to buy. Needs Chat web search. | Product research (also needs Pro) | Web, Chat web search | Follows default |
| **X (Twitter)** | Allow chats and Routines to read public posts on X. | Reading public X posts | — | Follows default |
| **SEO Data** | Allow chats to research keywords, sites, backlinks, and page performance. | SEO research tools | — | Follows default |
| **Domain research** | Allow chats to suggest domain names and check whether a domain is available to register. | Domain ideas and availability checks | — | Follows default |
| **Maps** | Allow chats to search places, read place details, and calculate routes. | Place search and routes | — | Follows default |
| **Weather** | Allow chats to read weather, public alerts, air quality, and pollen data. | Weather data | — | Follows default |
| **People Search** | Allow members to identify a person and build a brief from public sources. | Person briefs (also needs Analyst) | — | Follows default |
| **People Search contact routes** | Allow People Search to look up and show a person's email and other contact details. | Contact details in People Search | People Search | Follows default |
| **People Search public records** | Allow the On the record section to check court filings, registries, and other public records. | The On the record section | People Search | Follows default |

### Media & Creativity

| Control | Description in the editor | What it changes | Needs | Starts |
| --- | --- | --- | --- | --- |
| **Charts** | Allow chats to create KPI, bar, and line views from prepared CSV assets. | Charts in chat | — | Follows default |
| **Images** | Allow members to generate and edit images. | Image generation and editing | — | Follows default |
| **Video** | Allow members to generate videos. | Video generation | — | Follows default |
| **Voice** | Allow members to start voice calls. | Voice calls and the **Voice** pane in Settings | — | Follows default |
| **Dictation** | Allow members to dictate into Bearly. | Dictation and the **Dictation** pane in Settings | — | Follows default |
| **Cloud dictation** | Allow members to send microphone audio to Bearly's cloud transcription provider. | Cloud transcription of dictated audio | Dictation | Follows default |
| **Transcription** | Allow members to transcribe audio and video. | Transcribing files | — | Follows default |
| **Text to speech** | Allow members to create spoken audio from text. | Spoken audio | — | Follows default |

### Code & Automation

| Control | Description in the editor | What it changes | Needs | Starts |
| --- | --- | --- | --- | --- |
| **Run Python** | Allow members to run Python in Bearly's cloud interpreter. | Running code in the cloud | — | Follows default |
| **Work locally** | Allow members to use local shell, file-reading, writing, and editing tools. | Local files and commands in the desktop app | — | Follows default |
| **Computer Use** | Allow members to let Bearly inspect and control local desktop apps. | Computer Use in the desktop app | — | Follows default |
| **Browser** | Allow members to use the isolated Bearly Browser. | Bearly Browser in the desktop app | — | Follows default |
| **Chrome extension browser** | Allow members to let Bearly inspect and control their regular Chrome profile. | Chrome control. The desktop **Chrome Extension** pane shows **Disabled by your workspace** when off. | — | Follows default |
| **MCP Connectors** | Allow members to connect external MCP services. | Connectors and the **Connectors** pane | — | Follows default |
| **Personal MCP servers** | Allow members to add and use their own custom HTTPS and npm MCP servers. | Members' own custom servers | MCP Connectors | On |
| **Email notifications** | Allow Bearly to send requested email notifications to the member. | Emails Bearly sends to the member when asked | — | Follows default |
| **Text messages** | Allow members to add a phone number and receive Bearly text messages. | Text messages and the **Phone & SMS** pane | — | Follows default |
| **Routines** | Allow members to run scheduled prompts. | Routines (also needs Pro) | — | Follows default |
| **Browser in Routines** | Allow members to let Routines use Bearly Browser on the sites they approve, without asking first. | Browser use in scheduled runs | Routines | Follows default |
| **Chat management** | Allow chats to list, read, create, rename, move, and delete chats. | The AI organizing chats for the member | — | Follows default |

### Collaboration

| Control | Description in the editor | What it changes | Needs | Starts |
| --- | --- | --- | --- | --- |
| **Screen Share** | Allow members to share a screen or window with their agent. | Screen sharing into a chat | File uploads | Follows default |
| **Council** | Allow members to ask multiple models in parallel. | Council (also needs Pro) | — | Follows default |
| **Meetings** | Allow members to record meetings and create live transcripts. | Meeting recording and live transcripts | — | Follows default |
| **Sharing** | Allow members to publish Pages to a bearly.sh link. | Publishing Pages | — | Follows default |
| **Public links** | Allow anyone with a Page link to open it without signing in. | Links anyone can open | Sharing | Follows default |
| **Share with people and teams** | Allow members to restrict Page links to named people and teams. | Restricted Page links | Sharing | Follows default |

### Privacy & Security

| Control | Description in the editor | What it changes | Needs | Starts |
| --- | --- | --- | --- | --- |
| **Memory Recall** | Allow Bearly to search and use past conversation context. | Memories in chats | — | Follows default |
| **PII Blocker** | Block personally identifiable information from being entered in chats. | Before a message is sent, email addresses, phone numbers, credit card numbers, and US Social Security numbers are replaced with "[REDACTED: _type_]", and a **Personal Information Redacted** notice appears. The message still sends. | — | Off |
| **End-to-end encryption** | Members can create chats that only their approved devices can read. Team admins and Bearly can't read or recover these chats, even after a member leaves. | Lets members set up [end-to-end encryption](https://bearly.ai/docs/manual/privacy-and-security.md). Hidden while **Require local encryption** is on. Enforced by Bearly's servers. | — | Off, in either mode |
| **Require local encryption** | Require new chats to use device-only encryption. | New chats can be opened only on the device that created them. Blocks end-to-end encryption. | — | Off |
| **Lock existing chats** | Lock existing chats to local access. The keys are unrecoverable. | Converts members' existing chats to device-only. Asks you to confirm **Lock All Existing Users Chats** and can't be undone. | Require local encryption | Off |
| **File uploads** | Allow members to upload and attach files. | Attachments, Docs & Data uploads, and desktop folder sync | — | Follows default |


Turning on **Lock existing chats** asks "This will lock all existing chats to local access only. Keys are unrecoverable. This action cannot be undone." Members' chats then open only on the device that holds the key. Turning off **Require local encryption** also turns this switch off, but chats already locked stay locked.


### Skills

| Control | Description in the editor | What it changes | Needs | Starts |
| --- | --- | --- | --- | --- |
| **Skills** | Allow members to use Skills in chat. | Using Skills | — | Follows default |
| **Add Skills** | Allow members to install, remove, and distribute Skills. | Installing and removing Skills, including project Skills | Skills | Follows default |
| **Skill scripts** | Allow Skills to run installed skill files. | Skills that run files | Skills | Follows default |

### Projects

| Control | Description in the editor | What it changes | Needs | Starts |
| --- | --- | --- | --- | --- |
| **Create projects** | Allow members to create projects. | The **New project** button | — | Follows default |
| **Require project passwords** | Require a password when members create projects. | New projects must have a password, and **Remove** is hidden | — | Off |
| **Project collaboration** | Allow members to invite other people to projects. | The **Collaboration** row in Project Settings | — | Follows default |
| **Project documents and data** | Allow members to add, remove, and sync project files. | Docs & Data changes and folder sync | — | Follows default |

### Developer

| Control | Description in the editor | What it changes | Needs | Starts |
| --- | --- | --- | --- | --- |
| **Developer API access** | Allow members to create API keys and call Bearly models from their own code. | The **API Keys** pane, and Bearly API requests from managed-domain members (enforced by Bearly's servers) | — | Follows default |
| **Personal remote modules** | Allow members to configure their own remote modules. | The **Modules** pane | — | Off |
| **Unified settings resolution** | Use the current chat settings resolver. Turn this off only when Bearly support asks. | Leave it on | — | On |

## Billing

**You need:** the admin role, and an organization whose plan Bearly doesn't already provide directly. Organizations with a plan from Bearly have no **Billing** tab and contact support for changes.

Before the first purchase, **Give your organization Bearly** explains: "Every seat is a full plan — pick one, choose how many, and assign them to teammates right after checkout. The organization pays with its own card and invoice; personal plans stay separate."



1. Under **Choose a plan**, pick **Pro**, **Analyst**, **Research**, or **Max**, and **Monthly** or **Yearly · 2 months free**.
2. Set the number of seats — the total appears before you continue.
3. Select **Start checkout** and finish payment on the secure billing page — if you leave early, the tab shows "Billing setup didn't finish".
4. Back in **Billing**, assign open seats to members.



Once active, the tab shows the **Subscription** (billed monthly or yearly), **Seats**, **Renews**, **Next invoice**, and card status. The **Seats** list groups open seats by plan, with **Add seats** and **Search seats…**. Each seat's **Seat actions** menu has:

- **Move seat** — gives the seat to someone else. The previous holder loses access immediately.
- **Unassign** — frees the seat for someone else.
- **Change plan** — an upgrade applies now with a prorated charge, and a downgrade is scheduled for renewal.
- **End at renewal** or **Reinstate**.

Seats go only to active members. A person uses the higher of their personal plan and their seat, and the allowances never add together. If payment fails, **Payment is past due** appears with a fix action, and seat access is blocked until it's paid. Every billing change emails all admins and appears in **Activity**. See [Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md).

## Usage

**You need:** a managed organization and the admin role.

**Usage** ("Managed-domain usage by member, model, and month.") covers **1 mo**, **3 mo**, **6 mo**, or **12 mo**. It shows **Spend**, **Calls**, **Active members**, and **Top model**, then a **Members** table you can search and expand into **Models** and **Months**. It counts successful, charged usage by current active members on your managed domain.

## Activity

**Activity** lists organization changes, newest first, with **Load more** for older entries. Categories cover the organization, settings, agent access, policies, members (added, edited, removed, suspended, resumed), billing, identity, groups, and projects (access removed or deleted). Entries show what changed, such as a spending limit or feature controls, with before and after values. History starts from when Activity was added, so older changes aren't listed. An empty log reads "No organization changes recorded yet."

## Related

- [Projects](https://bearly.ai/docs/manual/projects.md) — sharing with people, groups, and whole organizations
- [Privacy and security controls](https://bearly.ai/docs/manual/privacy-and-security.md) — what members control themselves
- [Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md) — seats, spending limits, and what happens at a limit
- [Team recipes](https://bearly.ai/docs/manual/combine/team-recipes.md)
- Feature guides: [Policies](https://bearly.ai/docs/teams/policies.md), [Members](https://bearly.ai/docs/teams/members.md), [Microsoft Entra](https://bearly.ai/docs/teams/microsoft-entra.md)

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Projects: shared context, files, and settings](https://bearly.ai/docs/manual/projects.md)
- [Next: Privacy and security controls](https://bearly.ai/docs/manual/privacy-and-security.md)
- [Related: Approvals, permissions, and Full access](https://bearly.ai/docs/manual/capabilities/permissions.md)
- [Related: Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md)
- [Related: Recipes for teams and projects](https://bearly.ai/docs/manual/combine/team-recipes.md)
- [Related: Set organization policies](https://bearly.ai/docs/teams/policies.md)
