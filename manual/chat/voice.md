---
title: "Talk to Bearly: dictation and voice calls"
description: "How to speak to Bearly instead of typing, with push-to-talk dictation into the message box and live voice calls that can run actions, plus Read aloud, every Dictation and Voice setting, plan and platform requirements, and limits."
canonical: "https://bearly.ai/docs/manual/chat/voice/"
markdown: "https://bearly.ai/docs/manual/chat/voice.md"
---

# Talk to Bearly: dictation and voice calls

HTML: [https://bearly.ai/docs/manual/chat/voice/](https://bearly.ai/docs/manual/chat/voice/)

> How to speak to Bearly instead of typing, with push-to-talk dictation into the message box and live voice calls that can run actions, plus Read aloud, every Dictation and Voice setting, plan and platform requirements, and limits.

You can talk to Bearly in two ways. **Dictation** turns what you say into text in the message box, so you can check it before sending. A **voice call** is a live spoken conversation in which Bearly answers out loud and can run the chat's tools while you talk. **Read aloud** works the other way and plays an answer to you.

| You want | Use | Control |
| --- | --- | --- |
| To speak a message and review it before it's sent | [Dictation](#dictation) | Microphone icon in the top-right corner of the message box, or hold <kbd>Right Shift</kbd> |
| A back-and-forth conversation out loud, hands-free | [Voice call](#voice-calls) | **Start voice call** (sound-wave icon) next to Send |
| To hear an answer | [Read aloud](#read-aloud) | **Read aloud** under the answer |

## Dictation

Dictation is push-to-talk speech to text. Speak, and Bearly writes the words into the message box, optionally cleaning up punctuation and phrasing first.

**Use it when:** writing a long prompt faster than you can type, describing a problem while looking at something else, or capturing an idea mid-thought.

**You need:** any plan. Admin controls **Dictation** and **Cloud dictation** (under **Media & Creativity**). Works on the web app, phone browsers, the desktop app, and the iOS app.



1. Select the microphone icon in the top-right corner of the message box — the first time, it opens **Settings** → **Dictation**, because dictation starts off.
2. Turn on the switch at the top of the **Dictation** pane — the pane reads "Click the dictation button to start or stop. You can also hold Right Shift while you speak."
3. Back in the chat, select the microphone and speak — a rising tone plays, the icon becomes a filled square, and a strip at the top shows "Listening…" with your words as they come in.
4. Select it again to stop — a falling tone plays, and the text fills the message box.



To dictate without clicking, hold <kbd>Right Shift</kbd> while you speak and let go when you're done. A brief tap doesn't start it, and pressing any other key cancels. The shortcut works while the Bearly window is focused; there's no system-wide shortcut.

While dictation works, the strip shows its progress: "Preparing transcription…", "Opening microphone…", "Connecting to transcription…", "Listening…", "Finishing transcript…", and, with cleanup on, "Cleaning up with" the model's name.

**What you get:** your words in the message box, ready to edit and send, or sent straight away if you chose **Send immediately**.

**Limits:** a recording stops on its own after 10 minutes. If something goes wrong you'll see "Microphone access failed. Check your browser or system permission.", "Transcription is unavailable. Try again.", or "Dictation could not finish. Try again."

### Dictation settings

Open **Settings** → **Dictation** (in the **Chats** section). Settings sync across your devices.

| Setting | What it does | Default |
| --- | --- | --- |
| Switch at the top of the pane | Turns dictation on | Off |
| **Keyboard shortcut** ("Hold while Bearly is focused.") | The push-to-talk keys. Select the shortcut, then at "Press your shortcut" hold the keys you want (1 to 6 keys) and let go. The switch beside it turns push-to-talk off | <kbd>Right Shift</kbd> |
| **After dictation** | **Fill the composer** puts the text in the message box. **Send immediately** sends it as a normal message, with all the chat's tools | **Fill the composer** |
| **Transcript cleanup** ("Fix punctuation and phrasing with a fast, low-reasoning model.") | Tidies the transcript before it reaches the message box. **Model** picks the cleanup model from those your plan and organization allow. **Instructions** ("Applied after transcription. The original audio is not sent.") tells it how | Off |
| **Vocabulary** ("Names, acronyms, and technical terms.") | Terms the cleanup model should spell correctly. Used only when cleanup is on | Empty |
| **Replacements** ("One exact spoken → written pair per line.") | Swaps exact words you say for what you want written, matched as whole words and ignoring case, before and after cleanup | Empty |

Write each replacement on its own line with an arrow; `=>` works too:

```text
bearly → Bearly
q four → Q4
acme corp => ACME Corporation
```

If cleanup fails, Bearly uses the raw transcript without a message, so you never lose what you said.

The pane also says: "Live audio is sent through Bearly for transcription." If your organization has turned off **Cloud dictation**, the pane says "Your team has disabled audio transcription." and the microphone shows "Dictation is disabled by your team". With **Dictation** off, there's no microphone icon and no **Dictation** pane.

## Voice calls

A voice call is a live conversation: you talk, Bearly answers out loud, and you can interrupt it at any point. During the call Bearly can use the same tools as the chat, such as web search, images, Run Python, Pages, and connectors, and it asks for approval the same way.

**Use it when:** thinking a problem through out loud, practicing a pitch or interview, getting step-by-step help while your hands are busy, or asking Bearly to look something up and build something without typing.

**You need:** any plan; calls use your plan allowance. Admin control: **Voice** (under **Media & Creativity**). A microphone and a secure connection. Works in the web app, phone browsers, the desktop app, and the iOS app; not in Firefox ("Voice is temporarily unavailable in Firefox. Use Chrome or the desktop app.").



1. Select **Start voice call** — the sound-wave icon just left of Send. Allow microphone access if asked.
2. Talk — the message box becomes a call bar that shows "Connecting", "Listening", "Thinking", or "Speaking", a timer, and the model's name.
3. Interrupt whenever you like — start talking and Bearly stops to listen.
4. Use **Mute microphone** and **Unmute microphone** as needed, and pick a different microphone from the call bar; Bearly remembers your choice on that device.
5. Select **End call** when you're done.



**What you get:** a call card in the chat with the status, length, and model, and **Show transcript** with "You:" and "Bearly:" lines. Later typed messages in the chat can see that transcript. The card has no audio playback.

### What Bearly can do during a call

- **Run actions.** It works through the chat's tools one at a time. Each spoken turn can take up to 12 action rounds; past that you'll see "Voice hit its action limit for this turn."
- **Ask for approval.** The call bar shows "Approval needed". Some voice models accept spoken answers: "yes", "no", "don't ask me again", or "stop". Others need you to select the on-screen approval card. Connector sign-in always happens on screen.
- **Use the chat so far.** A call starts with the chat's recent turns as background, so you can pick up a typed conversation by voice.

### Choose the voice model

Open **Settings** → **Voice** (in the **Chats** section). It reads "Voice calls use this model to listen, answer, and run actions. Calls use your plan allowance."

- On paid plans, pick a model under **Model** ("Takes effect on your next call.").
- On the Free plan, calls use a fixed model and the list shows "Choosing a voice model needs a paid plan." See [Plans and credits](https://bearly.ai/docs/manual/plans-and-credits.md).
- Each model speaks in its own voice; there's no separate voice picker.
- If a call switches to a backup model, the call bar adds "· fallback" after the model name.

**Zero Data Retention only** applies to chat models; it doesn't filter the voice models.

**Limits:**

- A call ends after 30 seconds of silence, including while you're muted.
- If the connection stops making progress, the call ends with "Voice connection stalled."
- Each call has a usage limit. When it's reached, the call bar shows "Voice limit reached" and the card says "This voice session reached its limit. Start a fresh one anytime."
- On iOS the screen stays awake during a call, and the call doesn't continue in the background.
- If the button is unavailable, its tooltip says why: "Voice isn't available in this app.", "Voice needs a secure connection.", or "No microphone is available." Older desktop app versions without microphone support show no button; update the app.
- Voice calls don't run in [Routines](https://bearly.ai/docs/manual/capabilities/routines.md).

## Read aloud

Under any answer that's all text, select **Read aloud** to hear it. It uses a standard voice unless you turn on **Use for Read Aloud** in Voice Studio, which switches Read aloud to the voice, engine, and delivery you picked there.

**You need:** any plan. Admin control: **Text to speech**.

For downloadable recordings, voice presets, and comparing voices, see [Text to speech](https://bearly.ai/docs/manual/capabilities/images-video-audio.md#text-to-speech).

## Try this

### Dictate a complex task and send it hands-free

You speak a full request and Bearly starts working without you touching the keyboard again.

**Why it works:** with **After dictation** set to **Send immediately**, a finished dictation is sent as a normal message, so it can use every tool the chat offers, including Pages and Run Python.

**You need:** any plan. Admin controls **Dictation** and **Cloud dictation**.



1. In **Settings** → **Dictation**, set **After dictation** to **Send immediately**, and turn on **Transcript cleanup** for cleaner text.
2. In a chat, hold <kbd>Right Shift</kbd> and speak the request, then let go.

   ```text
   Build a Page that tracks my weekly running miles, with a line chart, a weekly goal I can change, and a streak counter.
   ```

3. Watch the answer arrive — the Page opens in the chat like any other.



**Swap in:** **Fill the composer** when you want to review before sending; Vocabulary entries for product names you use often.

**If it stalls:** if a name comes out wrong every time, add a line under **Replacements**, such as `bearly → Bearly`.

### Ask a voice call to look something up and build a tool

You get a working Page from a spoken conversation.

**Why it works:** a call has the chat's tools, so web search and Page building can both run during the conversation, one action at a time.

**You need:** any plan. Admin controls **Voice** and **Web**.



1. Select **Start voice call**.
2. Say what you need.

   ```text
   Look up today's euro to dollar exchange rate and make me a currency converter Page that uses it.
   ```

3. Approve any action you're asked about — by voice where the model accepts it, or on screen.
4. End the call and open the Page in the chat.



**Swap in:** "Make a packing list for a three-day trip and email it to me"; "Find three recent articles on this and summarize them."

**If it stalls:** if you hear "Voice hit its action limit for this turn.", ask for the next step in a new sentence, or finish by typing in the chat, which can see the call's transcript.

### Proofread your writing by ear

You hear your own draft read back, which makes clumsy sentences easier to catch.

**Why it works:** Voice Studio's **Proofread by ear** preset picks a neutral, even delivery that reads exactly as written and pauses at punctuation, and **Use my message** fills the script with what you wrote.

**You need:** any plan. Admin control **Text to speech**.



1. Paste your draft and send it with `/say`.

   ```text
   /say Paste your draft here.
   ```

2. In Voice Studio, pick **Proofread by ear** under "What are you making?", then **Generate**.
3. Listen with the text highlighted, then fix what sounded off.



**Swap in:** [Fix Grammar](https://bearly.ai/docs/manual/capabilities/documents.md#fix-grammar) for line-by-line suggestions; **Read aloud** on Bearly's revised version.

**If it stalls:** for a long document, record one section at a time.

## Related

- [Write, attach, and send](https://bearly.ai/docs/manual/chat/compose.md)
- [Make images, video, and audio](https://bearly.ai/docs/manual/capabilities/images-video-audio.md)
- [Record and use meetings](https://bearly.ai/docs/manual/capabilities/meetings.md)
- [Settings reference](https://bearly.ai/docs/manual/settings-reference.md)

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Tune a chat: settings, style, reasoning, and memory](https://bearly.ai/docs/manual/chat/settings.md)
- [Next: Keyboard shortcuts](https://bearly.ai/docs/manual/chat/shortcuts.md)
- [Related: Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md)
- [Related: Automate with Routines](https://bearly.ai/docs/manual/capabilities/routines.md)
- [Related: Make images, video, and audio](https://bearly.ai/docs/manual/capabilities/images-video-audio.md)
- [Related: Work with files and documents](https://bearly.ai/docs/manual/capabilities/documents.md)
