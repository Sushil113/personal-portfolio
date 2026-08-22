---
name: Personal Portfolio
colors:
  primary: "#5b8c5a"
  accent: "#e8a33d"
  surface: "#12151a"
  surface-raised: "#1a1e26"
  on-surface: "#e4e6eb"
  on-surface-muted: "#8b93a3"
  border: "#262b35"
  error: "#e0654f"
typography:
  display:
    fontFamily: "Space Grotesk"
    fontWeight: 600
  body:
    fontFamily: "Inter"
    fontSize: 16px
    fontWeight: 400
  mono:
    fontFamily: "JetBrains Mono"
    fontSize: 14px
rounded:
  sm: 4px
  md: 6px
spacing:
  scale: [4, 8, 12, 16, 24, 32, 48, 64, 96]
---

# Design System —Personal Portfolio

## Overview
A portfolio for a backend developer (Laravel, PHP, MySQL, REST APIs) who also
ships React frontends. The design should read like something built by someone
who thinks in systems, data, and contracts — not a generic "creative dev"
template. Calm, structured, slightly technical. Not a SaaS dashboard, not a
designer's flashy showcase.

## Signature element
Section headers are styled like REST endpoint definitions —
`GET /experience`, `GET /skills`, `GET /education` — set in the mono
typeface, with a small colored HTTP-method badge. This is the one
memorable, on-brand detail: it's specific to a backend developer's actual
daily vocabulary, not decoration borrowed from elsewhere. Use it once per
section, nowhere else — don't let the API motif spread into buttons, cards,
or body copy, or it stops being a signature and becomes a gimmick.

## Colors
- **Primary — Sage Green** (#5b8c5a): active nav tab, primary CTA, link
  hover. Muted and desaturated on purpose — not a SaaS blue, not a neon
  accent. Reads calm and deliberate rather than "trying to look modern."
- **Accent — Amber** (#e8a33d): used sparingly for the HTTP-method badges
  and one highlight per view max. Never pair primary and accent in the same
  element.
- **Surface** (#12151a): page background. Near-black but warm, not pure
  navy or pure gray.
- **Surface Raised** (#1a1e26): cards, panels — one step up from base, no
  drop shadows, distinguished by fill + border only.
- **On-surface** (#e4e6eb): primary text.
- **On-surface Muted** (#8b93a3): secondary text, timestamps, labels.
- **Border** (#262b35): 1px hairlines between sections, card outlines.
- **Error** (#e0654f): form validation only. Not used decoratively.

## Typography
- **Display** (Space Grotesk, 600): page title, name, section endpoint
  labels. Used sparingly — large sizes only, never for body text.
- **Body** (Inter, 400, 16px): all prose — bio, descriptions, experience
  copy. Line height 1.6 for readability at this density.
- **Mono** (JetBrains Mono, 14px): section headers (the endpoint motif),
  tech stack tags, dates, any literal data (company names in a list, skill
  labels). This is what makes the page feel like it was built by a backend
  developer rather than styled by a template.

Don't use Space Grotesk and JetBrains Mono in the same line — pick one per
element based on its job: display face for identity/headings, mono for
data/labels, Inter for everything meant to be read at length.

## Layout
- Spacing scale (px): 4, 8, 12, 16, 24, 32, 48, 64, 96 — no arbitrary
  values outside this scale.
- Single column on mobile, max content width ~720px on desktop — this is a
  reading-and-scanning experience, not a wide dashboard. Resist the urge to
  fill horizontal space with decorative panels.
- Generous vertical rhythm between sections (64–96px), tight rhythm within
  a section (12–16px) — density should feel intentional, not cramped.
- Tab navigation (About / Experience / Skills / Education) stays as
  understated text tabs with a 2px underline on the active state — no pill
  buttons, no background fill on hover.

## Components
- **Buttons**: sharp-ish corners (4px), border + transparent fill by
  default; primary action gets a solid sage fill. No gradients, no glow.
- **Cards**: bordered, not shadowed. Elevation communicated by border
  contrast and background shade, not box-shadow blur.
- **Tags/pills** (tech stack, skills): mono type, small, border-only,
  square-ish corners (4px) — deliberately not the rounded-full pill shape
  every skills-grid component defaults to.
- **Links**: underline on hover only, sage color shift — no color-shifting
  icons or animated underline sweeps.

## Motion
- Section content fades/slides in on tab change (150–200ms, ease-out) —
  this is the one animated moment, already present in the codebase via
  Framer Motion. Don't add more.
- No hover-scale on cards, no parallax, no scroll-triggered reveals beyond
  the existing tab transition. Motion should feel like state changing, not
  like decoration.

## Do's and Don'ts
- Do keep the endpoint-header motif to section titles only — one signature,
  used consistently, not repeated everywhere.
- Do use mono type for anything that is literally data (dates, stack
  names, company names) — it reinforces "backend-minded" without saying it.
- Don't use a hero with centered headline + subtext + two centered
  buttons — this page has four sections and no single "hero pitch" moment.
- Don't add gradient backgrounds, mesh blobs, or glassmorphism blur — the
  aesthetic is flat, bordered, and calm, not glassy.
- Don't use rounded-full pills for tags or buttons — corners stay close to
  square (4–6px) throughout.
- Don't introduce a second accent color. Sage does interactive states,
  amber does the endpoint badges. Nothing else gets color.
- Don't animate on scroll or on hover beyond the existing tab transition.
- Maintain 4.5:1 contrast minimum for all body text on surface backgrounds.

## Agent prompt reference
- Backgrounds: `#12151a` base / `#1a1e26` raised
- Text: `#e4e6eb` primary / `#8b93a3` muted
- Interactive: `#5b8c5a` (primary), `#e8a33d` (accent, sparing)
- Fonts: Space Grotesk (display) / Inter (body) / JetBrains Mono (data,
  section headers)
- Corners: 4–6px everywhere, no pills
- No shadows, no gradients, no blur — borders and fill contrast only