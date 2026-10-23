---
title: "Tune a chat: settings, style, reasoning, and memory"
description: "Every Bearly chat setting explained, including This Chat versus New Chats, which setting wins when projects and organizations set their own, Response Style, Reasoning Effort, Temperature, Instructions, Language, Web Search, History modes, Memories, Personalization, and how Bearly tells the AI today's date."
canonical: "https://bearly.ai/docs/manual/chat/settings/"
markdown: "https://bearly.ai/docs/manual/chat/settings.md"
---

# Tune a chat: settings, style, reasoning, and memory

HTML: [https://bearly.ai/docs/manual/chat/settings/](https://bearly.ai/docs/manual/chat/settings/)

> Every Bearly chat setting explained, including This Chat versus New Chats, which setting wins when projects and organizations set their own, Response Style, Reasoning Effort, Temperature, Instructions, Language, Web Search, History modes, Memories, Personalization, and how Bearly tells the AI today's date.

Each chat has its own model, reply language, style, reasoning level, instructions, and memory settings. You can change them for the chat in front of you, set defaults for every chat you start later, and tell Bearly about yourself once so every chat can use it. This page covers every chat setting and how they combine with project and organization settings.

## Open chat settings

You can reach chat settings three ways:

- Press <kbd>⌘</kbd> <kbd>,</kbd> (<kbd>Ctrl</kbd> <kbd>,</kbd> on Windows and Linux).
- Open the account menu at the bottom of the sidebar and choose **App Settings**.
- Open the sliders button in the composer and choose **Chat Settings**.

The **Settings** window lists chat settings under **Chats**: **This Chat**, **New Chats**, **Personalization**, **Voice**, and **Dictation**. Voice and dictation are on [Voice](https://bearly.ai/docs/manual/chat/voice.md). The window's header shows **Saving...**, **Saved**, or **Not saved** as changes save. On a narrow screen, the list of panes becomes a menu at the top.

The sliders button in the composer holds quick per-chat switches: **Web**, **Style**, **Scholar**, **Reasoning**, **Memories**, and **History**. **History** and **Scholar** live only there, not in the **Settings** window.

## This Chat and New Chats

**This Chat** changes only the open chat: "Settings for this conversation only. Changes here don't affect other chats." **New Chats** sets the starting point for chats you start later: "These settings apply to all new chats by default." Both have the same controls:

| Control | Options | New Chats starts at |
|---|---|---|
| **Model** | The models in the model picker. **New Chats** adds **Recommended**, which follows Bearly's default for your plan. | Recommended |
| **Language** | **Default**, Arabic, Bengali, English, English (UK & AU), French, German, Hindi, Indonesian, Italian, Japanese, Korean, Mandarin Chinese, Persian, Portuguese, Russian, Spanish, Swahili, Thai, Turkish, Urdu, Vietnamese | Default |
| **Response Style** | **Normal**, **Classic**, **No Style**, **Learning**, **Concise**, **Explanatory**, **Formal** | Normal |
| **Memories** | **Off**, **Auto** | Auto |
| **Web Search** | **Off**, **Auto** | Auto |
| **Reasoning Effort** | **Default**, **None**, **Low**, **Medium**, **High**, **Extra High** | Default |
| **Instructions** | Free text | Empty |
| **Temperature** | Presets **Factual**, **Default**, **Creative**, and a slider from **Focused** to **Creative** | 1.00 (Default) |

**This Chat** also has **Reset all to defaults**. It appears once this chat has its own value for any control, and puts the chat's model, language, instructions, temperature, and reasoning back to those defaults. Organization and project settings still apply afterward.

**New Chats** defaults are saved to your account, so they apply on every device.

**Use it when:** one chat needs something different (This Chat), or you keep making the same change in every new chat (New Chats).
**Limits:** **New Chats** doesn't apply inside projects. In a project chat the pane says "Default settings are not available in project chats. Use Project Settings to configure." A control your organization or project locks is hidden or can't be changed.
**Combines with:** [Projects](https://bearly.ai/docs/manual/projects.md) for settings shared by every chat in a project; [Choose and compare models](https://bearly.ai/docs/manual/chat/models.md) for picking models.

## Which setting wins

A chat's settings are built up in layers. Each later layer overrides the ones before it:

1. Bearly's own defaults.
2. Your **New Chats** defaults. Skipped in project chats.
3. Your organization's chat defaults. Skipped in project chats.
4. Chat settings your organization applies to every chat, including project chats.
5. The project's shared settings.
6. Your personal settings for that project.
7. **This Chat**.

An organization or project can also lock a setting. A locked setting can't be changed in **This Chat**, and its control disappears from the chat or stays fixed. Settings that can be locked: model, instructions, language, temperature, reasoning effort, response style, memories, web search, always searching project documents, and personalization.

One exception: if your organization or project sets a reasoning level, it applies even when it isn't locked.

Projects add two settings of their own: **Always Search Documents**, which makes every message in the project search the project's files first, and **Disable Personalization**. See [Projects](https://bearly.ai/docs/manual/projects.md) and [Organizations](https://bearly.ai/docs/manual/organizations.md).

## Response Style

**Response Style** shapes how answers read: length, structure, and tone. Change it per chat from the sliders button (**Style**) or in **This Chat**, and set your usual style in **New Chats**.

| Style | What answers are like |
|---|---|
| **Normal** | Conversational and focused, like a knowledgeable colleague. Prose over bullet lists unless the content is a list, such as steps or options, and few headings. |
| **Classic** | Thorough on complex or open-ended questions and when you ask for length; concise on simple ones. |
| **No Style** | Bearly adds no style guidance at all; you get the model's own habits. |
| **Learning** | A patient teacher. A short direct answer first, then a step-by-step build-up from the basics, with analogies and examples, jargon defined, common misconceptions flagged, and a takeaway at the end of complex topics. |
| **Concise** | The answer first, in short bullets, without introductions or sign-offs. Code questions get the code with at most a one-line explanation. Yes-or-no questions start with yes or no. |
| **Explanatory** | In depth, from several angles: what, why, how, and when. Context, trade-offs, structured sections, examples, edge cases, and why one approach beats the alternatives. |
| **Formal** | Professional, precise, and neutral, in prose paragraphs, with no slang. Conclusions first, then the reasoning, with trade-offs and limitations stated rather than opinions. |

Every style except **Classic** and **No Style** also follows a few house rules: no filler openers, no repeating your question back, no needless sign-off or recap, matching how formally you write, using bold sparingly, and not hedging when the answer is clear.

On a phone-sized screen, 480 pixels wide or less, Bearly also asks the AI to keep answers brief and to prefer lists over tables. This applies with every style except **No Style**.

**Limits:** A chat's style is shared by everyone in it and follows the chat to your other devices. An organization or project can set or lock it.

## Reasoning Effort

**Reasoning Effort** sets how much the model thinks before it answers. Higher levels ask for more reasoning; how much that changes the answer depends on the model.

| Option | What it does |
|---|---|
| **Default** | Medium when the chat is on Bearly Pro as your plan's default model; otherwise the model's own default |
| **None**, **Low**, **Medium**, **High**, **Extra High** | Asks the model for that level of reasoning |

The model's reasoning shows above the answer as a collapsible **Thinking** step; see [Work with answers](https://bearly.ai/docs/manual/chat/answers.md#thinking-steps).

**Use it when:** a multi-step problem, math, or code needs more care (raise it), or you want faster replies to simple questions (lower it).
**Limits:** Your reasoning choice is your own, even in a shared chat. A reasoning level set by your organization or project overrides yours.

## Temperature

**Temperature** sets how varied the wording and ideas in an answer are. The presets are **Factual** (0.5), **Default** (1), and **Creative** (1.5). The slider runs from 0 to 2 in steps of 0.05, labeled **Focused** at the low end and **Creative** at the high end. Above 1.5, Bearly warns: "High temperatures may produce incoherent output."

**Use it when:** you want steadier, more literal answers for facts and data (lower), or more varied ideas for brainstorming and creative writing (higher).

## Instructions

**Instructions** is free text Bearly includes with every message in the chat: who the answers are for, what format you want, terms to use or avoid. In **This Chat** the box reads "Custom instructions for this chat..."; in **New Chats**, "Default instructions for new chats...". It saves when you click away.

```text
I'm preparing a board update. Use plain language, round numbers to one decimal place, and end every answer with the one decision I need to make.
```

**Limits:** Project instructions are added to every chat in that project too. An organization or project can lock instructions.

## Language

**Language** asks the AI to answer only in the language you pick, whatever language you write in. **Default** adds no language instruction. The setting covers the AI's replies; Bearly has no setting for the language of its own menus and buttons.

## Web Search

**Web Search** (**Web** in the sliders menu) decides whether the AI can search the web in this chat. **Auto** lets it search when a question needs current information, and answers cite their sources. **Off** keeps web search out of the chat; reading a page you link needs **Auto** too. `/deep-research` works either way, on plans that include it.

**Scholar**, in the sliders menu only, works the same way for research papers: **Auto** or **Off**. Typing `/scholar` uses it for one message even when it's off. See [Research](https://bearly.ai/docs/manual/capabilities/research.md).

## History modes

**History** in the sliders menu decides how the AI reads a long conversation. It's set per chat and follows the chat to your other devices.

| Mode | What the AI reads | Best for |
|---|---|---|
| **Chat (Dynamic)** (default) | The newest messages in full and shorter and shorter excerpts of older ones. Once a chat is very long, the oldest messages drop out of what the AI reads. | Ordinary conversations |
| **Agentic (Compaction)** | When the conversation gets long, Bearly writes a summary of the older part in the background and keeps the most recent part word for word. The chat shows **Conversation compacted so you can keep going**. If a summary fails, the full history is kept. | Long working sessions with many tool steps, such as research, data work, or coding |

In both modes, a single very long message or tool result is shortened when the AI rereads it.

**Use it when:** a long, tool-heavy chat starts losing track of what happened early on: switch it to **Agentic (Compaction)** so the early work survives as a summary instead of being trimmed away.

## Memories

**Memories** lets the AI search your past chats while it answers. After each turn, Bearly indexes that part of the chat. When Memories is on, the AI can look things up when you refer to earlier work or when it's missing context, and it gets short excerpts from each matching chat.

**Use it when:** "like we discussed last week", picking up a project after a break, or asking what you decided before.
**You need:** Your organization must allow **Memory Recall**. It's on unless an admin turned it off.

| Where | Options |
|---|---|
| Sliders button → **Memories**, outside a project | **Off**, **All Chats** (default) |
| Sliders button → **Memories**, in a project chat | **Off**, **Project Only** (default), **All Chats** |
| **This Chat** and **New Chats** → **Memories** | **Off**, **Auto** |

**All Chats** searches every chat you have. **Project Only** searches only that project's chats. To make the AI search past chats for one message, type `/recall`:

```text
/recall What did I decide about the venue for the offsite, and why?
```

**Limits:** Memories isn't available in end-to-end encrypted chats, and those chats never show up in results. Deleting a chat deletes its memory. An organization or project can set or lock the Memories setting.
**Combines with:** [Ask Bearly to manage your chats](https://bearly.ai/docs/manual/chat/organize.md#ask-bearly-to-manage-your-chats) to read the full chat a memory came from; [Search chats and files](https://bearly.ai/docs/manual/chat/organize.md#search-chats-and-files) when you'd rather search yourself.

## Personalization

**Personalization** tells the AI about you once, for every chat: "Tell the AI about yourself so it can tailor responses to your needs."



1. Open **Settings** → **Personalization**.
2. Turn on **Personalization** ("Include your profile context in your chats.") — the fields below unlock. It's off until you turn it on.
3. Fill in **Name** ("How should the AI address you?"), **Occupation** ("What do you do?"), and **About you** ("What should the AI know about you?") — only what you enter here is added to your chats.



**What you get:** With the switch on, Bearly adds what you wrote in these fields to every chat and asks the AI to address you the way you asked. The pane notes: "This is shared with AI models in your conversations." Your Personalization settings are saved to your account and apply on every device.

With the switch off, nothing from your profile is added to your chats.

**Limits:** A project with **Disable Personalization** on, or an organization setting, sends nothing from your profile, including your name.

## Date awareness

Bearly tells the AI today's date, so "tomorrow", "next Friday", and "last week" work out correctly. There's no setting for it. On the first message of a chat, and again whenever the date has changed or at least 12 hours have passed since the last message, Bearly gives the AI your local date, your time zone, and how long it's been since the previous message (for example, "about 3 days"). None of this is saved in the chat.

## Combinations to try

**Your profile everywhere, with one-off exceptions.** Turn on **Personalization**, then set **New Chats** → **Response Style** to **Concise** and **Language** to the language you work in. Every new chat starts that way. For a single chat that needs a different voice, add **Instructions** in **This Chat**; they apply to that chat only.

**Long agentic session.** Before starting a long chain of tool work, switch **History** to **Agentic (Compaction)** and raise **Reasoning** to **High**. Then queue the follow-up steps in **Up next** so they run in order. See [Send while Bearly is working](https://bearly.ai/docs/manual/chat/compose.md#send-while-bearly-is-working).

**Project memory only.** In a project, leave **Memories** on **Project Only** so recall stays inside the project's chats, and turn on **Always Search Documents** in the project's settings so every answer checks the project's files first. See [Projects](https://bearly.ai/docs/manual/projects.md).

## Related

- [Settings reference](https://bearly.ai/docs/manual/settings-reference.md)
- [Choose and compare models](https://bearly.ai/docs/manual/chat/models.md)
- [Privacy and security](https://bearly.ai/docs/manual/privacy-and-security.md)

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Organize, find, share, and export chats](https://bearly.ai/docs/manual/chat/organize.md)
- [Next: Talk to Bearly: dictation and voice calls](https://bearly.ai/docs/manual/chat/voice.md)
- [Related: Projects: shared context, files, and settings](https://bearly.ai/docs/manual/projects.md)
- [Related: Choose and compare models](https://bearly.ai/docs/manual/chat/models.md)
- [Related: Run Bearly for an organization](https://bearly.ai/docs/manual/organizations.md)
- [Related: Work with answers](https://bearly.ai/docs/manual/chat/answers.md)
