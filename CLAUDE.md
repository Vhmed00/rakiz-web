# Rakiz — Project Context for Claude

## What This Is

**Rakiz** (ركيز) is a bilingual (English/Arabic) marketing landing page for a digital agency targeting SMEs in Oman and the GCC. The business offers three core services: digital presence setup, operations automation/SaaS tooling, and a monthly SEO/content growth retainer.

The site is a single-page Next.js 14 app styled with Tailwind CSS. It is fully translated and RTL-aware — switching to Arabic flips the entire layout to RTL, swaps fonts, and re-renders all copy from a centralized translation file.

Contact: `hello@rakiz.om` · WhatsApp: `+968 7680 7632` · Location: Muscat, Oman

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + custom CSS design tokens |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter (EN), IBM Plex Mono (code), IBM Plex Sans Arabic (AR) |
| Deployment | Netlify (`@netlify/plugin-nextjs`) |

---

## File Structure

```
app/
  layout.tsx        — Root layout: metadata, font imports, html shell
  page.tsx          — Single page; composes all section components
  globals.css       — Design tokens (CSS vars), base reset, utility classes

components/
  Navbar.tsx        — Fixed top nav with scroll blur, language toggle, mobile menu
  Hero.tsx          — Hero section: headline, CTAs, stats strip
  BentoFeatures.tsx — Bento-grid feature showcase (lead capture, analytics, SEO, ops)
  Playground.tsx    — Interactive dashboard preview (device + theme toggle)
  CodeSwitcher.tsx  — Integration capability section with code visual
  Solutions.tsx     — Pricing cards (3 packages)
  Process.tsx       — 3-step "how it works" section
  Footer.tsx        — CTA footer + links + brand blurb
  Calculator.tsx    — ROI slider calculator (hours saved, revenue recovered)
  Problems.tsx      — (exists in components/ but not currently used in page.tsx)

lib/
  translations.ts   — All English + Arabic copy, typed via Translations interface
  LanguageContext.tsx — React context: lang state, setLang, t (translations), isAr, dir
```

---

## Bilingual Architecture

Everything lives in `lib/translations.ts`. The `Translations` interface enforces that both `en` and `ar` objects are always in sync.

`lib/LanguageContext.tsx` exposes a `useLanguage()` hook used in every component:

```ts
const { t, isAr, dir, lang, setLang } = useLanguage();
```

- `t` — typed translation object for the current language
- `isAr` — boolean shorthand for `lang === "ar"`
- `dir` — `"ltr"` or `"rtl"`, used to set `html[dir]` and Tailwind `rtl:` variants
- Language preference is persisted to `localStorage` under key `"rakiz-lang"`
- The `html` element's `lang` and `dir` attributes are updated reactively via `useEffect`

**RTL rules:**
- `globals.css` has `html[lang="ar"]` overrides for font-family, line-height, and letter-spacing
- Code blocks (`pre`, `code`, etc.) are always forced `direction: ltr`
- Arrow icons use `rtl:rotate-180` to flip direction in Arabic
- Tailwind `border-s` / `border-e` (logical properties) are used instead of `border-l` / `border-r` anywhere that needs to flip with RTL

---

## Design System

Defined in `app/globals.css` as CSS custom properties:

- **Neutral scale**: `--n-0` through `--n-950` (zinc-based)
- **Syntax colors**: `--syn-bg`, `--syn-comment`, `--syn-keyword`, etc. for dark code blocks
- **Utility classes**: `.card` (bordered, shadowed surface), `.badge` (pill tag), `.divider`
- Light mode only — no dark mode toggle on the site itself (dark mode exists only inside the Playground preview component)

---

## Packages / Pricing

| Package | Price | Type |
|---|---|---|
| Digital Foundation | OMR 99 | One-time |
| Operations & SaaS | OMR 199 | One-time |
| Growth Engine | OMR 59 | / month |

---

## What Has Been Built

- Full single-page landing site, production-ready
- Complete EN/AR bilingual copy for all 8 sections
- Animated Navbar with scroll-blur, language toggle, responsive mobile menu
- Hero with stats strip
- Bento feature grid with live chat mock, SEO keyword table, and metrics cards
- Interactive Playground (device size + light/dark theme toggle for dashboard preview)
- CodeSwitcher integration section
- ROI Calculator with a slider
- 3-card pricing section
- 3-step process section
- Footer with CTA, WhatsApp link, and navigation links
- Design token system in CSS
- Netlify deployment config

---

## Development

```bash
npm run dev     # start dev server at localhost:3000
npm run build   # production build
npm run lint    # ESLint
```

---

## Guidelines for Future Models

1. **Read before editing.** Most components are self-contained but all pull copy from `lib/translations.ts`. If you're changing visible text, change it there in both `en` and `ar` objects.

2. **Keep bilingual parity.** Every key in `en` must exist in `ar`. The `Translations` interface enforces this at compile time — TypeScript will catch missing keys.

3. **RTL hygiene.** Use Tailwind logical properties (`ms-`, `me-`, `ps-`, `pe-`, `border-s`, `border-e`) instead of physical ones (`ml-`, `mr-`, `pl-`, `pr-`, `border-l`, `border-r`) anywhere the layout needs to mirror in Arabic. Use `rtl:` variants for directional icons/transforms.

4. **Design tokens first.** Prefer `--n-*` CSS variables and the `.card` / `.badge` utility classes over raw color values. This keeps the palette consistent.

5. **No dark mode on the page.** The dark/light toggle only affects the Playground section's dashboard mockup preview — it is not a site-wide theme switch.

6. **`Problems.tsx` is unused.** The component exists but is not imported in `app/page.tsx`. It was likely an earlier section that was cut. Don't delete it without confirming with the owner.

7. **Animations.** All entry animations use Framer Motion with the pattern `initial/animate/transition`. Delays are staggered per element within each section. Keep this pattern consistent if adding new animated elements.

8. **Contact.** The CTA buttons link to `#contact` (anchored in the footer section). The WhatsApp link uses a pre-filled Arabic greeting message. Do not change the phone number without owner confirmation.
