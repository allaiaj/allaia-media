// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://allaiamedia.com',
  trailingSlash: 'ignore',
  build: {
    // 'directory' → outputs `/the-studio/index.html` which Vercel
    // serves correctly when the user hits /the-studio. (The previous
    // 'file' format produced `/the-studio.html` which 404'd without
    // a Vercel cleanUrls rewrite.)
    format: 'directory',
    inlineStylesheets: 'always',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  vite: {
    ssr: { noExternal: ['@lucide/astro'] },
  },
});
