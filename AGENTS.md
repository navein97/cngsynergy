<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# CNG Synergy website: project guide

Marketing site for CNG Synergy (logistics performance solutions, Klang). Next.js App Router,
TypeScript, Tailwind CSS v4, deployed on Vercel at cngsynergy.com.

## Where things live

| To change | Edit |
| --- | --- |
| Words on a page | `src/content/<page>.ts` (wrap text in `**` for bold) |
| Phone, email, address, WhatsApp link, menu items | `src/content/site.ts` |
| Layout of a page | `src/app/<route>/page.tsx` |
| Header, footer, shared sections | `src/components/` |
| Colours, fonts, heading and button styles | `src/app/globals.css` |
| Photos | `public/images/` |
| Videos | `public/videos/` |

Pages and their addresses (keep these, Google has them indexed):
`/`, `/about-us/`, `/our-service/`, `/prohayat-180/`, `/contact-us/`.
The old `/prodrive-180/` address redirects to `/prohayat-180/` (see `next.config.ts`).

## Rules

- Copy goes in `src/content`, never hard-coded in page files.
- Use the colour names from `globals.css` (`bg-ink`, `text-route`, `bg-dock`...). Do not add raw hex values in components.
- `signal` red is for marks and large type. For buttons and small red text use `signal-deep`, which passes contrast.
- Headings use the `display-1`, `display-2`, `display-3` classes. Buttons use `btn` plus `btn-primary`, `btn-outline-light` or `btn-whatsapp`.
- Wrap section content in `<div className="shell">` for the standard page width.
- Dark sections get the `on-dark` class so keyboard focus outlines stay visible.
- The logo PNG has white lettering, so it only goes on `bg-ink`.
- The ProHayat 180 page has its own palette (`pd-*` colours). Do not mix it into other pages.
- New icons go in `src/components/Icon.tsx`.

## Scroll story

The site sells consultancy to logistics managers, so it stays calm: the home page
has no scroll tricks apart from the yard photo opening out, and all text is
readable straight away. The interactive, animated parts belong on the ProHayat 180
page only. There are no animation libraries. One small component does the work:

- `src/components/ScrollProgress.tsx` wraps a block and keeps a CSS variable `--p`
  on it: 0 as the block comes into view, 1 once it has been scrolled through.
- The effects are plain CSS in `globals.css` (section "Scroll story") that read `--p`:
  `photo-open` (`<PhotoBand opensOnScroll />`, home page yard photo), and on the
  ProHayat 180 page `ticks` (check marks draw themselves), `days` and `meter-fill`.
- For `ticks` and `days`, set `--n` (number of items) on the list and
  `--i` (0, 1, 2...) on each item. Copy an existing use in `src/app/prohayat-180/`.
- With reduced motion switched on, or without JavaScript, `--p` stays at 1 and
  everything shows in its finished state. Keep it that way: never hide content
  behind an effect.

The home page has five sections: hero, our services (four equal cards, one is
ProHayat 180), why CNG Synergy, about and contact. Their text is in `src/content/home.ts`. The App Store and Google Play
badges are `src/components/StoreBadges.tsx`; links are in `prohayat.getStarted.stores`.
The hero road (`RouteDiagram.tsx`) is a static drawing.
`Journey.tsx` and `LitText.tsx` are the old scroll-jacking road and word-by-word
paragraph; they are no longer used and can be deleted.

## ProHayat 180 scenarios

The vehicle buttons, the phone and the dashboard are `src/components/ProHayatDemo.tsx`.
The scenarios are in `src/content/prohayat.ts` under `vehicles.scenarios`: one per
vehicle button, each with a question, options (exactly one `correct: true`), the
coaching text. They are real questions from the app, and the phone copies the app's
quiz screen. To add a vehicle, add a scenario there.

## Adding a new page

1. Create `src/content/<name>.ts` with the text.
2. Create `src/app/<address>/page.tsx`. Start it with `<PageHeader title="..." />` and export `metadata` with a `title` and `canonical`.
3. Add it to `navigation` in `src/content/site.ts` (this also adds it to the sitemap).

## Adding a video

Use `src/components/VideoBlock.tsx`. Files under about 50 MB go in `public/videos`
with a poster image in `public/images`. Host anything longer on YouTube or Vercel
Blob and pass `youtubeId` or the hosted URL as `src`. GitHub rejects files over 100 MB.

## Contact form

`src/app/contact-us/actions.ts` emails submissions through Resend. It needs the
`RESEND_API_KEY` environment variable (see `.env.example`). Without it the form
shows an error asking the visitor to call, WhatsApp or email instead.

## Commands

- `npm run dev`: local preview at http://localhost:3000
- `npm run build`: production build. Run this before pushing.
- `npm run lint`
