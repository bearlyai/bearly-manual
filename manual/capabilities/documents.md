---
title: "Work with files and documents"
description: "How Bearly opens, previews, searches, cites, summarizes, edits, converts, and proofreads files in a chat or project, including supported file types, size limits, password-protected PDFs, Always Search Documents, the Document editor, and what changes in end-to-end encrypted chats."
canonical: "https://bearly.ai/docs/manual/capabilities/documents/"
markdown: "https://bearly.ai/docs/manual/capabilities/documents.md"
---

# Work with files and documents

HTML: [https://bearly.ai/docs/manual/capabilities/documents/](https://bearly.ai/docs/manual/capabilities/documents/)

> How Bearly opens, previews, searches, cites, summarizes, edits, converts, and proofreads files in a chat or project, including supported file types, size limits, password-protected PDFs, Always Search Documents, the Document editor, and what changes in end-to-end encrypted chats.

Attach a file and Bearly can show it, read it, search it, quote it with page citations, summarize it, or hand back a new edited copy. This page covers every file and document tool in a chat: adding files, what each file type looks like, finding files again, the document research tools, the Document editor, and Fix Grammar.

## Add files to a chat

You can attach files in four ways. All of them need uploads to be allowed.

- Select **+** → **Attach files** under **Add**, and pick one or more files of any type.
- Drag files onto the chat. A drop zone appears while you drag.
- Paste files or screenshots into the message box. Pasting more than 200,000 characters of text attaches it as `pasted.txt` instead.
- On a phone or tablet, tap **Take photo** in the composer toolbar to open the camera.

**You need:** any plan. Admin control: **File uploads** (under **Privacy & Security**). When it's off, attaching, dropping, pasting files, and the camera are all hidden.

**Limits:** 300 MB per file; a larger file isn't attached. While a file is being prepared, its chip shows a spinner (hover it for "Checking PDF.", "Uploading" with progress, or "Analyzing."), and you can't send until it finishes. If a chip shows a warning icon with "Unable to upload and process.", remove it with its **×** and attach the file again; you can't send while it's there.

For everything else about the message box, see [Write, attach, and send](https://bearly.ai/docs/manual/chat/compose.md).

## Password-protected PDFs

Bearly detects a locked PDF when you attach it and asks for the password before adding it.

**Use it when:** you have a bank statement, contract, or report that opens only with a password.

**You need:** the same as attaching any file.



1. Attach the PDF — the upload chip shows a lock, and the message "Enter the PDF password. Bearly uses it once to unlock this file." appears.
2. Type the password in **PDF password** — a show/hide toggle lets you check what you typed.
3. Select **Unlock and add** — Bearly unlocks the file and adds the unlocked copy to the chat.



**What you get:** an ordinary PDF in the chat that Bearly can read, search, and cite.

**Limits:** a wrong password shows "That password didn't work." and you can try again. If the file can't be unlocked at all you'll see "Unable to unlock this PDF." Cancelling removes the file from the message.

## What Bearly can open and read

Every file appears as a card in the chat. Select **Open** on a card to see it full size in the side panel.

| File type | In the chat | In the side panel | What Bearly does with it |
| --- | --- | --- | --- |
| PDF | PDF preview | Full PDF viewer with page controls | Reads, searches, and cites it by page |
| Word, Excel, PowerPoint, OpenDocument, `.pages`, `.numbers`, `.key`, `.epub` | Converted to PDF for the preview | PDF view; **Download** offers **PDF** or **Original** | Reads and searches the text; the Document editor edits Word, Excel, and PowerPoint files |
| CSV, TSV, and pipe-separated (`.csv`, `.tsv`, `.tab`, `.psv`) | Spreadsheet grid showing rows × columns, with **Copy table** and **Open** | Editable grid | Searches it as text; Run Python can analyze it; Charts can draw from it |
| Markdown | Rendered, with **Copy** and **Open** | Rendered | Reads and searches it |
| Images | Image | Full-size image | Looks at it with View Media; Touch Up can edit it |
| Audio | Compact player | Full player | Transcribe turns speech into text |
| Video | Video player | Video player | View Media watches it; Transcribe turns speech into text |
| HTML | Live [Page](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md) preview | The live Page | Reads it |
| JSON, plain text (`.txt`), logs | Text preview | Text | Reads it |
| Code (about 60 file types, such as `.py`, `.ts`, `.go`, `.sql`, `.yaml`, `.xml`, `.jsonl`, Dockerfile, and Makefile) | Syntax-highlighted preview | Syntax-highlighted | Reads it |
| Calendar (`.ics`) and anything else | Name card | Panel with **Download** | Can pass it to Run Python |

Word covers `.doc`, `.docx`, `.docm`, `.dot`, `.dotx`, and `.dotm`. Excel covers `.xls`, `.xlsx`, `.xlsm`, `.xlt`, `.xltx`, and `.xltm`. PowerPoint covers `.ppt`, `.pptx`, `.pptm`, `.pot`, `.potx`, `.potm`, and `.pps`. OpenDocument covers `.odt`, `.ods`, `.odp`, and `.odg`.

Bearly pulls the text out of documents up to 200 MB so the document tools can search and read them. Images, audio, and video skip this step: use [Transcribe](https://bearly.ai/docs/manual/capabilities/images-video-audio.md#transcribe) for what was said and [View Media](https://bearly.ai/docs/manual/capabilities/images-video-audio.md#view-media) for what's on screen.

## Find files again with Browse files

When a chat has files, its header shows **Browse files** (a Files icon with a count). It opens a list of the chat's files, newest first, with filters:

- **All** — every file.
- **Project** — files in the chat's project (shown only in a project chat).
- **Uploaded** — files you attached.
- **Generated** — files Bearly made, such as Pages, Python outputs, and images.

On iOS, a PDF's main action in the list is **Open PDF**. You can also ask in chat with `/files` (**Browse Files**) and Bearly lists them.

To find a file in any chat, press <kbd>⌘</kbd> <kbd>F</kbd> (<kbd>Ctrl</kbd> <kbd>F</kbd> on Windows and Linux), type in **Search chats and files...**, and switch to the **Files** tab. Results are labelled **Uploaded**, **Generated**, or **Saved by Bearly**. End-to-end encrypted chats aren't searched. See [Organize, find, and share](https://bearly.ai/docs/manual/chat/organize.md).

## Point Bearly at one file with @

When a chat has several files, name the one you mean. Type `@` and part of the file name, then pick it under **Assets**. Every chat and project file is listed; a generated file appears once, at its latest version.

You can combine a file with a tool in one message. Only one `/` command counts and it must come first, but you can add several `@` references anywhere:

```text
Compare @q3-board-deck.pptx with @q2-board-deck.pptx and list every number that changed.
```

These file tools are in the `/` menu under **Tools**:

| Type | Menu shows | What it does |
| --- | --- | --- |
| `/files` | Browse Files | Lists the chat's files |
| `/read-file` | Read Asset | Reads a file |
| `/create-file` | Create Asset | Writes a new file: a Page (HTML), Markdown, plain text, CSV, or JSON |
| `/edit-file` | Edit Asset | Edits a file Bearly wrote; each edit saves a new version |
| `/rename-file` | Rename File | Renames a file without making a new version |
| `/analyze-media` | View Media | Looks at an image or video |

## Preview, edit a table, and download

Open any file in the side panel to get its controls: a version dropdown for files Bearly has edited, **Copy** where the content can be copied, **Share file** (when sharing is allowed and you can edit the chat), **Download**, and **Close**. For documents previewed as PDF, **Download** offers **PDF** or **Original**; choose **Original** for the editable file.

CSV files are editable in the side panel:



1. Open the CSV — the bar above the grid shows rows × columns, the separator when it isn't a comma, and how many parse issues Bearly found.
2. Edit cells, or add **+ Row** and **+ Column** — **Revert** throws away your edits.
3. Select **Save** — for a file Bearly generated this saves a new version ("Saved as v2"). For a file you uploaded, the button is **Save copy** and saves a new generated copy instead ("Saved as a new copy"). In a read-only chat the grid is marked **Read only** and can't be edited.



If you try to leave with unsaved edits, Bearly asks "Discard your unsaved CSV changes?"

## Research your documents: Search Docs, Read Doc, Scan Doc

Bearly has four document tools. They appear once the chat or its project has at least one file, and Bearly picks one on its own when you ask about your files. Type the label to force one.

| Type | Menu shows | What it does | Good for |
| --- | --- | --- | --- |
| `/search-docs` | Search Docs | Searches every attached and project document by meaning and returns cited passages | "Where do our contracts mention auto-renewal?" |
| `/read-document` | Read Doc | Reads a document page by page | Reading a section in full before quoting it |
| `/find-in-document` | Scan Doc | Finds exact words or a pattern in one document, with page, line, and surrounding text | Every mention of a name, clause number, or figure |
| `/summarize` | Summarize Doc | Writes a structured summary of a long document | An overview before you dig in |

**Use it when:** comparing terms across several agreements, pulling every figure from a report with its page, checking a claim against the source, or answering questions from a folder of policies.

**You need:** any plan. The document tools have no admin control of their own; attaching files needs **File uploads**, and adding files to a project needs **Project documents and data**.



1. Attach the documents, or open a chat in a project that has them — wait until each file finishes "Analyzing."
2. Ask a focused question and say what form the answer should take — Bearly searches the documents and can read further around what it finds before answering.

   ```text
   Compare the renewal, termination, and price-increase terms in these three agreements. Make a table with one row per agreement and cite the page for every cell.
   ```

3. Select a citation in the answer — the document opens near the cited page so you can check the surrounding text.



**What you get:** an answer with clickable citations, and sometimes a strip of matching document sources above it.

**Limits:** one search returns up to 10 sources. Spreadsheets and CSV files are searched as text, not as tables; for sums, filters, or pivots, use [Run Python](https://bearly.ai/docs/manual/capabilities/data-and-code.md#run-python). Search Docs doesn't cover audio, video, or images. Scan Doc returns 10 matches at a time and pages through the rest.

**Combines with:** [Run Python](https://bearly.ai/docs/manual/capabilities/data-and-code.md) for numbers in a spreadsheet, the [Document editor](#document-editor) to turn findings into a Word or PDF file, and [Research](https://bearly.ai/docs/manual/capabilities/research.md) to check your documents against public sources.

### Summarize Doc and Deep Summary

Summarize Doc condenses one long document into a structured overview. When Bearly shows the summary itself, it's headed **Deep Summary**. Bearly reaches for it when you ask for a summary or when a document is very long.



1. Attach the document and type `/summarize` — the menu shows **Summarize Doc**.
2. Name the document and the reader — say what matters most.

   ```text
   /summarize Summarize @annual-report.pdf for a board member. Keep the central argument, the major risks, and every explicit recommendation.
   ```

3. Read the summary, then ask follow-ups in the same chat — expand a section, or check a claim against the source.



**Limits:** for a very long document, Deep Summary reads up to 30 evenly spaced sections rather than every word. When completeness matters, ask Bearly to read the specific section with Read Doc or find every mention with Scan Doc.

## Always Search Documents (projects)

In a project, you can make Bearly search the project's documents before every answer, so replies stay grounded in your material without asking each time.

**Use it when:** a project is a knowledge base, such as a policy library, a client file, or course readings, and every answer should cite it.

**You need:** a project with documents, and permission to edit its settings. An organization policy can also set and lock this switch.



1. In the sidebar, expand the project and select **Settings**.
2. In **Project Chat Settings** (**Shared Project Settings** in a shared project), turn the card on with its switch if it shows **Disabled**.
3. Turn on **Always Search Documents** ("Always search project documents before responding") — the lock toggle beside it decides whether people can change it in their own chats.



**What you get:** Bearly runs Search Docs before answering each message in the project's chats.

**Limits:** it has no effect in end-to-end encrypted chats, which don't support Search Docs. See [Projects](https://bearly.ai/docs/manual/projects.md) for the other project settings.

## Document editor

The Document editor creates new office documents and edits or converts the ones you attach. It works by running Python in Bearly's cloud sandbox with helpers for each format, so a Run Python step appears while it works.

**Use it when:** you need a real file back, such as a Word draft with tracked changes, a filled PDF form, a slide deck from your notes, or a spreadsheet with working formulas.

**You need:** any plan; each run counts as usage. Admin control: **Run Python** (under **Code & Automation**). Turning it off removes both `/python` and `/document`.

What it can do, by format:

- **PDF:** extract text and tables, merge, split, rotate, create, read scanned pages with text recognition, add a watermark or password, pull out images, and fill forms, including forms with no fillable fields.
- **Word:** create documents, edit with tracked changes and comments, accept all changes, and convert `.doc` to `.docx`.
- **PowerPoint:** create decks, or build from a template you attach.
- **Excel:** build workbooks that use formulas rather than pasted values, recalculate them, and format financial models.
- **Checking:** render pages or slides as images to check the layout before handing the file back.



1. Type `/document` — the menu shows **Document editor** under **Tools**.
2. Attach every source file — skip this when starting from scratch.
3. Describe the finished file: format, reader, what changes, and what must stay the same.

   ```text
   /document Revise the attached contract for plain language and return a new DOCX with tracked changes. Keep the clause numbering, defined terms, and existing comments.
   ```

4. Watch the **Run Python** step — select it to see **Input** and **Result**, or **Error** if the run failed.
5. Open the new file and select **Download** — for Word, Excel, and PowerPoint files the preview is a PDF, so choose **Original** to get the editable file.



**What you get:** one or more new files in the chat. Your original stays unchanged, so you can compare them or ask for another pass.

**Limits:** up to five new files per run. Runs are short and resource-limited, so split a big batch into a few named requests. Check the downloaded file in the app where it will be used before you send or sign it; conversion can shift layout, fonts, or page breaks.

**Combines with:** the [document research tools](#research-your-documents-search-docs-read-doc-scan-doc) to gather facts first, [Share file](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md#share-and-publish-a-page) to give the result a Page and link, and [Run Python](https://bearly.ai/docs/manual/capabilities/data-and-code.md) for analysis that doesn't need a polished file.

## Fix Grammar

Fix Grammar marks problems in a passage and lets you accept each fix one at a time. It flags grammar, spelling, punctuation, style, vocabulary, and clarity, and colors each mark by severity.

**Use it when:** proofreading an email, report, cover letter, or announcement where you want to keep your own wording and approve each change.

**You need:** any plan. No admin control.



1. Type `/grammar` — the menu shows **Fix Grammar** under **Tools**. You can also just ask Bearly to proofread.
2. Paste the passage and send — Bearly returns it in an editor card with each issue highlighted.
3. Select a highlighted passage — a card shows the kind of issue, an explanation, and the before and after text. Select **Accept** to apply that one change.
4. Use **Accept All** for every remaining suggestion, **Check Again** for a fresh pass on the current text, and **Copy corrected text** to copy the result.



**What you get:** a summary line that counts what's left, then "All issues resolved" or "No issues found".

**Limits:** not available in Routines. Suggestions you don't accept are never applied, so names, quotes, and house style stay as written unless you choose otherwise.

## End-to-end encrypted chats

Files work in end-to-end encrypted chats, with these differences:

- **Search Docs** isn't available, and **Always Search Documents** has no effect. Read Doc, Scan Doc, and Summarize Doc still work.
- Files from encrypted chats don't appear in **Search chats and files...**.
- Run Python and the Document editor still work. The files you give a run are sent to the cloud sandbox to process, up to 50 MB in total per run.

> **Note — Encryption**
> Chats and files are encrypted at rest, each with its own key. Turn on end-to-end encryption and your new chats are encrypted on your devices. Bearly stores and syncs only the locked copies. Each message and any file a tool needs still goes to the model or service doing the work. See [Privacy and security](https://bearly.ai/docs/manual/privacy-and-security.md).


## Try this

Each recipe runs in one chat.

### Compare a stack of contracts, then return a redlined copy

You get a cited comparison table and a Word file with your proposed changes as tracked edits.

**Why it works:** Search Docs finds the matching clauses across every attached agreement and the answer cites pages, so the comparison stays checkable. The table stays in the chat, so the Document editor can apply its conclusions to one agreement as tracked changes.

**You need:** any plan. Admin controls **File uploads** and **Run Python**. A chat that isn't end-to-end encrypted, for Search Docs.



1. Attach the agreements and ask for the comparison — check a few citations against the pages they open.

   ```text
   Compare the limitation-of-liability, indemnity, and termination clauses across these agreements. One row per agreement, cite the page for every cell, and flag anything unusual.
   ```

2. Turn the findings into a redline — the Document editor writes a new DOCX and leaves the original untouched.

   ```text
   /document Using the table above, edit @vendor-msa.docx so its liability cap and termination notice match our other agreements. Return a new DOCX with tracked changes and a comment explaining each change.
   ```

3. Download **Original** and open it in your word processor — review each tracked change before you send it.



**Swap in:** Scan Doc for the first step when you need every exact mention of a term; a project with **Always Search Documents** instead of attaching the files each time; a filled PDF instead of a DOCX for a form.

**If it stalls:** if citations point to the wrong file, name the files with `@`. If the run fails, select the **Run Python** step, read **Error**, and ask Bearly to retry with one file.

### Fill a PDF form from your own documents

You get a completed PDF built from facts in files you already have.

**Why it works:** the document tools read the facts from your attached files, and the Document editor can fill a form even when it has no fillable fields. Both run in the same chat, so the facts carry straight into the form.

**You need:** any plan. Admin controls **File uploads** and **Run Python**.



1. Attach the blank form and the documents with the details.

   ```text
   /document Fill in the attached supplier onboarding form using the company details in @company-profile.pdf and the bank letter. Leave any field you can't source blank and list those fields for me.
   ```

2. Open the filled PDF and compare it with the sources — ask for corrections by field name.
3. Optional: select **Share file** on the result to give it a Page of its own that you can publish.



**Swap in:** a scanned form (Bearly reads it with text recognition first); a Word template instead of a PDF; several forms in one request, up to five output files.

**If it stalls:** if text lands in the wrong place on a form without fields, tell Bearly which field moved and ask it to render the page and check before returning it.

### Proofread a report, then publish it as Word and PDF

You get a corrected report as both an editable Word file and a PDF.

**Why it works:** Fix Grammar keeps your wording and applies only the changes you accept. The corrected text stays in the chat, so the Document editor can lay it out as files in one run.

**You need:** any plan. Admin control **Run Python** for the files.



1. Proofread first.

   ```text
   /grammar Paste your report text here.
   ```

2. Accept the changes you want, then select **Copy corrected text** and paste it into a new message with the next request.

   ```text
   /document Lay out this text as a two-page report with a title, headings, and page numbers. Return a DOCX and a PDF.
   ```

3. Download both files — choose **Original** for the DOCX.



**Swap in:** a slide deck instead of a report; [Edit in Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md#canvas) for a longer rewrite before proofreading; [email the files](https://bearly.ai/docs/manual/capabilities/email-and-text.md) to yourself.

**If it stalls:** for a long report, proofread one section per message so each passage keeps its context.

## Related

- [Analyze data and run code](https://bearly.ai/docs/manual/capabilities/data-and-code.md)
- [Make Pages and edit in Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md)
- [Projects](https://bearly.ai/docs/manual/projects.md)
- [Privacy and security](https://bearly.ai/docs/manual/privacy-and-security.md)

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Learn from YouTube, online video, and posts on X](https://bearly.ai/docs/manual/capabilities/videos-and-posts.md)
- [Next: Analyze data and run code](https://bearly.ai/docs/manual/capabilities/data-and-code.md)
- [Related: Write, attach, and send](https://bearly.ai/docs/manual/chat/compose.md)
- [Related: Make Pages and edit in Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md)
- [Related: Make images, video, and audio](https://bearly.ai/docs/manual/capabilities/images-video-audio.md)
- [Related: Organize, find, share, and export chats](https://bearly.ai/docs/manual/chat/organize.md)
