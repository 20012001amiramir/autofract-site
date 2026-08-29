/**
 * English source copy for /tools and /tools/<slug>.
 * Every other locale mirrors this file key for key — see content/tools/index.ts.
 */

export const toolsEn = {
  hub: {
    meta: {
      title: 'Free tools by Autofract',
      description: 'Four tools from the Autofract studio: a contract fine-print checker, a time zone meeting planner, hidden-cost calculators and an official-letter reader.',
    },
    kicker: 'Tools',
    h1: 'Small tools, done properly.',
    lede: 'The studio builds large systems for clients. These are the small ones we build for ourselves — and then give away, because they cost almost nothing to run.',
    intro: [
      'Every tool here started as an internal annoyance: a contract nobody had time to read, a meeting that kept landing at 22:00 for someone, a recurring cost that never appeared on any invoice. We built the smallest thing that answered the question, then kept it.',
      'None of them ask for an account. Three of them sell nothing at all; the fourth gives you a free read and then asks five dollars for a pass, because reading a letter properly costs us real money. They run in your browser or on our machines, and they are built to the same doctrine as the platforms below: verify before you publish, show your work, never invent a fact you cannot point at.',
    ],
    toolsHeading: 'Free tools',
    toolsSub: 'Open one, use it, close the tab. No signup, no trial, no ads.',
    productsHeading: 'Products',
    productsSub: 'Larger systems the studio designed, built and still operates.',
    faq: {
      h2: 'Questions people ask',
      items: [
        {
          q: 'Are these really free?',
          a: 'Three of the four are, with no account, no trial, no card, no usage limit and no ads. Two do all their work inside your browser, so serving them costs us almost nothing; Redline runs on our machines and we pay for it because it earns us more attention than an ad would. What\'s This Letter is the exception: its reference pages and your first read are free, further reads are a $5 pass, because each one costs us real money.',
        },
        {
          q: 'Do I need to sign up?',
          a: 'No. There is nothing to register for and nothing to install. Every tool opens straight into a working state, and where a tool has state to keep, that state lives in the URL — copy the link and you have saved your work.',
        },
        {
          q: 'What happens to what I put in?',
          a: 'Overlap and Cost Of never send your inputs anywhere: the board and the receipt are encoded in the address bar and computed by your own browser. Redline and What\'s This Letter have to read your document on a server to analyse it. Redline keeps your report behind its own link; What\'s This Letter discards the letter the moment your answer exists — it is never stored and never used for training. Either way, treat them the way you would treat any online tool and do not paste material you are not allowed to share.',
        },
        {
          q: 'Do you track me?',
          a: 'We count page views with a cookieless, privacy-preserving analytics setup that stores no personal data and follows nobody across sites. That is the whole of it — no advertising pixels, no session replay, no profiles.',
        },
        {
          q: 'Can I use them at work?',
          a: 'Yes, including commercially. Teams use the meeting planner for standups across continents and the calculators to argue a budget. Redline is a first read of a contract and What\'s This Letter an explanation of an official letter — neither is legal or tax advice, so treat their output as a checklist for your lawyer rather than a substitute for one.',
        },
        {
          q: 'Why does a studio give tools away?',
          a: 'Two honest reasons. They are proving grounds: the adversarial verification in Redline and the build-time data gates in our larger platforms are the same doctrine at different scales. And they introduce the studio to people better than a portfolio page does — you can see how we build before you ever talk to us.',
        },
        {
          q: 'Will they still be here next year?',
          a: 'That is the intent. They are static or near-static by design, which is exactly why they are cheap to keep alive: there is no database to migrate, no subscription to fund, no runtime to babysit. If a tool ever does shut down, its page will say so instead of quietly disappearing.',
        },
        {
          q: 'Can I suggest a tool?',
          a: 'Please do. The best ideas so far have come from someone describing a spreadsheet they rebuild every month. Write to info@autofract.com and tell us what you keep doing by hand.',
        },
      ],
    },
    cta: {
      title: 'Need one of these at your scale?',
      body: 'The same studio builds the large version: agents, pipelines and platforms that run themselves. Fixed quote after a 48-hour scoping pass.',
      button: 'Hire the studio',
    },
  },

  tools: {
    redline: {
      name: 'Redline',
      tagline: 'The fine print, decoded.',
      category: 'Contracts',
      meta: {
        title: 'Contract fine-print checker — Redline',
        description: 'Paste a contract, lease, loan or terms of service and get a ranked list of traps, each anchored to the exact clause and checked by a second reviewer.',
      },
      h1: 'Read the fine print, fast.',
      lede: 'Redline reads a contract the way a suspicious lawyer would: it looks for the clauses that will cost you later, quotes each one word for word, and explains in plain language what it actually does to you.',
      what: {
        h2: 'What it does',
        body: [
          'You give it a document — pasted text, a PDF with a real text layer, or a public link — and it returns a ranked list of traps. Auto-renewal you cannot escape in time. Unilateral changes to price or terms. Arbitration and venue clauses that decide where you would have to fight. Indemnities that hand you someone else\'s liability. Deposit deductions, late fees, notice periods measured in the least convenient unit available.',
          'Every flag is anchored to the verbatim clause it comes from, with the document\'s own characters — not a paraphrase, not a reconstruction. You can see the sentence, its place in the document, why it matters, and what a normal version of that clause looks like.',
          'The report also shows its own audit trail: how many candidate flags were proposed, how many were blocked because the quote could not be found in the document, how many a second reviewer refuted, and how many were downgraded from the severity first assigned. You are told what the machine got wrong, not only what it got right.',
        ],
      },
      why: {
        h2: 'Why the fine print keeps winning',
        body: [
          'Nobody reads terms of service, and everybody knows nobody reads them — which is precisely why the expensive clauses live there. A subscription agreement is written by people paid to protect one side of it, and you meet it at the worst possible moment: at the end of a hiring process, on move-in day, an hour before a launch.',
          'Skimming does not work, because the dangerous clauses do not look dangerous. They are grammatically boring, buried in a numbered subsection, and cross-referenced to a definition four pages earlier. The damage is done by "in accordance with Section 12.3", not by capital letters.',
          'A lawyer is the right answer for a serious contract, and Redline will never pretend otherwise. But you are not sending a €9-a-month SaaS agreement, a gym membership or a flat viewing you have to answer by tonight to a lawyer. For those, the realistic alternative to a machine read is no read at all.',
        ],
      },
      how: {
        h2: 'How it works',
        steps: [
          {
            h3: 'It splits the document by its own numbering',
            body: 'Before anything is analysed, the text is segmented along the structure the document already has — 4.2, §7, Article 3, ¶12. Every later flag therefore points at a real place in a real section, which is what makes the quotes checkable.',
          },
          {
            h3: 'A first pass proposes candidates against a trap taxonomy',
            body: 'The model does not free-associate about "risky language". It works against a curated taxonomy of the traps that actually recur in consumer and business contracts, each with a known severity and a known likelihood, and proposes candidates that match.',
          },
          {
            h3: 'A quote gate throws out anything it cannot prove',
            body: 'This step is deterministic, not a model: a candidate survives only if its quote exists in the source text. The document\'s own characters then replace the model\'s version of the quote. A flag that cannot point at a sentence in your document never reaches you.',
          },
          {
            h3: 'A second, independent reviewer tries to refute it',
            body: 'What survives the gate is handed to a fresh pass that reads the same document with the opposite job: confirm, call it overstated, or refute it outright. Unproven flags are dropped and overstated ones lose severity — the report shows both counts.',
          },
          {
            h3: 'What is left is ranked by what it costs you',
            body: 'The final order combines the severity of the clause type, how likely that trap is to bite in practice, and how confident the verifier was. You read from the top down and stop when you run out of stakes, not when you run out of patience.',
          },
        ],
      },
      useCases: {
        h2: 'When to run it',
        items: [
          {
            h3: 'Before a team rolls out a new SaaS tool',
            body: 'Someone has to read the terms before fifty colleagues put company data in them. Paste the agreement and you get the auto-renewal window, the data and liability clauses and the unilateral-change language in one pass, in time for the decision.',
          },
          {
            h3: 'A rental lease you must answer today',
            body: 'Leases are where notice periods, deposit deductions, repair obligations and automatic extensions hide. Reading a flagged list before the viewing beats discovering the clause when you try to leave.',
          },
          {
            h3: 'Freelance and contractor agreements',
            body: 'Payment terms, IP assignment, non-solicit, unlimited revisions, indemnity: the clauses that decide whether a good rate is actually a good deal. Run the draft before you counter-propose.',
          },
          {
            h3: 'Loans, insurance and anything with a schedule',
            body: 'Fees that only appear on early repayment, exclusions that quietly remove the reason you bought the policy, definitions that narrow a covered event. These are exactly the clauses that reward a slow, adversarial read.',
          },
          {
            h3: 'A second opinion on a contract you already read',
            body: 'You went through it yourself and it seemed fine. Ten minutes of machine reading either confirms that with an audit trail, or shows you the subsection you skimmed at three in the morning.',
          },
        ],
      },
      faq: {
        h2: 'Questions people ask',
        items: [
          {
            q: 'Is this legal advice?',
            a: 'No, and it cannot be. Redline is a fast, structured first read that tells you which clauses deserve a human. For anything with real money or real liability behind it, take the flagged list to a lawyer — you will get a better hour out of them for having one.',
          },
          {
            q: 'What can I put in?',
            a: 'Pasted text, a PDF that contains a real text layer, or a public URL the tool can fetch. A scanned photograph of a contract has no text to read, so run it through OCR first or paste the text yourself.',
          },
          {
            q: 'How do I know it is not inventing clauses?',
            a: 'Because a flag without a verbatim quote is deleted before you ever see it. The quote gate checks that the cited text really occurs in your document, then substitutes the document\'s own characters. That check is ordinary code, not a model deciding whether to trust itself.',
          },
          {
            q: 'Does it find everything?',
            a: 'No, and it is built to fail in the safer direction. Two passes and a quote gate mean a real trap can occasionally be dropped for lack of proof; the alternative — a confident list of traps that are not in your document — is far more dangerous. Read it as a ranked list of likely problems, not as a certificate.',
          },
          {
            q: 'Which languages does it read?',
            a: 'English and Russian documents, including the numbering conventions each uses — sections, paragraph marks, articles. The explanations come back in plain language rather than the legalese they describe.',
          },
          {
            q: 'What happens to my document?',
            a: 'It is processed to produce your report, which lives behind its own link. We do not publish, sell or resell what you send. Treat it like any online tool: do not paste material you are contractually forbidden to share.',
          },
          {
            q: 'How long does a scan take?',
            a: 'Usually a couple of minutes for a normal contract, because two independent passes read the whole document rather than skimming the first page. Long agreements take longer; the progress is visible while it works.',
          },
          {
            q: 'Is it free?',
            a: 'The scan is free and does not need an account. It costs us real money per document, which is a deliberate trade: it is the most convincing demonstration of how the studio builds that we could put on the internet.',
          },
        ],
      },
      cta: {
        title: 'Open Redline',
        body: 'Paste the contract you have been meaning to read. Two minutes, no account, and you will know which three clauses matter.',
        button: 'Check a contract',
      },
    },

    overlap: {
      name: 'Overlap',
      tagline: 'The hour that works for everyone.',
      category: 'Scheduling',
      meta: {
        title: 'Time zone meeting planner — Overlap',
        description: 'Put several people on one board, see when everyone is awake and at work, get the best one-hour windows ranked, and share the whole thing as a link.',
      },
      h1: 'Stop doing time zone math.',
      lede: 'Overlap lays several people\'s days on one line so you can see — not calculate — the hours a meeting can actually happen, and who pays for it when none of them are good.',
      what: {
        h2: 'What it does',
        body: [
          'Add people by city, by time zone or by a plain offset. Each one becomes a horizontal band of their own local day: grey while they are asleep, amber while they are awake but off the clock, green inside their working hours. The columns where the bands agree are your meeting.',
          'Working hours belong to the person, not to the board. A developer who starts at 11:00 and a client who stops at 16:00 both keep their real day, and the answer changes accordingly.',
          'Underneath, one-hour windows are ranked: how many people are at work, how many are merely awake, and — when nobody can have it easy — exactly who has to bend. Any window exports to a calendar file, and the whole board is a link you can send.',
        ],
      },
      why: {
        h2: 'Why the usual methods fail',
        body: [
          'Mental math is fine for two cities you know. It falls apart at four you do not, and it breaks completely in the two weeks each spring and autumn when one country has changed its clocks and the other has not.',
          'A world clock tells you what time it is somewhere. It does not tell you whether that person is asleep, at dinner, or three hours into their working day — which is the only thing you actually needed to know.',
          'A scheduling poll pushes the conversion onto everyone else and then blocks the booking until the slowest person replies. That is the work you were trying to avoid, redistributed.',
          'And the polite version of the problem is invisible: 08:00 in Berlin is an ordinary hour for a Berliner and a cruel one for someone in Los Angeles. Nobody notices until the invitation has already landed.',
        ],
      },
      how: {
        h2: 'How it works',
        steps: [
          {
            h3: 'Offsets come from the browser, not from a table',
            body: 'Every conversion goes through the standard Intl API and the browser\'s own IANA time zone database. There is no offset list of ours to go stale: if the browser knows a country changed its rules, so does the board.',
          },
          {
            h3: 'Daylight saving is resolved per person and per date',
            body: 'Pick a date in late March or late October and the board itself changes length — 46 half-hour columns on a day that loses an hour, 50 on a day that repeats one — because each row is computed from the real instant rather than a fixed offset.',
          },
          {
            h3: 'Columns are half an hour wide',
            body: 'Zones at :30 and :45 — India, Nepal, the Chatham Islands — line up honestly instead of being rounded to the nearest hour, which is the rounding that produces meetings nobody can attend.',
          },
          {
            h3: 'Windows are scored, not guessed',
            body: 'Being at work counts fully, being awake near working hours counts partly, being asleep disqualifies a window outright. Candidates are kept at least two hours apart so the suggestions are genuinely different options, and each person is flagged early, late or off-hours.',
          },
          {
            h3: 'The link is the document',
            body: 'People, names, working hours, date and anchor are all encoded in the URL. Nothing is uploaded and there is no account: sharing a board is sharing a link, and the person who opens it sees exactly what you saw.',
          },
        ],
      },
      useCases: {
        h2: 'When to use it',
        items: [
          {
            h3: 'A standup across three continents',
            body: 'Find out whether an hour inside everyone\'s working day exists at all — and when it does not, which person is paying for it, so the cost can be rotated instead of silently assigned to whoever complains least.',
          },
          {
            h3: 'Interviewing candidates abroad',
            body: 'The hour you propose is read as a signal about the company. Set the candidate\'s city, look at the green columns, and avoid asking someone to perform at 22:00 on a work night.',
          },
          {
            h3: 'Client and agency calls',
            body: 'You rarely know a new client\'s real working day. Set it once, send them the board, and let them counter-propose from the same picture instead of trading "does 3pm your time work?" for two days.',
          },
          {
            h3: 'Working two markets at once',
            body: 'One contract in Berlin, another in Singapore. Put both on the board with your own row in the middle and see, before you promise anything, how many hours of genuine overlap your day really contains.',
          },
          {
            h3: 'Calling family in another country',
            body: 'Here the grey band is the useful one: it tells you when a call would wake someone up, and the amber band tells you when they are awake but would rather be eating dinner.',
          },
        ],
      },
      faq: {
        h2: 'Questions people ask',
        items: [
          {
            q: 'Do I need an account?',
            a: 'No. Nothing to sign up for, nothing to install. Open the page, add people, send the link.',
          },
          {
            q: 'Where does my data go?',
            a: 'Nowhere. The people you add are encoded in the URL in your address bar and every calculation happens in your browser. Saved teams use your browser\'s own storage and stay on that device.',
          },
          {
            q: 'Does it handle daylight saving time?',
            a: 'Yes, per person and per date. On a transition day the board is literally a different length, because each row is derived from the real instant rather than from a stored offset.',
          },
          {
            q: 'My city is not in the list.',
            a: 'Type the IANA zone instead — Europe/Berlin, Asia/Kolkata, America/Sao_Paulo — or a plain offset like UTC+3 or +05:45. Both always work, including for places the city index does not cover.',
          },
          {
            q: 'How many people fit on one board?',
            a: 'Up to twelve. Beyond that the bands stop being readable, and in practice a meeting spanning more than twelve time zones needs a recording rather than a slot.',
          },
          {
            q: 'Can each person have different working hours?',
            a: 'Yes, including windows that cross midnight for night shifts. They travel in the link with everything else.',
          },
          {
            q: 'What if there is no hour when everyone is awake?',
            a: 'It says so plainly instead of inventing a green column, then offers the least-bad hour and names who would be asleep for it. A fair-rotation view helps spread that cost across a team over several weeks.',
          },
          {
            q: 'Does it work on a phone?',
            a: 'Yes. The board scrolls inside its own frame, the rows stay readable at small widths, and light and dark follow your system setting.',
          },
        ],
      },
      cta: {
        title: 'Open Overlap',
        body: 'Add two people and the city you keep getting wrong. Fifteen seconds is enough to see whether a good hour exists.',
        button: 'Find a meeting time',
      },
    },

    costof: {
      name: 'Cost Of',
      tagline: 'What things actually cost.',
      category: 'Calculators',
      meta: {
        title: 'Cost calculators for hidden costs — Cost Of',
        description: 'Free calculators that turn recurring meetings, an unused SaaS stack, context switching, a bad hire or an hour of downtime into one number you can share.',
      },
      h1: 'The costs nobody invoices.',
      lede: 'A weekly meeting, a forgotten subscription, an interruption, a bad hire, an hour of downtime — Cost Of turns each of them into a single figure on a receipt you can send to the person who decides.',
      what: {
        h2: 'What it does',
        body: [
          'Each calculator asks for the few inputs that actually move the number — how many people, at what seniority, for how long, how often — and returns one figure with the arithmetic shown underneath. No dashboards, no sign-up, no fourteen-step wizard.',
          'Salaries do not have to be guessed. Presets cover fifteen countries and ten roles at median gross pay in local currency, and every one of them is editable: use the preset to start the conversation, override it with your real numbers before you take it to a meeting.',
          'The result is a receipt. Copy it as a link, save it as an image, or open a share card whose link preview already carries the number — which is usually what makes the point in a chat thread without anyone having to click.',
        ],
      },
      why: {
        h2: 'Why these costs stay invisible',
        body: [
          'Nobody sends an invoice for a recurring meeting. It has no line item, no owner and no renewal date, so it never appears in the budget review that kills a €40-per-month tool — even when it consumes twenty times as much money every year.',
          'Time is the currency, and time is denominated in salaries, which people are reluctant to say out loud. Once an hour of a room becomes an amount, the argument changes from "this meeting feels long" to a number the person with the calendar can act on.',
          'The same blindness covers everything with a diffuse cost: subscriptions nobody cancels because each one is small, interruptions that cost far more than the minute they take, a hire that does not work out and quietly consumes a quarter of a team\'s year.',
          'None of these numbers need to be exact to be useful. An order of magnitude, with the assumptions visible and editable, is enough to make a decision that was previously being made by vibes.',
        ],
      },
      how: {
        h2: 'How it works',
        steps: [
          {
            h3: 'One pure model per calculator',
            body: 'Each calculator is a small, self-contained model with its inputs, its formula and its presentation kept separate. That is why the arithmetic can be shown to you in full — there is nothing behind the number except the number.',
          },
          {
            h3: 'Salary presets you can overrule',
            body: 'Fifteen countries by ten roles, at median gross pay in the local currency, with sources kept alongside the data. They are a starting point, not an authority: every field is editable and your override travels with the result.',
          },
          {
            h3: 'The link is the document',
            body: 'Inputs are encoded in the URL. Nothing is stored on a server, there is no account, and sending someone your scenario is sending them a link that reopens exactly the numbers you used.',
          },
          {
            h3: 'A receipt built to be forwarded',
            body: 'The output is deliberately shaped like something you can paste into a thread: a headline figure, the assumptions under it, and a share card whose preview shows the number before anyone opens the link.',
          },
        ],
      },
      useCases: {
        h2: 'When to use it',
        items: [
          {
            h3: 'Killing or shortening a recurring meeting',
            body: 'Eight people, one hour, every week. Put the annual figure next to the agenda and the conversation about whether it should be a written update becomes a short one.',
          },
          {
            h3: 'The annual SaaS clean-up',
            body: 'Every subscription looks affordable on its own. Totalled, with seats nobody uses, the stack usually produces a number that pays for something the team has been asking for all year.',
          },
          {
            h3: 'Arguing for focus time',
            body: 'Interruption costs are not the length of the interruption. Show what a fragmented day actually costs and "no meetings before noon" stops sounding like a preference.',
          },
          {
            h3: 'Making the case for one more hire',
            body: 'Run the cost of the wrong hire against the cost of the vacancy staying open. Both numbers are uncomfortable, and having both is what makes the decision defensible.',
          },
          {
            h3: 'Justifying reliability work',
            body: 'An hour of downtime has a price in lost revenue and in the people who stop what they are doing. That figure is what turns "we should fix the deploy pipeline" into a funded piece of work.',
          },
        ],
      },
      faq: {
        h2: 'Questions people ask',
        items: [
          {
            q: 'Is it free?',
            a: 'Yes — every calculator, no account, no limits, no ads. It runs entirely in your browser, which is why it can stay free.',
          },
          {
            q: 'Where do the salary numbers come from?',
            a: 'Published median gross pay per country and role, kept with their sources, in local currency. They are presets for a first pass, and every one of them can be replaced with your real figures.',
          },
          {
            q: 'Are my inputs sent anywhere?',
            a: 'No. They are encoded in the URL and computed in your browser. Visits are counted with cookieless analytics that records no personal data and no inputs.',
          },
          {
            q: 'How accurate is this?',
            a: 'As accurate as your inputs, and it shows you the arithmetic so you can judge. The point is not a precise figure to four digits but a defensible order of magnitude with the assumptions on the table.',
          },
          {
            q: 'Can I share a result?',
            a: 'That is the design. Copy the link, save a PNG of the receipt, or paste the share card into a chat where the preview already shows the number.',
          },
          {
            q: 'Can I use my own currency?',
            a: 'Yes. Country presets set a sensible default and you can change both the amounts and the currency; the receipt formats itself accordingly.',
          },
          {
            q: 'Which calculators are there?',
            a: 'The recurring meeting, the SaaS stack, context switching, a bad hire and downtime — the costs that come up most often in the arguments people actually have at work.',
          },
          {
            q: 'Will you add more?',
            a: 'When a real question keeps recurring, yes. If you rebuild the same spreadsheet every quarter, describe it to us and it may become the next one.',
          },
        ],
      },
      cta: {
        title: 'Open Cost Of',
        body: 'Pick the meeting that keeps ending without a decision. It takes about a minute to find out what it costs per year.',
        button: 'Run a calculator',
      },
    },

    whatsthisletter: {
      name: 'What\'s This Letter',
      tagline: 'The official letter, explained.',
      category: 'Letters',
      meta: {
        title: 'Official letters abroad, explained — What\'s This Letter',
        description: 'Upload a photo or PDF of a tax notice, fine or court letter in a language you barely read: what it is, who sent it, the exact deadline and what it asks.',
      },
      h1: 'What the letter says, in your language.',
      lede: 'A brown envelope from a tax office, a court or a debt collector, in a language you half read. What\'s This Letter reads it twice, tells you what it is, who sent it and by when you must act, and quotes the passages that matter — translated, and verified against the page.',
      what: {
        h2: 'What it does',
        body: [
          'You photograph the letter or upload the PDF. The engine reads it once to extract what it claims — sender, type of document, reference numbers, amounts, dates — and then reads it a second time with a different job: check every one of those claims against the document itself. Anything the second pass cannot find on the page is dropped before you see it.',
          'What comes back is short and in your language: what kind of document this is, which authority or company sent it, the exact deadline as a calendar date rather than "within 14 days of service", the key passages quoted in the original with the translation beside them, and what the document asks of you — procedurally. Pay this, reply by that date, appear here, send that form.',
          'Beside the reader sits a reference library: about ninety kinds of official notice across Germany, Spain, the United States, the United Kingdom and Russia — what each one is, who sends it, what usually follows. Every page is checked against the official source and carries the date it was last verified, so you can see how fresh it is.',
        ],
      },
      why: {
        h2: 'Why the letter feels worse than it is',
        body: [
          'An official letter abroad is frightening twice over. Once because it is in a language you read at half speed, and again because it is written in officialese — the register natives dread too, where nobody writes "pay by Friday" when "the amount referred to in section 2 is due within the period stipulated in §3(1)" is available.',
          'A translation app fixes only the first half. It gives you words, often the wrong words for a legal term, and it does not know that a German Mahnbescheid is not a bill, that a "notice of assessment" is not an accusation, or which of the four dates on the page is the one that matters. You end up with a fluent paragraph and the same knot in your stomach.',
          'The cost of not knowing is real and asymmetric. Most such letters are routine and want a small, specific thing by a specific date; the trouble starts when the date passes because the letter sat unread on the fridge. Knowing what it is, today, is usually the whole difference.',
          'There is a hard line, and it stays hard. What\'s This Letter explains what a document says and asks; it never tells you what to do about it. Whether to object, pay, appeal or call a lawyer is a decision about your situation, and that is advice — which this tool does not give, in any language.',
        ],
      },
      how: {
        h2: 'How it works',
        steps: [
          {
            h3: 'The document is read, not guessed at',
            body: 'A photo of a crumpled page or a scanned PDF becomes text first. Stamps, letterheads, reference numbers and tables are kept in place, because a deadline in a footer or an amount in a table is exactly the kind of thing that gets lost when a page is flattened into prose.',
          },
          {
            h3: 'A first pass extracts what the letter claims',
            body: 'Sender, document type, reference numbers, amounts, dates and demands are pulled into a structured record, each one paired with the passage it came from. The pass works against a catalogue of known notice types, so a German Steuerbescheid or a Spanish requerimiento is recognised rather than described from scratch.',
          },
          {
            h3: 'A second pass verifies every claim against the page',
            body: 'A fresh read of the same document takes the record and tries to break it: is that really the deadline, is that amount the total or one line of it, does the letter actually demand payment or merely announce a decision. A claim the verifier cannot anchor to the document is removed or marked uncertain — never silently kept.',
          },
          {
            h3: 'Deadlines are turned into dates',
            body: 'Letters count in "working days from service", "one month after notification", "the period under §70". The engine resolves those against the dates printed on the letter and tells you what it assumed — including when the assumption is a guess, so that you know which line to check.',
          },
          {
            h3: 'Nothing is kept',
            body: 'The letter is processed to produce your read and discarded as soon as the answer is on your screen. It is not stored, it is not attached to an account, and it is never used to train anything.',
          },
        ],
      },
      useCases: {
        h2: 'When to use it',
        items: [
          {
            h3: 'A tax office letter in a country you moved to',
            body: 'The Finanzamt, the Agencia Tributaria, HMRC and the IRS all write in a register nobody would use in speech. Find out whether this is an assessment, a request for documents or a reminder — and which date on it is the real one.',
          },
          {
            h3: 'A fine or penalty notice',
            body: 'Parking, transit, speed cameras, a missed registration deadline. These usually carry a short window in which paying is cheaper or objecting is still possible; knowing the window is worth more than knowing the amount.',
          },
          {
            h3: 'A court or debt-collection letter',
            body: 'The scariest envelope and the one where the date matters most. Learn whether this is a court order, a payment order you can object to, or a collector\'s demand, and exactly what the document says happens next.',
          },
          {
            h3: 'Something addressed to a relative who does not read the language',
            body: 'Parents who joined you abroad, a partner still learning. Read it for them in a minute, in a language you both share, then decide together what to do with it.',
          },
          {
            h3: 'Checking what a notice type even is, before one arrives',
            body: 'The reference pages stand on their own. Look up what a Bußgeldbescheid or a Section 8 notice is, who sends it and what usually follows, with the official source and the date the page was last checked.',
          },
        ],
      },
      faq: {
        h2: 'Questions people ask',
        items: [
          {
            q: 'Is this legal or tax advice?',
            a: 'No, and it will not become that. The tool explains what a document says, who sent it, by when it asks for something and what that something is. What you should do about it — pay, object, appeal, ignore, call someone — depends on your circumstances and is exactly the question we do not answer. For that, see a lawyer, a tax adviser or the free advice services most countries run.',
          },
          {
            q: 'Which languages does it read and answer in?',
            a: 'The letter can be in any of the languages the reference library covers; the answer comes back in English, Russian, German, Spanish, French or Portuguese — pick the one you think in. When the engine is unsure of a passage it says so rather than smoothing over it.',
          },
          {
            q: 'Is my letter stored?',
            a: 'No. It is read on a server to produce your answer and discarded the moment the answer exists. It is not saved, not attached to an account, not shown to anyone at the studio and never used to train a model. By the time you close the tab, the letter is already gone from our side.',
          },
          {
            q: 'What does it cost?',
            a: 'The reference pages are free with no limit, and so is your first read. After that a letter pass costs $5 and covers three reads over thirty days — enough for the letter, the reply to it and the one that comes after. Each read is two full passes on our machines, which is why it is not free forever.',
          },
          {
            q: 'How accurate is it?',
            a: 'Every claim you see has survived a second reading whose only job was to refute it, and anything it could not anchor to the page has been dropped or flagged. That makes it far more reliable than a single-pass summary, and still not infallible: a blurry photo, a missing second page or an unusual notice type can leave gaps. When the engine is guessing at a date, it says so.',
          },
          {
            q: 'What if the deadline has already passed?',
            a: 'It will tell you that plainly, with the date it derived and how, rather than hiding it. What a missed deadline means and what can still be done is a question about your situation, and that is where the tool stops and a human adviser begins.',
          },
          {
            q: 'Which countries are covered?',
            a: 'The reference library covers around ninety official notice types from Germany, Spain, the United States, the United Kingdom and Russia, each checked against the issuing authority\'s own publications and dated. The reader works best on letters from those five countries, because the verification pass then has a known type to check against.',
          },
        ],
      },
      cta: {
        title: 'Open What\'s This Letter',
        body: 'Photograph the envelope you have been avoiding. A minute from now you will know what it is and when it needs an answer.',
        button: 'Read a letter',
      },
    },
  },

  products: {
    relocating: {
      name: 'Relocating',
      tagline: 'Moving countries, minus the guesswork.',
      blurb: 'Open data turned into 33 client-side calculators, programmatic country corridors and a moderated live community — mirrored into 22 languages by its own translation pipeline.',
    },
    frontdesk: {
      name: 'FrontDesk',
      tagline: 'The price of record.',
      blurb: 'A public record of what things actually cost: every price sourced, dated and defended by an adversarial verifier, with a hash-chained history that cannot be quietly rewritten.',
    },
  },
}

export type ToolsContent = typeof toolsEn
