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
    nutrition: z.object({
      calories: z.number(),
      protein:  z.number(),
      carbs:    z.number(),
      fat:      z.number(),
      fiber:    z.number().optional(),
      sodium:   z.number().optional(),
    }).optional(),
  }),
});

export const collections = { recipes };
