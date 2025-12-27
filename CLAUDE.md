# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based web application featuring a collection of calculators with full internationalization (i18n) support. The project is designed to replicate calculators from calculator.net, starting with the BMI Calculator as the MVP.

**Technology Stack:**
- Astro 5.x with TypeScript (strict mode)
- astro-i18next for internationalization
- Pure CSS (no framework)
- Client-side interactivity via Astro scripts

## Development Commands

```bash
npm run dev      # Start development server on http://localhost:4321
npm run build    # Build for production (runs type check + build)
npm run preview  # Preview production build
npm run astro    # Run Astro CLI commands
```

## Code Architecture

### Directory Structure

```
src/
├── components/
│   └── calculators/          # Calculator components
│       └── BMICalculator.astro
├── layouts/
│   └── BaseLayout.astro      # Main layout with SEO, nav, footer
├── pages/
│   ├── index.astro           # Spanish homepage
│   ├── calculadoras/
│   │   ├── index.astro       # Spanish calculator listing
│   │   └── imc.astro         # Spanish BMI calculator page
│   └── en/                   # English routes
│       ├── index.astro
│       └── calculators/
│           ├── index.astro
│           └── bmi.astro
├── utils/
│   └── calculators/
│       └── bmi.ts            # BMI calculation logic (pure functions)
└── env.d.ts

public/
└── locales/                  # i18n translation files
    ├── es/
    │   ├── common.json
    │   └── calculators.json
    └── en/
        ├── common.json
        └── calculators.json
```

### Path Aliases

TypeScript path aliases are configured in `tsconfig.json`:
- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@utils/*` → `src/utils/*`
- `@i18n/*` → `src/i18n/*`

## Internationalization

**Library:** astro-i18next

**Supported Languages:**
- Spanish (es) - Default language
- English (en)

**Configuration:** `astro-i18next.config.mjs`

**Translation Files Location:** `public/locales/{lang}/*.json`

**URL Structure:**
- Spanish: `/` (root), `/calculadoras/imc`
- English: `/en`, `/en/calculators/bmi`

**Route Mapping:**
- The `routes` object in `astro-i18next.config.mjs` maps Spanish URLs to English equivalents
- Spanish is the default locale (`showDefaultLocale: false`)

**Using Translations:**
```astro
---
import { t, changeLanguage } from 'i18next';
changeLanguage('es'); // Set language at page level
---
<h1>{t('calculators:bmi.title')}</h1>
```

**Translation Namespaces:**
- `common` - Site-wide strings (nav, buttons, units)
- `calculators` - Calculator-specific content

## Calculator Implementation Pattern

Each calculator follows this structure:

1. **Calculation Logic** (`src/utils/calculators/*.ts`):
   - Pure TypeScript functions
   - Type-safe interfaces for inputs/outputs
   - Unit conversion utilities
   - No UI dependencies

2. **Calculator Component** (`src/components/calculators/*.astro`):
   - Form UI with i18n labels
   - Client-side script for interactivity
   - Imports calculation functions from utils
   - Handles both metric and imperial units
   - Displays results dynamically

3. **Page** (`src/pages/{lang}/calculators/*.astro`):
   - Uses BaseLayout for SEO and structure
   - Sets language via `changeLanguage()`
   - Includes calculator component
   - Provides context/help text

## SEO Implementation

**BaseLayout.astro** handles all SEO:
- Meta tags (title, description)
- Canonical URLs
- hreflang tags (via HeadHrefLangs component)
- Open Graph tags
- Twitter Card tags

Each page sets:
```astro
<BaseLayout
  title={t('calculators:bmi.title') + ' - ' + t('site.title')}
  description={t('calculators:bmi.metaDescription')}
  lang="es"
>
```

## Adding New Calculators

1. Create calculation logic in `src/utils/calculators/{name}.ts`
2. Create component in `src/components/calculators/{Name}Calculator.astro`
3. Add translations to `public/locales/{lang}/calculators.json`
4. Create pages in `src/pages/calculadoras/{name}.astro` and `src/pages/en/calculators/{name}.astro`
5. Add route mapping to `astro-i18next.config.mjs`
6. Update calculator listings in index pages

## Current Calculators

- **BMI Calculator** (`/calculadoras/imc`, `/en/calculators/bmi`)
  - Supports metric and imperial units
  - Calculates: BMI, BMI Prime, Ponderal Index
  - Provides category and healthy weight range

## Future Expansion

The project is designed to scale to ~175-180 calculators from calculator.net across categories:
- Health & Fitness (~30 calculators)
- Financial (~50 calculators)
- Math (~40 calculators)
- Other (~50 calculators)
