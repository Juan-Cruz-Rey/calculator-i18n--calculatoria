export type Locale = 'es' | 'en';

// Import translations statically
import esCommonRaw from '../../public/locales/es/common.json';
import esCalculatorsRaw from '../../public/locales/es/calculators.json';
import enCommonRaw from '../../public/locales/en/common.json';
import enCalculatorsRaw from '../../public/locales/en/calculators.json';

interface Translations {
  [key: string]: any;
}

const translations: Record<Locale, Translations> = {
  es: {
    ...esCommonRaw,
    calculators: esCalculatorsRaw,
  },
  en: {
    ...enCommonRaw,
    calculators: enCalculatorsRaw,
  },
};

/**
 * Get translation for a key
 * @param key - Translation key (e.g., 'site.title' or 'calculators:bmi.title')
 * @param locale - Language locale
 */
export function t(key: string, locale: Locale = 'es'): string {
  const parts = key.split(':');
  let namespace = '';
  let path = '';

  if (parts.length === 2) {
    namespace = parts[0];
    path = parts[1];
  } else {
    path = key;
  }

  const keys = path.split('.');
  let value: any = namespace ? translations[locale][namespace] : translations[locale];

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  return typeof value === 'string' ? value : key;
}

/**
 * Get locale-specific URL
 */
export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'es') {
    // Spanish is default, no prefix
    return path;
  }

  // English paths
  if (path === '/') return '/en';
  return `/en${path}`;
}

/**
 * Get alternate locale path
 */
export function getAlternatePath(currentPath: string, targetLocale: Locale): string {
  // Remove leading/trailing slashes for processing
  const normalized = currentPath.replace(/^\/|\/$/g, '');

  const pathMappings: Record<string, { es: string; en: string }> = {
    '': { es: '/', en: '/en' },
    'en': { es: '/', en: '/en' },
    'calculadoras': { es: '/calculadoras', en: '/en/calculators' },
    'en/calculators': { es: '/calculadoras', en: '/en/calculators' },
    'calculadoras/imc': { es: '/calculadoras/imc', en: '/en/calculators/bmi' },
    'en/calculators/bmi': { es: '/calculadoras/imc', en: '/en/calculators/bmi' },
  };

  return pathMappings[normalized]?.[targetLocale] || currentPath;
}
