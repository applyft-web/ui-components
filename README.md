# @applyft-web/ui-components

A library of base CSS rules and reusable React UI components with theming via `styled-components` and built‑in LTR/RTL support.

- Repository: https://github.com/applyft-web/ui-components
- StoryBook: https://applyft-web.github.io/ui-components/
- Package: `@applyft-web/ui-components` (GitHub Packages)
- Author: Aliaksei Drabushau
- License: ISC

### Features
- Ready‑to‑use UI components: buttons, loaders, progress bars, inputs, layouts, icons, sliders, and more
- Shared theme presets for projects: `geozilla`, `family-locator`, `familo`, `brainbloom`
- Global theme provider with RTL support
- Compatible with `styled-components@^6`

---

### Installation

This package is published to GitHub Packages under the `applyft-web` scope. Add the registry to your `.npmrc`:

```
@applyft-web:registry=https://npm.pkg.github.com
```

Then install:

```
npm install @applyft-web/ui-components styled-components react
```

Peer dependencies:
- `react` >= 17
- `styled-components` >= 6 < 7

---

### Quick start

```tsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalThemeProvider } from '@applyft-web/ui-components'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <GlobalThemeProvider
    projectTheme="geozilla"  // aliases: geozilla | gz | family-locator | fl | familo | fo | brainbloom | bb
    isRtl={false}
    enableRTL={false}
    customGlobalStyles={"body { background-color: #fff; }"}
    customTheme={{ primaryColor: '#3b82f6' }}
  >
    <App />
  </GlobalThemeProvider>
)
```

Import components:

```tsx
import { Loader, ProgressBar, Icons } from '@applyft-web/ui-components'
```

---

### Theming and RTL

Use `GlobalThemeProvider` to connect the theme and global styles.

Key props:

- `projectTheme: string | Theme`
  - String aliases: `geozilla | gz | family-locator | fl | familo | fo | brainbloom | bb`
  - You can pass a full `Theme` object directly
- `customGlobalStyles?: string` — extra CSS for global styles
- `customTheme?: Record<string, string>` — override arbitrary theme tokens
- `isRtl?: boolean` — enable right‑to‑left direction inside theme context
- `enableRTL?: boolean` — allows to set `dir="rtl"` on `<html>` element (temporary, to prevent unferified RTL styles)

Within the provider, `styled-components` theme includes `isRtl`, `enableRTL`, and `custom`.

---

### Available components

Import from the package root:

- Base
  - `Loader`
  - `ProgressBar`
  - `CircularProgress`
  - `Alert`
- Forms & inputs
  - `SignupInput`
- Lists & options
  - `OptionsList`
  - `OptionsItem`
- Buttons
  - `Buttons/ContinueButton`
  - `Buttons/MarketsButton`
  - `Buttons/PaypalButton`
- Layouts
  - `Layouts/MainLayout`
- Media & animations
  - `ReviewsSlider`
  - `CreatingAnimation`
- Icons
  - `Icons` (icon set and helpers)

Example:

```tsx
import { OptionsList, OptionsItem } from '@applyft-web/ui-components'

export const Example = () => (
  <OptionsList>
    <OptionsItem multiChoice>
      First option
    </OptionsItem>
    <OptionsItem multiChoice>
      Second option
    </OptionsItem>
  </OptionsList>
)
```

---

### Storybook

Run locally:

```
npm run storybook
```

Build static Storybook:

```
npm run build-storybook
```

Optionally publish to GitHub Pages:

```
npm run deploy-storybook
```

---

### Builds

Distributed artifacts:
- ESM: `dist/esm/index.js`
- CJS: `dist/cjs/index.js`
- Types: `dist/index.d.ts`

Build the library:

```
npm run build
```

---

### Scripts

- `build` — bundle with Rollup
- `storybook` — run Storybook in dev mode
- `build-storybook` — build static Storybook
- `deploy-storybook` — publish Storybook to GitHub Pages (`storybook-static`)
- `lint` — ESLint
- `type-check` — TypeScript type checking
- `release` — main release via `semantic-release`
- `pre-release` — prerelease via `semantic-release`

---

### Semantic Release

The project uses `semantic-release` with two configs:
- `release.main.config.js` — main releases
- `release.dev.config.js` — prereleases

Follow conventional commits to automate versioning and changelog.

---

### Requirements

- Node.js (LTS recommended)
- React >= 17
- styled-components >= 6 < 7

---

### License

ISC © Aliaksei Drabushau

---

### Thanks

Thanks to all project contributors.
