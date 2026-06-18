# Armenia Sky Stories

Marketing single-page site for a drone photography & videography business in Armenia.
Built with **Nuxt 3 · Vue 3 (Composition API, TypeScript) · Tailwind CSS v4**.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev        # http://localhost:3000
```

## Production

```bash
npm run build      # build
npm run preview    # preview the production build
npm run generate   # static site (SSG)
```

## Project structure

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for the full layout.
Content lives in `data/`, sections in `components/sections/`, shared UI in
`components/ui/`. Editing copy never requires touching markup.

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — structure & conventions
- [`docs/CONTENT.md`](docs/CONTENT.md) — content inventory & data modules
- [`docs/MIGRATION.md`](docs/MIGRATION.md) — Next.js → Nuxt 3 migration notes

## Contact form → Telegram

The contact form posts to `server/api/contact.post.ts`, which forwards the
message to a Telegram bot. Set the credentials as env vars (see `.env.example`):

```bash
NUXT_TELEGRAM_BOT_TOKEN=...
NUXT_TELEGRAM_CHAT_ID=...
```

For production hosts (Vercel, Netlify, …) set the same variables in the
project's environment settings — `.env` is gitignored.
