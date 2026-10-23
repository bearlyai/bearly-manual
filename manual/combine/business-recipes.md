---
title: "Recipes for founders, sales, and operations"
description: "Step-by-step recipes that chain Bearly's Domain research, SEO data, People Search, Council of Experts, Document editor, Run Python, charts, Pages, and email for naming a product, meeting prep, contact lists, contract redlines, shareable dashboards, and search-gap content plans."
canonical: "https://bearly.ai/docs/manual/combine/business-recipes/"
markdown: "https://bearly.ai/docs/manual/combine/business-recipes.md"
---

# Recipes for founders, sales, and operations

HTML: [https://bearly.ai/docs/manual/combine/business-recipes/](https://bearly.ai/docs/manual/combine/business-recipes/)

> Step-by-step recipes that chain Bearly's Domain research, SEO data, People Search, Council of Experts, Document editor, Run Python, charts, Pages, and email for naming a product, meeting prep, contact lists, contract redlines, shareable dashboards, and search-gap content plans.

These recipes chain research, data, document, and email tools for work that usually takes several apps: naming a product, preparing for a meeting, reviewing a contract, or sending a dashboard to the board. Results from each step stay in the chat, so the last step can draw on all of them. Lookups that draw on outside data (domain checks, search data, work emails, and People Search) use your plan allowance. People Search asks before it searches for a list of people, looks up work emails, enriches leads, or builds a brief. For what each block takes in and gives back, see [Building blocks](https://bearly.ai/docs/manual/combine/building-blocks.md).

## Shortlist product names with open domains and search demand

You get name ideas, which domains are free to register, how often people search for each name, which names companies already use, and a one-page shortlist.

**Why it works:** Domain research suggests names and checks one domain per request. SEO data measures monthly search volume for up to 100 keywords at once. Web Search looks for companies already using a name. Every result stays in the chat, so the Page at the end can pull from all three.
**You need:** Any plan. Any platform. Organization controls: **Domain research**, **SEO Data**, and **Web**. The chat's **Web** setting on **Auto** (the default), which Web Search needs.



1. Get ideas:

   ```text
   /domains Suggest 20 short, easy-to-spell names with .com or .ai domains for a scheduling app for dental clinics.
   ```

   — Bearly lists names with domains. A suggestion doesn't mean the domain is free.

2. Check the best ones:

   ```text
   Check availability for the best five.
   ```

   — Each domain comes back available, not available, or unknown.

3. Measure demand:

   ```text
   /seo-measure-keywords Show US monthly search volume for each of those five names and for "dental scheduling software".
   ```

   — The numbers come back in the reply. A name that people already search for a lot may belong to someone else.

4. Look for existing companies:

   ```text
   Search the web for companies already using any of these names in software or healthcare.
   ```

   — Web Search answers with numbered sources.

5. Put it together:

   ```text
   Put the shortlist in a one-page Page: name, domain status, monthly searches, conflicts found, and your recommendation with one reason.
   ```

   — A Page preview appears in the chat. **Open** shows it full size; download it or publish it with **Share file**.



**Swap in:**
- **Another market:** name the country and language in step 3, such as "UK search volume in English". Search data defaults to the United States and English.
- **Search terms for brainstorming:** start with `/seo-keywords` and your product description to see what people search for, and use those words as seeds in step 1.
- **Council of Experts for the final call** (Pro): send `/council` with the five names and your criteria in the question.
- **Email for the Page:** ask "Email me the Page." Send Email attaches the HTML file.

**If it stalls:** An "unknown" status is inconclusive and isn't retried automatically; ask again later. A domain check isn't trademark clearance, so check names with a lawyer before you commit.

## Prepare for a meeting with someone you haven't met

You find the right people at a set of companies, get their work emails, build a cited brief on the person you're meeting, and draft an opener.

**Why it works:** Find people returns a ranked table in the reply, so the next message can say "the top three" and Find work emails knows who you mean. People Search builds a brief on one person after you confirm the right candidate on a card. The brief stays in the chat, so the last step can write an email from it.
**You need:** **Analyst** plan or higher. Any platform. Organization controls: **People Search**, **People Search contact routes** (for emails and the **Reach out** section), and **Email notifications** (for the last step). Finding people, looking up emails, and building the brief each ask first; approve to continue.



1. Find the people:

   ```text
   /find-people Heads of platform engineering at Series B AI infrastructure companies in New York.
   ```

   — Bearly asks "Search for people?" before it spends anything. Approve it, and a ranked list comes back as a table.

2. Get their emails:

   ```text
   /work-emails Get work emails for the top three.
   ```

   — Bearly asks before the batch. Each email comes back verified, likely, or not found, and only found emails are charged.

3. Build the brief:

   ```text
   Build a brief on the second person. I'm meeting her Thursday to talk about our observability product.
   ```

   — Bearly shows a candidate card. If it lists more than one person, select the right one; Bearly never chooses for you. Approve **Build the brief?**, and a brief card appears with tabs and numbered citations to its sources.

4. Draft the opener:

   ```text
   Draft a short intro email to her that mentions one specific thing from the brief, and email the draft to me.
   ```

   — Send Email sends the draft to your own address so you can edit it and send it from your mail app.



**Swap in:**
- **Lead enrichment for Find people:** `/lead-enrichment` with up to 10 known profile links, emails, or name-and-employer pairs returns structured profile data for each.
- **Your own list for Find people:** attach a spreadsheet and run step 2 on it. See the next recipe.
- **A text for the email:** ask Bearly to text you the three things to remember from the brief before the meeting. Needs a verified phone in **Settings** → **Phone & SMS**.

**If it stalls:** With only a name, Bearly asks for one detail that tells people apart, such as employer, city, or role. If emails and the **Reach out** section are missing, your admin turned off **People Search contact routes**. Bearly doesn't retry a paid step on its own.

## Turn an event attendee list into a contact spreadsheet

Your attendee spreadsheet comes back as a CSV with each person's work email and how confident the match is.

**Why it works:** Find work emails needs a first name, last name, and company domain for each person, which Bearly reads from the file you attach. The results come back as a table in the reply, and Bearly can write that table to a CSV file in the chat, which you can edit and email to yourself.
**You need:** **Analyst** plan or higher. Any platform. Organization controls: **People Search**, **People Search contact routes**, **File uploads**, and **Email notifications**.



1. Attach the spreadsheet and send:

   ```text
   /work-emails Find work emails for the first 25 people in the attached list. Use the first name, last name, and company website columns.
   ```

   — Bearly asks before the batch. Approve it, and each person comes back verified, likely, or not found.

2. Write the CSV:

   ```text
   Write a CSV with my original columns plus email and status, in the same row order as my file.
   ```

   — The CSV appears as a grid showing its rows and columns. **Open** it to edit cells, add a row or column, and **Save** a new version.

3. Send it to yourself:

   ```text
   Email me the CSV.
   ```

   — Send Email attaches the file.



**Swap in:**
- **The next batch:** repeat step 1 with "the next 25 people". Each request takes up to 25.
- **Lead enrichment for emails:** `/lead-enrichment` adds role and company details for up to 10 people per request.
- **A chart for the list:** ask "Chart how many verified emails we found per company" to see where coverage is thin. Needs **Run Python** and **Charts**.

**If it stalls:** People without a company domain can't be looked up; ask Bearly to list them so you can fill the gaps. Only found emails are charged.

## Review a contract clause with a panel of models, then redline it

Two to five models review a clause against your contract and public sources, Bearly synthesizes their view, and you get a Word file with tracked changes and a comment on each change.

**Why it works:** Council of Experts doesn't pass the chat's files to its experts unless the question names them. Naming the contract with an `@` reference lets each expert search and read it, and each can search the web. The synthesis stays in the chat, so the Document editor can apply the edits most experts agreed on as tracked changes, and Send Email attaches the result.
**You need:** **Pro** plan or higher. Any platform. Organization controls: **Council**, **Web**, **File uploads**, **Run Python** (the Document editor runs on it), and **Email notifications**. The chat's **Web** setting on **Auto** (the default), so experts can search the web. A chat that isn't end-to-end encrypted, so experts can search the file.

> **Caution — Not legal advice**
> Bearly's review is a starting point, not legal advice. Have a lawyer check anything you sign.




1. Attach the contract as a Word file (.docx), so step 2 can add tracked changes. Type `/council`, then type `@` and pick the contract under **Assets** so it appears as a chip, and finish the question:

   ```text
   /council Using @contract.docx and current public guidance and case law, should we accept clause 7 (limitation of liability) as written? Each expert: cite sources, rate the risk, and list the exact wording changes you'd ask for.
   ```

   — A **Council of Experts** panel shows each model's answer as it finishes, then Bearly's synthesis follows in the reply.

2. Apply the edits:

   ```text
   /document Redline clause 7 in contract.docx with tracked changes that make the edits most experts agreed on. Add a comment on each change explaining why. Keep everything else unchanged.
   ```

   — A **Run Python** step edits the document and saves a new Word file in the chat. The preview shows it as a PDF; download the **Original** to see the tracked changes in Word.

3. Send it:

   ```text
   Email me the redlined contract with a three-line summary of the changes.
   ```

   — Send Email attaches the Word file.



**Swap in:**
- **Rerun for Council of Experts** (any plan): ask the clause question once, then use the **Rerun** menu to get second and third opinions from other models.
- **A form for a redline:** `/document` can also fill a PDF form, fillable or not, from details you give it.
- **A summary deck:** ask the Document editor for a three-slide PowerPoint that explains the changes for your board.
- **A restricted Page for the email:** publish the synthesis as a Page with the **People and teams** audience so only your legal team can open it.

**If it stalls:** If an expert says it can't see the contract, the question didn't name it; type `@` and pick the file. A panel needs at least two experts to answer. If the Document editor fails, expand **Run Python** and read **Error**, then ask again one change at a time.

## Turn a sales spreadsheet into a dashboard anyone can open

Your spreadsheet becomes a chart, an interactive dashboard Page with filters, and a link you can send to investors or the board.

**Why it works:** Run Python reads the attached file and writes a summary CSV. **Create chart** draws from that CSV. Bearly builds the summary into the Page itself, so the dashboard works on its own without the spreadsheet. Publishing gives the Page a stable link.
**You need:** Any plan. Any platform. Organization controls: **File uploads**, **Run Python**, **Charts**, **Sharing**, and **Public links** (or **Share with people and teams** for a restricted link).



1. Attach the file and send:

   ```text
   Analyze the attached sales.xlsx by region and quarter. Show totals and quarter-over-quarter growth.
   ```

   — A **Run Python** step reads the file and returns the summary.

2. Chart it:

   ```text
   Chart quarterly revenue by region as a grouped bar chart.
   ```

   — A **Chart** card appears. **View data** shows the rows; **Download PNG** saves the image.

3. Build the dashboard:

   ```text
   Build an interactive dashboard Page with filters for region and quarter, a KPI row for total revenue and growth, and the bar chart.
   ```

   — A live Page preview appears. **Open** it and try the filters.

4. In the open Page, select **Share file** → **Prepare share**. When it's ready, the prepared Page opens on its own, marked "Ready to share"; select **Publish** in its header, choose **Anyone with the link** under **Audience**, select **Publish** again, then **Copy link**. — The Page is live at a bearly.sh link.



**Swap in:**
- **People and teams for Anyone with the link:** choose **People and teams** in step 4 and publish, then add people or teams with **Manage viewers**, which appears once the Page is published to that audience. Viewers sign in to open it.
- **A KPI with a goal:** ask "Show this quarter's revenue as a KPI chart against a 2 million dollar goal." A KPI chart shows one value with progress toward the goal.
- **A folder for an attachment** (desktop app): select **Work locally** → **Choose folder…**, pick the folder, and ask Bearly to attach the spreadsheet from there (up to 50 MB). Step 1 then works on that copy.
- **Next quarter's numbers:** attach the new file in the same chat and ask "Update the dashboard with this file." The Page saves a new version. Open it and select **Publish** → **Publish update**, and the link stays the same. If the popover asks you to use Share first, select **Share file** → **Prepare share** again.

**If it stalls:** A Page you share must be under 9 MB. If your organization allows neither audience, the popover says "Your team policy does not allow a publishing audience." Charts read up to 10 columns, so ask for a narrower summary if the table is wider.

## Find the search terms competitors win and you don't

You compare your site's search visibility with up to three competitors, size the gaps, see what kind of page ranks for each, and get a content plan as a CSV and a chart.

**Why it works:** SEO data tools return their numbers into the chat: site comparisons, keyword volumes for up to 100 terms, live results pages for up to five searches, and a one-page audit. Each step works from what the steps before it returned, and Run Python turns the final list into a CSV the chart draws from.
**You need:** Any plan. Any platform. Organization controls: **SEO Data**, **Run Python**, and **Charts**.



1. Compare sites:

   ```text
   /seo-compare-sites Compare organic search visibility for oursite.com against rival-one.com and rival-two.com in the US.
   ```

   — Bearly returns visibility figures for each site.

2. Find the gaps:

   ```text
   Which keywords do they rank for that we don't? Measure monthly volume for the top 30.
   ```

   — Bearly lists the gaps with search volume.

3. See what wins:

   ```text
   /seo-serp Show the live results for the five biggest of those keywords and tell me what kind of page wins each one.
   ```

   — Bearly reads the results pages and describes the winning page types, such as comparison pages, guides, or tools.

4. Audit your closest page:

   ```text
   /seo-audit-page Audit oursite.com/pricing against what's winning for "scheduling software pricing".
   ```

   — Bearly audits that one page and lists what it's missing.

5. Make the plan:

   ```text
   Turn the gaps into a content plan CSV: keyword, volume, winning page type, our matching page or "none", and priority. Chart volume by priority as a bar chart.
   ```

   — Run Python writes the CSV and a **Chart** card draws it.



**Swap in:**
- **Deeper or quicker data:** ask for a quick look (up to 20 rows, or 10 results for a live results page) or a deep one (up to 100 rows).
- **Backlinks for visibility:** `/seo-backlinks` on a competitor shows who links to them.
- **Another market:** name the country and language; search data defaults to the United States and English.
- **A Page for the CSV:** ask for the plan as a Page and publish it for your team with the **People and teams** audience.

**If it stalls:** An audit reads one public address per request. If a step returns nothing for one site, ask again for that site alone.

## Related

- [Research](https://bearly.ai/docs/manual/capabilities/research.md) for Domain research, SEO data, People Search, and Council of Experts
- [Documents](https://bearly.ai/docs/manual/capabilities/documents.md) and [Data and code](https://bearly.ai/docs/manual/capabilities/data-and-code.md) for the Document editor, Run Python, and charts
- [Pages and Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md) for publishing and audiences
- [Email and text](https://bearly.ai/docs/manual/capabilities/email-and-text.md) for who you can email and attachment limits

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Recipes for writing, content, and media](https://bearly.ai/docs/manual/combine/creative-recipes.md)
- [Next: Recipes for automation and agents](https://bearly.ai/docs/manual/combine/automation-recipes.md)
- [Related: Building blocks: how Bearly's features connect](https://bearly.ai/docs/manual/combine/building-blocks.md)
- [Related: Research the web, papers, people, products, and places](https://bearly.ai/docs/manual/capabilities/research.md)
- [Related: Work with files and documents](https://bearly.ai/docs/manual/capabilities/documents.md)
- [Related: Analyze data and run code](https://bearly.ai/docs/manual/capabilities/data-and-code.md)
