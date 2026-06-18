# Architecture — Armenia Sky Stories

Single-page marketing site for a drone photography/videography business in Armenia.
Content is in Armenian. Originally built with **Next.js 16 (App Router, RSC)**; migrated to **Nuxt 3 + Vue 3 (Composition API, TypeScript) + Tailwind CSS v4**.

## Stack

| Concern        | Implementation                                      |
| -------------- | --------------------------------------------------- |
| Framework      | Nuxt 3 (Vue 3, Composition API, `<script setup>`)   |
| Language       | TypeScript                                          |
| Styling        | Tailwind CSS v4 (via `@tailwindcss/vite`)           |
| Icons          | `lucide-vue-next`                                   |
| Fonts          | Noto Sans Armenian, Noto Serif Armenian, Geist Mono |
| Scroll reveal  | `v-reveal` custom directive (IntersectionObserver)  |
| Rendering      | Nuxt/Nitro SSR single page + one `/api` route        |

## Directory layout

```
.
├── app.vue                  # Root: <NuxtPage/> wrapper (head set in nuxt.config)
├── nuxt.config.ts           # Modules, head/SEO meta, Tailwind vite plugin
├── assets/css/main.css      # Tailwind import + design tokens + animations
├── pages/
│   └── index.vue            # Home page: composes all sections in order
├── components/
│   ├── layout/
│   │   ├── AppNavbar.vue     # Fixed header, scroll glass state, mobile menu
│   │   └── AppFooter.vue
│   ├── sections/            # One component per landing section
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── OfferingsSection.vue   # "What I can shoot" + editing services
│   │   ├── RegionsSection.vue     # "Armenia from above" interactive map
│   │   ├── AdvantagesSection.vue  # "Why choose me"
│   │   ├── ProcessSection.vue
│   │   ├── TestimonialsSection.vue
│   │   ├── FaqSection.vue
│   │   ├── PricingSection.vue     # Starting prices + custom-offer card
│   │   ├── ContactSection.vue
│   │   └── PortfolioSection.vue   # Lightbox gallery — built, currently unused
│   └── ui/
│       ├── SectionHeading.vue     # Reusable eyebrow + title + optional lead
│       ├── AppButton.vue          # CTA anchor (variant: accent|glass, size: sm|md)
│       ├── FeatureCard.vue        # Glass card: hover lift + gradient reveal
│       ├── BaseAccordion.vue      # Native, dependency-free accordion
│       └── BaseAccordionItem.vue
├── composables/
│   └── useScrolled.ts       # Reactive window scroll threshold flag
├── directives/
│   └── reveal.ts            # IntersectionObserver fade-in-up directive
├── plugins/
│   └── reveal.ts            # Registers the v-reveal directive
├── server/
│   └── api/
│       └── contact.post.ts  # Validates form, forwards to Telegram bot
├── data/                    # All copy/content as typed, importable modules
│   ├── site.ts
│   ├── navigation.ts
│   ├── stats.ts
│   ├── offerings.ts
│   ├── portfolio.ts
│   ├── regions.ts
│   ├── advantages.ts
│   ├── process.ts
│   ├── testimonial.ts
│   ├── faqs.ts
│   ├── pricing.ts
│   └── contact.ts
├── types/
│   └── content.ts           # Shared content type definitions
├── public/images/           # Image assets
└── docs/                    # This documentation
```

## Separation of concerns

- **Data** lives in `data/*` as plain typed objects — no copy is hardcoded inside components. Editing text never requires touching markup.
- **Presentation** lives in `components/sections/*`, each consuming its data module.
- **Reusable UI** (`components/ui/*`) is content-agnostic and styled only with Tailwind utilities + design tokens. CTAs go through `AppButton`; premium cards through `FeatureCard` — no duplicated class blocks across sections.
- **Cross-cutting behavior** (scroll reveal, scroll state) is isolated in `directives/` and `composables/`.
- **Server logic** (the contact → Telegram forward) lives in `server/api/`; secrets come from `runtimeConfig`, never the client.

## Design tokens

Color, radius and font tokens are defined in `assets/css/main.css` under `:root` and exposed to Tailwind via `@theme inline`. Brand palette: sky blue (`--primary`), turquoise (`--secondary`), gold (`--accent`). Custom utilities `.glass`, `.glass-dark`, `.form-input` and the keyframe animations (`slow-zoom`, `scroll-bob`, `reveal`) are preserved from the original.

## Rendering & data flow

`pages/index.vue` imports and renders the section components top-to-bottom; each section imports its content from `data/`. Anchor links (`#about`, `#offerings`, `#pricing`, …) drive in-page navigation with `scroll-behavior: smooth` and a `scroll-padding-top` offset for the fixed navbar.

The only server interaction is the contact form: it `POST`s to `/api/contact`, which validates the payload and forwards it to a Telegram bot via `sendMessage`. The bot token and chat id are read from `runtimeConfig` (env: `NUXT_TELEGRAM_BOT_TOKEN`, `NUXT_TELEGRAM_CHAT_ID`) and never reach the browser.
