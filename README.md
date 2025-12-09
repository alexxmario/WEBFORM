# WebForm — Done-for-you website platform

Premium landing + intake experience built with Next.js 14, App Router, TypeScript, Tailwind, Framer Motion, shadcn-style primitives, and React Hook Form + Zod.

## Quickstart
1) Install dependencies: `npm install`  
2) Run dev server: `npm run dev` (http://localhost:3000)  
3) Run tests: `npm test` (vitest)  
4) Generate sitemap/robots: `npm run sitemap`

## Stack & choices
- Next.js 14 (App Router, RSC where sensible), TypeScript strict mode
- Tailwind CSS + custom theme tokens (dark mode by system via next-themes)
- shadcn/ui-style primitives (Radix) for Accordion, Dialog, Select, Tabs, Tooltip, Checkbox, etc.
- Framer Motion for reveals, hover lift, and hero preview morph
- React Hook Form + Zod for the Blueprint and waitlist forms (with localStorage autosave)
- next-seo + Metadata API, JSON-LD (Org/Product/FAQ), dynamic OG image at `/api/og`
- API stubs: `/api/blueprint` and `/api/waitlist` (in-memory)

## Project structure
```
app/
  (marketing)/            // Home, pricing, start, waitlist, legal, thank-you
  api/                    // og image, blueprint + waitlist endpoints
  robots.ts, sitemap.ts
components/               // UI primitives + feature components (hero, plans, timeline, forms)
lib/                      // SEO config, JSON-LD helpers, zod schemas, content generator, utils
styles/theme.css          // Theme tokens (colors, radius, noise)
tests/                    // Vitest unit tests for schemas + content generator
```

## Environment
Optional analytics hooks (cookie-less by default):
- `NEXT_PUBLIC_GA_ID` for Google Analytics 4
- `NEXT_PUBLIC_FATHOM_ID` for Fathom

## Notable features
- Hero intake prompt powers a live preview card (ReactBits-inspired animated card)
- Multi-step Website Blueprint (`/start`) with autosave, stepper, inline validation, and confirmation step
- Pricing comparison table + plan cards with hover lift
- JSON-LD for Organization, Product, FAQ; dynamic OG cover via `/api/og`
- Accessibility: semantic landmarks, skip link, focus states, high-contrast theme tokens, reduced-motion handling

## Deployment (Vercel)
- Works out of the box on Vercel.  
- Include `NEXT_PUBLIC_*` analytics env vars if needed.  
- `next-sitemap` config is ready; run `npm run sitemap` to emit `sitemap.xml` and `robots.txt` for static exports if desired.

## Scripts
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm start` — serve production build
- `npm run lint` — eslint
- `npm test` — vitest unit tests
- `npm run sitemap` — generate sitemap/robots via next-sitemap
