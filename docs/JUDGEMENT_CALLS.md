# JUDGEMENT CALLS — Allaia Power

Decisions made where the brief left room. Documented so Allaia can override any one of them before the build leaves staging.

---

## 1. Hero — editorial portrait route, video drop-in ready

**Decision:** Build the editorial portrait hero now. Architect the canvas frame-scrub so the hero video swaps in cleanly when Allaia supplies footage (the brief lists it in Phase 0A as an Operator-TODO).

**Why:** Shipping a cinematic scroll-scrub without source footage produces either a low-resolution video-of-stills (cheap) or a placeholder that has to be ripped out later (technical debt). The editorial portrait hero — pinned, parallax, five-beat text reveal — is itself a MOO-grade cinematic hero. It can stand alone for 6+ months while the footage is shot, and when the video arrives the data file flips one field (`hero.mode: 'portrait' | 'video'`) and the same component branches.

**Override condition:** Allaia supplies one minute of cinematic 4K (1280×1600 portrait or 3840×2160 landscape) of: her in Bali (golden hour, walking, working, the studio), her in Dubai (night, balcony, city), her with Become Her (the book in her hands, opening it, writing), or a curated cut combining all three.

## 2. Newsletter platform — assume Beehiiv, build platform-agnostic

**Decision:** Build the newsletter signup as a platform-agnostic embed slot (form `action` + `method` exposed as data fields), default copy assumes Beehiiv (slowest funnels, cleanest editorial register, lowest performative-marketing vibe of the four options).

**Why:** Beehiiv is the editorial author register's natural home — Substack is too crowded with influencer-tier newsletters, Mailchimp reads as 2018, ConvertKit is creator-bro. Beehiiv lets the visual register stay restrained.

**Override condition:** Allaia confirms one of: Beehiiv (default), Substack (if she wants the social-graph spillover from Substack's own discovery), ConvertKit (if she already has the integration with Stan Store), Mailchimp (if there's an inherited list to migrate). Form action is one line to swap.

## 3. Application flow — Stan Store as single source of truth

**Decision:** Both the book and The Architecture application route to `stan.store/allaia`. The book is a direct purchase. The application is a $97 paid product whose post-purchase action is a Calendly booking link (in Stan Store's product follow-up email).

**Why:** Brief says both flows live there. Operationally cleaner — one storefront, one auth, one analytics surface. The site has no inbox to manage and no half-built app form.

**Override condition:** Allaia routes The Architecture application through her own intake form (Tally, Typeform, custom). If so, we add `/apply` as a dedicated route with the form embedded. Default stays Stan Store unless she says otherwise.

## 4. Coven — waitlist landing page only, no community surface yet

**Decision:** `/coven` is a waitlist landing — Cormorant-led editorial copy explaining the community thesis, email capture, no preview imagery of "what the community looks like." Launching Q3 2026 means we have ~6 months of editorial scarcity to lean on.

**Why:** Showing a community that doesn't exist yet, with empty rooms or placeholder member photos, undercuts the editorial register. Restraint compounds anticipation. The waitlist works because the rest of the site has already earned attention.

**Override condition:** Allaia provides early-access member portraits or screen captures from an existing private group. Even then, hold them for the launch reveal, not the waitlist page.

## 5. The Rupture gallery — preview-only on home, full gallery at `/art`

**Decision:** Home page shows 4–6 artworks in the editorial grid (largest 2 visually weighted). Full collection lives at `/art` with collector-grade lightbox. Each artwork has `status: 'available' | 'sold' | 'enquire'` so the inventory is honest.

**Why:** Limits the "shopfront" feeling. The home page references the art practice as one of four identities; the dedicated `/art` page is for collectors who came for the work.

**Override condition:** Allaia provides a fuller archive (20+ pieces, multiple collections). Then we add collection filtering at `/art`. For launch, "The Rupture" alone is enough.

## 6. Biography — five chapters, *re-grounded* from the previous build

**Decision:** Keep the five-chapter biographical framework that worked on the diary-style rebuild, but rewrite the content to reflect the real arc Allaia gave in the brief:

- **I · 2018 — Licensed at 21.** Real estate agent at her country's largest developer. Top 10. First deal closed on Facebook before the license came through.
- **II · 2020 — The walking-away.** Multi-million-dollar deals on the table. Walked anyway. Freedom mattered more than the salary.
- **III · 2022 — Two marketing agencies, built quietly.** No founder-bro post about it. Just the work.
- **IV · 2024 — ALLAIA Media, the operational home.** Personal brand, coaching, agency services, creative direction. One company, four functions.
- **V · 2025 — COO at Blacklyne, Become Her, Bali + Dubai.** The applied version. The book. The geography that finally matched the work.

**Why:** The previous build's biography was decorative (the magazine-masthead VOL/NO framing made it feel costumed). The new arc is provable — every chapter is something Allaia has actually done.

**Override condition:** Dates, deal sizes, or the specific bridge from "two agencies" to "ALLAIA Media" need Allaia's eye. Treated as draft until she signs off.

## 7. Operator section — anthracite, single Blacklyne handoff, no portfolio

**Decision:** The Operator section is one anthracite panel. Eyebrow + headline + ~80 words + a single CTA to `blacklyne.ai/en`. No client logos. No "studio work" sub-section. No tab into agency case studies.

**Why:** The previous build leaked agency framing into the personal brand and that's the entire reason for this rebuild. Allaia is COO at Blacklyne; that's the credibility lever. The portfolio lives at Blacklyne's own site, where it belongs. Repeating it here weakens both sites.

**Override condition:** None. This is a hard line in the brief.

## 8. Testimonials — held back until they earn the page

**Decision:** No testimonials section on launch. The room is being curated. Coaching testimonials become available organically through the application flow and live on `/the-architecture` only — gated to "a few short notes from women who finished The Architecture", not "love bombs", three maximum, each ≤30 words.

**Why:** Editorial register kills testimonial-walls. Three short quotes are stronger than twelve long ones. And Allaia just rebuilt — there are no existing personal-brand testimonials to surface yet (the old testimonials were agency-tier).

**Override condition:** When the first cohort of The Architecture finishes and Allaia has 3–5 short notes she stands behind, we add them.

## 9. Reels showcase — six hand-picked, no scraping

**Decision:** Allaia provides the 4–6 Reels (with caption + URL). They embed via `<blockquote class="instagram-media">` standard embed code, sized 9:16, horizontal scroll-snap on mobile. No auto-play (data + editorial register).

**Why:** Anything auto-scraped from `@allaia.power`'s feed will surface posts Allaia would rather not feature on her own front door. Curation is what makes a site read editorial.

**Override condition:** Allaia gives us read-access to her recent posts and we agree on a curation rule (top-N by reach, top-N by reaction). Default stays manual.

## 10. Press / media page — single mailto, no PDF kit on launch

**Decision:** `/media` is a single-section page — editorial intro, three short paragraphs about who's covered Allaia / who can, two mailto: tiles (`Press inquiry`, `Brand partnership`), and a `Download press kit` button that links to a PDF *if* Allaia supplies one. If she doesn't, the button is hidden cleanly (not a 404).

**Why:** Press kits that read "team hero photo + bullet points of services" are LinkedIn-energy. Allaia is positioned as a published author; the press kit when supplied should be a four-page PDF with her bio, the book, two portraits, and contact. Until that PDF exists, the button doesn't.

**Override condition:** Allaia supplies the PDF. Drop it at `public/press/allaia-press-kit.pdf` and flip the data flag.

## 11. Stan Store CTA copy — clinical, never urgent

**Decision:** Stan Store CTAs read `Read the Book` and `Apply for The Architecture`. They never read `Buy now`, `Get instant access`, `Save 50%`, `Limited spots — book today`. There are no countdown timers. There are no "X people viewed this in the last hour" widgets.

**Why:** The audience Allaia wants — women who research before buying, who follow creators for taste — converts on alignment, not urgency. Every urgency mechanic erodes alignment.

**Override condition:** None on launch. Revisit only if Allaia has hard data showing soft CTAs are leaving conversion on the table — and even then, the answer is probably *better essay → better CTA*, not *add urgency*.

## 12. The four-identity ordering — Author first, always

**Decision:** Author / Operator / Artist / Creator. In that order. Everywhere they appear (eyebrow, four-up grid, About page, footer trio of identities).

**Why:** The book is the credibility moat. Putting Operator second uses the Blacklyne lever to elevate the brand out of creator-with-offers. Artist deepens. Creator is the entry point most of the audience already knows — putting it last reframes the order they think of her in.

**Override condition:** Allaia decides she wants Operator / Author / Artist / Creator (Blacklyne first) — only if the COO role becomes the larger-revenue thing and she wants to lead with it commercially. Default leads with the book.

## 13. About page — long-form essay, not a CV

**Decision:** `/about` reads as a 1,200-word editorial essay with portraits intercut, five chapters in the body matching the biographical arc from CONCEPT §6. No "What I do" bullet list, no "My values" pill grid, no skill bar charts.

**Why:** This is a published author's site. Authors don't have About pages with skill bars.

**Override condition:** None.

## 14. Mobile-first — sticky "Apply for The Architecture" surfaces only after the coaching section

**Decision:** Sticky CTA does not surface in the hero or above the fold. It appears after the user has scrolled past the coaching section (so it's a "you've seen the offer, here's the door" cue), is dismissable, and never reappears on the same session once dismissed.

**Why:** Sticky CTAs in the hero are a coaching-funnel tell. We're not a coaching funnel.

**Override condition:** Allaia wants the sticky to be aggressive. We'd push back; the brief is explicit about editorial restraint.

## 15. Domain — staying on `allaiamedia.com`

**Decision:** The current domain stays. ALLAIA Media is the operational entity (per brief §2 and §3 of "The Work"); `allaiamedia.com` continues to be the personal-brand front door. If Allaia later registers `allaiapower.com` we add it as a redirect (302 to canonical `allaiamedia.com`), not a swap.

**Why:** Brand consolidation. Two domains is two sites; one domain is one site. Existing organic traffic, backlinks, and Stan Store routing stay intact.

**Override condition:** Allaia wants `allaiapower.com` to be the canonical and `allaiamedia.com` to be the redirect (the operational-entity-becomes-back-office argument). Trivial DNS swap; we'd flip canonical tags + sitemap + OG in the same commit.
