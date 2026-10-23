---
title: "Work with answers"
description: "How to copy, edit, delete, rerun, and compare versions of messages in Bearly, read answers aloud or open them in Canvas, read Thinking steps and citations, what answers can display, what to do when an answer fails, and how to move around long chats with the timeline and chapters."
canonical: "https://bearly.ai/docs/manual/chat/answers/"
markdown: "https://bearly.ai/docs/manual/chat/answers.md"
---

# Work with answers

HTML: [https://bearly.ai/docs/manual/chat/answers/](https://bearly.ai/docs/manual/chat/answers/)

> How to copy, edit, delete, rerun, and compare versions of messages in Bearly, read answers aloud or open them in Canvas, read Thinking steps and citations, what answers can display, what to do when an answer fails, and how to move around long chats with the timeline and chapters.

Every message in a chat has its own controls: copy it, edit what you asked, rerun it on another model, step through versions, or hear it read aloud. This page covers those controls, how answers are displayed, and how to find your way around a long conversation.

## Message controls

Controls sit under each message. On a computer they appear when you hover over the message. On phones, tablets, and windows 768 pixels wide or narrower, they're always visible. Chats you can only read, such as project chats shared with you as a reader, show no message controls.

| Control | Under your message | Under Bearly's answer | What it does |
|---|---|---|---|
| **Copy** | Yes | Yes | Copies the message with its formatting, so bold text, lists, and links survive a paste into a document or email. |
| **Edit Query** (pencil) | Yes | No | Loads your message and its attachments back into the composer to change and resend. |
| **Delete Query** | Yes | Yes | Removes that turn after you confirm. |
| **Rerun with same model** (circular arrow) | Yes | No | Asks the same model again, as a new version. |
| **Rerun** menu | Yes | Yes | Answers the same message with a model you pick, as a new version. |
| Version arrows | When versions exist | When versions exist | Step between versions of a turn: "‹ 2 / 3 ›". |
| **Query info** | Yes | Yes | Shows when the turn **Started**, when it **Completed**, and its **Duration**. |
| **Read aloud** | No | On answers made only of text | Plays the answer as speech. |
| **Edit in Canvas** | No | When Canvas is available | Opens the answer in the Canvas editor. |

There's no thumbs-up or thumbs-down on messages. To send feedback about Bearly, use **Give Feedback** in the account menu at the bottom of the sidebar.

## Edit a message

Change what you asked and get a new answer, without losing the old one.

**Use it when:** you left out a detail, want to try a different angle, or attached the wrong file.
**You need:** A chat you can edit.



1. Select **Edit Query** (the pencil) under your message — the message and its attachments load into the composer, and the strip under it shows **Editing message**.
2. Change the text or attachments.
3. Send — Bearly answers the edited message as a new version of that turn. If an answer is still running, it stops first. Edits never wait in the queue.
4. To back out, select **Cancel** in the **Editing message** strip, or press <kbd>Esc</kbd>.



**What you get:** A new version of the turn. The earlier version is still there behind the version arrows.

## Delete a message

**Delete Query** removes one turn. Bearly asks "Delete this query?" with "This action cannot be undone." Select **Delete Message** to confirm. Later messages stay in the chat and attach to the message before the deleted one.

**Limits:** Deleting can't be undone. To remove a whole chat, see [Organize, find, share, and export chats](https://bearly.ai/docs/manual/chat/organize.md#delete-chats).

## Rerun and switch versions

Each rerun and each edit adds a version to the same turn instead of a new message, so the conversation stays readable while you try alternatives.

**Use it when:** an answer missed the mark, you want to compare models on the same question, or you want a fresh attempt.
**You need:** A chat where the model isn't locked by your organization or project. A locked model hides the **Rerun** menu.



1. Select **Rerun with same model** under your message for another attempt from the same model, or open the **Rerun** menu, which shows the model's short name, and pick a different model — featured models are listed first.
2. Read the new version — it replaces the old one on screen, and the version arrows appear.
3. Select **Previous version of query** or **Next version of query** (the arrows around "2 / 3") to compare — the version you leave selected is saved with the chat.



**What you get:** Several answers to one turn, kept in place. Rerunning with another model doesn't change the chat's model.
**Limits:** Models that need a higher plan open the upgrade message instead of rerunning; see [Choose and compare models](https://bearly.ai/docs/manual/chat/models.md#models-that-need-a-higher-plan).
**Combines with:** [Council of Experts](https://bearly.ai/docs/manual/chat/models.md#ask-several-models-at-once-with-council-of-experts) when you want one combined answer from several models.

## Read aloud and Edit in Canvas

**Read aloud** plays an answer as speech. It appears only on answers made entirely of text; an answer that includes tool steps, a **Thinking** step, images, or files doesn't get it. Your organization must allow text-to-speech. Voice options and spoken conversations are on [Voice](https://bearly.ai/docs/manual/chat/voice.md).

**Edit in Canvas** opens an answer in the Canvas editor, where you can reshape it into a document. See [Pages and Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md).

## Thinking steps

When a model reasons before answering, Bearly shows that reasoning as a collapsible **Thinking** step above the answer. Open it to see how the model worked through the problem; leave it closed to read only the answer. If a model writes its reasoning into the answer between thinking tags, Bearly folds that into the same **Thinking** step. How much a model thinks depends on the model and on **Reasoning Effort**; see [Tune a chat](https://bearly.ai/docs/manual/chat/settings.md#reasoning-effort).

## How answers are displayed

Answers render as formatted text:

- Headings, bulleted and numbered lists, tables, block quotes, and links. Line breaks are kept as written.
- Code blocks with syntax highlighting and the language name. Hover a block and select **Copy** to copy just the code.
- Math as typeset formulas. Dollar amounts such as $30 stay plain text.
- Web and email links, which are clickable. Web links open in your browser.

For a chart or diagram, ask for one: `/chart` makes charts, and `/visualize` turns an idea, process, or dataset into a focused visual, such as an interactive Page, a chart, or a diagram. See [Data and code](https://bearly.ai/docs/manual/capabilities/data-and-code.md) and [Pages and Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md).

## Citations

When an answer draws on sources, it cites them so you can check the claim:

- Web search answers carry numbered links to the pages they used.
- Scholar answers mark claims with small superscript citations. Hover one for the paper; select it to open the paper.
- Answers from your documents cite passages you can select to open the document near that page.
- Deep Research reports include numbered citations and a **Sources** list.

Details for each are on [Research](https://bearly.ai/docs/manual/capabilities/research.md) and [Documents](https://bearly.ai/docs/manual/capabilities/documents.md).

## When an answer fails

A failed answer shows its error, or "An error occurred. Please wait and try again." when there's no specific message. **Get help** next to it opens a support dialog. A message that can't be displayed shows "Unable to load message."



1. Read the message — plan and usage-limit messages come with a button to upgrade or to open billing.
2. Select **Rerun with same model** under your message, or pick another model from the **Rerun** menu — either one tries the turn again as a new version.
3. If it keeps failing, select **Get help**.



**Limits:** If messages are waiting in **Up next**, a failed answer pauses the queue until a later answer succeeds or you select **Send now**. See [Send while Bearly is working](https://bearly.ai/docs/manual/chat/compose.md#send-while-bearly-is-working).

## Move around a long chat

Long conversations get a map and shortcuts so you can get back to any point quickly.

**Use it when:** returning to an earlier prompt in a long working session, or reviewing what a chat covered.
**You need:** For the timeline, a window at least 1,280 pixels wide and a chat with five or more prompts. Not shown on phones.

- **Timeline:** A slim rail of tick marks along the right edge marks every prompt. Hover a tick for "Prompt 3 of 12" (for example), a preview of the prompt, and the shortcut hint. Select a tick to jump there.
- **Chapters:** About every five turns, Bearly labels the recent stretch of the conversation in the background. Labeled ticks are highlighted; hover one to see **Chapter** and its title. Chats you can only read don't get chapters.
- **Jump between prompts:** <kbd>⌘</kbd> <kbd>⇧</kbd> <kbd>↑</kbd> and <kbd>⌘</kbd> <kbd>⇧</kbd> <kbd>↓</kbd> move to the previous and next prompt (<kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>↑</kbd> and <kbd>↓</kbd> on Windows and Linux).
- **Scroll to bottom:** When you've scrolled up, a button appears to take you back to the latest message.

**Combines with:** [Download as Markdown](https://bearly.ai/docs/manual/chat/organize.md#download-a-chat-as-markdown) to keep a full record of a long chat.

## Combinations to try

**Best of three, then publish.** Rerun a draft announcement on two other models, pick the version you like with the version arrows, then select **Edit in Canvas** to polish it, and type `/share` to turn the chat into a Page you review before publishing. See [Pages and Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md).

**Check a citation at the source.** After a web search answer, have Bearly read one of the cited pages in full and test the claim against it. `/read-site` reads a single page you name; it needs the chat's **Web** setting on **Auto**.

```text
@read-site https://www.example.com/annual-report and tell me whether it supports the revenue figure in your second paragraph. Quote the sentence.
```

**Fix the question, keep the history.** Instead of adding "I meant…" in a new message, select **Edit Query** on the original, correct it, and send. The chat stays short, and the earlier answer is still one arrow away.

## Related

- [Write, attach, and send](https://bearly.ai/docs/manual/chat/compose.md)
- [Choose and compare models](https://bearly.ai/docs/manual/chat/models.md)
- [Keyboard shortcuts](https://bearly.ai/docs/manual/chat/shortcuts.md)

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Choose and compare models](https://bearly.ai/docs/manual/chat/models.md)
- [Next: Organize, find, share, and export chats](https://bearly.ai/docs/manual/chat/organize.md)
- [Related: Talk to Bearly: dictation and voice calls](https://bearly.ai/docs/manual/chat/voice.md)
- [Related: Make Pages and edit in Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md)
- [Related: Tune a chat: settings, style, reasoning, and memory](https://bearly.ai/docs/manual/chat/settings.md)
- [Related: Analyze data and run code](https://bearly.ai/docs/manual/capabilities/data-and-code.md)
