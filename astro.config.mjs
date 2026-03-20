import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://joerobinson.io',
  trailingSlash: 'never',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
  ],
  redirects: {
    '/blog/internal-link-mapping-how-to-create-a-visual-link-map': '/blog/link-map',
    '/blog/why-ai-search-attribution-cannot-be-trusted': '/blog/ai-attribution-issues',
    '/why-seo-and-ai-search-attribution-cannot-be-trusted/': '/blog/ai-attribution-issues',
    '/message-mining-from-google-reviews/': '/blog/message-mining-from-google-reviews',
    '/link-map/': '/blog/link-map',
  },
});
