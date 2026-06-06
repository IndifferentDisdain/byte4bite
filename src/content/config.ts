import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title:       z.string(),
    description: z.string(),
    pubDate:     z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage:   image().optional(),
    category:    z.string().optional(),
    prepTime:    z.string().optional(),
    cookTime:    z.string().optional(),
    servings:    z.string().optional(),
    tags:        z.array(z.string()).optional(),
    featured:    z.boolean().optional().default(false),
  }),
});

export const collections = { recipes };
