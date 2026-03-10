import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().optional(),
    publishedDate: z.string().optional(),
    published: z.string().nullable().optional(),
    canonicalUrl: z.string().optional(),
    sourceUrl: z.string().optional(),
    url: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
