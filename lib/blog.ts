export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  tags: string[];
  readingMinutes: number;
  /** Sections of the article. Each body paragraph is a string; a leading '## ' becomes an h2, '### ' an h3, '- ' a list item. */
  sections: { heading?: string; body: string[] }[];
  faq?: { q: string; a: string }[];
  related?: string[];
};

export const POSTS: Post[] = [];
POSTS.push(
  {
    slug: 'best-free-ai-tools-2026',
    title: 'Best Free AI Tools in 2026: Text-to-Image, Voice, Translation and 30 Browser Utilities',
    description:
      'A practical 2026 guide to the best free AI tools that need no sign-up — text-to-image generators, Indian-language text-to-speech, translation, background removal and the browser utilities that save the most time.',
    date: '2026-01-06',
    author: 'Naman Soni',
    tags: ['AI Tools', 'Free Tools', 'Text to Image', 'Text to Speech'],
    readingMinutes: 10,
    sections: [
      {
        body: [
          'Every week brings another "revolutionary" AI tool with a waitlist, a paywall and a sign-up form. Meanwhile the tools people actually use every day — generate an image for a poster, turn a paragraph into Hindi speech, strip a background, resize a photo for an exam form — are scattered across a dozen sites, each with its own login.',
          'This guide is the practical answer to that mess. It covers what genuinely good free AI tools look like in 2026, where the sign-up walls are real and where they are theatre, and how an all-in-one suite such as LND AI consolidates the daily workflow so you stop juggling twelve tabs.',
        ],
      },
      {
        heading: 'What actually makes an AI tool "free" in 2026',
        body: [
          'There are three categories of free, and only one of them is honest.',
          'The first is the trial that is not free at all: generous-looking credits that expire with a credit card on file. The second is the freemium trap, where the free tier is deliberately crippled so that any real work forces an upgrade. The third — and the only one worth relying on — is a genuine free allowance that refreshes, with no card required to start.',
          'The distinction matters because the cost of a bold "free" claim is your time. A tool that demands an account before you can test whether it is any good has already cost you more than the rupees it is trying to save.',
        ],
      },
      {
        heading: 'Text-to-image: what free tiers can really do',
        body: [
          'Text-to-image generation is the flagship AI feature and the one most often gated. A good free generator lets you pick a style, choose an aspect ratio and generate more than one variation per prompt so you can compare results. Look for seed control — the ability to reuse a seed to reproduce an image you liked — because that single feature turns generation from a slot machine into a tool.',
          'LND AI offers 12 art styles, 9 canvas sizes, 1 to 4 images per batch and seed support, all on a free daily credit allowance that refreshes automatically. For social posts, thumbnails and mockups that is more than enough, and it costs nothing to try before you commit to a paid model.',
        ],
      },
      {
        heading: 'Text to speech in Indian languages is the real differentiator',
        body: [
          'Most text-to-speech demos on the web handle English beautifully and mumble everything else. If you need Hindi, Marathi, Tamil or Bengali narration, the field narrows sharply. The Indian-language voice generators worth using cover 22 languages, offer dozens of voices, and let you change speaking rate — typically from half speed to double speed — for narration and study material.',
          'A free in-browser engine matters too. Cloud voices sound better, but a local engine means the feature still works when the network does not, and it costs no credits. Supporting both is the sign of a tool built for real use rather than a demo.',
        ],
      },
      {
        heading: 'Translation and transcription without the login wall',
        body: [
          'Translation tools are the quiet workhorse of Indian internet life: exam forms, government notices, WhatsApp forwards, documentation. A good free translator handles at least 22 Indian languages, accepts long text — up to ten thousand characters per request — and does not nag you to sign up after the first paragraph.',
          'Speech-to-text completes the loop. Being able to drop in a recording or speak into a microphone and get usable text back, without an account, is the difference between a tool you use once and one you keep in your bookmarks bar.',
        ],
      },
      {
        heading: 'The unglamorous utilities that save the most time',
        body: [
          'AI dominates the headlines, but the browser utilities are what most people open daily. A solid utility hub covers QR generation, password generation, hashing and base conversion, colour and unit conversion, OCR, image resizing and conversion, a scientific calculator, a world clock and image-to-text tools.',
          'The value is in consolidation. When thirty small tools live under one roof, you stop maintaining a mental index of which random site does which conversion. The LND AI hub bundles more than thirty of these browser utilities alongside the AI features, and they run locally with no credits consumed at all.',
        ],
      },
      {
        heading: 'How to build your own free AI workflow',
        body: [
          'Start with the job, not the brand. Write down the five things you actually do with these tools — generate an image, make a thumbnail, convert speech, translate text, resize a photo. Then find one suite that covers most of them.',
          'Prefer tools that work without an account for the first session, state their free allowance openly, and keep heavy processing on your own device where possible. Privacy is not a feature you should have to pay for, and in 2026 it is a reasonable baseline expectation.',
          'The ecosystem behind this site is one person\'s answer to that brief: a growing set of free, browser-first tools — LND AI, Onyx, Monyx, Gaana Banana and friends — each built to do one job well without a sign-up wall.',
        ],
      },
    ],
    faq: [
      {
        q: 'Are free AI image generators safe to use?',
        a: 'Prefer tools that do not require a credit card to start, state their daily allowance clearly and avoid uploading sensitive photos to servers when a local option exists. The best free suites let you try everything before anyone asks for money.',
      },
      {
        q: 'Which free tool converts text to speech in Hindi?',
        a: 'LND AI converts text to speech across 22 Indian languages with 40+ voices and speed control, and it includes a free in-browser engine that works without an account.',
      },
      {
        q: 'Do I need an account for these tools?',
        a: 'Not to start. LND AI and the other tools in this portfolio are guest-first: the daily credits and the thirty-plus browser utilities are usable without signing in.',
      },
    ],
    related: ['ai-voice-generator-indian-languages', 'free-photo-editor-comparison', 'remove-vocals-from-song-free'],
  },
);
POSTS.push(
  {
    slug: 'ai-voice-generator-indian-languages',
    title: 'Free AI Voice Generator for Hindi, Marathi, Tamil and 19 More Indian Languages',
    description:
      'How to turn text into natural speech in 22 Indian languages for free — voices, speed control, browser vs cloud engines, and what to look for in a text-to-speech tool.',
    date: '2026-01-08',
    author: 'Naman Soni',
    tags: ['Text to Speech', 'AI Voice', 'Indian Languages', 'Accessibility'],
    readingMinutes: 8,
    sections: [
      {
        body: [
          'Text-to-speech used to mean one robotic English voice reading a PDF. In 2026 it means Hindi narration for a YouTube video, Marathi study material for a student, Tamil audio for an exam-notice, Bengali voiceovers for a reel — and it can all be done free, in a browser tab.',
          'This guide covers how Indian-language text-to-speech actually works, what separates a usable voice generator from a demo, and how to get natural results on the first try.',
        ],
      },
      {
        heading: 'Why Indian-language TTS is harder than English',
        body: [
          'English TTS has had decades of tuning and an enormous corpus. Indian languages are more varied: Devanagari, Tamil, Telugu, Bengali and Gujarati scripts each carry different phonetics, and code-mixed Hinglish sentences — the way most people actually write — are a specific hard case.',
          'That is why a tool that claims \"supports Indian languages\" is not enough. The useful questions are: how many languages, how many voices per language, can you control the speaking rate, and does it handle mixed script without choking.',
        ],
      },
      {
        heading: 'The features that matter',
        body: [
          'Language breadth: 22 Indian languages is the practical ceiling worth looking for, covering the scheduled languages plus the ones people actually write in. Fewer than that and you will hit a wall eventually.',
          'Voice variety: a handful of voices per language, ideally with male and female options, so narration does not sound identical to every other video you publish.',
          'Speed control: a range from about 0.5x for language learners to 2x for speed-listening. For students in particular, slowing a passage down is the single most valuable feature and it is missing from most free tools.',
          'A local fallback engine: cloud voices sound best, but an in-browser engine that runs without a network keeps the tool working when connectivity does not.',
        ],
      },
      {
        heading: 'Getting natural results, not robotic ones',
        body: [
          'Punctuation is prosody. Commas create pauses and full stops create rests; a wall of unpunctuated text reads flat no matter how good the model is. Add punctuation before you generate.',
          'Break long passages into sentences. Very long strings degrade on every engine; keeping sentences under roughly 200 characters keeps intonation natural.',
          'Match speed to content. News and announcements read well near 1x, technical material is clearer at 0.85x, and casual content can go above 1.1x without sounding rushed.',
          'Where the option exists, prefer native script over romanised text — a Tamil word written phonetically in Latin letters will mostly be guessed, while the Tamil script will mostly be right.',
        ],
      },
      {
        heading: 'What you can build with free Indian-language TTS',
        body: [
          'Students use it to turn notes into audio for revision. Creators use it for voiceovers where hiring a narrator per language is not realistic. Small businesses use it for IVR-style announcements and accessibility. Teachers use it to make reading material available to learners who struggle with text.',
          'LND AI covers exactly this ground: 22 Indian languages, 40+ voices, speed from 0.5x to 2x, and a free in-browser engine alongside the higher-quality cloud voices. It is free to start and needs no account to try.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is free Indian-language text to speech actually usable?',
        a: 'Yes, for narration, study material and voiceovers. Quality varies by language and voice, so test a short paragraph in your target language before producing a long recording.',
      },
      {
        q: 'How many Indian languages should a TTS tool support?',
        a: '22 covers the scheduled languages and the common code-mixed use cases. Anything meaningfully below that will limit you.',
      },
      {
        q: 'Can I slow down the voice for learning?',
        a: 'Choose a tool with explicit speed control — LND AI offers roughly 0.5x to 2x, which is the range language learners actually need.',
      },
    ],
    related: ['best-free-ai-tools-2026', 'remove-vocals-from-song-free'],
  },
);
POSTS.push(
  {
    slug: 'free-photo-editor-comparison',
    title: 'Free Online Photo Editors Compared: Onyx vs Canva vs Photopea vs Pixlr',
    description:
      'A hands-on comparison of free browser photo editors — background removal, AI editing, layers, export options — and which one to open for which job.',
    date: '2026-01-11',
    author: 'Naman Soni',
    tags: ['Photo Editor', 'AI Tools', 'Design', 'Comparison'],
    readingMinutes: 9,
    sections: [
      {
        body: [
          'You need to edit a photo and you are not going to install Photoshop for it. The question is which browser editor to open — and the honest answer is that they specialise. This comparison cuts to what each one is genuinely best at.',
        ],
      },
      {
        heading: 'The jobs people actually open an editor for',
        body: [
          'Almost every casual edit falls into one of five buckets: remove a background, retouch and brighten, add text or a sticker, crop and resize to a platform ratio, or convert and compress for the web. Pick your editor by which bucket you are in.',
        ],
      },
      {
        heading: 'Onyx — the AI-first all-rounder',
        body: [
          'Onyx is built around AI editing: remove backgrounds, erase objects, retouch portraits and upscale — the operations that used to require either skill or paid plugins. It is fast, runs in the browser, and keeps the interface close to a single obvious action: upload, edit, export.',
          'It is the right first stop for creators processing social images, e-commerce listings and thumbnails, where the bottleneck is the AI cleanup rather than fine manual retouching.',
        ],
      },
      {
        heading: 'Canva — templates over precision',
        body: [
          'Canva wins on templates, brand kits and presentation-style layouts. If your task is \"make a post that looks designed\" rather than \"retouch this photograph\", it is quicker than anything else here. The trade-off is pixel-level control: Canva is a layout tool that happens to edit images.',
        ],
      },
      {
        heading: 'Photopea — the Photoshop clone',
        body: [
          'Photopea replicates the classic desktop editor almost feature for feature, including layers, layer masks, blending modes and PSD import. If you already know Photoshop shortcuts, it is free muscle memory. It is the most powerful of the four and the least forgiving for a casual edit.',
        ],
      },
      {
        heading: 'Pixlr — the quick retouch',
        body: [
          'Pixlr splits into a simple editor and a fuller one, with a decent set of one-click effects. It sits between Canva and Photopea: more image-editing muscle than Canva, less learning curve than Photopea.',
        ],
      },
      {
        heading: 'Which should you use?',
        body: [
          'Use Onyx when AI can do the work — background removal, object erasing, upscaling, portrait retouching. Use Canva when you need a designed layout fast. Use Photopea when you need real precision and layers. Use Pixlr for a fast manual retouch.',
          'For most people the practical workflow is Onyx for the heavy lifting and a layout tool only when a design template is genuinely required. Both live in the same free-tools universe this site documents, alongside the rest of Naman Soni\'s browser apps.',
        ],
      },
      {
        heading: 'Export, format and file size',
        body: [
          'The detail that decides whether an edit is finished is export. JPEG at a sensible quality is right for photographs and social posts; PNG matters when you need transparency, which is most background-removal jobs; WebP wins when page weight is the priority and the target supports it.',
          'Watch the file size your editor produces. A background-removed portrait saved as a full-resolution PNG can easily weigh several megabytes, and most platforms recompress it anyway, so export a WebP or a resized JPEG for anything going on the web. A good editor lets you set output dimensions and quality instead of dumping the original.',
          'For e-commerce listings, export a square crop with consistent padding across the whole catalogue. Consistency across images reads as professionalism far more than any single clever edit does.',
        ],
      },
    ],
    faq: [
      {
        q: 'What is the best free online photo editor?',
        a: 'It depends on the job: Onyx for AI operations like background removal and upscaling, Photopea for layer-based precision, Canva for templates, Pixlr for quick retouching.',
      },
      {
        q: 'Can I remove a photo background for free?',
        a: 'Yes. Onyx removes backgrounds automatically in the browser with no download and no account required to start.',
      },
    ],
    related: ['best-free-ai-tools-2026', 'browser-first-software-philosophy'],
  },
);

POSTS.push(
  {
    slug: 'remove-vocals-from-song-free',
    title: 'How to Remove Vocals From a Song for Free (Karaoke & Stem Separation Guide)',
    description:
      'A practical guide to removing vocals from any song using AI stem separation — what works, what it costs, and how to make clean karaoke or instrumental tracks at home.',
    date: '2026-01-13',
    author: 'Naman Soni',
    tags: ['Audio', 'Karaoke', 'AI Tools', 'Music'],
    readingMinutes: 8,
    sections: [
      {
        body: [
          'Making an instrumental from a song used to be an exercise in phase cancellation — flip the stereo channels and hope the vocals mostly disappear. It sounded like a cheap karaoke machine. AI stem separation changed that: modern models identify the voice and rebuild the rest, so the instrumental is clean.',
        ],
      },
      {
        heading: 'How AI vocal removal actually works',
        body: [
          'A separation model is trained on thousands of mixed songs where the individual stems are known. It learns what a vocal sounds like versus what drums, bass and other instruments sound like, and then estimates each source from the mixture. The result is four stems — vocals, drums, bass, other — instead of one flattened track.',
          'Because it is a learned estimate rather than a filter, quality depends on the model and the source. Pop mixes with a centred, well-recorded vocal separate beautifully. Dense, distorted mixes with heavy reverb are harder for any model.',
        ],
      },
      {
        heading: 'Getting a clean karaoke track',
        body: [
          'Start from the highest-quality audio you have — a lossless file if possible, not a 128 kbps stream. Compression artefacts confuse the model.',
          'Separate first, then decide. Exporting both the instrumental and the isolated vocal gives you options: instrumental for karaoke, vocal for a remix or a practice track.',
          'Expect some bleed at the quiet parts. If a phrase still shows faint vocal, a short fade or a light EQ cut around 1–3 kHz usually cleans it up.',
        ],
      },
      {
        heading: 'Free vs paid separation',
        body: [
          'Desktop tools like the open-source Demucs family give excellent results and cost nothing but patience and a GPU. Cloud services charge per minute but need no hardware. Browser-based tools are the fastest route when you want one song done now without installing anything.',
          'For the occasional karaoke track, a free browser tool is the right answer. Gaana Banana brings music and audio tools into a browser studio — generate, transform and work with tracks without a desktop app — which is the practical middle ground.',
        ],
      },
      {
        heading: 'Where separated stems are useful',
        body: [
          'Karaoke and sing-alongs, practice tracks for musicians learning a part, remixes and mashups, sampling, and cleaning up recordings where one instrument or voice needs treatment. Once you have stems, a whole class of editing opens up that a mixed file never allowed.',
        ],
      },
      {
        heading: 'Legal and ethical notes',
        body: [
          'Separating stems does not change who owns the song. A karaoke instrumental you make from a commercial track is fine for personal practice, a private party or a cover video where the platform has a licence, but republishing the original instrumental as your own work is not.',
          'If you plan to publish, check how the platform you are uploading to handles music rights, and prefer cover versions or licensed instrumentals when the audience is public. The technology is neutral; the use is not.',
          'For musicians, the more useful direction is the reverse: take your own rough mix, separate it, and use the isolated parts to fix a muddy bass or to build a reference mix. That is a workflow that never touches anyone else\'s copyright.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can I remove vocals from a song for free?',
        a: 'Yes. AI stem separation models remove vocals from most songs accurately, and free browser tools let you do it without installing anything.',
      },
      {
        q: 'Will the instrumental be perfect?',
        a: 'Usually close on well-produced pop tracks; dense or heavily reverbed mixes may retain faint vocal artefacts. Start from the best-quality source file for the cleanest result.',
      },
    ],
    related: ['best-free-ai-tools-2026', 'ai-voice-generator-indian-languages'],
  },
);
POSTS.push(
  {
    slug: 'free-two-factor-authenticator-guide',
    title: 'Free Two-Factor Authentication in Your Browser: A Practical 2FA Guide',
    description:
      'How to set up free two-factor authentication without an app store install — TOTP, HOTP, QR import, encrypted sync and backup, explained for normal people.',
    date: '2026-01-15',
    author: 'Naman Soni',
    tags: ['Security', '2FA', 'Privacy', 'Guide'],
    readingMinutes: 9,
    sections: [
      {
        body: [
          'Two-factor authentication is the single highest-value security change most people can make, and it is still something a surprising number of accounts lack. The usual objection is friction: another app, another account, another thing to lose. None of that is necessary.',
          'This guide explains how 2FA actually works, why a browser-based authenticator is a legitimate choice, and how to set it up so you are never locked out.',
        ],
      },
      {
        heading: 'What 2FA is actually protecting you from',
        body: [
          'Your password is a single secret, and it leaks constantly — through reused passwords, breaches and phishing. A second factor is something an attacker with your password does not have: a time-based code generated on a device only you hold.',
          'TOTP (time-based one-time password) is the dominant standard. Your device and the server share a secret, and both derive a fresh six-digit code every thirty seconds from that secret plus the current time. Nothing travels between them except the code, and an intercepted code is useless thirty seconds later.',
        ],
      },
      {
        heading: 'Why a browser authenticator is fine',
        body: [
          'A phone app is not magically more secure than a browser one. What matters is where the secret lives and whether it is encrypted. A well-built browser authenticator stores secrets locally by default, supports a guest mode so you can use it with no account at all, and only syncs — encrypted — if you choose to.',
          'The practical advantage is portability. A web authenticator works on any device you can open a browser on, including the laptop you are already using, which is exactly where you log in most often.',
        ],
      },
      {
        heading: 'Setting up a second factor in three steps',
        body: [
          'One: in the service you are protecting, choose \"set up authenticator app\" and copy the setup key (or scan the QR code). Two: paste the key into your authenticator vault — QR import handles services that only show a code. Three: enter the generated code back into the service to confirm, and you are done; from then on you tap to copy a fresh code whenever you sign in.',
          'Do this for the accounts that matter first: email, if your email can reset other passwords; your password manager; banking; and any account that holds payment details.',
        ],
      },
      {
        heading: 'Backups: the part everyone skips',
        body: [
          'The common 2FA disaster is losing the device and therefore the codes. A proper authenticator gives you a way out: an exportable backup, ideally as a QR code you can print or store offline, and encrypted sync so a second device already has your vault.',
          'Print the backup, put it somewhere physically safe, and treat it like the spare key to your digital life. It costs one minute now and saves your accounts later.',
        ],
      },
      {
        heading: 'A free option worth knowing',
        body: [
          '2FA Authenticator covers the full workflow: every standard 2FA type, a three-step setup, guest use without an account, optional encrypted account sync, QR backup and restore, and zero-friction code copying. It is free, lives in the browser, and is part of the same family of tools this site indexes.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is a browser 2FA authenticator as safe as an app?',
        a: 'Yes, if it stores secrets locally or encrypted and supports backup. The security comes from the shared secret and its storage, not from the platform it runs on.',
      },
      {
        q: 'What happens if I lose my device?',
        a: 'With a proper backup — an exported QR code or encrypted sync — you restore your codes on a new device. Without one, you fall back on the service\'s recovery codes, so always keep both.',
      },
      {
        q: 'Which accounts should I protect first?',
        a: 'Email first, because it can reset everything else. Then banking, your password manager and any account with payment details stored.',
      },
    ],
    related: ['best-free-ai-tools-2026', 'browser-first-software-philosophy'],
  },
);
POSTS.push(
  {
    slug: 'make-3d-models-in-browser-free',
    title: 'How to Make 3D Models in Your Browser for Free (No Blender Install)',
    description:
      'Text-to-3D, image-to-3D and sketch-to-3D explained — how to generate usable 3D models and assets from a browser tab, and where the workflow still needs a desktop tool.',
    date: '2026-01-17',
    author: 'Naman Soni',
    tags: ['3D', 'AI Tools', 'Creative', 'Tutorial'],
    readingMinutes: 8,
    sections: [
      {
        body: [
          '3D used to require a workstation, a month of learning and a licence. Generative 3D changed the entry point: you describe what you want, or upload a picture, and get a model back. It is not a replacement for a skilled artist, but it collapses the distance between an idea and a first asset.',
        ],
      },
      {
        heading: 'The three ways to generate a 3D model',
        body: [
          'Text to 3D: describe an object in words and the model generates geometry and texture. Excellent for props, product mockups and prototype assets where you need something plausible fast.',
          'Image to 3D: give it a photo or illustration and get 3D back. This works best with a single clear subject on an uncluttered background — the model has much less to infer than from a busy scene.',
          'Sketch to 3D: start from a rough drawing and let the model interpret it into geometry. Useful when you know the shape but cannot describe it, only draw it.',
        ],
      },
      {
        heading: 'What browser 3D generation is good at',
        body: [
          'It is excellent for the front of a project: mood, blockouts, props, background objects, placeholder assets and concept iteration. It is fast, it needs no install, and it lets non-artists participate in 3D without learning a DCC tool.',
          'Where it still lags is precision: exact dimensions, clean topology, rigging and production-ready UVs. For game-ready or print-ready work you will take the generated mesh into a proper tool for cleanup.',
        ],
      },
      {
        heading: 'A practical browser workflow',
        body: [
          'Generate several variations rather than one. Pick the closest, export it, then refine. Keep prompts specific about form, material and style — \"low-poly ceramic tea cup, matte glaze\" beats \"cup\".',
          '3DFY is a free 3D asset generator built around exactly these three paths — text, image and sketch — and it is the quickest way to see what browser generation can do for your project before you commit to any paid pipeline.',
        ],
      },
      {
        heading: 'Export formats and where the model goes next',
        body: [
          'Most browser generators export a standard mesh format — glTF or GLB for real-time engines and the web, OBJ for maximum compatibility, sometimes STL for printing. GLB is usually the right default: it is a single file that carries geometry, materials and textures together, which is why three.js, Unity and Unreal all read it.',
          'Once you have the file, the workflow splits by destination. For the web, drop the GLB into a viewer, keep the polygon count modest and compress textures — a 50 MB asset that takes a minute to load is worse than a simpler model that appears instantly. For games, import it and rebuild the collision and the level of detail by hand. For 3D printing, check the mesh is watertight and manifold before slicing, because generated geometry often has holes or intersecting faces that a printer cannot interpret.',
          'A useful habit is to treat the generated model as a first draft that already has correct silhouette and texture, and to spend your time on cleanup rather than modelling from nothing. On a prop or an environment filler, that can turn a two-day task into an afternoon.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can I really make 3D models without installing software?',
        a: 'Yes. Browser generators turn text, images or sketches into 3D assets you can export. For production-grade topology and rigging you still finish in a desktop tool.',
      },
      {
        q: 'Is text-to-3D good enough for real projects?',
        a: 'It is well suited to props, blockouts, mood and prototype assets. Precision work still needs a desktop modelling tool after generation.',
      },
    ],
    related: ['best-free-ai-tools-2026', 'browser-first-software-philosophy'],
  },
);

POSTS.push(
  {
    slug: 'link-in-bio-page-guide',
    title: 'Build a Free Link-in-Bio Page: The Complete Guide to a Personal Links Hub',
    description:
      'Why every creator needs a single links page, what belongs on it, how to design one that people actually click, and how to host it free with your own branding.',
    date: '2026-01-19',
    author: 'Naman Soni',
    tags: ['Links', 'Creators', 'Personal Brand', 'Guide'],
    readingMinutes: 7,
    sections: [
      {
        body: [
          'A link-in-bio page is the smallest piece of real estate a creator owns and, per pixel, probably the most valuable. It is the one address that belongs on every platform, and it is where an audience that likes you on a platform finds the work that is actually yours.',
        ],
      },
      {
        heading: 'Why not just put links in the bio',
        body: [
          'Most platforms allow one link, or hide links behind a tap, or throttle anyone going off-platform. A links page solves all three: one URL that works everywhere, updated without touching fourteen profiles, with room for as many destinations as you have.',
          'It also gives you a landing surface you control. You can see what people click, order links by importance, and change the page whenever your priorities change.',
        ],
      },
      {
        heading: 'What belongs on the page',
        body: [
          'Lead with the single most important destination — the thing you actually want a new visitor to do. Then your main channels, then your products or services, then anything else. Five to seven links is usually the ceiling before attention scatters.',
          'Give each link a purpose in its label. \"Portfolio\" tells someone where the click goes; \"My stuff\" does not. If a link needs an explanation to make sense, the label is wrong.',
        ],
      },
      {
        heading: 'Designing for clicks',
        body: [
          'Mobile-first is not optional: the overwhelming majority of link-in-bio traffic is a phone held in one hand. Large tap targets, generous spacing and no horizontal scrolling are the whole game.',
          'Keep contrast high, keep the page fast, and use your real identity — a face, a logo, a name — rather than a generic template so people know the page belongs to the person they clicked from.',
        ],
      },
      {
        heading: 'The Links tool',
        body: [
          'Links is a free, self-hosted link-in-bio builder from this portfolio: a clean personal links page you brand yourself, hosted without a subscription. It is the honest answer to paying a monthly fee for a page of buttons.',
          'If you are building your own version, the principles above are the spec: one clear primary action, honest labels, mobile-first layout and your own identity on top.',
        ],
      },
      {
        heading: 'Hosting and analytics without rent',
        body: [
          'A static links page needs no server. A single HTML file on any static host — Cloudflare Pages, GitHub Pages, Netlify — costs nothing at this scale and loads in well under a second. The domain is the only real expense, and it is worth it: your own name reads as more permanent than a handle on someone else\'s platform.',
          'For measurement, resist the urge to install a heavy tracker. A lightweight, privacy-respecting analytics script or the built-in click counts of your host tell you which links matter without slowing the page or requiring a cookie banner. The point is to learn which order works, not to build a profile of your visitors.',
          'Finally, treat the page as a living document. Reorder links when a product launches, retire ones that no longer apply, and refresh the headline seasonally. A links page that was updated last year signals a creator who stopped showing up.',
        ],
      },
    ],
    faq: [
      {
        q: 'How many links should a link-in-bio page have?',
        a: 'Five to seven focused destinations is usually right. Beyond that, clicks spread thin and the primary action gets lost.',
      },
      {
        q: 'Can I host a links page for free?',
        a: 'Yes. Static link pages can be hosted free on Cloudflare Pages, Netlify or GitHub Pages, which is exactly the approach the Links tool takes.',
      },
    ],
    related: ['browser-first-software-philosophy', 'best-free-ai-tools-2026'],
  },
);
POSTS.push(
  {
    slug: 'ai-companion-chat-guide',
    title: 'AI Companion Chat in 2026: What It Is Good For and How to Use It Well',
    description:
      'A grounded look at AI companion chat — what it does well, what it does not, how to get useful conversations, and how private your chats really are.',
    date: '2026-01-20',
    author: 'Naman Soni',
    tags: ['AI', 'Chat', 'Productivity', 'Guide'],
    readingMinutes: 8,
    sections: [
      {
        body: [
          'AI companion chat sits somewhere between a journal, a rubber duck and a very patient friend who is also a search engine. Used well it is genuinely useful. Used as a substitute for human connection or expert advice it is not. The difference is mostly in how you approach it.',
        ],
      },
      {
        heading: 'What companion chat is genuinely good at',
        body: [
          'Thinking out loud. Explaining something back to a patient listener is one of the oldest ways to find out what you actually understand, and an AI will happily play that role at any hour.',
          'Drafting and reframing. Turning a messy feeling into a message you can send, a plan you can follow, or a question you can ask a professional. It is a first pass, not a final answer.',
          'Practising conversations. Rehearsing a difficult talk, an interview or a negotiation in a low-stakes setting genuinely helps you do it in the high-stakes one.',
        ],
      },
      {
        heading: 'How to choose one',
        body: [
          'Read the product page before you type anything personal. Three questions settle most of it: Does it need an account, and if so what does it store? Is there a clear statement about whether chats are used for training? Can you delete a conversation cleanly?',
          'Speed and tone matter more than model names for this use case. A companion you open because it is one tap away will actually be used at midnight, when the value is highest. A technically superior tool locked behind an install and a sign-up will not.',
          'Prefer products that are honest about their limits. A companion that says it is a thinking tool, not a clinician, is more trustworthy than one that implies emotional authority it does not have.',
        ],
      },
      {
        heading: 'What it is not',
        body: [
          'It is not a therapist, a doctor or a lawyer, and it should not be relied on for decisions in those domains. It is also not a relationship: it does not remember you the way a person does, and it has no stake in your life.',
          'The honest framing is a tool for thinking, not a replacement for people. Treat its confidence as fluency, not certainty.',
        ],
      },
      {
        heading: 'Getting better conversations',
        body: [
          'Give context: who you are, what you have already tried, what outcome you want. Ask for the shape you want back — a list, a script, three options, a counterargument. Push back when an answer feels generic; specificity is usually hiding in the follow-up.',
        ],
      },
      {
        heading: 'Privacy expectations',
        body: [
          'Assume anything you type may be stored and reviewed unless the product explicitly says otherwise. A companion chat that runs in the browser and is clear about what it keeps is a reasonable default for personal conversations.',
          'Talk AI Companion is a free browser-based companion chat in this portfolio, built as a personal, mobile-friendly space for exactly this kind of thinking-out-loud conversation.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is AI companion chat a replacement for therapy?',
        a: 'No. It can help you organise thoughts or rehearse conversations, but mental-health support needs a qualified human professional.',
      },
      {
        q: 'Are my AI companion chats private?',
        a: 'That depends entirely on the product. Check what it stores and whether it uses conversations for training; prefer tools that are explicit about both.',
      },
    ],
    related: ['best-free-ai-tools-2026', 'browser-first-software-philosophy'],
  },
);

POSTS.push(
  {
    slug: 'track-expenses-without-spreadsheets',
    title: 'How to Track Expenses Without Spreadsheets (Digital Ledger Guide)',
    description:
      'A simple, honest system for tracking daily expenses and small-business accounts — why spreadsheets break down, what a ledger needs, and how to keep it running.',
    date: '2026-01-21',
    author: 'Naman Soni',
    tags: ['Finance', 'Productivity', 'Khata', 'Guide'],
    readingMinutes: 7,
    sections: [
      {
        body: [
          'Most people do not fail at tracking money because they cannot do arithmetic. They fail because the system is heavier than the habit. A spreadsheet is flexible enough to model anything, which is exactly why it slowly grows into an unmaintained monster.',
        ],
      },
      {
        heading: 'Why spreadsheets break',
        body: [
          'A spreadsheet has no opinion about what a transaction is. Every new category, person or account needs a column, a formula and a rule, and one stray edit can silently break a total. On a phone — which is where expense tracking actually happens — it is close to unusable.',
        ],
      },
      {
        heading: 'What a ledger actually needs',
        body: [
          'Three things: fast entry, per-person or per-category accounts, and a total you can trust. Anything beyond that is optional. If adding a transaction takes more than a few seconds, the system will be abandoned, so entry speed is the feature.',
          'For small businesses and shared households, the per-person view matters most — you need to know who owes what, not just the grand total.',
        ],
      },
      {
        heading: 'Keeping the habit alive',
        body: [
          'Log at the moment of spending, not at the end of the day. Record the amount, who it was with and what it was for — nothing else. Review weekly rather than daily, and reconcile against your bank or wallet monthly so drift never compounds.',
        ],
      },
      {
        heading: 'Why a mobile-first ledger wins',
        body: [
          'Expense tracking fails or succeeds on the phone. Spending happens on the move, and if recording a purchase means opening a laptop and finding a file, the entry will never be made. A ledger that opens in a browser tab, remembers the last category used and takes a number and a tap is a ledger that survives week three.',
          'A browser ledger has a second advantage over a native finance app: nothing to install, nothing to update, and it works on whatever device you are holding — phone, tablet or a borrowed laptop. For a shared household or a small shop with more than one person, that means everyone can enter their own spending from their own device into the same book.',
        ],
      },
      {
        heading: 'Categories that actually get used',
        body: [
          'Most people start with twenty categories and end up using six. Food, transport, bills, shopping, health and a catch-all will cover the overwhelming majority of daily spending. Keep the list short and resist splitting a category the first time it feels ambiguous — ambiguity in a category name is a sign the category is doing too much.',
          'For a business ledger the split is different: the categories should line up with what you report, typically income, cost of goods, operating expenses and tax set-asides. Choosing them at the start saves re-labelling everything at the end of the year.',
        ],
      },
      {
        heading: 'A free option',
        body: [
          'Khata is a free digital expense ledger in this portfolio: fast entry, per-person accounts, running totals, built for everyday use and small-business bookkeeping. It is the lightweight version of the spreadsheet that never grows teeth.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is a spreadsheet or a ledger app better for expenses?',
        a: 'For a handful of categories a spreadsheet works; for daily use and per-person accounts a purpose-built ledger is faster and harder to break.',
      },
      {
        q: 'How often should I reconcile expenses?',
        a: 'Log entries as they happen, review weekly and reconcile against your bank or wallet once a month.',
      },
    ],
    related: ['best-free-ai-tools-2026', 'browser-first-software-philosophy'],
  },
);
POSTS.push(
  {
    slug: 'browser-first-software-philosophy',
    title: 'Browser-First Software: Why the Best Tools Need No Install',
    description:
      'The case for browser-first software — install-free tools, instant access, data you control, and why this portfolio is built that way instead of as native apps.',
    date: '2026-01-22',
    author: 'Naman Soni',
    tags: ['Product', 'Web', 'Philosophy', 'Design'],
    readingMinutes: 6,
    sections: [
      {
        body: [
          'Ask someone to install an app and you lose most of the room. Ask them to open a link and you keep almost all of it. That single asymmetry explains why browser-first software keeps winning for everyday tools.',
        ],
      },
      {
        heading: 'The install tax',
        body: [
          'Every install is a decision, a download, a permission prompt and a small piece of trust spent. Native apps can earn that; most utilities cannot. A tool that loads in a tab costs the user nothing to try and nothing to uninstall.',
          'The web also fixes distribution. One deployment reaches every platform, updates are instant, and there is no app store review standing between a fix and the person who needs it.',
        ],
      },
      {
        heading: 'Where the browser is genuinely good enough',
        body: [
          'Modern browsers have the APIs that used to justify native code: canvas and WebGL for graphics, Web Audio for sound, local storage and IndexedDB for data, camera and microphone for input, plus service workers for offline. For editors, generators, dashboards, ledgers and utilities, the gap has closed.',
          'What remains genuinely native is heavy compute, long background work and deep OS integration. A browser-first product should be honest about that line rather than pretend it does not exist.',
        ],
      },
      {
        heading: 'Local-first as the default',
        body: [
          'The strongest version of browser-first is local-first: your data lives on your device, the app works without a network, and sync is an explicit choice rather than a hidden dependency. It is better for the user — privacy, speed, offline — and cheaper for the developer, who is not running a database for every visitor.',
        ],
      },
      {
        heading: 'Offline, speed and the cost of a tab',
        body: [
          'Two practical benefits are easy to miss. The first is speed: a browser tool that loads in a tab starts instantly, whereas a native app launch is a splash screen and a wait. The second is honest costs. Running a desktop app per user costs the developer nothing per launch, and running a server-backed web app costs something on every visit. Local-first browser software sits in the sweet spot — the reach of the web with the economics of a native app.',
          'Offline support closes the loop. With a service worker, a browser tool can load and work with no network at all, which is why browsers are now the default home for notes, editors, ledgers and players. The user gets reliability; the developer gets a product that does not page them at 3 a.m. because a database is down.',
        ],
      },
      {
        heading: 'How this portfolio applies it',
        body: [
          'Every project in this ecosystem is browser-first: a 2FA authenticator, an expense ledger, a 3D generator, a music player, a browser agent and an AI companion, all reachable by link with no install step. The trade-off is deliberate — instant access over deep OS integration, and user-owned data over server lock-in.',
          'This hub itself follows the same rule. It is a static site: pages that load fast, work without JavaScript for their content, and can be read by both people and search engines.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is browser software as capable as native apps?',
        a: 'For editors, generators, utilities and dashboards, yes. Native still wins for heavy computation, background work and deep OS integration.',
      },
      {
        q: 'What does local-first mean?',
        a: 'Your data is stored on your own device first, the app works offline, and syncing is an opt-in choice rather than a requirement.',
      },
    ],
    related: ['best-free-ai-tools-2026', 'link-in-bio-page-guide'],
  },
);

export const POSTS_SORTED: Post[] = [...POSTS].sort((a, b) =>
  a.date < b.date ? 1 : a.date > b.date ? -1 : 0,
);

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function allPostSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}

export function postsByTag(tag: string): Post[] {
  return POSTS_SORTED.filter((p) =>
    p.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
  );
}

export function allTags(): string[] {
  const set = new Set<string>();
  for (const p of POSTS) for (const t of p.tags) set.add(t);
  return [...set].sort();
}
