import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

/**
 * Wrap every markdown table in a scrollable div so wide tables scroll
 * inside themselves instead of pushing the sheet sideways.
 */
function rehypeWrapTables() {
  return (tree) => {
    const walk = (node) => {
      if (!node.children) return;
      node.children = node.children.map((child) => {
        walk(child);
        if (child.type === 'element' && child.tagName === 'table') {
          return {
            type: 'element',
            tagName: 'div',
            properties: { className: ['table-wrap'] },
            children: [child],
          };
        }
        return child;
      });
    };
    walk(tree);
  };
}

export default defineConfig({
  site: 'https://joerobinson.io',
  trailingSlash: 'never',
  markdown: {
    rehypePlugins: [rehypeWrapTables],
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
  ],
  redirects: {
    '/blog/ai-visibility-tracking': '/blog/ai-prompt-sets',
    '/blog/internal-link-mapping-how-to-create-a-visual-link-map': '/blog/link-map',
    '/blog/why-ai-search-attribution-cannot-be-trusted': '/blog/ai-attribution-issues',
    '/why-seo-and-ai-search-attribution-cannot-be-trusted/': '/blog/ai-attribution-issues',
    '/message-mining-from-google-reviews/': '/blog/message-mining-from-google-reviews',
    '/link-map/': '/blog/link-map',
  },
});
