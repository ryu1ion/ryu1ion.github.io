import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ryu1ion.github.io',
  base: '/homepage',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    assets: '_assets',
  },
  image: {
    responsiveStyles: true,
  },
});
