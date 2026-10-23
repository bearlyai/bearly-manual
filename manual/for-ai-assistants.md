---
title: "Guide for AI assistants"
description: "How an AI assistant, including Bearly's own, should use this manual to answer questions about Bearly, check what a user's plan and device allow, and walk them through a task or a new combination of features."
canonical: "https://bearly.ai/docs/manual/for-ai-assistants/"
markdown: "https://bearly.ai/docs/manual/for-ai-assistants.md"
---

# Guide for AI assistants

HTML: [https://bearly.ai/docs/manual/for-ai-assistants/](https://bearly.ai/docs/manual/for-ai-assistants/)

> How an AI assistant, including Bearly's own, should use this manual to answer questions about Bearly, check what a user's plan and device allow, and walk them through a task or a new combination of features.

This page is for AI models and agents that help people use Bearly, including the assistant inside Bearly itself. It explains how to find the right instructions, check that they apply to this user, and turn them into clear steps, including combinations no page spells out.

## Find the right page

1. Read [/manual.md](https://bearly.ai/docs/manual.md). It lists every page with a one-sentence description of the job it answers. Pick by the description, not the title.
2. Read the page itself as Markdown: replace the trailing slash of its address with `.md`, for example `https://bearly.ai/docs/manual/capabilities/routines.md`.
3. For a task that chains several features, also read [Building blocks](https://bearly.ai/docs/manual/combine/building-blocks.md), which says what each capability accepts and produces, and the closest recipe page.
4. For edge cases on one feature, follow the page's links to the shorter feature guides under `/docs`.
5. If you can read only one document, [/manual-full.txt](https://bearly.ai/docs/manual-full.txt) holds the whole manual.

## Check what applies to this user

Most wrong answers about Bearly come from steps that don't apply to the person asking. Before giving instructions, check these, from the conversation or by asking one short question when the answer changes the steps:

| Check | Why it matters | Where it's described |
|---|---|---|
| Plan | Routines, Best Pick, and Council need Pro; Deep Research and People Search need Analyst; Deep Research Ultra needs Research; some models need Pro or Analyst. | [Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md) |
| Device | Bearly Browser, Work locally, Computer Use, installed skills, and running Routines need the desktop app. The iOS app signs in with email only. Phones send with the send button. | [Get Bearly](https://bearly.ai/docs/manual/get-bearly.md) |
| Organization | An admin can turn features off or lock chat settings. A missing feature on a work account is often a policy, not a bug. | [Organizations](https://bearly.ai/docs/manual/organizations.md) |
| Chat type | End-to-end encrypted chats have no Memories and no document search, and aren't in chat search. Read-only project chats can't send. | [Privacy and security](https://bearly.ai/docs/manual/privacy-and-security.md) |
| Privacy settings | With **Zero Data Retention only** on, the picker hides models without a zero-retention route. | [Choose and compare models](https://bearly.ai/docs/manual/chat/models.md) |

When a step needs something the user doesn't have, say so first and offer the closest path that works, for example a manual run in a chat instead of a Routine on the web app.

## Write steps people can follow

- Use the exact labels in bold, and show navigation as a trail: **Settings** → **Privacy & Security** → **Zero Data Retention only**.
- One action per step, and say what it does: "Select **Create Plan**, which drafts a research plan you can edit before anything runs."
- Put text the user should type or paste in a code block, so they can copy it.
- Name `/` and `@` references when they make a request reliable, for example `/deep-research` or `@web-search`. Typing `/` at the very start of a message, or `@` at the start of a word, opens the list.
- Say when something costs money or asks for approval: a Deep Research run uses plan allowance, People Search asks you to confirm the person and approve the cost before it builds a brief, and agent actions ask for approval unless the chat is in **Full access**.
- Mark desktop-only steps.
- Keep the user's goal in view; skip settings they don't need.

## Combine features into new workflows

Bearly's features pass work to each other through the chat: text in the conversation, files saved in the chat, published links, and emails. To design a workflow nobody has written down:

1. Name the end result (a chart, a Page, an email, a file, a scheduled update).
2. Find the block that produces it in [Building blocks](https://bearly.ai/docs/manual/combine/building-blocks.md).
3. Work backward: what does that block accept, and which block produces that?
4. Check every block against the user's plan, device, organization, and chat type. If the chain will run on a schedule, use only the blocks that run in Routines.
5. Write one prompt per step, and tell the user what to check before the next step.

Prefer the shortest chain that reaches the result. When you show a combination, say why each step can feed the next, so the user can adapt it.

## When you are Bearly's own assistant

- The tools available in the current chat are the truth about what you can do here. Use them instead of describing steps when the user wants the result, and don't describe a tool you weren't given.
- Read this manual with your web fetch tool when a question is about using Bearly and the answer isn't already in your context. If the chat's **Web** setting is **Off**, tell the user where to find the page instead.
- The current chat's model information tells you which model is answering. The manual is not evidence of which model you are.
- You can't change the user's settings, plan, or organization policies. Give the steps, and offer to do the parts your tools allow, such as starting a Routine from the conversation or organizing chats when chat management is on.

## Stay accurate

- Use only what this manual and the app say. If the app shows something different from the manual, the app is right; suggest **Give Feedback** in the account menu so the page gets fixed.
- Don't promise features, models, platforms, prices, or limits that aren't described here.
- Keep privacy statements exactly as the manual states them, with their scope. For example, **Zero Data Retention only** covers chat models, and end-to-end encryption protects stored chats, not the message sent to the model to get an answer.
- Bearly's plans and models change. For current prices, models, and labels, prefer the live app, [/manual.md](https://bearly.ai/docs/manual.md), and the [model catalog](https://bearly.ai/dashboard/model-catalog.json) over anything you remember.

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Settings reference](https://bearly.ai/docs/manual/settings-reference.md)
- [Next: Use Bearly from scripts and agents](https://bearly.ai/docs/manual/api-and-agents.md)
- [Related: Building blocks: how Bearly's features connect](https://bearly.ai/docs/manual/combine/building-blocks.md)
- [Related: Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md)
- [Related: Get Bearly on every device](https://bearly.ai/docs/manual/get-bearly.md)
- [Related: Run Bearly for an organization](https://bearly.ai/docs/manual/organizations.md)
