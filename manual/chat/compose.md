---
title: "Write, attach, and send"
description: "How to write and send messages in Bearly, attach files and photos, unlock password-protected PDFs, share your screen, call tools and files with / and @, queue follow-ups while Bearly works, stop or interrupt an answer, and what the PII Blocker redacts."
canonical: "https://bearly.ai/docs/manual/chat/compose/"
markdown: "https://bearly.ai/docs/manual/chat/compose.md"
---

# Write, attach, and send

HTML: [https://bearly.ai/docs/manual/chat/compose/](https://bearly.ai/docs/manual/chat/compose/)

> How to write and send messages in Bearly, attach files and photos, unlock password-protected PDFs, share your screen, call tools and files with / and @, queue follow-ups while Bearly works, stop or interrupt an answer, and what the PII Blocker redacts.

The composer at the bottom of every chat is where you type, attach files, name the exact tool or file you want, and line up your next messages while Bearly is still answering. It works the same in the web app, a phone browser, the desktop app, and the iOS app. The browser extension's sidebar is a separate chat without these tools and isn't covered here.

## The composer at a glance

- **+** opens the **Add** menu: **Attach files** and **Share your screen**.
- **Take photo**, a camera button, appears on phones and tablets.
- The sliders button opens this chat's controls: **Web**, **Style**, **Scholar**, **Reasoning**, **Memories**, and **History**. See [Tune a chat](https://bearly.ai/docs/manual/chat/settings.md).
- The model button on the right shows the current model's short name and chooses who answers. See [Choose and compare models](https://bearly.ai/docs/manual/chat/models.md).
- Voice and dictation controls sit next to it. See [Voice](https://bearly.ai/docs/manual/chat/voice.md).
- The send button. While Bearly is working it becomes **Queue message** when you have a draft, or **Stop** when the composer is empty.
- Under the editor (except in the iOS app), a strip shows the chat's project, its encryption lock, **Work locally** in the desktop app, connectors, and **Permissions**. See [Permissions](https://bearly.ai/docs/manual/capabilities/permissions.md).

## Write and send a message

Type in the composer and send. In an existing chat the empty composer reads "How can I help? Type / or @ for tools". On a new chat it shows a rotating prompt line instead.

**Use it when:** asking a question, giving Bearly a task, or continuing a conversation.
**You need:** Nothing extra. Every plan.



1. Press <kbd>⌘</kbd> <kbd>L</kbd> (<kbd>Ctrl</kbd> <kbd>L</kbd> on Windows and Linux) or click anywhere on the composer — this puts the cursor in the composer from anywhere in the chat.
2. Type your message. Press <kbd>Shift</kbd> <kbd>Enter</kbd> for a new line — plain <kbd>Enter</kbd> sends.
3. Press <kbd>Enter</kbd> or select the round arrow send button — the message goes out and Bearly starts answering. On phones and tablets, <kbd>Enter</kbd> doesn't send; tap the send button.



To reuse something you sent earlier, press <kbd>↑</kbd> in an empty composer. Each press goes one message further back; <kbd>↓</kbd> moves forward, and going past either end clears the composer.

**What you get:** Your message in the thread and Bearly's answer below it. Every message gets its own controls; see [Work with answers](https://bearly.ai/docs/manual/chat/answers.md).
**Limits:** The composer holds up to 200,000 characters. Paste more than that and Bearly attaches the text as a file named `pasted.txt` instead of filling the editor. You can't send while a file is still uploading or being analyzed, or when there's no text and no file.
**Combines with:** [Keyboard shortcuts](https://bearly.ai/docs/manual/chat/shortcuts.md) to do all of this without the mouse.

## Attach files and photos

Attach documents, spreadsheets, images, audio, and video to a message, and Bearly works with them in that chat. What it can do with each kind of file is covered in [Documents](https://bearly.ai/docs/manual/capabilities/documents.md), [Data and code](https://bearly.ai/docs/manual/capabilities/data-and-code.md), and [Images, video, and audio](https://bearly.ai/docs/manual/capabilities/images-video-audio.md).

**Use it when:** asking about a contract, analyzing a spreadsheet, photographing a receipt or a whiteboard, or comparing several files at once.
**You need:** File uploads allowed. If your organization turns off **File uploads**, attaching, drag and drop, pasting files, the camera, and screen sharing all disappear.



1. Select **+** → **Attach files** — your system file picker opens. You can pick several files at once, of any type.
2. Or drag files onto the chat — a drop zone appears while you drag.
3. Or paste files or screenshots into the composer — when the clipboard holds files and no text, each file is attached.
4. On a phone or tablet, tap **Take photo** — the camera opens directly. It's its own button in the toolbar, not an item in the **+** menu.



Each file shows its status while it gets ready: checking a PDF, password required, unlocking, uploading with progress, then analyzing. You can send once every file is ready.

To point at a file that's already in the chat or its project, type `@` and pick it under **Assets**. See [Reference tools, files, and skills](#reference-tools-files-and-skills).

### Unlock a password-protected PDF

Bearly detects a password-protected PDF when you attach it and asks for the password.



1. Attach the PDF — the file shows "Enter the PDF password. Bearly uses it once to unlock this file."
2. Type the password in the **PDF password** field. The eye button shows or hides what you typed.
3. Select **Unlock and add** — Bearly unlocks the file and adds it to your message.
4. If you see "That password didn't work.", type it again. Remove the file to cancel.



If unlocking fails for another reason, the file shows "Unable to unlock this PDF."

**What you get:** Files attached to your message and saved in the chat, so you can point at them again later with `@`.
**Limits:** 300 MB per file; larger files can't be attached. If a file shows "Unable to upload and process.", remove it and attach it again.
**Combines with:** [/ and @ references](#reference-tools-files-and-skills) to name a file and a tool in the same message; [Search chats and files](https://bearly.ai/docs/manual/chat/organize.md#search-chats-and-files) to find a file later.

## Share your screen

Share a screen or window with Bearly, and while sharing stays on, each message you send automatically includes a fresh still capture of it. Bearly sees the screen as it was when you pressed send, not a video.

**Use it when:** you're stuck in another app and want step-by-step help, asking about a chart or error on screen, or checking a form before you submit it.
**You need:** The desktop app, or a desktop web browser that supports screen sharing. Your organization must allow **Screen Share** and **File uploads**.



1. Select **+** → **Share your screen** — the desktop app opens its own picker ("Share your screen with your agent"); a web browser opens its standard screen picker.
2. In the desktop app, choose a window under **Windows** or a display under **Whole screen** — that's what Bearly will capture.
3. Ask your questions as usual — every message carries a new capture of what's on screen at that moment.
4. Stop with the **×** on the shared-screen chip in the composer, below your text (its tooltip reads "Stop sharing with your agent.") — later messages go out without captures.



**What you get:** Answers about what's actually on your screen, kept current with every message.
**Limits:** Captures are still images, one per message. Not offered when file uploads are off.
**Combines with:** [Browser and computer use](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md) when you want Bearly to act on the screen, not only look at it.

## Reference tools, files, and skills

Type `/` at the start of a message, or `@` anywhere in it, to choose a tool, research feature, skill, prompt template, or file by name. Your choice becomes a colored chip in the message. When you send, Bearly turns each chip into a plain instruction for the AI: use this tool for this request, or this is exactly the file I mean. The rest of your words stay as you typed them. A chip removes the guesswork: the AI uses what you named instead of deciding on its own. The chip stays in the conversation, so later turns read your earlier request the same way.

**Use it when:** you know which tool you want (`/deep-research`, `/chart`, `/image`), you want the AI to use one specific file out of many, or you want several tools in one request.
**You need:** Each item appears only when its feature is available to you; some depend on your plan, your organization's settings, or the desktop app.



1. Type `/` as the very first character, or `@` after a space or punctuation — the picker opens. An `@` right after a letter, as in an email address, doesn't open it.
2. Keep typing to filter the list. Use <kbd>↑</kbd> <kbd>↓</kbd> to move, <kbd>Enter</kbd> or <kbd>Tab</kbd> to insert, <kbd>→</kbd> to open a browsable item such as a folder, <kbd>←</kbd> to go back, and <kbd>Esc</kbd> to close.
3. Or type the exact label followed by a space or punctuation, such as `@web-search` — it turns into a chip as soon as you type the space.
4. Write the rest of your request and send. <kbd>Backspace</kbd> removes a whole chip at once.



The picker groups items under these headings:

| Heading | What's there |
|---|---|
| **Assets** | Files in this chat and its project, listed by file name |
| **Skills** | Built-in **Visualize** (`/visualize`) and **Bearly AI Models**, skills you installed in the desktop app, and your Prompt Templates, listed by title |
| **Research** | `/recall`, `/deep-research`, `/scholar`, `/bestpick`, `/council`, `/web-search`, `/read-site`, `/image-search`, `/people-search`, `/maps`, `/weather`, `/seo`, `/search-x`, and more |
| **Tools** | `/youtube`, `/share` (prepare a shareable Page of the chat's key takeaways), `/python`, `/document`, `/chart`, `/image`, `/edit-image`, `/video`, `/transcribe`, `/say`, `/grammar`, `/email`, `/sms`, `/summarize`, `/computer`, tools from your connectors, and more |
| **Local files** | Files and folders in the working folder you chose in the desktop app |

Until you type a filter, the picker shows up to eight items per heading.

**Combine several references.** A message can start with one `/` command, and it can hold any number of `@` references anywhere in the text. Mix files and tools freely:

```text
@web-search today's average 30-year mortgage rate, then @chart it next to the monthly rates in the spreadsheet I attached
```

**Prompt templates.** Your saved Prompt Templates appear under **Skills**, by title. Choosing one opens its fill-in form instead of inserting text. Fill it in and select **Submit** (or press <kbd>Shift</kbd> <kbd>Enter</kbd>); **Cancel** closes it. Blank fields are sent as "N/A". The filled form stays in the chat, so you can change a value and **Submit** again to get a new version.

**What you get:** A request the AI reads exactly as you meant it, with the named tool, file, or skill used for that turn.
**Limits:** Only one `/` command per message, and it must come first. Installed skills and local files appear in the desktop app only.
**Combines with:** [Research](https://bearly.ai/docs/manual/capabilities/research.md), [Data and code](https://bearly.ai/docs/manual/capabilities/data-and-code.md), and [Connectors and skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md), where each tool you can reference is explained; [Building blocks](https://bearly.ai/docs/manual/combine/building-blocks.md) for chains of tools.

## Send while Bearly is working

You don't have to wait for an answer to finish. Anything you send while Bearly is working waits in a short queue above the composer, labeled **Up next**, and goes out automatically, in order, as each answer finishes.

**Use it when:** you think of the next step while a long answer streams, or you want to stack a chain such as "now make a table", then "now email it to me".
**You need:** Nothing extra. Every plan, on every app platform.



1. While Bearly is answering, type your next message — the send button changes to **Queue message**.
2. Press <kbd>Enter</kbd> or select **Queue message** — the message waits under **Up next**. Hover the header to see "Queued messages send automatically, in order, when the current response finishes."
3. Manage a waiting message with its buttons: **Edit queued message** brings it back into the composer (clear the composer first), **Send now** stops the current answer and sends this one right away, and **Remove from queue** deletes it.
4. To pull back the newest waiting message, press <kbd>↑</kbd> in an empty composer.



The queue stops on its own instead of sending the next message when:

- the last answer ended in an error: "Queue paused — the last message failed."
- you reached a usage limit: "Queue paused — usage limit reached."
- you pressed **Stop** twice within 2 seconds: "Queue paused."

After an error or a usage limit, the queue starts again once a later answer finishes cleanly. A single **Stop** ends only the current answer, and the queue carries on. A queue you paused with a double Stop stays paused until you use **Send now** or clear the waiting messages. **Send now** also restarts a queue paused for any reason.

**What you get:** A chain of follow-ups that runs without you watching, and stops instead of piling up failures.
**Limits:** Up to 4 waiting messages. When the queue is full, the send button is disabled ("Queue full — send, edit, or remove a waiting message first"); press <kbd>Enter</kbd> anyway and the header briefly reads **Queue is full**. Waiting messages aren't saved with the chat. Editing an earlier message never queues; it stops the current answer and reruns.
**Combines with:** [Email and text](https://bearly.ai/docs/manual/capabilities/email-and-text.md) as the last step of a chain; [History modes](https://bearly.ai/docs/manual/chat/settings.md#history-modes) for long chains of tool work.

## Stop or interrupt an answer

Stop an answer that's going the wrong way, or replace it with new directions in one step.

**Use it when:** an answer misread the question, is running long, or needs a correction now rather than after it finishes.
**You need:** Nothing extra.



1. To stop, leave the composer empty and select the square **Stop** button — Bearly stops; whatever it already wrote stays in the chat.
2. To stop and redirect at once, type your new message and press <kbd>⌘</kbd> <kbd>Enter</kbd> (<kbd>Ctrl</kbd> <kbd>Enter</kbd> on Windows and Linux) — the current answer stops and your message goes out right away, ahead of anything waiting in **Up next**.
3. On a phone or tablet, queue the message, then select **Send now** on it — same result.



**What you get:** Partial work kept, and the conversation moving in the direction you want.
**Limits:** The send button never shows an "Interrupt" label; interrupting is <kbd>⌘</kbd> <kbd>Enter</kbd> or **Send now**.

## PII Blocker

**PII Blocker** is an organization setting. When an admin turns it on, Bearly finds email addresses, phone numbers in 10-digit North American format, credit card numbers written as one run of digits, and US Social Security numbers in your message text and replaces each with a placeholder such as `[REDACTED: Email Address]` before the message is sent. A notice, **Personal Information Redacted**, names what it found: "Detected Email Address. Information has been automatically redacted."

**Use it when:** your organization wants a guard against people pasting personal or payment details into chats.
**You need:** A managed organization. An admin turns it on in **Organizations** → organization name → **Policies** → policy name → **Privacy & Security** → **PII Blocker**. It's off by default.

**What you get:** The message still sends, with the details replaced. Messages waiting in **Up next** show the redacted text.
**Limits:** It replaces at most five matches of each kind in a message, and card numbers broken up by spaces or dashes aren't recognized as cards, so check long pastes yourself.
**Combines with:** [Organizations](https://bearly.ai/docs/manual/organizations.md) and [Privacy and security](https://bearly.ai/docs/manual/privacy-and-security.md) for the rest of the admin and privacy controls.

## Combinations to try

**Research, then chart, then email, without waiting.** Send the first request, then queue the other two while it runs. Each queued message builds on the answer before it, and the queue pauses if a step fails. The email step needs email sending, which is on unless your organization turned it off.

```text
Find the last five years of US new-home sales by year and summarize the trend.
```

```text
@chart those numbers as a bar chart.
```

```text
@email me a short summary of this chat.
```

**Name a file and a tool in one message.** Type `@` and pick the spreadsheet under **Assets**; it appears as a chip with the file's name. Typing the file name yourself doesn't make a chip, so pick it from the list. Then add a tool chip and your request, so the AI uses that exact file with that exact tool:

```text
@chart monthly revenue, one line per region
```

**Walk through another app.** Turn on **Share your screen**, choose the app's window, then ask one step at a time. Each question gets a fresh capture, so "what do I click next" stays accurate as the screen changes.

```text
I'm on this settings page. What do I change to turn on two-step sign-in?
```

## Related

- [Choose and compare models](https://bearly.ai/docs/manual/chat/models.md)
- [Work with answers](https://bearly.ai/docs/manual/chat/answers.md)
- [Keyboard shortcuts](https://bearly.ai/docs/manual/chat/shortcuts.md)
- [Everyday recipes](https://bearly.ai/docs/manual/combine/everyday-recipes.md)

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Tour the workspace](https://bearly.ai/docs/manual/workspace-tour.md)
- [Next: Choose and compare models](https://bearly.ai/docs/manual/chat/models.md)
- [Related: Tune a chat: settings, style, reasoning, and memory](https://bearly.ai/docs/manual/chat/settings.md)
- [Related: Talk to Bearly: dictation and voice calls](https://bearly.ai/docs/manual/chat/voice.md)
- [Related: Approvals, permissions, and Full access](https://bearly.ai/docs/manual/capabilities/permissions.md)
- [Related: Work with answers](https://bearly.ai/docs/manual/chat/answers.md)
