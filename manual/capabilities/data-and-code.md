---
title: "Analyze data and run code"
description: "How to analyze spreadsheets and files with Run Python, draw KPI, bar, and line charts with Charts, and pick the right visual with Visualize in Bearly, including what the Python sandbox includes, file inputs and outputs, chart limits, and how these combine with documents and Pages."
canonical: "https://bearly.ai/docs/manual/capabilities/data-and-code/"
markdown: "https://bearly.ai/docs/manual/capabilities/data-and-code.md"
---

# Analyze data and run code

HTML: [https://bearly.ai/docs/manual/capabilities/data-and-code/](https://bearly.ai/docs/manual/capabilities/data-and-code/)

> How to analyze spreadsheets and files with Run Python, draw KPI, bar, and line charts with Charts, and pick the right visual with Visualize in Bearly, including what the Python sandbox includes, file inputs and outputs, chart limits, and how these combine with documents and Pages.

Bearly can run Python on your files in a cloud sandbox, turn the result into a chart, and build it into an interactive Page. Ask in plain words; Bearly writes and runs the code, and you see the code, the result, and any files it made.

## Which tool for which job

| You want | Use | Type |
| --- | --- | --- |
| Numbers worked out from a spreadsheet, a cleaned file, a plot, a converted file | [Run Python](#run-python) | `/python` |
| A finished Word, PowerPoint, Excel, or PDF file | [Document editor](https://bearly.ai/docs/manual/capabilities/documents.md#document-editor) | `/document` |
| A KPI, bar, or line chart you can hover and download | [Charts](#charts) | `/chart` |
| An interactive calculator, planner, or dashboard you keep | [Page](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md) | Ask for it |
| Bearly to choose the smallest useful visual | [Visualize](#visualize) | `/visualize` |
| Code that runs on files on your own computer | [Work locally](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md) (desktop app) | Turn it on in the composer |

As a rule of thumb, Bearly uses Python for calculation, cleaning, and one-off charts, and a Page for interactive tools you'll come back to.

## Run Python

Run Python executes a complete Python script in a fresh cloud sandbox and returns what it printed and any files it saved. It's the engine behind data analysis, file conversion, and the Document editor.

**Use it when:** summarizing a spreadsheet by region and month, cleaning a messy export, running a statistical test, converting between file formats, resizing or processing images, or trimming and merging audio and video.

**You need:** any plan; each run counts as usage. Admin control: **Run Python** (under **Code & Automation**). It works on every platform because it runs in the cloud.



1. Attach the data files, or point to files already in the chat or project with `@` — the sandbox only gets the files Bearly hands to that run.
2. Ask for the result you want, or start with `/python` to make Bearly use it — the menu shows **Run Python** under **Tools**.

   ```text
   /python From the attached sales.xlsx, total revenue by region and quarter, show the top three regions by growth, and save the summary as a CSV.
   ```

3. Watch the **Run Python** step — select it to see **Input** (the code), **Result** (what it printed), and **Error** if something failed. Bearly often runs a quick look at the columns first, then the full analysis.
4. Open the output files — they appear as file cards in the chat, and saved plots show inline.



**What you get:** the answer in the chat, plus up to five new files per run, such as CSVs, spreadsheets, images, PDFs, or videos. Each file has **Download**, and later turns can use it.

**Limits:**

- Each run starts from scratch. Nothing carries over between runs unless Bearly passes a file from an earlier run back in.
- Runs are short and resource-limited. Long jobs, endless loops, and heavy processing of large media may not finish; split the work.
- Up to five output files per run; extras are dropped.
- The sandbox has internet access for small public downloads, but it can't reach your computer, your local files, or your apps. For that, use [Work locally](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md) in the desktop app.
- Not available in [Routines](https://bearly.ai/docs/manual/capabilities/routines.md).

**Combines with:** [Charts](#charts), which draw from a CSV that Python prepares; [Pages](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md), which can carry Python's results; [Text to speech](https://bearly.ai/docs/manual/capabilities/images-video-audio.md#text-to-speech) and [Make Video](https://bearly.ai/docs/manual/capabilities/images-video-audio.md#make-video), whose files Python can merge.

### What the sandbox includes

The sandbox comes with common Python libraries, and Bearly can install a missing package for a run.

- **Data and statistics:** pandas, NumPy, SciPy, statsmodels, scikit-learn, SymPy.
- **Charts:** matplotlib, seaborn, Plotly, Altair.
- **Office files:** openpyxl, xlrd, pyxlsb, python-docx, python-pptx.
- **PDFs and text recognition:** pypdf, pdfplumber, pdfminer.six, pdf2image, ReportLab, pytesseract.
- **Images:** Pillow, OpenCV.
- **Web:** requests, httpx, Beautiful Soup, lxml.

Command-line tools are available to scripts too: ffmpeg for audio and video, ImageMagick and image optimizers, Poppler, Ghostscript, and qpdf for PDFs, Tesseract for text recognition, and pandoc and LibreOffice for document conversion.

For office documents, the sandbox also has helpers that the [Document editor](https://bearly.ai/docs/manual/capabilities/documents.md#document-editor) uses: filling PDF forms, editing Word files with tracked changes, building decks from PowerPoint templates, and writing Excel workbooks with real formulas.

### In end-to-end encrypted chats

Run Python works in end-to-end encrypted chats. The files you give a run are sent to the cloud sandbox so it can process them, up to 50 MB in total per run, and each output file can be up to 100 MB. See [Privacy and security](https://bearly.ai/docs/manual/privacy-and-security.md).

## Charts

Charts draws a **KPI**, **bar** (single, grouped, or stacked), or **line** (single or multi-series) chart from a small, prepared CSV file. The chart card is interactive and you can download both the picture and the data.

**Use it when:** showing monthly revenue as a line, comparing regions as grouped bars, or putting one headline number with its goal on screen.

**You need:** any plan. Admin control: **Charts** (under **Media & Creativity**). To prepare the data, Bearly needs **Run Python**, or **Work locally** in the desktop app; without either, it can chart only a CSV that's already in chart-ready shape.



1. Attach the data, or use a table already in the chat.
2. Ask for the chart, or start with `/chart` — the menu shows **Create chart**.

   ```text
   /chart Show monthly revenue for 2026 as a line chart, one line per product, in USD.
   ```

3. Bearly prepares a chart-ready CSV first, usually with Run Python, then draws the chart from that file — the rows never pass through the chart request itself.
4. Use the card — point or tap to read the nearest value, select **View data** to see the CSV grid and **View chart** to go back, and use **Download CSV** or **Download PNG**.



**What you get:** a **Chart** card in the chat. Bar and line charts download as a PNG at twice screen resolution.

Chart options you can ask for:

- **Bar:** sort by category or by value.
- **Line:** dates or ordered labels along the bottom.
- **Values:** plain numbers, currency (AUD, CAD, CHF, CNY, EUR, GBP, INR, JPY, KRW, or USD), or percentages from either fractions or whole numbers.
- **KPI:** an optional goal with a progress indicator.
- **Text:** a title up to 160 characters and a description up to 500.

**Limits:**

| Chart | Rows | Other limits |
| --- | --- | --- |
| KPI | Exactly 1 | — |
| Bar | Up to 100 | Up to 30 categories |
| Line | Up to 2,000 | Up to 12 series |
| Every CSV | — | At most 10 columns, 2 MB, and 2,000 characters per cell |

Duplicate keys are rejected, and a chart never quietly samples or cuts rows, so data over the limits needs aggregating first. If a chart fails to draw, the card says "The chart could not load. The data is available below." Turning the **Charts** control off stops new charts but leaves existing ones visible. Charts aren't drawn in [Routines](https://bearly.ai/docs/manual/capabilities/routines.md).

**Combines with:** [Run Python](#run-python) to aggregate data down to chart size, [Research](https://bearly.ai/docs/manual/capabilities/research.md) to chart figures from a report, and [Pages](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md) for a dashboard with filters.

## Visualize

Visualize is a built-in skill that turns an idea, layout, process, or dataset into the smallest visual that makes it clearer. You don't pick the format; Bearly does.

**Use it when:** planning a room layout, comparing loan options side by side, mapping a process, or exploring a dataset where adjusting inputs helps you decide.

**You need:** any plan, on every platform. Admin control: **Skills**.



1. Type `/visualize` — it's listed under **Skills**.
2. Describe the decision and give real numbers, dimensions, or examples.

   ```text
   /visualize Compare a 15-year and a 30-year mortgage on $450,000 at 6.1% and 6.6%. Let me change the rate and down payment and see total interest.
   ```

3. Review what Bearly made — an interactive Page when controls help, or a static chart, table, or diagram when they wouldn't.



**What you get:** a focused visual with units and assumptions shown. When you change the brief in chat, Bearly edits the existing Page instead of making a new one when it can.

**Limits:** Visualize makes an image only when you explicitly ask for a realistic render or illustration. Bearly can't see what you select or type inside a Page, so if a follow-up depends on a value you picked there, tell Bearly the value.

> **Tip — Diagrams**
> Answers don't render diagram code blocks as pictures. For a flowchart, org chart, or timeline, ask for it as a Page or as an image made with Run Python.


## Python, Charts, and Pages together

The three tools hand work to each other inside one chat:

- **Python → Chart.** Python reads your upload and writes a summary CSV; the chart draws from that file.
- **Python → Page.** For a data-backed Page, Bearly cleans and aggregates with Python, then bakes the results into the Page as data, so the Page doesn't need the original file.
- **Documents → Python.** Spreadsheets attached to a chat are searchable as text, but for sums, filters, and pivots, Bearly passes the file to Python. See [Work with files and documents](https://bearly.ai/docs/manual/capabilities/documents.md).
- **Page → link.** Prepare and publish the Page to share it. See [Share and publish a Page](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md#share-and-publish-a-page).

## Try this

Each recipe runs in one chat.

### Turn a spreadsheet into a published dashboard

You get a summary table, a chart, and an interactive dashboard Page at a link your team can open.

**Why it works:** Python reads the upload and writes a chart-sized CSV, Charts draws from that file, and Bearly bakes the same aggregates into a Page as data. Sharing then prepares the Page with artwork and a link preview for you to review and publish.

**You need:** any plan. Admin controls **File uploads**, **Run Python**, **Charts**, and **Sharing**, plus **Public links** or **Share with people and teams** for the audience.



1. Attach the spreadsheet and ask for the analysis — check the **Run Python** step's **Result** for the totals.

   ```text
   Analyze the attached sales.xlsx by region and quarter. Save a summary CSV with revenue per region per quarter.
   ```

2. Chart it.

   ```text
   Chart quarterly revenue by region as a grouped bar chart in USD.
   ```

3. Build the dashboard — the Page opens in the chat; select **Open** to use it full size.

   ```text
   Build an interactive dashboard Page from that summary with filters for region and quarter, the grouped bar chart, and the three biggest changes called out at the top.
   ```

4. Open the Page and select **Share file**, then **Prepare share** — when it's ready, the prepared Page opens marked **Ready to share**. Select **Publish** in its header, choose the **Audience**, and select **Publish**.



**Swap in:** a CSV export instead of a workbook; a line chart of monthly revenue instead of bars; **People and teams** to restrict the link to named colleagues; [Deep Research](https://bearly.ai/docs/manual/capabilities/research.md) figures instead of your own data.

**If it stalls:** if the chart is refused for size, ask Bearly to aggregate to fewer rows or categories first. If the publish popover says "Your team policy does not allow a publishing audience.", ask an admin to turn on **Public links** or **Share with people and teams**.

### Get a spoken KPI briefing from a CSV

You get last month's key numbers as KPI charts and a 30-second audio briefing.

**Why it works:** Python computes the figures and writes one-row CSVs that KPI charts can draw. The numbers stay in the chat, so text to speech can read a short script built from them.

**You need:** any plan. Admin controls **Run Python**, **Charts**, and **Text to speech**.



1. Attach the export and ask for the figures.

   ```text
   From the attached orders.csv, compute last month's revenue, order count, and average order value, with the change from the month before.
   ```

2. Chart the headline number.

   ```text
   Show last month's revenue as a KPI with a goal of $250,000.
   ```

3. Record the briefing — the take appears in Voice Studio, where you can play and download it.

   ```text
   /say Write and record a 30-second briefing on these numbers, calm and clear, leading with the biggest change.
   ```



**Swap in:** a bar chart of revenue by channel instead of a KPI; [email](https://bearly.ai/docs/manual/capabilities/email-and-text.md) the audio file to yourself; a Page that shows the numbers with the audio.

**If it stalls:** if the KPI is refused, ask for the figure as a single-row CSV first. If audio fails with "The audio could not be created.", ask again; Bearly doesn't retry a failed recording on its own.

### Rebuild a messy export as a working Excel model

You get a clean workbook whose totals are live formulas, not pasted numbers.

**Why it works:** Python cleans the data, and the sandbox's Excel helpers write formulas and recalculate them, so the file keeps working when you change an input.

**You need:** any plan. Admin control **Run Python**.



1. Attach the export.

   ```text
   /document Clean the attached transactions.csv: fix dates, split the category column, and remove duplicates. Build an Excel workbook with a Data sheet and a Summary sheet whose monthly totals and growth rates are formulas. Format it like a financial model.
   ```

2. Open the workbook and select **Download** → **Original** — the preview is a PDF, so download the original to check the formulas.
3. Ask for changes by sheet and cell — Bearly writes a new file each time.



**Swap in:** a PowerPoint summary from your template instead of a workbook; a CSV for a [chart](#charts) instead of formulas.

**If it stalls:** if the run times out on a large file, ask Bearly to process it in two passes or to sample the first rows to fix the cleaning rules first.

## Related

- [Work with files and documents](https://bearly.ai/docs/manual/capabilities/documents.md)
- [Make Pages and edit in Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md)
- [Browser and computer](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md)
- [Routines](https://bearly.ai/docs/manual/capabilities/routines.md)

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Work with files and documents](https://bearly.ai/docs/manual/capabilities/documents.md)
- [Next: Make Pages and edit in Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md)
- [Related: Let Bearly use a browser, your files, and your computer](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md)
- [Related: Automate with Routines](https://bearly.ai/docs/manual/capabilities/routines.md)
- [Related: Make images, video, and audio](https://bearly.ai/docs/manual/capabilities/images-video-audio.md)
- [Related: Privacy and security controls](https://bearly.ai/docs/manual/privacy-and-security.md)
