---
title: "Make Pages and edit in Canvas"
description: "How to build interactive Pages in Bearly, refine them through versions, prepare and publish them to a stable bearly.sh link with the right audience, share a conversation's key takeaways, and edit an answer as a document in Canvas, with every limit that applies."
canonical: "https://bearly.ai/docs/manual/capabilities/pages-and-canvas/"
markdown: "https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md"
---

# Make Pages and edit in Canvas

HTML: [https://bearly.ai/docs/manual/capabilities/pages-and-canvas/](https://bearly.ai/docs/manual/capabilities/pages-and-canvas/)

> How to build interactive Pages in Bearly, refine them through versions, prepare and publish them to a stable bearly.sh link with the right audience, share a conversation's key takeaways, and edit an answer as a document in Canvas, with every limit that applies.

A Page is something Bearly builds for you to use, not just read: a calculator, dashboard, planner, game, prototype, or interactive chart. Canvas is a document editor for revising an answer's text with Bearly's help. This page covers both, plus publishing a Page to a link.

## What a Page is

A Page is a single, self-contained web file that Bearly writes into the chat. It runs live inside the chat in a sandboxed frame, picks up the colors of your Bearly theme, and can load common script libraries from a short list of public sources. Because it's one file, it suits a focused tool better than a multi-page site.

Bearly makes a Page when you ask it to build, make, or create an app, game, calculator, dashboard, prototype, simulator, planner, editor, widget, or interactive visualization.

## Make a Page

**Use it when:** you want a loan calculator with your numbers, a trip planner, a quiz for a class, a pricing simulator, a clickable product prototype, or a dashboard of your data.

**You need:** any plan. A chat you can edit. Works on the web app, phone browsers, the desktop app, and the iOS app.



1. Describe what someone should be able to enter, choose, or see, and the calculations that matter.

   ```text
   Build a mortgage calculator with fields for loan amount, interest rate, and term. Show the monthly payment, total interest, and an amortization chart, with an optional annual overpayment.
   ```

2. Try the preview in the chat — hover it for **Download** and **Open**.
3. Select **Open** to use the Page full size in the side panel.
4. Ask for changes in the chat, naming the Page if the chat has several — each change saves a new version.

   ```text
   In the mortgage calculator, show how many months the overpayment removes and add a toggle for biweekly payments.
   ```



**What you get:** a live Page in the chat, saved as an `.html` file you can download and open in a browser. Reopen it later from **Browse files** → **Generated**.

**Limits:**

- Bearly can't see what you type or pick inside a Page. If a follow-up depends on a value you chose there, tell Bearly the value.
- A Page may remember what you entered when you reopen it in the side panel, but this isn't guaranteed, and the in-chat preview doesn't keep it. To keep a change, ask Bearly to revise the Page.
- When a Page uses files from the chat, such as images, saving embeds copies of them. Each file can be up to 10 MB and all embedded files together up to 25 MB; links to larger or unavailable files are removed and Bearly is told which.
- A Page is saved to the chat. To save it into the chat's project, ask for that explicitly; you need write access to the project.
- In a read-only chat you can view and download Pages but not change them.

**Combines with:** [Run Python](https://bearly.ai/docs/manual/capabilities/data-and-code.md#run-python), which cleans and aggregates data that Bearly then bakes into the Page; [Charts](https://bearly.ai/docs/manual/capabilities/data-and-code.md#charts) for a quick chart without a full Page; [Visualize](https://bearly.ai/docs/manual/capabilities/data-and-code.md#visualize) to let Bearly choose between a Page and a static visual.

> **Tip — Diagrams**
> For a flowchart, org chart, or process map, ask for a Page that draws the diagram, or an image made with Run Python. Diagram code in an answer shows as plain code.


## Versions and editing

Every edit Bearly makes to a Page saves a new version (v1, v2, and so on). Once a Page has two or more versions, a version dropdown appears; select a version to view it. A label beside the dropdown says whether you're looking at the **Latest** version, the one **At this point** (the version from the message you opened it from), or an **Earlier** one.

Edits always build on the latest version, even if you were looking at an older one. There's no restore button; to bring back part of an earlier design, describe what you want back.

The side panel header also has **Copy**, **Share file** (when sharing is allowed and you can edit the chat), **Download**, and **Close**. Once a Page is prepared for sharing, **Publish** appears there too.

You can force the file tools with `/create-file` (**Create Asset**) to write a new Page and `/edit-file` (**Edit Asset**) to change one.

## Share and publish a Page

Publishing gives a Page its own link on bearly.sh. It happens in two stages: **prepare** (Bearly adds artwork, a link preview, and a short brief) and **publish** (you pick the audience and make it live). Nothing goes out until you select **Publish**.

**Use it when:** sending a dashboard to your team, sharing a calculator with a client, or posting a finished write-up that people can open in a browser.

**You need:** any plan; preparing uses text and image generation, which counts as usage. Admin controls **Sharing**, plus **Public links** for a link anyone can open or **Share with people and teams** for a restricted link (all under **Collaboration**). A chat you can edit.



1. Open the Page and select **Share file** — the popover reads "Share this file" ("Give your file a Page of its own, with artwork and a link preview.").
2. Select **Prepare share** — a progress screen shows "Writing the Page", "Reading the source", "Content ready", "Saving the artwork", and "Saving the Page".
3. Wait for it to finish — the prepared Page opens in the side panel, marked **Ready to share**.
4. Select **Publish** in the side panel header — the popover reads **Ready to share** ("Publish this Page to a link people can open.") and previews the link card: artwork, title, description, and bearly.sh.
5. Choose the **Audience** — **Anyone with the link** or **People and teams**. Only the audiences your organization allows are listed.
6. Select **Publish** — the popover changes to **Share** ("This Page is available at a stable link."). Use **Copy link**, or **Share…** for your device's share sheet where available.
7. For a **People and teams** link, select **Manage viewers** to search teammates by name or email (type at least 2 characters) and pick teams.



To share the whole conversation instead of one file, select the **Share** icon in the chat header. The popover reads "Share conversation" ("Turn the substance of this conversation into a Page, with artwork and a link preview.") with **Prepare share**. Your full conversation isn't shared: Bearly writes a Page with the substance itself, such as the answer, plan, findings, or the finished version of a creative piece, and you review it before publishing. If you close the prepared Page, select the **Share** icon again: **Review and publish** reopens it, and **Create another** prepares a fresh version.

**While it prepares:** **Stop building** cancels ("Building stopped. Nothing was published."). Closing the screen with its **×** returns you to the chat without cancelling. If the artwork can't be made, the popover says "The image model could not make artwork. Review the simple preview before publishing."

**After publishing:**

- **Publish update** sends your latest changes to the same link. If the popover says "Use Share to add a preview image and conversation brief before publishing an update.", select **Share file** and prepare the Page again first.
- **Unpublish** takes the link down. **Retry cleanup** appears if an unpublish didn't finish.
- The link stays the same when you republish, rename the file, or change the audience. The address is built from the file name on the first publish, for example `mortgage-calculator-` followed by a short code, on bearly.sh.
- Updates to a public link can take up to a minute to reach people who already opened it.
- People on a **People and teams** link sign in to Bearly to open it.
- Images, video, audio, and PDFs in a published Page show inline; other included files download.
- Published Pages carry **Continue conversation in Bearly**. It opens a new draft chat with the Page's brief and a link to the source, ready for the reader to send. It never imports your original chat and never sends or spends anything on its own.

**Limits:**

- 500 published links per person.
- A Page you prepare must be under 9 MB; a file you share must be under 300 MB ("Choose a Page under 9 MB or a file under 300 MB.").
- Link previews use a title up to 90 characters, a description up to 220, and artwork cropped to 1200 × 630.
- With neither audience allowed by your organization, the popover says "Your team policy does not allow a publishing audience." You can still preview and unpublish.
- Not available in read-only chats. [Routines](https://bearly.ai/docs/manual/capabilities/routines.md) can write Pages but can't publish them.

### Publishing from an end-to-end encrypted chat

A published Page is a readable copy, so Bearly asks first: "Publish a readable copy?" — "The published Page isn't end-to-end encrypted. People you share it with can read it, and Bearly stores this copy on its servers. The rest of this chat stays encrypted." Select **Publish copy** to go ahead.

From an encrypted chat, a file included with the Page can be up to 25 MB ("Files over 25 MB can't be shared from an encrypted chat yet.").

## Share the key takeaways

`/share` (**Share the key takeaways**) asks Bearly to prepare the conversation as a Page, the same as the header **Share** button. You can also ask in plain words, such as "make this shareable". Preparing doesn't publish or send anything; you still review and select **Publish**.

```text
/share Focus on the final recommendation and the cost table, for a finance audience.
```

It appears only when sharing is allowed and the chat is writable.

## Canvas

Canvas turns an answer into a document you can edit side by side with Bearly. Select text, say what to change, and Bearly rewrites just that part.

**Use it when:** polishing a long draft, an essay, a cover letter, a policy, or a script, where you want to work on sections rather than regenerate the whole answer.

**You need:** any plan. No admin control. A chat you can edit.



1. Under an answer that has text, select **Edit in Canvas** (the notebook-and-pencil icon) — Bearly opens the text as a Canvas and gives it a short title.
2. Switch between **Preview** ("Show the formatted document") and **Edit** ("Edit the Markdown") — on wide screens, **Edit** shows the editor beside the preview.
3. Select some text, type in "Ask AI about this text...", and select **Submit** — Bearly runs a chat turn titled "Canvas Edit" that rewrites the selection. On a narrow screen, use the "How can I edit this for you?" box.
4. Or ask in the chat — once a Canvas exists, Bearly can edit it directly from an ordinary message.

   ```text
   In the Canvas, tighten the introduction to three sentences and make the closing paragraph more direct.
   ```

5. Use **Copy** in the toolbar, **Undo** and **Redo** while in **Edit**, and **Close Canvas** or <kbd>Esc</kbd> to close it.



**What you get:** a live document inside the chat. Its card reads "Canvas", or "Editing in Canvas" while open.

**Limits:** a Canvas has no version history and no download. **Copy** copies the Markdown; paste it wherever you need it, or ask Bearly to turn it into a file. A Canvas isn't a file, so it doesn't appear in **Browse files**. Not available in [Routines](https://bearly.ai/docs/manual/capabilities/routines.md).

**Combines with:** [Fix Grammar](https://bearly.ai/docs/manual/capabilities/documents.md#fix-grammar) for a final proofread, the [Document editor](https://bearly.ai/docs/manual/capabilities/documents.md#document-editor) for a Word or PDF version, and Pages for a styled version you can publish.

## Try this

Each recipe runs in one chat.

### Draft in Canvas, then publish it as a styled Page

You get a polished document and a published, printable Page with the same text.

**Why it works:** Canvas edits stay in the chat, and Bearly writes a Page from the conversation, which includes the Canvas. Sharing then adds artwork and a link preview for review before anything goes live.

**You need:** any plan. Admin controls **Sharing** and an audience control (**Public links** or **Share with people and teams**).



1. Ask for a first draft, then select **Edit in Canvas** under it.

   ```text
   Draft a one-page onboarding guide for new support hires: first week schedule, tools to set up, and who to ask for what.
   ```

2. Revise it with selections — select a section, type the change in "Ask AI about this text...", and select **Submit**.
3. Turn the final text into a Page.

   ```text
   Turn the final Canvas into a styled, printable one-page Page with a clear heading hierarchy and a checklist for the first week.
   ```

4. Open the Page and select **Share file** → **Prepare share**. When the prepared Page opens, select **Publish**, choose the **Audience**, and select **Publish**.



**Swap in:** a DOCX with `/document` instead of a Page; `/share` to publish the substance of the whole chat; **People and teams** to limit the link to your team.

**If it stalls:** if the Page leaves out your last edits, copy the Canvas with **Copy** and paste it into the message that asks for the Page.

### Build an image gallery Page

You get a single Page that shows a set of images from the chat, with the images inside the file.

**Why it works:** Run Python takes image files from the chat as inputs and can write one HTML file with the images embedded. Any HTML file in a chat renders as a live Page, whatever made it.

**You need:** any plan. Admin control **Run Python**; **Images** if you generate the images first.



1. Get the images into the chat — attach them, or make them with `/image`.
2. Ask Python to build the Page.

   ```text
   /python Build a single HTML gallery Page from the images in this chat, with captions from the file names and a lightbox when I click one. Embed the images in the file.
   ```

3. Open the result — it renders as a Page; download it or prepare it for sharing.



**Swap in:** ask Bearly to write the Page directly and link the chat's files, which embeds each one up to 10 MB and 25 MB in total; a slideshow instead of a grid.

**If it stalls:** if the Page is too big to prepare for sharing (over 9 MB), ask Python to shrink the images first.

### Share a research chat's conclusion without the back-and-forth

You get a clean Page with just the findings, and a link that lets readers ask their own follow-ups.

**Why it works:** sharing writes the substance of the conversation, not the transcript, and published Pages carry **Continue conversation in Bearly**, which starts a reader's own draft chat from the Page's brief.

**You need:** any plan. Admin controls **Sharing** and **Public links**.



1. Finish the research in the chat.
2. Prepare the Page.

   ```text
   /share Lead with the recommendation, then the three reasons, then the sources.
   ```

3. When the prepared Page opens, check it, then select **Publish**, set **Audience** to **Anyone with the link**, select **Publish**, and use **Copy link**.



**Swap in:** **People and teams** for internal findings; a single file's **Share file** instead of the whole chat.

**If it stalls:** if the Page isn't what you wanted, select the header **Share** icon again and choose **Create another**, or add direction in a new `/share` message.

## Related

- [Analyze data and run code](https://bearly.ai/docs/manual/capabilities/data-and-code.md)
- [Work with files and documents](https://bearly.ai/docs/manual/capabilities/documents.md)
- [Organize, find, and share](https://bearly.ai/docs/manual/chat/organize.md)
- [Organizations](https://bearly.ai/docs/manual/organizations.md)

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Analyze data and run code](https://bearly.ai/docs/manual/capabilities/data-and-code.md)
- [Next: Make images, video, and audio](https://bearly.ai/docs/manual/capabilities/images-video-audio.md)
- [Related: Automate with Routines](https://bearly.ai/docs/manual/capabilities/routines.md)
- [Related: Work with files and documents](https://bearly.ai/docs/manual/capabilities/documents.md)
- [Related: Organize, find, share, and export chats](https://bearly.ai/docs/manual/chat/organize.md)
- [Related: Run Bearly for an organization](https://bearly.ai/docs/manual/organizations.md)
