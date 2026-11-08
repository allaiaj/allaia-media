# Outreach automation runbook

**Read this first on every scheduled run.** Allaia asked for this setup on 2026-11-09:

- **at most 35 emails per weekday in total, counting new pitches and follow-ups together** (Allaia raised this from 25 on 2026-11-09)
- new pitches at most 20 per day, sent in chunks across the four runs
- runs at 08:07, 10:07, 13:07 and 15:07 Bali time (Asia/Makassar), Monday to Friday
- new pitches until **Tuesday 1 December 2026**
- two follow-ups per resort: day 3 and day 7 after the first email

**Scope: Phuket only** (Allaia, 2026-11-09). That means 5-star resorts and luxury villas on Phuket island. Bali, Bangkok, Samui, Krabi and the rest of Thailand are `skipped`. Phang Nga properties (Khao Lak, Natai, Koh Yao) are on `hold`: never send to a `hold` row unless Allaia moves it to `queued`.

Everything goes out from **allaiapower@gmail.com** using the Gmail tools. The source of truth is `docs/outreach/queue.csv` on branch `claude/phuket-resorts-influencer-emails-fe1myw`.

## queue.csv

Columns: `n, resort, area, to, cc, greeting, hook, place, proof, draft_id, status, sent_at, thread_id, subject, fu1_at, fu2_at, notes`

`status` values:

- `queued`: the email is known and the row is ready to send
- `research`: the contact still needs to be found
- `sent`: the pitch has gone out (`sent_at` holds the Bali-time ISO timestamp)
- `fu1`: follow-up 1 has gone out
- `done`: follow-up 2 has gone out
- `replied`: the resort answered, so stop all follow-ups
- `bounced`: the address failed
- `no_email`: no credible contact was found
- `skipped`: a duplicate or already pitched, with the reason in `notes`

## Each run, in order

1. `git pull` the branch. Get the current Bali date and time. If it is Saturday or Sunday, stop.
2. **Check for replies and bounces.**
   - For every row in `sent` or `fu1`, call `get_thread(thread_id)`. If the thread has any message whose sender is not allaiapower@gmail.com, set `replied` and note who replied.
   - Search `from:mailer-daemon newer_than:3d` and match addresses. Set `bounced` on any match.
   - Never answer a resort on Allaia's behalf. Only tell her.
3. **Work out this run's budget.**
   - Count every email already sent today (Bali date): new pitches plus follow-ups.
   - `remaining_today = 35 - sent_today`.
   - This run's budget is `ceil(remaining_today / runs_left_today)`, counting this run, with the four runs at 08:07, 10:07, 13:07 and 15:07, and never more than 10. That spreads the day evenly instead of sending in one go.
   - Spend the budget on follow-ups first, oldest due date first. Follow-up 2 goes before follow-up 1, because it closes a thread. Then use what's left on new pitches.
   - Any due follow-ups that don't fit roll over to the next run or the next weekday. They are never dropped.
4. **Send follow-ups that are due**, within the budget, **only to resorts that have not replied** (Allaia's rule).
   - Right before each follow-up, check again: `get_thread(thread_id)`, then search Gmail for `from:<recipient domain> after:<sent date>` to catch replies sent from a different address or in a new thread.
   - Any human reply counts, including "not interested" or "please use our form". Set `replied` and send nothing more.
   - An automatic acknowledgement or out-of-office message does not count as a reply. Note it in `notes`; the follow-ups still go out.
   - Follow-up 1 is due when status is `sent` and today ≥ sent date + 3 calendar days.
   - Follow-up 2 is due when status is `fu1` and today ≥ sent date + 7 calendar days.
   - If a due date falls on a weekend, the follow-up goes out on the next weekday run.
   - Send it as a reply in the same thread: `send_message` with `replyThreadId`, the same `to` and `cc`, and subject `Re: <subject>`. Plain `body` plus `htmlBody`.
   - Set `fu1_at` or `fu2_at`, and the status.
5. **Send new pitches** with whatever budget is left, only while today ≤ 2026-12-01.
   - New pitches are also capped at 20 per day, counting rows whose `sent_at` is today.
   - Take rows in `n` order with status `queued` or `research`.
   - For a `research` row:
     - Find the property's contact email. Accept only an address shown on the official website, the brand site, an official fact sheet or press release, or two independent reputable listings. Never guess an address from a naming pattern. Prefer a PR or marketing contact, then a general info address, then reservations.
     - Write `hook`: one accurate, specific detail plus its verb, for example "your Sky Villas over Kata Bay have". If you can't confirm a detail, use `<resort> has`.
     - Set `proof`: `LA` for wellness- or spa-led properties, otherwise `AA`.
     - Dedupe: search Gmail `in:sent` for the email domain and the resort name. If it was pitched before, mark `skipped`.
     - If no credible email exists, mark `no_email` and move to the next row.
   - For a row with `draft_id`: get the draft and check it contains "luxury travel & lifestyle creator", "December 8 and 20", "What I'd create" and "37.4K". If it does, `send_message(draftId=...)`. If not, rebuild the email from the template below.
   - Record `sent_at`, `thread_id`, `subject` and `status=sent`.
6. Commit `queue.csv` with message `outreach: <date> run <time>` and push it. Use a plain push, never force; if the push is rejected, pull and retry.
7. **Report** to Allaia in the session: what was sent, any replies (with the resort and a one-line gist), bounces and errors. At the 15:07 run, give the day's totals.
8. **Safety stops.** Pause the scheduled task (`update_trigger enabled=false`) and tell Allaia if:
   - there are 5 or more bounces in one day,
   - Gmail returns a sending-limit or spam error, or
   - fewer than 5 sendable rows remain, after researching and appending more 5-star resorts and luxury private villas on Phuket island first.
9. **End.** After 2026-12-01, send follow-ups only. Once no rows remain in `sent` or `fu1`, disable the scheduled task and send Allaia a final summary.

## Pitch template

Subject: `three ways we could work together, <resort>`

`<place_line>`:

- If `place` is Phuket, "the Phuket area" or Thailand: `I'll be in <place> anytime between December 8 and 20, and I'd love to feature a stay with you.`
- If `place` is Bali: `I'm based in Bali, so I can work around dates that suit you, and I'd love to feature a stay with you.`

`<proof>`:

- `AA`: `Recent features: Aksari Ubud (106K views) and Alloura Villa (227K).`
- `LA`: `Recent features: Lumeira Bali (879K views) and Aksari Ubud (106K).`

HTML body (the plain-text body has the same words, with full URLs):

```
<p><greeting></p>
<p>I'm Allaia (<a href="https://www.instagram.com/allaia.power/">@allaia.power</a>), a luxury travel &amp; lifestyle creator based in Bali, and <hook> been on my list for a while. <place_line></p>
<p>I handle everything - concept, shooting and production - so you receive beautiful lifestyle photos and films you can repost on your own channels.</p>
<p>What I'd create:<br>- 1 cinematic Instagram Reel, potentially as a Collab Post<br>- 1 carousel of professionally styled photography<br>- 3–5 Instagram Stories documenting the experience<br>- Optional short-form video assets for your social channels, separately negotiated</p>
<p>Three ways we could work together:<br>1. Hosted stay - the content above, with organic usage rights<br>2. Paid partnership - a content package built to your brief, full usage rights<br>3. Both</p>
<p>37.4K followers on Instagram and 32K on TikTok, with 6.8M Instagram views in the last 90 days. <proof></p>
<p>Media kit: <a href="https://www.allaiamedia.com/brand-collabs">allaiamedia.com/brand-collabs</a></p>
<p>Just reply 1, 2 or 3 and I'll take it from there.</p>
<p>Allaia<br><a href="https://www.instagram.com/allaia.power/">@allaia.power</a></p>
```

## Follow-up 1 (day 3)

```
<greeting>

Floating this back up in case it got buried. I'm planning my stays for December 8 to 20 and would love to include <resort>.

Just reply 1, 2 or 3 and I'll take it from there.

Allaia
@allaia.power
```

For Bali, replace the middle line with: `I'm planning my December content and would love to include <resort>.`

## Follow-up 2 (day 7)

```
<greeting>

A last note from me - I'm finalising my December plans this week. If a collaboration with <resort> could work, just reply 1, 2 or 3 and I'll take it from there. Either way, thank you for your time.

Allaia
@allaia.power
```

## Voice rules

Use Allaia's voice: short, warm and confident. No exclamation marks. No "journey", "vibes", "queen" or "let's go". Follow the pitch rules in `phuket-resorts-2026-11.md`.
