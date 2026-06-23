# STYLE GUIDE — Allaia Power

The visual + verbal contract for `allaiamedia.com`. Everything in the build references this file. When a section breaks the contract, the section is wrong — not the guide.

---

## 1. Palette

| Token | Hex | Tailwind | Where it lives |
| --- | --- | --- | --- |
| `cream` | `#F2EDE5` | `bg-cream`, `text-cream` | The page. Default body surface. Never replace with `#FFFFFF`. |
| `bone` | `#FAF6EE` | `bg-bone` | Elevated cards, inset blocks, the nav pill backdrop. |
| `ink` | `#1A1A1A` | `text-ink`, `bg-ink` | All primary body and display text on cream surfaces. |
| `ink-soft` | `#3A3530` | `text-ink-soft` | Long-form body where pure ink would be too heavy. Used on Cormorant body 18–22px. |
| `ink-mute` | `#7A6F62` | `text-ink-mute` | Captions, eyebrows, meta data, byline rows. |
| `terracotta` | `#B85542` | `text-terracotta`, `bg-terracotta` | The single warm accent. Drop caps, pull quotes, italic display moments, single CTA accents. *Used sparingly — terracotta loses meaning if it appears in every section.* |
| `terracotta-deep` | `#8E3D2F` | `bg-terracotta-deep` | Gradient stop on the italic display, hover state on terracotta surfaces. |
| `sage` | `#8B9D7E` | `text-sage`, `bg-sage` | Editorial rules, sage chips, secondary data accents. The natural breath. |
| `brown` | `#6B4F3D` | `text-brown` | Serif sub-heads, byline rows where terracotta would over-warm. |
| `anthracite` | `#0E0D0B` | `bg-anthracite`, `text-anthracite` | The Operator section background, footer when used. Never used on cream pages outside that one section. |
| `anthracite-warm` | `#1F1B16` | `bg-anthracite-warm` | Anthracite section interior — adds depth. |

Accent rules:
- **Terracotta** is reserved. Italic display words (`Become her`, `Allaia`), drop caps, pull-quote glyphs, single anchor CTAs. Never on filled buttons that aren't anchor-level. Never as a body text colour.
- **Sage** is the structural breath — section rules, between-chapter rules, byline separator dots.
- **Brown** plays the role of "italic but quiet" — sub-display Cormorant italic where terracotta would be the third accent in one screen.

## 2. Typography

### 2.1 Families

```css
--font-display: 'Playfair Display', 'GT Sectra', Georgia, serif;
--font-body:    'Cormorant Garamond', Georgia, serif;
--font-mono:    'Inter', system-ui, -apple-system, sans-serif;
```

Inter is named `--font-mono` not because it is monospace, but because in this build it occupies the role that mono usually occupies — the small structural data layer.

### 2.2 Scale

| Token | Size (clamp) | Family | Weight | Tracking | Leading | Use |
| --- | --- | --- | --- | --- | --- | --- |
| `display-xl` | `clamp(4rem, 13vw, 12rem)` | Playfair Display | 900 | -0.045em | 0.96 | Hero word ("Allaia") |
| `display-lg` | `clamp(3rem, 7.5vw, 6rem)` | Playfair Display | 800 | -0.035em | 1.02 | Section headlines ("Become Her.") |
| `display-md` | `clamp(2.25rem, 5vw, 3.75rem)` | Playfair Display | 700 | -0.025em | 1.06 | Page H1 on inner pages |
| `display-sm` | `clamp(1.75rem, 3.5vw, 2.75rem)` | Playfair Display | 700 | -0.02em | 1.12 | Card headlines, four-identity titles |
| `serif-lg` | `clamp(1.25rem, 2.2vw, 1.625rem)` | Cormorant Garamond | 500 | -0.005em | 1.45 | Lead paragraphs, dek beneath display |
| `serif-md` | `1.125rem` | Cormorant Garamond | 500 | 0 | 1.7 | Body — section body copy |
| `serif-body` | `1.0625rem` | Cormorant Garamond | 400 | 0 | 1.78 | Essay body (`/writing/[slug]`) |
| `serif-sm` | `0.9375rem` | Cormorant Garamond | 400 | 0 | 1.65 | Small body, footer body |
| `eyebrow` | `0.6875rem` | Inter | 500 | 0.24em | 1.6 | Section eyebrows |
| `micro` | `0.625rem` | Inter | 500 | 0.18em | 1.6 | Captions, meta data |
| `nav` | `0.8125rem` | Inter | 500 | 0.04em | 1 | Floating nav items |
| `byline` | `0.75rem` | Inter | 500 | 0.1em | 1.5 | Byline rows |

### 2.3 Italic moments

Playfair Display italic is the brand's most-loved gesture. Used for:
- The wordmark `Allaia` (always italic where it appears as display)
- The italic accent inside a headline: `For the women building it underneath.`
- Drop caps in essays
- Pull quotes

The italic gets the gradient: `linear-gradient(135deg, var(--color-terracotta) 0%, var(--color-terracotta-deep) 60%, var(--color-brown) 100%)`, applied via `background-clip: text`. The non-italic adjacent text stays `ink`.

When the italic word ends in a descender (`g`, `y`, `p`, `j`, `q`), the gradient span gets `padding-bottom: 0.12em; display: inline-block; line-height: 1.15` to prevent descender clipping. This is a known fix from the previous build.

## 3. Spacing + grid

- Max container: `max-w-[1280px]`
- Inner content: `max-w-6xl` (`72rem`) for hero + section grids, `max-w-3xl` (`48rem`) for body-led sections
- Essay column: `max-w-[68ch]` (~`38rem`) for Cormorant body
- Section vertical rhythm: `py-24 md:py-32 lg:py-40`
- Card padding: `p-8 md:p-10 lg:p-12`
- Gutter: `px-6 md:px-10`

Grid is symmetrical by default. Asymmetry is earned (used on hero opening and Operator anthracite section only).

## 4. Motion

- All transitions `cubic-bezier(0.22, 0.61, 0.36, 1)` (the editorial ease)
- Hover state durations: 240ms on lifts, 320ms on backgrounds, 480ms on tonal shifts
- Scroll-reveal: `.reveal { opacity: 0; transform: translateY(24px); transition: opacity 800ms, transform 800ms; }` then `.reveal.is-visible { opacity: 1; transform: none; }`
- GSAP `ScrollTrigger` reserved for:
  - Hero pin + frame-scrub
  - Four Identities sequence (each card reveals as it enters the centre band)
  - Become Her cover scale-in
- `prefers-reduced-motion: reduce` disables every transform-based animation; opacity reveals are kept (they don't trigger vestibular issues)
- No bouncing. No spring. No "playful" anything. Editorial = restraint.

## 5. Component patterns

### 5.1 Glass-pill nav

- Position: `fixed top-4 left-1/2 -translate-x-1/2`
- Surface: `bg-bone/75 backdrop-blur-xl backdrop-saturate-150`
- Border: `border border-ink/8`
- Shadow: `shadow-[0_8px_30px_-12px_rgba(26,26,26,0.18)]`
- Padding: `px-3 py-2`
- Logo (`Allaia` Playfair italic, ink) left, nav items centre (Inter nav weight), right slot reserved for `Become Her — out 2026` indicator + newsletter CTA
- Mobile: hamburger button reveals right-side overlay panel with backdrop blur, numbered nav items (`01 — Book`, `02 — Coaching`, …)

### 5.2 Editorial portrait card

- `aspect-[4/5]`, `rounded-[2rem]`, `overflow-hidden`
- Inner image: `object-cover`, slight warm filter (`saturate(0.92) sepia(0.04)`)
- Bottom caption row: `text-micro text-ink-mute` — `Photograph · [subject]` left, `FIG. NN` right
- Subtle inset shadow on top edge to avoid the "sticker" look: `box-shadow: inset 0 1px 0 rgba(255,255,255,0.4)`

### 5.3 Section eyebrow

- `text-eyebrow text-ink-mute uppercase tracking-[0.24em]`
- Always precedes display headlines
- Format: `WORD · CONTEXT · DETAIL` (e.g. `OUT 2026 · 91,294 WORDS · 22 CHAPTERS`)

### 5.4 Anchor CTA (dark)

- `bg-ink text-cream hover:bg-anthracite`
- `rounded-full px-6 py-3 text-nav font-medium`
- Inline arrow icon `→` (inline SVG) slides 2px right on hover
- Magnetic attraction (8px max) — disabled on touch + reduced-motion

### 5.5 Anchor CTA (ghost)

- `border border-ink/15 text-ink hover:border-ink/40 hover:bg-bone`
- Same dimensions as dark
- Used as the secondary in any CTA row

### 5.6 Pull quote

- `font-display italic text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.15]`
- Gradient on the text (terracotta → brown)
- Left border: `border-l-2 border-sage pl-6 md:pl-8`
- Always followed by a `text-micro text-ink-mute` attribution row

### 5.7 Anthracite section (The Operator)

- `bg-anthracite text-cream`
- Inner surface for cards: `bg-anthracite-warm`
- Eyebrow colour: `text-sage` (the only place sage appears as text colour at scale)
- Display headlines: cream
- Body: `text-cream/75` for Cormorant body
- Single CTA: ghost-on-dark — `border-cream/20 text-cream hover:bg-cream/5`

## 6. Iconography

- `@lucide/astro` for utility icons (arrow-up-right, mail, calendar, etc.)
- **Inline SVG** for brand icons — Instagram, TikTok, YouTube, Stan Store. No icon font, no `lucide` brand glyphs.
- Stroke width 1.6 default, 1.4 on small icons (≤16px)

## 7. Photography rules

- All photos warm-toned, slightly desaturated, gold or terracotta light bias
- Bali daylight or Dubai night — both lean warm, never blue-hour
- 4:5 portrait for hero + identity cards
- 1:1 square for Instagram showcase grid
- 9:16 vertical for Reels
- 16:9 only for cinematic landscape moments (rare — used for the Bali/Dubai full-bleed inside Operator section)
- All photos `rounded-[1.5rem]` minimum, `rounded-[2rem]` for hero
- Subtle grain overlay (`bg-noise` utility — SVG `feTurbulence` at `baseFrequency: 0.85`, 8% opacity)

What we never use:
- Posed influencer shots
- White-background corporate portraits
- Stock photos of any kind in this build (this is a personal brand — every photograph is of Allaia or her work)

## 8. Accessibility

- WCAG 2.1 AA across the board
- All terracotta-on-cream meets 4.5:1 (verified — terracotta on cream measures 5.1:1 at 18px+)
- Sage on cream is `≥3:1` only — sage is therefore restricted to ornamental rules and never used for body or interactive text
- Focus state: `outline: 2px solid var(--color-terracotta); outline-offset: 4px`
- All interactive elements `min-height: 44px` (touch target)
- Skip-to-content link in `BaseLayout`
- Section landmarks: `<header>`, `<main>`, `<footer>`, `<article>` for essay routes, `<nav>` for primary nav
- All Reels iframes have descriptive `title` attributes
- All decorative SVGs `aria-hidden="true"`
- Form labels are real `<label>` elements (newsletter signup), not placeholders

## 9. Voice rules (sentence mechanics)

- **Standard sentence case.** Proper capitalisation at start of sentences and on proper nouns. *Not* title case, *not* lowercase-everything.
- **Period-stopped declarative cadence.** Build to verdict.
- **Short sentences as their own paragraphs** for emphasis. Used sparingly — overuse turns into prose-cosplay.
- **Triplet / parallel rhythm** — used sparingly: *"The wound became wisdom. The abandonment became discernment. The betrayal became standards."*
- **Em-dashes:** allowed in headlines as a structural break. Discouraged inside prose where a period would do the same job.

Forbidden words (hard rule): `journey`, `growth journey`, `vibes`, `manifest` (as verb), `bestie`, `sis`, `queen`, `step into your power`, `girlboss`, `high value woman`, `hot girl walk`, `let's go`.

Preferred vocabulary: `becoming`, `the becoming`, `underneath`, `what's underneath`, `the work`, `quietly`, `frequency`, `resonance`, `alchemize`, `alchemy`, `architecture`, `unbecoming`, `sovereignty`, `freedom`.

Recurring signature phrases (use where natural — never forced):
- *"Know your worth. Then charge it."* (the tagline)
- *"The work is becoming who you are about to be."*
- *"The women who [X] are the women who [Y]."*
- *"Soulmates are not similarity. They are resonance."*
- *"Discipline is choosing the woman you are becoming. Not the mood you are in."*

**No exclamation marks anywhere on the site.** No coaching-bro register. No wellness-bro register. No influencer-bro register.

## 10. Naming + structure

- Files: `PascalCase.astro` for components, `kebab-case.md` for content
- Section IDs: `kebab-case` — used in nav anchors
- Tailwind utility classes: ordered as `layout → spacing → typography → colour → state → motion`
- Reserve `data-*` attributes for behaviour hooks; never use class names for JS targeting
- Each component file ≤ 220 lines; if exceeding, extract a sub-component

## 11. Performance budget

- Hero LCP `<2.5s` on 4G
- Total CSS `<60KB` minified+gzipped (Tailwind v3.4 with safelist)
- Fonts: WOFF2 only, `font-display: optional`, subset to Latin Extended
- Total font payload `<140KB` across all three families combined
- Lighthouse: 95+ performance, 100 accessibility, 100 best-practices, 100 SEO (mobile)

Hero photograph: maximum 320KB AVIF, 480KB WebP fallback, served via `srcset` + `<picture>` with mobile 720w / desktop 1440w.
