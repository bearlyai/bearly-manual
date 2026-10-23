---
title: "Fix common problems"
description: "What a Bearly message or symptom means and what to do about it — upload and PDF password errors, failed answers, a paused queue, usage limits and out-of-credits notices, hidden models, missing features, desktop-only tools, locked encrypted chats, routines that didn't run, connectors, email and text, Deep Research, Full access, Chrome control, voice, dictation, meetings, sharing, and sign-in."
canonical: "https://bearly.ai/docs/manual/troubleshooting/"
markdown: "https://bearly.ai/docs/manual/troubleshooting.md"
---

# Fix common problems

HTML: [https://bearly.ai/docs/manual/troubleshooting/](https://bearly.ai/docs/manual/troubleshooting/)

> What a Bearly message or symptom means and what to do about it — upload and PDF password errors, failed answers, a paused queue, usage limits and out-of-credits notices, hidden models, missing features, desktop-only tools, locked encrypted chats, routines that didn't run, connectors, email and text, Deep Research, Full access, Chrome control, voice, dictation, meetings, sharing, and sign-in.

Find the message or symptom you see, then follow the fix. Text in quotes is exactly what Bearly shows; words in italics stand for a name or number that changes. If nothing here matches, select **Get help** under a failed answer, use **Give Feedback** in the account menu, or email support@bearly.ai.

## Files and attachments

| You see | Why | What to do |
|---|---|---|
| "Unable to upload and process." on a file | The upload or the file's analysis didn't finish | Remove the file with the **×** on it, then attach it again |
| A file is rejected as too large | Files can be up to 300 MB each | Make it smaller, for example by splitting a long PDF or exporting a shorter video, then attach it again |
| "Password required." and "Enter the PDF password. Bearly uses it once to unlock this file." | The PDF is password-protected | Type the password in **PDF password** and select **Unlock and add** |
| "That password didn't work." | The password was wrong | Type it again. Remove the file to cancel |
| "Unable to unlock this PDF." | Bearly couldn't unlock the file | Remove it, save an unlocked copy from an app that opens the PDF, and attach that copy |
| The send button does nothing while a file shows "Uploading" or "Analyzing." | Messages can't go out until every file is ready | Wait until the file finishes, then send |
| No **Attach files** in the **+** menu, no **Take photo**, and dragging files does nothing | Your organization turned off **File uploads** | Ask your organization's admin |
| "File uploads are disabled by your organization." or "Project files are disabled by your organization." | An organization setting blocks uploads or project files | Ask your organization's admin |
| "You need writer access to add files to this Project." | Your role in the project can't add files | Ask the project's owner for writer access |
| "_File_ is too large to transcribe. Max size: 400 MB" | Transcribe takes files up to 400 MB | Split or compress the recording, then transcribe each part |
| "Some assets could not be transcribed" | One or more files in the request failed | Ask Bearly to transcribe the files that failed again |
| Edit Video turns down your clip | Edit Video takes a 3 to 10-second clip under 50 MB | Trim or compress the clip, then ask again |

## Answers, the queue, and long chats

| You see | Why | What to do |
|---|---|---|
| "An error occurred. Please wait and try again." with **Get help** | The answer failed | Wait a moment, then select **Rerun with same model** under your message, or pick another model from the **Rerun** menu. **Get help** opens a support dialog |
| "Unable to load message." | That message couldn't be shown | Open the command menu (<kbd>⌘</kbd> <kbd>K</kbd> or <kbd>Ctrl</kbd> <kbd>K</kbd>) and choose **Refresh Chat** |
| "Queue paused — the last message failed." | Bearly stops the queue instead of sending into an error | Deal with the failed message, then select **Send now** on the next waiting one. The queue also restarts after a later answer finishes cleanly |
| "Queue paused — usage limit reached." | You hit a usage limit | Wait for the reset or add credits (see [Usage limits and credits](#usage-limits-and-credits)), then select **Send now** |
| "Queue paused." | You pressed **Stop** twice within 2 seconds | Select **Send now** on a waiting message to restart it |
| "Queue full — send, edit, or remove a waiting message first" and **Queue is full** | The queue holds up to 4 waiting messages | Use **Send now**, **Edit queued message**, or **Remove from queue** on one |
| "Clear the composer to edit this message" | You can only pull a queued message back into an empty composer | Clear the composer, then select **Edit queued message** |
| Bearly stops searching the web partway through an answer | Web Search runs at most twice per answer | Ask a follow-up, and the next answer can search again |
| An answer has no web sources | The chat's **Web** setting is **Off**, which also removes `/web-search` | Open the sliders button and set **Web** to **Auto** |
| Bearly seems to forget the start of a long chat | The default **History** mode, **Chat (Dynamic)**, shortens older messages | Open the sliders button → **History** → **Agentic (Compaction)**, or restate the key facts. "Conversation compacted so you can keep going" is normal in that mode |
| The AI used a different file or tool than you meant | It chose on its own | Name the file with `@` and the tool with `/` or `@`. See [Write, attach, and send](https://bearly.ai/docs/manual/chat/compose.md#reference-tools-files-and-skills) |

## Usage limits and credits

| You see | Why | What to do |
|---|---|---|
| "You've used this month's free allowance. It resets on _date_. Upgrade to Pro to keep going now." | The Free plan's monthly allowance is used up | Wait for the date shown, or select **Go Pro** |
| "You're out of credits. Please upgrade your plan to continue. Credits will reset tomorrow." | The Free plan's daily allowance is used up. Daily allowances reset at 04:00 UTC | Wait for the reset, or select **Go Pro** |
| "This request tripped our free-plan checks. Go Pro to continue, or email support@bearly.ai if we've misread it." | A Free-plan safety check flagged the request | Email support@bearly.ai if it's a mistake, or select **Go Pro** |
| "You've used your plan credits. Buy a boost to keep going, or upgrade your plan." | Your paid plan's credits are used up | Choose a Credit Boost amount in the message, or **Upgrade Plan** |
| "You've used your plan credits. Open billing to see your options." | Your credits are used up and a boost isn't offered here | Select **View Billing** |
| "You're out of credits. Chat continues with Bearly Fast or Bearly Pro. Features like transcription need credits." | Your paid credits ran out. Chat keeps working on those two models; paid tools need credits | Keep chatting, or add a Credit Boost or upgrade for tools like transcription |
| "You've used your team allowance. Chat continues with Bearly Fast until it resets." | You reached your organization's spending limit | Keep chatting on Bearly Fast, or ask an admin to raise your limit |
| New chats start on Bearly Fast instead of Bearly Pro | On a paid plan at 95% of your usage or more, the default model moves to Bearly Fast | Pick Bearly Pro in the model picker. A model you chose yourself doesn't change |
| No **Credit Boost** card | Boosts aren't offered on Free, with billing managed by a team admin, or inside the iOS app | Buy the boost in the web app or the desktop app. App Store subscribers can buy boosts there too |
| A message about the outstanding-credit limit for your plan | You hold the most unused boost credit your plan allows | Use the credits you have, or upgrade. Contact support if it keeps happening |
| **Manage in iOS App**, greyed out | Your plan was bought in the App Store | Change or cancel it in the iOS app |
| "No subscription found for this account" and "Sign in with the account that has the subscription, or choose a plan." after **Restore** | This account has no subscription | Sign in with the account that bought the plan |
| "This account's billing is managed by a team admin. Contact support for billing assistance." | A team admin controls your billing | Ask your admin, or select **Contact Support** |
| "Team seat access is blocked until an admin fixes the payment. Every team admin has been notified." | Your organization's payment is past due | Ask an organization admin to fix the payment |
| **You have two paid plans** | Your team seat already includes your personal plan's access | Select **End personal plan** if you don't need it; it ends at its own period end, and nothing is canceled automatically |

See [Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md).

## Models

| You see | Why | What to do |
|---|---|---|
| "ZDR on · Some models hidden" at the top of the model picker | **Zero Data Retention only** is on, so only zero-retention models show | Pick a listed model, or select **Change** to open **Privacy & Security** and turn the setting off |
| "ZDR on until settings sync · Some models hidden", or "Settings sync is unavailable. Zero Data Retention routes remain required until Bearly reconnects." | Bearly can't load your settings, so it keeps zero-retention models only to be safe | Check your connection and wait for Bearly to reconnect |
| "Managed account · Some models hidden" | Your organization's policy limits which models you can use | Pick a listed model, or ask your admin |
| "_Model_ needs the _Plan_ plan or higher. Upgrade to use this model and unlock the rest of its tier." | The model is above your plan | Upgrade from the **Billing** pane that opens, or choose another model |
| A model marked **Unavailable** | The model is suspended | Select **Read the announcement** for details, and choose another model |
| The chat answers with a different model than the one you picked | Your choice isn't allowed right now (organization policy, **Zero Data Retention only**, or plan), so Bearly uses the first available model in the list without changing your saved choice | Pick a model that's allowed |
| No model button in the composer, and no **Model** in **This Chat** | Your organization or project fixed the model | Ask the project owner or your admin |

See [Choose and compare models](https://bearly.ai/docs/manual/chat/models.md).

## A feature or command is missing

When a `/` command or a control you expect isn't there, one of these is usually why:

- **Your plan.** Routines, Council of Experts, Best Pick, and choosing a voice model need Pro or higher. Deep Research (Standard) and People Search need Analyst; Deep Research Ultra needs Research. Above-plan features show "_Feature_ requires _Plan_ or higher." or "_Feature_ needs the _Plan_ plan or higher. Upgrade to unlock it." with an upgrade button. See [Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md).
- **Your organization.** An admin can turn off any feature, and a `/` reference can't bring it back. See [Organizations](https://bearly.ai/docs/manual/organizations.md).
- **The desktop app.** Work locally, Computer Use, Bearly Browser, Chrome control, installed skills, and running routines need it. See [Desktop-only features](#desktop-only-features-on-the-web-or-a-phone).
- **What's in the chat.** The document tools appear once the chat or its project has a file. **Read aloud** appears on answers that are all text.
- **The chat's settings.** Web Search, Image Search, and Read Site need **Web** set to **Auto** in the sliders button. Scholar runs only when **Scholar** is **Auto**; `/scholar` forces it for one message.
- **An encrypted chat.** Search Docs and Memories aren't available there. See [End-to-end encrypted chats](#end-to-end-encrypted-chats).

Messages that mean an admin turned something off:

| You see | What to do |
|---|---|
| "Routines are turned off by your team's policy." | Ask your admin to allow **Routines** |
| "Disabled by policy." on a project setting | Ask your admin |
| "Dictation is disabled by your team" or "Your team has disabled audio transcription." | Ask your admin to allow **Cloud dictation** |
| "Disabled by your workspace" in **Chrome Extension** settings | Ask your admin to allow **Chrome extension browser** |
| "Your team policy does not allow a publishing audience." | Ask your admin to allow **Public links** or **Share with people and teams** |
| "Member lookup is disabled by an organization admin." | Ask an admin to change **Member directory** |
| "Your organization doesn't allow new end-to-end encrypted chats. Your existing ones stay available." | Ask your admin to allow **End-to-end encryption** |

Other chats that look broken:

| You see | Why | What to do |
|---|---|---|
| A chat with no message box or message controls | You can only read this chat, or its project is locked with a password | Ask the project owner for more access, or unlock the project with its password |
| "Default settings are not available in project chats. Use Project Settings to configure." | Project chats use the project's settings, not **New Chats** | Change the defaults in the project's **Settings** |

## Desktop-only features on the web or a phone

| You see | Why | What to do |
|---|---|---|
| "Use the desktop app" or "_Feature_ needs the Bearly desktop app." with **Get Bearly** | The feature runs only in the desktop app | Install the desktop app from **Settings** → **Get Desktop App**, then use the feature there |
| "Use Bearly on desktop" or "_Feature_ needs Bearly on a Mac, Windows, or Linux desktop." | Same, on a phone, a tablet, or the iOS app | Open Bearly on a computer with the desktop app |
| **Work locally** opens the download pane: "Work locally lets Bearly read, edit, and run files in a folder you choose — available on the Bearly desktop app." | Local files need the desktop app | Install the desktop app |
| "npm MCP servers require the Bearly desktop app." or **Desktop required** | npm connector servers run on your computer | Add the server in the desktop app |
| "Use Skills in the desktop app" | Installed skills run local files | Install and use them in the desktop app |
| "Computer Use is available in the Bearly desktop app." | Computer Use controls apps on your computer | Ask from a chat in the desktop app |
| **Get desktop app** on the **Online meeting** card | Recording a call's computer audio needs the desktop app | Use the desktop app on Windows or macOS 13 or later, or record with **In person or voice note** |
| "_Feature_ needs a newer Bearly desktop app." or **Update Bearly** | Your desktop app is too old for the feature | Select **Update ready · Restart** if it shows, or install the latest version from bearly.ai |
| "This version of the Bearly desktop app does not support Browser." | Same, for Bearly Browser | Update the desktop app |
| "Update Bearly to continue" — "This copy of Bearly is older than one already used on this computer." | An older copy opened after a newer one | Install the latest version from bearly.ai and open it. Until then, you can start new chats in your browser at bearly.ai/dashboard |
| "We can't reach Bearly." in the desktop app | The app can't load Bearly | Check your connection and select **Try again**. If your connection works, quit and reopen Bearly |

## End-to-end encrypted chats

Signing in isn't enough to open your encrypted chats. A new device needs approval from one you already use, your recovery phrase, or a passkey.

### "Approve this device to open this chat"

You see a lock on encrypted chats in the sidebar, or the banner "Encrypted chats are locked on this device". This browser or app hasn't been approved yet. Browsers and apps need separate approval, even on the same computer, and clearing a browser's site data removes its approval.



1. On the locked device, select **Approve** on the banner, or **Approve this device** in **Settings** → **Privacy & Security** — this starts an approval request, which lasts ten minutes.
2. On a device that's already approved, open **Settings** → **Privacy & Security** and select **Approve a device** — you can now pick the new device.
3. Choose the new device and enter the **Verification code** the new device shows — the new device can then open your encrypted chats. If the approved device is a phone, select "Using an approved phone? Scan instead" on the new device, then use **Scan QR code** under **Approve a device** in Bearly on the phone.
4. With no approved device at hand, use your recovery phrase or a saved passkey on the new device instead.



| You see | Why | What to do |
|---|---|---|
| No Search Docs or **Memories** in an encrypted chat | They aren't available in encrypted chats | Use **Read Doc**, **Scan Doc**, or **Summarize Doc**, or start a chat with standard encryption |
| An encrypted chat doesn't appear in **Search chats and files** | Search leaves encrypted chats out | Find it in the sidebar |
| "Remove attachments before changing encryption" | A draft's encryption can't change once it has files | Remove the files, switch the lock, then attach them again |
| Get Video won't take a YouTube link in an encrypted chat | In encrypted chats, Get Video works only through Bearly's servers, which don't take YouTube links | Download it from a standard chat in the desktop app |
| "Files over 25 MB can't be shared from an encrypted chat yet." | Publishing from an encrypted chat has smaller limits | Share a smaller file, or publish from a standard chat |
| The desktop app stays locked on encrypted chats | Desktop versions 5.2.8 and earlier can't hold the device key | Update the desktop app |

**Lost access?** Lose every approved device, your recovery phrase, and any saved passkey, and nobody can recover your encrypted chats, including Bearly. Keep your recovery phrase somewhere safe. If you've lost it but still have an approved device, select **Replace recovery phrase** in **Settings** → **Privacy & Security** and save the new one; the old phrase stops working. Where it's offered, **Store a passkey in my keychain** adds a passkey as a second way back in. See [Privacy and security](https://bearly.ai/docs/manual/privacy-and-security.md).

## Routines

### A routine didn't run

Routines run only in the desktop app, on the device the routine is installed on, while the app is open.



1. Open the routine and check **Run location** — "Not installed anywhere — it won't run." means no device runs it.
2. In the desktop app, select **Install on this device**, or **Move to this device** if another computer owns it — this device now runs the schedule.
3. Keep the desktop app open at the scheduled times — a closed or sleeping computer can't run it.
4. Select **Run now** to test it — this runs the last saved version on this computer right away.



After the computer wakes or the app reopens, Bearly runs at most one catch-up for the latest missed time and lists older ones as "Skipped — device was away". If you use end-to-end encryption, a run waits until this device is unlocked.

| You see | Why | What to do |
|---|---|---|
| **Not installed** or **Overdue** on a routine | No device is running it, or a scheduled run is more than an hour late | Install it on a desktop device and keep the app open |
| "Runs in the desktop app. **Get it**" on the web or a phone | Routines can be managed anywhere but run only in the desktop app | Install the desktop app and the routine on it |
| "Skipped — previous run was still going" | A run was still going when the next time came; runs stop after 25 minutes | Simplify the instructions, or space runs further apart |
| "Routine paused" — "_name_ failed twice in a row. Open Routines to resume it." or **Failing** | Two runs in a row failed | Open the latest run to see why, fix the instructions or tools, select **Resume**, then **Run now** to test |
| "Paused — its chat was deleted." | The routine's chat was deleted and couldn't be recreated | Select **Resume** |
| **Full access needs review** and "Paused for permission review. Review Full access or choose Standard below, then resume the schedule." | The routine changed after you turned on Full access, or that approval no longer holds on this device | Select **Review full access** or **Use Standard**, then **Resume** |
| "Runs go without a browser because the instructions or these settings changed after you approved them. Save to approve them again." | Browser access is tied to the exact instructions you approved | Select **Save** and approve again |
| "It stopped at _site_ because that site isn't approved for this routine. To allow more, edit the routine's browser access." | Runs use only the exact sites you listed; a subdomain is a separate site | Add the site under **Browser access** → **Sites** (up to 20) |
| "Bearly Browser is off in this device's settings, so this run didn't use it. Turn on Enable Browser and Allow chats to use Browser in Settings." | The device's browser settings are off | **Settings** → **Desktop** → **Browser**: turn on **Enable Browser** and **Allow chats to use Browser** |
| "Routines can't use Chrome yet, so this run didn't use it. Use Bearly Browser instead." | Routines can't control Chrome | Turn on **Bearly Browser** under the routine's **Browser access** |
| "Your organization doesn't allow Routines to use Bearly Browser, so this run didn't use it." | **Browser in Routines** is off for you | Ask your admin |
| "Routines are a Pro feature." | Routines need Pro or higher | Select **Go Pro** |
| A routine can't run Python, make a chart, or generate images | Scheduled runs have a smaller toolset | Have it write a CSV or an HTML Page, or continue in the routine's chat afterwards. See [Building blocks](https://bearly.ai/docs/manual/combine/building-blocks.md#routines-run-a-smaller-toolset) |
| No email or text after a run | **Email each result** or **Text each result** is off, texts need a verified phone, or the notification filter held it back ("Stayed quiet — nothing met your bar") | Turn on the delivery you want, verify your phone in **Settings** → **Phone & SMS**, or loosen the **Notification filter**. Every run is still in the routine's chat |
| You can't turn on another routine | Up to 10 routines can be active | Pause or delete one |

See [Routines](https://bearly.ai/docs/manual/capabilities/routines.md).

## Connectors and skills

| You see | Why | What to do |
|---|---|---|
| **Web browser required** — "Use Bearly in a web browser to connect and use services that require sign-in. Connections stay in the profile where you set them up." | Services that need a sign-in can't be connected in the iOS app or in an Android app's built-in browser | Connect it in a regular browser or the desktop app |
| A connector you connected elsewhere asks you to **Connect** again | "Connections stay in the profile where you set them up." | Select **Connect** here |
| A connected service isn't used in a chat | A connector does nothing until it's on for that chat | Open the **Connectors** chip and turn it on (**Active**) |
| **Retry** next to a connector | The connection failed | Select **Retry** |
| "Managed by your team policy" | Your admin added this server for you | Ask your admin to change it |
| Your installed skills aren't in the `/` menu | Installed skills work only in the desktop app | Use the desktop app. **Visualize** and **Bearly AI Models** work everywhere |

See [Connectors and skills](https://bearly.ai/docs/manual/capabilities/connectors-and-skills.md).

## Email and text

| You see | Why | What to do |
|---|---|---|
| A **Set up text messages** card instead of a text | No verified phone number | **Settings** → **Phone & SMS** → **Set up text messages**, and add a US or Canadian mobile number |
| **Action needed** and **Verify your phone again** | Bearly needs you to accept the current texting terms | Follow the steps in **Settings** → **Phone & SMS** |
| Texts stopped arriving | Texts were turned off, for example by replying STOP | Verify your number again in **Settings** → **Phone & SMS** |
| A routine sent no more texts today | Routines can send up to 3 texts in 24 hours | Use **Email each result** for more updates |
| An email to a teammate wasn't sent | Bearly emails teammates only in a managed organization, found by their exact name or address | Use their exact name or email, or have the email sent to you and forward it |
| An email with attachments wasn't sent | Attachments are limited to 10 files, 20 MB each and 20 MB in total, and an email whose attachments all fail isn't sent | Attach fewer or smaller files, or share a large file with **Share file** instead |
| Email stops working after many sends | Up to 20 emails an hour, each to up to 25 recipients | Wait an hour, or combine messages |

See [Email and text](https://bearly.ai/docs/manual/capabilities/email-and-text.md).

## Research tools

| You see | Why | What to do |
|---|---|---|
| "You can't start another Deep Research run right now. Wait for any run in progress to finish, or check your plan's usage." | You can run one Deep Research at a time, and runs count against your usage | Wait for the current run to finish, and check **Settings** → **Usage** |
| **Run Research** opens an upgrade | Standard needs Analyst; **Ultra** needs Research | Upgrade, or turn **Ultra** off and run Standard if your plan allows it |
| "Deep Research is handling too many requests right now. Wait a few minutes, then try again." or "Deep Research is temporarily unavailable on our side. Try again later." | A temporary problem on Bearly's side | Try again later |
| "Deep Research stopped before it finished." or "Research failed." | The run didn't complete | Type `/deep-research` to start a new run |
| "PDF email didn't send · _reason_" | The report finished but the email failed | Select **View PDF** in the chat |
| No way to cancel a running Deep Research | There's no cancel button once a run starts | Wait. The run keeps going, and the chat picks it back up after a refresh, a restart, or a switch to another device |
| People Search asks you a question before searching | With only a name, it needs one detail to tell people apart | Add a detail such as an employer, a city, or a role |
| Scholar shows "abstract only" for a paper | Bearly could read only that paper's abstract | Ask Bearly to read the paper's open-access PDF if Scholar lists one, or open the paper from its link |
| YouTube's **Find** or **Check claims** is missing | They need web search allowed and some usage left; **Check claims** also needs file uploads | Ask your admin about **Chat web search** and **File uploads**, or wait for your allowance to reset |
| YouTube's **Download to play here** or **Get transcript** is missing | They work only in the desktop app, in a chat that can take files | Open the chat in the desktop app, or ask your admin about **File uploads** |
| Best Pick shows "Limited store coverage in _country_" | Bearly has no store data for that country, so the pick comes from the product catalog and web searches | Check the price at a local store before you buy |
| A Council of Experts answer reads "This model couldn't answer." | One expert failed; Council needs at least 2 that answer | Ask again, or change the lineup in the panel's **Council settings** |

See [Research](https://bearly.ai/docs/manual/capabilities/research.md).

## Permissions and Full access

| You see | Why | What to do |
|---|---|---|
| **Full access** with a **Paused** badge | The server or this device can't grant Full access right now. The chat keeps your choice and asks before using tools meanwhile | Open **Permissions** and read the notice; the next rows cover each one |
| "Update Bearly to keep using Full access on this device. Until then, Bearly asks before using tools." | The desktop app is too old | Update the desktop app |
| "Your team turned off Full access. Bearly asks before using tools until your team turns it back on." | Your admin turned it off | Ask your admin |
| "Full access isn't available right now. Bearly asks before using tools until it is, then turns Full access back on." | A temporary block | Nothing to do; it turns back on by itself. You can also select **Resume full access** |
| **Start new chats in Full access** shows "Full Access is not available yet.", "Full Access is unavailable for this account.", or "Your team administrator turned off Full Access." | Full access isn't available to your account here | Use **Standard**, or ask your admin |
| "Could not check Full Access availability. Try again when connected." | Bearly couldn't reach its server | Check your connection and try again |
| Full access still asks before some actions | It never covers connecting a new service, listing, reading, or deleting your chats, People Search requests, Computer Use safety checks, routine consent, or certificate warnings | Answer the card. This is by design |
| You approved something, and another device, or the same chat after a reload, asks again | Approvals stay on the device where you gave them. **This response** ends with the answer, and **This session** ends when the chat reloads | Approve it again. Choose **This chat** to keep the approval on this device until you revoke it |

See [Permissions](https://bearly.ai/docs/manual/capabilities/permissions.md).

## Bearly Browser, Chrome, and Computer Use

| You see | Why | What to do |
|---|---|---|
| "Chrome extension not connected" in **Settings** → **Desktop** → **Chrome Extension** | Chrome control needs the Bearly extension in Chrome | Select **Install Chrome extension**, then keep Chrome and the desktop app open until it says "Connected to Chrome". The extension doesn't need its own sign-in for this |
| "Finishing secure connection…" | Pairing is in progress | Wait; the status updates on its own |
| **Update Bearly** in the Chrome pane | This desktop version can't manage the connection | Update the desktop app |
| Chrome steps fail in a chat with Full access, and Bearly says the extension needs an update | The extension is too old for Full access | Update the extension in Chrome, or switch the chat to **Standard** |
| Chrome's debugger banner stays on after the chat ends | Finishing or closing a chat doesn't detach Bearly from Chrome tabs | Ask Bearly to detach from the tab, or quit Chrome or the desktop app |
| A Chrome step fails | The action didn't complete, often because Bearly isn't attached to that tab | Ask Bearly to attach to the tab again, then retry |
| "Browser can keep up to eight tabs open." | Bearly Browser holds up to 8 tabs across chats | Close tabs you don't need |
| No **Browser** pane under **Settings** → **Desktop** | Your organization turned off **Browser** | Ask your admin |
| Bearly Browser isn't signed in to a site you use | Bearly Browser keeps its own sign-ins | Sign in inside Bearly Browser, or use **Import browser cookies** in **Settings** → **Desktop** → **Browser** |
| "Computer Use needs Accessibility and Screen Recording access. Open System Settings → Privacy & Security and enable Bearly in Accessibility and Screen Recording, then try again." The message can name only one of them | macOS hasn't granted Bearly those permissions | Turn on Bearly in each place the message names, then ask again |
| "Computer Use is already working on another task." | One Computer Use task runs per chat | Wait, or select **Stop** on the **Computer** chip |
| **Finish setting up Computer Use** on Windows | The optional Windows helper isn't installed | Select **Finish setup** and approve as an administrator, or skip it |
| A message that Computer Use's models are blocked by your workspace's model policy | Your organization allows none of the models Computer Use needs | Ask your admin |

See [Browser and computer use](https://bearly.ai/docs/manual/capabilities/browser-and-computer.md).

## Voice and dictation

| You see | Why | What to do |
|---|---|---|
| **Start voice call** unavailable: "Voice isn't available in this app.", "Voice needs a secure connection.", or "No microphone is available." | Calls need a microphone, a secure connection, and an app version that supports them | Connect a microphone, and open Bearly at bearly.ai or in an up-to-date desktop app |
| "Voice is temporarily unavailable in Firefox. Use Chrome or the desktop app." | Voice calls don't work in that browser | Use another browser or the desktop app |
| "Choosing a voice model needs a paid plan." | Free calls use a fixed model | Upgrade to Pro or higher to choose the model |
| A call ended by itself | Calls end after 30 seconds of silence, including while muted, or with "Voice connection stalled." | Start a new call |
| "This voice session reached its limit. Start a fresh one anytime." | Each call has a usage limit | Start a new call |
| "Voice hit its action limit for this turn." | A single turn can run a limited number of tool steps, and the call ends when it runs out | Start a new call and ask again, or continue by typing |
| A spoken "yes" doesn't approve a card | Some voice models can't take a spoken answer, and some cards, such as routine permissions, must be answered on screen | Answer the card on screen |
| The dictation microphone opens **Settings** | Dictation is off by default | Turn on **Enable dictation** in **Settings** → **Chats** → **Dictation** |
| "Microphone access failed. Check your browser or system permission." | The browser or system blocked the microphone | Allow the microphone for Bearly in your browser or system settings; in the iOS app, in iOS Settings |
| "Transcription is unavailable. Try again." or "Dictation could not finish. Try again." | Dictation failed | Try again |
| Dictation stops on its own | Dictation stops after 10 minutes | Start it again |
| The push-to-talk key does nothing in other apps | Dictation works only while Bearly is focused | Click into Bearly first |

See [Voice](https://bearly.ai/docs/manual/chat/voice.md).

## Meetings

| You see | Why | What to do |
|---|---|---|
| "Computer audio is not supported on this device. Bearly will record your microphone only." | Computer audio needs Windows, or macOS 13 or later | Record with the microphone, or use a supported computer |
| "Screen Recording access is off, so Bearly will record your microphone only." | macOS needs Screen Recording to capture computer audio | Turn on Screen Recording for Bearly in macOS settings |
| "Microphone access is required to start recording." | The microphone is blocked | Allow the microphone for Bearly, then start again |
| "Recording stopped at the 1 hr 15 min limit." | Recordings are capped at 75 minutes; everything recorded is kept | Start a new recording to continue |
| "This device needs at least 250 MB free before starting a recording." | Recording needs at least 250 MB free on the device | Free up space, then start again |
| "Live transcript paused at the account limit. Audio recording continues." | Your allowance ran out | Keep recording; the audio is saved. Add credits or wait for the reset before the next recording |
| **Retry upload** on a recording | The upload didn't finish; the audio is still on this device | Select **Retry upload** |
| A browser refresh stopped the recording | Refreshing stops capture in a browser; what was saved stays | Avoid refreshing while recording, or use the desktop app, which keeps recording across reloads |

See [Meetings](https://bearly.ai/docs/manual/capabilities/meetings.md).

## Sharing and Pages

| You see | Why | What to do |
|---|---|---|
| **Publish** is greyed out: "Use Share to add a preview image and conversation brief before publishing an update." | A Page must be prepared before it's published | Select **Share file** on the Page or **Share** in the header, then **Prepare share** |
| "Choose a Page under 9 MB or a file under 300 MB." | The item is too large to share | Share a smaller version |
| "Using simple artwork; review it before publishing" | Artwork couldn't be generated | Check the preview, then publish or **Prepare again** |
| "Building stopped. Nothing was published." | You selected **Stop building** | Select **Prepare again** |
| No **Share** button | The chat is read-only, or your organization turned off **Sharing** | Ask the project owner or your admin |

See [Pages and Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md).

## Projects and organizing chats

| You see | Why | What to do |
|---|---|---|
| "Unarchive this chat before deleting it." or "Delete · unarchive first" | Archived chats can't be deleted | Select **Unarchive**, then **Delete** |
| A chat won't move into a project | Chats can't move into an archived project | Unarchive the project first |
| A project's chats are read-only and its **Settings** asks for a password | The project is locked with a password | Enter the project's password. **Lock all data** in **Settings** → **Account** locks every password-protected project again |
| "Only owners can manage encryption." | Only a project's owners can change its password | Ask the owner |
| "Only project writers and owners can modify shared project settings." | Your role can't change shared settings | Use **Personal Chat Settings**, or ask the owner |

See [Projects](https://bearly.ai/docs/manual/projects.md).

## Sign-in and devices

| You see | Why | What to do |
|---|---|---|
| Only an email field on the sign-in screen in the iOS app | The iOS app signs in with an emailed code only | Enter your email, then the code |
| "Codewords invalid. Make sure you typed them in correctly." | The three-word code didn't match | Paste or type the three words exactly as emailed |
| "Desktop sign-in didn't finish. Make sure Bearly is open. If your browser blocks local network access, allow it for this site, then try again." | The browser couldn't hand the sign-in to the desktop app | Keep the desktop app open, allow local network access if asked, and select **Retry desktop sign-in** |
| A device you don't recognize in **Settings** → **Devices** | Your account is signed in there | Select **Sign out** on it, or **Sign out all other devices** |
| The browser extension asks you to connect again | It was disconnected, or its key was removed under **Settings** → **Devices** → **Browser extension and API keys** | Open the extension and select **Sign in with Bearly** |

See [Get Bearly](https://bearly.ai/docs/manual/get-bearly.md) and [Privacy and security](https://bearly.ai/docs/manual/privacy-and-security.md).

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Use Bearly from scripts and agents](https://bearly.ai/docs/manual/api-and-agents.md)
- [Next: Glossary](https://bearly.ai/docs/manual/glossary.md)
- [Related: Write, attach, and send](https://bearly.ai/docs/manual/chat/compose.md)
- [Related: Plans, credits, and limits](https://bearly.ai/docs/manual/plans-and-credits.md)
- [Related: Choose and compare models](https://bearly.ai/docs/manual/chat/models.md)
- [Related: Run Bearly for an organization](https://bearly.ai/docs/manual/organizations.md)
