# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start the dev server (Turbopack). Default port is 3000; if another local project already holds it, Next.js auto-selects the next free port (e.g. 3001) and prints the actual URL in the terminal — check the log rather than assuming 3000.
- `npm run build` — production build.
- `npm run start` — serve the production build.
- `npm run lint` — ESLint (flat config: `eslint-config-next` core-web-vitals + typescript rules).
- `npx tsc --noEmit` — type-check; there is no dedicated `typecheck` script.
- No test runner is configured in this project.

## Architecture

This is a single-page Next.js App Router marketing site for Neexia (an AI agency), replicated from a Claude Design mock ("Landing page para Neexia", fetched via the design MCP). There is no routing beyond `/` — everything lives under `app/`.

- `app/page.tsx` composes the landing page by stacking section components in order: `Nav`, `Hero`, `Logos`, `Servicios`, `Proceso`, `Casos`, `CtaFinal`, `Footer` (all in `app/components/`).
- Copy/content is centralized in `app/lib/landing-data.ts` as typed arrays (`services`, `steps`, `cases`, `logos`). Edit content there, not inside the section components.
- `app/components/ServiceIcon.tsx` renders the small geometric marks (circle/square/triangle/diamond/ring) used on the Servicios cards, switched on the `Service.icon` field from `landing-data.ts`.
- Styling is Tailwind CSS v4 using the CSS-first config in `app/globals.css` (`@theme inline` block) — there is no `tailwind.config.js`. Brand colors are exposed as `--color-brand` / `--color-brand-dark` and consumed via `bg-brand`, `text-brand`, `hover:bg-brand-dark`, etc.
- In-page nav/CTA links point at section anchors (`#servicios`, `#proceso`, `#casos`, `#contacto`) — keep these `id`s in sync with `Nav.tsx` and the CTA links if sections are renamed or reordered.
- Placeholder content still needs real assets: the hero demo screenshot, client logos, case-study photos, phone number, and social links (LinkedIn/Instagram) in `Footer.tsx` are all stand-ins.
