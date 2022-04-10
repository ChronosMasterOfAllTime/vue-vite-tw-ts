# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Getting started

- Install [node LTS](https://nodejs.org/en/download/)
- Install [yarn](https://yarnpkg.com/getting-started/install)
- run `yarn` in the root dir to install all dependencies

## Commands

- `yarn dev`
  - Starts the local dev Vite server
- `yarn build`
  - Generates a production build for deployment
- `yarn serve`
  - Serves up the static content generated via `yarn build`
- `yarn test`
  - Runs all unit tests in `test/unit` with watch mode enabled (uses **vitest**)
- `yarn coverage`
  - Runs all unit tests in `test/unit` with coverage reports
- `yarn test:e2e`
  - Starts a local dev server and starts the Cypress interactive test runner
- `yarn test:e2e:headless`
  - Starts a local dev server and starts the Cypress headless test runner
- `yarn lint`
  - Run linter checks (configurable via `.eslintrc`)
- `yarn format`
  - Run Prettier formatting for all files
