import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:        z.string(),
    description:  z.string(),
    pubDate:      z.coerce.date(),
    updatedDate:  z.coerce.date().optional(),
    draft:        z.boolean().default(true),
    category:     z.string(),
    tags:         z.array(z.string()).default([]),
    author:       z.string().default('Mainak Sarkar'),
    heroImage:    z.string().optional(),
    featured:     z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title:         z.string(),
    description:   z.string(),
    pubDate:       z.coerce.date(),
    updatedDate:   z.coerce.date().optional(),
    draft:         z.boolean().default(true),
    status:        z.enum(['Planned', 'In Development', 'Completed', 'Archived', 'Published']),
    technologies:  z.array(z.string()).default([]),
    repositoryURL: z.string().url().optional(),
    demoURL:       z.string().url().optional(),
    coverImage:    z.string().optional(),
    featured:      z.boolean().default(false),
    isResearch:    z.boolean().default(false),
    doiURL:        z.string().url().optional(),
  }),
});

export const collections = { blog, projects };
