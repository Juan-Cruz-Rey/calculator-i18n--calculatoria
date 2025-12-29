# URL Localization Rules

**IMPORTANT: This is a strict rule that MUST be followed at all times.**

## Rule: All URLs Must Be Fully Localized

All calculator URLs in this project MUST use translated paths for each supported language. URLs should NOT be standardized in English across all languages.

### ✅ Correct Implementation

Each language must have its own translated URL structure:

```
🇪🇸 Spanish:    /es/calculadoras/imc/
🇬🇧 English:    /calculators/bmi/
🇧🇷 Portuguese: /pt/calculadoras/bmi/
🇫🇷 French:     /fr/calculatrices/bmi/
🇮🇳 Hindi:      /hi/calculators/bmi/
🇩🇪 German:     /de/rechner/bmi/
🇮🇹 Italian:    /it/calcolatrici/bmi/
🇵🇱 Polish:     /pl/kalkulatory/bmi/
```

### ❌ Incorrect Implementation

Do NOT use English paths for all languages:

```
❌ /pt/calculators/bmi/  (WRONG - should be /pt/calculadoras/bmi/)
❌ /fr/calculators/bmi/  (WRONG - should be /fr/calculatrices/bmi/)
❌ /de/calculators/bmi/  (WRONG - should be /de/rechner/bmi/)
```

## Implementation Guidelines

### 1. File Structure

Files should be organized in translated folder names:

```
src/pages/
├── calculadoras/           # Spanish (default)
├── en/calculators/        # English
├── pt/calculadoras/       # Portuguese
├── fr/calculatrices/      # French
├── hi/calculators/        # Hindi
├── de/rechner/            # German
├── it/calcolatrici/       # Italian
└── pl/kalkulatory/        # Polish
```

### 2. File Naming Convention

**File names should remain in ENGLISH** (for maintainability):

```
✅ /pt/calculadoras/bmi.astro       (translated path, English filename)
✅ /fr/calculatrices/bmi.astro      (translated path, English filename)
✅ /de/rechner/bmi.astro            (translated path, English filename)

❌ /pt/calculadoras/imc.astro       (NOT recommended - hard to maintain)
```

### 3. Route Configuration

**File:** `src/utils/i18n.ts`

Every calculator MUST have all 8 language paths defined:

```typescript
bmi: {
  es: '/es/calculadoras/imc/',
  en: '/calculators/bmi/',
  pt: '/pt/calculadoras/bmi/',        // ✅ Translated
  fr: '/fr/calculatrices/bmi/',       // ✅ Translated
  hi: '/hi/calculators/bmi/',
  de: '/de/rechner/bmi/',             // ✅ Translated
  it: '/it/calcolatrici/bmi/',        // ✅ Translated
  pl: '/pl/kalkulatory/bmi/',         // ✅ Translated
},
```

### 4. astro-i18next Configuration

**File:** `astro-i18next.config.mjs`

All locales and route mappings must be defined:

```javascript
export default {
  defaultLocale: "es",
  locales: ["es", "en", "pt", "fr", "hi", "de", "it", "pl"],
  routes: {
    en: { "calculadoras": "calculators" },
    pt: { "calculadoras": "calculadoras" },
    fr: { "calculadoras": "calculatrices" },
    hi: { "calculadoras": "calculators" },
    de: { "calculadoras": "rechner" },
    it: { "calculadoras": "calcolatrici" },
    pl: { "calculadoras": "kalkulatory" },
  },
};
```

## When Adding a New Calculator

Follow these steps to ensure URLs are properly localized:

1. **Create calculation logic** in `src/utils/calculators/{name}.ts`

2. **Create component** in `src/components/calculators/{Name}Calculator.astro`

3. **Add translations** in `public/locales/{lang}/calculators/{name}.json` for ALL 8 languages

4. **Update `src/utils/i18n.ts`**:
   - Add calculator paths for ALL 8 languages with translated URLs
   - Example:
   ```typescript
   newCalculator: {
     es: '/es/calculadoras/nueva/',
     en: '/calculators/new/',
     pt: '/pt/calculadoras/new/',
     fr: '/fr/calculatrices/new/',
     hi: '/hi/calculators/new/',
     de: '/de/rechner/new/',
     it: '/it/calcolatrici/new/',
     pl: '/pl/kalkulatory/nowa/',
   },
   ```

5. **Create page files** in the TRANSLATED folders with the `calculator` prop:
   - `src/pages/calculadoras/{name}.astro` (Spanish)
   - `src/pages/en/calculators/{name}.astro` (English)
   - `src/pages/pt/calculadoras/{name}.astro` (Portuguese) ✅
   - `src/pages/fr/calculatrices/{name}.astro` (French) ✅
   - `src/pages/hi/calculators/{name}.astro` (Hindi)
   - `src/pages/de/rechner/{name}.astro` (German) ✅
   - `src/pages/it/calcolatrici/{name}.astro` (Italian) ✅
   - `src/pages/pl/kalkulatory/{name}.astro` (Polish) ✅

   **CRITICAL:** Every calculator page MUST include the `calculator` prop in BaseLayout:
   ```astro
   <BaseLayout
     title={title}
     description={description}
     lang="de"
     calculator="newCalculator"  <!-- REQUIRED for correct hreflang tags -->
   >
   ```

   Without the `calculator` prop, hreflang tags will point to homepage URLs instead of calculator-specific URLs.

## Translation Reference

| Language | Folder Name | Meaning |
|----------|-------------|---------|
| Spanish | `calculadoras` | Calculators |
| English | `calculators` | Calculators |
| Portuguese | `calculadoras` | Calculadoras |
| French | `calculatrices` | Calculatrices |
| Hindi | `calculators` | Calculators |
| German | `rechner` | Calculator |
| Italian | `calcolatrici` | Calcolatrici |
| Polish | `kalkulatory` | Kalkulatory |

## Benefits of This Approach

1. **SEO Optimization**: Search engines can better understand content in the user's language
2. **User Experience**: Users see URLs in their native language
3. **Cultural Adaptation**: Shows respect for each language and culture
4. **Better Analytics**: Easier to track which language versions perform better
5. **Hreflang Tags**: Proper alternate language tags work correctly

## Verification Checklist

Before deploying, verify:

- [ ] All calculator pages exist in translated folders (not in `/calculators/`)
- [ ] `src/utils/i18n.ts` has all 8 language paths defined for each calculator
- [ ] No `/calculators/` folders exist in `pt/`, `fr/`, `de/`, or `it/` directories
- [ ] Build completes successfully (`npm run build`)
- [ ] All hreflang tags are generated correctly in page source

## Historical Context

**Date Implemented:** 2025-12-28

This rule was established after discovering that URLs were initially standardized in English across all languages. The project was migrated to use fully localized URLs for better SEO and user experience.

**Migration performed:**
- Moved 27 calculators × 4 languages (PT, FR, DE, IT) = 108 files
- Updated 30 calculators × 8 languages = 240 route definitions
- Removed duplicate `/calculators/` folders in non-English languages

---

**REMEMBER:** When in doubt, always use TRANSLATED URLs. Never default to English paths for non-English languages.
