---
title: "Learn from YouTube, online video, and posts on X"
description: "How to open, summarize, cut, quote, and fact-check YouTube videos in Bearly, save videos from YouTube and other sites into a chat with Get Video, and search and read public posts, threads, videos, and profiles on X."
canonical: "https://bearly.ai/docs/manual/capabilities/videos-and-posts/"
markdown: "https://bearly.ai/docs/manual/capabilities/videos-and-posts.md"
---

# Learn from YouTube, online video, and posts on X

HTML: [https://bearly.ai/docs/manual/capabilities/videos-and-posts/](https://bearly.ai/docs/manual/capabilities/videos-and-posts/)

> How to open, summarize, cut, quote, and fact-check YouTube videos in Bearly, save videos from YouTube and other sites into a chat with Get Video, and search and read public posts, threads, videos, and profiles on X.

Paste a YouTube link and Bearly opens the video in a card with a verdict, a summary, chapters, shorter cuts, and a transcript it can quote. Get Video saves videos from YouTube and other sites into the chat as files, and the X tools search and read public posts. None of these post, comment, or like anything for you.

## Which tool for which job

| Your job | Use | Start it |
| --- | --- | --- |
| Decide whether a video is worth your time, or get its substance | [YouTube viewer](#youtube-viewer) | Paste a YouTube link, or `/youtube` |
| Quote exactly what was said, with the time | [Transcript lookup](#ask-about-the-video) | Ask after the video opens |
| Watch only the part that matters | [Cuts](#watch-a-shorter-cut) | **2 min**, **5 min**, **10 min**, or ask for "just the part about…" |
| Look up the papers, books, and tools a video names | [Mentioned and Find](#look-up-what-a-video-mentions) | **Mentioned** tab → **Find** |
| Check the figures a video states against the web | [Check claims](#check-the-figures-a-video-states) | **Insights** tab → **Check claims** |
| Save a video file to the chat | [Get Video](#get-video) | Ask to download it, or `/download-video` |
| See what people on X are saying | [Search X](#search-x) | Ask, or `/search-x` |
| Read one post with its replies and quote posts | [Read X Post](#read-x-post) | Paste the post link, or `/read-x` |
| Understand a video attached to a post | [View X Video](#view-x-video) | Ask Bearly to watch it |
| Learn who is behind an account | [Read X Profile](#read-x-profile) | Ask, or `/x-profile` |

## YouTube viewer

A YouTube link in a message opens a video card in Bearly's reply: the player, a verdict (**Watch**, **Skim**, or **Skip**), the summary and chapters, takeaways, what the video names, what the comments add, the transcript, and shorter cuts. Bearly's reply starts with the answer to your question. Send only the link and the reply says in one sentence whether the video is worth watching.

**Use it when:** you want to know whether to watch something, need the argument of a long talk in a few minutes, want exact quotes with timestamps, or want to check a video's numbers.

**You need:** any plan; opening a video uses your plan allowance like any reply. Admin controls: **YouTube** and **Web**. **Find** and **Check claims** also need **Chat web search**; without it, **Find** can still look up papers when Scholar is on. The saved transcript, a saved video, and a claims check are chat files, so they need **File uploads** and a chat you can edit.



1. Paste a YouTube link, alone or with a question — the card appears as soon as Bearly starts reading, so you can play the video while the tabs fill in.

   ```text
   https://www.youtube.com/watch?v=VIDEO_ID What are the three strongest arguments, and when are they made?
   ```

2. To make sure Bearly opens the video, start with `/youtube` — it's under **Tools** in the menu.

3. Ask follow-ups in the same chat — Bearly answers from what it already read and doesn't open the video again unless you ask for a refresh.



Watch pages, `youtu.be` links, Shorts, live streams, and embed links work, and a link with a start time plays from that time. Playlists, channels, and clips aren't supported. Bearly opens up to three videos from one message. Only one video plays at a time in a chat; starting another returns the first to its thumbnail.

**What you get:** a full-width card. **Key moments** marks the parts worth watching, and the tabs hold the rest. A tab with nothing to show is left out.

| Tab | What it holds |
| --- | --- |
| **Summary** | The substance in a few sentences, and the chapters |
| **Insights** | Takeaways with the moment each is said, quoted when the captions were read; **Check claims** starts here |
| **Claims** | The figures the video states and how many sites give the same or a different figure, after you run **Check claims** |
| **Mentioned** | Papers, books, code repositories, and tools the video names |
| **Community** | What the comment section agrees on, pushes back on, corrects, or adds |
| **Transcript** | The full transcript, with **Copy transcript** |
| **Steps** | For how-to videos, the steps to follow |

**Limits:** when Bearly can't read a video's captions, it watches the video instead, covers the first 90 minutes only, gives approximate times, and has no quotes. When your plan allowance is used up, **Find** and **Check claims** are off. **Download to play here** and **Get transcript** need the desktop app.

**Runs in:** the web app, phone browsers, and the desktop app. Routines: no. Council experts: they can look up the transcript and read a saved claims check of a video already opened in the chat.

**Combines with:** [Scholar](https://bearly.ai/docs/manual/capabilities/research.md#scholar) to test a video's claims against papers, and [Read Aloud](https://bearly.ai/docs/manual/capabilities/images-video-audio.md) to hear a recap. The full card guide: [YouTube](https://bearly.ai/docs/features/youtube.md).

### Ask about the video

Once the card is in the chat, Bearly looks up what was said by time range, by words, or both, from the saved transcript. Use it for exact quotes and for finding where a section starts and ends.

```text
What exactly does she say about pricing, and at what time?
```

The transcript is saved to the chat's files as a text file, so it's there on your other devices too. Search Docs doesn't index it; transcript lookup reads it.

### Watch a shorter cut

When a video is long enough, the card offers **2 min**, **5 min**, and **10 min** beside **Full video**. A shorter length plays the essential parts back to back inside the same player.

For a cut of your own, ask for it. Bearly adds a cut card for the parts you asked for, and **Play cut** plays them in order.

```text
Make a cut of just the parts about hiring.
```

A cut is a set of time ranges in the original video, never a new file. A custom cut can hold up to 24 ranges, each at least five seconds long.

### Look up what a video mentions

**Mentioned** lists up to 15 papers, books, code repositories, and tools the video names, each with the moment it's named. Anything named only in a sponsor read or an ad is left out.

Select **Find** beside a row to look it up: papers in the paper index first and then on the web, everything else on the web. Find only accepts a page that names the item, so it says **No match found.** rather than guess. A **Find** that searches the web uses your plan allowance.

### Check the figures a video states

**Check claims** lists the figures the video states, such as statistics, amounts, counts, and dates, and searches the web for each one. It needs the video's transcript.



1. Open the **Insights** tab and select **Check claims** — the **Claims** tab opens and fills in as each figure is checked. **Cancel** stops it.

2. Read the labels — each one counts sites in the search results: matched by several sites, found on one site, split, sites giving a different figure, or not found.

3. Select a label to see the sources — the words from the video, then each site's figure, its words, and a link.

4. If there are more figures, select **Check _N_ more** — each press checks up to 12 figures, and one check covers up to 40.



Check claims never says a figure is true or false. As the card puts it, "Not found doesn't mean wrong." The check is saved to the chat as a file, so it's still there after a reload and on your other devices. In later messages Bearly can read the saved check and explain it, but it can't run a check itself; only you can, from the card.

### When the captions or the player don't work

- **No captions read:** in the desktop app, open the card's **Transcript** tab (it shows **No transcript yet.**) and select **Get transcript**. Once saved, the transcript shows on your other devices and **Check claims** becomes available. If the video has no captions at all, the tab then says **This video has no captions.**
- **Video can't play in the card:** select **Open on YouTube**. In the desktop app, **Download to play here** saves a copy to the chat and plays it there; a chat file can be up to 300 MB.

## Get Video

Get Video saves videos from a link into the chat as MP4 files you can play and download. It works with YouTube (desktop app only), X, TikTok, Vimeo, Reddit, Twitch, and similar sites. Bearly uses it only when you ask for a download.

**Use it when:** you want a copy of a clip you have the right to keep, or you want to transcribe or analyze a video from a site other than YouTube.

**You need:** any plan. There's no admin control of its own; it needs **File uploads** and a chat you can edit. YouTube links need the desktop app and a chat that isn't end-to-end encrypted.



1. Type `/download-video` (it shows as **Get Video** under **Tools**) and paste the link to the video's own page, or ask in words — Bearly downloads the video and adds the file to the chat.

   ```text
   /download-video https://www.tiktok.com/@creator/video/1234567890
   ```

2. For several videos, paste up to three links — Bearly handles them one at a time, and the **Downloading video** step shows progress. In the desktop app it shows percentages.

3. Play the file in the chat, or download it from the chat's files.

4. Use it in the next message — for example, ask Bearly to transcribe it or to describe what happens in it.



**What you get:** a playable video file for each link that worked. When some links fail, the files that worked stay in the chat.

**Limits:** YouTube downloads need the desktop app and don't work in end-to-end encrypted chats. In an end-to-end encrypted chat, each saved video can be up to 100 MB. In the desktop app, downloads outside end-to-end encrypted chats run on your own connection, and most failures fall back to Bearly's servers. A site can refuse a download; paste the link to a single video page, and try one link at a time.

**Runs in:** the web app, phone browsers, the desktop app, and the iOS app; YouTube only in the desktop app. Routines: no. Council experts: no.

**Combines with:** **Transcribe** (`/transcribe`) and **View Media** (`/analyze-media`) in [Images, video, and audio](https://bearly.ai/docs/manual/capabilities/images-video-audio.md).

> **Caution — Download only what you may keep**
> Save a video only when you own it or have the right to keep a copy, and follow the site's terms.


## X

Bearly reads public X data. It can search recent posts, read a post with its thread and quote posts, watch a video attached to a post, and read a public profile. It's read-only: Bearly can't post, reply, like, follow, or bookmark, and can't read DMs or protected posts.

**Use it when:** you want to know what people are saying about a launch or an event, whether a viral post holds up, what a long thread says, or who is behind an account.

**You need:** any plan; X lookups use your plan allowance. Admin control: **X (Twitter)**. **View X Video** also needs **File uploads** and a chat you can edit.



1. Paste a post link, or ask about reactions in plain words — Bearly picks the X tool that fits.

   ```text
   What are people on X saying about the new Postgres release this week? Link the most-liked posts.
   ```

2. To choose a tool, use a label — `/search-x` (**Search X**), `/read-x` (**Read X Post**), or `/x-profile` (**Read X Profile**). **View X Video** has no label; ask Bearly to watch the video in a post.



**What you get:** a written answer that links the posts it uses. There's no card.

**Runs in:** the web app, phone browsers, the desktop app, and the iOS app. Routines: Search X, Read X Post, and Read X Profile, yes; View X Video, no. Council experts: no.

**Combines with:** [Web Search](https://bearly.ai/docs/manual/capabilities/research.md#web-search) to corroborate a post, and [Routines](https://bearly.ai/docs/manual/capabilities/routines.md) for a weekly scan.

### Search X

Search X covers posts from roughly the last seven days. It accepts X search operators, such as `from:username`, `"exact phrase"`, `lang:en`, and `-is:retweet`. It returns 20 posts by default and up to 100, sorted by most recent or most relevant, and can narrow to a time window inside that week and page for more.

```text
/search-x from:nasa "Artemis" -is:retweet — what did they announce this week?
```

### Read X Post

Read X Post brings in the post, its attached photos (Bearly looks at them), preview frames of any video, the text of an X article, its metrics, and the posts it references. It also fetches replies (up to 100 by default) and quote posts (20 by default). Top replies are ranked by likes among the replies Bearly fetched, not across all of X.

### View X Video

When motion, sequence, or sound matters, Bearly imports the video attached to a post into the chat as a file and watches it, analyzing up to 10 minutes per pass from frames and audio. For longer videos it works through successive ranges. It reads the post's preview frames first and imports only when they aren't enough.

### Read X Profile

Read X Profile returns an account's identity, public metrics such as follower counts, verification, profile links, and recent posts, plus recent mentions when you ask for them.

## Try this

Each recipe below runs in one chat. Steps show the exact prompt and what each one does.

### Pull a talk's best arguments, cut them, and hear a recap

You get the strongest points of a long talk with exact quotes, a short cut of just those parts, and a spoken recap.

**Why it works:** the YouTube viewer saves the transcript to the chat, so transcript lookup can quote exact words with their times. A cut plays chosen time ranges inside the same player, and **Read Aloud** (`/say`) turns the recap text into speech.

**You need:** any plan. Admin controls **YouTube**, **Web**, **File uploads**, and **Text to speech**. A video whose captions Bearly can read, or a transcript saved from the desktop app.



1. Open the video with your question — the card opens, and Bearly quotes from the transcript.

   ```text
   https://www.youtube.com/watch?v=VIDEO_ID Give me the three strongest arguments, each with an exact quote and timestamp.
   ```

2. Cut to those parts — Bearly adds a cut card; select **Play cut** to watch them back to back.

   ```text
   Make a 5-minute cut of just those three parts.
   ```

3. Get the recap as audio — Bearly writes the recap and generates speech from it.

   ```text
   Write a 60-second spoken recap of those arguments and read it aloud.
   ```



**Swap in:** run **Check claims** before you share the recap; ask `/scholar` what the research says about the second argument; ask Bearly to email you the recap ([email](https://bearly.ai/docs/manual/capabilities/email-and-text.md)).

**If it stalls:** if the answer has no quotes, Bearly watched the video because it couldn't read the captions; in the desktop app, use **Get transcript** in the **Transcript** tab, then ask again. If the video can't play in the card, select **Open on YouTube**, or **Download to play here** in the desktop app.

### Check a video's figures against the web, then the research

You get every figure a video states, how many sites agree with each, and what papers say about the disputed ones.

**Why it works:** **Check claims** saves its result to the chat, and Bearly can read that saved check in later messages. Scholar then searches papers about exactly the figures sites disagreed on.

**You need:** any plan with allowance left. Admin controls **YouTube**, **Web**, **Chat web search**, **File uploads**, and **Scholar**. A video with a transcript.



1. Open the video, then select **Insights** → **Check claims** — the **Claims** tab fills in; select **Check _N_ more** if the video states more than 12 figures.

   ```text
   https://www.youtube.com/watch?v=VIDEO_ID
   ```

2. Ask Scholar about the figures sites disagreed on — Bearly reads the saved check, then searches papers.

   ```text
   /scholar For the figures where sites disagreed or gave a different figure, what does the research literature say? Cite papers.
   ```



**Swap in:** ask Web Search for the official statistics instead of papers; select **Copy** in the **Claims** tab to keep the report; use `/deep-research` for a full investigation of the video's main claim (Analyst plan).

**If it stalls:** **Check claims** appears only when the video has a transcript, you have allowance, the chat is editable, and the admin controls above are on. "Not found" means no search result gave the figure, not that it's wrong.

### Turn a TikTok into a transcript and a priced product list

You get what a short video says, every product it mentions, and current prices for each.

**Why it works:** Get Video saves the video as a chat file, **Transcribe** turns its audio into text, and Web Search looks up each product from that text. Each step reads the file or text the step before it left in the chat.

**You need:** any plan. Admin controls **File uploads**, **Transcription**, and **Web**. A chat you can edit.



1. Save the video — Bearly downloads it as an MP4 into the chat.

   ```text
   Download this video: https://www.tiktok.com/@creator/video/1234567890
   ```

2. Transcribe it and pull out the products — Bearly transcribes the audio and lists what it names.

   ```text
   Transcribe it, then list every product it mentions with the time it's mentioned.
   ```

3. Price them — Web Search looks up each product and states the currency and where each price came from.

   ```text
   Find the current price of each product at a major US store, with links.
   ```



**Swap in:** for an X video, skip the download and ask Bearly to watch the video in the post; for a YouTube link, paste it for the viewer instead; ask `/bestpick` which of the products to buy (Pro plan).

**If it stalls:** if the download fails, paste the link to the video's own page rather than a profile or feed, one link at a time. YouTube downloads need the desktop app.

### Check whether a viral X post is real

You get the post's context, what its video shows, and whether news sources back up its claim.

**Why it works:** Read X Post brings the thread, quote posts, and photos into the chat; View X Video watches the attached clip; Web Search then corroborates the claim with sources outside X.

**You need:** any plan. Admin controls **X (Twitter)**, **Web**, and **File uploads**. The chat's **Web** setting on **Auto**.



1. Read the post in context — Bearly reads the post, its replies, and quote posts.

   ```text
   Is this real? https://x.com/username/status/1234567890 Check the thread and the quote posts first.
   ```

2. Watch the video — Bearly imports and watches the attached clip.

   ```text
   Watch the attached video. Describe what happens and anything that shows where or when it was filmed.
   ```

3. Corroborate outside X — Web Search looks for news coverage and cites it.

   ```text
   Corroborate the main claim with news sources from the last 48 hours and cite them.
   ```



**Swap in:** use `/x-profile` to check the account that posted it; use `/deep-research` for a longer investigation (Analyst plan); turn the check into a weekly scan of posts about your product with a [routine](https://bearly.ai/docs/manual/capabilities/routines.md), since Search X runs in Routines.

**If it stalls:** search reaches back about seven days, so paste the link to read a specific post. If Bearly can't watch the video, **File uploads** is off or the chat is read-only.

## Related

- [Research the web, papers, people, products, and places](https://bearly.ai/docs/manual/capabilities/research.md)
- [Images, video, and audio](https://bearly.ai/docs/manual/capabilities/images-video-audio.md)
- [Research recipes](https://bearly.ai/docs/manual/combine/research-recipes.md)

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Research the web, papers, people, products, and places](https://bearly.ai/docs/manual/capabilities/research.md)
- [Next: Work with files and documents](https://bearly.ai/docs/manual/capabilities/documents.md)
- [Related: Make images, video, and audio](https://bearly.ai/docs/manual/capabilities/images-video-audio.md)
- [Related: Watch and check YouTube videos](https://bearly.ai/docs/features/youtube.md)
- [Related: Automate with Routines](https://bearly.ai/docs/manual/capabilities/routines.md)
- [Related: Send email and texts](https://bearly.ai/docs/manual/capabilities/email-and-text.md)
