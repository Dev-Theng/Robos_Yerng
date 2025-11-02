## Purpose

This document gives concise, project-specific guidance for an AI coding agent (Copilot-style) to be productive in the Robos_Yerng repo.

Keep guidance short and concrete — point to exact files and examples. Avoid broad generic advice.

## Quick dev commands

- Install dependencies: `npm install`
- Run dev server: `npm run dev` (uses Vite)
- Build production: `npm run build`
- Preview production build: `npm run preview`

These scripts are defined in `package.json`.

## Big-picture architecture

- Framework: Vue 3 single-file components (SFC) + Vite bundler.
- Styling: Tailwind CSS is used and wired through the Vite plugin (`@tailwindcss/vite`) and the main stylesheet at `src/assets/style.css`.
- Entry point: `src/main.js` mounts the `App.vue` component.
- Component layout: `src/components/` contains page pieces (e.g. `Banner.vue`, `Header.vue`). Many components follow PascalCase filenames and are imported into `App.vue` (see `import banner from './components/Banner.vue'`).

Why this matters: edits to components should preserve SFC structure (template/script/style) and follow the established import/registration pattern in `App.vue`.

## Project-specific conventions & patterns

- Alias: `@` maps to `./src` (see `vite.config.js`). Prefer `@/components/...` when adding imports from other code.
- Component registration: components are imported as variables and placed in the `components` object. Example from `src/App.vue`:

  - `import banner from './components/Banner.vue'`
  - `components: { banner }`

  Note: the repo currently uses a lowercase registration name (`banner`) even though file is `Banner.vue`. Match the repo style when editing nearby files.

- Devtools: `vite-plugin-vue-devtools` is included in `vite.config.js`. Expect Vue Devtools to be available during local dev.

- Tailwind: Tailwind is applied via the Vite plugin; global styles live in `src/assets/style.css`. Keep utility-class usage consistent with existing files.

## Integration points & externals

- Vite + @vitejs/plugin-vue: standard SFC compilation and HMR.
- Tailwind/Vite plugin: runtime CSS transformations.
- No backend or API code is present in this repo — focus changes on client code only.

## Files to consult when making edits

- `vite.config.js` — alias and plugin list (vite-plugin-vue-devtools, tailwind plugin).
- `package.json` — scripts and engine field (Node ≥20 recommended).
- `src/main.js` — app mount and global css import.
- `src/App.vue`, `src/components/*` — component structure and registration examples.
- `src/assets/style.css` — global styles and Tailwind entry points.

## Safe edit rules for the agent

1. Preserve file formatting and SFC boundaries. Only make minimal edits required by the task.
2. When adding imports, prefer `@/` alias. If a change affects many files, update one file first and run the dev server to validate.
3. Keep component registration style consistent with surrounding code (see `App.vue`).
4. Don't change `package.json` engines or versions unless asked — node versions are explicit.

## Example tasks (how to act)

- Fix a missing template: open `src/components/Header.vue` (currently empty), add a small template and register if referenced.
- Add a component: create `src/components/MyWidget.vue`, import it with `import MyWidget from '@/components/MyWidget.vue'` and add it to `components` in `App.vue` or the parent.

## What not to assume

- There are no tests or test framework configured. Do not add heavy testing infra without confirmation.
- No backend endpoints or environment files are present in the repo — avoid adding server-side wiring.

## Where to ask for clarification

- If a change will touch build config, dependency versions, or add tests, request a review/confirmation before proceeding.

---

If anything here is unclear or you'd like more examples (e.g., a short checklist for editing a component, or a preferred component naming rule to enforce), tell me and I'll iterate.
