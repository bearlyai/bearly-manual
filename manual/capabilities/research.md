---
title: "Research the web, papers, people, products, and places"
description: "Which Bearly research tool fits a job, and how to start, steer, and limit Web Search, Read Site, Image Search, Deep Research, Scholar, Council of Experts, Best Pick, People Search, SEO data, Domain research, Maps, Weather, and X, with plans, admin controls, Routines support, and tested combinations."
canonical: "https://bearly.ai/docs/manual/capabilities/research/"
markdown: "https://bearly.ai/docs/manual/capabilities/research.md"
---

# Research the web, papers, people, products, and places

HTML: [https://bearly.ai/docs/manual/capabilities/research/](https://bearly.ai/docs/manual/capabilities/research/)

> Which Bearly research tool fits a job, and how to start, steer, and limit Web Search, Read Site, Image Search, Deep Research, Scholar, Council of Experts, Best Pick, People Search, SEO data, Domain research, Maps, Weather, and X, with plans, admin controls, Routines support, and tested combinations.

Bearly can search the web, read a page or file at a link, run a long investigation that ends in a cited report, read academic papers, put one question to several AI models, pick a product to buy, research a person, pull search-engine data, check domain names, plan routes, and read the weather. Most of these start from an ordinary request. This page says which tool fits which job, how to start each one on purpose, and what each one needs.

## Which research tool for which job

| Your job | Use | Start it | Plan |
| --- | --- | --- | --- |
| Current facts, news, prices, or anything you want cited | [Web Search](#web-search) | Ask, or type `/web-search` | Every plan |
| Read one page, PDF, or document at a link | [Read Site](#read-site) | Paste the link, or `/read-site` | Every plan |
| See examples of a style, product, or diagram | [Image Search](#image-search) | Ask to see examples, or `/image-search` | Every plan |
| A long, cited report you plan and approve first | [Deep Research](#deep-research) | `/deep-research` | Analyst; Ultra needs Research |
| What the research literature says, cited to passages | [Scholar](#scholar) | Ask a research question, or `/scholar` | Every plan |
| Several models' answers to one hard question, plus a synthesis | [Council of Experts](#council-of-experts) | `/council` | Pro |
| One product to buy, with the evidence behind it | [Best Pick](#best-pick) | Ask what to buy, or `/bestpick` | Pro |
| Identify one person and get a cited brief | [People Search](#people-search) | `/people-search` | Analyst |
| A list of people who fit a description, their work emails, or profiles for leads you already have | [Find people, work emails, and lead enrichment](#find-people-work-emails-and-lead-enrichment) | `/find-people`, `/work-emails`, `/lead-enrichment` | Analyst |
| Keyword demand, search rankings, competitors, backlinks, or a page audit | [SEO data](#seo-data) | Ask, or `/seo` | Every plan |
| Name ideas and whether a domain is free to register | [Domain research](#domain-research) | Ask, or `/domains` | Every plan |
| Places, reviews, routes, and travel times | [Maps](#maps) | Ask, or `/maps` | Every plan |
| Forecasts, alerts, past weather, air quality, or pollen | [Weather](#weather) | Ask, or `/weather` | Every plan |
| What people are posting on X, or one post, thread, or profile | [X](#x) | Paste a post link, or `/search-x`, `/read-x`, `/x-profile` | Every plan |

"Every plan" tools use your plan allowance like any other reply. Plans are compared in [Plans and credits](https://bearly.ai/docs/manual/plans-and-credits.md). On a plan below a tool's minimum, the chat shows an upgrade card instead of running it.

These tools run in Bearly chats in the web app, phone browsers, the desktop app, and the iOS app; the sections below call that "every app platform". The browser extension's sidebar doesn't use them.

## How research tools start

- **Ask in plain words.** Bearly picks the tool that fits. Web Search, Read Site, Image Search, Scholar, Best Pick, SEO data, Domain research, Maps, Weather, and X all start from an ordinary request. People Search starts when you explicitly ask to look up or vet a named person. Deep Research prepares its setup card when you ask for an in-depth research run. Council of Experts runs only from `/council`.
- **Type a label to choose the tool.** Type `/` at the very start of a message, or `@` anywhere in it, then a label such as `deep-research`. The menu lists research tools under **Research**. Only one `/` label counts per message, but you can add several `@` labels. A label chooses a tool that is already available to you; it can't switch on a tool your plan or organization has turned off. More in [Compose messages](https://bearly.ai/docs/manual/chat/compose.md).
- **Switch web and paper search for one chat.** The sliders button in the composer opens a **Search** section with **Web** (**Off** or **Auto**) and **Scholar** (**Off** or **Auto**). Both start on **Auto**. **Auto** makes the tools available; it doesn't force a search on every message.
- **Approve paid work on cards.** Deep Research and People Search show cards and prompts. Nothing paid starts until you select the button or approve the prompt.

> **Note — Admin controls**
> In a managed organization, administrators switch these tools on or off under **Organizations** → organization name → **Policies** → policy name. Most live in the **Web & Research** group; **Council** is under **Collaboration**, and **File uploads** is under **Privacy & Security**. A control nobody has set follows the policy's default. Each section below names the controls its tool needs. See [Organizations](https://bearly.ai/docs/manual/organizations.md).


> **Note — Zero Data Retention only and research tools**
> Web search sends the search provider your query, never your name, account, or IP address. Image search runs on a provider that keeps nothing after it answers. **Zero Data Retention only** (**Settings** → **Privacy & Security**) is about AI models. It doesn't cover the services that Web Search, Deep Research, People Search, Scholar's journal-site search, and Read Site use; those still reach their usual services. See [Privacy and security](https://bearly.ai/docs/manual/privacy-and-security.md).


## Web Search

Web Search looks things up on the public web and answers with numbered links to its sources. Reach for it for anything current or anything you want cited. With the chat's **Web** setting on **Auto**, Bearly searches when outside sources would improve the answer.

**Use it when:** you need news or recent changes, prices and stock, facts you want sourced, or a comparison across several sources.

**You need:** any plan. Admin control: **Web**. The chat's **Web** setting on **Auto**.



1. Ask for the result you want, and name the date range, place, or kind of source that matters — Bearly decides whether to search, and cites what it uses.

   ```text
   Compare the latest quarterly revenue of the three largest US residential solar installers. Use their investor-relations releases and cite every figure.
   ```

2. To make sure it searches, start the message with `/web-search` — the chip tells Bearly to use Web Search for this request.

3. To keep the web out of a chat, open the sliders button in the composer, then **Search** → **Web** → **Off** — this removes Web Search, Read Site, and Image Search from that chat until you set it back to **Auto**. Scholar has its own switch, and `/deep-research` works either way.

4. To change the starting setting for chats you create later, open the sliders button → **Chat Settings** → **New Chats** → **Web Search** — chats in a project follow the project's settings instead. An organization can preset or lock this setting.



**What you get:** an answer with numbered citations in the order they're first used; select a number to open its source. A collapsible step shows the search. When pictures would help and Image Search is allowed, a gallery can appear with the results.

**Limits:** one search runs up to eight queries at once and returns at least two results per query. An answer can search at most twice. A query that fails isn't retried. For prices and stock, Bearly matches the exact model or variant, keeps price, shipping, and stock separate, states the currency, and calls a price it saw only in a search snippet unverified.

**Runs in:** every app platform. Routines: yes. Council experts: yes.

**Combines with:** [Read Site](#read-site) to read a result in full, [charts](https://bearly.ai/docs/manual/capabilities/data-and-code.md) to plot what it found, and [Routines](https://bearly.ai/docs/manual/capabilities/routines.md) for a scheduled brief.

## Read Site

Read Site reads one address: a web page, a PDF, an Office or OpenDocument file, an EPUB or RTF, an image, or an audio or video file. Bearly uses it when you paste a link, or when search snippets aren't enough and it needs the whole page.

**Use it when:** you want the gist of an article, a table or figures from a page, a report PDF brought into the chat, or an image from the web saved so you can edit it.

**You need:** any plan. Admin control: **Web**. The chat's **Web** setting on **Auto**.



1. Paste the link and say what you want from it — Bearly reads the address and answers from it.

   ```text
   https://example.com/2026-annual-report.pdf Pull the five-year revenue table and the three priorities the CEO lists.
   ```

2. To make sure Bearly reads the address with Read Site, start with `/read-site`.

3. Ask follow-ups in the same chat — a long page or document is saved to the chat, and Bearly goes back to that file with its document tools.



**What you get:** a short page is read straight into the answer. A longer page is saved to the chat as a Markdown file. PDFs, Word, PowerPoint, Excel, OpenDocument, EPUB, and RTF files are saved as chat files with a short text preview, and Bearly reads them with its [document tools](https://bearly.ai/docs/manual/capabilities/documents.md). Images and audio or video become chat files that other tools can use.

**Limits:** HTTPS only; an `http://` link is upgraded. Addresses can be up to 2,000 characters, can't contain a username or password, and can't point at your own machine (such as `localhost`). Read Site reads; it doesn't click, scroll, or fill anything in. For pages that need that, see [Browser and computer use](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md). In the desktop and iOS apps, Bearly fetches the page from your device when it can; otherwise through Bearly's servers.

**Runs in:** every app platform. Routines: yes. Council experts: yes.

**Combines with:** [Scholar](#scholar) to open an open-access paper in full, and [Image Search](#image-search) to save a result for editing.

## Image Search

Image Search finds photos, illustrations, diagrams, and product images on the public web, each with its source page. Bearly adds a gallery when seeing examples clearly helps, either alone or next to web results, and leaves images out of news, people, and general facts.

**Use it when:** you need visual references for a design, want to compare styles, need to see what a product or part looks like, or want a diagram that explains a concept.

**You need:** any plan. Admin controls: **Image search**, **Web**, and **Chat web search**. The chat's **Web** setting on **Auto**.



1. Ask to see examples, and say what matters visually — Bearly searches images, and pairs them with sourced text when you ask for an explanation too.

   ```text
   Compare brutalist and mid-century modern desk lamps. Explain what sets each style apart, cite sources, and show examples of both.
   ```

2. To make sure it searches images, start with `/image-search`.

3. Select an image to preview it — from the preview you can zoom, copy, download, or open the page it came from.

4. To use an image in later work, refer to it by position — Bearly saves that image into the chat first, then passes it to image editing.

   ```text
   Use the third image as a reference and make a warmer product-photo version on a plain background.
   ```



**What you get:** an inline gallery that shows eight images first and expands to the rest, with preview, download, and source controls on each.

**Limits:** up to 20 images per search. Bearly chooses results from their descriptions and source pages, not by looking at each image, so ask it to save and look at an image before you rely on fine details. Editing an image needs the **Images** admin control; see [Images, video, and audio](https://bearly.ai/docs/manual/capabilities/images-video-audio.md).

**Runs in:** every app platform. Routines: yes. Council experts: no.

**Combines with:** [Web Search](#web-search) in the same answer, and image editing for reference-based variations.

## Deep Research

Deep Research is a long research run that ends in a cited report. You review and edit a plan first, planning is free, and nothing runs until you select **Run Research**. The report appears in the chat with its sources, and a PDF of it is emailed to you.

**Use it when:** you need a market scan, a policy or vendor comparison, background for a decision, or any question that deserves a scoped plan and a long, sourced answer rather than a quick one.

**You need:** the **Analyst** plan or higher for Standard runs, and the **Research** plan or higher for **Ultra**. Admin controls: **Deep Research**, **Web**, and **Chat web search**. It doesn't depend on the chat's **Web** setting.



1. Type `/deep-research` and your question, or ask in words for an in-depth research run — Bearly prepares a **Deep Research** card with an editable **Query** refined from your request. It doesn't start anything paid.

   ```text
   /deep-research Assess the US market for community solar software. Focus on 2024–2026 adoption, buyers, regulation, and credible market-size estimates.
   ```

2. Edit the **Query** until it says exactly what you want, then select **Create Plan** — the card notes that planning is free and that you review the plan before anything runs.

3. Read the **Plan**. Edit it directly, or type guidance under **Notes** and select **Revise Plan** — edits in **Plan** are part of the run. **Revise Plan** works once you've added notes or changed the query.

4. Leave the run on Standard, or turn on **Ultra** for a run about twice as deep — the line beside the button says whether your plan covers the tier you picked.

5. Select **Run Research** — this is your confirmation. There is no cancel button once a run starts. If your plan doesn't include the tier, the button opens the upgrade instead.

6. Read the report — numbered citations and figures, a **Sources** list, and **Show research steps** to see what it did. **View PDF** opens the PDF, and **Sent to your inbox** shows when the email went out.



**What you get:** a report in the chat, a PDF saved to the chat, and the same PDF emailed to the address on your Bearly account. The finished report stays available to the chat in full, so later messages can question it, chart it, or turn it into a Page without new research.

**Limits:** one Deep Research run at a time per person, and a daily spending limit. When either applies, Bearly says it can't start another run right now. Each run uses plan allowance based on its actual usage. A run keeps going if you refresh, close the app, or switch devices; reopen the chat to see it. The email goes only to you. When a run ends with **Research failed.**, type `/deep-research` to start a new one.

**Runs in:** every app platform; outside the desktop app, a long run may suggest getting it. Routines: only when you add **Deep Research** to the routine and choose its tier; it runs at most once per routine run and emails the report. Council experts: no.

**Combines with:** [charts and Python](https://bearly.ai/docs/manual/capabilities/data-and-code.md) to plot the report's numbers, [Pages](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md) to publish a brief, and [email](https://bearly.ai/docs/manual/capabilities/email-and-text.md) to send its findings on.

## Scholar

Scholar searches an index of academic papers from preprint servers and the biomedical literature, reads the passages that carry a claim, maps related work, and cites claims with superscript numbers. It answers questions about what the research says; news, products, and how-to questions still go to Web Search.

**Use it when:** you want what studies found on a medical, scientific, or technical question, an exact effect size, the papers that cite or critique a paper, or the work a paper builds on.

**You need:** any plan. Admin controls: **Scholar** and **Web**. The journal-site search (below) also needs **Chat web search**.



1. Ask a research question the way you'd ask a colleague in the field — with **Scholar** on **Auto**, Bearly searches papers when they're the right source.

   ```text
   What does the research say about whether sleep deprivation impairs working memory in adults?
   ```

2. Watch the steps: **Searching papers**, **Found** with a count, then **Reading paper** as Bearly pulls the passages behind its main claims.

3. Follow up on one paper — Bearly can read it for a specific claim, or find papers that are similar, that cite it, or that it cites.

   ```text
   Find later papers that cite the first study and say whether they replicated its result.
   ```

4. To force Scholar for one message, start with `/scholar` — this works even when the chat's **Scholar** switch is **Off**. To keep papers out of a chat, open the sliders button → **Search** → **Scholar** → **Off**.



**What you get:** superscript citations; hover one to see the paper, and select it to open the paper. A card under each search, headed with the number of papers found, lists what came back, with each paper's source and link. Papers Bearly read are marked **Read**, with the passage it relied on.

**Limits:** a search returns 8 papers by default and up to 10, and can be narrowed by date range, up to five subject categories, and up to five author surnames. A read returns up to five passages per paper; a related-papers lookup returns up to 10. When the index returns fewer than three papers, or you ask for journal articles only or the newest work, Scholar also searches 20 journal and repository sites. Many biomedical papers are indexed by abstract only, shown as "abstract only". Scholar doesn't report citation counts. Bearly prefers peer-reviewed work over preprints, flags retractions and contradictions, and says when the literature is thin.

**Runs in:** every app platform. Routines: yes, including the journal-site search. Council experts: yes.

**Combines with:** [Read Site](#read-site) and [document tools](https://bearly.ai/docs/manual/capabilities/documents.md) to read an open-access paper in full (see [the recipe below](#read-a-paper-in-full-and-quote-it-with-page-citations)).

## Council of Experts

Council of Experts sends one self-contained question to two to five AI models at once. Each expert can search the web, read pages, search papers, and read documents you name, and Bearly then writes a synthesis that names where they agree and where they differ. It runs only when you type `/council`.

**Use it when:** a decision is consequential, you want to see whether models agree on a claim, or you want competing recommendations side by side.

**You need:** the **Pro** plan or higher. Admin control: **Council** (under **Collaboration**). At least two models that your plan and organization allow.



1. Type `/council` — it appears as **Ask Experts** under **Research** — then write a question that stands on its own. Experts don't see the chat history or attachments, so name any file you want them to use.

   ```text
   /council Using the attached file "Vendor contract v3.pdf" and current public guidance, should we accept clause 7 as written? Cite sources.
   ```

2. Read the **Council of Experts** panel — each model has its own tab with its status (running, done, failed, or skipped) and its answer, which you can copy.

3. Read the synthesis under the panel — Bearly sees the answers labeled Expert A, B, and C in shuffled order, so it weighs arguments rather than model names.

4. To change the lineup, select the panel's **Council settings** gear → **Council models**, and choose two to five models — the choice is saved to your account, syncs across devices, and applies to the next council.



**What you get:** each model's full answer in its own tab, and a synthesis that names consensus and disagreement.

**Limits:** a council needs at least two experts to finish. Each expert can take up to eight tool steps, and each answer is cut to 4,000 characters for the synthesis. The model list follows your plan and organization; with **Zero Data Retention only** on, it offers only zero-retention models. Experts can use Web Search, Read Site, Scholar, Search Docs, Read Doc, Scan Doc, and a YouTube video's transcript and saved claims check. They can't use Image Search, Deep Research, X, Maps, Weather, SEO data, Domain research, People Search, Best Pick, or connectors. Search Docs isn't available in end-to-end encrypted chats.

**Runs in:** every app platform. Routines: no.

**Combines with:** [Scholar](#scholar) for evidence-heavy questions, and [document tools](https://bearly.ai/docs/manual/capabilities/documents.md) when the question names your files. To compare models one answer at a time instead, see [Models](https://bearly.ai/docs/manual/chat/models.md).

## Best Pick

Best Pick reads expert reviews, store listings, and owner reviews, then recommends exactly one product to buy, with photos, the evidence, and a plain link to the store. Bearly doesn't add affiliate links.

**Use it when:** you ask "what's the best…", "which one should I get", or "something under $80", or you want to see what a bigger or smaller budget changes.

**You need:** the **Pro** plan or higher. Admin controls: **Best Pick**, **Web**, and **Chat web search**.



1. Say what you want to buy, what must be true, and what you'd prefer — Bearly uses Best Pick on its own for shopping questions.

   ```text
   What's the best cordless stick vacuum under $300 for pet hair?
   ```

2. To make sure it does, start with `/bestpick`.

3. Refine from the card — **Cheaper**, **Worth spending more**, and **Not this one** each send a follow-up, or reply in words such as "quieter" or "it has to be dishwasher-safe". Bearly keeps your earlier requirements.

4. To shop another country, say so — for example, "Show me stores in the UK instead."



**What you get:** a card with the product photos, price, **View at** the store, when the price was checked (the store's checkout price applies), a short evidence summary from experts and owners, a price-versus-quality chart of everything it weighed, cheaper and pricier alternatives, **Why this one**, **What owners say**, and its sources. **Check current price** re-checks a stale price.

**Limits:** a pick stops after 90 seconds. The country comes from what you say, then the chat's last pick, then your device's time zone, then the United States. Prices stay in that country's currency and are never converted; thin store data shows **Limited store coverage in** and the country. Best Pick doesn't pick medications, supplements, infant car seats, or firearms, and doesn't cover services, travel, cars, homes, or used items. It recommends; it doesn't buy.

**Runs in:** every app platform. Routines: no. Council experts: no.

**Combines with:** [email](https://bearly.ai/docs/manual/capabilities/email-and-text.md) to send yourself the pick. Full card guide: [Best Pick](https://bearly.ai/docs/features/best-pick.md).

## People Search

People Search identifies one named person, asks you to confirm the right candidate on a card, and then builds a cited brief from public sources. Bearly never picks the person for you; only your click or your explicit words confirm who it is.

**Use it when:** you're about to meet, interview, hire, or email someone and want their public work and role on one page, with a source and date on each fact.

**You need:** the **Analyst** plan or higher. Admin controls: **People Search**; **People Search contact routes** for contact details and work emails; **People Search public records** for the **On the record** section. A chat you can edit; a read-only chat can show a brief but not run one.



1. Type `/people-search` with the name and one detail that tells this person apart, such as a company, city, school, role, or profile link — with only a name, Bearly asks for a detail first.

   ```text
   /people-search Jordan Alvarez, head of design at a fintech startup in Austin
   ```

2. Read the candidates on the card — up to five people, each with a match strength in words (**Strong match**, **Likely match**, or **Possible match**). **Add a detail** or **None of these** searches again.

3. Select **This is them**, check the estimated cost, and select **Build brief** — the brief researches only the person you confirmed.

4. Read the brief — tabs **Overview**, **Work & ideas**, **Public presence**, and **Sources & confidence**, with numbered citations that jump to their sources. **Reach out** appears when contact routes are allowed.

5. For US public records, open **On the record** at the bottom of the brief and select **Run records check** — it's a separate paid check with its own confirmation.



**What you get:** a candidate card, then a brief card with tabs and numbered citations, and an optional public-records band.

**Limits:** every paid step asks first, and no paid step is retried automatically. Public records cover US jurisdictions only and need a first and last name plus a city, a US state, or a date of birth. The records band carries the notice that results are for personal, informational use only, not for decisions about employment, housing, credit, or insurance. With contact routes off, there's no **Reach out** section and no work-email lookup; with public records off, there's no **On the record** band.

**Runs in:** every app platform. Routines: no. Council experts: no.

**Combines with:** [Find people](#find-people-work-emails-and-lead-enrichment) to build the list you pick from. Full guide: [People Search](https://bearly.ai/docs/features/people-search.md).

### Find people, work emails, and lead enrichment

Three companion tools work on lists rather than one person. Each needs the **Analyst** plan and the **People Search** admin control, and each asks before it spends.

| Tool | Label | What it does | Limits |
| --- | --- | --- | --- |
| **Find people** | `/find-people` | A ranked list of people who fit a description: role, company type, location, funding stage | 5 to 25 people, 15 by default; asks **Search for people?** first |
| **Find work emails** | `/work-emails` | Work emails from first name, last name, and company website; each marked verified, likely, or not found | Up to 25 people per request; only found emails are charged; needs **People Search contact routes** |
| **Lead enrichment** | `/lead-enrichment` | Structured profile data for leads you already know, from a profile link, an email, a first name and employer, or a role and company | 1 to 10 leads per batch; no citations and no personal contact details |

List searches and email lookups come back as tables in the reply. To go from a list to a brief, ask for a brief on one row; Bearly opens a People Search card for you to confirm.

## SEO data

SEO data pulls public search-engine data: keyword ideas, keyword volumes and metrics, live search results pages, a site's organic visibility, gaps against competitors, backlinks, and a single-page audit.

**Use it when:** you plan content, check demand for a product name, size up competitors, or audit one page.

**You need:** any plan. Admin control: **SEO Data**.



1. Ask for the data you need, with the market if it isn't the United States — Bearly chooses the matching tool.

   ```text
   Find 30 keyword ideas around "dental clinic scheduling software" in the United Kingdom, with monthly search volume, and show which three competitors rank for most of them.
   ```

2. To choose a tool, use a label — `/seo` for any of them, or `/seo-keywords`, `/seo-measure-keywords`, `/seo-serp` (live results pages), `/seo-site`, `/seo-compare-sites`, `/seo-backlinks`, or `/seo-audit-page`.



**What you get:** data in the reply, which Bearly can turn into tables or [charts](https://bearly.ai/docs/manual/capabilities/data-and-code.md).

**Limits:** up to five seed terms for ideas, up to 100 keywords measured at once, up to five queries per results-page check, and up to three competitors. Depth is quick (up to 20 rows), standard (up to 50), or deep (up to 100); results-page checks return fewer at quick and standard. Location defaults to the United States and language to English; there's no worldwide option, so name a country, state, or city. One public address per page audit.

**Runs in:** every app platform. Routines: no. Council experts: no.

**Combines with:** [Domain research](#domain-research) when naming a product (see [the recipe below](#name-a-product-with-domains-and-search-demand)).

## Domain research

Domain research suggests domain names and checks whether a specific domain is available to register.

**Use it when:** you're naming a product or company, or want to know whether a domain is taken.

**You need:** any plan. Admin control: **Domain research**.



1. Describe what you're naming and the endings you want — Bearly suggests names with **Suggest domains**.

   ```text
   Suggest 20 short names with .com or .ai domains for a scheduling app for dental clinics.
   ```

2. Ask it to check the ones you like — **Check domain availability** checks one domain per request and answers available, not available, or unknown.

3. To choose a tool, use `/domains`, `/domain-suggest`, or `/domain-status-precise`.



**What you get:** suggestions and availability answers in the reply.

**Limits:** a suggestion doesn't mean the domain is free; only a check says that. An unknown result means the check was inconclusive, and checks aren't retried automatically. Suggestions can take preferred endings, keywords, a two-letter country code, and a registrar. Domain research isn't trademark or name clearance.

**Runs in:** every app platform. Routines: no. Council experts: no.

## Maps

Maps searches places, reads place details and reviews, and plans routes with travel times.

**Use it when:** you're looking for somewhere nearby, comparing places by their reviews, planning a route with stops, or comparing travel times from several starting points.

**You need:** any plan. Admin control: **Maps**. For "near me", location permission on your device.



1. Ask in plain words, naming the place, area, or start point — Bearly searches places and routes and shows the final result on a map or route card.

   ```text
   Find three quiet cafes with good reviews within a 10-minute walk of Union Square, San Francisco.
   ```

2. To make sure Bearly uses Maps, start with `/maps`. Labels for single tools include `/maps-search`, `/maps-nearby`, `/maps-reviews`, `/maps-route`, and `/maps-along-route`.

3. Ask follow-ups that build on the result — "Read the reviews for the second one", "How long by transit if I leave at 8:30?", or "Find a pharmacy along that route."



**What you get:** a map or route card for the final answer; intermediate lookups stay in the background. When the embedded map isn't available, a route card draws the route line instead.

**Limits:** place searches return up to 20 results and reach up to 50 km from the point you give. Routes cover driving (traffic-aware, the default), walking, bicycling, and transit, with up to three stops in between; transit routes use either an arrival or a departure time. A travel-time matrix covers up to 10 origins by 10 destinations, and a search along a route returns up to 10 places. Review reading covers up to 450 reviews across relevant, newest, and lowest-rated. A place you name wins over your location; otherwise Bearly uses your device's location, then an approximate location from your network, and says when it does.

**Runs in:** every app platform. Routines: no. Council experts: no.

**Combines with:** [Weather](#weather) for trip planning (see [the recipe below](#plan-a-day-out-with-a-route-stops-and-the-weather)).

## Weather

Weather reads current conditions, forecasts, official alerts, past weather, air quality, and pollen.

**Use it when:** you're timing an event or a trip, checking a rain window or wind, looking at last month's temperatures, or deciding about air quality or pollen.

**You need:** any plan. Admin control: **Weather**. Location works as in [Maps](#maps).



1. Ask for the place and time you care about — Bearly picks current, forecast, or history.

   ```text
   Will it rain in Chicago between 4 and 8 pm on Saturday? Include any weather alerts and the air quality.
   ```

2. To choose a tool, use `/weather`, `/weather-current`, `/weather-forecast`, `/weather-alerts`, `/weather-history`, `/air-quality`, or `/pollen`.



**What you get:** a card for current conditions, forecasts, alerts, air quality, or pollen; a forecast card shows up to 24 hours and an alerts card up to five alerts. Past weather comes back as text.

**Limits:** forecasts default to the next 24 hours or 7 days; ask for a longer window when you need it. Alerts, air quality, and pollen aren't fetched with every forecast, so ask for them when you need them. Past weather covers one range (up to 366 days daily or 31 days hourly) or up to 20 separate dates. Air-quality forecasts reach 96 hours ahead and history 30 days back; pollen forecasts reach five days.

**Runs in:** every app platform. Routines: no. Council experts: no.

## X

Bearly reads public X data: it searches posts from roughly the last seven days, reads a post with its thread and quote posts, watches a video attached to a post, and reads a public profile. It's read-only; Bearly can't post, like, follow, or read DMs.

**You need:** any plan. Admin control: **X (Twitter)**. Watching an X video also needs **File uploads** and a chat you can edit.

**Runs in:** every app platform. Routines: searching and reading posts and profiles, yes. Council experts: no.

Full guide, with search operators and limits: [Posts on X](https://bearly.ai/docs/manual/capabilities/videos-and-posts.md#x).

## What runs in Routines and in a Council

Scheduled [Routines](https://bearly.ai/docs/manual/capabilities/routines.md) run unattended and get a smaller set of tools. Council experts get only the tools marked here.

| Tool | Routines | Council experts |
| --- | --- | --- |
| Web Search, Read Site | Yes | Yes |
| Image Search | Yes | No |
| Deep Research | Only when added to the routine with a tier; once per run | No |
| Scholar | Yes | Yes |
| X (search and read) | Yes | No |
| Search Docs, Read Doc, Scan Doc | Yes | Yes |
| YouTube | No | Transcript lookup and a saved claims check only |
| Council of Experts, Best Pick, People Search and its list tools, SEO data, Domain research, Maps, Weather, Get Video | No | No |

Creating routines needs the **Pro** plan and the **Routines** admin control.

## Try this

Each recipe below runs in one chat. Steps show the exact prompt and what each one does.

### Turn a Deep Research report into a chart and a shareable Page

You get a cited report, a chart of its key numbers, and a Page you can send to people.

**Why it works:** the finished Deep Research report stays in the chat's context in full, so later messages can pull its figures without new research. Charts draw from a prepared table that Bearly builds with Python, and sharing turns the substance of the chat into a Page you review before publishing.

**You need:** the **Analyst** plan or higher (**Research** for Ultra). Admin controls **Deep Research**, **Web**, **Chat web search**, **Charts**, **Run Python**, and **Sharing** (plus **Public links** for a link anyone can open). A chat you can edit.



1. Start the research and approve the plan — select **Create Plan**, review the **Plan**, then **Run Research**.

   ```text
   /deep-research Size the global market for home heat pumps from 2020 to 2030. Use credible market-size estimates, name each source, and separate actuals from forecasts.
   ```

2. When the report finishes, ask for the numbers as a table — Bearly reads them from the report already in the chat.

   ```text
   From the report, put the market-size estimates by year into a table with the source for each figure. Mark which years are forecasts.
   ```

3. Chart them — Bearly prepares the table as a CSV with Python and draws the chart.

   ```text
   Chart those estimates as a line chart, one line per source.
   ```

4. Type `/share`, or select **Share** in the chat header and then **Prepare share** — Bearly turns the substance of the chat into a Page and opens it, marked **Ready to share**. Review it, then select **Publish** in its header, choose the **Audience**, and select **Publish**.



**Swap in:** turn on **Ultra** for a deeper run; ask Bearly to email the report's key findings to you or a teammate instead of sharing a Page ([email](https://bearly.ai/docs/manual/capabilities/email-and-text.md)); use Scholar instead of Deep Research when the question is about published studies; add Deep Research to a [routine](https://bearly.ai/docs/manual/capabilities/routines.md) to rerun the report on a schedule.

**If it stalls:** a chart reads a CSV of at most 10 columns and 2 MB, and a line chart shows at most 12 series, so ask for fewer series if the chart is refused. If **Share** is missing, the chat is read-only or your organization has turned off sharing.

### Read a paper in full and quote it with page citations

You get the strongest study on a question, read in full, with its exact methods and numbers cited to pages.

**Why it works:** Scholar finds and ranks papers and, for open-access papers, returns a link to the PDF. Read Site saves that PDF into the chat as a document, and the document tools read it page by page, so citations open the document at the right page.

**You need:** any plan. Admin controls **Scholar** and **Web**. The chat's **Web** setting on **Auto**. A paper with an open-access PDF.



1. Ask Scholar for the evidence — Bearly searches papers, reads the key passages, and lists the papers on a card under the search.

   ```text
   /scholar What do randomized trials say about creatine supplementation and cognition in older adults?
   ```

2. Open the best paper in full — Bearly fetches the PDF with Read Site and saves it to the chat.

   ```text
   Open the strongest open-access trial in full and quote its exact methods, sample size, and effect sizes with page citations.
   ```

3. Check how it held up — Scholar looks for papers that cite it.

   ```text
   Find later papers that cite this trial and say whether they replicated the effect.
   ```



**Swap in:** attach your own PDF instead of step 2; put the question to `/council` for a second opinion on the evidence; ask Deep Research when you need the wider picture beyond papers.

**If it stalls:** if a paper has no open-access PDF, Scholar may only have its abstract; attach the PDF if you have it. In an end-to-end encrypted chat, Search Docs isn't available, but Bearly can still read and scan the document by page.

### Build a prospect list, get emails, and brief one person

You get a ranked list of people who fit a description, work emails for the top rows, and a cited brief on the one you'll contact first.

**Why it works:** Find people's rows carry each person's name and, for people from its profile database, the company website, which is what Find work emails needs. Asking for a brief on a row opens People Search, which confirms the person with you before it builds anything.

**You need:** the **Analyst** plan or higher. Admin controls **People Search** and **People Search contact routes**. A chat you can edit. You approve each paid step.



1. Describe the people — approve **Search for people?** to run the search.

   ```text
   Find heads of platform engineering at Series B AI infrastructure companies in New York.
   ```

2. Get emails for the rows you want — approve the prompt; each address comes back verified, likely, or not found, and only found emails are charged.

   ```text
   Get work emails for the top 3.
   ```

3. Ask for a brief on one person — on the card, select **This is them**, check the estimate, and select **Build brief**.

   ```text
   Build a brief on the second one.
   ```



**Swap in:** paste up to 10 rows from your CRM and use `/lead-enrichment` instead of step 1; run **On the record** on the brief for US public records; ask for a brief on a second row when you have two people to meet.

**If it stalls:** if the list comes back thin, add a more specific requirement, such as a city, a company type, or named companies, and search again. If **Reach out** and work emails are missing, contact routes are off for your organization.

### Name a product with domains and search demand

You get a shortlist of names with available domains and how often people search for each.

**Why it works:** Domain research suggests names and checks availability one domain at a time, SEO data measures search volume for many names in one batch, and Web Search checks whether a name is already in use. All three answer in the same chat, so each step works from the last one's shortlist.

**You need:** any plan. Admin controls **Domain research**, **SEO Data**, and **Web**.



1. Get candidates — Bearly suggests names with matching domains.

   ```text
   Suggest 20 names with .com or .ai domains for a scheduling app for dental clinics.
   ```

2. Check the best ones — each check answers available, not available, or unknown.

   ```text
   Check availability for your best 5.
   ```

3. Measure demand and look for clashes — SEO data measures volume, and Web Search looks for existing products with those names.

   ```text
   For the available ones, show monthly US search volume for each name and any existing products already using it.
   ```

4. Rank the shortlist.

   ```text
   Rank the shortlist by availability, search volume, and how clear the name is. Put it in a table.
   ```



**Swap in:** name another market in step 3 (SEO data defaults to the United States and English); type `/share` to publish the shortlist as a Page.

**If it stalls:** an unknown availability result means the check was inconclusive; ask again later. This isn't trademark clearance; check that separately before you commit.

### Plan a day out with a route, stops, and the weather

You get a route with a stop along the way and a forecast for when you'll be out.

**Why it works:** Maps plans routes for bicycling, walking, driving, or transit and searches along the route for stops, and Weather reads the hourly forecast for the same place. Both answer in one chat, so the second question can use the first answer's places and times.

**You need:** any plan. Admin controls **Maps** and **Weather**. A named start point, or location permission on your device.



1. Plan the route and the stop — Bearly plans a bicycling route and searches for a cafe along it.

   ```text
   Plan a Saturday bike ride from Golden Gate Park to Sausalito with a coffee stop along the way.
   ```

2. Check the weather for that window — Weather reads the hourly forecast; ask for air quality too, since it isn't included with a forecast unless you ask.

   ```text
   Will it rain or be windy along that route on Saturday between noon and 5 pm? Include air quality.
   ```

3. Plan the way back — transit routes use a departure or arrival time.

   ```text
   Compare riding back with taking transit if I leave Sausalito at 4 pm.
   ```



**Swap in:** use walking or driving instead of bicycling; ask Maps to read reviews for the cafes before you choose; swap the ride for a list of venues and compare travel times from several friends' addresses with a travel-time matrix.

**If it stalls:** if Bearly guesses the wrong start, name the address; it says when it's using an approximate location from your network. Maps and Weather don't run in Routines.

## Related

- [Learn from YouTube, online video, and posts on X](https://bearly.ai/docs/manual/capabilities/videos-and-posts.md)
- [Work with documents](https://bearly.ai/docs/manual/capabilities/documents.md)
- [Routines](https://bearly.ai/docs/manual/capabilities/routines.md)
- [Research recipes](https://bearly.ai/docs/manual/combine/research-recipes.md)

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Keyboard shortcuts](https://bearly.ai/docs/manual/chat/shortcuts.md)
- [Next: Learn from YouTube, online video, and posts on X](https://bearly.ai/docs/manual/capabilities/videos-and-posts.md)
- [Related: Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md)
- [Related: Write, attach, and send](https://bearly.ai/docs/manual/chat/compose.md)
- [Related: Run Bearly for an organization](https://bearly.ai/docs/manual/organizations.md)
- [Related: Privacy and security controls](https://bearly.ai/docs/manual/privacy-and-security.md)
