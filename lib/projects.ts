export type Category =
  | 'ai-tools'
  | 'creative'
  | 'audio'
  | 'productivity'
  | 'developer'
  | 'games'
  | 'security';

export type Feature = { title: string; body: string };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  url: string;
  repo?: string;
  category: Category;
  accent: string;
  year: string;
  status: 'live' | 'beta';
  summary: string;
  description: string[];
  features: Feature[];
  tech: string[];
  keywords: string[];
  faq?: { q: string; a: string }[];
};

export const CATEGORY_LABEL: Record<Category, string> = {
  'ai-tools': 'AI Tools',
  creative: 'Creative & 3D',
  audio: 'Audio & Music',
  productivity: 'Productivity',
  developer: 'Developer',
  games: 'Games & Play',
  security: 'Security',
};

export const CATEGORY_ORDER: Category[] = [
  'ai-tools',
  'creative',
  'audio',
  'productivity',
  'developer',
  'security',
  'games',
];
export const PROJECTS: Project[] = [
  {
    slug: 'lnd-ai',
    name: 'LND AI',
    tagline: 'Free all-in-one AI tools suite + 30 browser utilities',
    url: 'https://namansoni.in/',
    repo: 'https://github.com/NamanSoni78',
    category: 'ai-tools',
    accent: '#c2410c',
    year: '2025',
    status: 'live',
    summary:
      'The flagship: a free AI tools suite with text-to-image generation, text-to-speech in 22 Indian languages, speech-to-text, translation, image analysis, upscaling and background tools — plus 30+ browser utilities under one roof.',
    description: [
      'LND AI (namansoni.in) is the flagship property of the Naman Soni ecosystem — a single site that bundles the AI tools people actually reach for every day and pairs each one with a plain-language guide. Generate images from a prompt with a choice of 12 art styles and 9 canvas sizes, convert text to speech across 22 Indian languages and 40+ voices, transcribe audio back to text, translate up to 10,000 characters at a time, and run image analysis, upscaling, uncropping and background removal without installing anything.',
      'Underneath the AI layer sits a hub of 30+ no-signup browser utilities: QR codes, password generation, hashing, base conversion, colour conversion, unit conversion, OCR, image resize and conversion, a scientific calculator, a world clock, notes, a whiteboard, a QR/barcode scanner, an HTML sandbox, a network speed test and device sensors like a spirit level, inclinometer, speedometer and sound meter. Each tool is reachable directly from the sitemap with a matching /learn/ page that explains what it does.',
      'Every tool works on a free daily credit allowance that refreshes automatically — no sign-up required to start. The whole suite is built as a static-first Next.js app with the heavy AI work delegated to inference APIs, which keeps first paint fast and page weight low on Indian mobile networks.',
    ],
    features: [
      { title: 'Text to Image', body: '12 art styles, 9 image sizes, 1–4 images per batch and seed support for reproducible results.' },
      { title: 'Text to Speech', body: '22 Indian languages, 40+ voices, 0.5×–2× speed control and a free in-browser engine.' },
      { title: 'Speech to Text', body: 'Transcribe files or live microphone audio in English and major Indian languages.' },
      { title: 'Translation', body: 'English to and from 22 Indian languages, up to 10,000 characters per request.' },
      { title: 'Image toolkit', body: 'Upscale 2×, remove or replace backgrounds, uncrop, analyse and describe images.' },
      { title: '30+ browser utilities', body: 'Converters, generators, sensors, scanners and productivity tools — no signup, no install.' },
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'AI inference APIs', 'Web Audio', 'WebAssembly'],
    keywords: [
      'free AI tools',
      'text to image generator',
      'text to speech Indian languages',
      'online image upscaler',
      'background remover online',
      'free browser utilities',
    ],
    faq: [
      { q: 'Is LND AI free to use?', a: 'Yes. Every tool runs on a free daily credit allowance that refreshes automatically, and the browser utilities never consume credits at all. No sign-up is required to start.' },
      { q: 'Does LND AI require an account?', a: 'No. You can generate images, convert speech and use all 30+ utilities as a guest. An account only adds optional features such as saving history.' },
      { q: 'Which Indian languages are supported?', a: 'Text-to-speech and translation cover 22 Indian languages including Hindi, Marathi, Bengali, Tamil, Telugu, Gujarati, Kannada, Malayalam and Punjabi.' },
    ],
  },
  {
    slug: 'talk',
    name: 'Talk',
    tagline: 'AI companion chat with memory, voice calls and interactive stories',
    url: 'https://talkaicompanion.com/',
    category: 'ai-tools',
    accent: '#9d174d',
    year: '2025',
    status: 'live',
    summary:
      'An India-first AI companion app: chat and voice-call eleven characters who remember you, then step inside five interactive chat-fiction stories where your choices change the ending.',
    description: [
      'Talk (talkaicompanion.com) is two products in one app. The first is companion chat: eleven AI characters — from Arya the 2AM bestie to a fan-inspired anime companion and a midnight radio jockey — each with a distinct voice, written persona and a four-tier memory system that remembers your name, your stories and what you told them weeks ago. Companions support live voice calls with Indian voices, barge-in and call memory.',
      'The second is interactive chat fiction. Instead of reading a novel you play the protagonist: cinematic narration plays out, characters talk to you and to each other, and your choices move trust meters, change scenes and decide how the story ends. There are five worlds, including a fifty-day college romance and an anime rom-com.',
      'Talk is also deliberately opinionated about access. It is guest-first — type a name and start chatting, no OTP, no sign-up — and generous once you stay: a free account gets fresh credits every day (roughly fifty messages), with optional packs starting low and unlimited plans for heavy users. Hinglish comes first with a pure English mode, and the app installs as a PWA on Android and iOS.',
    ],
    features: [
      { title: '11 AI companions', body: 'Persona-written characters with distinct voices, humour and reply rhythms — Indian-first and Hinglish-aware.' },
      { title: '4-tier memory', body: 'Summaries, hard facts, an event log and semantic recall so companions remember what matters to you.' },
      { title: 'Live voice calls', body: 'Real-time voice conversations with Indian voices, barge-in support and call memory.' },
      { title: 'Interactive stories', body: 'Five chat-fiction worlds with a director engine, trust meters and endings you decide.' },
      { title: 'Guest-first access', body: 'Start chatting with just a name — no sign-up, no OTP, installable as a PWA.' },
      { title: 'Privacy controls', body: 'Optional 18+ mode is off by default, consent-first and clearly labelled.' },
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'PWA', 'Streaming LLM inference', 'Sarvam AI voice', 'Web Push'],
    keywords: [
      'AI companion chat',
      'AI girlfriend India',
      'Hinglish AI chat',
      'interactive chat stories',
      'AI voice call companion',
      'free AI companion app',
    ],
    faq: [
      { q: 'Is Talk free?', a: 'Yes to start. You can chat as a guest, and a free account gets a fresh daily credit allowance — roughly fifty messages a day. Optional packs and unlimited plans exist for heavier use.' },
      { q: 'Do I need to sign up to talk to an AI companion?', a: 'No. Talk is guest-first: type a name and start. An account is only needed to keep memory and credits across devices.' },
      { q: 'What are interactive stories?', a: 'Chat-fiction you live inside. Your choices move trust meters, unlock scenes and decide how each of the five stories ends.' },
    ],
  },
  {
    slug: 'onyx',
    name: 'Onyx Image Editor',
    tagline: 'Professional photo editor that runs entirely in your browser',
    url: 'https://onyx.namansoni.in/',
    repo: 'https://github.com/NamanSoni78/ONYX-Image-Editor',
    category: 'creative',
    accent: '#1e40af',
    year: '2025',
    status: 'live',
    summary:
      'A privacy-first browser photo editor with crop, filters, text, shapes, masking, annotation and format conversion — plus dedicated tool pages and comparison pages for high-intent searches.',
    description: [
      'Onyx is a full browser-based image editor that needs no sign-up and never uploads your photos: crop, resize, filter, blur, black-and-white conversion, flip and mirror, add text, mask into shapes, draw and annotate, and convert between formats, all client-side. It also ships dedicated purpose pages — resize, passport photo, and format converters for PNG, JPG, WebP, HEIC, SVG, BMP and GIF — plus honest comparison pages against other editors.',
      'What sets Onyx apart is the sheer breadth of task-specific pages. Instead of one generic editor, each common job has a landing page that explains the exact steps, which is both better for users and dramatically better for search: "crop images online for free", "resize images online", "convert photo to black and white" and dozens more each get their own answer.',
      'The whole tool is built as a client-side application, so images never leave your device and there is no upload wait. It is free forever with no watermarks, no account and no ads inside the editing surface.',
    ],
    features: [
      { title: 'Core editing', body: 'Crop, resize, rotate, flip, mirror, blur, filters and black-and-white conversion.' },
      { title: 'Text, shapes & masks', body: 'Add text, shapes, drawings and annotations, and mask images into custom shapes.' },
      { title: 'Format conversion', body: 'Convert between PNG, JPG, WebP, HEIC, SVG, BMP and GIF with dedicated pages per pair.' },
      { title: 'Purpose-built tools', body: 'Passport photo, social-media size presets and image-resize pages for specific jobs.' },
      { title: '100% private', body: 'All processing happens on your device — nothing is uploaded to a server.' },
      { title: 'Free forever', body: 'No sign-up, no watermark, no paywall on the editor.' },
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Canvas API', 'WebAssembly', 'Tailwind CSS'],
    keywords: [
      'free online photo editor',
      'crop image online',
      'resize image online',
      'png to jpg converter',
      'heic to jpg converter',
      'passport photo maker',
    ],
    faq: [
      { q: 'Is Onyx really free?', a: 'Yes — the editor is free forever with no watermark and no account required.' },
      { q: 'Are my photos uploaded anywhere?', a: 'No. Onyx processes images locally in your browser, so your photos never leave your device.' },
      { q: 'Can Onyx convert HEIC to JPG?', a: 'Yes, and so can it convert PNG, JPG, WebP, SVG, BMP and GIF, each with its own dedicated converter page.' },
    ],
  },
];
PROJECTS.push(
  {
    slug: 'newera',
    name: 'NewEra',
    tagline: 'Free online AI agent that codes, builds and deploys real apps',
    url: 'https://newera.namansoni.in/',
    category: 'developer',
    accent: '#0f766e',
    year: '2025',
    status: 'live',
    summary:
      'An autonomous AI agent that turns a sentence into a deployed web app: it plans the work, dispatches parallel sub-agents, triggers a real CI build on GitHub Actions and hands back a live URL.',
    description: [
      'NewEra is a free online AI agent for building and shipping software from a description. You describe the app you want in plain language; the agent plans the work, breaks it into parallel tasks, writes the code, runs the build and pushes the result live. It is not a code-completion toy — the test of success is a real URL serving a real app.',
      'What separates NewEra from other AI builders is the delivery chain. Work runs through a genuine CI pipeline on GitHub Actions rather than a hidden sandbox, so every project is built and verified the same way a human team would build it. Two deploy targets are supported, and repository creation is consent-gated so nothing is published without your approval.',
      'The agent also runs parallel sub-agents for independent slices of work, performs web research when it needs current facts or library APIs, and produces portable projects that you can clone and keep. Because it targets static output, the deployed sites are fast, cheap to host and indexable by search engines.',
    ],
    features: [
      { title: 'Describe then ship', body: 'Natural-language briefs become working apps with a live URL at the end.' },
      { title: 'Real CI builds', body: 'Every project is built and verified on GitHub Actions, not a hidden sandbox.' },
      { title: 'Parallel sub-agents', body: 'Independent modules are dispatched as parallel agents for faster delivery.' },
      { title: 'Built-in research', body: 'The agent searches the web for current facts, docs and library APIs mid-build.' },
      { title: 'Consent-gated repos', body: 'No repository or deployment is created without your explicit approval.' },
      { title: 'Portable projects', body: 'Standard project layouts you can clone, run and extend yourself.' },
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'GitHub Actions', 'Cloudflare Pages', 'LLM agent orchestration'],
    keywords: [
      'free AI agent',
      'AI app builder',
      'AI that deploys apps',
      'prompt to app',
      'autonomous coding agent',
      'online AI developer tool',
    ],
    faq: [
      { q: 'Is NewEra free?', a: 'Yes. NewEra is a free online AI agent — you describe what you want to build and it plans, codes, builds and deploys it.' },
      { q: 'How does NewEra verify what it builds?', a: 'It runs a real CI build on GitHub Actions, so every project is compiled and checked before it is delivered, rather than trusted at face value.' },
      { q: 'Do I own the projects NewEra creates?', a: 'Yes. Projects are portable and consent-gated: nothing is published without your approval, and you can clone the resulting repository.' },
    ],
  },
  {
    slug: 'monyx',
    name: 'Monyx Studio',
    tagline: 'AI music suite — vocal remover, karaoke, multitrack editor',
    url: 'https://monyx.namansoni.in/',
    repo: 'https://github.com/NamanSoni78/MONYX',
    category: 'audio',
    accent: '#6d28d9',
    year: '2025',
    status: 'live',
    summary:
      'A browser music studio with an AI vocal remover, a karaoke studio, a multitrack editor, an instrument pad and a video maker — all running client-side without an install.',
    description: [
      'Monyx Studio is an AI music suite that lives in the browser. Its centrepiece is the AI vocal remover: split a song into vocals and instrumental to make practice tracks, karaoke versions or sampling material. From there you can move into the karaoke studio, arrange takes on the multitrack editor, tap out ideas on the instrument pad or cut a simple video from your audio.',
      'It is built for Indian creators who work on phones and laptops without a studio budget: no plug-ins, no licences and no expert-level DAW learning curve. Everything runs on the client so audio never has to leave the device for the core editing steps.',
      'The suite is part of a wider portfolio of free creative tools and shares the same principle — do one job extremely well, in the browser, without a wall of settings in front of the user.',
    ],
    features: [
      { title: 'Vocal remover (AI)', body: 'Separate vocals from instrumental to build karaoke tracks or backing stems.' },
      { title: 'Karaoke studio', body: 'Sing over a separated backing track with a fast, distraction-free workflow.' },
      { title: 'Multitrack editor', body: 'Layer and arrange multiple audio tracks in a browser-based timeline.' },
      { title: 'Instrument pad', body: 'Tap out beats and melodies on a responsive touch pad.' },
      { title: 'Video maker', body: 'Turn audio projects into a shareable video without extra software.' },
      { title: 'No install', body: 'Runs fully in the browser — no plug-ins, licences or heavyweight DAW.' },
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Web Audio API', 'AudioWorklet', 'AI stem separation'],
    keywords: [
      'AI vocal remover',
      'karaoke maker online',
      'free music editor online',
      'multitrack editor browser',
      'instrumental extractor',
      'AI music studio',
    ],
    faq: [
      { q: 'Is Monyx Studio free?', a: 'Yes — it is a free browser music suite. The vocal remover, karaoke studio, multitrack editor, instrument pad and video maker all run in your browser.' },
      { q: 'Does the vocal remover work on any song?', a: 'It runs AI source separation on the audio you provide to produce a vocals stem and an instrumental stem, which you can then use for karaoke or practice.' },
      { q: 'Do I need to install anything?', a: 'No. Monyx Studio runs entirely in the browser — there is no plug-in, download or licence to manage.' },
    ],
  },
  {
    slug: 'gaana-banana',
    name: 'Gaana Banana',
    tagline: 'AI se apna gaana banaiye — personalised songs for every occasion',
    url: 'https://gaana.namansoni.in/',
    category: 'audio',
    accent: '#b45309',
    year: '2025',
    status: 'live',
    summary:
      'Generate a personalised Hindi song from a name and a theme — romantic, birthday, shaadi, bhakti and more — with transparent, rupee-first micro pricing.',
    description: [
      'Gaana Banana is a personalised song generator built for Indian occasions. You give it a name and a theme, choose a short plan and it produces a ready-to-share song. Themes cover the moments people actually celebrate: Romantic, Birthday, Yaari (friendship), Shaadi, Family, Festival, Motivation, Bhakti, Funny, Sorry/Thanks, Achievement and fully custom ideas.',
      'The product is deliberately simple: three steps, plain Hindi copy and pricing in rupees starting from the lowest tier, so a first-time user in a tier-2 city understands exactly what they get before paying. There is no subscription trap for one-off songs.',
      'Gaana Banana sits alongside Monyx Studio and Dance Cat 3D in a growing family of music and creative tools — all browser-first and built around real Indian use cases rather than imported Western assumptions.',
    ],
    features: [
      { title: '12+ occasion themes', body: 'Romantic, Birthday, Yaari, Shaadi, Family, Festival, Motivation, Bhakti, Funny, Sorry/Thanks and more.' },
      { title: 'Name personalisation', body: 'The song is written around the recipient name and the story you give it.' },
      { title: 'Three-step flow', body: 'Name and theme, pick a short plan, song ready — no complicated studio.' },
      { title: 'Rupee-first pricing', body: 'Transparent low-cost plans in INR, no subscription lock-in for a one-off song.' },
      { title: 'Hindi-first UX', body: 'Copy written in the language users actually speak, not translated afterthoughts.' },
      { title: 'Share-ready output', body: 'A finished song you can send straight to family and friends.' },
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'AI music generation', 'Payments'],
    keywords: [
      'AI se gaana banao',
      'personalised song generator',
      'birthday song AI',
      'shaadi song generator',
      'Hindi AI song maker',
      'custom song for friend',
    ],
    faq: [
      { q: 'Gaana Banana kya hai?', a: 'Gaana Banana ek AI song generator hai — aap naam aur theme chuniye, chhota plan select kijiye, aur personal song turant ready ho jata hai.' },
      { q: 'Kitne ka hai?', a: 'Pricing rupee me hai aur sabse chhote plan se shuru hoti hai, taaki ek song banane ke liye subscription lena zaroori na ho.' },
      { q: 'Kaunse occasions ke liye gaana ban sakta hai?', a: 'Romantic, Birthday, Yaari, Shaadi, Family, Festival, Motivation, Bhakti, Funny, Sorry/Thanks aur Achievement — in sab ke liye theme available hai.' },
    ],
  });
PROJECTS.push(
  {
    slug: 'dance-cat-3d',
    name: 'Dance Cat 3D',
    tagline: 'Audio-reactive dancing cat music visualizer in the browser',
    url: 'https://dance.namansoni.in/',
    repo: 'https://github.com/NamanSoni78/dance',
    category: 'creative',
    accent: '#0369a1',
    year: '2025',
    status: 'live',
    summary:
      'A 3D dancing cat that reacts to whatever music you play — a browser toy that turns your microphone or audio file into a beat-synced visual performance.',
    description: [
      'Dance Cat 3D is exactly what it sounds like, executed with surprising polish: a 3D cat that dances in time with your music. Play an audio file or open your microphone and the cat moves with the beat, reacting to rhythm and energy in real time.',
      'It is a small, joyful experiment rather than a productivity tool — the kind of project that shows off what a browser can do with WebGL, the Web Audio API and a healthy sense of humour. It loads fast, needs no account and works on a phone.',
      'Dance Cat 3D is part of a portfolio that deliberately mixes serious developer tooling with creative playthings. Not everything has to ship revenue; some things ship delight.',
    ],
    features: [
      { title: 'Audio-reactive rig', body: 'The cat moves in time with the music using real-time audio analysis.' },
      { title: 'Mic or file', body: 'Feed it an audio file or open your microphone and dance along.' },
      { title: 'Real-time 3D', body: 'Rendered in the browser with WebGL — no download, no plugin.' },
      { title: 'Works on mobile', body: 'Designed to run on a phone as well as a desktop.' },
      { title: 'No account needed', body: 'Open the page and play — nothing to sign up for.' },
    ],
    tech: ['Three.js', 'WebGL', 'Web Audio API', 'JavaScript', 'Next.js'],
    keywords: [
      'dancing cat music visualizer',
      'audio reactive 3D',
      'browser music visualizer',
      '3D cat',
      'WebGL audio visualization',
    ],
  },
  {
    slug: 'khata',
    name: 'Khata',
    tagline: 'Daily money tracker for the way Indian households actually track cash',
    url: 'https://khata.namansoni.in/',
    repo: 'https://github.com/NamanSoni78/khata',
    category: 'productivity',
    accent: '#15803d',
    year: '2025',
    status: 'live',
    summary:
      'A no-nonsense daily expense tracker — the digital equivalent of the ledger book your family keeps in the drawer, with a fast dashboard and secure sign-in.',
    description: [
      'Khata is a daily money tracker built around a simple idea: most personal-finance apps are too complicated for the way people actually spend money. It keeps the workflow to the minimum — record what you spent, see where the month went, and check your dashboard when you want the bigger picture.',
      'It handles the practical realities of Indian household finance: mixed cash and digital spending, small everyday amounts and the need to check your position at a glance rather than through thick reports. Sign-in is required, so your data stays attached to your account.',
      'There is no budgeting religion here — no guilt-inducing charts or financial advice. Just a clean, fast ledger that does the bookkeeping so you can stop doing mental arithmetic.',
    ],
    features: [
      { title: 'Daily entry', body: 'Log spending in seconds, with the fastest possible path from open to saved.' },
      { title: 'Dashboard', body: 'See where the month went at a glance, without digging through reports.' },
      { title: 'Cash and digital', body: 'Built for mixed cash-and-UPI household spending rather than card-only assumptions.' },
      { title: 'Secure account', body: 'Sign-in keeps your ledger tied to you and available across devices.' },
      { title: 'No clutter', body: 'No ads, no financial upsells, no confusing categories to learn.' },
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Authentication'],
    keywords: [
      'daily money tracker',
      'expense tracker India',
      'khata app',
      'simple expense app',
      'daily expense diary online',
    ],
  },
  {
    slug: 'links',
    name: 'Links',
    tagline: 'A fast, ad-free link-in-bio page that fetches your favicons',
    url: 'https://links.namansoni.in/',
    repo: 'https://github.com/NamanSoni78/Links',
    category: 'productivity',
    accent: '#0e7490',
    year: '2025',
    status: 'live',
    summary:
      'A link-in-bio service with your own handle, automatic favicon fetching, no ads and no trackers — one clean page for everything you share.',
    description: [
      'Links is a link-in-bio tool that does the job without the baggage. You claim a handle, collect everything you share into a single page, and it fetches favicons for your links automatically so the page looks sharp instead of like a wall of blue text.',
      'The pitch is speed and honesty: fast everywhere, no ads, no trackers. In a category crowded with services that monetise your audience, a version that just renders your links quickly is a genuine differentiator.',
      'It is built for people who put a single URL in their bio — creators, students, freelancers — and want it to load instantly on a slow connection.',
    ],
    features: [
      { title: 'Your own handle', body: 'Claim a clean username before someone else does — the page is yours.' },
      { title: 'Automatic favicons', body: 'Link icons are fetched for you, so the page looks considered without manual work.' },
      { title: 'Fast everywhere', body: 'Optimised to load quickly even on slow mobile connections.' },
      { title: 'No ads, no trackers', body: 'Your visitors are not monetised and are not followed around the web.' },
      { title: 'One page focus', body: 'A single shareable URL for everything you want people to find.' },
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Favicon API'],
    keywords: [
      'link in bio',
      'linktree alternative',
      'free link page',
      'no ads link in bio',
      'creator links page',
    ],
  },
  {
    slug: '3dfy',
    name: '3Dfy',
    tagline: 'Infinite AI 3D worlds, a make-3D studio and a name playground',
    url: 'https://3dfy.namansoni.in/',
    repo: 'https://github.com/NamanSoni78/3dfy',
    category: 'creative',
    accent: '#7e22ce',
    year: '2025',
    status: 'live',
    summary:
      'Three tools in one: a World Studio that renders infinite AI 3D worlds into film, a Make 3D Studio for generating objects, and a 3D name playground.',
    description: [
      '3Dfy is a creative 3D lab split into three experiences. World Studio turns a prompt into an endless AI-generated 3D world and can render it into a film-like flythrough. Make 3D Studio generates 3D objects. The Playground is a lighter, playful space around 3D names and shapes.',
      'The headline line says it well — \"Infinite AI worlds, rendered into film.\" The intent is not to replace professional 3D software but to give anyone with a prompt a way to explore generated space and record a result worth sharing.',
      'It belongs to the same portfolio family as Onyx and Monyx: browser-first creative tools that put a surprising amount of capability behind a very simple first screen.',
    ],
    features: [
      { title: 'World Studio', body: 'Generate infinite AI 3D worlds and render them into a shareable film.' },
      { title: 'Make 3D Studio', body: 'Create 3D objects from a prompt in a focused studio interface.' },
      { title: '3D Playground', body: 'A lighter space for playing with 3D names, shapes and ideas.' },
      { title: 'Browser-based', body: 'Runs in the browser with no heavyweight 3D software to install.' },
      { title: 'Share-ready renders', body: 'Produce something you can actually show other people, not just a viewport.' },
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Three.js', 'WebGL', 'AI 3D generation'],
    keywords: [
      'AI 3D world generator',
      'text to 3D',
      'AI 3D studio',
      'browser 3D world',
      'infinite AI worlds',
    ],
  });
PROJECTS.push(
  {
    slug: 'chess',
    name: 'Chess vs Bot',
    tagline: 'Play chess against a bot with full move history and promotion',
    url: 'https://chess.namansoni.in/',
    repo: 'https://github.com/NamanSoni78/chess',
    category: 'games',
    accent: '#374151',
    year: '2025',
    status: 'live',
    summary:
      'A clean browser chess game — human versus bot, with play settings, a move history panel and proper pawn promotion.',
    description: [
      'Chess vs Bot is a self-contained browser chess game. It gives you play settings, a live game-status readout, a move history you can follow, and correct pawn promotion — the details that separate a real chess implementation from a demo board.',
      'There is no account, no puzzle grind and no advertising between moves: open the page and play. The bot opponent makes it useful for a quick game without waiting for a human, and the visible move history makes it easy to review where the game turned.',
      'It is a compact, readable implementation — the opposite of a bloated game client — and it loads instantly on mobile.',
    ],
    features: [
      { title: 'Human vs bot', body: 'Play a full game of chess against a computer opponent.' },
      { title: 'Play settings', body: 'Configure the game before you start instead of diving into defaults.' },
      { title: 'Move history', body: 'Follow the game move by move and review where it went wrong.' },
      { title: 'Pawn promotion', body: 'Full rules support, including promotion of a pawn on the back rank.' },
      { title: 'No signup, no ads', body: 'Open the page and play — nothing between you and the board.' },
    ],
    tech: ['HTML', 'JavaScript', 'CSS', 'Chess engine', 'Minimax'],
    keywords: [
      'play chess online',
      'chess vs computer',
      'free chess game browser',
      'chess bot online',
      'online chess no signup',
    ],
  },
  {
    slug: '2fa',
    name: '2FA Authenticator',
    tagline: 'Free two-factor code generator and manager that lives in your browser',
    url: 'https://2fa.namansoni.in/',
    repo: 'https://github.com/NamanSoni78/2FA',
    category: 'security',
    accent: '#7c2d12',
    year: '2025',
    status: 'live',
    summary:
      'A complete authenticator, not a toy: TOTP, HOTP and standard 2FA types, a three-step setup with QR and setup-key paste, encrypted optional sync and QR-based backup and restore.',
    description: [
      '2FA Authenticator is a browser-based two-factor authentication app that takes the job seriously. It supports every standard 2FA type, offers a three-step setup — copy your setup key, paste it into the vault, then tap to copy codes forever — and handles QR import for services that give you a code instead of a secret.',
      'The design assumption is that most people do not want another account just to hold their second factor. You can use it without an account at all; an optional account adds encrypted sync so your codes follow you between devices, and QR-based backup and restore protects you if you lose a device.',
      'It is built to be genuinely usable day to day: live codes with zero friction, one-tap copying and a clear, readable vault rather than a cryptic list of six-digit rows.',
    ],
    features: [
      { title: 'Every standard 2FA type', body: 'TOTP and HOTP support for the services people actually use.' },
      { title: 'Three-step setup', body: 'Copy the setup key, paste it into the vault, tap to copy codes forever.' },
      { title: 'Works without an account', body: 'Use it as a guest — no sign-up gate in front of your second factor.' },
      { title: 'Encrypted account sync', body: 'Optional sync keeps your codes available across your devices.' },
      { title: 'QR backup & restore', body: 'Move anywhere with a QR export and get your vault back in seconds.' },
      { title: 'Zero-friction codes', body: 'Live codes with one-tap copying and a readable vault view.' },
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Web Crypto API', 'TOTP/HOTP', 'QR codes'],
    keywords: [
      'free 2FA authenticator',
      'TOTP code generator',
      'online authenticator app',
      'two factor authentication browser',
      'encrypted 2FA sync',
    ],
    faq: [
      { q: 'Is 2FA Authenticator really free?', a: 'Yes. The authenticator itself is free, including guest use without an account. An optional account adds encrypted sync across devices.' },
      { q: 'Where are my 2FA secrets stored?', a: 'By default they stay in your browser. If you enable the optional account, secrets are stored encrypted so they can sync between your devices.' },
      { q: 'Which two-factor authentication types are supported?', a: 'The standard types, including TOTP and HOTP, with QR import and manual setup-key entry.' },
    ],
  },
  {
    slug: 'pi-browser-agent',
    name: 'Pi in the Browser',
    tagline: 'A browser agent powered by Pollinations, with your own Pollen account',
    url: 'https://pi-browser-agent.namansoni.in/',
    repo: 'https://github.com/NamanSoni78/pi-browser-agent',
    category: 'developer',
    accent: '#a21caf',
    year: '2025',
    status: 'beta',
    summary:
      'An agent that runs in the browser on top of Pollinations: connect your Pollen account, choose a model, and optionally tunnel traffic over WISP.',
    description: [
      'Pi in the Browser is an experimental agent that runs directly in the browser and is powered by Pollinations, the open generative-AI platform. You connect your own Pollinations account, choose from available models and start working without a server-side middleman holding your key.',
      'It includes a network tunnel built on WISP, which lets browser requests run over a socket-based tunnel when direct access is restricted. That makes it a useful playground for exploring agent behaviour in constrained environments.',
      'The project is explicitly a work in progress, and it is marked as such. It also has a second life as a small open-source contribution: the author maintains a copy of the Pollinations repository on GitHub, and this agent explores what that platform makes possible from a browser tab alone.',
    ],
    features: [
      { title: 'Browser-native agent', body: 'Runs in the browser instead of behind a hosted server.' },
      { title: 'Bring your Pollen account', body: 'Connect your own Pollinations account and use your own quota.' },
      { title: 'Model choice', body: 'Pick which available model powers the agent.' },
      { title: 'Network tunnel', body: 'WISP-based tunnelling for environments where direct requests are blocked.' },
      { title: 'Open source', body: 'Source available on GitHub, alongside the author’s Pollinations fork.' },
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Pollinations API', 'WISP', 'WebSockets'],
    keywords: [
      'browser AI agent',
      'Pollinations agent',
      'open source browser agent',
      'WISP tunnel',
      'free AI agent online',
    ],
  },
  {
    slug: 'spot-the-ai',
    name: 'Spot the AI',
    tagline: 'Real or AI? A timed browser game about telling images apart',
    url: 'https://spot-the-ai.edgeone.dev/',
    repo: 'https://github.com/NamanSoni78/spot-the-ai',
    category: 'games',
    accent: '#166534',
    year: '2025',
    status: 'live',
    summary:
      'A timed browser game that shows you an image and asks a deceptively hard question: was this made by a human or generated by AI?',
    description: [
      'Spot the AI turns the question everyone is already asking into a game. You are shown an image under time pressure and have to decide whether it is real or AI-generated. Get it right and the timer keeps running; get it wrong and you learn something about how good your eye really is.',
      'The game is built in TypeScript and deployed on EdgeOne, and it works as both a bit of fun and a practical calibration exercise: most people are far worse at spotting generated images than they assume, and a timed game makes that vivid.',
      'Like the rest of the portfolio it is small, fast, free and needs no account — one idea, executed cleanly.',
    ],
    features: [
      { title: 'Timed rounds', body: 'Decide real or AI before the clock forces your hand.' },
      { title: 'Real vs generated', body: 'A genuine test of how well you can spot AI imagery.' },
      { title: 'Instant feedback', body: 'Find out immediately whether your instinct was right.' },
      { title: 'Free and account-free', body: 'One click and you are playing — nothing to install or sign up for.' },
      { title: 'Open source', body: 'Written in TypeScript and published on GitHub.' },
    ],
    tech: ['TypeScript', 'React', 'Vite', 'EdgeOne Pages'],
    keywords: [
      'spot the AI game',
      'real or AI quiz',
      'AI image detection game',
      'browser game AI images',
      'timed AI guessing game',
    ],
  },
);

export const PROJECTS_BY_CATEGORY: Record<Category, Project[]> = CATEGORY_ORDER.reduce(
  (acc, c) => ({ ...acc, [c]: PROJECTS.filter((p) => p.category === c) }),
  {} as Record<Category, Project[]>,
);

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function allSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}
