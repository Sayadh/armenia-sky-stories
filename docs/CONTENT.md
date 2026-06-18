# Content inventory

All copy is Armenian. Each section maps to a component in `components/sections/` and a data module in `data/`.

## Page order (`pages/index.vue`)

1. **Navbar** (`layout/AppNavbar.vue`) — logo, 6 nav links (Գլխավոր, Իմ մասին, Ծառայություններ, Ինչպես է աշխատում, Հարցեր, Կապ), CTA "Պատվիրել նկարահանում".
2. **Hero** (`HeroSection.vue`) — title "Հայաստանը՝ նոր տեսանկյունից", subtitle, two CTAs, scroll hint. Background `hero-bright.png` with slow-zoom.
3. **About** (`AboutSection.vue`) — "Ողջույն, ես Սայադն եմ" + 3 stats (4K, 10+, 100%). Pilot photo + DJI badge.
4. **Offerings** (`OfferingsSection.vue`, `#offerings`) — "Ինչ կարող եմ նկարահանել": 8 service-direction cards + a "Մոնտաժի ծառայություններ" sub-grid of 5 editing cards + note + CTA.
5. **Regions / Armenia from above** (`RegionsSection.vue`, `#map`) — 8 selectable locations (Sevan, Dilijan, Garni, Geghard, Aragats, Tatev, Khor Virap, Jermuk) with image + description.
6. **Advantages / Why choose** (`AdvantagesSection.vue`) — 6 feature cards with icons.
7. **Process** (`ProcessSection.vue`, `#process`) — 5 numbered steps (01–05) on a timeline.
8. **Testimonials** (`TestimonialsSection.vue`) — single highlighted quote from Սայադ.
9. **FAQ** (`FaqSection.vue`, `#faq`) — 4 Q&A in an accordion.
10. **Pricing** (`PricingSection.vue`, `#pricing`) — "Մոտավոր արժեքներ": 4 starting-price cards + note + highlighted custom-offer card with CTA.
11. **Contact** (`ContactSection.vue`, `#contact`) — sunset CTA + 4 contact channels + message form that posts to `/api/contact` (Telegram).
12. **Footer** (`AppFooter.vue`) — logo, tagline, social links, copyright with current year.

> `PortfolioSection.vue` / `data/portfolio.ts` exist (lightbox gallery) but are **not** mounted in `pages/index.vue` yet. Re-add `<PortfolioSection />` and a nav link when the gallery is ready.

## Data modules

| Module             | Shape (see `types/content.ts`)                         |
| ------------------ | ------------------------------------------------------ |
| `site.ts`          | brand name, tagline, SEO title/description/keywords    |
| `navigation.ts`    | `NavLink[]` (href + label) + CTA label                 |
| `stats.ts`         | `Stat[]` (value, label)                                |
| `offerings.ts`     | `Offering[]` services + editing list + copy            |
| `portfolio.ts`     | `PortfolioItem[]` (src, title, location, type, span)   |
| `regions.ts`       | `Region[]` (id, name, image, desc)                     |
| `advantages.ts`    | `Advantage[]` (icon, title, desc)                      |
| `process.ts`       | `ProcessStep[]` (n, title, desc)                       |
| `testimonial.ts`   | quote, author, role, initial                           |
| `faqs.ts`          | `Faq[]` (q, a)                                          |
| `pricing.ts`       | `PricingPlan[]` (icon, title, price, desc) + copy      |
| `contact.ts`       | `ContactChannel[]` + derived `socialLinks` + CTA copy  |

## Notes

- Contact details live in `data/contact.ts`; the footer's `socialLinks` are derived from `contactChannels` (single source of truth).
- Pricing values in `data/pricing.ts` are starting prices ("Սկսած …"); adjust as needed.
- The contact form posts to `/api/contact`, which forwards the message to the Telegram bot. Configure `NUXT_TELEGRAM_BOT_TOKEN` / `NUXT_TELEGRAM_CHAT_ID` (see `.env.example`).
- Portfolio "video" items open an image in a lightbox (no real video source yet). Hook up real video URLs in `data/portfolio.ts` before re-enabling the section.
