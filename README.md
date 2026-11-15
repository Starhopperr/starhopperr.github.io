# Starhopper — Personal Portfolio & Research Publication

Personal portfolio and cybersecurity research publication of **Mainak Sarkar**.

- **Domain:** [starhoppersenpai.com](https://starhoppersenpai.com)
- **Repository:** `starhopperr.github.io`
- **Hosting:** GitHub Pages via GitHub Actions
- **Framework:** [Astro](https://astro.build)
- **Design System:** Atlassian-informed editorial design system (Manrope + DM Mono, `#0C0E12` canvas, `#C8FF49` lime accent)

---

## Architecture & Project Structure

```text
starhopperr.github.io/
├── public/
│   ├── CNAME                     # starhoppersenpai.com
│   ├── favicon.svg               # Vector brand icon
│   ├── robots.txt                # Search engine crawler instructions
│   └── images/                   # Profile & project images
├── src/
│   ├── components/               # Reusable Astro UI components
│   │   ├── SiteHeader.astro
│   │   ├── SiteFooter.astro
│   │   ├── SectionHeading.astro
│   │   ├── ProjectCard.astro
│   │   └── ArticleCard.astro
│   ├── content/                  # Validated Markdown collections
│   │   ├── config.ts             # Zod collection schemas
│   │   ├── blog/                 # Research articles
│   │   └── projects/             # Project case studies (SYNQ, SOAR-X, Kokborok NMT)
│   ├── layouts/
│   │   └── BaseLayout.astro      # Master layout with SEO & Open Graph
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   ├── about.astro           # Background, education, certifications
│   │   ├── contact.astro         # Verified contact routes
│   │   ├── blogs/                # Blog index & dynamic slug routes
│   │   ├── projects/             # Projects index & dynamic slug routes
│   │   └── rss.xml.ts            # Dynamic RSS feed generator
│   └── styles/
│       ├── tokens.css            # ADS-informed semantic design tokens
│       └── global.css            # Base resets, typography, and prose styling
├── docs/
│   ├── IMPLEMENTATION_AUDIT.md   # Discovery audit & architecture decisions
│   └── PUBLISHING_PLAYBOOK.md    # Guide to publishing blogs and projects
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages deployment
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Typecheck and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment to GitHub Pages

The repository includes an automated GitHub Actions workflow (`.github/workflows/deploy.yml`).

> **Important:** In your GitHub repository settings:
> 1. Go to **Settings** → **Pages**.
> 2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
> 3. Pushing commits to `main` will automatically build and deploy the site to `https://starhoppersenpai.com`.
