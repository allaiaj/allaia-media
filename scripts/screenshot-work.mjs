// Capture true full-page screenshots of every site in /src/data/site.ts
// work[] and save them as JPEGs in /public/screenshots/.
// Run with: node scripts/screenshot-work.mjs
import { chromium } from "playwright";
import sharp from "sharp";
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "..", "public", "screenshots");

const sites = [
  { slug: "ayahs-beauty", url: "https://ayahs-beauty-greenford.pages.dev", device: "desktop" },
  { slug: "maisy-rose", url: "https://maisyrose-flowers-collier-row.pages.dev", device: "desktop" },
  { slug: "neolution", url: "https://neolution-face-and-body.pages.dev", device: "desktop" },
  { slug: "simply-pizza", url: "https://simply-pizza-ilford.pages.dev", device: "desktop" },
  { slug: "nurse-vella", url: "https://nurse-vella-loughton.pages.dev", device: "desktop" },
  { slug: "bare-essence", url: "https://bare-essence-leyton.pages.dev", device: "desktop" },
  { slug: "dulci-beauty", url: "https://dulci-beauty-dagenham.pages.dev", device: "desktop" },
  { slug: "prisca-skincare", url: "https://demo-priscas-skincare.pages.dev", device: "desktop" },
];

const DESKTOP_VIEWPORT = { width: 1440, height: 900 };
const MOBILE_VIEWPORT = { width: 390, height: 844 };

if (!existsSync(OUT_DIR)) {
  mkdirSync(OUT_DIR, { recursive: true });
}

const browser = await chromium.launch();

for (const site of sites) {
  const viewport = site.device === "mobile" ? MOBILE_VIEWPORT : DESKTOP_VIEWPORT;
  // deviceScaleFactor: 1 keeps the full-page screenshot under Chromium's
  // ~16384px canvas limit. At 2x DPR our captures were getting padded
  // with white at the bottom because they exceeded the limit.
  const context = await browser.newContext({
    viewport,
    deviceScaleFactor: 1,
    userAgent:
      site.device === "mobile"
        ? "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
        : "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
  });
  const page = await context.newPage();
  console.log(`Capturing ${site.slug} (${site.device})...`);
  try {
    await page.goto(site.url, { waitUntil: "networkidle", timeout: 45000 });
    // Settle for lazy-loaded fonts / intro animations
    await page.waitForTimeout(4500);

    // Walk down the page, re-measuring scrollHeight each pass so we keep
    // going as lazy content extends the document. Loop until height is
    // stable AND we've actually reached the bottom.
    await page.evaluate(async () => {
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const step = 400;
      let y = 0;
      let stableLoops = 0;
      let lastHeight = 0;
      // Safety: hard cap at 200 iterations (~80,000px)
      for (let i = 0; i < 200; i++) {
        const h = document.documentElement.scrollHeight;
        if (h === lastHeight) {
          stableLoops++;
        } else {
          stableLoops = 0;
          lastHeight = h;
        }
        if (y >= h - 100) {
          // At bottom - require 3 stable passes before exiting
          if (stableLoops >= 3) break;
          y = h;
          window.scrollTo(0, y);
          await sleep(350);
          continue;
        }
        y = Math.min(y + step, h);
        window.scrollTo(0, y);
        await sleep(160);
      }
      // Plant at the very bottom for a final settle pass
      window.scrollTo(0, document.documentElement.scrollHeight);
      await sleep(800);
    });
    await page.waitForTimeout(1200);

    // Visit every iframe (Google Maps, YouTube, etc.) so each tile/video
    // gets a chance to load before we capture. Iframes are lazy by default.
    const iframeYs = await page.evaluate(() => {
      const ys = [];
      document.querySelectorAll("iframe").forEach((f) => {
        const rect = f.getBoundingClientRect();
        if (rect.width > 100 && rect.height > 100) {
          ys.push(Math.max(0, rect.top + window.scrollY - 200));
        }
      });
      return ys;
    });
    for (const y of iframeYs) {
      await page.evaluate((yPos) => window.scrollTo(0, yPos), y);
      // Maps tiles need real time - 3s per iframe
      await page.waitForTimeout(3000);
    }

    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(1200);

    // Kill animations + transitions globally, then reveal common
    // scroll-driven hidden states.
    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
        }
        [class*="opacity-0"], [style*="opacity:0"], [style*="opacity: 0"] {
          opacity: 1 !important;
        }
      `,
    });

    await page.evaluate(() => {
      document
        .querySelectorAll(
          ".reveal, [data-reveal], [data-animate], [data-aos], .opacity-0, .fade-in, .invisible, [data-scroll]"
        )
        .forEach((el) => {
          el.classList.add(
            "is-visible",
            "is-inview",
            "in-view",
            "active",
            "visible",
            "aos-animate"
          );
          el.classList.remove("opacity-0", "invisible");
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.visibility = "visible";
        });

      // Kill cookie / consent banners
      const cookieRegex =
        /(cookie|consent|gdpr|privacy[-_]?(banner|notice|bar)|cc[-_]?(banner|window))/i;
      document.querySelectorAll("body *").forEach((el) => {
        const idClass = `${el.id || ""} ${
          typeof el.className === "string" ? el.className : ""
        }`;
        if (cookieRegex.test(idClass)) {
          el.style.display = "none";
        }
      });
    });

    // De-stick navs - convert fixed/sticky to STATIC so they push the
    // hero down instead of floating over it. Run LAST so all the dynamic
    // positioning has settled by now.
    await page.evaluate(() => {
      const allElements = Array.from(document.querySelectorAll("*"));
      const reset = (el) => {
        el.style.setProperty("position", "static", "important");
        el.style.setProperty("top", "auto", "important");
        el.style.setProperty("bottom", "auto", "important");
        el.style.setProperty("left", "auto", "important");
        el.style.setProperty("right", "auto", "important");
        el.style.setProperty("transform", "none", "important");
      };
      allElements.forEach((el) => {
        const cs = getComputedStyle(el);
        if (cs.position === "fixed" || cs.position === "sticky") {
          reset(el);
        }
      });
      // Catch nav/header elements that became sticky via JS-injected styles
      document.querySelectorAll("nav, header").forEach(reset);
    });

    await page.waitForTimeout(1200);

    // Find the bottom of actual visible content - the lowest pixel that
    // any visible element occupies. This is the TRUE bottom of the page;
    // anything below it (often from inflated container heights, margin
    // collapse oddities, or absolute-positioning artifacts) is empty.
    const contentBottom = await page.evaluate(() => {
      let max = 0;
      const visit = (el) => {
        const cs = getComputedStyle(el);
        if (cs.display === "none" || cs.visibility === "hidden") return;
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.height > 0) {
          const bottom = r.bottom + window.scrollY;
          if (bottom > max) max = bottom;
        }
        for (const child of el.children) visit(child);
      };
      visit(document.body);
      return Math.ceil(max);
    });

    const pageHeight = await page.evaluate(
      () => document.documentElement.scrollHeight
    );

    // Take the full-page capture, then crop to the real content bottom
    // so users don't have to scroll through hundreds of px of whitespace.
    const fullBuf = await page.screenshot({
      fullPage: true,
      type: "jpeg",
      quality: 80,
    });

    // Crop to actual content bottom first
    const dpr = 1;
    const img = sharp(fullBuf);
    const meta = await img.metadata();
    const finalH = Math.min(contentBottom * dpr, meta.height);
    const trimmedBuf = await sharp(fullBuf)
      .extract({ left: 0, top: 0, width: meta.width, height: finalH })
      .raw()
      .toBuffer({ resolveWithObject: true });

    // Detect + collapse large blank-white horizontal stripes between
    // sections (common in 2027-style designs with generous whitespace).
    // Any contiguous stretch of >120px of near-white rows gets collapsed
    // to 80px of breathing space.
    const { data, info } = trimmedBuf;
    const W = info.width;
    const H = info.height;
    const ch = info.channels;
    const MIN_BRIGHTNESS = 232; // catches cream / off-white spacers too
    const MAX_VARIANCE = 4; // uniform-color rows (low pixel-to-pixel variance)
    const MIN_BLANK_RUN = 150;
    const KEEP_PADDING = 60;

    // Row-by-row mean brightness AND pixel-to-pixel variance
    const rowBrightness = new Float32Array(H);
    const rowVariance = new Float32Array(H);
    for (let y = 0; y < H; y++) {
      const rowStart = y * W * ch;
      let sum = 0;
      let samples = 0;
      const brightnesses = [];
      for (let x = 0; x < W; x += 8) {
        const i = rowStart + x * ch;
        const b = (data[i] + data[i + 1] + data[i + 2]) / 3;
        brightnesses.push(b);
        sum += b;
        samples++;
      }
      const mean = sum / samples;
      let varSum = 0;
      for (const b of brightnesses) varSum += Math.abs(b - mean);
      rowBrightness[y] = mean;
      rowVariance[y] = varSum / samples;
    }

    // Blank row = light AND uniform (no visible content)
    const isBlankRow = (y) =>
      rowBrightness[y] >= MIN_BRIGHTNESS && rowVariance[y] <= MAX_VARIANCE;

    // Find blank runs
    const segments = []; // [{from, to}] of non-blank
    let cursor = 0;
    let blankStart = -1;
    for (let y = 0; y < H; y++) {
      const blank = isBlankRow(y);
      if (blank && blankStart === -1) blankStart = y;
      if (!blank && blankStart !== -1) {
        const runLen = y - blankStart;
        if (runLen >= MIN_BLANK_RUN) {
          const segEnd = blankStart + Math.floor(KEEP_PADDING / 2);
          if (segEnd > cursor) segments.push({ from: cursor, to: segEnd });
          cursor = y - Math.floor(KEEP_PADDING / 2);
          if (cursor < 0) cursor = 0;
        }
        blankStart = -1;
      }
    }
    if (cursor < H) segments.push({ from: cursor, to: H });

    let finalBuf;
    let trimmedPx = 0;
    if (segments.length > 1 || segments[0]?.from > 0 || segments[0]?.to < H) {
      // Stitch the non-blank segments
      const totalH = segments.reduce((s, seg) => s + (seg.to - seg.from), 0);
      trimmedPx = H - totalH;
      const composites = [];
      let yCursor = 0;
      for (const seg of segments) {
        const segH = seg.to - seg.from;
        const segBuf = await sharp(fullBuf)
          .extract({ left: 0, top: seg.from, width: W, height: segH })
          .png()
          .toBuffer();
        composites.push({ input: segBuf, top: yCursor, left: 0 });
        yCursor += segH;
      }
      finalBuf = await sharp({
        create: {
          width: W,
          height: totalH,
          channels: 3,
          background: { r: 255, g: 255, b: 255 },
        },
      })
        .composite(composites)
        .jpeg({ quality: 80 })
        .toBuffer();
    } else {
      finalBuf = await sharp(fullBuf)
        .extract({ left: 0, top: 0, width: W, height: H })
        .jpeg({ quality: 80 })
        .toBuffer();
    }

    const out = resolve(OUT_DIR, `${site.slug}.jpg`);
    writeFileSync(out, finalBuf);
    const sizeKB = (finalBuf.length / 1024).toFixed(0);
    console.log(
      `  → ${site.slug}.jpg (${sizeKB} KB) - page ${pageHeight}px, content ${contentBottom}px, collapsed ${trimmedPx}px of blank stripes`
    );
  } catch (err) {
    console.error(`  ✗ ${site.slug}: ${err.message}`);
  } finally {
    await context.close();
  }
}

await browser.close();
console.log("\nDone. Screenshots in public/screenshots/");
