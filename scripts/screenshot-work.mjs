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

    const pageHeight = await page.evaluate(() => ({
      scrollH: document.documentElement.scrollHeight,
      bodyH: document.body.scrollHeight,
      footerExists: !!document.querySelector("footer"),
      footerTop: document.querySelector("footer")?.getBoundingClientRect().top,
    }));

    const buf = await page.screenshot({
      fullPage: true,
      type: "jpeg",
      quality: 80,
    });
    const out = resolve(OUT_DIR, `${site.slug}.jpg`);
    writeFileSync(out, buf);
    const sizeKB = (buf.length / 1024).toFixed(0);
    console.log(
      `  → ${site.slug}.jpg (${sizeKB} KB) - page ${pageHeight.scrollH}px, footer@${pageHeight.footerTop}px`
    );
  } catch (err) {
    console.error(`  ✗ ${site.slug}: ${err.message}`);
  } finally {
    await context.close();
  }
}

await browser.close();
console.log("\nDone. Screenshots in public/screenshots/");
