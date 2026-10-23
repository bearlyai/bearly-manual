---
title: "Automate with Routines"
description: "How to create, schedule, equip, and deliver Bearly routines, including the Pro requirement, where routines run, exactly which tools a scheduled run can use, connectors, skills, Deep Research, permission mode, unattended local access, browser access, the notification filter, email and text delivery, and run history."
canonical: "https://bearly.ai/docs/manual/capabilities/routines/"
markdown: "https://bearly.ai/docs/manual/capabilities/routines.md"
---

# Automate with Routines

HTML: [https://bearly.ai/docs/manual/capabilities/routines/](https://bearly.ai/docs/manual/capabilities/routines/)

> How to create, schedule, equip, and deliver Bearly routines, including the Pro requirement, where routines run, exactly which tools a scheduled run can use, connectors, skills, Deep Research, permission mode, unattended local access, browser access, the notification filter, email and text delivery, and run history.

A routine is a prompt Bearly runs for you on a schedule: a weekday news brief, a Friday roundup, a month-end recap. Each routine has its own chat, and every run is added to it. You can also have each result emailed or texted to you, or only the results that clear a bar you set.

**You need:** Pro or higher to create, edit, or run routines; the desktop app, open, on the device that runs them; your organization allows **Routines**. Below Pro, the Routines page shows "Routines are a Pro feature." with **Go Pro**, and existing routines are read-only.

> **Note — Routines run in the desktop app**
> Routines run in the desktop app, on the one device they're installed on, while the app is open. You can create and edit them on the web, a phone, or the iOS app; install them from the desktop app to run them. See [Run location](#run-location-run-now-and-recent-runs).


## How routines work

- **One chat per routine.** Every run is added to the routine's chat and marks it unread. While the app is open, a **Routine ran** notice with **Open** appears.
- **Synced everywhere, run in one place.** Your routines appear on every device you sign in on, but only the installed device runs them.
- **Schedules.** Each routine runs at one time on its scheduled days: **Daily**, **Weekdays**, **Weekends**, **Weekly** on the days you pick, or **Monthly** on a day from the 1st to the 28th. Times use your current timezone. For several checks a day, make several routines.
- **Up to 10 active routines.** Paused routines don't count.
- **One run at a time per device.** Routines due at the same time run one after another.
- **Up to 25 minutes per run.** A run that takes longer is stopped.
- **Catch-up.** If the app was closed or the computer was asleep at the scheduled time, the routine runs once for the most recent missed time when the app is back. Older missed times are recorded as "Skipped — device was away".
- **Auto-pause.** After two failed runs in a row, the routine pauses and shows **Routine paused**: "failed twice in a row. Open Routines to resume it."
- **Encryption.** A routine's chat uses Bearly's standard encryption, not end-to-end encryption, even if you encrypt your new chats end-to-end. An end-to-end encrypted chat can't be a routine's chat.

## Create a routine

There's no slash command for routines. Start one in any of three ways.



1. Open **Routines** in the sidebar, or press <kbd>⌘</kbd> <kbd>K</kbd> (<kbd>Ctrl</kbd> <kbd>K</kbd> on Windows and Linux) and choose **New Routine**.
2. In **Create a routine**, describe the result and when you want it, then select **Draft routine** or press <kbd>Enter</kbd> — Bearly drafts the name, instructions, schedule, and, if you wrote "only tell me if…", a notification filter. The **Try** chips show examples. **Start from scratch** opens an empty editor instead.

   ```text
   Send me a concise AI news brief every weekday at 8 AM. Only tell me if there's a major model release.
   ```

3. Review the draft under **New routine** and change anything that's off — if drafting fails, the editor still opens with your text as the instructions and a weekday 8 AM schedule.
4. Select **Create routine** — the routine gets its own chat, and if you're in the desktop app, it's installed on this device. To see a first result without waiting for the schedule, open the routine again from **Your routines** and select **Run now**.



You can also ask in any chat, including the chat that just did the job well:

```text
Do this every weekday at 8 and email me the result.
```

Bearly sets up the routine and shows a card with its name, schedule, and instructions, plus which device runs it or a note to open the desktop app to choose one. It asks one short question when the task or the time is unclear. It doesn't turn on email, texts, connectors, skills, scripts, conditions, or paid research unless you ask for them. It turns on unattended local access or browser access only when the task clearly needs them, and then only through a warning card you approve. It can't turn on Full access; that happens only in the editor.

## The editor

Open a routine from **Your routines** to edit it. Changes take effect when you select **Save**.

### Routine

- **Name** — how the routine appears in lists and notices.
- **Instructions** — what to do each time. Make the first run self-contained; later runs can see earlier ones if **Build on previous runs** is on.
- **Model** — the model that runs the routine. It starts on Bearly's default for your plan, and the list follows your plan and your organization's model policy. See [Choose and compare models](https://bearly.ai/docs/manual/chat/models.md).

### Schedule

Pick the cadence, the days, and the time. The preview line shows the next run times and your timezone, such as "Next: Mon Oct 27 · 8:00 AM, then Tue, Wed".

### Tools and skills

Give each routine only what it needs. Under **Tools**, select **Plugin**:

- **Bearly** → **Deep Research** ("Uses plan allowance") — each run does one full Deep Research report on the instructions and emails you the PDF. Choose the **Tier**: **Standard** needs the Analyst plan or higher, **Ultra** needs Research. The plan is checked when the run starts. See [Research](https://bearly.ai/docs/manual/capabilities/research.md).
- **Connectors** — pick connected services. Each has a **Tools** setting: **All**, or **Read-only** to keep the run to tools that only look things up. Selected connectors are used without asking during runs. Connect them on the device that runs the routine; a run notes when one isn't connected there.
- **Skills** — pick installed skills. A skill with scripts has **Allow scripts** ("Runs this skill's scripts unattended, with your Bearly token."). Leave it off unless you trust the skill to run without you.
- **Manage connectors…** and **Manage skills…** open their settings. See [Connect apps and add skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md).

### What a scheduled run can use

A run works with nobody watching, so it gets a fixed, smaller set of tools than a chat. Your organization's policy still applies to each one.

| Always available in runs | Only when you turn it on for the routine |
|---|---|
| Web search, image search, and reading web pages | Connectors you select |
| Reading public posts on X | Skills you select; their scripts only with **Allow scripts** or unattended local access |
| Scholar paper search | Deep Research, through the plugin |
| Reading and searching the routine chat's files | Local files and commands, with **Unattended local access** |
| Writing files, including CSV files and HTML Pages | Bearly Browser on listed sites, with **Browser access** |
| Sending you email and texts | |

Never available in runs: Computer Use, Chrome, Run Python (the cloud interpreter) and the document editor that uses it, image generation, video generation, transcription, text to speech, voice, Council, watching and cutting videos, Best Pick, People Search, maps, weather, SEO data, domain research, chart authoring, canvas, prompt templates, memory recall, chat management, video downloads, grammar fixes, Browse Files, and remote modules.

To get numbers, tables, or visuals from a routine, ask it to write a CSV file or an HTML Page, then open the routine's chat and keep going there: it's an ordinary chat with every tool you normally have. With unattended local access, a run can also compute with commands on your computer.

### Permission mode

**Permission mode** sets how a routine's selected tools get approval while you're away.

- **Standard** — the default. Of the tools that would ask for approval in a chat, a run can use only the ones you turned on for this routine: selected connectors, skill scripts you allowed, local files and commands with unattended local access, and Bearly Browser within its approved sites. Anything else that needs approval is denied, and the run continues without it.
- **Full access** — "Selected tools can act without additional approval" on the device that runs the routine, "including scheduled runs while you're away. This stays on across app restarts."



1. Create the routine in Standard and save it.
2. On the desktop device shown in **Run location**, open it and select **Enable full access** under **Permission mode**.
3. Review the tools it lists and confirm — enabling it stops any current run and leaves the schedule unchanged.



Full access in a routine doesn't add Computer Use, Chrome, or DevTools, and never widens the sites or actions in browser access. Saving a material change, such as the instructions, schedule, model, delivery, or tools, sets the routine to **Full access needs review**; select **Review full access**, or **Use Standard**. Copied and moved routines start in Standard. Full access in a chat never carries over to a routine. See [Approvals, permissions, and Full access](https://bearly.ai/docs/manual/capabilities/permissions.md).

### Unattended local access

**Unattended local access** "Lets scheduled runs use Local Exec and approved skill scripts without waiting for you." Local Exec is Work locally's tools: shell commands, and reading, writing, and editing files.



1. In the desktop app, turn on **Unattended local access** in the routine's **Tools** section.
2. Read **Make sure you know what this allows** — it lists every risk.
3. Select **Allow unattended access**, then **Save** (or **Create routine** for a new one).



The risks it lists: the routine "can permanently delete production data if this machine has access to it", "can permanently delete or overwrite your files", can be steered by "prompt injection hidden in websites, documents, email, or connector data", and "can expose credentials, secrets, and private files to the model or this chat." The safer setup: "Use a dedicated working folder with the least access possible, keep current backups, and do not enable this on a machine with production access unless you accept that risk."

If you ask a chat to turn this on, or to rewrite the instructions of a routine that has it, the same warning appears in the chat as a card you must approve before anything is saved. You can't approve it by voice.

> **Danger — Unattended means no one checks each command**
> With this on, a run can run commands and change or delete any file your computer account can reach, without asking. Use it only when the routine needs local work, and test with **Run now** first.


### Browser access

**Browser access** "Lets scheduled runs use a browser on the sites you list while you're away." Routines use Bearly Browser only; they can't use your Chrome.

| Switch or field | What it does |
|---|---|
| **Bearly Browser** | Turns browser access on. "Uses the sign-ins you imported into Bearly Browser. The Browser panel stays closed." |
| **Sites** | "Only these exact sites. A subdomain, like pay.example.com, is a separate site." Type a site and select **Add**; `www.` is optional. Sites named in your instructions appear under **From the instructions:** for one-click adding. Up to 20 sites. |
| **Click, type, and submit** | "Click buttons, type, choose options, and submit forms on these sites. When off, it only reads pages and follows links." |
| **Download files** | "Save files from these sites into this routine's chat." Available only with **Click, type, and submit** on. |



1. Sign in to the sites in Bearly Browser on the device that runs the routine, or import your sign-ins under **App Settings** → **Desktop** → **Browser** → **Import browser cookies** — a run never types into password or payment fields.
2. In the routine's **Tools** section, turn on **Bearly Browser** under **Browser access** and add the sites.
3. Leave **Click, type, and submit** off unless the routine has to change something.
4. Select **Save** (or **Create routine** for a new one), read **Make sure you know what this allows** (it lists what's new since you last approved), and select **Allow browser access and save**.
5. Open the saved routine, select **Run now**, and check the result before relying on the schedule.



**What a run can do there:** open up to 3 tabs of its own, in the background, closed when the run ends; read pages and follow links on the listed sites; with **Click, type, and submit**, take the actions its instructions ask for, including submitting forms, without asking again.
**Limits:** the desktop app stops any request to another site before it's sent, including link clicks, redirects, pop-ups, and form posts. A run never touches password or payment fields, never uploads files, closes a tab with an invalid certificate, and stops at a CAPTCHA. The approval is tied to the instructions: if the instructions or these settings change without a new approval, runs go without a browser until you save and approve again. Narrowing access saves without asking.
**You also need:** the desktop app; **Enable Browser** and **Allow chats to use Browser** on in **App Settings** → **Desktop** → **Browser**; your organization allows **Routines**, **Browser in Routines**, and **Browser**.

The approval warns that on these sites the routine "acts as you", can be tricked by "instructions hidden in a web page, email, or document", and "can read private pages on these sites and copy what it finds into this routine's chat, email, or texts."

When a run couldn't use the browser, its note says why, for example: "It stopped at … because that site isn't approved for this routine. To allow more, edit the routine's browser access." or "Bearly Browser is off in this device's settings, so this run didn't use it."

### Results and delivery

- **Notification filter** — "Every run stays in its chat. Add a condition when you only want alerts for meaningful changes," such as "a competitor ships something new". Each run still happens and lands in the chat. When the result doesn't meet your bar, the run stays quiet: no unread mark, no notice, no email, no text. **Recent runs** marks it **quiet** and says why it stayed quiet. Bearly compares each result with the previous one, and delivers whenever it's unsure, when a tool failed, or when the result is empty. Every seventh quiet run in a row checks in anyway, so silence never means a broken routine.
- **Build on previous runs** — on by default for new routines. Each run sees the earlier runs in the chat, so instructions like "tell me what changed since yesterday" work. Turn it off when every run should start fresh.
- **Email each result** — "Send the completed result to your Bearly account email." Only to your own address. Files the run created, such as a Page or a CSV, can be attached; attachments are limited to 20 MB in total.
- **Text each result** — "Send a short AI summary to your verified phone number." Needs a verified US or Canadian mobile number in **App Settings** → **Phone & SMS**; turning it on without one opens that pane. Routine texts are capped at 3 per 24 hours across all your routines, arrive at the scheduled time, and leave end-to-end encryption, as the switch notes. See [Send email and texts](https://bearly.ai/docs/manual/capabilities/email-and-text.md).

### Run location, Run now, and recent runs

**Run location** appears once the routine is saved and shows "Runs on this device.", another device's name, or "Not installed anywhere — it won't run." A routine you create in the desktop app is installed on that device. In the desktop app, **Install on this device** claims a routine created elsewhere, and **Move to this device** takes one over from another computer. On the web and phones it reads "Runs in the desktop app." with **Get it**.

**Run now**, in the desktop app once the routine is saved, runs the last saved version right away on the device you're using, even if another device owns the schedule. While a run is going, the button becomes **Stop run**, which stops that run and keeps the schedule.

**Recent runs** lists each run as "Ran on schedule", "Catch-up run", or "Manual run", with skips and failures and why, and **Open run** to jump to that result in the chat. Bearly keeps the last 30 runs of each routine.

## Manage your routines

The Routines page lists **Your routines** and a **Next seven days** strip of what your active routines will do next. Each routine's menu has **Run now** (or **Stop run**), **Open chat**, **Pause** or **Resume**, **Install on this device** or **Move to this device**, and **Delete**. Badges show **Paused**, **Failing**, **Not installed**, and **Overdue**.

- **Pause** stops the schedule and keeps the settings and history. **Resume** starts it again.
- **Delete** asks to confirm: "The schedule stops everywhere. Its chat and past runs stay in your history." Select **Delete routine**.
- If you delete a routine's chat, its next run starts a new chat with the routine's name. If that fails, the routine pauses with "Paused — its chat was deleted."

A skipped run says why: "Skipped — previous run was still going", "Skipped — device was away", "Skipped — another device took this routine over", "Skipped — the chat is locked on this device", "Skipped — the chat was deleted", "Skipped — turned off by your team's policy", "Skipped — plan no longer covers routines", "Skipped — device was offline", or "Skipped — signed out".

## Try this

### Get a weekday page of what changed on two sites you're signed in to

Every weekday morning, an email with a one-page summary of yesterday's numbers from two sites that need your sign-in.

**Why it works:** browser access lets the run read signed-in pages in Bearly Browser on exactly the sites you list. Runs can write HTML Pages, and the email a run sends can attach files the run created, so asking for the Page by email puts it in your inbox. **Build on previous runs** gives each run yesterday's result to compare against.
**You need:** Pro or higher; the desktop app open on the installed device; signed in to both sites in Bearly Browser; your organization allows **Routines**, **Browser in Routines**, **Browser**, and **Email notifications**.



1. In the desktop app, sign in to both sites in Bearly Browser, or import your sign-ins under **Import browser cookies**.
2. On the Routines page, draft it:

   ```text
   Every weekday at 7:30 AM, open dashboard.example.com and partners.example.com, collect yesterday's signups and open support tickets, and build a one-page HTML summary comparing them with the previous run. Email it to me.
   ```

3. In **Browser access**, turn on **Bearly Browser** and add both sites from **From the instructions:** — leave **Click, type, and submit** off, since it only reads.
4. Turn on **Email each result**, select **Create routine**, and approve **Allow browser access and save**.
5. Open the routine again from **Your routines**, select **Run now**, and open the email.



**Swap in:** **Text each result** for a two-line summary instead of the Page; a **Notification filter** like "only if signups dropped more than 20%"; a connector instead of a site when the service has one.
**If it stalls:** if a note says a site isn't approved, add the exact host it stopped at, such as a separate sign-in subdomain. If the page asks you to sign in, sign in again in Bearly Browser on that device.

### Get a text only when something changes

A text when an order ships or a status page changes, and silence the rest of the time.

**Why it works:** the **Notification filter** lets each run decide whether the result meets your bar, compared with the previous run, and the text goes out only when it does. Each run still lands in the chat, so you can look any time.
**You need:** Pro or higher; the desktop app open on the installed device; a verified US or Canadian mobile number; your organization allows **Routines** and **Text messages**, plus **Browser in Routines** and **Browser** for a signed-in page.



1. Verify your phone in **App Settings** → **Phone & SMS** if you haven't.
2. Draft the routine:

   ```text
   Every weekday at 9 AM, check my order status page on store.example.com. Only tell me if anything shipped or was delayed.
   ```

   "Only tell me if…" becomes the **Notification filter**.
3. Add `store.example.com` under **Browser access** if the page needs your sign-in, turn on **Text each result**, keep **Build on previous runs** on, and select **Create routine**.
4. Open the routine again and select **Run now**; **Recent runs** shows whether it ran and delivered, or stayed **quiet** and why.



**Swap in:** a public page with no browser access; **Email each result** instead of a text; several routines at different times for more checks a day.
**If it stalls:** texts stop at 3 per 24 hours across all routines, so a chatty filter can use them up; tighten the condition.

### Get a research report every Monday

A full Deep Research report on a topic you follow, as a PDF in your inbox each week.

**Why it works:** the **Deep Research** plugin lets a run do one paid Deep Research report on the instructions, and the run emails you the PDF.
**You need:** the Analyst plan or higher for **Standard**, Research for **Ultra**; the desktop app open on the installed device; your organization allows **Routines** and **Deep Research**.



1. Draft the routine:

   ```text
   Every Monday at 8 AM, research new regulations affecting telehealth in the US from the past week and what they mean for small clinics.
   ```

2. Select **Plugin** → **Deep Research** and choose the **Tier** — "Each run uses your plan allowance and emails you the PDF report."
3. Select **Create routine**, then open the routine again and select **Run now** to check the first report.



**Swap in:** a weekly competitor scan; add a connector so the run checks your own tracker against the findings.
**If it stalls:** a plan below the tier's requirement stops the research with an upgrade message in the chat. Each run uses your allowance, so weigh that before a daily schedule.

### Turn a chat that worked into a routine

A routine that repeats a job you just did by hand, with the same instructions.

**Why it works:** the chat already holds the instructions that worked, and Bearly can save them as a routine from that same chat.
**You need:** Pro or higher; your organization allows **Routines**; the desktop app to run it.



1. In the chat that did the job, ask:

   ```text
   Do this every weekday at 8 AM and email me the result.
   ```

2. Read the card Bearly shows — it gives the schedule and instructions, and says which device runs the routine or that you need to open the desktop app to choose one.
3. In the desktop app, open **Routines**, open the new routine, and select **Install on this device** if it shows **Not installed**.
4. Select **Run now** to confirm the instructions work without the chat's earlier context.



**Swap in:** "only tell me if…" to add a filter; "text me" instead of email.
**If it stalls:** if the first run misses context the chat had, edit **Instructions** so the job is self-contained.

## Related

- [Approvals, permissions, and Full access](https://bearly.ai/docs/manual/capabilities/permissions.md) — how routine approvals differ from chat approvals.
- [Let Bearly use a browser, your files, and your computer](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md) — Bearly Browser and Work locally in chats.
- [Routines](https://bearly.ai/docs/features/routines.md) in the feature guides.

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Connect apps and add skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md)
- [Next: Send email and texts](https://bearly.ai/docs/manual/capabilities/email-and-text.md)
- [Related: Choose and compare models](https://bearly.ai/docs/manual/chat/models.md)
- [Related: Research the web, papers, people, products, and places](https://bearly.ai/docs/manual/capabilities/research.md)
- [Related: Approvals, permissions, and Full access](https://bearly.ai/docs/manual/capabilities/permissions.md)
- [Related: Let Bearly use a browser, your files, and your computer](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md)
