# Repository Guidelines

## Project Structure & Module Organization

- `app/`: Next.js App Router routes (pages) and UI.
  - Shared components: `app/components/`
  - Page-scoped components: `app/**/components/`
  - Content/data: `app/data/`
  - Localized copy: `app/i18n/` (`en`, `de`, `nl`) via `getCopy()`
- `public/`: Static assets served from `/` (see `public/assets/`).
- Root config: `next.config.ts`, `eslint.config.mjs`, `tsconfig.json`, `Dockerfile`, `compose.yaml`.

## Build, Test, and Development Commands

Use Node 20+ and npm (the repo commits `package-lock.json`).

- Install deps: `npm ci`
- Run locally (dev): `npm run dev` (http://localhost:3000)
- Production build: `npm run build`
- Run production locally: `npm run start` (requires a prior `npm run build`)
- Lint: `npm run lint`

Docker (production image + standalone output): `docker compose up --build` (serves on `:3000`).

## Coding Style & Naming Conventions

- TypeScript is strict (`tsconfig.json`); prefer `*.ts`/`*.tsx` in `app/`.
- Match existing formatting: 2-space indent, double quotes, semicolons.
- Components/files: `PascalCase.tsx`; route segments: kebab-case folders (e.g. `app/our-team/`).
- Styling uses Tailwind v4 (`app/globals.css` imports `tailwindcss`); keep class lists readable and consistent.

## Testing Guidelines

No dedicated test runner is configured yet. For changes with non-trivial logic, add focused tests when introducing a test framework; at minimum, validate with `npm run lint` and `npm run build`.

## Commit & Pull Request Guidelines

- Commits in this repo are short, descriptive subjects (no strict Conventional Commits); keep them imperative and scoped (e.g. `seo: update metadata`, `services: add section`).
- PRs should include: a brief what/why summary, screenshots for UI changes, and notes if locale pages or `app/i18n/*` copy were updated. Ensure `npm run lint` and `npm run build` pass before requesting review.

