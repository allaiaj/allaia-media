// Capture true full-page screenshots of every site in /src/data/site.ts
// work[] and save them as JPEGs in /public/screenshots/.
// Run with: node scripts/screenshot-work.mjs
import { chromium } from "playwright";
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "..", "public", "screenshots");

const sites = [
  { slug: "ayahs-beauty", url: "https://ayahs-beauty-greenford.pages.dev", device: "desktop" },
  { slug: "maisy-rose", url: "https://maisyrose-flowers-collier-row.pages.dev", device: "mobile" },
  { slug: "neolution", url: "https://neolution-face-and-body.pages.dev", device: "desktop" },
  { slug: "simply-pizza", url: "https://simply-pizza-ilford.pages.dev", device: "mobile" },
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
  const context = await browser.newContext({
    viewport,
    deviceScaleFactor: 2,
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

    // Walk down the page slowly to trigger every IntersectionObserver
    // and lazy-loaded image, then back to the top.
    await page.evaluate(async () => {
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const step = 400;
      const total = document.documentElement.scrollHeight;
      for (let y = 0; y <= total; y += step) {
        window.scrollTo(0, y);
        await sleep(180);
      }
      window.scrollTo(0, total);
      await sleep(600);
    });
    await page.waitForTimeout(1500);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(1500);

    // Force every animation/transition to a finished state, reveal all
    // reveal/fade-in classes (most agency templates use these), and
    // convert sticky/fixed elements to absolute so they don't appear
    // floating in the middle of the full-page screenshot.
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
      // Reveal any common scroll-triggered hidden states
      document
        .querySelectorAll(
          ".reveal, [data-reveal], [data-animate], [data-aos], .opacity-0, .fade-in, .invisible"
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

      // Kill anything that looks like a cookie banner / consent dialog
      const cookieRegex = /(cookie|consent|gdpr|privacy[-_]?(banner|notice|bar)|cc[-_]?(banner|window))/i;
      document.querySelectorAll("body *").forEach((el) => {
        const idClass = `${el.id || ""} ${el.className || ""}`;
        if (typeof el.className === "string" && cookieRegex.test(idClass)) {
          el.style.display = "none";
        }
      });

      // De-fix sticky/fixed elements so they don't smear across full-page capture
      document.querySelectorAll("*").forEach((el) => {
        const pos = getComputedStyle(el).position;
        if (pos === "fixed" || pos === "sticky") {
          el.style.position = "absolute";
        }
      });
    });

    await page.waitForTimeout(800);

    const buf = await page.screenshot({
      fullPage: true,
      type: "jpeg",
      quality: 80,
    });
    const out = resolve(OUT_DIR, `${site.slug}.jpg`);
    writeFileSync(out, buf);
    const sizeKB = (buf.length / 1024).toFixed(0);
    console.log(`  → ${site.slug}.jpg (${sizeKB} KB)`);
  } catch (err) {
    console.error(`  ✗ ${site.slug}: ${err.message}`);
  } finally {
    await context.close();
  }
}

await browser.close();
console.log("\nDone. Screenshots in public/screenshots/");
