---
title: "Recipes for automation and agents"
description: "Step-by-step recipes that combine Routines, Bearly Browser, Chrome control, Work locally, Computer Use, connectors, Deep Research, and email or text delivery, including what scheduled runs can and can't use and which steps need the desktop app."
canonical: "https://bearly.ai/docs/manual/combine/automation-recipes/"
markdown: "https://bearly.ai/docs/manual/combine/automation-recipes.md"
---

# Recipes for automation and agents

HTML: [https://bearly.ai/docs/manual/combine/automation-recipes/](https://bearly.ai/docs/manual/combine/automation-recipes/)

> Step-by-step recipes that combine Routines, Bearly Browser, Chrome control, Work locally, Computer Use, connectors, Deep Research, and email or text delivery, including what scheduled runs can and can't use and which steps need the desktop app.

These recipes use Bearly's agent tools: Routines that run on a schedule, Bearly Browser and your own Chrome, Work locally on a folder, Computer Use in desktop apps, connectors to your other apps, and email and text to reach you. Every recipe here needs the desktop app (Mac, Windows, or Linux) for at least one step. In a chat, Bearly Browser, Chrome, Work locally, Computer Use, and connectors ask before they act, unless you turn on Full access for that chat; a Routine gets its access when you save it in the editor. See [Permissions](https://bearly.ai/docs/manual/capabilities/permissions.md). For what each block takes in and gives back, see [Building blocks](https://bearly.ai/docs/manual/combine/building-blocks.md).

> **Note — What a scheduled run can use**
> A Routine run can search the web, read public pages, read X, search papers, read files in its chat, write files and Pages, email or text you, and use the connectors and skills you pick for it. When you turn them on in the routine's editor, it can also use Bearly Browser on sites you list (**Browser access**), run local commands (**Unattended local access**), and start one Deep Research run (the **Deep Research** plugin). It can't run Python, draw charts, make images, video, or audio, transcribe, watch YouTube, or use Best Pick, People Search, Maps, Weather, SEO data, Domain research, Council of Experts, Chrome, or Computer Use.


## Get a weekday digest from sites you sign in to

Every weekday morning a Routine reads the sites you choose in Bearly Browser, writes a summary into its own chat, and emails you only when your condition is met.

**Why it works:** A Routine is a saved prompt that runs in the desktop app on a schedule, and every run lands in the routine's chat. **Browser access** lets runs use Bearly Browser on the exact sites you list, with the sign-ins Bearly Browser already has. **Build on previous runs** lets each run see earlier runs, and the **Notification filter** checks each result against your condition and stays quiet when nothing meets it.
**You need:** **Pro** plan or higher. The desktop app, open on the device the routine is installed on when it's due to run; you can create and edit routines anywhere, but browser access can only be turned on from the desktop app. Organization controls: **Routines**, **Browser in Routines**, **Browser**, and **Email notifications**. On the device: **Settings** → **Desktop** → **Browser** → **Enable Browser** and **Allow chats to use Browser**.



1. In the desktop app, select the globe (**Open Browser**) in the title bar and sign in to each site. Or use **Settings** → **Desktop** → **Browser** → **Import browser cookies** to bring your current sign-ins over from Chrome or Edge. — Routine runs use these sign-ins. Import copies cookies only, never passwords, history, bookmarks, or autofill.

2. Open **Routines** in the sidebar and type in the **Create a routine** box:

   ```text
   Every weekday at 7:30 AM, open status.example.com and community.example.com and summarize what changed since the last run in five bullets with links. Only tell me if there's a new incident or a staff post.
   ```

   Select **Draft routine**. — The editor opens with a drafted name, instructions, and schedule (here **Weekdays** at 7:30 AM), and your "only tell me if" condition in **Notification filter**. Check each one before you save.

3. Under **Tools** → **Browser access**, turn on **Bearly Browser** and add each site under **Sites**, or select the suggestions under **From the instructions:**. Leave **Click, type, and submit** off. — Runs can read pages and follow links on exactly those sites. A subdomain counts as a separate site.

4. Under **Results and delivery**, turn on **Email each result** and keep **Build on previous runs** on. Select **Create routine**, then **Allow browser access and save** in the confirmation. — The confirmation lists what the routine can do on those sites while you're away. A routine you create in the desktop app is installed on that device.

5. Open the routine from the list and select **Run now**. — The run uses at most three background tabs and writes its summary into the routine's chat. When the result meets your condition, it emails you and shows a **Routine ran** notice with **Open**. When it doesn't, **Recent runs** marks the run **quiet** with the reason, and no notice appears.



**Swap in:**
- **A text for the email:** turn on **Text each result** for a short summary on your verified US or Canadian phone. Routine texts are limited to 3 a day.
- **Public sites only:** drop **Browser access**. Runs can search the web and read public pages without it.
- **A Page in the email:** add "Build a one-page Page comparing today with last week and attach it to the email" to the instructions. Runs can write Pages and attach them to email, but can't publish a link.
- **Sites that need a search box:** turn on **Click, type, and submit**. Runs can then take the actions your instructions ask for on those sites, including submitting forms, so keep the site list short.

**If it stalls:**
- "Runs go without a browser because the instructions or these settings changed after you approved them" means the routine changed after you approved its browser access. Select **Save** to approve it again.
- "It stopped at … because that site isn't approved for this routine" means a link led to another site. Add it under **Sites** if you trust it.
- Runs happen only while the desktop app is open on the installed device. After the device was away, the latest missed slot runs once. Two failures in a row pause the routine; resume it from **Routines**.
- After six quiet runs in a row, the seventh delivers a short check-in, so you know the routine is still working.

## Schedule a weekly Deep Research digest

Every Monday a Routine runs a Deep Research report on your topic and emails you the PDF.

**Why it works:** The **Deep Research** plugin lets each run start one Deep Research run at the tier you choose, without asking. The report lands in the routine's chat and its PDF is emailed to you. With **Build on previous runs** on, each run can see what last week's said.
**You need:** **Pro** plan for Routines, and **Analyst** or higher for a Standard Deep Research run (**Research** for **Ultra**). The desktop app, open on the installed device at run time. Organization controls: **Routines** and **Deep Research**.



1. Open **Routines** and type in **Create a routine**:

   ```text
   Every Monday at 8 AM, research new US regulations and enforcement actions affecting telehealth from the past week. Lead with what's new since last week's report.
   ```

   Select **Draft routine**. — The editor opens with a **Weekly** Monday schedule.

2. Under **Tools** → **Tools and skills**, open **Plugin** and choose **Deep Research** (marked "Uses plan allowance"). To change the tier, select the **Deep Research** chip and pick **Standard** or **Ultra** under **Tier**. — Each run can start one Deep Research run.

3. Keep **Build on previous runs** on and select **Create routine**. Open the routine from the list and select **Run now**. — When the report finishes it appears in the routine's chat, and the PDF arrives in your email.



**Swap in:**
- **Scholar for Deep Research** (Pro is enough): drop the plugin and ask for "new papers this week on …". Scholar runs in routines without a plugin.
- **X for Deep Research:** "Every Friday, find posts from the last 7 days that mention our company and summarize the sentiment." X reading works in routines.
- **A text for the email:** turn on **Text each result** for a short summary on your phone.

**If it stalls:** Only one Deep Research run per person can be in progress at a time, so don't start one in a chat while the routine is due. Your plan is checked on every run; if it no longer includes the tier you chose, the run can't use Deep Research.

## Turn a chat that worked into a Routine

One message turns a chat that already produced the result you want into a scheduled Routine.

**Why it works:** A chat can create routines when you ask it to. It keeps the task, asks one short question if the schedule is unclear, and shows a card confirming the saved routine. It adds email, text, connectors, browser access, local access, or paid research only when you ask for them.
**You need:** **Pro** plan or higher. Create from any platform; runs need the desktop app. Organization controls: **Routines**, plus **X (Twitter)** and **Email notifications** for this example.



1. Do the task once in a chat:

   ```text
   /search-x Find posts from the last 7 days that mention Acme Analytics, group them by sentiment, and quote the three most-liked.
   ```

   — Check that the answer is what you want every week.

2. Schedule it:

   ```text
   Do this every Friday at 4 PM and email me the result.
   ```

   — Bearly shows a card for the saved routine with its schedule and **Open in Routines**. Asked in the desktop app, the card says the routine is installed on that device; asked anywhere else, it says to open the desktop app to choose the device that runs it.

3. In the desktop app, select **Open in Routines** on the card (or open **Routines** and the routine). Check its instructions and that **Email each result** is on. If **Run location** doesn't say "Runs on this device.", select **Install on this device**. Then select **Run now** to test it.



**Swap in:**
- **A condition for the email:** add "Only tell me if a post gets over 500 likes" in step 2; it becomes the **Notification filter**.
- **A text for the email:** say "text me" instead of "email me". Texts need a verified phone in **Settings** → **Phone & SMS**.
- **The Routines page for the chat:** select **New Routine** in the command menu (<kbd>⌘</kbd> <kbd>K</kbd>, or <kbd>Ctrl</kbd> <kbd>K</kbd> on Windows and Linux). It opens **Routines**, where you can build the routine in the editor and paste the prompt from step 1 into **Instructions**.

**If it stalls:** If the chat used a tool routines can't run (Python, charts, images, YouTube, Maps, Weather, Best Pick, People Search, and others in the note at the top), rewrite the routine's instructions to do without it.

## Turn a folder of invoices into a spreadsheet with formulas

Bearly reads every invoice in a folder on your computer, builds an Excel workbook with a summary sheet, and saves it back into the folder.

**Why it works:** Work locally lets a chat list, read, and copy files in a folder you choose. It copies each invoice into the chat as a file, where the Document editor (which runs on Run Python) can read them and write an Excel workbook with formulas. Bearly then saves the workbook from the chat back to your folder.
**You need:** Any plan. Desktop app. Organization controls: **Work locally** and **Run Python**. In Standard permissions, commands, file changes, and saves ask first; attaching a file from inside the chosen folder doesn't. On an approval card, pick **This chat** instead of **Once** so the same kind of action doesn't ask again in this chat on this device.



1. In the composer, select **Work locally** → **Choose folder…** and pick the folder with the invoices. — The chip shows the folder's name.

2. Bring the invoices in:

   ```text
   List the PDF invoices in this folder and attach them all to the chat.
   ```

   — Approve the card for the command that lists the folder; it shows the command, and **Details** shows the folder it runs in. Each invoice then appears as a file in the chat (up to 50 MB each).

3. Build the workbook:

   ```text
   /document Build an Excel workbook from these invoices: one row per invoice with vendor, invoice number, invoice date, due date, subtotal, tax, and total; a second sheet with totals by vendor using formulas; and flag any invoice that's past due as of today.
   ```

   — A **Run Python** step builds the workbook and saves it as a file in the chat. The preview shows it as a PDF; download the **Original** to open it in Excel.

4. Save it to the folder:

   ```text
   Save the workbook to this folder as invoices-2026-09.xlsx.
   ```

   — Approve the save card if it asks. The file appears in your folder.



**Swap in:**
- **The web app for Work locally:** attach the invoices with **+** → **Attach files**, start at step 3, and download the workbook instead of saving it.
- **Scanned invoices:** say they're scans in step 3. The Document editor can read them with text recognition.
- **A chart:** add "Chart spend by vendor as a bar chart" after step 3.
- **An email for the folder:** ask "Email me the workbook." Send Email attaches files up to 20 MB in total.

**If it stalls:** Run Python saves up to five files per run, so ask for extra outputs in a separate step. If you deny a local action, Bearly doesn't retry the same request; ask again to get a new card. The working folder is context, not a sandbox: commands can reach anything your user account can.

## Read numbers from a desktop app and chart them

Bearly reads values from an app window on your screen, charts them, and points out the outliers.

**Why it works:** Computer Use runs a focused agent that looks at screenshots and accessibility text of the apps on screen, and clicks, scrolls, and types. Computer use runs on your device; the screenshots you approve go to the model you picked. The agent reports what it read back to the chat, where Run Python and **Create chart** take over; the Computer Use agent itself can't run Python.
**You need:** Any plan. Desktop app on Mac, Windows, or Linux. Organization controls: **Computer Use** (with a model policy that allows a model Computer Use supports), plus **Run Python** and **Charts** for the chart. On a Mac, Bearly needs Accessibility and Screen Recording permission (System Settings → Privacy & Security).



1. Open the app with the numbers, for example the Reports window of your accounting app, and leave it visible.

2. Ask Bearly to read it:

   ```text
   Read the twelve monthly totals from the Reports window in the accounting app that's open. Scroll if you need to.
   ```

   — Bearly asks **Use your computer**; approve it. A **Computer** chip in the composer shows what it's doing, with **Stop**. The answer lists the totals, and a **Computer Use** step records the actions it took.

3. Chart them:

   ```text
   Chart them as a line chart and tell me which months are outliers and by how much.
   ```

   — Run Python writes a CSV and a **Chart** card draws it.



**Swap in:**
- **Screen sharing for Computer Use** (works in the web app too): select **+** → **Share your screen** and pick the window. Each message you send carries a fresh capture, so Bearly can read the numbers, but it can't click or scroll.
- **Work locally for the chart:** add Work locally and ask Bearly to save the CSV into a folder.
- **Typing for reading:** ask Computer Use to enter the totals into a spreadsheet app. Before anything consequential, such as sending or deleting, it asks **Confirm this computer action**.

**If it stalls:** Computer Use can't work in Bearly's own windows and runs one task per chat at a time. If it says it needs Accessibility and Screen Recording access, turn both on for Bearly and try again. On Windows, finish the optional helper setup if Bearly offers it.

## Find and fix a bug in a local web app

Bearly opens your app in Bearly Browser, reproduces the problem, fixes the code in your project folder, and reloads to confirm.

**Why it works:** Bearly Browser can open `localhost` addresses and read and click pages. Work locally gives the same chat access to your project folder, so what Bearly sees on the page leads straight to the file it changes.
**You need:** Any plan. Desktop app. Organization controls: **Browser** and **Work locally**. **Settings** → **Desktop** → **Browser** → **Enable Browser** and **Allow chats to use Browser**.



1. Start your app's development server yourself, in your own terminal. — Bearly's local commands can't keep a server running.

2. In the composer, select **Work locally** → **Choose folder…** and pick the project folder.

3. Reproduce the bug:

   ```text
   Open http://localhost:3000/settings in Bearly Browser and tell me why the Save button does nothing.
   ```

   — Bearly asks "Let this chat use this site?"; approve it. It reads the page and clicks in a background tab. Select **Open Browser** to watch, or **Take over this tab** to drive it yourself.

4. Fix it:

   ```text
   Find the cause in this folder, fix it, then reload the page and confirm Save works.
   ```

   — Approve the read and edit cards. Bearly changes the file and reloads the page to check.



**Swap in:**
- **Chrome for Bearly Browser:** with Chrome control connected (**Settings** → **Desktop** → **Chrome Extension**), ask for console errors and failed network requests. Reading the console asks **Read your Chrome tabs**; inspecting network requests asks **Use Chrome DevTools**.
- **Point at the problem:** in Bearly Browser, use **Capture and annotate page**, click the element, type what's wrong, and select **Attach**.
- **Full access for approvals:** in **Permissions**, choose **Full access** so this chat uses its enabled tools without asking. Read the dialog first; it applies to this chat on this device.

**If it stalls:** A local command times out after 2 minutes by default and 10 at most. Bearly Browser keeps up to eight tabs open across chats.

## Research competitors from a brief open in Chrome

Bearly reads a document open in your signed-in Chrome, runs Deep Research on competitors that match it, and compares them with your brief.

**Why it works:** Chrome control lets the desktop app read your regular Chrome tabs, with your sign-ins. Deep Research takes a text question, so the chat carries what it read from Chrome into the research query, and the finished report stays in the chat for the comparison.
**You need:** **Analyst** plan or higher. Desktop app, with Chrome and the Bearly extension connected. Organization controls: **Chrome extension browser** and **Deep Research**.



1. In the desktop app, open **Settings** → **Desktop** → **Chrome Extension**. Select **Install Chrome extension** if it's not installed, and keep Chrome and Bearly open until it shows **Connected to Chrome**.

2. Open the brief in Chrome, then ask:

   ```text
   Read the product brief open in my Chrome tab and list its target customer and three must-have features.
   ```

   — Bearly asks to **Read your Chrome tabs**; approve it.

3. Research the market:

   ```text
   /deep-research Find competitors that serve that customer with all three features. Include pricing and recent funding.
   ```

   — Check that the card's **Query** names the customer and the three features, and edit it if not. Select **Create Plan**, review the plan, then **Run Research**.

4. Compare:

   ```text
   Compare each competitor in the report against our brief in a table: feature by feature, price, and where we're ahead or behind.
   ```

   — Bearly works from the finished report and the brief.



**Swap in:**
- **Bearly Browser for Chrome:** sign in to the site in Bearly Browser and ask Bearly to read the page there.
- **Web Search for Deep Research** (any plan): ask for the competitor scan in a normal message instead of `/deep-research`.
- **A Page for the table:** ask for the comparison as a Page and publish it with the **People and teams** audience.

**If it stalls:** Chrome control works with Chrome itself, not other browsers. Chrome shows its debugging banner while Bearly is attached to a tab. Routines can't use Chrome.

## Email yourself a weekly report from a connected app

Every Friday a Routine pulls the week's closed issues from a connected app, writes them to a CSV, and emails you a summary with the file attached.

**Why it works:** Connectors add a service's tools to chats and Routines. A routine uses only the connectors you add to it, and **Read-only** limits it to that connector's read tools. Runs can write CSV files into the routine's chat and attach them to the result email.
**You need:** **Pro** plan or higher. The desktop app, open on the installed device, with the connector connected on that device. Organization controls: **Routines**, **MCP Connectors**, and **Email notifications**.



1. Open **Settings** → **Connectors**. Under **Built-in connectors**, select **Add** next to Linear, then **Connect** and sign in. — A green dot appears next to Linear, and its button changes to **Disconnect**.

2. Test it in a chat. Open the **Connectors** chip in the composer, select Linear so it shows **Active**, and send:

   ```text
   List issues closed this week by the Platform team, grouped by project.
   ```

   — Bearly asks **Allow Linear?**; approve it.

3. Open **Routines** and type in **Create a routine**:

   ```text
   Every Friday at 4 PM, list issues closed this week by the Platform team in Linear, grouped by project. Write them to a CSV and email me a short summary with the CSV attached.
   ```

   Select **Draft routine**.

4. Under **Tools** → **Tools and skills**, open **Plugin** and choose Linear under **Connectors**. Select the Linear chip and set **Tools** to **Read-only**. Turn on **Email each result** and select **Create routine**. Open the routine from the list and select **Run now**. — The run uses Linear without asking, writes the CSV into the routine's chat, and emails it to you.



**Swap in:**
- **Another connector for Linear:** Notion, GitHub, and most other built-in connectors work the same way, as does a server you add with **Add custom MCP server**. The **Plugin** menu lists only the connectors routines can use.
- **A skill for the formatting:** add a skill under **Plugin** → **Skills** and turn on its **Allow scripts** to run its scripts unattended.
- **A text for the email:** turn on **Text each result**.

**If it stalls:** A routine uses only the connectors added to it, and each must be connected on the device the routine runs on. In Standard mode, a run uses its selected connectors without you; any other action that needs approval, beyond what you allowed in the editor, is skipped and the run continues without it.

## Related

- [Routines](https://bearly.ai/docs/manual/capabilities/routines.md) for the editor, schedules, limits, and delivery
- [Browser and computer](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md) for Bearly Browser, Chrome control, and Computer Use
- [Connectors and skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md) for adding services and skills
- [Permissions](https://bearly.ai/docs/manual/capabilities/permissions.md) for approval cards, Standard, and Full access

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Recipes for founders, sales, and operations](https://bearly.ai/docs/manual/combine/business-recipes.md)
- [Next: Recipes for everyday life](https://bearly.ai/docs/manual/combine/everyday-recipes.md)
- [Related: Approvals, permissions, and Full access](https://bearly.ai/docs/manual/capabilities/permissions.md)
- [Related: Building blocks: how Bearly's features connect](https://bearly.ai/docs/manual/combine/building-blocks.md)
- [Related: Automate with Routines](https://bearly.ai/docs/manual/capabilities/routines.md)
- [Related: Let Bearly use a browser, your files, and your computer](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md)
