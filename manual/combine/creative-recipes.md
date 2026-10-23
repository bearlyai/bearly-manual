---
title: "Recipes for writing, content, and media"
description: "Step-by-step recipes that chain Bearly's image, video, text-to-speech, transcription, YouTube, grammar, and Run Python tools to make narrated clips, product visuals, show notes, trailers, quote cuts, and proofread drafts in one chat."
canonical: "https://bearly.ai/docs/manual/combine/creative-recipes/"
markdown: "https://bearly.ai/docs/manual/combine/creative-recipes.md"
---

# Recipes for writing, content, and media

HTML: [https://bearly.ai/docs/manual/combine/creative-recipes/](https://bearly.ai/docs/manual/combine/creative-recipes/)

> Step-by-step recipes that chain Bearly's image, video, text-to-speech, transcription, YouTube, grammar, and Run Python tools to make narrated clips, product visuals, show notes, trailers, quote cuts, and proofread drafts in one chat.

These recipes chain Bearly's image, video, audio, transcription, and writing tools. Each tool saves what it makes as a file in the chat (an image, a video, an audio take, a transcript), and the next tool picks that file up, so you can go from one picture to a narrated clip, or from an episode to show notes and a trailer, without leaving the chat. Each image, video, and audio run uses your plan allowance. For what each block takes in and gives back, see [Building blocks](https://bearly.ai/docs/manual/combine/building-blocks.md).

## Make a narrated product clip from one image

You get a generated product image, a short video animated from it, a recorded voiceover, and one MP4 with the voiceover laid over the video.

**Why it works:** **Imagine** saves each image as a file in the chat. **Make Video** can use any image file in the chat as its first frame, and every video it makes includes generated sound. A `/say` take is saved as an audio file. Run Python takes chat files as inputs, has video tools installed, and saves its output back to the chat, so it can combine the two files into one.
**You need:** Any plan. Any platform. Organization controls: **Images**, **Video**, **Text to speech**, and **Run Python**.



1. Make the image:

   ```text
   /image A matte black insulated water bottle standing on wet slate, soft morning side light, shallow depth of field, vertical product photo.
   ```

   — The image opens in an editor inside the answer. To compare, run other models from the editor's buttons (**Fast**, **Good**, or **All models**); each click makes one more image.

2. Animate it:

   ```text
   /video Animate that image into an 8-second video: slow push-in, light rain starting, drops running down the bottle.
   ```

   — Make Video uses the image as the first frame, so the clip keeps the image's shape. The video card shows its length and "Audio". Play it before you go on.

3. Record the voiceover:

   ```text
   /say Write a 20-word voiceover for this clip and record it in a calm documentary voice.
   ```

   — Bearly writes the line and records it as an audio file. The **Voice** studio opens below it. For another take, choose **Video voiceover** under "What are you making?", try voices, and select **Generate**. Each take is saved as its own audio file in the chat.

4. Combine them:

   ```text
   /python Merge the voiceover onto the video as one MP4. Keep the rain sound underneath at low volume and start the voice at 1 second.
   ```

   — A **Run Python** step saves the merged MP4 as a file in the chat. Play it there or download it. If you made several takes, type `@` and pick the one you want under **Assets** so Bearly uses that file.



**Swap in:**
- **Your own photo for Imagine:** attach a product photo and start at step 2 with "Animate the attached photo…".
- **An end frame:** name a second image as the last frame. Make Video then animates from the first image to the second.
- **Subtitles:** send `/transcribe` on the merged clip, then select **Download subtitles** in the transcript viewer for an `.srt` file to upload with the clip.
- **A fix pass:** ask "Watch the clip and list anything inconsistent." Bearly views the video, and `/edit-video` can change a clip of 3 to 10 seconds under 50 MB.

**If it stalls:**
- Make Video doesn't retry on its own, and every attempt counts as usage. If one fails ("The video model could not finish this request. Try again later."), ask again or change the prompt.
- Videos run 4 to 15 seconds. If the voiceover is longer than the clip, ask for a shorter script or a longer video.
- Run Python runs are time-limited, so keep merges to short clips.

## Turn a talk into quotes, a short cut, and a spoken recap

From one YouTube link you get the three strongest arguments with exact quotes and timestamps, a cut that plays only those moments, and an audio recap you can download.

**Why it works:** A YouTube link opens a video card, and Bearly can look up the transcript by time or by words, so quotes come with timestamps. A cut plays chosen ranges inside the same player. `/say` turns text into an audio file in the chat, and the **Voice** studio lets you choose the voice and delivery.
**You need:** Any plan. Web app, phone browser, or desktop app. Organization controls: **YouTube**, **Web**, **Text to speech**, and **File uploads** (the transcript is saved as a file). The video needs readable captions for exact quotes.



1. Paste the link with your request:

   ```text
   https://www.youtube.com/watch?v=VIDEO_ID Give me the three strongest arguments in this talk, each with an exact quote and its timestamp.
   ```

   — The video card opens, and Bearly answers with quotes you can check in the card's **Transcript** tab.

2. Cut to those moments:

   ```text
   Make a cut of just those three moments.
   ```

   — A cut card plays those ranges back to back. A cut doesn't create a new video file.

3. Record the recap:

   ```text
   /say Write a 45-second recap of the three arguments for someone who hasn't seen the talk, and record it.
   ```

   — Bearly writes and records the recap as an audio file, and the **Voice** studio opens below it. For a different voice, choose **Podcast intro** or **Audiobook**, try voices, and select **Generate**. Select **Download audio** on the take you want.



**Swap in:**
- **Ready-made cuts:** on a long enough video, the card offers 2, 5, and 10-minute cuts. Pick one of those instead of a custom cut.
- **Several talks:** paste up to three links in one message and ask which one makes the strongest case.
- **A Page for the audio:** ask for a Page that lists each quote with its timestamp and a one-line comment, then publish it (needs **Sharing**).
- **Check the numbers first:** if the talk leans on figures, select **Check claims** on the card before step 3. See [Check a video's figures against the research literature](https://bearly.ai/docs/manual/combine/research-recipes.md#check-a-videos-figures-against-the-research-literature).

**If it stalls:** Without readable captions, Bearly watches the video instead (up to its first 90 minutes), so times are approximate and there are no exact quotes. In the desktop app, **Get transcript** in the card's **Transcript** tab can fetch a transcript. Each range in a cut must be at least 5 seconds long.

## Turn an episode into show notes, subtitles, and a trailer

From one audio or video file you get a speaker-labeled transcript, show notes with chapter times and pull quotes, a subtitle file, and a recorded trailer.

**Why it works:** **Transcribe** times every word, shows each speaker in its viewer, and saves the transcript as an `.srt` file in the chat, so later messages can quote it with times. `/say` records any text as an audio file.
**You need:** Any plan. Any platform. Organization controls: **Transcription**, **Text to speech**, and **File uploads**.



1. Attach the episode and send:

   ```text
   /transcribe Transcribe this episode.
   ```

   — The transcript viewer opens with **Captions** and **Table** views and a name box for each speaker, so you can type who is who. A transcript `.srt` file is saved in the chat.

2. Write the show notes:

   ```text
   Write show notes: a two-sentence summary, chapters with start times, and three pull quotes with exact timestamps.
   ```

   — Bearly works from the transcript.

3. Record a trailer:

   ```text
   /say Write a 20-second trailer built around the best pull quote and record it.
   ```

   — The take is saved as an audio file. In the **Voice** studio, choose **Podcast intro**, then select the **Compare** button (it shows how many voices it will record) to hear the same script in the preset's suggested voices at once.

4. In the transcript viewer, select **Download subtitles**. — You get an `.srt` subtitle file to upload with the video.



**Swap in:**
- **A meeting recording for the episode:** record in **Meetings and Recordings**, select **Add to chat**, and start at step 2 with the transcript file attached (needs **Meetings**).
- **An article:** ask for a 600-word article from the transcript, then send it through `/grammar` to proofread it.
- **A video from a link:** send `/download-video` with a public video's link to save it in the chat, then transcribe it. YouTube downloads need the desktop app.

**If it stalls:** Files over 400 MB can't be transcribed, so split long recordings. If one of several files fails, Bearly says "Some assets could not be transcribed" and keeps the others.

## Turn one product photo into a banner and a short video

You place your product into a new scene, change one part of it, widen it for a banner, and animate it into a clip.

**Why it works:** The image editor that opens with an image answer can combine images, change a selected area, and extend the edges. Each result is an image file in the chat, which **Make Video** can use as its first frame.
**You need:** Any plan. Any platform. Organization controls: **Images**, **Video**, and **File uploads**. **Change area** and **Extend edges** need a model that accepts a selected area; models that can't show "No area edits".



1. Attach your product photo and a photo of the setting, then send:

   ```text
   /edit-image Combine these: put the lamp from the first photo on the desk in the second photo, matching the warm evening light.
   ```

   — **Touch Up** blends the two, and the result opens in the image editor.

2. In the editor's thumbnail strip, select the combined image. Choose **Change area**, drag a rectangle over the wall behind the desk (or use **Select center**), and type:

   ```text
   Replace this with a bookshelf, slightly out of focus.
   ```

   — Run it with a model that doesn't show "No area edits". The edit targets the selected area.

3. Select the new image in the thumbnail strip, choose **Extend edges**, describe what should fill the new space (for example, "continue the room and the desk"), and run it with a model that doesn't show "No area edits". — Bearly adds a quarter of the image's width or height on every side for the model to fill, leaving room for banner text.

4. Animate the final image:

   ```text
   /video Animate the latest image into a 6-second video: the lamp switches on and its light warms the room.
   ```

   — Make Video starts from that image, so the clip keeps its shape.



**Swap in:**
- **Imagine for the setting photo:** make the scene first with `/image`, then combine your product into it.
- **Several models at once:** each model button starts its own run, so you can compare results side by side in the thumbnail strip.
- **A better prompt:** select **Refine** in the editor for a suggested rewrite, then **Use this**.
- **A different shape of video:** the clip follows the starting image, so to get a vertical clip, start from a vertical image.

**If it stalls:** A failed run's thumbnail reads "Failed"; select it, then **Try again**. Editor runs use exactly the model you chose and don't switch to another. If a model can't take several images, it says "One input image" or "Up to N input images".

## Go from a mood board to an original concept image

You see real examples of a style from the web, then get a new image based on the one you pick.

**Why it works:** Image Search shows a gallery of web images with their source pages, but Bearly hasn't looked at the images themselves. When you ask it to use one, it saves that image into the chat with Read Site, where it becomes a file that **Touch Up** can use as a reference.
**You need:** Any plan. Any platform. Organization controls: **Image search**, **Web**, **Chat web search**, and **Images**. The chat's **Web** setting on **Auto**.



1. Search for examples:

   ```text
   /image-search Show me examples of brutalist concrete desk lamps.
   ```

   — A gallery shows the first 8 images (expand for up to 20). Each tile has a preview, download, and a link to its source page.

2. Pick one to build on:

   ```text
   Use the third image as a reference and make a warmer product-photo version in pale oak on a plain background.
   ```

   — Bearly saves the third image into the chat, and Touch Up makes the new image in the editor.

3. Make variations:

   ```text
   Make two more versions: one in dark walnut, one in white ceramic.
   ```

   — Each version opens as a new image you can edit further.



**Swap in:**
- **Your sketch for the search:** attach a sketch and ask Touch Up to render it in the style of the saved image.
- **Video for a still:** animate the final image with `/video`.
- **Your own photo for a web image:** attach a photo of your product as a second reference, and say which image sets the style and which shows the product.

**If it stalls:** If the gallery doesn't appear, check that **Web** is on **Auto** in the sliders menu. With **Web** off, the chat can't search images or save one with Read Site. Images from a search belong to their owners; open the source page before you use one beyond reference.

## Hear your draft before you send it

You fix grammar and style in a draft, then listen to it to catch what reading misses.

**Why it works:** **Fix Grammar** marks each issue with an explanation, lets you accept changes one at a time or all at once, and copies the corrected text. `/say` with nothing after it opens the **Voice** studio, whose **Proofread by ear** preset sets a voice and delivery for checking writing.
**You need:** Any plan. Any platform. Organization control: **Text to speech**.



1. Check the draft:

   ```text
   /grammar [paste your draft]
   ```

   — A grammar editor marks each issue by category and severity. Select **Accept All** or accept items one at a time, then **Copy corrected text**.

2. Open the studio:

   ```text
   /say
   ```

   — The **Voice** studio opens below the message without recording anything.

3. Paste the corrected text into the script box, choose **Proofread by ear**, and select **Generate**. — Play the take; words are highlighted as they're read. Fix anything that sounds wrong and generate again.



**Swap in:**
- **Use reply for pasting:** if Bearly wrote the draft, select **Use reply** in the studio instead of pasting.
- **Read aloud for the studio:** for a quick listen, select **Read aloud** under any answer that's all text.
- **Your studio voice everywhere:** turn on **Use for Read Aloud** in the studio so **Read aloud** uses the studio's voice and delivery.
- **Canvas for a long draft:** select **Edit in Canvas** under an answer, select a passage, and use "Ask AI about this text..." to rewrite just that part before step 1.

**If it stalls:** Bearly doesn't retry a failed take, because audio may already have been made. Select **Generate** again.

## Related

- [Images, video, and audio](https://bearly.ai/docs/manual/capabilities/images-video-audio.md) for every media tool, its options, and its limits
- [Videos and posts](https://bearly.ai/docs/manual/capabilities/videos-and-posts.md) for YouTube and X
- [Meetings](https://bearly.ai/docs/manual/capabilities/meetings.md) for recording and transcripts
- [Data and code](https://bearly.ai/docs/manual/capabilities/data-and-code.md) for Run Python

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Recipes for research and analysis](https://bearly.ai/docs/manual/combine/research-recipes.md)
- [Next: Recipes for founders, sales, and operations](https://bearly.ai/docs/manual/combine/business-recipes.md)
- [Related: Building blocks: how Bearly's features connect](https://bearly.ai/docs/manual/combine/building-blocks.md)
- [Related: Make images, video, and audio](https://bearly.ai/docs/manual/capabilities/images-video-audio.md)
- [Related: Learn from YouTube, online video, and posts on X](https://bearly.ai/docs/manual/capabilities/videos-and-posts.md)
- [Related: Record and use meetings](https://bearly.ai/docs/manual/capabilities/meetings.md)
