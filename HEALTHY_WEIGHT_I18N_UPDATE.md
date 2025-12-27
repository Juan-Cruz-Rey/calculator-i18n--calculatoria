# Manual Update Required for i18n.ts

The Healthy Weight Calculator has been fully implemented, but `src/utils/i18n.ts` needs to be manually updated due to file locking issues.

## Required Changes to src/utils/i18n.ts

### 1. Add imports after line 100 (after pregnancy imports):

```typescript
import esHealthyWeight from '../../public/locales/es/calculators/healthyWeight.json';
import enHealthyWeight from '../../public/locales/en/calculators/healthyWeight.json';
import ptHealthyWeight from '../../public/locales/pt/calculators/healthyWeight.json';
import frHealthyWeight from '../../public/locales/fr/calculators/healthyWeight.json';
import hiHealthyWeight from '../../public/locales/hi/calculators/healthyWeight.json';
import deHealthyWeight from '../../public/locales/de/calculators/healthyWeight.json';
import itHealthyWeight from '../../public/locales/it/calculators/healthyWeight.json';
```

### 2. Add to each language's translations object:

In the `es` object (around line 119):
```typescript
healthyWeight: esHealthyWeight,
```

In the `en` object (around line 132):
```typescript
healthyWeight: enHealthyWeight,
```

In the `pt` object (around line 146):
```typescript
healthyWeight: ptHealthyWeight,
```

In the `fr` object (around line 159):
```typescript
healthyWeight: frHealthyWeight,
```

In the `hi` object (around line 172):
```typescript
healthyWeight: hiHealthyWeight,
```

In the `de` object (around line 185):
```typescript
healthyWeight: deHealthyWeight,
```

In the `it` object (around line 198):
```typescript
healthyWeight: itHealthyWeight,
```

### 3. Add calculator paths to getAlternatePath function (after pregnancyWeightGain, around line 352):

```typescript
healthyWeight: {
  es: '/calculadoras/peso-saludable/',
  en: '/en/calculators/healthy-weight/',
  pt: '/pt/calculators/healthy-weight/',
  fr: '/fr/calculators/healthy-weight/',
  hi: '/hi/calculators/healthy-weight/',
  de: '/de/calculators/healthy-weight/',
  it: '/it/calculators/healthy-weight/',
},
```

## After Making These Changes

Once you've manually updated `src/utils/i18n.ts`, the Healthy Weight Calculator will be fully functional in all 7 languages!

You can delete this file after completing the update.
