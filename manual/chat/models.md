---
title: "Choose and compare models"
description: "How to choose, compare, and switch AI models in Bearly, including the model picker, Bearly Fast, Pro, and Ultra, defaults by plan and usage, per-chat and new-chat defaults, plan-gated and hidden models, Zero Data Retention only, running out of credits, and comparing answers with Rerun and Council of Experts."
canonical: "https://bearly.ai/docs/manual/chat/models/"
markdown: "https://bearly.ai/docs/manual/chat/models.md"
---

# Choose and compare models

HTML: [https://bearly.ai/docs/manual/chat/models/](https://bearly.ai/docs/manual/chat/models/)

> How to choose, compare, and switch AI models in Bearly, including the model picker, Bearly Fast, Pro, and Ultra, defaults by plan and usage, per-chat and new-chat defaults, plan-gated and hidden models, Zero Data Retention only, running out of credits, and comparing answers with Rerun and Council of Experts.

Bearly puts Claude, GPT, Gemini, Grok, and more in one app. You pick the model for each chat, set a default for new chats, and can rerun any message on a different model to compare answers side by side. The models on offer change often, so this page explains how choosing works rather than listing them. For the current lineup, open the model picker in the app.

## Open the model picker

The model button sits at the right of the composer and shows the current model's short name. Selecting it opens the picker.

**Use it when:** switching this chat to a faster, cheaper, or stronger model, or finding a model you used before.
**You need:** Nothing extra. Some models need a higher plan; see [Models that need a higher plan](#models-that-need-a-higher-plan).

You can also choose a model in three other places:

- **Settings** → **This Chat** → **Model**, for the open chat.
- **Settings** → **New Chats** → **Model**, the default for chats you start later. It adds a **Recommended** option.
- The **Rerun** menu under any message, to answer that one message with another model. See [Compare models on the same prompt](#compare-models-on-the-same-prompt).

## How the picker is laid out

The picker opens on a short list and expands on request:

- **Favorites** — models you marked with the heart. Hover a model to see its heart.
- **Recently Used** — your two most recent models that aren't favorites.
- **Featured** — a short list Bearly recommends.
- **Show all models** — expands to every available model, grouped by the company that makes it. **Show featured models** goes back. The picker always reopens on the featured view.

Each row shows the model's name, a one-line description, and a retention badge: **ZDR** (zero data retention) or **Standard**. Hover the badge for what it means for that model. Some rows carry a tag: **Featured**, **Recent**, or **Unavailable**. A double check mark shows the model the chat is using now.

Favorites and recent models are saved to your account, so they follow you to every device.

**What you get:** The chat switches to the model you pick, starting with your next message.
**Limits:** A model marked **Unavailable** can't be chosen; selecting it shows a notice with **Got it** and **Read the announcement**. Some models show a warning you confirm before switching.

## Bearly Fast, Bearly Pro, and Bearly Ultra

**Bearly Fast**, **Bearly Pro**, and **Bearly Ultra** are Bearly's own picks, each described in the picker as "Always kept up to date." Choose one when you'd rather not track which underlying model is best this month. Bearly Pro and Bearly Ultra are featured for everyone; Bearly Fast is featured on the Free plan.

**Use it when:** you want a strong choice without comparing models yourself. The picker describes Bearly Fast as a "Fast, well-priced frontier model", Bearly Pro as a "Smart daily-driver frontier model", and Bearly Ultra as a "Frontier model for the most demanding work."

Your default model depends on your plan and usage:

| Your account | Default model |
|---|---|
| Free plan | **Bearly Fast** |
| Any paid plan | **Bearly Pro**, with Medium reasoning |
| Paid plan at 95% or more of its usage | **Bearly Fast**, while usage stays at or above 95% |

The default applies when you haven't chosen a model yourself. A model you picked for a chat stays picked. An open chat on the default follows the switch to Bearly Fast as soon as you cross 95%. Your usage meter shows on the account menu button at the bottom of the sidebar; see [Plans and credits](https://bearly.ai/docs/manual/plans-and-credits.md).

## This chat or every new chat

A model you pick in the composer applies to the open chat only, and it's saved with that chat. In a shared project chat, each person's model choice is their own, so you and a collaborator can each use a different model in the same chat.

**Use it when:** one chat needs a different model than your usual one, or you want every new chat to start on a model you prefer.
**You need:** Nothing extra.



1. For one chat, pick a model in the composer, or open **Settings** → **This Chat** → **Model** — only this chat changes.
2. For new chats, open **Settings** → **New Chats** → **Model** and choose a model, or **Recommended** to follow Bearly's default for your plan — chats you start from now on use it.



**What you get:** New Chats defaults are saved to your account and apply on every device.
**Limits:** New Chats defaults don't apply inside projects; a project's own settings do. An organization or project can set or lock the model; see [When models are hidden or locked](#when-models-are-hidden-or-locked) and [Tune a chat](https://bearly.ai/docs/manual/chat/settings.md#which-setting-wins).
**Combines with:** [Projects](https://bearly.ai/docs/manual/projects.md) to give every chat in a project the same model.

## Models that need a higher plan

Some models need **Pro** or **Analyst**. They still appear in the picker. Choosing one closes the picker and opens **Settings** → **Billing** with a message that names the model and the plan it needs, ending "Upgrade to use this model and unlock the rest of its tier." The **Rerun** menu does the same.

**Use it when:** deciding whether a plan change is worth it for a specific model.
**You need:** To upgrade, the plan the message names. Personal plans run Free, Pro, Analyst, and Research; see [Plans and credits](https://bearly.ai/docs/manual/plans-and-credits.md).

**What you get:** Your chat stays on its current model until you upgrade and choose again.

## When models are hidden or locked

Your settings or your organization can narrow the picker. A line at the top of the picker says why:

| Banner | Why models are hidden |
|---|---|
| "ZDR on · Some models hidden" | You turned on **Zero Data Retention only**. **Change** opens **Settings** → **Privacy & Security**. |
| "ZDR on until settings sync · Some models hidden" | Bearly keeps Zero Data Retention only in force while your settings load or reconnect. |
| "Managed account · Some models hidden" | Your organization allows only some models. |
| "ZDR on, managed account · Some models hidden" | Both at once. |

If a chat's saved model isn't allowed anymore, Bearly answers with the first available model in the picker instead. Your saved choice stays as it was, so the chat goes back to it if it becomes allowed again.

When an organization's allow-list names fewer than five models, every allowed model shows as featured. When an organization or project locks the model, the model button and the **Rerun** menu disappear, and **This Chat** no longer shows **Model**.

**Limits:** Only an organization admin can change which models members may use; see [Organizations](https://bearly.ai/docs/manual/organizations.md).

## Zero Data Retention only

Turn on **Zero Data Retention only** and Bearly shows only zero-retention models, and automatic fallbacks stay on them too. This applies to chat models.

**Use it when:** you want your chats to run only on zero-retention models.
**You need:** Nothing extra. Any plan.



1. Open **Settings** → **Privacy & Security** — or select **Change** on the picker's "ZDR on" banner.
2. Turn on **Zero Data Retention only** — the picker narrows to zero-retention models and shows the "ZDR on · Some models hidden" banner.



**What you get:** The setting is saved to your account and applies on every device. While your settings load, or if they can't sync, Bearly treats Zero Data Retention only as on and the switch can't be changed until it reconnects.
**Limits:** Fewer models to choose from. A chat set to a model without zero retention answers with the first allowed model instead.
**Combines with:** [Privacy and security](https://bearly.ai/docs/manual/privacy-and-security.md) for the other privacy controls.

## When you run out of credits

On a paid plan, using up your plan's credits doesn't end the conversation. A notice above the composer reads "You're out of credits. Chat continues with Bearly Fast or Bearly Pro. Features like transcription need credits." with **View billing**. If your organization's allowance for you is used up, it reads "You've used your team allowance. Chat continues with Bearly Fast until it resets." with **View usage**. While either notice shows, the picker offers only the models you can still use.

**Limits:** Paid tools still need credits. The Free plan has no fallback: when its allowance runs out, Bearly asks you to upgrade or wait for the reset. See [Plans and credits](https://bearly.ai/docs/manual/plans-and-credits.md).

## Compare models on the same prompt

Rerun any message on a different model and keep every answer. Each rerun becomes a new version of that turn, and you flip between versions with the arrows under the message. The chat's own model doesn't change.

**Use it when:** checking whether a stronger model changes the answer, picking a model for a recurring task, or getting a second opinion on a hard question.
**You need:** A chat where the model isn't locked.



1. Under your message or Bearly's answer, open the **Rerun** menu (it shows the model's short name) — models are listed with featured ones first.
2. Pick a model — Bearly answers the same message again with that model, as a new version. Plan requirements and model warnings apply as in the picker.
3. Repeat with a third model if you like.
4. Use the version arrows ("‹ 2 / 3 ›") to compare — **Previous version of query** and **Next version of query** step through them. The version you leave selected is saved with the chat.



To rerun on the same model, select the circular arrow under your message (**Rerun with same model**).

**What you get:** Several answers to one question, one per model, kept in the chat.
**Combines with:** [Work with answers](https://bearly.ai/docs/manual/chat/answers.md#rerun-and-switch-versions) for the other version controls.

## Ask several models at once with Council of Experts

`/council` sends one question to several models in parallel and then combines their answers into one reply, with each model's answer available in its own tab. Use it when you want a synthesized answer instead of reading versions one by one.

**You need:** Pro or higher. Your organization must allow Council.

```text
/council Should a 10-person startup use a monthly or annual pricing model for its first product? Give the strongest case for each.
```

Details, model choice, and limits are on [Research](https://bearly.ai/docs/manual/capabilities/research.md).

## Combinations to try

**Three models, then a council.** Rerun a hard question on three models from the **Rerun** menu and read the versions. If they disagree, send the question to `/council` for one combined answer. Council's experts don't see the chat's earlier messages, so restate the question in full:

```text
/council Our software company gets 40% of its revenue from one customer. What are the three biggest risks, and what should we do about each this quarter? Note where you disagree.
```

**A zero-retention comparison.** Turn on **Zero Data Retention only** first. The **Rerun** menu then offers only zero-retention models, so every version you compare stays on them.

**One model per project.** Set a model in a project's settings so every chat in that project starts on it, while your **New Chats** default stays your choice everywhere else. See [Projects](https://bearly.ai/docs/manual/projects.md).

## Related

- [Tune a chat: settings, style, reasoning, and memory](https://bearly.ai/docs/manual/chat/settings.md)
- [Plans and credits](https://bearly.ai/docs/manual/plans-and-credits.md)
- [Research recipes](https://bearly.ai/docs/manual/combine/research-recipes.md)

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Write, attach, and send](https://bearly.ai/docs/manual/chat/compose.md)
- [Next: Work with answers](https://bearly.ai/docs/manual/chat/answers.md)
- [Related: Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md)
- [Related: Tune a chat: settings, style, reasoning, and memory](https://bearly.ai/docs/manual/chat/settings.md)
- [Related: Projects: shared context, files, and settings](https://bearly.ai/docs/manual/projects.md)
- [Related: Run Bearly for an organization](https://bearly.ai/docs/manual/organizations.md)
