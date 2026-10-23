---
title: "Make images, video, and audio"
description: "How to generate and edit images, make and edit short videos, turn text into speech with Read aloud and Voice Studio, transcribe audio and video, and have Bearly look at images and video, with each tool's options, limits, and admin controls."
canonical: "https://bearly.ai/docs/manual/capabilities/images-video-audio/"
markdown: "https://bearly.ai/docs/manual/capabilities/images-video-audio.md"
---

# Make images, video, and audio

HTML: [https://bearly.ai/docs/manual/capabilities/images-video-audio/](https://bearly.ai/docs/manual/capabilities/images-video-audio/)

> How to generate and edit images, make and edit short videos, turn text into speech with Read aloud and Voice Studio, transcribe audio and video, and have Bearly look at images and video, with each tool's options, limits, and admin controls.

Bearly can make an image, animate it into a video, record a voiceover, transcribe a recording, and watch a clip to check it, all in one chat. Every result is a file in the chat, so the next step can use it. Bearly makes images and speech only when you ask for them.

To point a tool at a file that's already in the chat, type `@` and pick the file under **Assets**; typing the file name yourself doesn't select it. See [Compose messages](https://bearly.ai/docs/manual/chat/compose.md).

| You want | Tool | Type |
| --- | --- | --- |
| A new image from a description | [Imagine](#imagine) | `/image` |
| A change to an image, an edited area, wider edges, or a combined image | [The image editor](#the-image-editor) and Touch Up | `/edit-image` |
| A short video from text or an image | [Make Video](#make-video) | `/video` |
| A change to a short clip | [Edit Video](#edit-video) | `/edit-video` |
| Spoken audio from text | [Text to speech](#text-to-speech) | `/say` |
| Text from speech in a recording | [Transcribe](#transcribe) | `/transcribe` |
| Bearly to look at an image or watch a video | [View Media](#view-media) | `/analyze-media` |

## Imagine

Imagine generates an image from your description. The result opens in an image editor inside the answer, where you can keep iterating.

**Use it when:** you need a product shot, an illustration for a post, a mockup, a mood board image, or a starting frame for a video.

**You need:** any plan; every image run counts as usage. Admin control: **Images** (under **Media & Creativity**). Works in the web app, phone browsers, the desktop app, and the iOS app.



1. Describe the image — name the subject, composition, setting, medium, colors, and light.

   ```text
   /image A matte black water bottle on wet slate, soft overcast light, shallow depth of field, studio product photo.
   ```

2. Review the result in the editor — Bearly picks a model unless you name one.
3. Iterate in the editor or in the chat — see [The image editor](#the-image-editor).



**What you get:** an image in the chat with **Copy image**, **Download**, and **View full size**. In full view, zoom with <kbd>+</kbd> and <kbd>-</kbd>, reset the zoom with <kbd>0</kbd>, move between images with the arrow keys, and close with <kbd>Esc</kbd>.

**Limits:** there's no size or aspect-ratio setting; the output shape depends on the model. When Bearly runs an image request from the chat and the model's service fails, it switches to a backup model.

## The image editor

The latest image answer in the chat holds the image editor, and its thumbnail strip shows the chat's images. Earlier image answers show **Go to latest image edit** so you can jump to it.

**Use it when:** you want to compare models on one prompt, change part of an image, widen a shot, or merge a product into a scene.

**You need:** the same as Imagine. In a read-only chat the editor is visible but disabled.

Choose an action at the top of the editor:

| Action | What it does |
| --- | --- |
| **Create image** | Makes a new image from the prompt |
| **Edit image** | Changes the selected image as you describe |
| **Change area** | Changes only a part you select: drag a rectangle over the image, or use **Select center**. The × clears the selection |
| **Extend edges** | Widens the image by 25% of its width or height on every side and fills the new space |
| **Combine images** | Blends two or more source images, such as a room and a product |



1. Pick an action and type in the prompt box — it reads "Describe the image you want to create…" or "What would you like to change?". For edits, say what changes and what stays.
2. Optional: select **Refine** for a better-worded prompt, then **Use this** or **Dismiss** — Refine reads only your text, not the images.
3. Add sources with **Upload** ("Upload images") in the thumbnail strip, or select a result in the strip to work on it.
4. Run it — select a featured model (**Good**, **Fast**, or the third suggestion; **Fast** isn't offered for **Change area** or **Extend edges**), pick any model from **All models** ("Run with a model", "One image per click"), or reuse one under **Recent**.



Each click starts its own run, so you can start several models at once and compare. Unfinished thumbnails show **Running**, **Pending**, **Failed**, or **Canceled**; select one for **Cancel run**, **Try again**, or **Dismiss**. **Re-run** repeats a result's original instructions and inputs. A click runs exactly the model you chose, with no automatic retry.

**Limits:** only some models support **Change area** and **Extend edges**, and the editor marks the others with "No area edits". Models are also marked "Edits only", "Create only", "One input image", or "Up to N input images" when they can't do the current action. For area edits, the model uses your selection as a guide; it isn't guaranteed to leave every other pixel untouched.

To edit from the chat instead, type `/edit-image` (**Touch Up**) and describe the change. If the chat has several images, type `@` and pick the one you mean under **Assets**.

```text
/edit-image Make the background of the bottle photo a warm sunset and keep the bottle exactly as it is.
```

**Combines with:** [Make Video](#make-video), which can use any image in the chat as its first or last frame, and [Pages](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md) for a gallery.

## Make Video

Make Video generates a short video with sound, from a description alone or by animating an image.

**Use it when:** you need a short social clip, a product teaser, an animated version of an image, or a moving background for a presentation.

**You need:** any plan; usage is counted by the second of video, and higher resolution costs more. Admin control: **Video** (under **Media & Creativity**).



1. Describe the shot, motion, and sound — put any dialogue in quotes.

   ```text
   /video An 8-second vertical video of a lighthouse at dusk, slow push-in, waves and gulls in the background.
   ```

2. Optional: pick an image in the chat with `@` as the start frame, and another as the end frame — an end frame needs a start frame.

   ```text
   /video Animate the bottle photo: rain starts falling and the camera slowly circles the bottle. 6 seconds.
   ```

3. Watch the result in the player.



**What you get:** a video card with your prompt in italics, followed by the model name, length, resolution, and **Audio**. The player has **Play video** / **Pause video**, **Mute video** / **Unmute video**, and **Download video**, which saves an MP4.

**Options:**

- **Length:** 4 to 15 seconds. The default is 5.
- **Resolution:** standard 768p by default, or 2K, which costs more.
- **Shape:** 16:9 by default, 9:16, or 1:1. With a start image, the video keeps the image's shape.
- **Sound:** every video includes generated sound.

**Limits:** each attempt counts separately, and a failed attempt isn't retried on another model. On failure you'll see "The video model could not finish this request. Try again later."

## Edit Video

Edit Video changes a short clip you attach or one Bearly made, and saves the result as a new clip.

**Use it when:** you want to change an existing short clip by describing the edit, instead of generating a new video.

**You need:** any plan; usage is counted by the second. Admin control: **Video**.



1. Attach the clip, or pick one already in the chat with `@`.

   ```text
   /edit-video Turn the harbor clip into a snowy winter morning. Keep the boats and camera move the same.
   ```

2. Watch the new clip — it's badged **Edited**, and your source stays unchanged.



**Options:** the original sound is kept by default. Resolution is 1080p by default, or 720p or 4K.

**Limits:** use a source clip 3 to 10 seconds long. Files over 50 MB are refused.

## Text to speech

Bearly can read any text answer aloud and make downloadable voice recordings in Voice Studio.

### Read aloud

Under any answer that's all text, select the speaker icon (**Read aloud**) to hear it in a standard voice. To use your own choice of voice and delivery instead, turn on **Use for Read Aloud** in Voice Studio.

### Voice Studio

Voice Studio is where you write a script, pick a voice, direct the delivery, and record takes. It appears in the chat as a panel headed **Voice** ("Make audio from this chat").

**Use it when:** recording a video voiceover, a podcast intro, an audiobook passage, an announcement, a calm wind-down script, or listening to your own draft to catch problems.

**You need:** any plan; samples, takes, and comparisons all count as usage. Admin control: **Text to speech** (under **Media & Creativity**). The same control turns off **Read aloud**.



1. Type `/say` with the text, or ask Bearly to read something aloud — Bearly records a first take and opens the studio. Ask for the studio without giving any text and it opens without recording. `/tts` and `/texttospeech` work too.

   ```text
   /say Welcome to the quarterly update. Three things changed this quarter, and all three are good news.
   ```

2. Pick what you're making under "What are you making?": **Video voiceover**, **Podcast intro**, **Audiobook**, **Proofread by ear**, **Announcement**, or **Wind-down** — each preset picks an engine, three suggested voices, and a delivery.
3. Edit the script — the box reads "Write a script, or start from the conversation above…". **Use reply** and **Use my message** fill it from the chat. A counter shows the characters and an estimated length.
4. Choose a voice under **Cast** — select ▶ on a card to hear it read your opening line. Suggested voices are marked with a dot.
5. Direct the delivery — type it ("Direct the delivery, e.g. warm and unhurried") or pick "Warm and calm", "Bright and upbeat", "Clear and measured", "Dramatic", or "Whispered".
6. Select **Generate** (or press <kbd>⌘</kbd> <kbd>Enter</kbd> in the script box, <kbd>Ctrl</kbd> <kbd>Enter</kbd> on Windows and Linux) for one take, or **Compare 3** to record the script in your chosen voice and two others at once; after you pick a preset, those are its three suggested voices. When the studio is collapsed, **Hear this reply** records the latest answer.



**What you get:** takes in a player that highlights words as they play, with **Download audio**. Older takes are under **Earlier takes**. Each take is also saved as an audio file in the chat (`.wav` or `.mp3`), so later steps can use it.

**Limits:** Voice Studio appears on the latest text-to-speech result in the chat; earlier results show a plain player. The word highlighting uses estimated timing. A failed recording isn't retried automatically; when a recording you asked for in the chat fails, you'll see "The audio could not be created." In read-only chats you get plain players only. The studio's model switch picks the voice engine, such as **Fast** or **Studio**.

## Transcribe

Transcribe turns speech in audio and video files into text with speaker labels and timestamps, and saves a subtitle file you can reuse.

**Use it when:** you have an interview, lecture, podcast, voice memo, or recorded call as a file and want quotes, a summary, action items, or subtitles.

**You need:** any plan. Admin control: **Transcription** (under **Media & Creativity**).



1. Attach one or more audio or video files — Bearly can transcribe several in one request.
2. Type `/transcribe`, or just ask about what was said — Bearly transcribes before it summarizes or answers questions about a recording.

   ```text
   /transcribe Transcribe the attached interview and name the speakers if you can tell who they are.
   ```

3. Read the transcript in the viewer — switch between **Captions** and **Table**, adjust **Density**, and type names for the speakers in the boxes under the transcript. Press play to follow along ("Play to begin").



**What you get:** a transcript viewer, with previous and next buttons when you sent several files, and **Download subtitles**, which saves `AudioSubtitles.srt`. Bearly also saves each transcript in the chat as a subtitle file named after the original, such as `interview transcript.srt` for `interview.mp3`, so later messages and tools can read it. Bearly suggests speaker names from what's said in the recording, and you can change them.

**Limits:** each file can be up to 300 MB, the limit for any chat file. There's no language picker. If some files fail you'll see "Some assets could not be transcribed". Asking about the same file again reuses its transcript.

For live recording with a running transcript, use [Meetings and Recordings](https://bearly.ai/docs/manual/capabilities/meetings.md).

## View Media

View Media lets Bearly look at images and watch video files in the chat, including images from much earlier in a long conversation.

**Use it when:** checking a generated video for mistakes, describing a chart screenshot, reading a whiteboard photo, or comparing two product images.

**You need:** any plan.



1. Type `/analyze-media` (**View Media**) and say which file, picking it with `@` if the chat has several, or just ask Bearly to look.

   ```text
   /analyze-media Watch the demo video and list every moment where the on-screen text doesn't match the voiceover, with timestamps.
   ```



**What you get:** a written answer about what's in the image or video.

**Limits:** Bearly watches up to 10 minutes of video per look and takes longer videos in sections. When it can't watch a video directly, it samples timestamped frames and pairs them with a transcript.

## Controls and model settings

- Organization admins turn these tools on or off with **Images**, **Video**, **Text to speech**, and **Transcription** under **Media & Creativity**. See [Organizations](https://bearly.ai/docs/manual/organizations.md).
- **Zero Data Retention only** applies to chat models. It doesn't filter the image, video, transcription, or text-to-speech models, and organization model allow-lists don't apply to them either. With it on, text to speech starts from a different default voice engine. See [Privacy and security](https://bearly.ai/docs/manual/privacy-and-security.md).
- [Routines](https://bearly.ai/docs/manual/capabilities/routines.md) can't generate images or video, run text to speech, or transcribe.

## Try this

Each recipe runs in one chat.

### Product shot to a narrated video in one MP4

You get a product image, an animated clip made from it, a recorded voiceover, and one MP4 with both.

**Why it works:** every result is a file in the chat. Make Video takes the generated image as its start frame, Voice Studio saves the narration as an audio file, and Run Python can merge the two with ffmpeg, which the sandbox includes.

**You need:** any plan. Admin controls **Images**, **Video**, **Text to speech**, and **Run Python**.



1. Make the image.

   ```text
   /image A matte black water bottle on wet stone, rain in the air, moody product photography.
   ```

2. Animate it — check the video's length badge before you write the script.

   ```text
   /video Animate the bottle image into an 8-second video with a slow push-in and rain sounds.
   ```

3. Record the voiceover — pick **Video voiceover** in Voice Studio and **Generate** until a take fits.

   ```text
   /say Rain or shine, it keeps your water cold for twenty-four hours.
   ```

4. Merge them.

   ```text
   /python Put the latest voiceover onto the video as one MP4. Lower the video's own sound under the voice. Keep the length of the video.
   ```



**Swap in:** skip the image and describe the whole shot in `/video` when you need a set shape, such as 16:9 for a presentation (an animated image keeps the image's shape); **Combine images** to place the product in a room before animating; **Edit Video** to change the scene before merging.

**If it stalls:** Python runs are short and resource-limited, so keep the clip short and the resolution standard. If the voice runs longer than the video, shorten the script and record a new take.

### Burn subtitles into a video

You get your video with captions drawn onto the picture, ready for platforms that play muted.

**Why it works:** Transcribe saves the transcript as an `.srt` subtitle file in the chat, and Run Python can pass both the video and that file to ffmpeg.

**You need:** any plan. Admin controls **Transcription** and **Run Python**.



1. Attach the video and transcribe it — Bearly saves the transcript as an `.srt` file in the chat.

   ```text
   /transcribe Transcribe the attached clip.
   ```

2. Burn in the captions.

   ```text
   /python Burn the transcript .srt for this clip into the video as white captions with a dark outline at the bottom. Return an MP4.
   ```



**Swap in:** a clip from Make Video instead of your own; **Download subtitles** to upload captions to a video platform separately instead of burning them in.

**If it stalls:** long or high-resolution videos may be too heavy for one Python run; trim the clip first or split it into parts.

### Turn a podcast episode into a 60-second spoken recap

You get a short summary of the episode's main points, recorded in a voice you choose.

**Why it works:** Transcribe saves the episode's text in the chat, Bearly summarizes from it, and text to speech records the summary as a take.

**You need:** any plan. Admin controls **Transcription** and **Text to speech**.



1. Attach the episode and ask.

   ```text
   Transcribe the attached episode, write a 60-second summary of the three main arguments, and read it aloud in a warm podcast-host voice.
   ```

2. Adjust in Voice Studio — pick **Podcast intro**, then **Compare 3** to record the summary in its three suggested voices, and **Download audio** on the take you like.



**Swap in:** a meeting from [Meetings and Recordings](https://bearly.ai/docs/manual/capabilities/meetings.md), where **Add to chat** brings its transcript into the chat so you can skip transcribing; [email](https://bearly.ai/docs/manual/capabilities/email-and-text.md) the audio to yourself.

**If it stalls:** attached files can be up to 300 MB; for a longer episode, export a smaller audio-only copy first.

### Watch a generated clip and fix what's wrong

You get a corrected clip after Bearly reviews its own video.

**Why it works:** View Media lets Bearly watch any video in the chat, and Edit Video works on clips of 3 to 10 seconds under 50 MB, which covers generated clips of 10 seconds or less.

**You need:** any plan. Admin control **Video**.



1. Make the clip with `/video`.
2. Ask for a review and a fix.

   ```text
   Watch the clip and list anything inconsistent, such as objects that change or appear from nowhere. Then fix the worst one with Edit Video.
   ```

3. Compare the original and the clip badged **Edited**.



**Swap in:** your own phone video, as long as it's 3 to 10 seconds and under 50 MB; ask for a new clip with `/video` when the problem is the whole shot.

**If it stalls:** if the clip is longer than 10 seconds, trim it to 10 seconds or less with Run Python first.

## Related

- [Record and use meetings](https://bearly.ai/docs/manual/capabilities/meetings.md)
- [Talk to Bearly: dictation and voice calls](https://bearly.ai/docs/manual/chat/voice.md)
- [Analyze data and run code](https://bearly.ai/docs/manual/capabilities/data-and-code.md)
- [Creative recipes](https://bearly.ai/docs/manual/combine/creative-recipes.md)

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Make Pages and edit in Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md)
- [Next: Record and use meetings](https://bearly.ai/docs/manual/capabilities/meetings.md)
- [Related: Write, attach, and send](https://bearly.ai/docs/manual/chat/compose.md)
- [Related: Run Bearly for an organization](https://bearly.ai/docs/manual/organizations.md)
- [Related: Privacy and security controls](https://bearly.ai/docs/manual/privacy-and-security.md)
- [Related: Automate with Routines](https://bearly.ai/docs/manual/capabilities/routines.md)
