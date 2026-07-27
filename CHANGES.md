# Changes made to this project

A running note of what was fixed or added on top of the original build, so it
stays clear what changed and why.

The project style was kept intact throughout: data files live in `lib/data`,
components are plain function components, and styling stays in Tailwind utility
classes unless the project already had a better local pattern.

## Latest

- **Blog article 404 fixed**: the project is on Next `16.2.10`, where App
  Router `params` are async. The `/blog/[slug]` page was reading
  `params.slug` synchronously, so the post lookup could miss and fall into the
  branded 404 page. `generateMetadata` and the blog article page now await
  `params` before reading the slug.
- Removed an unused `use` import from the main blog page.
- Verified with `npm.cmd run build`. The build now lists all four article
  pages as generated:
  `/blog/why-community-is-underrated`,
  `/blog/building-local-leadership`,
  `/blog/art-and-grief`, and
  `/blog/designing-mica-low-bandwidth`.
- `npm.cmd run lint` still fails on two older React Compiler lint issues in
  `ThemeToggle.tsx` and `Header.tsx`; those are unrelated to the blog 404.

## Build and foundations

- **Build reliability**: fonts were loaded through `next/font/google`, which
  fetches from Google at build time and can fail on networks or CI environments
  that block that request. Switched to self-hosted
  `@fontsource/spectral` and `@fontsource/hanken-grotesk`, imported once in
  `app/layout.tsx`, so the build no longer depends on that external request.
- **Paystack donations** are wired in and functional. `DonationForm` opens
  Paystack's inline popup on the page, `src/app/api/paystack/verify/route.ts`
  confirms transactions server-side, and `/donate/success` shows a receipt.
  Add `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` and `PAYSTACK_SECRET_KEY` to
  `.env.local` (see `.env.example`). Currency defaults to NGN through
  `NEXT_PUBLIC_PAYSTACK_CURRENCY`.
- Impact numbers on the home page and `/impact` were hardcoded in two places
  and disagreed with each other. They now come from `lib/data/impact.ts`, so
  there is one place to edit them.

## Brand and visual polish

- **Primary color token fixed**: `--primary` was near-black while
  `--primary-hover` was the correct brand green. Primary buttons now render
  in the expected brand color.
- **Font token fixed**: `--font-sans: var(--font-sans)` in `globals.css` was
  self-referential, which silently broke the default body font. It now points
  at the Hanken Grotesk variable.
- **Dark mode** was still using the default shadcn grayscale palette. It was
  rebuilt around the actual ink and green brand palette.
- **Logo mark** had heavy transparent padding baked into
  `public/brand/logo-mark.png`, so it looked tiny at header size. Replaced it
  with an inline SVG mark, also used in the footer and mission marquee.
- **Favicon/app icons** were replaced with a real set generated from the brand
  mark.
- Several button hover states had no visible feedback because base and hover
  colors resolved to the same value. Fixed the Creative Connect "Learn more"
  button, the What We Do explore card, and the MICA block.
- Removed the blur/desaturate hover effect on photos and replaced it with a
  plain gentle zoom.

## Components and interactions

- Added `components/ui/Tap.tsx`, a scale-on-press wrapper with a short haptic
  pulse on devices that support vibration. It is used across nav links, drawer
  items, footer socials, hero CTAs, form submit buttons, and program/resource/
  blog list items.
- Added `lib/haptics.ts`, a small wrapper around `navigator.vibrate`.
- Added a floating animated theme toggle with sun/moon icon swapping, instead
  of the old static emoji-style header button.
- Added `components/ui/Photo.tsx` as the shared content image wrapper.
- Added `components/ui/MagicianCards.tsx`, used for the MICA screen fan on the
  home page and the Work page.
- `PhoneMockup` had its screenshot layer commented out, so it rendered as an
  empty frame. The screenshot layer is back.
- The phone frame asset was fully opaque rather than a transparent bezel, so
  it now renders behind the screenshot instead of covering it.
- `MagicianCards` now computes its height from the rendered card aspect ratio
  and card count, removing the dead space that made the fan sit too low.

## Pages and content

- **Blog**: every post now leads to a real article page at `/blog/[slug]`,
  with written copy for all four posts instead of placeholder links.
- **404 page**: added `app/not-found.tsx`, a branded fallback page.
- **CTA band** on the home page was rebuilt to match the source design:
  dark green rounded card, decorative circles, "Get involved" kicker, and a
  three-button row.
- **Mission marquee** now appears on all breakpoints. Its small logo badge also
  has enough contrast to be visible.
- Home page initiatives were reworked: the old two-card `FlagshipInitiatives`
  block was replaced with `CreativeConnectShowcase`, matching the layout style
  of `MicaShowcase`.
- MICA page hero now shows the larger four-screen card fan instead of one
  static image.
- Creative Connect page "Join" actions now link to `creativeconnect.africa`
  instead of a local placeholder form.
- `PageBanner` breadcrumb navigation (`Home / X`) was restored for interior
  pages.
- Home, Work, and About hero heading sizes were brought into better alignment.
- Several wide `min-w-[300px]` and `min-w-[320px]` flex children were reduced
  across contact, donate, work, MICA, and initiatives sections to avoid
  horizontal scrolling on narrow phones.
- **Impact reports** now show a single "2026 Annual Impact Report / Coming
  soon" state. Since the organization incorporated in 2026, older reports
  would have implied documents that do not exist.
- **Partners page** now shows one honest "newly incorporated, open to
  partnership" panel with a CTA to `/contact`, instead of an empty partner
  grid that implied existing partners.
- **Initiatives page image focus**: both Creative Connect and MICA blocks now
  pass `objectPosition="30% 50%"` so the images crop from a better focal point.

## Images and assets

- Most of the referenced images under `/images/work`, `/images/about`,
  `/images/impact`, `/images/resources`, `/images/creative-connect`, and
  `/images/mica` did not exist on disk and were causing image 404s. Matching
  provided photography was wired in where available.
- Where images were not available yet, `PlaceholderPhoto` was introduced so the
  page showed a labeled placeholder instead of a broken image.
- Later pass: every remaining `PlaceholderPhoto` was replaced with a real
  `Photo`, with matching folders created for the required paths.
- Fixed image assignments where the home page Creative Empowerment tile reused
  the Work page photo, and where Creative Connect hero/home teaser images were
  pointing at the wrong asset.

## Cleanup

- Removed stale commented-out code: breadcrumb links in `CCHero` and
  `WorkHero`, an empty label span in `AboutHero`, an unused `MissionMarquee`
  import, and a large old block in the home `Impact` section.

## Still open

- **Live impact counter**: auto-incrementing counters need a real persistence
  layer, like a KV store or database. The visual numbers are centralized now,
  but they are not live yet.
- **Lint cleanup**: `ThemeToggle.tsx` and `Header.tsx` still trigger
  `react-hooks/set-state-in-effect` under the current React Compiler lint
  rules.
