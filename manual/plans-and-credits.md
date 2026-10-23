---
title: "Plans, credits, and limits"
description: "Bearly's plans and prices, which features each plan unlocks, how AI credits and the usage meter work, what you see at a limit, Credit Boost, and how to change, cancel, or restore a plan bought on the web, in the iOS app, or as an organization seat."
canonical: "https://bearly.ai/docs/manual/plans-and-credits/"
markdown: "https://bearly.ai/docs/manual/plans-and-credits.md"
---

# Plans, credits, and limits

HTML: [https://bearly.ai/docs/manual/plans-and-credits/](https://bearly.ai/docs/manual/plans-and-credits/)

> Bearly's plans and prices, which features each plan unlocks, how AI credits and the usage meter work, what you see at a limit, Credit Boost, and how to change, cancel, or restore a plan bought on the web, in the iOS app, or as an organization seat.

Every Bearly plan comes with an allowance of AI credits. This page covers what each plan includes, how usage is counted, what happens when you reach a limit, and where to change or cancel a plan.

## Plans at a glance

| Plan | Price | AI credits | What it adds |
| --- | --- | --- | --- |
| **Free** | $0 | A daily allowance and a monthly allowance | Light daily use of low-cost models, with a preview of most features |
| **Pro** | $20/mo | $20 of AI credits each month | Routines, Best Pick, Council, your choice of voice model, and models that need Pro |
| **Analyst** | $60/mo | $60 of AI credits each month | Everything in Pro, plus Deep Research, People Search, and models that need Analyst |
| **Research** | $100/mo | $100 of AI credits each month | Everything in Analyst, plus the Ultra tier of Deep Research |
| **Max** | Organization seats only | See your organization's billing | Everything in Research, for organizations that buy seats |

Yearly billing costs ten times the monthly price, so you pay for ten months and get twelve. The plan picker labels it **Yearly** **17% off**; organization billing calls it **Yearly · 2 months free**. Current prices are also on [bearly.ai/pricing](https://bearly.ai/pricing).

Max is not sold to personal accounts. An organization admin buys it as a seat in the organization's **Billing** tab. See [Run Bearly for an organization](https://bearly.ai/docs/manual/organizations.md).

## What each plan unlocks

| Feature | Minimum plan | What happens on a lower plan |
| --- | --- | --- |
| [Routines](https://bearly.ai/docs/manual/capabilities/routines.md) (scheduled chats) | Pro | Free accounts see the Routines page with an upgrade prompt |
| [Best Pick](https://bearly.ai/docs/manual/capabilities/research.md) (product research) | Pro | An upgrade card appears in the chat |
| [Council](https://bearly.ai/docs/manual/capabilities/research.md) (ask several models at once) | Pro | The chat shows "Council of Experts requires Pro or higher." with **Upgrade to Pro** |
| Choosing a voice model for [voice calls](https://bearly.ai/docs/manual/chat/voice.md) | Pro | Free calls use a fixed model, and the **Model** menu reads "Choosing a voice model needs a paid plan." |
| [Deep Research](https://bearly.ai/docs/manual/capabilities/research.md), standard tier | Analyst | **Run Research** opens the upgrade flow |
| Deep Research, **Ultra** tier | Research | **Run Research** opens the upgrade flow |
| [People Search](https://bearly.ai/docs/manual/capabilities/research.md) | Analyst | An upgrade card appears in the chat |
| Some chat models | Pro or Analyst, per model | Choosing the model opens an upgrade prompt instead of switching |
| **Usage** pane in Settings | Any paid plan | Free accounts use the meter in the account menu |
| Credit Boost | Any paid plan, outside the iOS app | Not shown |

Web search, image search, reading web pages, Scholar, YouTube, X posts, SEO data, domain research, Maps, Weather, and document tools are on every plan. They draw on the same allowance as chat.

If you belong to an organization, its policy can still turn a feature off even when your plan includes it. See the [policy control catalog](https://bearly.ai/docs/manual/organizations.md).

## How usage is counted

Each request uses credits according to the work it takes. A long answer from a large model, a big file, or a research tool uses more than a short reply from a fast model. The percentage meter is a better guide than counting messages.

- **Paid plans** have a monthly allowance equal to the plan's price in AI credits. There is no separate daily limit.
- **Free** has a daily allowance that resets every day and a monthly allowance. Whichever you're closer to using up sets the meter.
- **Personal plans** (bought on the web or in the iOS app) reset on the first day of each calendar month (UTC), not on your billing date. The **Usage** pane shows the exact reset date.
- **Organization seats** follow the seat's billing period instead.
- If you move from a paid plan to Free partway through a month, what you used earlier that month counts toward Free's monthly allowance. Free can then stay unavailable until the next month.

### The usage meter

Open the account menu at the bottom of the sidebar. It shows your email, your plan badge, a meter bar, and a percentage. **+boost** appears beside the percentage while you have boost credits. On Free, the sidebar also shows **Unlock more AI — Go Pro**, which opens **Billing**.

### Which model new chats use

Free accounts start new chats on **Bearly Fast**. Paid accounts start on **Bearly Pro** until 95% of the allowance is used, then on **Bearly Fast**. A model you picked yourself is never changed. See [Models](https://bearly.ai/docs/manual/chat/models.md).

## What you see at a limit

When a request can't run, the chat shows a message and a button.

| Situation | Message | Button |
| --- | --- | --- |
| A feature needs a higher plan | "_Feature_ requires _Plan_ or higher." | **Upgrade to _Plan_** (or **View plans**) |
| Free monthly allowance used up | "You've used this month's free allowance. It resets on _date_. Upgrade to Pro to keep going now." | **Go Pro** |
| Free daily allowance used up | "You're out of credits. Please upgrade your plan to continue. Credits will reset tomorrow." | **Go Pro** |
| A Free request trips Bearly's free-plan checks | "This request tripped our free-plan checks. Go Pro to continue, or email support@bearly.ai if we've misread it." | **Go Pro** |
| Paid plan used up, boost available | "You've used your plan credits. Buy a boost to keep going, or upgrade your plan." The boost amounts appear as buttons. | **Upgrade Plan**, or **View Billing** if your plan can't be changed here |
| Paid plan and boost both used up | "You've used all your credits, including your boost. Buy another boost to keep going, or upgrade your plan." | **Upgrade Plan** or **View Billing** |
| Anything else | "You've used your plan credits. Open billing to see your options." | **View Billing** |

After you add credits or change plans, go back to the chat and send the request again.

## After paid credits run out

On Pro, Analyst, Research, and Max, running out of credits doesn't stop chat. Bearly keeps **Bearly Fast** and **Bearly Pro** available at no extra charge, up to a limited amount each day and each month. A notice above the composer reads "You're out of credits. Chat continues with Bearly Fast or Bearly Pro. Features like transcription need credits." with a **View billing** button.

- While this applies, the model picker shows only Bearly Fast and Bearly Pro.
- Paid tools still need credits.
- **Zero Data Retention only** and your organization's model rules still apply.
- If your organization's spending limit stopped you, chat continues on **Bearly Fast** only. The notice reads "You've used your team allowance. Chat continues with Bearly Fast until it resets." with **View usage**. Your admin's limit still applies to every other model.
- Free accounts don't get this. They wait for the reset or upgrade.

When your credits reset or you add more, the full model list comes back.

## Credit Boost

A Credit Boost buys one-time credits on top of your plan. Use it when one month runs heavier than usual.

**You need:** a paid plan whose billing you manage yourself. Boosts aren't offered on Free, on billing managed by a team admin, or inside the iOS app. If you subscribe through the App Store, you can still buy a boost from Bearly on the web or the desktop app.



1. Open the account menu and select **Billing & Pro**, or select **Buy Boost** in **Usage** — this opens **Settings** → **Billing**.
2. Under **Credit Boost**, pick an amount — each option shows the credits you get and the price you pay before you check out.
3. Complete checkout, then open **Usage** — **Boost remaining** shows the new balance. In **Billing**, the **Credit Boost** card shows it as "_amount_ remaining".



**What you get:** extra credits on top of your plan allowance. The meter shows them as a separate boost segment, and the account menu shows **+boost**.

**Limits:** boosts expire at the end of the calendar month, or at the end of the seat's billing period for an organization seat. If boosts become routine, the card may suggest a plan that includes more credits each month.

## The Billing pane

Open it from the account menu with **Billing & Pro**, or from **Settings** → **Billing**. It shows, in order: seat cards if an organization gives you a seat, the **Current Plan** card, **Credit Boost** on eligible plans, and the plan picker.

### Current Plan

The card shows your plan badge and, when a cancellation is scheduled, **Cancels on** with the date. It offers these buttons, and what each one does depends on where you bought the plan (see the table below):

- **Manage Account** — payment method and account details.
- **Invoices** — past invoices.
- **Restore** — re-checks your subscription, for example after buying on another device.
- **Cancel** — stops renewal. Shown on a paid plan with no cancellation scheduled.
- **Reactivate** — undoes a scheduled cancellation. An organization seat shows **Reinstate** instead.

### The plan picker

Choose **Monthly** or **Yearly**, then compare the cards for **Pro**, **Analyst**, and **Research**. A **Free** card appears when you're on a paid plan. Your plan is marked **CURRENT** and its button reads **Current Plan**. Other buttons read **Upgrade to _Plan_** (from Free), **Switch to _Plan_**, or **Purchase _Plan_** in the iOS app. Choosing **Free** on a plan you bought on the web cancels it.

### Actions by where you bought the plan

| Bought through | Change plan | Cancel | Manage Account and Invoices | Restore |
| --- | --- | --- | --- | --- |
| The web | Opens a secure billing page | **Cancel** opens the billing page's cancel flow. The plan stays until the end of the period. | Open the billing page | Refreshes your plan. If none is found: "No subscription found for this account". Sign in with the account that has the subscription. |
| The iOS App Store | Purchase in the iOS app. Bearly shows "Setting up your pro account..." while it confirms. | In the iOS app, opens Apple's subscription management | In the iOS app, open Apple's subscription management | Checks Apple for your purchase |
| An organization seat | Only an organization admin can change a seat, in the organization's **Billing** tab. An admin who holds a seat can also use these buttons in their own **Billing** pane. | For an admin: ends the seat at the end of its billing period, and **Reinstate** keeps it | For an admin: the organization's payment and invoice page | For an admin: reinstates an ending seat |
| Billing managed by a team admin | Not available | Not available | Not available | Not available |

Outside the iOS app, an App Store subscription's plan buttons read **Manage in iOS App** and can't be selected: "Plan changes for App Store subscriptions happen in the iOS app." Accounts whose billing a team admin manages see **Team-Managed Billing**: "This account's billing is managed by a team admin. Contact support for billing assistance." with **Contact Support**.

### When you have a seat and a personal plan

- A seat card reads "_Organization_ gives you a _Plan_ seat".
- If both are paid, **You have two paid plans** appears with **End personal plan**. It ends the personal plan at the end of its own billing period. Nothing is canceled automatically.
- If your personal plan is higher, **Your personal plan still provides more access** explains: "Bearly uses the higher plan and never adds the allowances together."
- If the organization's payment is past due: "Team seat access is blocked until an admin fixes the payment. Every team admin has been notified."
- **Add teammates** → **Open teams** takes you to the Organizations console, where an organization buys seats on its own billing account.

## Cancel, reactivate, or restore



1. Open **Settings** → **Billing** — the **Current Plan** card shows your options.
2. Select **Cancel** — on the web this opens the billing page's cancel flow; in the iOS app it opens Apple's subscription management.
3. Return to **Billing** — the card shows **Cancels on** and the end date. You keep the plan until then.
4. To keep the plan after all, select **Reactivate** before that date.



If you subscribed in the iOS app, cancel from the iOS app. On other devices, Bearly says "You must be in the iOS app to manage your subscription." If a purchase doesn't show up, sign in with the Bearly account that bought it and select **Restore**.

> **Caution — Deleting your account and subscriptions**
> Deleting your Bearly account cancels a web subscription when the deletion runs, not when you schedule it, and doesn't cancel an App Store subscription. Unused time and credits aren't refunded. See [Delete your account](https://bearly.ai/docs/manual/privacy-and-security.md).


## The Usage pane

Paid plans get **Settings** → **Usage**. Free accounts don't have this pane.

**Current Period** shows your plan badge, the percentage used, and when credits reset ("Credits reset in _N_ days"). It also shows **Used this month**, **Monthly limit**, **Today**, and **Boost remaining** when you have a boost. **Manage** and **Buy Boost** both open **Billing**.

**Usage by service** lists the models and paid data tools you used in a month, with **Service**, **Calls**, and **Cost** columns and a **Total** row. Paid data tools are named by what they did, such as "Maps · place search" or "Weather · daily forecast". Use the month arrows to go back as far as the month you joined. An empty month reads "No usage this month."

If an organization admin set a spending limit for you, the limit shown here can reflect it.

## Related

- [Run Bearly for an organization](https://bearly.ai/docs/manual/organizations.md) — seats, spending limits, and usage reports for admins
- [Models](https://bearly.ai/docs/manual/chat/models.md) — which models your plan offers
- [Manage billing and review usage](https://bearly.ai/docs/account/billing-usage.md) and [Cancel your Bearly subscription](https://bearly.ai/docs/account/cancel-subscription.md)
- [Troubleshooting](https://bearly.ai/docs/manual/troubleshooting.md)

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Get Bearly on every device](https://bearly.ai/docs/manual/get-bearly.md)
- [Next: Tour the workspace](https://bearly.ai/docs/manual/workspace-tour.md)
- [Related: Run Bearly for an organization](https://bearly.ai/docs/manual/organizations.md)
- [Related: Automate with Routines](https://bearly.ai/docs/manual/capabilities/routines.md)
- [Related: Research the web, papers, people, products, and places](https://bearly.ai/docs/manual/capabilities/research.md)
- [Related: Talk to Bearly: dictation and voice calls](https://bearly.ai/docs/manual/chat/voice.md)
