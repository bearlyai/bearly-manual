---
title: "Record and use meetings"
description: "How to record online meetings, in-person conversations, and voice notes in Bearly's Meetings and Recordings page, follow the live transcript, get the final transcript and speaker names, summarize, export, and hand a transcript to a chat or project to draft follow-ups."
canonical: "https://bearly.ai/docs/manual/capabilities/meetings/"
markdown: "https://bearly.ai/docs/manual/capabilities/meetings.md"
---

# Record and use meetings

HTML: [https://bearly.ai/docs/manual/capabilities/meetings/](https://bearly.ai/docs/manual/capabilities/meetings/)

> How to record online meetings, in-person conversations, and voice notes in Bearly's Meetings and Recordings page, follow the live transcript, get the final transcript and speaker names, summarize, export, and hand a transcript to a chat or project to draft follow-ups.

**Meetings and Recordings** records a call, a meeting in the room, or a voice note and transcribes it while people speak. When you stop, the audio and transcript are saved to your account, and you can name speakers, summarize, export, or hand the transcript to a chat to draft follow-ups.

**You need:** any plan; live transcription uses your plan allowance. Admin control: **Meetings** (under **Collaboration**).

## Choose what to record

Select **Meetings and Recordings** in the sidebar, then pick a source card:

| Card | What it records | Where it works |
| --- | --- | --- |
| **Online meeting** | The call's audio from your computer and your microphone together, for video calls in any app | The desktop app on Windows, or on a Mac with macOS 13 or later; on Linux and older macOS versions the desktop app records your microphone only. On the web app, phone browsers, and the iOS app the card shows **Get desktop app** |
| **In person or voice note** | The room, through this device's microphone ("Use this device's microphone to record the room.") | Every platform |

On a Mac, recording computer audio uses the system's Screen Recording permission. If that access is off, Bearly records your microphone only and shows **Open Screen Recording settings**; if the microphone is blocked in the desktop app, you'll see **Open microphone settings**.

## Record

**Use it when:** taking notes in a client call, capturing a lecture, recording an interview, or dictating a long voice note you want turned into text later.



1. Choose **Online meeting** or **In person or voice note** — allow microphone access if your device asks.
2. Select **Start recording** — the live, speaker-labelled transcript appears as people talk.
3. Pause if you need to — **Pause recording** stops both the audio and the live transcript, and **Resume recording** picks up again. Pausing appears where your device supports it.
4. Select **Stop recording** (it shows the elapsed time) — the recording uploads, and Bearly starts the final transcript.



While you record, you can keep working anywhere in Bearly. With the sidebar open, a compact recording card shows **Pause**, **Resume**, and **Stop**; with it closed, a floating bar shows the same controls on every page. Bearly suggests a title at 30 seconds and again at 3 minutes, unless you've typed your own.

The footer of the recorder sums up how it works: "Saved continuously on this device", "Recording uploads after you stop", "Up to 1 hr 15 min", and "Only record people with their permission."

**Limits:**

- A recording can run up to 1 hour 15 minutes. At the limit Bearly stops and keeps everything ("Recording stopped at the 1 hr 15 min limit.").
- Bearly needs at least 250 MB of free storage on the device before it starts.
- If your allowance runs out mid-meeting, the audio keeps recording and the transcript pauses: "Live transcript paused at the account limit. Audio recording continues."
- In the desktop app, recording continues while you move around Bearly or the window reloads. In a browser, keep the tab open: a refresh stops the capture, but audio already saved survives.

> **Caution — Consent**
> Only record people with their permission. Recording laws vary by place, and getting consent is your responsibility.


## The final transcript and speakers

After the upload is checked, Bearly transcribes the whole recording again with speaker separation and replaces the live transcript. You'll see "Improving speaker labels…" and then "Speaker labels improved". Older recordings that never had this pass show **Improve speaker labels**.

- The transcript header shows how many speakers were identified, or "Voice memo" for a single voice.
- To name speakers, type each name once ("Name each speaker once. Every matching turn updates."). Names carry through to exports and to what you add to a chat.
- If the final transcript fails, the recording shows **Needs attention** and "The final transcript could not be completed." with **Retry**. The audio stays saved.

## Summarize, copy, and download

Select a recording in the list to open it.

- **Create summary** writes a **Quick summary** with Overview, Key points, Decisions, Action items, and Open questions. Owners and due dates appear only if someone said them. **Copy** copies it and **Refresh** rewrites it. Decisions, Action items, or Open questions with nothing to report say "None captured."
- **Copy** next to the transcript opens an export dialog: **Text only**, **Speaker names**, or **Names and timestamps** (a voice memo offers **Text only** or **Timestamps**). Then **Copy**, or **Download .txt**.
- The audio player plays the original at 0.75× to 2× speed, with a download button for the original audio file (`.m4a` or `.webm`).
- **Delete recording** asks "Delete this recording?" and then permanently deletes the audio, transcript, speaker names, and summary.

Completed recordings and transcripts are saved to your account, so they're on your other devices when you sign in.

## Hand the transcript to a chat or project

This is where a recording turns into work. The transcript becomes a file that Bearly can read, quote, and build on.



1. Open the recording and select **Add to chat** — choose **New chat** ("Attach the transcript to a new draft"), or search with "Find a chat..." and pick an existing one.
2. Bearly attaches the transcript as a Markdown file and focuses the message box — nothing is sent until you send it.
3. Type what you want done with it and send.



The file has the title, when it was recorded, its length, and every turn with its timestamp, plus the speaker's name when more than one person spoke. The summary isn't included; ask Bearly for one in the chat if you want it there.

**Add to project** uploads the same file to a project's files ("Transcript added"), so every chat in that project can search it. It needs write access to the project and the **File uploads** and **Project documents and data** controls. If you have no projects yet, the button is unavailable and its tooltip says "Create a Project before adding this transcript".

### What you can ask once the transcript is in a chat

```text
List every action item with its owner and due date, only where someone said them. Then draft a follow-up email to the attendees.
```

```text
Quote the three moments where the client pushed back on pricing, with timestamps.
```

```text
Turn this interview into a 600-word profile in the third person. Keep every direct quote word for word.
```

```text
What did we decide, what's still open, and who needs to hear about each decision?
```

Bearly reads the attached transcript with its [document tools](https://bearly.ai/docs/manual/capabilities/documents.md#research-your-documents-search-docs-read-doc-scan-doc), so it can cite and quote specific turns.

## Recovery

- If an upload can't finish, the recording stays on the device that made it, marked **Saved on device**, with **Retry upload** and **Discard**. **Discard** asks "Discard this saved recording?" and then permanently removes the audio and transcript stored on that device.
- Bearly deletes the local copy only after it confirms the uploaded file is complete.

For an audio or video file you already have, use [Transcribe](https://bearly.ai/docs/manual/capabilities/images-video-audio.md#transcribe) in a chat instead.

## Try this

Each recipe starts from a finished recording.

### Turn a meeting into action items and a follow-up email

You get a list of action items with stated owners, a drafted follow-up, and the email sent.

**Why it works:** **Add to chat** puts the full transcript in the chat as a file, so Bearly can pull out what each person agreed to. Send Email can then send the draft to you, or to teammates Bearly can find on your team, from the same chat.

**You need:** any plan. Admin controls **Meetings** and **Email notifications**.



1. Open the recording, select **Add to chat** → **New chat**.
2. Ask for the actions and the draft — check names and dates against the transcript.

   ```text
   List every action item with its owner and due date, only where someone said them. Then draft a short follow-up email that thanks the group and lists the actions.
   ```

3. Send it.

   ```text
   Email that follow-up to me with the action list.
   ```



**Swap in:** a text message to yourself instead of email; a [Page](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md) instead of an email for a longer recap; [Fix Grammar](https://bearly.ai/docs/manual/capabilities/documents.md#fix-grammar) on the draft before sending. See [Email and text](https://bearly.ai/docs/manual/capabilities/email-and-text.md) for recipients and limits.

**If it stalls:** if the transcript shows generic speaker labels instead of names, name the speakers on the recording first, then add it to the chat again.

### Publish the decisions to your team as a restricted Page

You get a one-page summary of decisions at a link only named colleagues can open.

**Why it works:** the transcript in the chat feeds a Page, and a **People and teams** audience limits the published link to the people and teams you choose.

**You need:** any plan. Admin controls **Meetings**, **Sharing**, and **Share with people and teams**.



1. Select **Add to chat** → **New chat** on the recording.
2. Build the Page.

   ```text
   Turn the decisions from this meeting into a one-page Page: decision, reason, owner, and date, with open questions at the end.
   ```

3. Open the Page and select **Share file** → **Prepare share**. When the prepared Page opens, select **Publish**, set **Audience** to **People and teams**, and select **Publish**. Then use **Manage viewers** to add the people and teams who can open it.



**Swap in:** **Anyone with the link** for a client recap (needs the **Public links** control); `/share` to publish the substance of the whole chat.

**If it stalls:** if **People and teams** isn't offered, your organization hasn't allowed restricted links; ask an admin.

### Build a searchable library of your meetings

You get a project where you can ask questions across every meeting you've added, with citations.

**Why it works:** **Add to project** saves each transcript to the project's files, and with **Always Search Documents** on, every chat in the project searches those files before answering.

**You need:** any plan. Admin controls **Meetings**, **File uploads**, and **Project documents and data**. Write access to the project.



1. After each meeting, open the recording and select **Add to project**, then pick the project.
2. In the project's settings, turn on **Always Search Documents** — see [Work with files and documents](https://bearly.ai/docs/manual/capabilities/documents.md#always-search-documents-projects).
3. Ask across meetings in any chat in the project.

   ```text
   Across our weekly syncs this quarter, how did the launch date change and who raised each concern? Cite the meeting for each point.
   ```



**Swap in:** one project per client or per course; lecture recordings instead of meetings.

**If it stalls:** search doesn't run in end-to-end encrypted chats, so use a standard chat in the project.

### Turn a voice note into a draft you can edit

You get a structured draft from a spoken idea, ready to polish.

**Why it works:** **In person or voice note** works on any device, the transcript goes to a chat as a file, and Canvas lets you revise the draft section by section.

**You need:** any plan. Admin control **Meetings**.



1. Record with **In person or voice note** while you talk the idea through, then **Stop recording**.
2. Select **Add to chat** → **New chat** and ask for the draft.

   ```text
   Turn this voice note into a blog post outline and a first draft. Keep my examples and phrasing where they're strong.
   ```

3. Select **Edit in Canvas** under the draft and revise it.



**Swap in:** a project plan, a talk outline, or a list of tasks instead of a post.

**If it stalls:** a recording with one speaker shows as a "Voice memo" without speaker names; that's expected.

## Related

- [Make images, video, and audio](https://bearly.ai/docs/manual/capabilities/images-video-audio.md)
- [Talk to Bearly: dictation and voice calls](https://bearly.ai/docs/manual/chat/voice.md)
- [Projects](https://bearly.ai/docs/manual/projects.md)
- [Email and text](https://bearly.ai/docs/manual/capabilities/email-and-text.md)

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Make images, video, and audio](https://bearly.ai/docs/manual/capabilities/images-video-audio.md)
- [Next: Let Bearly use a browser, your files, and your computer](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md)
- [Related: Work with files and documents](https://bearly.ai/docs/manual/capabilities/documents.md)
- [Related: Make Pages and edit in Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md)
- [Related: Send email and texts](https://bearly.ai/docs/manual/capabilities/email-and-text.md)
- [Related: Talk to Bearly: dictation and voice calls](https://bearly.ai/docs/manual/chat/voice.md)
