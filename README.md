# CNG Synergy website

The website for [cngsynergy.com](https://cngsynergy.com), built with Next.js and deployed on Vercel.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

All page text lives in `src/content/`. Contact details and the menu live in `src/content/site.ts`.
See `AGENTS.md` for the full project guide, including how to add pages and videos.

## Deploy

1. Import this repository in Vercel.
2. Add the `RESEND_API_KEY` environment variable (see `.env.example`) so the contact form can send email.
3. Add `cngsynergy.com` and `www.cngsynergy.com` under the project's Domains.
