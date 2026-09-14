# ATHARVLIFTSs — Physique Coaching Site (PRD)

## Brand
- Coach: **Atharv** — wordmark **ATHARVLIFTSs** (final `s` smaller, cyan) with a
  dumbbell mark — @Atharvliftss — WhatsApp +91 95274 71066 — India
- Inquiry alerts to **Info@Atharvliftss.in**
- Colours: Charcoal #121212, Electric Cyan #00D2FF, Volt Green #CCFF00,
  Steel Grey #8B8D98, Off-White #F4F4F6
- Type: Bebas Neue (headings, uppercase) + Inter (body)
- Photography rule: all physique photos **black & white** (`.graded`),
  **food/nutrition photos stay in colour**

## Architecture
- React 19 + framer-motion + lenis + Tailwind; FastAPI + MongoDB (motor)
- All backend routes under `/api`; every piece of content and every image URL
  lives in `/app/frontend/src/data/site.js`
- Resend owner-notification in `server.py::_notify_owner` — fire-and-forget,
  no-ops safely while `RESEND_API_KEY` is unset

## Live pages (6)
Home, About, Programs, Nutrition, Coaching & Pricing, Contact.
**Transformations is hidden** — the page file remains at
`src/pages/Transformations.jsx`, unrouted and removed from NAV, ready to switch
back on when real client before/after photos exist.

## Implemented
- Signature hero: Atharv's photo rendered as a displaced gritty stone cast via
  SVG filters, eroded away bottom-up by a turbulence mask tied to scroll
- Varied per-section motion: masked line reveals, clip-path wipes, timeline
  slide-ins, staggered grids, count-up stats, slow marquee
- Drag programme rail, drag testimonial carousel (text reviews kept),
  magnetic CTAs, soft page transitions, floating WhatsApp CTA
- Instagram 6-tile link-out grid using the newest photos
- Inquiry form → MongoDB (`POST /api/inquiries`) + owner email (pending key)
- Three testing-agent iterations, all green (backend 5/5, all frontend flows,
  desktop + mobile)

## Known placeholders / not real data
Testimonials, 120+ clients, 340 programmes, and the ₹4,500 / ₹9,800 / ₹24,000
prices are marketing assumptions awaiting Atharv's real numbers.

## Backlog
P0 — `RESEND_API_KEY`; confirm real prices, stats and client quotes.
P1 — Cashfree checkout (after deployment, keys pending); live Instagram Graph
feed; private inquiry inbox page; restore Transformations with client photos.
P2 — SEO metadata + OG image, analytics, spam throttle on the inquiry endpoint.
