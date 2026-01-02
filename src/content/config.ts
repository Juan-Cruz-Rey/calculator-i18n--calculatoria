/**
 * Content Collections Configuration
 *
 * This file defines the schema for MDX calculator content.
 * Each calculator has a separate MDX file per language in:
 * src/content/calculators/{lang}/{calculatorId}.mdx
 */

import { defineCollection, z } from 'astro:content';

const calculators = defineCollection({
  type: 'content',
  schema: z.object({
    // SEO Meta Data
    title: z.string(),
    metaDescription: z.string(),
    keywords: z.string().optional(),
    canonical: z.string(),

    // Category classification
    // This should match the category displayed on the homepage
    category: z.string(),

    // Optional Schema.org structured data
    schema: z.record(z.any()).optional(),
  })
});

export const collections = {
  calculators
};
