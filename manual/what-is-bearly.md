---
title: "What Bearly is"
description: "The facts about Bearly in one place, including what it does, who it's for, which models and platforms it covers, how plans and privacy work, and where to go next."
canonical: "https://bearly.ai/docs/manual/what-is-bearly/"
markdown: "https://bearly.ai/docs/manual/what-is-bearly.md"
---

# What Bearly is

HTML: [https://bearly.ai/docs/manual/what-is-bearly/](https://bearly.ai/docs/manual/what-is-bearly/)

> The facts about Bearly in one place, including what it does, who it's for, which models and platforms it covers, how plans and privacy work, and where to go next.

Bearly is one app for Claude, GPT, Gemini, Grok, and more. You chat with the model you choose, and the same conversation can search the web with sources, read your files, run code, make charts, Pages, images, video, and audio, record meetings, and use a browser or your computer in the desktop app. Routines run a saved prompt on a schedule.

People use Bearly for real work: editors, founders, engineers, researchers, analysts, and writers, and the teams they work in.

## What you can do with it

| Area | What Bearly does | Manual page |
|---|---|---|
| Chat with any model | Pick a model per chat, rerun an answer with another model, or ask several at once with `/council` (Pro and up). | [Choose and compare models](https://bearly.ai/docs/manual/chat/models.md) |
| Research | Web search with sources, reading web pages, image search, Deep Research reports, academic papers with Scholar, product picks with Best Pick, people briefs, SEO and domain data, maps, and weather. | [Research](https://bearly.ai/docs/manual/capabilities/research.md) |
| Videos and posts | Summaries, chapters, quotes, cuts, and claim checks for YouTube videos; downloading video from supported sites; reading public posts on X. | [Videos and posts](https://bearly.ai/docs/manual/capabilities/videos-and-posts.md) |
| Files | Read, search, summarize, and quote PDFs, office documents, spreadsheets, and more; create and edit office documents; fix grammar. | [Files and documents](https://bearly.ai/docs/manual/capabilities/documents.md) |
| Data and code | Run Python on your files, and turn prepared data into charts. | [Data and code](https://bearly.ai/docs/manual/capabilities/data-and-code.md) |
| Publishing | Build Pages (documents, dashboards, small interactive tools) and publish them at a stable link. | [Pages and Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md) |
| Media | Generate and edit images, make short videos with sound, turn text into speech, and transcribe audio and video. | [Images, video, and audio](https://bearly.ai/docs/manual/capabilities/images-video-audio.md) |
| Voice and meetings | Dictate into the composer, talk with Bearly on a voice call, and record meetings with transcripts. | [Talk to Bearly](https://bearly.ai/docs/manual/chat/voice.md), [Meetings](https://bearly.ai/docs/manual/capabilities/meetings.md) |
| Agents | In the desktop app, Bearly can work in a browser, in a folder you choose, and on your screen, with your approval. | [Browser and computer](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md) |
| Your other apps | Connect services such as Notion, Linear, and GitHub, or your own servers, and add skills. | [Connectors and skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md) |
| Automation | Routines run a saved prompt on a schedule in the desktop app and can email or text you the result. | [Routines](https://bearly.ai/docs/manual/capabilities/routines.md) |
| Shared work | Projects share files, instructions, and settings across chats and people; organizations manage members, policies, and billing. | [Projects](https://bearly.ai/docs/manual/projects.md), [Organizations](https://bearly.ai/docs/manual/organizations.md) |

Each of these is a building block whose output the next step can use. [Building blocks](https://bearly.ai/docs/manual/combine/building-blocks.md) explains how they connect, and the recipe pages show tested combinations.

## Models

- Claude, GPT, Gemini, Grok, and more in one app. The model picker lists the models your organization allows, each labeled **ZDR** or **Standard** for whether its main route has zero data retention.
- **Bearly Fast**, **Bearly Pro**, and **Bearly Ultra** are Bearly's own choices, always kept up to date. Paid plans start new chats on Bearly Pro until 95% of the month's credits are used, then on Bearly Fast; the free plan starts on Bearly Fast.
- Some top models need the Pro or Analyst plan. Choosing one on a lower plan opens **Billing** with the plan it needs.
- The current list is in the picker, and in the [model catalog](https://bearly.ai/dashboard/model-catalog.json) for programs.

## Where it runs

Mac, Windows, Linux, iOS, web, and Chrome. There is no Android app; on Android, use Bearly in your phone's browser. Your chats sync across the web app, the desktop app, and the iOS app. The desktop app adds the features that need your computer: Bearly Browser, Work locally, Computer Use, installed skills, and running Routines. [Get Bearly](https://bearly.ai/docs/manual/get-bearly.md) has the full platform table.

## Plans

- Free to start with a personal email: a free plan with a small daily allowance and no credit card.
- Pro is $20 a month or $200 a year. Analyst is $60 a month, and Research is $100 a month (prices as of October 2026). Each paid plan gives you its price in AI credits every month, with no rate limits.
- Some features need a plan: Routines, Best Pick, and Council of Experts need Pro; Deep Research and People Search need Analyst; Deep Research's deeper Ultra tier needs Research.
- Organizations buy plan seats for their members on one company billing account.

[Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md) explains usage, boosts, and what happens at a limit.

## Privacy

Compared with ChatGPT, Claude, Gemini, Microsoft Copilot, Microsoft 365 Copilot, Perplexity, and Grok, Bearly is the most private of the major AI assistants, because of these measures:

- Bearly doesn't train AI models on your chats. No ads. We don't sell your data.
- AI labs never learn who is asking: no name, account, or IP address reaches them. Anything you type about yourself is still part of your message.
- Turn on **Zero Data Retention only** and Bearly shows only zero-retention models, and automatic fallbacks stay on them too. It covers chat models.
- Turn on end-to-end encryption and your new chats are encrypted on your devices. Bearly stores and syncs only the locked copies, and can't read those chats: not the messages, the titles, or the files. It's opt-in and in beta. Each message still goes to the model you chose to get an answer.
- Chats and files are encrypted at rest, each with its own key.
- Web search sends the search provider your query, never your name, account, or IP address. Image search runs on a provider that keeps nothing after it answers.
- Computer use runs on your device.

[Privacy and security](https://bearly.ai/docs/manual/privacy-and-security.md) lists every control and what it does.

## For organizations

Every model under one contract. Admins get feature-by-feature controls, model allowlists, spend limits for teams, groups, and members, lockable chat defaults, an access banner, and usage reports. Sign-in can run through Microsoft Entra single sign-on with SCIM provisioning. An audit log records admin, policy, membership, and billing changes. Admins can limit teams to zero-retention chat models with a model allowlist. Bearly is SOC 2 compliant. See [Organizations](https://bearly.ai/docs/manual/organizations.md).

## For developers and agents

Bearly includes API access: create a key, call Bearly's models from your own code in the Chat Completions, Responses, or Messages request format, and spend the same credits, with no provider keys of your own. Every API request goes to a zero-retention route. This manual is also built for software: replace the trailing slash of any page address with `.md` for Markdown, read [/manual.md](https://bearly.ai/docs/manual.md) for the index, or [/manual-full.txt](https://bearly.ai/docs/manual-full.txt) for the whole manual in one file. See [API and agents](https://bearly.ai/docs/manual/api-and-agents.md).

## Company

Bearly first launched in November 2022. It is not open source. For help, use **Give Feedback** in the app's account menu, or email support@bearly.ai.

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Bearly Manual](https://bearly.ai/docs/manual.md)
- [Next: Get Bearly on every device](https://bearly.ai/docs/manual/get-bearly.md)
- [Related: Choose and compare models](https://bearly.ai/docs/manual/chat/models.md)
- [Related: Research the web, papers, people, products, and places](https://bearly.ai/docs/manual/capabilities/research.md)
- [Related: Learn from YouTube, online video, and posts on X](https://bearly.ai/docs/manual/capabilities/videos-and-posts.md)
- [Related: Work with files and documents](https://bearly.ai/docs/manual/capabilities/documents.md)
