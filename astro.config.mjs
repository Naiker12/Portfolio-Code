import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://porfolio.dev/',
  integrations: [
    tailwind(),
    robotsTxt(),
  ],
  adapter: vercel(),
});
