---
title: "Recipes for teams and projects"
description: "Step-by-step recipes that combine projects, Always search documents, meeting transcripts, project sharing and locked settings, organization policies, Memories and chat management, Prompt templates, email to teammates, and restricted Pages for shared knowledge bases, meeting recaps, and team rollouts."
canonical: "https://bearly.ai/docs/manual/combine/team-recipes/"
markdown: "https://bearly.ai/docs/manual/combine/team-recipes.md"
---

# Recipes for teams and projects

HTML: [https://bearly.ai/docs/manual/combine/team-recipes/](https://bearly.ai/docs/manual/combine/team-recipes/)

> Step-by-step recipes that combine projects, Always search documents, meeting transcripts, project sharing and locked settings, organization policies, Memories and chat management, Prompt templates, email to teammates, and restricted Pages for shared knowledge bases, meeting recaps, and team rollouts.

These recipes use projects, meetings, sharing, and organization policies to make Bearly work the same way for a whole team. A project's files, instructions, and settings apply to every chat in it, so what one person adds, everyone in the project can use. Sharing a project needs an organization; emailing teammates and organization policies need a managed organization. For what each block takes in and gives back, see [Building blocks](https://bearly.ai/docs/manual/combine/building-blocks.md).

## Build a searchable library of customer calls

Every call you record goes into one project, and any chat in that project answers from the transcripts first, with quotes.

**Why it works:** **Add to project** uploads a meeting's transcript to a project's files as a document. **Always search documents** in the project's chat settings makes every chat in the project search the project's files before it answers, so a question gets quotes from the calls without anyone naming a file.
**You need:** Any plan. Recording works on every platform with a microphone; recording an online meeting's audio needs the desktop app on Windows or macOS 13 or later. Organization controls: **Meetings**, **File uploads**, **Project documents and data**, and **Create projects**. Writer access to the project. Chats that aren't end-to-end encrypted.



1. In the sidebar, select **New project** in the **Projects** header, enter "Customer calls" as the **Project Name**, and select **Create Project**. — The project's **Settings** tab opens.

2. Under **Project chat settings**, turn on **Use project defaults**, then turn on **Always search documents**. In **Instructions**, enter:

   ```text
   Answer from the call transcripts first. Quote customers with the call title and timestamp. Say when the transcripts don't cover a question.
   ```

   — Every chat in the project now follows these instructions and searches its files first.

3. Open **Meetings** in the sidebar. Choose **Online meeting** (desktop app) or **In person or voice note**, then **Start recording**, and **Stop recording** when the call ends. — After the upload, Bearly transcribes the whole recording again with better speaker labels. Name each speaker once and every matching turn updates.

4. Select **Add to project** and choose Customer calls. — "Transcript added" confirms it. Repeat steps 3 and 4 after each call.

5. On the project's **Chats** tab, type in **Ask in this project**:

   ```text
   What did customers say about onboarding this month? Group it by theme and quote them with the call and timestamp.
   ```

   — Bearly searches the transcripts and answers with citations you can click to open the transcript they came from.



**Swap in:**
- **A synced folder for recordings** (desktop app): on the project's **Files** tab, use **Sync a folder** to keep a folder of notes or exported transcripts synced into the project.
- **Uploads for recordings:** open the project's **Files** tab and select **Upload** for call notes, PDFs, or contracts.
- **Your team for just you:** share the project (see the next recipe) as **Writer**, so teammates can start their own chats in it.
- **Past chats as well as files:** set **Memories** to **Project Only** in the sliders menu, and ask with `/recall` to search earlier chats in the project.

**If it stalls:** **Always search documents** does nothing in end-to-end encrypted chats, which can't search documents. **Add to project** needs write access. A recording stops at 1 hour 15 minutes and keeps everything up to then. If the live transcript pauses at your account limit, the audio keeps recording.

## Set up a shared research desk with locked settings

Your team works in one project where every chat uses the same model, style, instructions, and source files, whoever starts it.

**Why it works:** A project's chat settings apply to every chat in it, and each field can be locked so members can't change it. Sharing the project with a group gives everyone in the group the same project, files, and settings. Members' own settings can change only the fields you leave unlocked.
**You need:** Any plan. Any platform. You own the project and belong to an organization that has a group. Organization controls: **Create projects**, **Project collaboration**, **Project documents and data**, and **File uploads**.



1. Create a project named "Market desk". Open its **Files** tab and select **Upload** for your style guide and source list.

2. Open the project's **Settings** tab and turn on **Use project defaults**. Choose the **Model**, set **Response style** to **Formal**, turn on **Always search documents**, and enter **Instructions**:

   ```text
   Write for the strategy team. Lead with the answer, cite every number, prefer primary sources, and follow the style guide in this project.
   ```

   Select the lock beside each field so it reads "Members can't change …". — Locked fields apply to every chat in the project.

3. Open the project's **Sharing** tab. Under **Groups**, set your strategy group's role to **Writer**. — The project's header reads **Shared**, and on the **Settings** tab the section becomes **Shared project settings**.

4. A teammate starts a chat in the project and asks:

   ```text
   Summarize this week's pricing moves by our top three competitors.
   ```

   — The chat uses the locked model, style, and instructions, and searches the project's files before it answers.



**Swap in:**
- **Reader for Writer:** readers can view chats and files and take part in existing chats, but can't start new chats or change files.
- **The whole organization for a group:** under **Organization access** on the **Sharing** tab, share with everyone in your organization.
- **Skills for instructions:** add a skill under **Skills** on the project's **Settings** tab so every chat in the project can use it.
- **Personal settings for locks:** leave a field unlocked, and each member can set their own value under **Your chat settings**.

**If it stalls:** Only the project's owner can change access on the **Sharing** tab, in an organization that allows **Project collaboration**; the tab says why when you can't. Only writers and owners can change shared project settings. In **Your chat settings**, a field the project has locked shows "Locked by the project owner." and can't be changed. In most shared chats, a teammate can't approve or add to an answer someone else started, so each person sends their own message.

## Send a meeting recap and a decisions Page only your team can open

You turn a recorded meeting into decisions and action items, email the follow-up to the people involved, and publish the decisions as a Page only your team can open.

**Why it works:** **Add to chat** attaches the meeting's transcript to a new draft as a file and sends nothing. The chat reads the transcript for every later step. Send Email finds teammates in your organization's contacts, and a Page published to **People and teams** opens only for the people and teams you add.
**You need:** Any plan. Any platform; recording an online meeting's audio needs the desktop app. Organization controls: **Meetings**, **Email notifications**, **Sharing**, and **Share with people and teams**. Emailing teammates needs a managed organization.



1. After you stop a recording in **Meetings**, select **Add to chat** → **New chat**. — The transcript is attached to a new draft. Nothing is sent until you send it.

2. Type in that draft and send:

   ```text
   List the decisions and action items from this meeting. Give an owner and a due date only where someone said one. Then draft a short follow-up email.
   ```

   — Bearly reads the transcript and answers.

3. Send the follow-up:

   ```text
   Email the follow-up to Priya Shah and Sam Lee.
   ```

   — Bearly finds them in your organization's contacts and sends it. You're copied and set as the reply-to address.

4. Make the Page:

   ```text
   Turn the decisions into a one-page Page with the date, who attended, each decision, and its reason.
   ```

   — A Page preview appears.

5. In the open Page, select **Share file** → **Prepare share**. When it's ready, the prepared Page opens on its own, marked "Ready to share"; select **Publish** in its header. Set **Audience** to **People and teams** and select **Publish**. Then select **Manage viewers**, add the teammates or the organization that should see it, and select **Copy link**. — Only the people and organizations you added can open the link, after signing in.



**Swap in:**
- **Add to project for Add to chat:** keep every recap in one project with **Always search documents** on. See [Build a searchable library of customer calls](#build-a-searchable-library-of-customer-calls).
- **The meeting's summary for your own list:** select **Create summary** on the recording for a quick summary with decisions and action items before step 1.
- **Anyone with the link for People and teams:** for a recap you can share outside the organization.
- **A Prompt Template for the format:** save your recap format as a Prompt Template and run it in step 2. See [Turn a team form into a published Page](#turn-a-team-form-into-a-published-page).

**If it stalls:** If Bearly can't find a teammate, use their full name as it appears in your organization, or their work email. If your organization allows no audience, the publish popover says "Your team policy does not allow a publishing audience."

## Limit a team to zero-retention chat models with locked defaults

As an organization admin, you give one group a policy that allows only chat models labeled ZDR, sets a locked default model and instructions, and turns off public links, then email yourself a plain-language summary of it.

**Why it works:** A policy's model allow-list controls which chat models members can pick, and the model filter can search for ZDR models. Chat defaults set the model and instructions for members' chats outside projects, and locking them stops members from changing them. Assigning the policy to a group applies it to everyone in the group. **Summarize policy** describes the policy in plain language before you rely on it.
**You need:** Organization admin in a managed organization. Any plan. Any platform.



1. Open the account menu → **Organizations** → your organization → **Policies**, and select **Add policy**. Enter a **Policy name**.

2. Under **Models** → **Model access**, choose **Allow-list**. Type "ZDR" in **Filter available models**, and add the models you want to **Allowed models**. — Members on this policy can pick only these chat models.

3. Under **Chat defaults**, turn on **Enable chat defaults**. Choose the **Model**, enter **Instructions**, and select the lock beside each so it reads "Members can't change this". — Members can't change them in chats outside projects.

4. In the feature list, turn off **Public links**. — Members can still share Pages with named people and teams, if **Share with people and teams** stays on.

5. Select **Save**, which returns you to the policy list. Open the new policy again, select **Summarize policy**, read the **AI policy summary**, and select **Email me a copy**. — **Summarize policy** appears only on a policy that has been saved.

6. Open **Groups**, choose the group, and under **Policy and settings** set **Policy** to the new policy, then select **Save**. — Everyone in the group gets it, unless they have their own individual policy or belong to a group with a higher **Priority**.

7. Ask a member of the group to open the model picker. — It shows "Managed account · Some models hidden" and lists only the allowed models.



**Swap in:**
- **Deny-list for Allow-list:** block specific models or providers and allow the rest.
- **A spend limit:** set **Monthly spend limit** on the policy; at the limit, members can keep chatting only on Bearly Fast, and only if the policy allows it.
- **Team connectors:** under **Team MCP servers**, add a server that appears for everyone on the policy; each member provides their own authentication values.
- **Everyone for one group:** select **Make default** so every new member gets this policy.

**If it stalls:**
- An empty allow-list can't be saved: "Add at least one model, provider, or model family to the allow-list, or switch model access off."
- The allow-list covers chat models only; image, video, voice, transcription, and text-to-speech models aren't governed by it.
- Policies apply to members whose email is on your managed domain. If a member is in two groups with the same top **Priority**, their policy can't be resolved; give one group a higher priority.

## Find an old decision and file the chats where they belong

You find what was decided in an earlier chat, then have Bearly rename and move the related chats into the right project.

**Why it works:** **Memories** lets Bearly search past chats with Recall. With **Chat management**, the same chat can read another chat in full, list your chats, and rename or move them, after you approve reading and listing.
**You need:** Any plan. Any platform. Organization controls: **Memory Recall** and **Chat management**. A chat that isn't end-to-end encrypted, because Recall is off in those.



1. In the sliders menu, set **Memories** to **All Chats** (or **Project Only** to search just this project's chats).

2. Find the decision:

   ```text
   /recall Find what we decided about annual pricing, with the date and the reason. Then rename this chat to "Pricing decision" and move it to the Finance project.
   ```

   — Bearly searches past chats. To read an earlier chat in full it asks first, with a card that names that chat; select **Allow**. Then it renames and moves this chat, which doesn't need an approval.

3. File the rest:

   ```text
   List my other chats about pricing from the last three months and move them into Finance too.
   ```

   — Bearly asks to list "your chats and projects"; select **Allow**. It moves the matching chats and lists what it moved.



**Swap in:**
- **Search for Recall:** press <kbd>⌘</kbd> <kbd>F</kbd> (<kbd>Ctrl</kbd> <kbd>F</kbd> on Windows and Linux) to search chats and files yourself.
- **Archive for move:** ask Bearly to list the chats, then select them in the sidebar with **Select** and **Archive** them.
- **An export for the record:** open the command menu and choose **Download as Markdown** for a copy of the decision chat.

**If it stalls:** Recall doesn't work in end-to-end encrypted chats, and a regular chat can't list, read, rename, or move encrypted ones. Full access never approves listing or reading other chats for you; Bearly asks unless you saved an approval for that.

## Turn a team form into a published Page

A saved Prompt Template turns a few filled-in fields into a full write-up, such as an incident postmortem, which you publish for your team.

**Why it works:** A Prompt Template turns each `{{field}}` in its text into a form field, and the filled form runs as a message in any chat. The **Share** button turns the substance of the chat into a Page you review before publishing, with an audience you choose.
**You need:** Any plan. Any platform. Organization controls: **Sharing** and **Share with people and teams**. Adding viewers needs teammates in an organization.



1. Select **Prompt templates** in the sidebar, then **New template** (with no templates yet, the page opens there). Describe the form, such as "An incident postmortem from the service, impact, timeline, and root cause", and select **Draft template**; or select **start from scratch**. On the template's page, under **Template design**, make the text:

   ```text
   Write an incident postmortem for {{service}}. Impact: {{impact}}. Timeline: {{timeline}}. Root cause: {{root cause}}. Use these sections: Summary, Impact, Timeline, Root cause, What went well, Follow-ups with owners.
   ```

   — Each name in double braces becomes a field in the form.

2. In any chat, type `/`, pick the template under **Skills**, fill in the fields, and select **Submit** (or press <kbd>Shift</kbd> <kbd>Enter</kbd>). — The postmortem appears. The filled form stays in the chat; change a value and **Submit** again for a new version. Blank fields are sent as "N/A".

3. Select **Share** in the top-right corner of the chat → **Prepare share**. When it's ready, the prepared Page opens on its own, marked "Ready to share"; select **Publish** in its header. Set **Audience** to **People and teams** and select **Publish**. Then select **Manage viewers**, add your teammates or your organization, and select **Copy link**. — The Page holds the postmortem itself, not the whole chat.



**Swap in:**
- **Files in a field:** turn on **Allow file uploads** for a field under **Field configuration**, so the form can take a log file or screenshots, which Bearly reads with the form.
- **Canvas before publishing:** select **Edit in Canvas** under the answer to edit the write-up before you share it.
- **Email for a Page:** ask Bearly to email the postmortem to the people involved (needs a managed organization).

**If it stalls:** Prompt templates are saved to your account and sync across your devices, but not to teammates. Share the template text so each person can save their own copy.

## Related

- [Projects](https://bearly.ai/docs/manual/projects.md) for project settings, roles, sharing, and project files
- [Organizations](https://bearly.ai/docs/manual/organizations.md) for members, groups, and policies
- [Meetings](https://bearly.ai/docs/manual/capabilities/meetings.md) for recording and transcripts
- [Pages and Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md) for publishing audiences

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Recipes for everyday life](https://bearly.ai/docs/manual/combine/everyday-recipes.md)
- [Next: Projects: shared context, files, and settings](https://bearly.ai/docs/manual/projects.md)
- [Related: Building blocks: how Bearly's features connect](https://bearly.ai/docs/manual/combine/building-blocks.md)
- [Related: Run Bearly for an organization](https://bearly.ai/docs/manual/organizations.md)
- [Related: Record and use meetings](https://bearly.ai/docs/manual/capabilities/meetings.md)
- [Related: Make Pages and edit in Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md)
