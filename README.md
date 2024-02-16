# `Isekai Comics`

This is the repository for isekai blog.

### Apps and Packages

- `backend-blog`: a strapi [vite](https://vitejs.dev) ts app
- `blog`: Astro [vite](https://vitejs.dev) ts app
- `ui`: a stub component & utility library shared by both `web` and `docs` applications
- `eslint-config-custom`: shared `eslint` configurations
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Create worspace

turbo gen workspace --type {package | app} --name {string}

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
