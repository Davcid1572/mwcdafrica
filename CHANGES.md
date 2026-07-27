# Changes made to this project

A running note of what was fixed/added on top of the original build, so it's
clear what changed and why. Structure and conventions (data files in
`lib/data`, function components, Tailwind utility classes inline) were kept
as-is throughout.

## Bugs fixed

- **Build reliability**: fonts were loaded via `next/font/google`, which
  fetches from Google at build time and fails hard on networks/CI that block
  that request (this is almost certainly the "fails on some accounts" issue).
  Switched to self-hosted `@fontsource/spectral` and `@fontsource/hanken-grotesk`
  packages, imported once in `app/layout.tsx`. No more network dependency at
  build time.
- **`--primary` color token** was set to near-black (`oklch(0.205 0 0)`)
  instead of the brand green, while `--primary-hover` was correctly green.
  Primary buttons (Donate, form submits) were rendering off-brand and only
  flashing green on hover.
- **`--font-sans: var(--font-sans)`** in `globals.css` was self-referential
  (should have pointed at the Hanken Grotesk variable), which silently broke
  the site's default body font.
- **Dark mode** used the default shadcn grayscale palette instead of a
  brand-derived one. Rebuilt off the actual ink/green palette.
- **Logo mark** (`public/brand/logo-mark.png`) had ~70% transparent padding
  baked into the file, so at header size it rendered tiny/"zoomed out".
  Replaced with an inline SVG mark (also used in the footer and the mission
  marquee, which had the same issue).
- **Favicon** was the default Next.js icon. Generated a real favicon/app icon
  set from the brand mark.
- **CTA band** (`Join.tsx`) had regressed into a plain, uncarded section with
  the wrong heading copy. Rebuilt to match the source design: dark green
  rounded card, decorative circles, "Get involved" kicker, three-button row.
- **Mission marquee** was hidden below the `md` breakpoint entirely, and its
  small logo badge used the same background color as the section behind it
  (invisible). Now shows on all breakpoints with a visible mark.
- Several **hover-color bugs** where a button's base and hover state resolved
  to the same color (no visible feedback): `CreativeConnectBlock` "Learn
  more", `WhatWeDo` explore card, `MicaBlock`.
- A handful of **dead code**: a commented-out breadcrumb `<Link>` in
  `CCHero`/`WorkHero`, an empty label `<span>` in `AboutHero`, an unused
  `MissionMarquee` import and a large commented-out block in the home
  `Impact` section.
- **`PhoneMockup`** had its screenshot layer commented out, so it only ever
  rendered an empty frame.
- Two different sets of hardcoded impact numbers on the home page and
  `/impact` (they disagreed with each other). Centralized into
  `lib/data/impact.ts` so both stay in sync and it's a single place to edit.
  This does not yet track live usage automatically, that needs a real
  backend and is a bigger follow-up (noted below).

## Missing/broken images

Most of `/images/work/*`, `/images/about/*`, `/images/impact/*`,
`/images/resources/*`, `/images/creative-connect/*` and `/images/mica/*`
were referenced in code but did not exist on disk (404s). Wired in the
provided photography where a matching asset existed; where nothing exists
yet (contact map, blog covers, two Creative Connect gallery tiles, MICA
onboarding screen assets beyond what's reused from the magician cards) a
`PlaceholderPhoto` component renders a labeled placeholder instead of a
broken image, so it's easy to grep for what's still needed.

## Added

- `components/ui/Tap.tsx` -- scale-on-press + haptic vibration wrapper,
  applied to the header nav, mobile drawer, footer socials, hero and CTA
  buttons, all form submit buttons, program/resource/blog list items.
- `lib/haptics.ts` -- thin wrapper around `navigator.vibrate`.
- Floating, animated theme toggle (`ThemeToggle.tsx`) fixed to the corner of
  the viewport with an animated sun/moon icon swap, instead of a static
  emoji button in the header row.
- `components/ui/Photo.tsx` -- standard content image with an in/out-of-focus
  hover treatment (starts very slightly blurred and desaturated, settles on
  hover/focus).
- `components/ui/MagicianCards.tsx` -- fans a set of MICA screenshots out
  from a shared anchor point, each straightening and lifting to the front on
  hover/tap. Used on the home page (4 screens) and Work → Digital Innovation
  (3 screens).
- `app/not-found.tsx` -- branded 404 page.

## Still open (flagged, not done in this pass)

- **Payment gateway** (Paystack primary, Flutterwave/Stripe as alternates),
  styled to feel in-house rather than a redirect to a third-party page.
- **Live impact counter**: auto-incrementing counters need a real persistence
  layer (a KV store or database), which is the same piece of infrastructure
  the payment gateway needs for recording donations, so these are best done
  together in the next pass.

## Round 2

- **Paystack is now wired in and functional.** `DonationForm` opens
  Paystack's inline popup (an overlay on the page, not a redirect), a
  server-side `src/app/api/paystack/verify/route.ts` confirms the
  transaction with the secret key, and `/donate/success` shows a real
  receipt. Add `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` and `PAYSTACK_SECRET_KEY`
  to `.env.local` (see `.env.example`) and it works. Currency defaults to
  NGN via `NEXT_PUBLIC_PAYSTACK_CURRENCY`.
- Impact counter left as-is, no further changes.
- Removed the blur/desaturate hover effect on photos (`.photo-focus`),
  replaced with a plain gentle zoom (`.photo-zoom`), no blur.
- **`PhoneMockup`**: `phone-frame.png` turned out to be a fully opaque
  silhouette (not a transparent bezel), so the frame is now rendered behind
  the screenshot instead of on top of it, where it was blacking everything
  out.
- **`MagicianCards`**: the container was a fixed near-square box regardless
  of how many cards it held or how wide they were rendered, leaving dead
  space above the fan and making it sit visibly lower than text next to it.
  Height is now computed from the actual card aspect ratio and count.
- Reworked the home page's initiative section: removed the old two-card
  `FlagshipInitiatives` block, added `CreativeConnectShowcase` (bold image
  left, heading/copy/CTA right) to match `MicaShowcase`'s layout.
- Fixed image assignments: home page's Creative Empowerment tile was
  reusing the Work page's photo instead of its own; Creative Connect's hero
  and home teaser now use the correct provided photo.
- MICA page hero now shows the four-screen card fan (enlarged) instead of a
  single static image.
- Creative Connect page's "Join" actions now link out to
  creativeconnect.africa (external) instead of a local fake form.
- Restored the breadcrumb nav in `PageBanner` (`Home / X`), it was
  commented out, affecting every interior page that uses it.
- Bumped the home, Work, and About hero headings up to match each other,
  the home hero previously capped smaller than the interior page heroes,
  which read as "zoomed out" next to everything else.
- Reduced several `min-w-[300px]`/`min-w-[320px]` flex-child widths down
  (mostly ~250-260px) across contact, donate, work, mica, and initiatives
  sections, they were wide enough to force horizontal scroll on the
  narrowest phones (~320px viewports).

## Round 3

- **Initiatives page image focus**: `Photo` already supported an
  `objectPosition` prop, just wasn't being passed. Both the Creative
  Connect and MICA blocks on `/initiatives` now use `objectPosition="30%
  50%"` (horizontal 30% = slightly left of center, vertical 50% = centered
  top-to-bottom). To adjust further: `0%` is fully left, `50%` is centered,
  `100%` is fully right, same scale for the vertical value. Both live in
  `src/components/sections/initiatives/CreativeConnectBlock.tsx` and
  `MicaBlock.tsx`.
- **Impact reports**: the org incorporated in 2026, so a 2024/2025 report
  didn't make sense. Replaced with a single "2026 Annual Impact Report /
  Coming soon" state (not a dead link) plus a short line explaining why,
  instead of pretending a PDF exists.
- **Blog**: every post now leads to a real article page
  (`/blog/[slug]`), with genuine written copy for all four posts (the
  featured one plus three others), not just a title and a broken link.
- **Partners page**: since there are no partners yet, the 8-box empty grid
  is now a single "we're newly incorporated, open to partnership" panel
  with a CTA into `/contact`, instead of implying partners that don't
  exist.
- **Missing images**: replaced every remaining `PlaceholderPhoto` with a
  real `Photo` pointed at the exact path it needs, and created the
  matching folders. See the message below this file for the full list of
  filenames to drop in.

