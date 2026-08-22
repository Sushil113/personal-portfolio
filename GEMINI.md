# GEMINI.md

Guidance for gemini when working in this repository.

## Project overview

Personal portfolio SPA for Sushil Ramtel, built with React 18 + Vite 5 + Tailwind CSS 3 + Framer Motion 11. Deployed to GitHub Pages via a custom domain (CNAME).

- `src/data/resumeData.js` — single source of truth for all content (name, experience, skills, education). Prefer editing data here over hardcoding text in components.
- `src/components/` — one component per section (Navbar, Hero, Experience, Skills, Education).
- `src/App.jsx` — tab routing and layout.
- Section components are lazy-loaded (`React.lazy` + `Suspense`) — keep this pattern when adding new sections.
- Vite config does manual vendor chunk splitting (`vendor-react`, `vendor-motion`, `vendor-icons`) — don't break this when adding new dependencies without reason.

## Commands

- `npm run dev` — start dev server (localhost:5173)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build

## Ground rules

- **No emojis.** Never use emojis in code, comments, commit messages, UI copy, or console output.
- **Don't over-engineer.** This is a small, static, single-page portfolio site. No state management libraries, no routing libraries, no backend, no unnecessary abstractions. Solve the problem in front of you, not a hypothetical future one.
- **Don't over-think simple requests.** If I ask for a small change (copy tweak, style tweak, small fix), make that exact change. Don't refactor unrelated code, don't restructure files, don't "improve" things I didn't ask about.
- **Match existing patterns.** Follow the conventions already in the codebase (component structure, Tailwind usage, naming) rather than introducing new patterns or libraries.
- **Keep it data-driven.** New content (text, links, skills, etc.) should go into `resumeData.js`, not be hardcoded inline in JSX, unless it's genuinely one-off/structural.
- **No new dependencies unless necessary.** Ask before adding a new npm package. Don't add UI kits, CSS-in-JS libraries, or state managers for a static site like this.
- **Keep bundle size in mind.** Respect the existing lazy-loading and chunk-splitting setup; don't add heavy libraries for small effects.
- **Preserve responsiveness and the dark/glassmorphism aesthetic** already established — don't introduce a different visual style without being asked.
- **Explain briefly, don't narrate excessively.** Short summary of what changed and why, not a full essay.
- **Ask before large-scale changes.** If a request implies touching many files or restructuring the project, confirm the approach first instead of doing it silently.
- **No browser verification.** Never use browser tools, headless browsers, or sandboxed Chrome to verify UI changes. The developer will manually test in their own browser. Verification should be limited to `npm run build` succeeding and code review.

## Style

- Functional components with hooks only (no class components).
- Tailwind utility classes for styling; avoid inline styles unless dynamic values require it.
- Keep components focused — one section/responsibility per file, consistent with current structure.