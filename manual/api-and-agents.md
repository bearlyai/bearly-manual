---
title: "Use Bearly from scripts and agents"
description: "How developers and AI agents use Bearly programmatically, including API keys, the Bearly API's endpoints, authentication, models, limits, and errors, the Bearly AI Models skill for scripts inside Bearly, links that open Bearly with a prompt, the Markdown versions of this manual, remote modules, and guidance for agents that operate Bearly's interface for a person."
canonical: "https://bearly.ai/docs/manual/api-and-agents/"
markdown: "https://bearly.ai/docs/manual/api-and-agents.md"
---

# Use Bearly from scripts and agents

HTML: [https://bearly.ai/docs/manual/api-and-agents/](https://bearly.ai/docs/manual/api-and-agents/)

> How developers and AI agents use Bearly programmatically, including API keys, the Bearly API's endpoints, authentication, models, limits, and errors, the Bearly AI Models skill for scripts inside Bearly, links that open Bearly with a prompt, the Markdown versions of this manual, remote modules, and guidance for agents that operate Bearly's interface for a person.

Bearly has a few doors for code and agents. Your own programs can call Bearly's models with an API key. Scripts that Bearly writes and runs for you can call the same models without a key. And this manual is available as plain Markdown, so an agent can read it directly.

| You want to | Use |
|---|---|
| Call Bearly's models from your own code or a coding tool | [The Bearly API](#the-bearly-api) with an [API key](#api-keys) |
| Have a script Bearly writes in a chat call Bearly's models | The built-in [Bearly AI Models](#scripts-inside-bearly) skill |
| Read this manual from an agent or a script | The [Markdown versions](#read-this-manual-as-markdown) |
| Add your own tools to chats from your server | [Remote modules](#remote-modules), an advanced feature that's off by default |
| Operate Bearly's interface for a person | [Guidance for agents](#guidance-for-agents-operating-bearly) |

## API keys

An API key lets your code call the Bearly API as your account.

**You need:** a Bearly account. On a managed organization, the policy must allow **Developer API access**; if it doesn't, **Developers** or **API Keys** is missing from the menu.



1. Open the account menu at the bottom of the sidebar and select **Developers** — Settings opens at **API Keys**.
2. Select **Create API Key**, or **New Key** if you already have one.
3. Enter a **Note** that says where the key is used, such as "Production app" (required, up to 50 characters), and select **Create**.
4. Use the copy icon on the key's row, and store it in a secret manager or a server environment variable.



**What you get:** a key that works until you delete it. You can reveal and copy it again later from the same row.
**Limits:** keys have no scopes or expiry. A key can call models only: it can't read or create chats, projects, files, or settings. Keep keys out of browser code, public repositories, and email.

To revoke a key, select **Delete** on its row, or open **App Settings** → **Devices** → **Browser extension and API keys** and select **Remove**. Deleting takes effect on the next request. The browser extension's own key is listed there too, as **Browser extension**.

## The Bearly API

The Bearly API accepts requests in the Chat Completions, Responses, and Messages formats, so client libraries and coding tools that let you set a base URL and an API key can point at Bearly without code changes. Requests, responses, and streams keep the format your client already uses.

| Format | Base URL |
|---|---|
| Chat Completions and Responses | `https://api.bearly.ai/v1` |
| Messages | `https://api.bearly.ai` |

| Operation | Path |
|---|---|
| Create a chat completion | `POST /v1/chat/completions` |
| Create a response | `POST /v1/responses` |
| Create a message | `POST /v1/messages` |
| List models | `GET /v1/models` |

Send the key as `Authorization: Bearer YOUR_KEY` or `X-Api-Key: YOUR_KEY`. Listing models needs no key.

```bash
curl https://api.bearly.ai/v1/chat/completions \
  -H "Authorization: Bearer $BEARLY_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model": "bearly-fast", "messages": [{"role": "user", "content": "Hello"}]}'
```

### Models

Call `GET https://api.bearly.ai/v1/models` for the current list; each model lists the formats it supports. Use a model only with a format it supports. `bearly-fast`, `bearly-pro`, and `bearly-ultra` are the app's **Bearly Fast**, **Bearly Pro**, and **Bearly Ultra**. Those names stay stable while the model behind them may improve, so they're the safest choice for code you don't want to update. A model that's removed returns `model_not_found`; Bearly never switches your request to a different model.

### Billing and limits

- Usage is billed to your account like chat: your plan's allowance, your credits, and your organization's limits and model policy all apply.
- If your code stops reading a stream early, the model still finishes and the full response is billed.
- Up to 10 requests can run at once per account; the 11th gets `429`.
- Only tools your own code defines and runs work. Tools hosted by a model provider, background mode, and priority processing return `400`.
- Continuing from an earlier response with `previous_response_id`, or retrieving a past response, isn't available. Send the conversation history with each request.
- The API covers model calls only. It doesn't offer embeddings, image, audio, or file endpoints. Bearly doesn't offer a hosted MCP server, webhooks, or a command-line tool.

### Errors

| Status | Meaning |
|---|---|
| `400` | The request uses an option the Bearly API doesn't support; the message names it |
| `401` | The key is missing, wrong, or deleted |
| `402` | Your plan doesn't include the model, your allowance or credits can't cover the request, or a Free-plan check refused it |
| `403` | Your organization turned off **Developer API access** for you, or its model policy blocks the model |
| `404` | `model_not_found`: the model name is wrong, doesn't support that format, or isn't offered any more |
| `429` | 10 requests are already running for your account |

Other errors come from the model provider, passed through unchanged. Full examples are in [Use the Bearly API](https://bearly.ai/docs/api-access.md).

## Scripts inside Bearly

When Bearly writes and runs a script for you, in [Work locally](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md#work-locally) or a skill script, the built-in **Bearly AI Models** skill lets that script call Bearly's models: chat models, image generation, document text recognition, web search, HTML-to-PDF, and audio transcription. The script gets a short-lived token, supplied to each run automatically and good for about five minutes; it works only for model calls. You don't create or paste an API key, and usage counts on your account.

```text
Use the Bearly AI Models skill. Write a script that reads every .txt file in this folder, asks a fast model for a one-line summary of each, and writes summaries.csv. Try 5 files first.
```

See the recipe [Classify a folder of files with Bearly's models](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md#classify-a-folder-of-files-with-bearlys-models).

## Read this manual as Markdown

Every page of this manual has a Markdown version for agents and scripts.

- **One page:** drop the trailing slash and add `.md`. For example, `https://bearly.ai/docs/manual/capabilities/routines/` is also `https://bearly.ai/docs/manual/capabilities/routines.md`. A request to the normal address with `Accept: text/markdown` gets the Markdown too.
- **The index:** `https://bearly.ai/docs/manual.md` lists every page with a one-line description.
- **The whole manual:** `https://bearly.ai/docs/manual-full.txt` is every page in one document.
- **Everything:** `https://bearly.ai/llms.txt` links the manual, the feature guides, and their full-text bundles, including `https://bearly.ai/llms-full.txt` for all the guides.

Each page's description says what it answers, so an agent can pick a page from the index and fetch only that one.

## Remote modules

Remote modules let a developer add custom tools to Bearly chats from their own server. They're an advanced feature and are off by default for everyone.

- On a managed organization, an administrator can add modules to a policy under **Remote modules** in the policy's **Developer** section, so they load for everyone on that policy.
- An administrator can also turn on **Personal remote modules** ("Allow members to configure their own remote modules."). Members then add their own under **Developers** → **Modules** with **Endpoint**, **Module Name**, and **Secret Key**, then **Add Module**. The pane notes "Only add modules from trusted sources."
- Modules load in your chats, never in routines. In the web app, a module must be a public HTTPS server that accepts requests from Bearly's site; the desktop app can also reach servers on your computer or local network.

> **Danger — A remote module sees your messages**
> A remote module receives your email address, the content of each message, and links to the chat's files in every chat where it's loaded. Add only modules you run yourself or fully trust.


## Guidance for agents operating Bearly

If you're an AI agent using Bearly's interface for a person, these labels are stable places to start:

- **Sidebar:** **New Chat**, **Chat**, **Prompt Templates**, **Routines**, **Meetings and Recordings**, the **Projects** list, and the account menu at the bottom with **App Settings**, **Billing & Pro**, **Developers**, and **Organizations**.
- **Composer:** the message box, the model picker, and the chips beside the box: **Permissions** (or **Full access**), **Connectors**, and **Work locally** in the desktop app. Typing `/` opens commands such as `/email`, `/sms`, `/skill`, and `/visualize`.
- **Command menu:** <kbd>⌘</kbd> <kbd>K</kbd> (<kbd>Ctrl</kbd> <kbd>K</kbd> on Windows and Linux), with **New**, **New Routine**, and **Switch Chats**.
- **Settings:** the window titled **Settings**, with sections **Chats**, **Settings**, **Desktop** (desktop app only), and **Developer**. See [Settings reference](https://bearly.ai/docs/manual/settings-reference.md).
- **Routines:** **Create a routine**, **Draft routine**, **Start from scratch**, **Create routine**, **Save**, and **Run now**.

Leave these to the person, and say so instead of acting:

- **Approval cards** for actions they haven't clearly asked for, and anything that always asks: connecting a new service, listing, reading, or deleting chats, Computer Use safety checks, People Search lookups that use the plan allowance, and routine consent cards for unattended local access and browser access.
- **Enable full access?** and **Start every new chat in Full access?** — turn these on only when the person asks for exactly that.
- **Certificate warnings** in Bearly Browser, passwords, payment details, CAPTCHAs, and the computer's own permission prompts.
- **Sign-in codes** from email, phone verification codes, and **Agree & send code** for texting terms.
- **Purchases and plan changes**, **Delete account**, deleting chats or routines, and removing devices.
- End-to-end encryption setup and the recovery phrase.

Before sending an email or text for someone, confirm the recipient and the contents: there's no approval card, and a sent message can't be recalled. When a feature needs the desktop app, Bearly shows **Use the desktop app** or **Get Bearly**; tell the person rather than working around it.

## Try this

### Point a coding tool at Bearly

Your editor's AI assistant, or any tool that accepts a custom base URL, running on Bearly's models and billed to your Bearly plan.

**Why it works:** the Bearly API speaks the Chat Completions, Responses, and Messages formats, so a tool built for one of them only needs a new base URL and key.
**You need:** an API key; on a managed organization, **Developer API access** allowed.



1. Create a key under **Developers** → **API Keys**.
2. In the tool's model settings, set the base URL to `https://api.bearly.ai/v1` for Chat Completions or Responses, or `https://api.bearly.ai` for Messages, and paste the key.
3. Set the model to `bearly-pro`, or pick one from `GET https://api.bearly.ai/v1/models` that supports the tool's format.
4. Send a test prompt and check **App Settings** → **Usage** for the request (paid plans).



**Swap in:** `bearly-fast` for quick, inexpensive completions; `bearly-ultra` for the hardest work.
**If it stalls:** `404 model_not_found` usually means the model doesn't support the format the tool uses; pick another from the list. `429` means 10 requests are already running; lower the tool's parallelism.

### Give an agent the right manual page

An outside agent that answers "how do I…" questions about Bearly from the manual itself, fetching one short page instead of the whole site.

**Why it works:** the Markdown index lists every page with a one-line description of what it answers, and each page has a Markdown version at a predictable address.
**You need:** an agent that can fetch web pages.



1. Have the agent fetch `https://bearly.ai/docs/manual.md` and pick the page whose description matches the question.
2. Have it fetch that page's Markdown version, for example `https://bearly.ai/docs/manual/capabilities/permissions.md`.
3. Have it answer with the page's exact labels and steps, and link the person to the normal page.



**Swap in:** `https://bearly.ai/docs/manual-full.txt` when the agent can hold the whole manual at once; the feature guides through `https://bearly.ai/llms.txt` for more detail on one feature.
**If it stalls:** if a label in the manual doesn't match what the person sees, their organization may have turned that feature off, or the feature needs the desktop app or a paid plan; check [What works where](https://bearly.ai/docs/manual/get-bearly.md#what-works-where).

## Related

- [Use the Bearly API](https://bearly.ai/docs/api-access.md) — full SDK examples and the current model table.
- [Connect apps and add skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md) — connectors and skills inside Bearly.
- [Guide for AI assistants](https://bearly.ai/docs/manual/for-ai-assistants.md) — how an assistant should use this manual to help people.

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Guide for AI assistants](https://bearly.ai/docs/manual/for-ai-assistants.md)
- [Next: Fix common problems](https://bearly.ai/docs/manual/troubleshooting.md)
- [Related: Use the Bearly API](https://bearly.ai/docs/api-access.md)
- [Related: Let Bearly use a browser, your files, and your computer](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md)
- [Related: Connect apps and add skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md)
- [Related: Settings reference](https://bearly.ai/docs/manual/settings-reference.md)
