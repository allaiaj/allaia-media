# CONCEPT — Allaia Power

Site: `allaiamedia.com` (rebuild)
Repo: `blacklyne-ai/allaia` (private)
Tech: Astro 5 static · Tailwind v3.4 · GSAP · self-hosted Playfair Display + Cormorant Garamond + Inter
Author: Blacklyne, Senior Creative Direction

---

## 1. Archetype

**The Published Author + Global Operator who also coaches, paints, and travels.**

Four identities held as one. The book anchors it. The COO role at Blacklyne evidences it. The art deepens it. The coaching narrows it. They cohere because they share a single thesis — *identity-led work compounds; performance does not* — and because they share one woman.

The site's job is not to sell coaching. The site's job is to position Allaia as the rare creator-of-real-things — author, operator, artist — who happens to coach a curated few and run a community. Coaching becomes the natural downstream of attention earned through the book, the studio, and the work.

The bar is `phoebephilo.com`, not Sam Ovens. The voice is Joan Didion, not Alex Hormozi. The site reads in 2030 the way it reads in 2026 — slow, photo-forward, editorial.

## 2. Positioning (one line)

> *"Identity-led content for women who are tired of performing — and ready to do the slow, unsexy work of becoming who they actually are underneath."*

## 3. Palette rationale

| Token | Hex | Role |
| --- | --- | --- |
| Cream | `#F2EDE5` | Primary surface — the editorial page. Never `#FFFFFF`. |
| Warm bone | `#FAF6EE` | Secondary surface — used for elevated cards and subtle inset blocks. |
| Deep warm-black | `#1A1A1A` | Primary text — the published-author weight. |
| Terracotta | `#B85542` | Warm accent — Bali ritual, dark feminine, used for pull quotes, drop caps, single accent moments. Never for buttons-everywhere. |
| Sage | `#8B9D7E` | Natural accent — restrained. Used for rules, subtle data, and the editorial breath. |
| Warm brown | `#6B4F3D` | Depth — used in serif sub-heads and the byline layer when terracotta would over-warm. |
| Deep ink | `#0E0D0B` | Dark section break — the Operator (COO at Blacklyne) anthracite premium section. Per MOO playbook. |

What this palette is **not**: not pink, not rose-gold, not Goop pastel, not white-wellness, not Instagram-millennial. It is the colour of a printed book left on a Bali bed at golden hour.

## 4. Typography rationale

| Family | Role | Weights |
| --- | --- | --- |
| **Playfair Display** | Display — hero, section headlines, drop caps, pull quotes. Italic is used for the brand moments. | 700 / 800 / 900 + italic |
| **Cormorant Garamond** | Body — long-form essays, biographical paragraphs, the lead under any headline. Reads like a printed book, not a screen. | 400 / 500 / 600 + italic |
| **Inter** | Micro — eyebrows, captions, numerical data, nav, byline rows. The clean sans counterpoint that keeps editorial work from feeling precious. | 400 / 500 / 600 |

The stack is deliberately distinct from every prior Blacklyne build (Fraunces, PP Editorial New, PP Neue Montreal, GT Sectra, Migra, PP Right Serif, Tobias, Söhne). Playfair Display + Cormorant Garamond + Inter is **the editorial author register** — Vogue type weight, book-grade body, sans-serif data layer.

Negative letter-spacing on display (`-0.03em` → `-0.045em`). Tight line-height on display (1.0–1.08). Generous line-height on Cormorant body (1.65–1.78). Inter eyebrows tracked out (`0.18em` → `0.28em`) and small (10–12px).

## 5. Hero concept — Cinematic scroll-scrub

Locked per MOO playbook Section 5. **Editorial portrait route** is the default because the brief flags hero video as an Operator-TODO; if Allaia supplies cinematic footage (Bali, Dubai, working with brands) we swap in the canvas frame-scrub.

**Editorial portrait route (built now):**
- Full-bleed warm-toned portrait of Allaia (4:5 desktop, 3:4 mobile)
- Pinned hero (sticky inside a tall section) — image holds while five text beats reveal on scroll
- Beat 1: eyebrow `AUTHOR · COO · ARTIST · DUBAI + BALI`
- Beat 2: `Allaia` — Playfair Display 900 italic, terracotta gradient on the italic, massive (clamp to ~18vw)
- Beat 3: `Know your worth. Then charge it.`
- Beat 4: `Become Her — out 2026`
- Beat 5: two CTAs — `Read the Book` (Stan Store) and `Apply for The Architecture` (Stan Store $97)
- Parallax depth on the warm-cream backdrop. Subtle grain overlay (`mix-blend-multiply`, 8% opacity).
- Photo dominates type at every breakpoint.

**Hero video route (drop-in when supplied):**
- `ffmpeg` extracts 96 frames at 1280×1600
- `sharp` converts to WebP @ q=72
- Canvas frame-scrub coupled to GSAP `ScrollTrigger` (`pin: true, scrub: 1`)
- Same five-beat text layer, layered above the canvas
- `prefers-reduced-motion` → static portrait

## 6. Section order — home page

1. Floating glass-pill nav (cream + saturated blur)
2. Cinematic scroll-scrub hero (editorial portrait, video drop-in ready)
3. Editorial opening — split: portrait left, opening paragraph right with drop cap. Two anchor CTAs.
4. **Become Her** book anchor — large cover, five-part structure preview, Stan Store handoff. The foundational work.
5. **The Four Identities** — Author / Operator / Artist / Creator. Equal weight. Scroll-revealed, each card with its own warm portrait and short paragraph. The coherence moment.
6. **The Architecture** — 1:1 coaching offer. Four-chapter framework (Position / Voice / Rhythm / Receipts). Format · Length · Investment row. Application CTA to Stan Store $97.
7. **Latest writing** — magazine-style essay preview with pull quote and read-time.
8. **Watch · Instagram Reels** — horizontal scroll-snap, 9:16 cinematic, hover caption reveal.
9. **The Rupture** — art preview, editorial gallery grid, collector inquiry mailto.
10. **Coven** — Q3 2026 community waitlist. Application-based, $47/mo, 500-woman cap. Email capture only Phase 1.
11. **The Operator** — anthracite premium section. COO at Blacklyne handoff. Visible but not dominant.
12. **Recent · Instagram posts** — editorial masonry grid, 8–12 posts, caption reveal on hover.
13. **The work in your inbox** — newsletter signup section. Slow writing register.
14. **Direct line** — four channel tiles (Book / Apply / Coven / Instagram). No contact form.
15. Editorial footer.

## 7. Wow factor stack

- **A · Cinematic scroll-scrub hero** (MOO signature, photo-forward)
- **B · Four Identities scroll treatment** — each identity reveals with its own editorial composition, proving the coherence
- **C · Become Her cinematic cover reveal** — book cover scales in, five-part structure unfolds, Stan Store handoff
- **D · Editorial essay reading layout** (`/writing/[slug]`) — drop cap in Playfair italic terracotta, pull quotes in Playfair italic large, sage rules between sections, byline row at foot
- **E · The Operator anthracite section** — credibility moat, not a sales section. COO at Blacklyne in correct attribution. Clean handoff to `blacklyne.ai/en`
- **F · Instagram Reels cinematic showcase** — 9:16 preserved, hover caption, no auto-play (respects data + the editorial register)
- **G · The Rupture editorial gallery** — collector-grade lightbox, status flags (Available / Sold / Enquire)
- **H · Magnetic CTA buttons** — subtle attraction (8px max) on cursor proximity, fine-pointer only
- **I · Sticky "Apply for The Architecture"** — appears after scroll past coaching section, dismissable, low-noise

## 8. Voice — three example phrases

- *"The work is becoming who you are about to be."*
- *"Discipline is choosing the woman you are becoming. Not the mood you are in."*
- *"Soulmates are not similarity. They are resonance."*

What this voice would never say (hard rules from brief): no `journey`, no `vibes`, no `manifest` as verb, no `bestie`/`sis`/`queen`, no `step into your power`, no `girlboss`, no `high value woman`, no exclamation marks anywhere on the site, minimal emojis. No coaching-bro, no wellness-bro, no influencer-bro register.

Tonality: observational, confident, vulnerable, dry, slightly cool. Reads like she's been through it — not like she's selling it. Standard sentence case throughout (not lowercase-everything, not title-case-headlines). Period-stopped declarative cadence. Triplet/parallel rhythm used sparingly.

## 9. Asset harvest + omissions

**Preserved** (from old `allaiamedia.com`):
- The voice of `On the unglamorous middle` (essay register aligns) — relocate to `/writing/the-unglamorous-middle`
- Biographical arc framework — *updated* to reflect: real estate agent at 21 → top 10 at largest developer → multi-million-dollar deals → walked away → two marketing agencies → ALLAIA Media founded → COO at Blacklyne → Become Her (2026)

**Omitted** (stripped completely):
- All "Allaia Media is an agency" framing
- "Remote-first studio with operators in Dubai, Bali, Manila, London, New York"
- Agency case studies (Simply Pizza, Prisca's, Ayahs) → these belong to Blacklyne portfolio, not the personal brand
- "What the studio ships" agency services list
- Agency-tier testimonials (the room is being curated; testimonials surface only where they earn the editorial)
- "VOL / NO / SEASON" magazine-masthead framing from the previous diary-style rebuild — that aesthetic was over-cosplayed-as-print. The new site references editorial through restraint, not through magazine furniture.

## 10. DNA check

- [x] Tailwind v3.4 (not v4)
- [x] Self-hosted Playfair Display + Cormorant Garamond + Inter with `font-display: optional`
- [x] Astro 5 static, `inlineStylesheets: 'always'`
- [x] Content Collections with Zod
- [x] Central data in `src/data/site.ts`
- [x] `@lucide/astro` icons; inline SVG for Instagram / TikTok / YouTube / Stan Store (no brand icons)
- [x] **NO contact forms** — newsletter signup is the only email capture, plus mailto: tiles
- [x] Glass-pill floating nav
- [x] Anthracite premium section (The Operator — COO at Blacklyne)
- [x] Grid symmetry mandatory
- [x] Real verbatim content from this brief — no fabrication
- [x] Standard sentence case throughout
- [x] **No exclamation marks anywhere on the site**
- [x] Minimal emojis (none on the public site; `🤍` reserved only for the personal note in `/about` where it is voice-true)
- [x] Photo-forward, not text-forward
- [x] Editorial author register throughout
- [x] Four identities held together coherently
- [x] Book is the anchor — visible from every page in one click via nav
- [x] COO role at Blacklyne visible but not dominant — correct attribution (COO, not founder)
- [x] Stan Store integration: `stan.store/allaia` for Become Her + $97 application
- [x] Newsletter signup prominent
- [x] Mobile-first (Instagram bio-link traffic priority — 86.2% women, 85% under 35, top cities Delhi / Bangalore / Dubai / Mumbai / UK / SEA)

## 11. Honesty check (Phase 4.5 prep)

When the build is done these eight answers must all be `yes`:

1. Would Phoebe Philo's team study this site?
2. Would Joan Didion's editor approve the voice?
3. Would Allaia feel her four identities are held together coherently?
4. Does this look more like a published author with a global operator role — or a coaching website?
5. Is the COO role at Blacklyne visible without dominating, correctly attributed?
6. Is Become Her the anchor on every page?
7. Is the voice unmistakably Allaia — not generic personal-brand copy?
8. Is this the best personal brand site Blacklyne can build for Allaia?
