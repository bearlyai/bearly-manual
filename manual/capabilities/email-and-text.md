---
title: "Send email and texts"
description: "How Bearly emails you or your teammates and texts your verified phone from a chat or a routine, how to set up Phone & SMS, who can receive messages, attachment and rate limits, and what to do when a send fails."
canonical: "https://bearly.ai/docs/manual/capabilities/email-and-text/"
markdown: "https://bearly.ai/docs/manual/capabilities/email-and-text.md"
---

# Send email and texts

HTML: [https://bearly.ai/docs/manual/capabilities/email-and-text/](https://bearly.ai/docs/manual/capabilities/email-and-text/)

> How Bearly emails you or your teammates and texts your verified phone from a chat or a routine, how to set up Phone & SMS, who can receive messages, attachment and rate limits, and what to do when a send fails.

Ask Bearly to email or text you from any chat, and it sends the message as part of its answer. Email can go to you or to teammates in your organization, with files from the chat attached. Texts go only to your own verified phone. Routines use the same tools to deliver their results.

**You need:** your organization allows **Email notifications** and **Text messages**. Both work in the web app, phone browsers, the desktop app, and the iOS app.

There's no approval card for these: asking is the go-ahead. Bearly sends when that step of the answer runs, and a sent message can't be edited or recalled from Bearly. Check the recipient and the contents in your request.

## Send Email

**Send Email** writes a formatted email and sends it to your account address, or to teammates you name.

**Use it when:** you want a summary, checklist, or file from a chat in your inbox; you want to hand action items to colleagues; or a routine should deliver its result.
**You need:** to email teammates, a managed organization whose members share your work email domain.



1. Get the content ready in the chat first: the summary, the draft, or the files to attach — Bearly can attach files that are in the chat, including Pages and files it created.
2. Ask for the email, naming the recipient, subject, and attachments. Typing `/email` and choosing **Send Email** makes the intent explicit, but a plain request works too:

   ```text
   Email me the decision summary from this chat with the subject "Launch review". Attach the budget CSV.
   ```

3. Check the **Send Email** step in the answer — it reads "Email sent to" followed by the recipient (or the number of recipients) and the subject.
4. Open the email to check the formatting and attachments.



**What you get:** an email with Markdown formatting (headings, lists, tables, links) and up to 10 attachments from the chat. It comes from "User message via Bearly", and the subject starts with "[User message via Bearly from" followed by your name. Replies go to your address.
**Limits:** each attachment and all attachments together can total at most 20 MB. Up to 25 recipients per email, and up to 20 emails an hour from your account. If every attachment fails to prepare, nothing is sent.
**Combines with:** [Pages](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md) and data files to attach; [Routines](https://bearly.ai/docs/manual/capabilities/routines.md#results-and-delivery) with **Email each result**; [Meetings](https://bearly.ai/docs/manual/capabilities/meetings.md) for follow-ups.

### Who can receive your email

- **You.** With no recipient named, Bearly sends to your account email.
- **Teammates.** On a managed organization, Bearly uses **Find Contacts** to search your organization's members by name or email (give it at least two characters), then sends only to exact matches. It can't email outside addresses. When you email teammates, you're copied and replies come to you.
- If your organization's administrator turned off the member directory for members, you can email only yourself.

```text
Email Maya Chen and Sam Ortiz their action items from this meeting, one list each, subject "Thursday follow-ups". Keep it under 150 words.
```

## Send SMS

**Send SMS** texts a short, plain-text message to the verified phone on your account. Bearly can't text any other number, and it won't take a number you type in the chat.

**Use it when:** you want a result on your phone when you're away from your desk, or a routine should ping you only when something matters.
**You need:** a verified US or Canadian mobile number in **Phone & SMS**.



1. Ask for the text, or type `/sms` and choose **Send SMS**:

   ```text
   Text me the three launch decisions from this chat. Keep it under 250 characters.
   ```

2. If your phone isn't ready, the chat shows a **Set up text messages** card; select **Open Phone & SMS** and finish setup (below), then ask Bearly to send it again.
3. The **Send SMS** step reports the text was sent to your verified phone. Check that it arrived before asking again, so you don't get a duplicate.



**What you get:** a plain-text message, with no formatting or attachments.
**Limits:** US and Canadian numbers only. Texts you ask for in chats are limited to 20 a day. Texts from routines are capped at 3 per 24 hours across all your routines. Long messages can be rejected; ask for a shorter one without emoji.
**Combines with:** [Routines](https://bearly.ai/docs/manual/capabilities/routines.md#results-and-delivery) with **Text each result** and a notification filter; any long task you want to hear about when it's done.

### Set up Phone & SMS



1. Open **App Settings** → **Phone & SMS**. **Set up text messages** reads "Add a US or Canadian mobile number for verification codes and notifications."
2. Choose **US +1** or **Canada +1**, enter your **Phone number**, read the texting terms, and select **Agree & send code**.
3. Under **Check your phone**, enter the code Bearly texted and select **Verify code** — the pane shows **Phone verified** and a confirmation text arrives.



Once verified, the pane reads **Texts are on** with your masked number. **Send test text** checks delivery, **Change number** verifies a different one, **Turn off text messages** "Stops codes and notifications. Same as replying STOP.", and **Remove phone number** "Deletes the number from your Bearly account." After you turn texts off, **Turn texts back on** verifies your number again.

## When a send fails

| What you see | What to do |
|---|---|
| The **Send Email** or **Send SMS** step reports a failure | Read the message in the step. Retry once; if it fails again, wait a few minutes. |
| The step's error mentions "managed-domain team" or "not an eligible team contact" | Bearly can email only exact members of your managed organization. Check the name, or send it to yourself and forward it. |
| The step's error mentions "total attachment size" | Keep attachments under 20 MB in total. Ask for a smaller export, or split it across emails. |
| The step's error mentions "max 20 emails per hour" | Wait, then try again. |
| **Set up text messages** appears | Select **Open Phone & SMS**, verify your number, then ask again. |
| A text doesn't arrive | Use **Send test text** in **Phone & SMS**. If texts are off, select **Turn texts back on**. |
| You don't see the email | Check spam for "User message via Bearly". Confirm the step shows the address you expected before asking again; a retry sends a second copy. |


Once the step says sent, the message is out. Send a corrected follow-up if something was wrong.


## Try this

### Email yourself a finished report with its data

A formatted summary in your inbox, with the Page and the CSV it was built from attached.

**Why it works:** files Bearly creates in a chat, such as a Page or a CSV, are chat files, and Send Email can attach any chat file. The email body is written in Markdown, so tables and headings survive.
**You need:** your organization allows **Email notifications**.



1. Build the report in the chat — for example, ask for a one-page summary of an attached spreadsheet and a cleaned CSV.
2. Ask:

   ```text
   Email me a short summary of these findings with a table of the top five rows, subject "Q3 numbers". Attach the Page and the cleaned CSV.
   ```

3. Check the **Send Email** step, then open the email.



**Swap in:** teammates instead of yourself (managed organizations); a routine with **Email each result** to get it weekly.
**If it stalls:** if the attachments total more than 20 MB, ask for a smaller CSV (for example, only the columns you need).

### Send each teammate their own action items

Separate, short emails to each person with only their tasks from a meeting.

**Why it works:** Find Contacts turns names into exact work addresses in your organization, and Send Email sends to those addresses with you copied, so replies come back to you.
**You need:** a managed organization with the member directory available; a meeting transcript or notes in the chat; your organization allows **Email notifications**.



1. Open the chat with the meeting notes or transcript (see [Meetings](https://bearly.ai/docs/manual/capabilities/meetings.md)).
2. Ask:

   ```text
   List the action items by owner. Then email each owner only their items, subject "From Thursday's meeting", one email per person.
   ```

3. Check the **Send Email** steps — each shows who it went to.



**Swap in:** one combined email to everyone; a text to yourself listing what you own.
**If it stalls:** if a name matches several people, Bearly can't pick; give the work email instead.

### Get a text when a long task finishes

A text on your phone when a long research or file job is done, so you can walk away.

**Why it works:** Send SMS is a step Bearly can run at the end of an answer, so the text goes out after the work earlier in the same answer finishes. This covers work Bearly does inside its answer, such as web searches or file processing. Deep Research is different: its report runs only after you select **Run Research** on its card, and it emails you the PDF itself when it's done.
**You need:** a verified phone; your organization allows **Text messages** and the tools the task uses.



1. Start the long task and add the text to the same request:

   ```text
   Search the web for current heat pump incentives in Ontario, from federal, provincial, and utility programs, and put them in a table with amounts and deadlines. When it's done, text me one line with the biggest incentive.
   ```

2. Leave the chat open and do something else — the text arrives when the answer reaches that step.



**Swap in:** "email me the table" for the full result; a [routine](https://bearly.ai/docs/manual/capabilities/routines.md) when it should happen on a schedule.
**If it stalls:** if the task stops early, no text is sent. Check the chat for the reason.

## Related

- [Automate with Routines](https://bearly.ai/docs/manual/capabilities/routines.md) — email and text delivery on a schedule.
- [Send email or text messages](https://bearly.ai/docs/features/send-email.md) in the feature guides.

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Automate with Routines](https://bearly.ai/docs/manual/capabilities/routines.md)
- [Next: Approvals, permissions, and Full access](https://bearly.ai/docs/manual/capabilities/permissions.md)
- [Related: Make Pages and edit in Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md)
- [Related: Record and use meetings](https://bearly.ai/docs/manual/capabilities/meetings.md)
- [Related: Send email or text messages from a chat](https://bearly.ai/docs/features/send-email.md)
