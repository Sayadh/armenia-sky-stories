# Migration: Next.js 16 → Nuxt 3

## Mapping

| Next.js (before)                         | Nuxt 3 (after)                                          |
| ---------------------------------------- | ------------------------------------------------------- |
| `app/layout.tsx` (metadata, fonts, html) | `nuxt.config.ts` `app.head` + `app.vue`                 |
| `app/page.tsx`                           | `pages/index.vue`                                       |
| `app/globals.css`                        | `assets/css/main.css`                                   |
| `next/font/google`                       | Google Fonts `<link>` in `nuxt.config` head             |
| `next.config.mjs`                        | `nuxt.config.ts`                                        |
| React `useState`/`useEffect`             | Vue `ref` / `onMounted` / `<script setup>`              |
| `lucide-react`                           | `lucide-vue-next`                                       |
| shadcn/base-ui `Button`, `Accordion`     | `components/ui/*` (custom, dependency-free)             |
| `components/reveal.tsx` (component)       | `v-reveal` directive (`directives/reveal.ts`)           |
| `'use client'` components                | default in Vue (no directive needed)                    |
| `cn()` util (clsx + tailwind-merge)      | dropped — Tailwind classes composed directly / `:class` |

## Key decisions

- **Content extracted to `data/`** — every section's hardcoded array/object moved to a typed module, so copy is editable without touching components (DRY, single source of truth).
- **Pure Tailwind v4**, no component library. Buttons/cards/inputs are plain utility classes; the only shared UI primitives are `SectionHeading`, `BaseAccordion` and a `form-input` CSS class.
- **`v-reveal` directive** replaces the `<Reveal>` wrapper component — more idiomatic in Vue and reusable on any element: `v-reveal` or `v-reveal="{ delay: 120 }"`.
- **Fonts via `<link>`** instead of a build-time font module — zero extra dependencies and no network needed at build time.
- **Removed deps:** `next`, `react`, `react-dom`, `shadcn`, `@base-ui/react`, `class-variance-authority`, `clsx`, `tailwind-merge`, `tw-animate-css`, `@vercel/analytics`.
- **Added deps:** `nuxt`, `vue`, `vue-router`, `@tailwindcss/vite`, `tailwindcss`, `lucide-vue-next`.

## Behavioral parity

- Navbar transparent → glass on scroll (>40px), mobile menu toggle: preserved via `useScrolled` composable + `ref`.
- Portfolio lightbox: `ref<PortfolioItem|null>`, overlay click / close button / `stop` on inner click.
- Regions interactive selector with cross-fading images: `ref` active region.
- FAQ single-collapsible accordion: native implementation in `BaseAccordion`.
- Contact form success state: local `ref`, `@submit.prevent`.
- Footer year: `new Date().getFullYear()`.

## Running

```bash
npm install        # or pnpm install
npm run dev        # dev server at http://localhost:3000
npm run build      # production build
npm run preview    # preview the build
```
