# Starhopper — Implementation Audit
**Phase 0 — Repository & Design-System Discovery**
**Date:** 14 November 2026 · **Auditor:** Antigravity

---

## 1. Repository State

| Item | Finding |
|---|---|
| Path | `C:\Users\DELL\OneDrive\Documents\GitHub\starhopperr.github.io` |
| Remote | `origin/main` → `starhopperr.github.io` on GitHub |
| Active branch | `main` |
| Working tree | **Clean** — nothing to commit |
| CNAME | `starhoppersenpai.com` ✅ |
| GitHub Pages | Custom domain configured; HTTPS expected |

### Existing files (to preserve / archive)
| File | Role | Decision |
|---|---|---|
| `index.html` | Vanilla single-page portfolio shell | **Archive** — will be replaced by Astro output |
| `styles.css` | Custom CSS (Poppins/Inter, blue/green palette) | **Archive** — replaced by design-system tokens |
| `content.js` | Data-driven content (projects, skills, etc.) | **Migrate** — content extracted to Markdown collections |
| `render.js` | DOM rendering engine | **Archive** — Astro templates replace this |
| `sha256.js` | SHA-256 hash demo widget | **Keep in archive** — may be a standalone demo page |
| `images/` | `logo.svg`, `profile.jpeg`, `SYNQ.png`, `NeuroAI.png`, `snapshot.png` | **Copy to `public/images/`** |
| `CNAME` | Custom domain | **Keep** — Astro build will emit this via `public/CNAME` |
| `.git/` | Git history | **Preserve** — do not rebase/squash |

> [!IMPORTANT]
> The existing site is a **vanilla HTML site with no build step, no package.json, no Node.js toolchain**. Astro is not installed. This audit confirms we are creating the Astro project from scratch inside this repository, not migrating an existing Astro project.

---

## 2. Design-System Inventory

Source: `starhopper_atlassian_informed_design_system.md`

### 2.1 Color Tokens
| CSS Variable | Value | Role |
|---|---|---|
| `--color-bg-canvas` | `#0C0E12` | Main background |
| `--color-bg-surface` | `#17191F` | Cards / secondary surfaces |
| `--color-bg-surface-raised` | `#1A1D24` | Overlays / popovers |
| `--color-bg-inverse` | `#F0EFE9` | Light editorial panels |
| `--color-text-primary` | `#FFFFFF` | Primary text |
| `--color-text-secondary` | `#9B9EA7` | Supporting text |
| `--color-text-inverse` | `#0C0E12` | Text on lime / light |
| `--color-accent` | `#C8FF49` | Lime — primary action/emphasis |
| `--color-border-subtle` | `rgba(255,255,255,0.08)` | Section dividers |
| `--color-border-default` | `rgba(255,255,255,0.10)` | Card borders |
| `--color-border-strong` | `rgba(255,255,255,0.15)` | Secondary action borders |
| `--color-overlay` | `rgba(12,14,18,0.80)` | Nav backdrop |

### 2.2 Typography
| Role | Family | Size | Weight |
|---|---|---|---|
| Display | Manrope | 56–112px fluid | 600–700 |
| Heading XL | Manrope | 40–56px | 600–700 |
| Heading L | Manrope | 28–36px | 600–700 |
| Heading M | Manrope | 20–24px | 600 |
| Body Large | Manrope | 18–20px | 400–500 |
| Body | Manrope | 14–16px | 400 |
| Label/Mono | DM Mono | 10–12px, uppercase | 400–500 |
| Code | DM Mono | 12–14px | 400 |

Google Fonts imports needed: `Manrope:wght@400;500;600;700` and `DM+Mono:wght@400;500`.

### 2.3 Spacing Scale (8px base)
`4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80px`

### 2.4 Radius
`8px · 12–16px · 24–32px · 999px (pill)`

### 2.5 Layout
- Max content width: `1280px`
- Reading width: `720–760px`
- Breakpoints: `640 / 768 / 1024 / 1280px`
- Section vertical spacing: `88–112px desktop`, `72–88px mobile`

### 2.6 Motion
- Fast: `150–220ms ease-out`
- Normal: `250–350ms`
- Respect `prefers-reduced-motion`

---

## 3. Confirmed Owner Content

| Field | Value |
|---|---|
| Name | Mainak Sarkar |
| Email | mainak2ms@gmail.com |
| GitHub | github.com/Starhopperr |
| LinkedIn | linkedin.com/in/starhoppersenpai |
| Education | B.Tech CSE, Cybersecurity Specialization, Bennett University (2024–2028) |
| CGPA | 8.63 (confirmed from resume — owner to decide if public) |
| Location | **Not displayed** (per owner instruction) |

### Projects to include
| Project | Slug | Repo | Type |
|---|---|---|---|
| SYNQ | `synq` | github.com/Starhopperr/SYNQ | Software project |
| SOAR-X | `soar-x` | github.com/Starhopperr/SoarX | Software project |
| Kokborok–English NMT | `kokborok-nmt` | github.com/Starhopperr/Kokborok-English-NMT | Research / book chapter |

### Publication
- **Title:** Developing a Neural Machine Translation Tool for Kokborok-to-English: A Step Toward Preserving Indigenous Languages
- **Authors:** Sanchali Das, Pranjal, Mainak Sarkar
- **Book:** Sustainable Developments in Computer Engineering, Green Technology and Smart Systems
- **DOI:** https://doi.org/10.1201/9781003743767-121

---

## 4. Hosting & Deployment State

| Item | State |
|---|---|
| CNAME file | Present — `starhoppersenpai.com` |
| GitHub Pages | Active on `main` branch (inferred from CNAME + clean main) |
| Current deployment | Vanilla HTML — served directly from root |
| Astro deployment | Will need GitHub Actions workflow (`deploy.yml`) |
| Existing Actions | **None found** — must create |
| DNS | Apex A records + www CNAME already configured (per brief) |

> [!WARNING]
> After switching to Astro, the GitHub Pages source must be changed from **"Deploy from branch: main"** to **"GitHub Actions"** in the repository Settings → Pages. This is a manual step in the GitHub UI.

---

## 5. Risks and Unknowns

| Risk | Severity | Mitigation |
|---|---|---|
| Pages source must be switched to Actions manually | Medium | Documented in deploy step |
| No Node.js / pnpm confirmed on this machine | Low | Will install via standard Astro scaffold |
| `sha256.js` widget — keep or drop? | Low | Archive for now; can add as island later |
| Blog content — no articles yet | Low | Schema and templates built; content added later |
| SOAR-X GitHub repo visibility unknown | Low | Marked as draft until confirmed |

---

## 6. Proposed Project Structure

```
starhopperr.github.io/
├── public/
│   ├── CNAME                    ← starhoppersenpai.com
│   ├── favicon.svg              ← from images/logo.svg
│   ├── robots.txt
│   └── images/
│       ├── profile.jpeg
│       ├── SYNQ.png
│       └── projects/ blog/
├── src/
│   ├── styles/
│   │   ├── tokens.css           ← design system CSS variables
│   │   └── global.css           ← resets, base typography
│   ├── components/
│   │   ├── SiteHeader.astro
│   │   ├── SiteFooter.astro
│   │   ├── HeroSection.astro
│   │   ├── SectionHeading.astro
│   │   ├── ProjectCard.astro
│   │   ├── ArticleCard.astro
│   │   ├── SkillTag.astro
│   │   ├── Button.astro
│   │   └── StatusPill.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ArticleLayout.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── projects/
│   │   │   ├── synq.md
│   │   │   ├── soar-x.md
│   │   │   └── kokborok-nmt.md
│   │   └── blog/              ← empty, ready for articles
│   └── pages/
│       ├── index.astro         ← Homepage
│       ├── about.astro
│       ├── contact.astro
│       ├── projects/
│       │   ├── index.astro
│       │   └── [...slug].astro
│       └── blogs/
│           ├── index.astro
│           └── [...slug].astro
├── docs/
│   ├── IMPLEMENTATION_AUDIT.md  ← this file
│   └── PUBLISHING_PLAYBOOK.md
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## 7. Phase Plan

| Phase | Scope | Status |
|---|---|---|
| 0 | Discovery audit | ✅ Complete |
| 1 | Astro scaffold + GitHub Actions deploy | 🔄 Next |
| 2 | Design-system tokens + shared shell (Header, Footer, layouts) | Pending |
| 3 | Homepage + About page | Pending |
| 4 | Content collections schema (blog + projects) | Pending |
| 5 | Blog index + article template | Pending |
| 6 | Projects index + case-study template | Pending |
| 7 | Navigation, taxonomy, internal links | Pending |
| 8 | SEO, sitemap, RSS, Open Graph | Pending |
| 9 | Accessibility, performance, QA | Pending |
| 10 | Production launch + handoff docs | Pending |

---

## 8. Integration Architecture Decision

**Decision:** Implement the design system as **CSS custom properties** in `src/styles/tokens.css`, consumed by all Astro components via a global stylesheet import in `BaseLayout.astro`.

**Rationale:**
- The design system spec is CSS-token–based (no React/Tailwind dependency)
- Astro supports pure CSS natively — no adapter needed
- All components will be `.astro` files (zero JS unless interaction requires it)
- Mobile nav toggle will use a small `<script>` island (no framework overhead)
- Content collections use Astro's native API (v2+)

**Fonts:** Loaded via `<link>` preconnect + stylesheet in `<head>` (Manrope + DM Mono from Google Fonts).

---

*Audit complete. No application files were modified. Proceeding to Phase 1 upon owner approval.*
