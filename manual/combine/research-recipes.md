---
title: "Recipes for research and analysis"
description: "Step-by-step recipes that chain Bearly's research tools (Deep Research, Scholar, Read Site, document search, YouTube claim checks, X posts, Rerun, and Council of Experts) with Run Python, charts, Pages, and email to produce cited reports, checked figures, and published briefs."
canonical: "https://bearly.ai/docs/manual/combine/research-recipes/"
markdown: "https://bearly.ai/docs/manual/combine/research-recipes.md"
---

# Recipes for research and analysis

HTML: [https://bearly.ai/docs/manual/combine/research-recipes/](https://bearly.ai/docs/manual/combine/research-recipes/)

> Step-by-step recipes that chain Bearly's research tools (Deep Research, Scholar, Read Site, document search, YouTube claim checks, X posts, Rerun, and Council of Experts) with Run Python, charts, Pages, and email to produce cited reports, checked figures, and published briefs.

These recipes chain Bearly's research tools so that one step's output becomes the next step's input: a finished report becomes a chart, a paper becomes a searchable file, and a video's figures go to a literature check. Each recipe names its building blocks and the hand-off between them, so you can swap one block for another that produces the same kind of output. For what each block takes in and gives back, see [Building blocks](https://bearly.ai/docs/manual/combine/building-blocks.md).

## Turn a Deep Research report into a chart, a Page, and an email

You end up with a cited report and its PDF in your inbox, a chart of its numbers, a published Page with the findings, and an email to a teammate with a summary and the Page link.

**Why it works:** Deep Research writes a cited report, saves a PDF of it in the chat, and emails the PDF to you. The finished report stays in the chat's context in full, so later messages can work from its numbers. Run Python writes those numbers to a CSV file, **Create chart** draws from that file, a Page is an HTML file Bearly writes into the chat, and Send Email sends what the chat wrote, with the link you paste.
**You need:** **Analyst** plan or higher (**Ultra** runs need **Research**). Any platform. Organization controls, on unless an admin turned them off: **Deep Research**, **Web**, **Chat web search**, **Run Python**, **Charts**, **Sharing** with **Public links** or **Share with people and teams**, and **Email notifications**. Emailing a teammate needs a managed organization; otherwise email yourself and forward it.



1. Start with the Deep Research command:

   ```text
   /deep-research How big is the US residential battery storage market each year from 2022 to 2030, by installed capacity and by revenue, and which companies lead installation?
   ```

   — Bearly shows a **Deep Research** card with an editable **Query**. Nothing runs yet; planning is free.

2. Select **Create Plan**, read the **Plan**, and type changes in **Notes**, such as "Prefer government and industry-association sources, and mark forecasts separately from actuals." Select **Revise Plan**, then **Run Research**. — Your edits become part of the run. Turn on **Ultra** first only when the question needs a deeper run and your plan includes it. When the run finishes you see the report with numbered citations, a **Sources** list, and "PDF ready" with **View PDF**. Bearly also emails you the PDF.

3. Ask for the numbers as a chart:

   ```text
   From the report, put every market-size estimate into a table with year, value, unit, source, and whether it's a forecast. Then chart revenue by year as a line chart, one line per source.
   ```

   — A **Run Python** step writes a CSV file and a **Chart** card draws it. Select **View data** and check the rows against the report before you go on.

4. Build the Page:

   ```text
   Build a one-page Page with the chart, the five most important findings in plain language, and a link to the source behind each number.
   ```

   — A live preview of the Page appears in the chat. Select **Open** to see it full size. Ask for changes in the chat; each edit saves a new version.

5. In the open Page, select **Share file** → **Prepare share**. When it's ready, the prepared Page opens on its own, marked "Ready to share"; select **Publish** in its header, choose the **Audience**, select **Publish**, then **Copy link**. — Bearly adds artwork and a link preview and publishes the Page at a bearly.sh link that stays the same when you publish updates.

6. Paste the link into one more message:

   ```text
   Email Dana Ortiz a 100-word summary of the report and this link: [paste the Page link].
   ```

   — Bearly finds Dana in your organization's contacts and sends the email. You're copied on it. To share the full report, forward Dana the PDF email Bearly sent you.



**Swap in:**
- **Scholar for Deep Research** (any plan): ask `/scholar` the same question. The cited answer stays in the chat, and steps 3 to 6 work the same, without the PDF. In step 4, ask for the paper behind each number by title and authors; Bearly doesn't get a link for every paper, and the links are on the **Papers** cards.
- **People and teams for a public link:** in step 5 choose **People and teams**, select **Publish**, then add viewers with **Manage viewers**, so only the people and teams you name can open the Page.
- **Attach the Page instead of publishing it:** skip step 5 and ask "Email me the Page." Send Email attaches the HTML file itself, which opens in any browser.
- **A schedule instead of a one-off:** a Routine can run Deep Research every week and email the PDF, but it can't run Python or draw charts. See [Schedule a weekly Deep Research digest](https://bearly.ai/docs/manual/combine/automation-recipes.md#schedule-a-weekly-deep-research-digest).

**If it stalls:**
- "You can't start another Deep Research run right now" means one of your runs is still in progress or you've reached a usage limit. Wait for the run to finish, or check your plan's usage. There's no cancel button once a run starts, and a run keeps going if you refresh or switch devices.
- Charts read a CSV of up to 10 columns, and a line chart draws up to 12 lines. If the chart fails, ask for fewer columns or fewer sources.
- If Bearly can't find your teammate, use their full name as it appears in your organization, or their work email.

## Read the strongest paper in full and quote it with page citations

You get a list of papers on a question, the best open-access one saved in the chat, exact figures quoted with page citations, and a one-page brief.

**Why it works:** Scholar's paper reader returns an open-access PDF link when a paper has one. Read Site downloads that PDF into the chat as a file. Once a chat has a file, Bearly's document tools can search it and read it page by page, and answers from a document search carry citations that open the document near the cited page. The Page at the end is written from everything above it in the chat.
**You need:** Any plan. Any platform. Organization controls: **Scholar** and **Web**. The chat's **Web** setting on **Auto** (the default), which Read Site needs. Searching the saved paper needs a chat that isn't end-to-end encrypted; reading it page by page works in any chat.



1. Ask Scholar:

   ```text
   /scholar What do recent papers say about retrieval-augmented generation reducing hallucinations in question answering? Prefer peer-reviewed work and say where results conflict.
   ```

   — Bearly searches papers and answers with superscript citations. Each search shows a Papers card listing the papers it found, with links, and each paper it read shows a card marked **Read** with the passage it used.

2. Open one in full:

   ```text
   Open the strongest open-access paper from that list in full.
   ```

   — Bearly fetches the paper's PDF and saves it as a file in the chat. Only a paper with an open-access PDF can be opened in full; if the one you want has none, pick another paper or narrow the question.

3. Ask for exact figures:

   ```text
   From that paper, quote the exact datasets, the baseline, and the reported hallucination rates, with page numbers.
   ```

   — Bearly searches and reads the saved PDF. Passages it found with a document search carry citations you can click to open the PDF near the cited page.

4. Write the brief:

   ```text
   Turn this into a one-page Page: the question, what the evidence says, the key numbers in a small table, open questions, and a citation for every paper used.
   ```

   — A Page preview appears. **Open** shows it full size, and **Download** saves the HTML file.



**Swap in:**
- **Any public PDF for Scholar:** skip steps 1 and 2 and send `/read-site` with the PDF's address. Steps 3 and 4 work the same.
- **Related work before you pick:** after step 1, ask "Show papers that cite the strongest one." Scholar maps similar papers, citing papers, and references.
- **Council of Experts for the brief** (Pro): send `/council` with your question and name the saved PDF with `@` (pick it under **Assets**). Each expert can search and read it and search the web, and Bearly synthesizes their answers.
- **Listen instead of read:** ask for a 60-second plain-language summary and select **Read aloud** under the answer (needs **Text to speech**).

**If it stalls:**
- A read that shows "abstract only" means Scholar holds only that paper's abstract, so figures from it rest on the abstract. Open the paper in full in step 2 if it has an open-access PDF, or pick a different paper.
- If Scholar finds fewer than three papers in its index, it also searches academic journal sites on the web, when your organization allows **Chat web search**. If results are still thin, Bearly says the literature is thin rather than stretching it.

## Pull exact figures out of a long public report

A long report at a public link becomes a searchable file in the chat, and its figures become a checked table and a chart.

**Why it works:** Read Site saves PDFs, Word, PowerPoint, and Excel files, and long web pages, as files in the chat instead of pasting them in. Scan Doc finds exact words with their page and line, Read Doc reads up to 20 pages at a time, and Run Python writes the figures to a CSV that **Create chart** draws from.
**You need:** Any plan. Any platform. Organization controls: **Web**, **Run Python**, and **Charts**. The chat's **Web** setting on **Auto**.



1. Save the report into the chat:

   ```text
   /read-site https://www.example.gov/reports/annual-energy-outlook-2026.pdf
   ```

   — Bearly saves the PDF as a file in the chat and shows it as a file card with a preview.

2. Find every mention of a term:

   ```text
   @find-in-document Find every mention of "capacity factor" in that report, with page numbers.
   ```

   — Scan Doc returns exact matches with the page, line, and surrounding text, ten at a time. Ask "show the next matches" to page through.

3. Build the table:

   ```text
   Read the pages with the regional tables and put capacity factor by region and year into a table. Give the page number for each row.
   ```

   — Bearly reads those pages and builds the table, with a page for every row so you can check it.

4. Chart it:

   ```text
   Chart capacity factor by year as a line chart, one line per region, and tell me which region changed most.
   ```

   — Run Python writes a CSV and a **Chart** card draws it. **Download PNG** saves the image; **View data** shows the rows.



**Swap in:**
- **Your own file for Read Site:** attach the report with **+** → **Attach files** instead. Steps 2 to 4 work the same.
- **A summary first:** `/summarize` gives a **Deep Summary** of a very long document. It summarizes evenly spaced sections rather than every line, so keep Scan Doc for exact figures.
- **An interactive Page for the chart:** ask for a Page with a region filter. Bearly builds the table into the Page so it works on its own.
- **Email for the chart:** ask "Email me the table as a CSV." Send Email attaches files from the chat.

**If it stalls:**
- Read Site reads public HTTPS addresses only and doesn't sign in or click. For a report behind a sign-in, use Bearly Browser or Chrome in the desktop app; see [Recipes for automation and agents](https://bearly.ai/docs/manual/combine/automation-recipes.md).
- If step 2 finds nothing, try a shorter phrase. Scan Doc matches exact text, ignoring case.

## Check a video's figures against the research literature

You get the figures a YouTube video states, how many websites agree with each one, and what published papers say about the disputed ones.

**Why it works:** A YouTube link opens a video card with a **Check claims** button. The check is saved as a file in the chat, so Bearly can read it in later messages and hand the disputed figures to Scholar. The video's transcript is available to the chat, which is how Bearly finds the minutes to cut.
**You need:** Any plan. Web app, phone browser, or desktop app. Organization controls: **YouTube**, **Web**, **Chat web search**, **Scholar**, and **File uploads** (the claims check is saved as a file). The video needs a transcript: readable captions, or one the desktop app fetched with **Get transcript**. **Check claims** turns off once you've used all of your plan allowance.



1. Paste the link with a question:

   ```text
   https://www.youtube.com/watch?v=VIDEO_ID What's the main argument, and which numbers does it rest on?
   ```

   — Bearly opens a video card with a summary, chapters, and tabs such as **Summary** and **Insights**, and answers your question.

2. On the card's **Insights** tab, select **Check claims**. — Bearly checks up to 12 of the figures the video states against web results each time you press it, and the **Claims** tab labels each by how many sites give the same figure, a different one, or neither. It never labels a figure true or false.

3. Take the disputed figures to the literature:

   ```text
   For the figures that sites disagreed on, what does the research literature say? Cite papers.
   ```

   — Bearly reads the saved check and searches papers, with a **Papers** card and citations.

4. Cut the video to those moments:

   ```text
   Make a cut of just the parts of the video where those disputed figures come up.
   ```

   — A cut card plays only those ranges, back to back, in the same player.



**Swap in:**
- **Web Search for Scholar:** when the figures are prices, sports results, or news rather than research, ask Bearly to check them against current news sources instead.
- **The Mentioned tab:** select **Find** on the papers, books, or tools the video names to look each one up.
- **Deep Research for one figure** (Analyst): send `/deep-research` on the single most important disputed figure for a cited report.
- **A spoken verdict:** ask for a 30-second recap and select **Read aloud** under the answer.

**If it stalls:**
- If the video has no readable captions, Bearly digests it by watching it (only the first 90 minutes of a longer video), so times are approximate, there are no exact quotes, and **Check claims** doesn't appear. In the desktop app, **Get transcript** on the card can fetch a transcript.
- Videos that block embedding can't play on the card. The desktop app offers **Download to play here**.

## Verify a viral post on X

You get a post's thread, replies, and quote posts read for you, its video watched, and a verdict backed by news sources.

**Why it works:** Read X Post returns the post, its thread, quote posts, photos, and frames from any video. Bearly can import the video as a file and watch up to 10 minutes of it at a time. Everything it found stays in the chat, so the last step can test it against a web search.
**You need:** Any plan. Any platform. Organization controls: **X (Twitter)**, **Web**, and **File uploads** (for watching the video). The chat's **Web** setting on **Auto**.



1. Read the post and its reactions:

   ```text
   /read-x Is this real? https://x.com/USER/status/POST_ID Read the thread and the quote posts and tell me what people are disputing.
   ```

   — Bearly reads the post, a sample of up to 100 posts from its conversation with replies ranked by likes, and its quote posts, and links the posts it cites.

2. Watch the video:

   ```text
   Watch the attached video. Describe what it shows and anything that suggests where or when it was filmed.
   ```

   — Bearly imports the video into the chat and analyzes its frames and audio.

3. Check the news:

   ```text
   Now check news sources from the last 48 hours. Give me a verdict (confirmed, unconfirmed, or contradicted) with sources.
   ```

   — Bearly searches the web and answers with numbered source links.



**Swap in:**
- **Find the first poster:** send `/search-x` with the video's key phrase. Search covers roughly the last 7 days and accepts operators such as `from:` and `-is:retweet`.
- **Check the account:** `/x-profile` reads the poster's public profile: verification, links, metrics, and recent posts.
- **Deep Research for the news check** (Analyst) when the claim needs more than a quick search.
- **Send the verdict on:** ask Bearly to email you the verdict with its sources.

**If it stalls:** Bearly reads public posts only. Likes, DMs, bookmarks, and private posts aren't available, and it can't post or follow.

## Pressure-test a hard question across several models

You see how different models answer the same question, then get one synthesized answer from a panel of up to five models that each looked for evidence.

**Why it works:** The rerun menu under a message produces a new version of the answer from any model you pick, and the version arrows flip between versions without changing the chat's model. Council of Experts sends one self-contained question to two to five models at once; each can search the web and read pages, and Bearly writes a synthesis from their answers.
**You need:** **Pro** plan or higher for Council of Experts. Rerun works on every plan, with the models your plan includes. Any platform. Organization control: **Council**. If **Zero Data Retention only** is on, the panel uses only zero-retention models.



1. Ask the question:

   ```text
   Should a 20-person B2B software company switch from monthly to annual-only pricing? Recommend yes or no, give the three biggest risks, and say what evidence would change your mind.
   ```

   — The chat's model answers.

2. Under the answer, open the rerun menu (it shows the model's short name, or **Rerun**) and pick a different model. Repeat with a third model. — Each rerun adds a version. Use the arrows under the message to flip between "1 / 3", "2 / 3", and "3 / 3". The chat keeps its own model.

3. Put it to a panel:

   ```text
   /council Should a 20-person B2B software company switch from monthly to annual-only pricing? Each expert: search for recent pricing studies or public company data, recommend yes or no with the three biggest risks, and say where you disagree with common advice.
   ```

   — A **Council of Experts** panel shows a tab for each model with its status and answer. Bearly's synthesis follows in the reply.

4. Decide what to test:

   ```text
   Which disagreement from the council matters most for a company our size, and what's the cheapest way to test it?
   ```

   — Bearly works from the synthesis, which is now part of the chat.



**Swap in:**
- **Choose the panel:** the **Council settings** gear on the panel opens "Council models", where you pick who sits on it. The choice syncs to your account.
- **Your own documents for the web:** name an attached file in the council question with `@`. Experts can search and read it. See [Review a contract clause with a panel of models, then redline it](https://bearly.ai/docs/manual/combine/business-recipes.md#review-a-contract-clause-with-a-panel-of-models-then-redline-it).
- **Papers for web sources:** ask the experts to cite research papers. They can use Scholar.
- **Skip the panel:** on any plan, steps 1 and 2 alone give you three answers to compare.

**If it stalls:**
- Experts don't see the chat's earlier messages or files unless the question includes them, so write the council question so it stands on its own.
- A panel needs at least two experts to answer. If your organization allows fewer models, ask your admin.
- If a model in the rerun menu needs a higher plan, Bearly opens **Settings** → **Billing** instead.

## Queue follow-ups while a long answer runs

You line up the next three steps of an analysis while the first is still running, and they send themselves in order.

**Why it works:** While Bearly is working, anything you send waits in a queue of up to four messages and goes out when the current answer finishes. Each queued message sees everything before it, so a chart request can build on an analysis that hadn't finished when you typed it.
**You need:** Any plan. Any platform. Organization controls: **File uploads** for the spreadsheet, **Run Python** and **Charts** to chart, and **Email notifications** to email.



1. Attach a spreadsheet and send:

   ```text
   Analyze churn by plan and by month in the attached file. Flag any month where churn doubled.
   ```

   — Bearly starts working.

2. While it's still working, type each of these and press <kbd>Enter</kbd> after each one:

   ```text
   Chart monthly churn by plan as a line chart.
   ```

   ```text
   Write a five-bullet summary for the leadership team.
   ```

   ```text
   Email me that summary.
   ```

   — The send button reads **Queue message**, and each message joins **Up next** above the composer.

3. Let the queue run, or select **Send now** on a row to stop the current answer and send that message right away. — Messages go out in order as each answer finishes. To change one, empty the composer and select **Edit queued message**; **Remove from queue** drops it.



**Swap in:**
- **Redirect instead of queue:** <kbd>⌘</kbd> <kbd>Enter</kbd> (<kbd>Ctrl</kbd> <kbd>Enter</kbd> on Windows and Linux) sends your draft right away, stopping the current answer and skipping the queue.
- **A Page for the chart:** queue "Build a one-page Page with the chart and the summary" instead of the chart request.
- **A text when it's done:** queue `/sms Text me "churn analysis is ready".` Bearly texts the phone you verified in **Settings** → **Phone & SMS** (US and Canadian numbers).

**If it stalls:** The queue pauses when an answer fails ("Queue paused — the last message failed.") or you reach a usage limit; a successful answer or **Send now** resumes it. Pressing **Stop** twice within two seconds pauses it on purpose. The queue isn't saved with the chat, so keep the chat open until it's empty. It holds four messages; when it's full, send, edit, or remove one first.

## Related

- [Research](https://bearly.ai/docs/manual/capabilities/research.md) for every research tool, its limits, and its controls
- [Documents](https://bearly.ai/docs/manual/capabilities/documents.md) for Search Docs, Read Doc, Scan Doc, and Summarize Doc
- [Data and code](https://bearly.ai/docs/manual/capabilities/data-and-code.md) for Run Python and charts
- [Pages and Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md) for building and publishing Pages

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Building blocks: how Bearly's features connect](https://bearly.ai/docs/manual/combine/building-blocks.md)
- [Next: Recipes for writing, content, and media](https://bearly.ai/docs/manual/combine/creative-recipes.md)
- [Related: Recipes for automation and agents](https://bearly.ai/docs/manual/combine/automation-recipes.md)
- [Related: Recipes for founders, sales, and operations](https://bearly.ai/docs/manual/combine/business-recipes.md)
- [Related: Research the web, papers, people, products, and places](https://bearly.ai/docs/manual/capabilities/research.md)
- [Related: Work with files and documents](https://bearly.ai/docs/manual/capabilities/documents.md)
