// Allaia Power — central site data
// All copy here is verbatim from the brief or written to the voice rules.
// No fabrication. Every claim is something Allaia has actually done.

export const site = {
  name: 'Allaia',
  brand: 'Allaia Power',
  legalEntity: 'ALLAIA Media',
  domain: 'allaiamedia.com',
  url: 'https://allaiamedia.com',
  tagline: 'Know your worth. Then charge it.',
  positioning:
    'Identity-led work for women building it underneath. Slow, deliberate, quietly compounding.',

  cities: ['Dubai', 'Bali'],

  // Stan Store routes (per JUDGEMENT_CALLS §3)
  // Note: `application` is now an email-based mailto, not a Stan link.
  // Stan houses the book + free downloads only — private-practice
  // applications come straight to Allaia's inbox.
  stan: {
    base: 'https://stan.store/allaia',
    book: 'https://stan.store/allaia',
    application:
      'mailto:allaiaj.luise@gmail.com' +
      '?subject=' + encodeURIComponent('Application — The Architecture') +
      '&body=' + encodeURIComponent(
        [
          'Hi Allaia,',
          '',
          'I would like to apply for The Architecture.',
          '',
          'Name —',
          'Instagram —',
          'Where I am based —',
          '',
          'What I am building, in a sentence —',
          '',
          'Where I am right now (the real version, not the LinkedIn one) —',
          '',
          'What has felt blocked, hard, or unspeakable —',
          '',
          'Why now —',
          '',
          'Thank you.',
        ].join('\n')
      ),
  },

  // External brand handles
  instagram: 'https://instagram.com/allaia.power',
  instagramArt: 'https://instagram.com/allaia.art',
  tiktok: 'https://tiktok.com/@allaiaj',
  youtube: 'https://www.youtube.com/@allaiaj',
  youtubeHandle: '@allaiaj',
  youtubeChannelId: 'UCnqP-tsoaQL7K_gUcCd-URQ',
  youtubeBio:
    'Psychology. Manifestation. Becoming your highest self. The psychology behind why your life is not changing — and the exact shifts that change everything.',
  // Featured long-form — Allaia can swap to a different ID anytime.
  youtubeFeatured: {
    video_id: '2OgR9fYThrw',
    title: 'How to quantum leap to a new reality.',
    description:
      'The deepest entry on the channel — twenty-two minutes on the exact shifts that move a life from where it is to where you have already pictured it. Slow, deliberate, identity-led.',
    duration: 'Long-form · 22 min',
    thumbnail: '/img/youtube/2OgR9fYThrw-max.jpg',
  },

  // Email
  email: 'allaiaj.luise@gmail.com',

  // The studio Allaia is COO at — the credibility lever
  blacklyne: 'https://blacklyne.ai/en',

  // OG / SEO
  og: {
    title: 'Allaia',
    description:
      'Author. Operator. Artist. Identity-led work — slow, deliberate, quietly compounding.',
    image: '/img/og/allaia-og.jpg',
  },
};

export const identities = [
  {
    key: 'author',
    label: 'Author',
    context: 'Become Her',
    body: 'A debut. Five parts. The book that holds everything else.',
    href: '/book',
    cta: 'The book',
    figure: 'FIG. 01',
    image: '/img/portraits/DV2vp-hiJzx.jpg',
    alt: '',
  },
  {
    key: 'operator',
    label: 'I build brands',
    context: 'COO · Blacklyne',
    body: 'Six years in marketing. Four years building companies. A studio shipping across four countries.',
    href: 'https://blacklyne.ai/en/',
    cta: 'Visit Blacklyne',
    figure: 'FIG. 02',
    image: '/img/portraits/DWlfa4-lOuC.jpg',
    alt: '',
  },
  {
    key: 'artist',
    label: 'Artist',
    context: '@allaia.art · The Rupture',
    body: 'Mixed-media on canvas. The pieces hold what the writing cannot.',
    href: '/art',
    cta: 'The work',
    figure: 'FIG. 03',
    image: '/img/art/DZXMu3ljwuS.jpg',
    alt: '',
  },
  {
    key: 'creator',
    label: 'Creator',
    context: '@allaia.power',
    body: 'A diary in motion. Posted on the days the work allows.',
    href: site.instagram,
    cta: 'Instagram',
    figure: 'FIG. 04',
    image: '/img/portraits/DXdmLBNFHa8.jpg',
    alt: '',
  },
] as const;

export const navItems = [
  // The Architecture is the main offer — 1:1 personal-brand practice — so it
  // leads the nav.
  { label: 'The Architecture', href: '/the-architecture' },
  // The Studio → the in-site page that highlights Blacklyne + pops a
  // preview modal. The page itself CTAs to blacklyne.ai.
  { label: 'The Studio', href: '/the-studio' },
  { label: 'Book', href: '/book' },
  { label: 'Brand Collabs', href: '/brand-collabs' },
  { label: 'Press', href: '/press' },
  { label: 'About', href: '/about' },
] as const;

export const heroBeats = {
  eyebrow: 'AUTHOR · OPERATOR · ARTIST',
  wordmark: 'Allaia',
  tagline: site.tagline,
  bookCue: 'Become her — a debut',
  ctas: [
    { label: 'The book', href: site.stan.book, primary: true, external: true },
    { label: 'The Architecture', href: site.stan.application, primary: false, external: true },
  ],
};

export const editorialOpening = {
  eyebrow: 'The work',
  lead: 'I build personal brands.',
  sub: 'For impact. For freedom. For a life that feels like a vacation.',
  body: 'The main work now is a private practice — twelve weeks, one to one. First we build the woman: the morning and evening routines of becoming her, and the limiting beliefs you leave behind. Then the brand around her — positioning, voice, rhythm — so you can leave the 9-to-5, earn from what you love, and live the life you actually dream about, whatever your niche.',
  body2:
    'The goal is impact and freedom: income from your passion, a name that opens doors, and the kind of life where most days feel a little like a vacation. The book, the collaborations, the numbers — those are the receipts that the method works.',
  ctas: [
    { label: 'The Architecture', href: '/the-architecture', primary: true },
    { label: 'The book', href: '/book', primary: false },
  ],
};

// Become Her — the book anchor
export const book = {
  title: 'Become Her',
  subtitle: 'A debut — out 2026',
  meta: 'OUT 2026 · 91,294 WORDS · 22 CHAPTERS',
  cover: '/img/book/become-her-cover.jpg',
  blurb:
    'Identity-led work for women who are tired of performing. Five parts. Twenty-two chapters. The foundational work behind everything else on this site.',
  endorsement: {
    quote:
      'The work is becoming who you are about to be. This book is the long letter for the women already doing it — and the slow first read for the women who are about to begin.',
    attribution: '— From the foreword',
  },
  cta: {
    label: 'Read the book',
    href: site.stan.book,
  },
};

// The Architecture — 1:1 private practice
export const architecture = {
  eyebrow: '1:1 PERSONAL BRAND PRACTICE · 12 WEEKS · BY SELECTION',
  heading: {
    pre: 'Impact, freedom, and a life',
    italic: 'that feels like a vacation.',
  },
  lead:
    'Twelve weeks of 1:1 work — the inner and the outer. The morning and evening routines that make you her, the limiting beliefs you finally put down, and the positioning, voice and rhythm that turn it into a personal brand. So you can leave the 9-to-5, earn from what you love, and wake up somewhere that feels like a vacation — no matter what niche you choose. Plus I teach you to set up your own system for pitching brands and getting paid.',
  lead2:
    'By selection. I take on only the few I see real potential in — the room is kept curated on purpose.',
  chapters: [
    {
      n: '01',
      title: 'Becoming',
      body: 'The woman first — before the niche, before the content. The morning and evening routines that make her a daily practice, and the work of stepping out of the negative self-talk and limiting beliefs that keep you invisible. This part works no matter what you are building. You cannot post from a self you have not yet become.',
    },
    {
      n: '02',
      title: 'Position',
      body: 'Who you are. Who you serve. What you stand for. We get the sentence right — the one a stranger repeats to a friend, the one that makes you the obvious choice.',
    },
    {
      n: '03',
      title: 'Voice',
      body: 'How you sound on the page, on camera, in the DMs. Not a brand voice doc — your actual voice, dialled up until people recognise it anywhere.',
    },
    {
      n: '04',
      title: 'Rhythm',
      body: 'A weekly cadence that ships content without draining you. Hooks, scripts, the posts you have been afraid to publish — turned into a habit that compounds.',
    },
    {
      n: '05',
      title: 'Receipts',
      body: 'The receipts of a life that pays for itself: income from your passion, inbound that actually qualifies, and the freedom to do the work from anywhere you want to wake up.',
    },
    {
      n: 'BONUS',
      title: 'The brand-pitch setup',
      body: 'I teach you to set up your own system for landing paid brand collaborations — the outreach, the media kit, the pitch that gets a yes — built the way I built mine, so your brand starts paying you back.',
    },
  ],
  outcomes: [
    'Morning and evening routines that make becoming her a daily practice',
    'The limiting beliefs and negative self-talk — named, and finally put down',
    'A clear positioning — the line that makes you the obvious choice',
    'A voice that is recognisably yours — no house style',
    'A weekly rhythm you do not dread on a Sunday night',
    'Income from what you love — not a job you quietly tolerate',
    'Your own system for pitching brands and getting paid — set up with me',
    'Impact, freedom, and a life you chose on purpose — from anywhere',
  ],
  format: { label: 'Format', value: 'Weekly 1:1' },
  length: { label: 'Length', value: '12 weeks' },
  seats: { label: 'Seats', value: '4 / cohort' },
  access: { label: 'Access', value: 'By selection' },
  intake: { label: 'Intake', value: 'Quarterly cohorts' },
  closing:
    'The goal is a life you would choose on purpose — off the 9-to-5, paid to do what you love, waking somewhere that feels like a vacation, with a name that carries real impact. I have built exactly that between Bali and Dubai, and The Architecture is the method behind it. I take on only the few I see real potential in, so the room stays curated and the work can go deep.',
  cta: {
    label: 'Apply for The Architecture',
    // Mailto application — Allaia reads and replies personally.
    // Body template prompts the applicant for the things she needs
    // to make a real decision: who, where, what they're building.
    href:
      'mailto:allaiaj.luise@gmail.com' +
      '?subject=' + encodeURIComponent('Application — The Architecture') +
      '&body=' + encodeURIComponent(
        [
          'Hi Allaia,',
          '',
          'I would like to apply for The Architecture.',
          '',
          'Name —',
          'Instagram —',
          'Where I am based —',
          '',
          'What I am building, in a sentence —',
          '',
          'Where I am right now (the real version, not the LinkedIn one) —',
          '',
          'What has felt blocked, hard, or unspeakable —',
          '',
          'Why now —',
          '',
          'Thank you.',
        ].join('\n')
      ),
  },
};

// Coven — community waitlist (Q3 2026)
export const coven = {
  eyebrow: 'COMMUNITY · LAUNCHING Q3 2026 · BY APPLICATION',
  heading: 'Coven.',
  lead:
    'An application-based community for women already living it — and the women on the edge of it.',
  body:
    'Coven exists for women who do not need more content. They need company. A room for the kind of woman who is letting herself be seen and known — without performing either. Phase one is waitlist only.',
  cta: { label: 'Join the waitlist', href: '/coven' },
};

// The Operator — anthracite section, COO at Blacklyne
export const operator = {
  eyebrow: 'OPERATOR · COO AT BLACKLYNE AI',
  heading: {
    pre: 'I build',
    italic: 'brands.',
  },
  body:
    'Six years in marketing. Four years building companies. I run Blacklyne AI as Chief Operating Officer — a premium digital presence and AI search optimization studio shipping across Germany, Dubai, the United Kingdom, and the United States. Helping brands become unmistakable in the AI search era. The same identity-led thesis I teach women, shipping at scale across four countries.',
  cta: { label: 'Visit Blacklyne', href: site.blacklyne, external: true },
  stats: [
    { label: 'In marketing', value: '6 years' },
    { label: 'As entrepreneur', value: '4 years' },
    { label: 'Markets', value: 'DE · AE · UK · US' },
    { label: 'Role', value: 'COO' },
  ],
};

// Instagram Reels — the diary in motion, with real view counts.
// IG won't let me scrape post URLs, so these are slots Allaia fills in.
// To wire a reel: paste the post URL from your IG (the part ending in
// /reel/SHORTCODE/) into `permalink`. The IG embed widget renders the
// full reel card with view + like counts inline. Update the captions
// to match.
//
// Example: 'https://www.instagram.com/reel/C8sXyZ9aBcD/'
// IG reels — clean editorial cards. The cover frame is fetched from
// instagram and lives in /public/img/instagram/. We show the frame +
// a quiet caption + a play icon. The like counts are NOT shown here
// (they belong to /brand-collabs as proof). Tap → opens the reel on IG.
export const instagramReels = [
  {
    permalink: 'https://www.instagram.com/reel/DYe7mNNsztZ/',
    poster: '/img/instagram/reel-DYe7mNNsztZ.jpg',
    likes: 49111,
  },
  {
    permalink: 'https://www.instagram.com/reel/DWk5dvejGdm/',
    poster: '/img/instagram/reel-DWk5dvejGdm.jpg',
    likes: 9083,
  },
  {
    permalink: 'https://www.instagram.com/reel/DZTyZlzMrJO/',
    poster: '/img/instagram/reel-DZTyZlzMrJO.jpg',
    likes: 7835,
  },
  {
    permalink: 'https://www.instagram.com/reel/DZTtOngsOBG/',
    poster: '/img/instagram/reel-DZTtOngsOBG.jpg',
    likes: 7081,
  },
  {
    permalink: 'https://www.instagram.com/reel/DY44G_Gs6rU/',
    poster: '/img/instagram/reel-DY44G_Gs6rU.jpg',
    likes: 9208,
  },
] as const;

// YouTube Shorts — kept as a secondary surface on /watch.
// Used when IG embeds aren't loaded (cookie consent, etc.).
export const youtubeShorts = [
  {
    video_id: '2SlojnJ92gY',
    caption: 'Act like HER. Daily.',
    thumbnail: '/img/youtube/2SlojnJ92gY-max.jpg',
  },
  {
    video_id: 'kMmCqM4_fM8',
    caption: 'The woman who puts herself first is not selfish. She is finally available.',
    thumbnail: '/img/youtube/kMmCqM4_fM8-max.jpg',
  },
  {
    video_id: 'BOnSE7mpYFM',
    caption: 'Freedom is not a fantasy. It is a decision.',
    thumbnail: '/img/youtube/BOnSE7mpYFM-max.jpg',
  },
  {
    video_id: 'gs2cF51OcBg',
    caption: 'Turning the pain into wisdom.',
    thumbnail: '/img/youtube/gs2cF51OcBg-max.jpg',
  },
  {
    video_id: 'hfOlRVhgGU8',
    caption: 'Reminder — you are that girl.',
    thumbnail: '/img/youtube/hfOlRVhgGU8-max.jpg',
  },
  {
    video_id: 'UVjpuW2JLFA',
    caption: 'Where you should put your energy.',
    thumbnail: '/img/youtube/UVjpuW2JLFA-max.jpg',
  },
] as const;

// More long-form videos for /watch — three after the featured.
export const youtubeMore = [
  {
    video_id: 'EN9oUoysqmM',
    title: 'Modern dating is a scam — part 1.',
    subtitle: 'The diagnosis. The conversation nobody on the app is willing to start.',
    thumbnail: '/img/youtube/EN9oUoysqmM-max.jpg',
  },
  {
    video_id: 'wjcdFmLD6XM',
    title: 'Modern dating is a scam — part 2.',
    subtitle: 'The part nobody on the app is willing to say.',
    thumbnail: '/img/youtube/wjcdFmLD6XM-max.jpg',
  },
  {
    video_id: 'w2JdvsGhlDw',
    title: 'Ten things classy women never do.',
    subtitle: 'On how to be feminine without performing femininity.',
    thumbnail: '/img/youtube/w2JdvsGhlDw-max.jpg',
  },
] as const;

// Newsletter
export const newsletter = {
  eyebrow: 'THE WORK · IN YOUR INBOX',
  heading: {
    pre: 'Slow writing.',
    italic: 'Occasional.',
  },
  body:
    'No funnels. No "limited time only" subject lines. The kind of email worth reading on a Sunday morning, on a balcony, with no agenda.',
  placeholder: 'your email address',
  cta: 'Subscribe',
};

// Closing CTA tiles
export const closingTiles = [
  {
    eyebrow: 'THE BOOK',
    title: 'Become Her',
    sub: 'Out 2026 — pre-order opens via Stan',
    href: site.stan.book,
    external: true,
  },
  {
    eyebrow: '1:1 PERSONAL BRAND',
    title: 'The Architecture',
    sub: 'Twelve weeks, four seats — by selection',
    href: site.stan.application,
    external: true,
  },
  {
    eyebrow: 'THE STUDIO',
    title: 'Blacklyne',
    sub: 'Premium digital + AI search · across four countries',
    href: 'https://blacklyne.ai/en/',
    external: true,
  },
  {
    eyebrow: 'INSTAGRAM',
    title: '@allaia.power',
    sub: 'The diary, in motion',
    href: site.instagram,
    external: true,
  },
] as const;

// Press features — selected pieces about Allaia. The home page surfaces
// the first one; the dedicated /press page shows the full list.
export const pressFeatures = [
  {
    outlet: 'Gulf Magazine',
    section: 'Lifestyle',
    date: '2026-05-14',
    dateLabel: 'May 2026',
    author: 'Akshat Kanitkar',
    readingTime: '4 min read',
    headline:
      'Luise Allaiaj Expands ALLAIA Media Across Dubai and US Markets',
    dek:
      'A rising entrepreneur whose journey reflects discipline, early responsibility, and a strong focus on building across industries.',
    pull:
      'Rather than building short-term campaigns, her focus is on intellectual property, systems, and assets that can compound.',
    href: 'https://gulfmagazine.co/luise-allaiaj-expands-allaia-media-across-dubai/',
    image: '/img/press/gulf-magazine.png',
  },
] as const;

export const footerNav = {
  brand: [
    { label: 'The Studio', href: '/the-studio' },
    { label: 'Book', href: '/book' },
    { label: 'Brand Collabs', href: '/brand-collabs' },
    { label: 'Coven', href: '/coven' },
  ],
  work: [
    { label: 'Watch', href: '/watch' },
    { label: 'Art', href: '/art' },
    { label: 'Press', href: '/press' },
    { label: 'About', href: '/about' },
  ],
  channels: [
    { label: 'Newsletter', href: '/newsletter' },
    { label: 'The Architecture (1:1)', href: '/the-architecture' },
    { label: 'Press inquiries', href: '/press' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Imprint', href: '/imprint' },
  ],
};
