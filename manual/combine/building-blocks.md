---
title: "Building blocks: how Bearly's features connect"
description: "The composition model behind Bearly — what each capability takes in and produces, which outputs feed which tools, where each block runs, which plans and Routines support it, and what breaks a chain — so a person or an AI can design new multi-step workflows."
canonical: "https://bearly.ai/docs/manual/combine/building-blocks/"
markdown: "https://bearly.ai/docs/manual/combine/building-blocks.md"
---

# Building blocks: how Bearly's features connect

HTML: [https://bearly.ai/docs/manual/combine/building-blocks/](https://bearly.ai/docs/manual/combine/building-blocks/)

> The composition model behind Bearly — what each capability takes in and produces, which outputs feed which tools, where each block runs, which plans and Routines support it, and what breaks a chain — so a person or an AI can design new multi-step workflows.

Every Bearly capability is a building block: it takes something in, does one job, and leaves its result in the chat. Later steps can use anything earlier steps left there, so blocks chain into workflows nobody wrote down. This page lists the blocks, the hand-offs between them that are known to work, and the limits that break a chain.

## How blocks connect

**Every result lands in the chat.** A block leaves its output in one of five places:

- **Text in the conversation**: the answer, plus what tools return to the AI, such as search results, page text, or data.
- **Files in the chat**: uploads and everything Bearly saves or makes, such as Pages, CSV and Markdown files, images, audio, video, PDFs, and transcripts. They're listed in **Browse files** in the chat header, under **Uploaded** and **Generated**, and each has an ID the AI can hand to the next tool.
- **Cards**: interactive results such as a Deep Research report, a **Chart**, a YouTube video card, a Best Pick card, or the image editor. Some cards also save files.
- **Links**: a Page you publish gets a stable bearly.sh link.
- **Messages outside Bearly**: an email to you or a teammate, or a text to your phone.

**Later steps can use what earlier steps left.** The AI reads the conversation on every turn and can open any file in the chat by its ID. A finished Deep Research report is passed to later turns in full. In long chats, the **History** setting decides how older messages are kept: **Chat (Dynamic)** keeps the newest messages in full and shortens older ones, and **Agentic (Compaction)** writes a summary of older history and keeps the recent part word for word. Files stay in the chat either way, and the AI can still look at an image after the message that added it has been shortened. See [Tune a chat](https://bearly.ai/docs/manual/chat/settings.md).

**References point at exact files and tools.** Type `/` at the start of a message or `@` anywhere in it to pick a tool, skill, prompt template, or file by name. A message can start with one `/` command and hold any number of `@` references, so one message can name a file and a tool together. A reference only selects a tool you already have; it never turns on one your plan or organization has turned off. See [Write, attach, and send](https://bearly.ai/docs/manual/chat/compose.md#reference-tools-files-and-skills).

**Projects share files across chats.** Files in a project's **Docs & Data** are available to every chat in that project: they appear in the `@` menu, and the document tools search them. Turn on **Always Search Documents** in the project's chat settings and every answer searches them first. See [Projects](https://bearly.ai/docs/manual/projects.md).

**Routines replay a chain on a schedule.** A routine runs a saved prompt in its own chat at the times you set, with a smaller set of tools, and each run can build on the ones before it. See [Routines](https://bearly.ai/docs/manual/capabilities/routines.md) and [Routines run a smaller toolset](#routines-run-a-smaller-toolset).

## The block catalog

How to read the tables:

- **Block** is the name the app shows, with the `/` or `@` label you type. Most blocks also run when you simply ask in plain words.
- **Plan** is the lowest plan that can use the block. **Any** means every plan, including Free; usage still counts against your plan's allowance. See [Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md).
- **Where**: **All** means the web app, a phone browser, the desktop app, and the iOS app. **Desktop** means the desktop app on Mac, Windows, or Linux.
- **In Routines** says whether a scheduled run can use the block.
- **Council experts** says whether the models answering a `/council` question can use the block while they work.
- **—** means the column doesn't apply.

### Research

Details: [Research](https://bearly.ai/docs/manual/capabilities/research.md).

| Block | Takes | Produces | Plan | Where | In Routines | Council experts |
|---|---|---|---|---|---|---|
| **Web Search** `/web-search` | A question; runs when the chat's **Web** setting is **Auto** | An answer with numbered source links, and sometimes an image gallery | Any | All | Yes | Yes |
| **Image Search** `/image-search` | A description of the images you want | A gallery of up to 20 images with their source pages | Any | All | Yes | No |
| **Read Site** `/read-site` | One web address | The page's text for the AI; long pages, documents, images, and media are saved as chat files | Any | All | Yes | Yes |
| **Deep Research** `/deep-research` | A text question, then a plan you review and can edit | A cited report with sources and figures, a PDF in the chat, and the PDF by email | Analyst (Standard), Research (Ultra) | All | Only through a routine's Deep Research plugin | No |
| **Scholar** `/scholar` | A question about research literature | An answer with superscript citations, a **Papers** card, and open-access PDF links when they exist | Any | All | Yes | Yes |
| **Council of Experts** `/council` (listed as Ask Experts) | One self-contained question that names any files it should use | Answers from 2 to 5 models side by side, then one combined reply | Pro | All | No | — |
| **Best Pick** `/bestpick` | A shopping question, such as the best stick vacuum for pet hair under a price | A card with one product to buy, a store link, the evidence, and follow-up chips | Pro | All | No | No |
| **People Search** `/people-search`, `/find-people`, `/work-emails`, `/lead-enrichment` | A named person plus one detail, a description of the people you want, names with a company domain, or known profiles | A candidate card, then a cited brief; lists and email lookups as tables in the reply | Analyst | All | No | No |
| **Recall** `/recall` | A mention of earlier work or a past decision | Matching excerpts from your past chats | Any | All | No | No |
| **Maps** `/maps` | Places, an area, or a route | A place or route card on the final answer | Any | All | No | No |
| **Weather** `/weather`, `/air-quality`, `/pollen` | A place and a time range | A weather card; past weather as text | Any | All | No | No |
| **SEO data** `/seo` | Keywords, sites, or a page to audit | Search data in the reply | Any | All | No | No |
| **Domain research** `/domains` | A naming brief or one domain | Name ideas, and whether a domain is available to register | Any | All | No | No |

### Video and social

Details: [Videos and posts](https://bearly.ai/docs/manual/capabilities/videos-and-posts.md).

| Block | Takes | Produces | Plan | Where | In Routines | Council experts |
|---|---|---|---|---|---|---|
| **YouTube** `/youtube`, or paste a link | Up to 3 YouTube links per message | A video card with a summary, chapters, takeaways, the transcript, and 2, 5, and 10-minute cuts; transcript and claim-check files in the chat | Any | Web app, phone browser, desktop app | No | Transcript lookup and saved claim checks only |
| **Get Video** `/download-video` | Links to videos on sites such as X, TikTok, and Vimeo; YouTube links in the desktop app only | MP4 files in the chat | Any | All | No | No |
| **X** `/search-x`, `/read-x`, `/x-profile` | A search, a post link, or a profile | Recent posts, threads, quote posts, and profiles in the reply; a post's video imported as a chat file when you ask | Any | All | Yes, except importing a post's video | No |

### Documents and files

Details: [Documents](https://bearly.ai/docs/manual/capabilities/documents.md).

| Block | Takes | Produces | Plan | Where | In Routines | Council experts |
|---|---|---|---|---|---|---|
| **Attach files** (**+** → **Attach files**, drag and drop, paste, or **Take photo**) | Files from your device, up to 300 MB each | Files in the chat, under **Uploaded** | Any | All | — | — |
| **Share your screen** (**+** → **Share your screen**) | A window or screen you pick | A fresh still capture attached to each message you send | Any | Desktop app, and web browsers that support screen sharing | — | — |
| **Search Docs** `/search-docs` | A question about the chat's and project's files | Cited passages; each citation opens the document near that page | Any | All | Yes | Yes |
| **Read Doc** `/read-document` and **Scan Doc** `/find-in-document` | A document and the pages to read, or exact text to find | Page text, or each match with its page, line, and surrounding text | Any | All | Yes | Yes |
| **Summarize Doc** `/summarize` | A long document | A **Deep Summary** in the reply | Any | All | Yes | No |
| **Document editor** `/document` | A document task, plus any PDF, Word, PowerPoint, or Excel files in the chat to work on | New or edited files: filled PDF forms, .docx files with tracked changes, decks, spreadsheets with formulas | Any | All | No | No |
| **Fix Grammar** `/grammar` | A passage of text | An editor card with suggested fixes you accept one at a time or all at once | Any | All | No | No |
| **Chat files** `/create-file`, `/edit-file`, `/read-file`, `/rename-file`, `/files` | Content the AI writes, or a file already in the chat | Pages (HTML), Markdown, plain text, CSV, and JSON files, with a new version on every edit | Any | All | Yes | No |

### Data and code

Details: [Data and code](https://bearly.ai/docs/manual/capabilities/data-and-code.md).

| Block | Takes | Produces | Plan | Where | In Routines | Council experts |
|---|---|---|---|---|---|---|
| **Run Python** `/python` | A task, plus the chat or project files it should use | Up to 5 files per run, plots shown in the chat, and printed results | Any | All; runs in the cloud | No | No |
| **Create chart** `/chart` | A prepared CSV file in the chat with up to 10 columns and 2 MB | A **Chart** card (KPI, bar, or line) with **View data**, **Download CSV**, and, for bar and line charts, **Download PNG** | Any | All | No | No |
| **Visualize** `/visualize` | A request for an interactive view, chart, or diagram | A Page, chart, or diagram | Any | All | No; the routine editor doesn't offer it | No |
| **Work locally** (**Work locally** chip; `/terminal`, `/read-local-file`, `/write-local-file`, `/edit-local-file`, `/attach-local-file`, `/save-file-locally`) | A folder on your computer | Files read, written, and edited on disk, command output, and files copied between disk and chat (up to 50 MB each) | Any | Desktop | Only with **Unattended local access** | No |

### Create

Details: [Pages and Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md).

| Block | Takes | Produces | Plan | Where | In Routines | Council experts |
|---|---|---|---|---|---|---|
| **Pages** (ask for an app, calculator, dashboard, game, or planner; or `/create-file`) | A description, data the AI bakes in, and chat files to embed | A single-file HTML app that runs live in the chat, with a version for each edit (v1, v2, …) | Any | All | Yes | No |
| **Canvas** (**Edit in Canvas** under an answer) | An answer's text | An editable Markdown document in the chat that you and the AI revise in place | Any | All | No | — |

### Media

Details: [Images, video, and audio](https://bearly.ai/docs/manual/capabilities/images-video-audio.md).

| Block | Takes | Produces | Plan | Where | In Routines | Council experts |
|---|---|---|---|---|---|---|
| **Imagine** `/image` | A description, and optional reference images | Images in the inline image editor, ready to download | Any | All | No | No |
| **Touch Up** `/edit-image` | One or more images in the chat, and optionally an area to change | Edited, extended, or combined images | Any | All | No | No |
| **Make Video** `/video` | A description, and optionally an image as the start frame plus an end frame | A 4 to 15-second MP4 with generated sound, saved in the chat | Any | All | No | No |
| **Edit Video** `/edit-video` | A 3 to 10-second clip under 50 MB | A separate edited clip; the original stays as it was | Any | All | No | No |
| **Read Aloud** `/say`, and Voice Studio | Text: a reply, your message, or a script | Spoken audio saved as a chat file; Voice Studio for voices, delivery, and takes | Any | All | No | No |
| **Transcribe** `/transcribe` | Audio or video files in the chat, up to 400 MB each | A transcript with speaker names and timestamps, plus a `.srt` transcript file in the chat | Any | All | No | No |
| **View Media** `/analyze-media` | Image or video files in the chat | What the AI sees, in the conversation; up to 10 minutes of video per look | Any | All | Yes | No |

### Voice and meetings

Details: [Voice](https://bearly.ai/docs/manual/chat/voice.md) and [Meetings](https://bearly.ai/docs/manual/capabilities/meetings.md).

| Block | Takes | Produces | Plan | Where | In Routines | Council experts |
|---|---|---|---|---|---|---|
| **Voice call** (**Start voice call**) | Your voice; the call can use the chat's tools | Spoken answers, and a call card in the chat with the transcript (audio isn't saved) | Any; choosing the voice model needs Pro | All, except Firefox | No | — |
| **Dictation** (microphone in the composer) | Your voice | Text in the composer, or a message sent right away | Any | All | — | — |
| **Meetings** (sidebar **Meetings and Recordings**) | Your microphone; in the desktop app, also the call's computer audio | Live and final transcripts with speaker names, a summary when you ask, and the audio file | Any | All; computer audio needs the desktop app on Windows or macOS 13 or later | — | — |

### Agents and automation

Details: [Routines](https://bearly.ai/docs/manual/capabilities/routines.md), [Connectors and skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md), and [Browser and computer use](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md).

| Block | Takes | Produces | Plan | Where | In Routines | Council experts |
|---|---|---|---|---|---|---|
| **Routines** (sidebar **Routines**, or ask in a chat) | A prompt, a schedule, and the tools you allow | One run per scheduled time in the routine's own chat, optionally emailed or texted to you | Pro | Manage anywhere; runs only in the desktop app | — | — |
| **Connectors** (**Connectors** chip in the composer) | A service you connect, turned on for this chat | That service's tool results, such as issues, pages, or records | Any | All; services that need a sign-in can't be set up in the iOS app; npm servers need the desktop app | Yes, the ones you add to the routine | No |
| **Skills** (`/skill-<name>`; built-ins **Visualize** and **Bearly AI Models**) | A skill's instructions, files, and scripts | Whatever the skill makes; its scripts run on your computer | Any | Installed skills: Desktop; built-ins: All | Yes, the ones you add to the routine | No |
| **Bearly Browser** | Sites you approve | Page text, screenshots, clicks, typing, form submissions, and downloads saved to the chat (one file up to 50 MiB) | Any | Desktop | Only with the routine's **Browser access**, on the sites you list | No |
| **Chrome control** | Your open Chrome tabs | Page text, screenshots, clicks and typing, console and network detail | Any | Desktop app, with Chrome and the Bearly extension | No | No |
| **Computer Use** `/computer` | A task in an app that's open on screen | The task done by clicking and typing, and a **Computer Use** step listing the actions | Any | Desktop | No | No |
| **Chat management** (ask in any chat) | A request to list, read, create, rename, move, or delete chats | Your chat list, an earlier chat's contents, or the change; listing, reading, and deleting ask you first | Any | All | No | No |
| **Prompt Templates** (`/` → **Skills**) | Values for the template's fields, and optional files | A filled form in the chat that runs as a prompt and can run again with new values | Any | All | No | No |
| **Remote modules** (tools labeled `fn-…`) | Tools from a server you or your admin add | That server's results | Any | Web app and desktop app; servers on a private network need the desktop app | No | No |

### Organize and share

Details: [Organize chats](https://bearly.ai/docs/manual/chat/organize.md) and [Projects](https://bearly.ai/docs/manual/projects.md).

| Block | Takes | Produces | Plan | Where | In Routines | Council experts |
|---|---|---|---|---|---|---|
| **File reference** (`@` → **Assets**) | Any file in the chat or its project | An exact pointer the AI uses for that turn | Any | All | — | — |
| **Projects** (sidebar **Projects**) | Files in **Docs & Data**, project instructions, and default chat settings | Shared files and defaults for every chat in the project | Any | All; **Local Directory Sync** needs the desktop app | — | — |
| **Share** (`/share`, the header **Share** button, or **Share file** on a file) | The conversation, or one file | A Page with artwork and a link preview that you review, then publish to a stable bearly.sh link | Any | All | No | — |
| **Download as Markdown** (command menu) | The chat | A `.md` file of the conversation, with tool activity if you include it | Any | All | — | — |
| **Search chats and files** (<kbd>⌘</kbd> <kbd>F</kbd>) | Words or a topic | Matching chats and files, including files Bearly made | Any | All | — | — |

### Notify

Details: [Email and text](https://bearly.ai/docs/manual/capabilities/email-and-text.md).

| Block | Takes | Produces | Plan | Where | In Routines | Council experts |
|---|---|---|---|---|---|---|
| **Send Email** `/email` | A message in Markdown, up to 10 chat files as attachments, and recipients | An email to you, or to teammates in a managed organization; you're copied on it | Any | All | Yes | No |
| **Send SMS** `/sms` | Plain text | A text to your verified US or Canadian mobile number | Any | All | Yes, up to 3 routine texts in 24 hours | No |

## Hand-off rules

Each rule names an output type and the blocks that can take it next. These connections are known to work; anything not listed here may still work, but test it before you rely on it.

### Files feed tools

- **Any file in the chat or its project** → `@` it by name under **Assets**, so the next tool uses that exact file.
- **A document in the chat or project** (PDF, Office file, text) → **Search Docs**, **Read Doc**, **Scan Doc**, and **Summarize Doc**. These tools appear once the chat or its project has at least one file.
- **A spreadsheet or raw data file** → **Run Python** reads it and writes a chart-ready CSV → **Create chart**. Charts read data only from a CSV file in the chat: up to 10 columns and 2 MB, one row for a KPI, up to 100 rows for a bar chart, and up to 2,000 rows for a line chart. They never sample or cut rows to fit.
- **A CSV that's already chart-ready** → **Create chart** directly, with no Python step.
- **Run Python output** (up to 5 files per run) → files in the chat → **Create chart**, a **Page** with the results baked in, or **Send Email** attachments. Each run starts fresh, so name the files a later run should use.
- **Any image in the chat**, whether uploaded, generated, or saved by Read Site → **Touch Up** as a source, or **Make Video** as the start or end frame.
- **A generated video** → **View Media** watches it → **Edit Video** changes it, if the clip is 3 to 10 seconds and under 50 MB.
- **Audio or video files**, whether uploaded, saved by **Get Video**, or a post's video from **X** → **Transcribe**. Video files also → **View Media**, which looks at images and video but not audio-only files.
- **A transcript** → **Transcribe** also saves it in the chat as an `.srt` file named after the original → later turns read it, summarize it, or hand the summary to **Read Aloud**.
- **PDF and Office files** → **Document editor** fills forms, adds tracked changes to .docx files, or builds decks and spreadsheets → new files in the chat.
- **Files in the chat** → **Send Email** as attachments (up to 10, with 20 MB per file and 20 MB in total), or **Share file** to give one file a Page of its own (files under 300 MB).
- **A file on your computer** (desktop app) → **Work locally** attaches it to the chat (up to 50 MB). The reverse also works: it saves a chat file to disk.

### The web feeds files

- **Read Site** → saves long pages as Markdown files, documents (PDF, Office, OpenDocument, EPUB, RTF) as chat files with a short text preview, and images and media as chat files → the document tools, **Touch Up**, and **View Media**.
- **Image Search** → shows images the AI hasn't looked at yet → **Read Site** saves the one you pick into the chat → **Touch Up** or **View Media**.
- **Scholar** → gives an open-access PDF link when a paper has one → **Read Site** saves the paper as a document → **Search Docs** or **Read Doc** for exact quotes with page citations.
- **An X post** → **Web Search** to check it against news sources; its video → imported as a chat file → **View Media** or **Transcribe**.
- **A YouTube card** → transcript lookups and custom cuts in later turns. Pressing **Check claims** saves a claims file → **Scholar** or **Web Search** to look into the figures sites disagreed on.
- **Bearly Browser** → a download is saved to the chat (one file, up to 50 MiB) → the document tools. **Capture and annotate page** attaches a marked-up capture to your next message.
- **Chrome control** or **Computer Use** → reads what's on screen into the conversation → **Run Python**, **Create chart**, or a **Deep Research** question. Computer Use's own agent can search the web and read documents mid-task but can't run Python, so the main chat does that step.

### The conversation feeds later turns

- **A Deep Research report** → passed in full to later turns → rewrite it, turn its numbers into a CSV and chart, build a Page, or email the report text. Bearly emails you the report's PDF on its own; the AI isn't told the PDF is in the chat, so **Send Email** doesn't attach it.
- **Deep Research takes only text** → put what earlier steps found (from a file, a Chrome tab, or a call) into the research question.
- **Council of Experts** → experts see only the question, not the chat or its files → name the files and facts they need in the `/council` question.
- **Any answer** → **Edit in Canvas** to revise it line by line, **Read aloud** to hear it (on answers that are all text), or the **Rerun** menu to get another model's version.
- **A voice call** → its transcript stays in the chat → later typed turns build on it.
- **Dictation** with **After dictation** set to **Send immediately** → runs a normal turn with all the chat's tools.
- **Share your screen** → every message carries a fresh capture → step-by-step help that stays current.
- **A Prompt Template's result** → `/share` turns it into a Page.
- **Find people** → **Find work emails** for the people you pick → a **People Search** brief on one of them.
- **A Best Pick card** → **Cheaper**, **Worth spending more**, or **Not this one** refine it → **Send Email** can send what the pick is and why, but not its store link: the AI gets the card's contents without links.
- **Recall** → excerpts from past chats → with **Chat management**, the AI can read the full earlier chat after you allow it. A very long chat it reads is saved as a Markdown file in this chat.

### Across chats and over time

- **A meeting transcript** → **Add to chat** attaches it as a Markdown file to a new or existing chat's draft, without sending → summaries, action items, a follow-up email, or a Page. **Add to project** puts the same file in a project's files → every chat in that project. The meeting's **Quick summary** isn't included in the file.
- **Project files** → every chat in the project, through `@` and the document tools; **Always Search Documents** makes every answer search them first.
- **A routine run** → lands in the routine's chat → with **Build on previous runs** on, the next run sees earlier ones. Files a run writes, such as a Page or a CSV, can go out with **Email each result**.
- **A chat that did the job once** → ask it to repeat on a schedule, for example "Do this every weekday at 8 and email me the result." Bearly sets up a routine from that chat.

## What breaks a chain

Check these before you plan a chain, and again when a step doesn't appear or stops.

### Plans

| Plan needed | Blocks |
|---|---|
| Pro or higher | Routines, Council of Experts, Best Pick, choosing a voice-call model |
| Analyst or higher | Deep Research (Standard), People Search |
| Research or higher | Deep Research (Ultra) |

Some chat models also need Pro or Analyst; the model picker opens **Billing** if you choose one above your plan. A block above your plan shows an upgrade card in the chat instead of running. See [Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md).

### Organization controls

In an organization, an admin's policy can turn off any block. The `/` label then disappears, and a reference can't bring it back. Some controls switch off several blocks at once:

- **Web** off removes Web Search, Image Search, Read Site, Deep Research, Scholar, YouTube, and Best Pick.
- **Chat web search** off removes Image Search, Deep Research, Best Pick, Scholar's search of journal sites, and YouTube's **Find** and **Check claims**.
- **File uploads** off removes attaching files, screen sharing, Get Video, viewing X videos, and the files YouTube saves; it also blocks uploads to a project's **Docs & Data** and **Local Directory Sync**.
- **Run Python** off removes both `/python` and `/document`. Charts then work only on a CSV that's already prepared, or one made with **Work locally** in the desktop app.
- **Sharing** off removes Share. **Public links** and **Share with people and teams** decide who can open a published Page.
- **Memory Recall** off turns off Recall and **Memories**.

Most other blocks have their own control: **Images**, **Video**, **Transcription**, **Text to speech**, **Voice**, **Dictation**, **Meetings**, **Council**, **Deep Research**, **People Search**, **Charts**, **Routines**, **Work locally**, **Computer Use**, **Browser**, **Chrome extension browser**, **MCP Connectors**, **Skills**, **Email notifications**, **Text messages**, and **Chat management**. See [Organizations](https://bearly.ai/docs/manual/organizations.md).

### Desktop-only blocks

These need the desktop app: Work locally, Computer Use, Bearly Browser, Chrome control, installed skills and their scripts, npm connector servers, running routines, recording a meeting's computer audio, Get Video for YouTube links, and **Local Directory Sync** for projects. On the web or a phone, most of them show a prompt to get the desktop app. See [Get Bearly](https://bearly.ai/docs/manual/get-bearly.md).

### Routines run a smaller toolset

A scheduled run is a chat with nobody watching, so it gets a fixed set of tools:

- **Can use:** Web Search, Image Search, Read Site, X (but not importing a post's video), Scholar, the document tools (Search Docs, Read Doc, Scan Doc, and Summarize Doc), View Media, creating, reading, editing, and renaming chat files (including Pages), Send Email, Send SMS, the connectors and skills you add to the routine, and Deep Research through the routine's **Deep Research** plugin.
- **Only with an explicit routine setting:** Work locally (**Unattended local access**), a skill's scripts (that skill's **Allow scripts**), and Bearly Browser (**Browser access**, on the sites you list).
- **Can't use:** Run Python, the Document editor, Fix Grammar, images, video, transcription, text to speech, voice, Canvas, charts, Visualize, Share, Council of Experts, YouTube, Best Pick, Get Video, People Search, Maps, Weather, SEO data, Domain research, Chat management, Recall, Prompt Templates, remote modules, Computer Use, and Chrome.

A routine runs only in the desktop app, on the device it's installed on, while the app is open, and each run stops after 25 minutes. To get numbers or charts from a schedule, have the routine write a CSV or an HTML Page, or continue in the routine's chat afterwards.

### End-to-end encrypted chats

Turn on end-to-end encryption and your new chats are encrypted on your devices. Bearly stores and syncs only the locked copies. Each message, and any file a tool works on, still goes to the model and the services doing the work. Some blocks behave differently in these chats:

- **Search Docs** isn't available, and **Always Search Documents** has no effect. **Read Doc**, **Scan Doc**, and **Summarize Doc** still work.
- **Memories** and Recall aren't available. Encrypted chats don't appear in **Search chats and files**, and the chat-management tools in a regular chat can't see them.
- **Get Video** works only through Bearly's servers: no YouTube links, and up to 100 MiB per saved file.
- **Run Python** works, with up to 50 MiB of input files per run.
- Publishing a Page asks first ("Publish a readable copy?"), because the published copy isn't encrypted. Limits: 10 MiB for the Page, 2 MiB for the preview, and 25 MiB for an included file.
- A routine created from an encrypted chat keeps its instructions and results in standard storage.

See [Privacy and security](https://bearly.ai/docs/manual/privacy-and-security.md).

### Zero Data Retention only

Turn on **Zero Data Retention only** and Bearly shows only zero-retention models, and automatic fallbacks stay on them too. It governs chat models. Council of Experts uses only models you're allowed, so its lineup can get shorter. It doesn't govern image, video, transcription, or voice-call models, or research services such as Web Search, Deep Research, People Search, and Read Site. Web search sends the search provider your query, never your name, account, or IP address. Image search runs on a provider that keeps nothing after it answers. See [Choose and compare models](https://bearly.ai/docs/manual/chat/models.md).

### Approvals and Full access

- In **Standard** permissions, Bearly asks before a tool reaches outside the chat: local files, desktop control, browsers, connectors, skill scripts, People Search, and listing, reading, or deleting your chats. The chain waits at that step until you answer. **Needs attention** in the sidebar lists chats waiting on you.
- Approvals you save stay on this device: **This response** lasts until the answer ends, **This session** until the chat reloads, and **This chat** until you revoke it. They never sync and never authorize a routine.
- **Full access** lets one chat on one device use your enabled tools without asking. It still asks before connecting a new service, before listing, reading, or deleting your chats, before People Search runs, before giving a routine browser access or unattended local access, and for Computer Use safety checks and certificate warnings.
- On the web and phones, Full access covers connectors only.
- Routines have their own **Permission mode**, turned on from the desktop device that runs them.

See [Permissions](https://bearly.ai/docs/manual/capabilities/permissions.md).

### Read-only chats

Project chats you can only read have no composer and no message controls. Files, images, Pages, and audio show their viewers only, Share isn't offered, and a People Search brief can be viewed but not run.

### Built-in limits worth planning around

- **Web Search**: up to 2 searches per answer, each with up to 8 queries.
- **Deep Research**: one run at a time per person, and no cancel button once a run starts.
- **Run Python**: up to 5 output files per run.
- **Council of Experts**: needs at least 2 models you're allowed to use.
- **YouTube**: up to 3 videos per message.
- **Message queue**: up to 4 waiting messages; it pauses after an error or at a usage limit.
- **Send Email**: up to 25 recipients and 20 emails an hour.
- **Routines**: up to 10 active; runs are at least 30 minutes apart.

## Design a new workflow

Use this procedure to build a chain nobody has written down, whether you're a person or an AI guiding one.



1. State the end artifact — a file, a card, a published Page link, an email, a text, or a routine. This fixes what the last block must produce.
2. Find the block whose **Produces** column matches it — that block is your last step.
3. Read that block's **Takes** column and find the block that produces it. Repeat until you reach something you already have: a question, a link, or a file — this gives you the chain in order.
4. Check every block against the gates above: plan, platform, organization controls, an encrypted chat, and the routine toolset if it will run on a schedule — swap any block that fails for another with the same output.
5. Write one prompt per step, naming the tool with `/` or `@` and the file with `@` — this removes the AI's guesswork about which tool or file you mean.
6. Run a step, check its output, then run the next — confirm the file appears in **Browse files**, the chart has the right rows, or the report finished. Queue later steps only once the chain is proven.
7. To repeat the chain, ask the chat to set it up as a routine — keep only blocks routines can run.



### Worked example

Goal: a dashboard Page of quarterly revenue, published to a link and emailed to you as a file.

- The last two blocks are **Share** (makes the link) and **Send Email** (sends the Page file). Both need a Page; a Page with real numbers needs clean data; clean data comes from **Run Python** reading your spreadsheet.
- Gates: Run Python, Pages, Share, and Send Email are on every plan; your organization must allow **Run Python**, **Charts**, **Sharing**, and **Email notifications**. Not for a routine, because routines can't run Python.

Where a prompt names a file with `@`, type `@` and pick the file from the menu.

```text
/python Read @sales-2026.xlsx and write a CSV of revenue by quarter, one column per region.
```

```text
/chart Make a grouped bar chart from that CSV.
```

```text
Build a one-page dashboard Page with the quarterly figures baked in, a region filter, and three sentences on the trend.
```

```text
/share
```

Review the Page and publish it, then:

```text
@email me the dashboard Page and the CSV as attachments.
```

Swap a block and the rest still holds: replace the spreadsheet with a **Deep Research** report as the data source, or replace **Send Email** with **Send SMS** for a one-line alert.

## Related

- [Research recipes](https://bearly.ai/docs/manual/combine/research-recipes.md)
- [Creative recipes](https://bearly.ai/docs/manual/combine/creative-recipes.md)
- [Business recipes](https://bearly.ai/docs/manual/combine/business-recipes.md)
- [Automation recipes](https://bearly.ai/docs/manual/combine/automation-recipes.md)
- [Everyday recipes](https://bearly.ai/docs/manual/combine/everyday-recipes.md)
- [Team recipes](https://bearly.ai/docs/manual/combine/team-recipes.md)
- [For AI assistants](https://bearly.ai/docs/manual/for-ai-assistants.md)

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Approvals, permissions, and Full access](https://bearly.ai/docs/manual/capabilities/permissions.md)
- [Next: Recipes for research and analysis](https://bearly.ai/docs/manual/combine/research-recipes.md)
- [Related: Tune a chat: settings, style, reasoning, and memory](https://bearly.ai/docs/manual/chat/settings.md)
- [Related: Write, attach, and send](https://bearly.ai/docs/manual/chat/compose.md)
- [Related: Projects: shared context, files, and settings](https://bearly.ai/docs/manual/projects.md)
- [Related: Automate with Routines](https://bearly.ai/docs/manual/capabilities/routines.md)
