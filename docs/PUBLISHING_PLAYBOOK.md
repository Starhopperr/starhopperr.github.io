# Starhopper — Publishing Playbook
**Version:** 1.0 · **Date:** 14 November 2026

This guide explains how to publish research articles, add project case studies, and maintain `starhoppersenpai.com`.

---

## 1. Local Development Quickstart

```bash
# Install dependencies
npm install

# Start local dev server (default: http://localhost:4321)
npm run dev

# Run production build and check for errors
npm run build

# Preview production build locally
npm run preview
```

---

## 2. Publishing a Research Article (Blog)

All articles live in `src/content/blog/` as Markdown (`.md`) or MDX (`.mdx`) files.

### Workflow

1. Create a new file in `src/content/blog/{slug}.md` (e.g. `polinrider-c2.md`).
2. Add frontmatter with `draft: true` while drafting:
   ```yaml
   ---
   title: "PolinRider: Analysing a Supply-Chain Campaign"
   description: "A technical examination of the reported campaign, delivery chain, C2 mechanisms and defensive implications."
   pubDate: 2026-11-14
   updatedDate: 2026-11-14
   draft: true
   category: "Threat Intelligence"
   tags:
     - malware
     - supply-chain-security
     - threat-intelligence
   author: "Mainak Sarkar"
   featured: false
   heroImage: "/images/blog/polinrider-c2/cover.webp" # optional
   ---
   ```
3. Add supporting images into `public/images/blog/{slug}/`.
4. Preview locally using `npm run dev` (drafts will not appear on production builds).
5. When ready to publish:
   - Change `draft: false`.
   - Update `pubDate` to the current date.
   - Run `npm run build` to verify routes and frontmatter validation.
   - Commit and push to `main` branch.

### Editorial Guidelines
- Distinguish confirmed technical evidence, vendor attribution, and author assessment.
- Cite primary sources and reference CVEs/TTPs accurately.
- Avoid publishing credentials, live exploit payloads, or private datasets.

---

## 3. Adding or Updating a Project

All projects live in `src/content/projects/` as Markdown (`.md`) files.

### Frontmatter Schema
```yaml
---
title: "Project Name"
description: "A concise 1-2 sentence summary of what the project does."
pubDate: 2026-11-14
updatedDate: 2026-11-14
draft: false
status: "In Development" # 'Planned' | 'In Development' | 'Completed' | 'Archived' | 'Published'
technologies:
  - Java
  - Android
  - Cryptography
repositoryURL: "https://github.com/Starhopperr/..." # optional
demoURL: "https://..." # optional
coverImage: "/images/projects/your-image.png" # optional
featured: true # true displays on homepage
isResearch: false # true marks as research publication
doiURL: "https://doi.org/..." # optional
---
```

---

## 4. Maintenance Cadence

### Every Publishing Session
- Run `npm run build` locally before pushing.
- Check git diff for secrets or accidental file changes.
- Verify GitHub Actions workflow run in GitHub repository.

### Monthly
- Review broken links and image paths.
- Check Search Console indexing and performance.
- Update dependencies with `npm update`.
