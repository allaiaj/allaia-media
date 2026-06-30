import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const biographyChapters = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/biographyChapters' }),
  schema: z.object({
    chapter: z.string(),
    year: z.string(),
    label: z.string(),
    title: z.string(),
    body: z.string(),
    order: z.number(),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/writing' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    excerpt: z.string(),
    publish_date: z.string(),
    word_count: z.number(),
    read_time_min: z.number(),
    cover_image: z.string().optional(),
    pull_quote: z.string().optional(),
    location: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const bookChapters = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/bookChapters' }),
  schema: z.object({
    part: z.string(),
    part_title: z.string(),
    description: z.string(),
    chapters_count: z.number(),
    order: z.number(),
  }),
});

const artworks = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/artworks' }),
  schema: z.object({
    title: z.string(),
    collection: z.string(),
    medium: z.string(),
    dimensions: z.string().optional(),
    year: z.string(),
    image: z.string(),
    description: z.string().optional(),
    status: z.enum(['available', 'sold', 'enquire']),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/testimonials' }),
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    role: z.string().optional(),
    location: z.string(),
    type: z.enum(['practice', 'reader', 'community', 'partnership']),
    featured: z.boolean().default(false),
  }),
});

const youtubeVideos = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/youtubeVideos' }),
  schema: z.object({
    video_id: z.string(),
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    published_date: z.string(),
    featured: z.boolean().default(false),
  }),
});

const instagramPosts = defineCollection({
  loader: glob({ pattern: '**/*.json', base: 'src/content/instagramPosts' }),
  schema: z.object({
    post_id: z.string(),
    instagram_url: z.string(),
    caption: z.string(),
    image_path: z.string(),
    publish_date: z.string(),
    type: z.enum(['post', 'carousel', 'reel']),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  biographyChapters,
  writing,
  bookChapters,
  artworks,
  testimonials,
  youtubeVideos,
  instagramPosts,
};
