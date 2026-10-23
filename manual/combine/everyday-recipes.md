---
title: "Recipes for everyday life"
description: "Step-by-step recipes that chain Bearly's Maps, Weather, Best Pick, YouTube, Scholar, voice calls, text to speech, Run Python, Pages, and email for rides, trips, shopping, learning, reading health research, language practice, and splitting bills."
canonical: "https://bearly.ai/docs/manual/combine/everyday-recipes/"
markdown: "https://bearly.ai/docs/manual/combine/everyday-recipes.md"
---

# Recipes for everyday life

HTML: [https://bearly.ai/docs/manual/combine/everyday-recipes/](https://bearly.ai/docs/manual/combine/everyday-recipes/)

> Step-by-step recipes that chain Bearly's Maps, Weather, Best Pick, YouTube, Scholar, voice calls, text to speech, Run Python, Pages, and email for rides, trips, shopping, learning, reading health research, language practice, and splitting bills.

These recipes use Bearly for plans and decisions outside work: a ride, a day in a new city, a purchase, a lecture, a language, a question about your health. Maps, Weather, YouTube, Scholar, and the **Learning** style work on every plan; Best Pick needs Pro. A plan Bearly makes is a starting point, so check opening hours, prices, and conditions before you go. For what each block takes in and gives back, see [Building blocks](https://bearly.ai/docs/manual/combine/building-blocks.md).

## Plan a bike ride around the weather

You get a cycling route with a coffee stop along the way, the afternoon's rain, wind, and air quality, and a start time that avoids the worst of it.

**Why it works:** Maps finds routes by bike, on foot, by transit, or by car, and can search for places along a route. Weather reads the forecast and, when you ask, air quality. Both results stay in the chat, so the last step can weigh one against the other.
**You need:** Any plan. Any platform. Organization controls: **Maps** and **Weather**. Name your start point, or allow location access when your browser or device asks.



1. Ask for the route:

   ```text
   Plan a Saturday bike ride from Golden Gate Park to Sausalito with a coffee stop along the way.
   ```

   — Bearly finds a cycling route, searches along it for coffee, and shows a map card with the route and the stops on the way.

2. Check the conditions:

   ```text
   Will it rain or be windy along that route on Saturday afternoon? Check air quality too.
   ```

   — A weather card shows the hourly forecast. Air quality is included because you asked for it.

3. Adjust the plan:

   ```text
   If the wind picks up after 2 PM, move the ride earlier. Give me a start time and the coffee stop's opening hours.
   ```

   — Bearly reads the place's details and gives you one plan.



**Swap in:**
- **Walking or transit for cycling:** say "walking" or "by transit"; transit routes take an arrival or departure time.
- **Pollen for air quality:** ask for the pollen forecast with `/pollen` if allergies matter more.
- **Several starting points:** "My friends start from Mission, Sunset, and Oakland. Who has the shortest ride to the café?" Bearly compares routes from each origin.
- **A text for the plan:** ask "Text me the plan." Needs a verified phone in **Settings** → **Phone & SMS**.

**If it stalls:** If Bearly uses your location, it says when it's estimated from your network rather than your device; name the start point to be exact. Maps and Weather don't run in Routines.

## Pick the right thing to buy, then send it to yourself

You get one product recommendation backed by expert and owner reviews, refine it with a tap, see when its price was checked, and email it to yourself.

**Why it works:** Best Pick researches reviews and store listings and answers with exactly one product and a plain store link. Its chips (**Cheaper**, **Worth spending more**, **Not this one**) each send an ordinary follow-up message, so the pick narrows while the earlier requirements stay. The final card stays in the chat, so the email step can use it.
**You need:** **Pro** plan or higher. Any platform. Organization controls: **Best Pick**, **Web**, **Chat web search**, and, for the last step, **Email notifications**.



1. Describe what you need, including where it ships:

   ```text
   What's the best cordless stick vacuum under 400 dollars for a home with two cats? Ship to Vancouver.
   ```

   — A Best Pick card shows the product, its price in the local currency, **View at** the store, and why it won. Naming Vancouver makes Bearly shop Canadian stores.

2. Refine it: select **Cheaper** on the card, or type a requirement:

   ```text
   Quieter, and it has to have a washable filter.
   ```

   — A new card shows the pick that fits, and the reply says whether it changed and why.

3. Read the line next to **View at**: "Price checked" with the time, and "Store's checkout price applies". — If you come back to the card more than a day later, the price shows as "Price on" a date, and the card can offer **Check current price** to look it up again.

4. Send it to yourself:

   ```text
   Email me this pick with its price, the store, and the spend-less option from the card.
   ```

   — Send Email sends it to your own address. Bearly doesn't receive the store's web address, so the email names the store; open it from **View at** on the card.



**Swap in:**
- **Worth spending more for Cheaper:** see what the extra money buys.
- **Not this one:** rules the current pick out and finds the next best.
- **A text for the email:** ask "Text me the pick."
- **A different country:** "Show me stores in the UK instead." Bearly searches again in that country's currency, so say your budget again in it.

**If it stalls:** A pick stops after about 90 seconds; select **Try again**. "Limited store coverage" means Bearly has less store data for that country, so it checks fewer stores there. Best Pick doesn't cover medications, supplements, infant car seats, firearms, services, travel, cars, homes, or used items.

## Plan a day in a new city as a Page you can carry

You get a timed walking plan with places chosen from recent reviews, rearranged around the weather, as a Page on your phone.

**Why it works:** Maps searches places, reads their reviews, and times routes between them; Weather gives the hourly forecast for the day. Bearly writes the plan as a Page, which is an HTML file in the chat, and Send Email can attach that file, which opens in a browser on your phone.
**You need:** Any plan. Any platform. Organization controls: **Maps**, **Weather**, and **Email notifications**.



1. Find the places:

   ```text
   I have one day in Lisbon next Saturday. Find six must-see places around Alfama and Baixa with strong recent reviews, plus a lunch spot locals like.
   ```

   — Bearly searches places and reads their reviews, then lists them with what people praise and complain about.

2. Put them in order:

   ```text
   Order them into a walking route starting at 9 AM from Rua Augusta 100. Use transit for any leg over 25 minutes on foot, and give me times for each stop.
   ```

   — Bearly times each leg and gives you a time for each stop.

3. Plan around the weather:

   ```text
   Check Saturday's hourly forecast and move indoor stops into any rainy hours.
   ```

   — A weather card shows the hours; the plan changes if rain is forecast.

4. Make it a Page:

   ```text
   Make this a one-page Page that works on a phone: a timeline, a map link for each stop, opening hours, and a checkbox for each stop.
   ```

   — A Page preview appears; **Open** it to try it.

5. Send it to your phone:

   ```text
   Email me the Page.
   ```

   — Send Email attaches the HTML file. Open the attachment on your phone.



**Swap in:**
- **A published link for the email:** in the open Page, select **Share file** → **Prepare share**. When it's ready, the prepared Page opens on its own, marked "Ready to share"; select **Publish** in its header, choose the **Audience**, select **Publish** again, then **Copy link**. Open the link on your phone or send it to the people you're traveling with.
- **Air quality or pollen for the forecast:** ask for them in step 3.
- **Best Pick for a purchase on the trip** (Pro): "What's the best compact travel umbrella I can buy before Saturday?"

**If it stalls:** A plan built on a forecast changes with it, so ask Bearly to check the weather again the day before. Check marks on the Page may not be kept after you close it.

## Learn a lecture's ideas, then quiz yourself

You get a step-by-step explanation of a YouTube lecture, a quiz Page with instant feedback, and a cut of the parts you got wrong.

**Why it works:** The **Learning** style tells Bearly to teach step by step, with analogies, common misconceptions, and a takeaway. A YouTube link gives Bearly the lecture's transcript with timestamps, so the quiz can point to the moment each answer is explained, and a cut can replay just those moments. A Page can be an interactive quiz.
**You need:** Any plan. Web app, phone browser, or desktop app. Organization controls: **YouTube**, **Web**, and **File uploads** (the transcript is saved as a file in the chat). The lecture needs readable captions for timestamps.



1. Open the sliders menu in the composer and set **Style** to **Learning**.

2. Paste the lecture:

   ```text
   https://www.youtube.com/watch?v=VIDEO_ID Teach me the core idea of this lecture step by step. Assume I know high-school math.
   ```

   — The video card opens, and Bearly explains in the **Learning** style.

3. Make the quiz:

   ```text
   Using the transcript, make a 10-question quiz Page with instant feedback and, for each answer, the timestamp where the lecture explains it.
   ```

   — A Page preview appears; **Open** it and take the quiz.

4. Rewatch what you missed:

   ```text
   I got questions 3 and 7 wrong. Make a cut of the parts of the lecture that explain them.
   ```

   — A cut card plays just those parts.



**Swap in:**
- **Flashcards for a quiz:** ask for a flashcard Page you can flip through.
- **Scholar for depth:** ask `/scholar` for the papers behind the lecture's main claim.
- **An audio review:** ask for a two-minute spoken summary with `/say` and listen on a walk.
- **Your own notes for a video:** attach lecture slides or notes instead of a link; Bearly reads the file and makes the quiz from it, without timestamps or a cut.

**If it stalls:** Without captions, Bearly watches the video instead, so timestamps are approximate. Quiz progress on a Page may not be kept after you close it.

## Read the research on a health question

You get what systematic reviews and trials say about a health question, in plain language with citations, and a list of questions to take to your doctor.

**Why it works:** Scholar searches biomedical and preprint literature, prefers systematic reviews for medical questions, flags retractions and conflicting results, and says when the evidence is thin. The **Papers** card under each search stays in the chat, so you can open the papers behind the plain-language summary.
**You need:** Any plan. Any platform. Organization controls: **Scholar** and **Web**.

> **Caution — Information, not medical advice**
> Bearly summarizes published research. It isn't medical advice and doesn't know your history. Talk to a doctor or another qualified clinician before you start, stop, or change any treatment.




1. Ask Scholar:

   ```text
   /scholar What do systematic reviews and randomized trials say about cognitive behavioral therapy for insomnia compared with sleep medication, over six months or longer?
   ```

   — Bearly answers with superscript citations and a **Papers** card listing the sources.

2. Go deeper on the strongest evidence:

   ```text
   Read the two strongest reviews and tell me the effect sizes, how many people were studied, and how certain the authors are.
   ```

   — Bearly reads passages from those papers. Some show "abstract only" when the full text isn't available.

3. Make it usable:

   ```text
   Explain this in plain language, say where the evidence is weak, and list five questions I could bring to my doctor.
   ```

   — Bearly rewrites the findings from the papers it already read. Open each paper from the **Papers** cards above.



**Swap in:**
- **Learning for the default style:** set **Style** to **Learning** in the sliders menu first for a slower, step-by-step explanation.
- **A video for a question:** paste a health video's YouTube link, select **Check claims** on the card, then ask what the research says about the disputed figures.
- **Deep Research for Scholar** (Analyst): for a wider cited report drawn from web sources.
- **Email for later:** "Email me this summary with the title of each paper."

**If it stalls:** If Scholar finds little, it says the literature is thin rather than stretching it. Try broader terms or a wider date range.

## Practice a language out loud, then get corrections

You hold a spoken conversation in another language, then get a list of your mistakes with corrections and hear the corrected sentences read slowly.

**Why it works:** A voice call gets the chat's recent messages as background, so it can pick up a role you set up in text. Only the call's transcript is saved, never audio, and later typed messages can read it. `/say` turns the corrected sentences into an audio file you can replay.
**You need:** Any plan. Choosing the voice model (**Settings** → **Chats** → **Voice** → **Model**) needs Pro; Free uses a fixed model. A microphone and a browser or app that supports calls (Firefox doesn't). Organization controls: **Voice** and **Text to speech**.



1. Set the scene:

   ```text
   Let's practice Spanish. When I start a voice call, play a waiter at a café in Madrid. Speak only Spanish, keep your sentences short, and don't correct me during the call.
   ```

   — Bearly confirms the role.

2. Select **Start voice call** (the sound-wave button in the composer, near send), order a coffee and a pastry, and ask for the bill. Select **End call** when you're done. — A call card appears in the chat with the duration and **Show transcript**.

3. Get the corrections:

   ```text
   From the call transcript, list each mistake I made with the correction and a one-line explanation.
   ```

   — Bearly works from the saved transcript.

4. Hear it right:

   ```text
   /say Read the corrected sentences slowly, with a pause between each one.
   ```

   — Bearly records the audio as a file in the chat. In the **Voice** studio, try "Clear and measured" for the delivery and select **Generate** for another take.



**Swap in:**
- **Another language or setting:** a job interview in French, a pharmacy visit in Japanese.
- **A flashcard Page for the list:** ask for a Page that quizzes you on the corrected sentences.
- **Typed practice for a call:** set **Settings** → **Chats** → **This Chat** → **Language** so Bearly writes its replies in that language.

**If it stalls:** A call ends after 30 seconds of silence. In Firefox the call button says voice is unavailable; use Chrome or the desktop app. If the button is missing, check that your organization allows **Voice**.

## Split a restaurant bill from a photo

You photograph a receipt and get each person's exact share with tip, then a Page where you can reassign items and change the tip.

**Why it works:** Bearly reads the photo, and Run Python does the arithmetic, so the shares add up to the total. A Page can hold that receipt as an interactive calculator.
**You need:** Any plan. **Take photo** is on phones and tablets; anywhere else, attach a photo of the receipt. Organization controls: **File uploads** and **Run Python**.



1. Tap **Take photo**, photograph the receipt, and send:

   ```text
   Split this bill. Ana had the pasta and a glass of wine, Ben had the steak, and we shared the calamari. Add an 18% tip on the pre-tax total. Use Python for the math.
   ```

   — Bearly lists the items it read, and a **Run Python** step computes each share.

2. Make it adjustable:

   ```text
   Make a Page where I can tick who had each item and change the tip with a slider.
   ```

   — A Page preview appears; **Open** it and move the slider.



**Swap in:**
- **Currency conversion:** "Also show each share in euros at today's rate." Bearly looks up the rate with Web Search.
- **A trip's worth of receipts:** attach several photos and ask for a CSV of every item with who paid, then a settle-up table.
- **A text for the Page:** ask "Text me each person's total."

**If it stalls:** If an item or price is read wrong, say which one and the right amount; Bearly recalculates. Retake blurry photos in good light.

## Related

- [Research](https://bearly.ai/docs/manual/capabilities/research.md) for Maps, Weather, Best Pick, and Scholar
- [Videos and posts](https://bearly.ai/docs/manual/capabilities/videos-and-posts.md) for YouTube cards and cuts
- [Voice](https://bearly.ai/docs/manual/chat/voice.md) for voice calls and dictation
- [Pages and Canvas](https://bearly.ai/docs/manual/capabilities/pages-and-canvas.md) for Pages you can keep and publish

## Continue through the documentation

- [Manual index](https://bearly.ai/docs/manual.md): Browse every page of the Bearly Manual.
- [Documentation index](https://bearly.ai/docs.md): Browse every Bearly guide.
- [Previous: Recipes for automation and agents](https://bearly.ai/docs/manual/combine/automation-recipes.md)
- [Next: Recipes for teams and projects](https://bearly.ai/docs/manual/combine/team-recipes.md)
- [Related: Building blocks: how Bearly's features connect](https://bearly.ai/docs/manual/combine/building-blocks.md)
- [Related: Research the web, papers, people, products, and places](https://bearly.ai/docs/manual/capabilities/research.md)
- [Related: Learn from YouTube, online video, and posts on X](https://bearly.ai/docs/manual/capabilities/videos-and-posts.md)
- [Related: Talk to Bearly: dictation and voice calls](https://bearly.ai/docs/manual/chat/voice.md)
