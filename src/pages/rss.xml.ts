// src/pages/rss.xml.ts
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
  const siteUrl = context.site?.toString().replace(/\/$/, '') || 'https://starhoppersenpai.com';

  return rss({
    title: 'Mainak Sarkar — Cybersecurity Research & Publications',
    description: 'Original research, threat intelligence analysis, secure messaging protocols, post-quantum cryptography, and security engineering write-ups by Mainak Sarkar.',
    site: siteUrl,
    items: sorted.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blogs/${post.slug}/`,
      categories: [post.data.category, ...(post.data.tags || [])],
      author: `${post.data.author || 'Mainak Sarkar'} <mainak2ms@gmail.com>`,
    })),
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
    customData: `
      <language>en-gb</language>
      <copyright>© ${new Date().getFullYear()} Mainak Sarkar. All rights reserved.</copyright>
      <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
      <managingEditor>mainak2ms@gmail.com (Mainak Sarkar)</managingEditor>
      <webMaster>mainak2ms@gmail.com (Mainak Sarkar)</webMaster>
    `.trim(),
  });
}
