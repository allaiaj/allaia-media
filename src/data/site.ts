export const site = {
  name: "Allaia Media",
  domain: "allaiamedia.com",
  tagline: "The systems behind brands that grow.",
  description:
    "Allaia Media builds the unsexy infrastructure - web, ads, content, search - that turns founder-led brands into compounding revenue machines. Month-to-month. No long contracts. No theatre.",
  cal: "https://cal.com/allaiamedia/discovery",
  whatsapp: "https://wa.me/447000000000",
  instagram: "https://instagram.com/allaia.media",
  email: "hello@allaiamedia.com",
  markets: ["Dubai", "Bali", "Manila", "London", "New York"],
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = [
  { group: "Studio", links: [
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
  ]},
  { group: "Trust", links: [
    { label: "Reviews", href: "/reviews" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ]},
  { group: "Legal", links: [
    { label: "Privacy", href: "/privacy" },
    { label: "Imprint", href: "/imprint" },
  ]},
];

// All 8 sites in a uniform 4-up grid. Same aspect ratio, same device,
// same size - cleaner read than the previous mixed bento.
export const work = [
  {
    slug: "ayahs-beauty",
    url: "ayahs-beauty-greenford.pages.dev",
    title: "Ayahs Beauty",
    label: "Laser, lashes & advanced facials · Greenford",
    device: "desktop" as const,
    featured: true,
  },
  {
    slug: "neolution",
    url: "neolution-face-and-body.pages.dev",
    title: "Neolution Face & Body",
    label: "Aesthetic clinic · Isle of Dogs",
    device: "desktop" as const,
  },
  {
    slug: "nurse-vella",
    url: "nurse-vella-loughton.pages.dev",
    title: "Nurse Vella Skin & Beauty",
    label: "Aesthetic clinic · Woodford Green",
    device: "desktop" as const,
  },
  {
    slug: "dulci-beauty",
    url: "dulci-beauty-dagenham.pages.dev",
    title: "Dulci Beauty & Trend",
    label: "Aesthetic clinic · Dagenham",
    device: "desktop" as const,
  },
  {
    slug: "bare-essence",
    url: "bare-essence-leyton.pages.dev",
    title: "Bare Essence Skin Clinic",
    label: "Electrolysis · Leyton",
    device: "desktop" as const,
  },
  {
    slug: "prisca-skincare",
    url: "demo-priscas-skincare.pages.dev",
    title: "Prisca's Skincare",
    label: "Personalised skin treatments · Hounslow",
    device: "desktop" as const,
  },
  {
    slug: "maisy-rose",
    url: "maisyrose-flowers-collier-row.pages.dev",
    title: "Maisy Rose Flowers",
    label: "Florist since 1993 · Collier Row",
    device: "desktop" as const,
  },
  {
    slug: "simply-pizza",
    url: "simply-pizza-ilford.pages.dev",
    title: "Simply Pizza",
    label: "Plant-forward pizza · Ilford",
    device: "desktop" as const,
  },
];

export const services = [
  {
    n: "01",
    title: "Website Build",
    sub: "Sites built to sell, not to win awards.",
    body: "Conversion-first builds on a modern stack - fast load, mobile-first, SEO-ready. Strategy, copy, design, dev, launch - one operator, one day.",
    price: "from $399",
    cadence: "one-time build",
    timeline: "1 day",
    deliverables: [
      "Brand & narrative",
      "Wireframe & UX",
      "Design & dev",
      "Analytics & CRO",
    ],
  },
  {
    n: "02",
    title: "Google Business Profile",
    sub: "The map pin that actually pulls customers.",
    body: "Optimised profile, on-going posts, review engine, citation cleanup. Local search that ranks where it counts.",
    price: "from $199",
    cadence: "monthly · no lock-in",
    timeline: "30 days to rank",
    deliverables: [
      "Profile optimisation",
      "Review automation",
      "Weekly posts",
      "Citation cleanup",
    ],
  },
  {
    n: "03",
    title: "Meta Ads",
    sub: "Full-funnel paid that pays for itself.",
    body: "Creative strategy, video editing, audience architecture, weekly iteration. Three-month minimum so the data actually compounds.",
    price: "from $299",
    cadence: "monthly · ad spend separate",
    timeline: "3 mo minimum",
    deliverables: [
      "Creative direction",
      "Funnel architecture",
      "Daily optimisation",
      "Weekly reporting",
    ],
  },
  {
    n: "04",
    title: "Social Media",
    sub: "A feed you don't have to think about.",
    body: "AI-assisted content production with human taste on top. Reels, posts, captions, DMs - your social runs itself.",
    price: "from $399",
    cadence: "monthly · posts, reels, captions",
    timeline: "live in 14 days",
    deliverables: [
      "Strategy & calendar",
      "Reels & shorts",
      "Caption & DM ops",
      "Community management",
    ],
  },
  {
    n: "05",
    title: "Personal Brand Coaching",
    sub: "Build a name before you build a product.",
    body: "1:1 coaching for creators, consultants and professionals building their personal brand from scratch. Niche, positioning, voice, content cadence - everything you need to become someone in your space.",
    price: "Bespoke",
    cadence: "Pricing on request",
    timeline: "first call in 24h",
    deliverables: [
      "Niche & positioning",
      "Weekly 1:1 strategy call",
      "Content blueprint & hooks",
      "Audience growth playbook",
    ],
  },
];

export const process = [
  {
    n: "01",
    title: "Discovery",
    duration: "30 minutes",
    body: "One honest call. We map your numbers, your offer, your bottleneck. No deck, no pitch.",
  },
  {
    n: "02",
    title: "Proposal",
    duration: "48 hours",
    body: "A one-page plan. Exactly what we'd build, what it costs, what you'd see in 90 days. Approve or walk.",
  },
  {
    n: "03",
    title: "Build",
    duration: "7 to 30 days",
    body: "We ship. You review on Loom. Real assets, real campaigns, real launches - not endless decks.",
  },
  {
    n: "04",
    title: "Scale",
    duration: "month over month",
    body: "We iterate against your KPIs. Stack new channels only when the existing ones are paid back.",
  },
];

export const testimonials = [
  {
    quote:
      "We had a Squarespace site nobody could find. Six weeks later we're booked four weeks out. Allaia didn't sell us magic - they sold us a system.",
    name: "Dr. Lina M.",
    role: "Founder, Smile Studio",
    market: "Dubai",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    quote:
      "First agency that didn't try to sell me a retainer the size of a mortgage.",
    name: "Marcus K.",
    role: "Owner, Marcus & Co Barbers",
    market: "London",
    span: "",
  },
  {
    quote:
      "Our Meta ROAS went from 1.2 to 4.8 in eight weeks. They actually look at the data.",
    name: "Priya R.",
    role: "Founder, Glow Skin Lab",
    market: "Manila",
    span: "lg:col-span-2",
  },
  {
    quote:
      "Communication is unreal. WhatsApp reply in minutes, not days.",
    name: "Sven A.",
    role: "Director, Coastal Wellness",
    market: "Bali",
    span: "",
  },
  {
    quote: "Booked 32 new patients in our first six weeks. The funnel just works.",
    name: "Dr. Aaron M.",
    role: "Principal Dentist, Clear Aligners HK",
    market: "Hong Kong",
    span: "",
  },
  {
    quote:
      "I was tired of agencies that 'crushed it' on slides but couldn't show me a single new client. Allaia showed me fourteen by month two.",
    name: "Karim S.",
    role: "Founder, Athletica Mile End",
    market: "London",
    span: "lg:col-span-2",
  },
  {
    quote:
      "They told us not to run ads yet. Saved us four figures. That's when I knew.",
    name: "Hannah T.",
    role: "Founder, Vert Studio",
    market: "New York",
    span: "",
  },
  {
    quote:
      "Their content team makes me sound smarter than I am. Bookings up 3x.",
    name: "Rina A.",
    role: "Principal, RA Consulting",
    market: "Singapore",
    span: "",
  },
  {
    quote:
      "If you're a founder who hates being handled by an agency, hire these. They actually treat you like a peer.",
    name: "Marc B.",
    role: "Owner, Marc B Photography",
    market: "Berlin",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    quote: "We sold out our pre-launch in eleven days. Pre-launch.",
    name: "Talia G.",
    role: "Founder, Maven Skincare",
    market: "Tel Aviv",
    span: "",
  },
  {
    quote: "First agency that didn't try to upsell me on month two.",
    name: "Olivia R.",
    role: "Founder, Bloom Studio",
    market: "New York",
    span: "",
  },
  {
    quote:
      "From dead Instagram to twelve thousand engaged followers in four months. Real ones.",
    name: "Dion P.",
    role: "Founder, Forge Athletic",
    market: "Sydney",
    span: "lg:col-span-2",
  },
];

export const caseStudies = [
  {
    n: "01",
    slug: "simply-pizza",
    brand: "Simply Pizza",
    industry: "Hand-made pizza · plant-forward",
    market: "Ilford, East London",
    timeline: "Built in 1 day",
    problem:
      "New restaurant opening with no online presence, competing for orders against chain delivery apps that take 30% commission.",
    approach: [
      "Editorial site with the menu front-and-centre and a 'three pizzas, done right' positioning",
      "Google Business Profile from scratch + automated review collection",
      "WhatsApp ordering channel so loyal locals bypass the delivery-app fees entirely",
    ],
    metrics: [
      { v: "Sold out", l: "launch weekend" },
      { v: "4.9", l: "across 100+ Google reviews" },
      { v: "60%", l: "of orders direct (no commission)" },
    ],
    quote:
      "Allaia made our small place feel intentional. Locals know us now - and most order direct.",
    quoteBy: "Owner, Simply Pizza",
    accent: "peach",
  },
  {
    n: "02",
    slug: "prisca-skincare",
    brand: "Prisca's Skincare",
    industry: "Personalised skin treatments",
    market: "Hounslow, West London",
    timeline: "Built in 8 days",
    problem:
      "Premium skin clinic with no website, growing an Instagram following but losing serious clients to competitors who looked the part online.",
    approach: [
      "Editorial site featuring Kanupriya's expertise + treatment library",
      "Niche positioning around 'personalised skin treatments by Kanupriya Bakshi'",
      "Consultation lead form + WhatsApp triage so enquiries get answered in hours, not days",
    ],
    metrics: [
      { v: "+50%", l: "qualified consultations / month" },
      { v: "Page 1", l: "for personalised skin treatments Hounslow" },
      { v: "5x", l: "weekly consultations Q1" },
    ],
    quote:
      "Allaia turned my Instagram following into actual paying clients. The site does the qualifying for me.",
    quoteBy: "Kanupriya Bakshi, Founder",
    accent: "pink",
  },
  {
    n: "03",
    slug: "ayahs-beauty",
    brand: "Ayahs Beauty",
    industry: "Laser, lashes & advanced facials",
    market: "Greenford, West London",
    timeline: "Built in 1 day",
    problem:
      "Just qualified, no online presence. Walk-ins only, owner handling admin between clients.",
    approach: [
      "Conversion-first build with editorial-style hero + treatment menu",
      "Google Business Profile from scratch, review automation, weekly posts",
      "WhatsApp booking flow trained into the owner's daily workflow",
    ],
    metrics: [
      { v: "+42%", l: "bookings in 30 days" },
      { v: "#1", l: "for ‘laser hair removal Greenford’" },
      { v: "5.0", l: "across 60+ reviews" },
    ],
    quote:
      "Allaia made me look established before I felt established. Now I'm booked four weeks out.",
    quoteBy: "Ayah, Founder",
    accent: "violet",
  },
];

export const faqs = [
  {
    q: "How is this different from a normal agency?",
    a: "Normal agencies sell hours and decks. We sell outcomes built on systems. One operator runs your account end-to-end, you talk to a human on WhatsApp, and you can cancel any month (except Meta, where 3 months is the minimum because the data needs time to compound).",
  },
  {
    q: "Do you guarantee results?",
    a: "No serious operator guarantees results - if they do, run. What we guarantee is the system: clear KPIs, weekly iteration, transparent reporting, and honest conversations when something isn't working. So far that's translated to 100% retention.",
  },
  {
    q: "Why so much cheaper than other agencies?",
    a: "Because we use AI for the parts AI is good at (production, copy variants, research), and humans for the parts that matter (strategy, taste, judgement). The pricing reflects the leaner stack - not a worse output.",
  },
  {
    q: "Can I start with just one service?",
    a: "Yes - and we usually recommend it. The Stack Smart approach is: prove one channel, then layer on. We will never upsell you into something your business cannot absorb yet.",
  },
  {
    q: "Where are you based?",
    a: "We're fully remote with operators in five markets - Dubai, Bali, Manila, London, New York. Your account runs in your timezone, not ours.",
  },
  {
    q: "What if I already have a website?",
    a: "Great - we audit it for free on the discovery call. If it's converting, we leave it alone and focus on traffic. If it's not, we'll tell you honestly.",
  },
];

export const logos = [
  "Smile Studio",
  "Glow Skin Lab",
  "Marcus & Co",
  "Vert Studio",
  "Coastal Wellness",
  "Atelier Nine",
  "North Wood",
  "Maison Eight",
  "Lumen Clinic",
  "Studio Foxtrot",
  "Hale & Co",
  "The Bright Room",
];
