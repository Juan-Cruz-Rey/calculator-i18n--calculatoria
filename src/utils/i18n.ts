export type Locale = 'es' | 'en' | 'pt' | 'fr' | 'hi' | 'de' | 'it';

// Import common translations
import esCommon from '../../public/locales/es/common.json';
import enCommon from '../../public/locales/en/common.json';
import ptCommon from '../../public/locales/pt/common.json';
import frCommon from '../../public/locales/fr/common.json';
import hiCommon from '../../public/locales/hi/common.json';
import deCommon from '../../public/locales/de/common.json';
import itCommon from '../../public/locales/it/common.json';

// Import categories translations
import esCategories from '../../public/locales/es/categories.json';
import enCategories from '../../public/locales/en/categories.json';
import ptCategories from '../../public/locales/pt/categories.json';
import frCategories from '../../public/locales/fr/categories.json';
import hiCategories from '../../public/locales/hi/categories.json';
import deCategories from '../../public/locales/de/categories.json';
import itCategories from '../../public/locales/it/categories.json';

// Import calculator-specific translations
import esBMI from '../../public/locales/es/calculators/bmi.json';
import enBMI from '../../public/locales/en/calculators/bmi.json';
import ptBMI from '../../public/locales/pt/calculators/bmi.json';
import frBMI from '../../public/locales/fr/calculators/bmi.json';
import hiBMI from '../../public/locales/hi/calculators/bmi.json';
import deBMI from '../../public/locales/de/calculators/bmi.json';
import itBMI from '../../public/locales/it/calculators/bmi.json';

import esCalorie from '../../public/locales/es/calculators/calorie.json';
import enCalorie from '../../public/locales/en/calculators/calorie.json';
import ptCalorie from '../../public/locales/pt/calculators/calorie.json';
import frCalorie from '../../public/locales/fr/calculators/calorie.json';
import hiCalorie from '../../public/locales/hi/calculators/calorie.json';
import deCalorie from '../../public/locales/de/calculators/calorie.json';
import itCalorie from '../../public/locales/it/calculators/calorie.json';

import esIdealWeight from '../../public/locales/es/calculators/idealWeight.json';
import enIdealWeight from '../../public/locales/en/calculators/idealWeight.json';
import ptIdealWeight from '../../public/locales/pt/calculators/idealWeight.json';
import frIdealWeight from '../../public/locales/fr/calculators/idealWeight.json';
import hiIdealWeight from '../../public/locales/hi/calculators/idealWeight.json';
import deIdealWeight from '../../public/locales/de/calculators/idealWeight.json';
import itIdealWeight from '../../public/locales/it/calculators/idealWeight.json';

import esBodyFat from '../../public/locales/es/calculators/bodyFat.json';
import enBodyFat from '../../public/locales/en/calculators/bodyFat.json';
import ptBodyFat from '../../public/locales/pt/calculators/bodyFat.json';
import frBodyFat from '../../public/locales/fr/calculators/bodyFat.json';
import hiBodyFat from '../../public/locales/hi/calculators/bodyFat.json';
import deBodyFat from '../../public/locales/de/calculators/bodyFat.json';
import itBodyFat from '../../public/locales/it/calculators/bodyFat.json';

import esBMR from '../../public/locales/es/calculators/bmr.json';
import enBMR from '../../public/locales/en/calculators/bmr.json';
import ptBMR from '../../public/locales/pt/calculators/bmr.json';
import frBMR from '../../public/locales/fr/calculators/bmr.json';
import hiBMR from '../../public/locales/hi/calculators/bmr.json';
import deBMR from '../../public/locales/de/calculators/bmr.json';
import itBMR from '../../public/locales/it/calculators/bmr.json';

import esTDEE from '../../public/locales/es/calculators/tdee.json';
import enTDEE from '../../public/locales/en/calculators/tdee.json';
import ptTDEE from '../../public/locales/pt/calculators/tdee.json';
import frTDEE from '../../public/locales/fr/calculators/tdee.json';
import hiTDEE from '../../public/locales/hi/calculators/tdee.json';
import deTDEE from '../../public/locales/de/calculators/tdee.json';
import itTDEE from '../../public/locales/it/calculators/tdee.json';

import esArmyBodyFat from '../../public/locales/es/calculators/armyBodyFat.json';
import enArmyBodyFat from '../../public/locales/en/calculators/armyBodyFat.json';
import ptArmyBodyFat from '../../public/locales/pt/calculators/armyBodyFat.json';
import frArmyBodyFat from '../../public/locales/fr/calculators/armyBodyFat.json';
import hiArmyBodyFat from '../../public/locales/hi/calculators/armyBodyFat.json';
import deArmyBodyFat from '../../public/locales/de/calculators/armyBodyFat.json';
import itArmyBodyFat from '../../public/locales/it/calculators/armyBodyFat.json';

import esPace from '../../public/locales/es/calculators/pace.json';
import enPace from '../../public/locales/en/calculators/pace.json';
import ptPace from '../../public/locales/pt/calculators/pace.json';
import frPace from '../../public/locales/fr/calculators/pace.json';
import hiPace from '../../public/locales/hi/calculators/pace.json';
import dePace from '../../public/locales/de/calculators/pace.json';
import itPace from '../../public/locales/it/calculators/pace.json';

import esMacro from '../../public/locales/es/calculators/macro.json';
import enMacro from '../../public/locales/en/calculators/macro.json';
import ptMacro from '../../public/locales/pt/calculators/macro.json';
import frMacro from '../../public/locales/fr/calculators/macro.json';
import hiMacro from '../../public/locales/hi/calculators/macro.json';
import deMacro from '../../public/locales/de/calculators/macro.json';
import itMacro from '../../public/locales/it/calculators/macro.json';

import esPregnancy from '../../public/locales/es/calculators/pregnancy.json';
import enPregnancy from '../../public/locales/en/calculators/pregnancy.json';
import ptPregnancy from '../../public/locales/pt/calculators/pregnancy.json';
import frPregnancy from '../../public/locales/fr/calculators/pregnancy.json';
import hiPregnancy from '../../public/locales/hi/calculators/pregnancy.json';
import dePregnancy from '../../public/locales/de/calculators/pregnancy.json';
import itPregnancy from '../../public/locales/it/calculators/pregnancy.json';

import esPregnancyWeightGain from '../../public/locales/es/calculators/pregnancyWeightGain.json';
import enPregnancyWeightGain from '../../public/locales/en/calculators/pregnancyWeightGain.json';
import ptPregnancyWeightGain from '../../public/locales/pt/calculators/pregnancyWeightGain.json';
import frPregnancyWeightGain from '../../public/locales/fr/calculators/pregnancyWeightGain.json';
import hiPregnancyWeightGain from '../../public/locales/hi/calculators/pregnancyWeightGain.json';
import dePregnancyWeightGain from '../../public/locales/de/calculators/pregnancyWeightGain.json';
import itPregnancyWeightGain from '../../public/locales/it/calculators/pregnancyWeightGain.json';

import esPregnancyConception from '../../public/locales/es/calculators/pregnancyConception.json';
import enPregnancyConception from '../../public/locales/en/calculators/pregnancyConception.json';
import ptPregnancyConception from '../../public/locales/pt/calculators/pregnancyConception.json';
import frPregnancyConception from '../../public/locales/fr/calculators/pregnancyConception.json';
import hiPregnancyConception from '../../public/locales/hi/calculators/pregnancyConception.json';
import dePregnancyConception from '../../public/locales/de/calculators/pregnancyConception.json';
import itPregnancyConception from '../../public/locales/it/calculators/pregnancyConception.json';

import esDueDate from '../../public/locales/es/calculators/dueDate.json';
import enDueDate from '../../public/locales/en/calculators/dueDate.json';
import ptDueDate from '../../public/locales/pt/calculators/dueDate.json';
import frDueDate from '../../public/locales/fr/calculators/dueDate.json';
import hiDueDate from '../../public/locales/hi/calculators/dueDate.json';
import deDueDate from '../../public/locales/de/calculators/dueDate.json';
import itDueDate from '../../public/locales/it/calculators/dueDate.json';

import esCarbohydrate from '../../public/locales/es/calculators/carbohydrate.json';
import enCarbohydrate from '../../public/locales/en/calculators/carbohydrate.json';
import ptCarbohydrate from '../../public/locales/pt/calculators/carbohydrate.json';
import frCarbohydrate from '../../public/locales/fr/calculators/carbohydrate.json';
import hiCarbohydrate from '../../public/locales/hi/calculators/carbohydrate.json';
import deCarbohydrate from '../../public/locales/de/calculators/carbohydrate.json';
import itCarbohydrate from '../../public/locales/it/calculators/carbohydrate.json';

import esLeanBodyMass from '../../public/locales/es/calculators/leanBodyMass.json';
import enLeanBodyMass from '../../public/locales/en/calculators/leanBodyMass.json';
import ptLeanBodyMass from '../../public/locales/pt/calculators/leanBodyMass.json';
import frLeanBodyMass from '../../public/locales/fr/calculators/leanBodyMass.json';
import hiLeanBodyMass from '../../public/locales/hi/calculators/leanBodyMass.json';
import deLeanBodyMass from '../../public/locales/de/calculators/leanBodyMass.json';
import itLeanBodyMass from '../../public/locales/it/calculators/leanBodyMass.json';

import esHealthyWeight from '../../public/locales/es/calculators/healthyWeight.json';
import enHealthyWeight from '../../public/locales/en/calculators/healthyWeight.json';
import ptHealthyWeight from '../../public/locales/pt/calculators/healthyWeight.json';
import frHealthyWeight from '../../public/locales/fr/calculators/healthyWeight.json';
import hiHealthyWeight from '../../public/locales/hi/calculators/healthyWeight.json';
import deHealthyWeight from '../../public/locales/de/calculators/healthyWeight.json';
import itHealthyWeight from '../../public/locales/it/calculators/healthyWeight.json';

interface Translations {
  [key: string]: any;
}

const translations: Record<Locale, Translations> = {
  es: {
    ...esCommon,
    categories: esCategories,
    bmi: esBMI,
    calorie: esCalorie,
    idealWeight: esIdealWeight,
    bodyFat: esBodyFat,
    bmr: esBMR,
    tdee: esTDEE,
    armyBodyFat: esArmyBodyFat,
    pace: esPace,
    macro: esMacro,
    pregnancy: esPregnancy,
    pregnancyWeightGain: esPregnancyWeightGain,
    pregnancyConception: esPregnancyConception,
    dueDate: esDueDate,
    carbohydrate: esCarbohydrate,
    leanBodyMass: esLeanBodyMass,
    healthyWeight: esHealthyWeight,
  },
  en: {
    ...enCommon,
    categories: enCategories,
    bmi: enBMI,
    calorie: enCalorie,
    idealWeight: enIdealWeight,
    bodyFat: enBodyFat,
    bmr: enBMR,
    tdee: enTDEE,
    armyBodyFat: enArmyBodyFat,
    pace: enPace,
    macro: enMacro,
    pregnancy: enPregnancy,
    pregnancyWeightGain: enPregnancyWeightGain,
    pregnancyConception: enPregnancyConception,
    dueDate: enDueDate,
    carbohydrate: enCarbohydrate,
    leanBodyMass: enLeanBodyMass,
    healthyWeight: enHealthyWeight,
  },
  pt: {
    ...ptCommon,
    categories: ptCategories,
    bmi: ptBMI,
    calorie: ptCalorie,
    idealWeight: ptIdealWeight,
    bodyFat: ptBodyFat,
    bmr: ptBMR,
    tdee: ptTDEE,
    armyBodyFat: ptArmyBodyFat,
    pace: ptPace,
    macro: ptMacro,
    pregnancy: ptPregnancy,
    pregnancyWeightGain: ptPregnancyWeightGain,
    pregnancyConception: ptPregnancyConception,
    dueDate: ptDueDate,
    carbohydrate: ptCarbohydrate,
    leanBodyMass: ptLeanBodyMass,
    healthyWeight: ptHealthyWeight,
  },
  fr: {
    ...frCommon,
    categories: frCategories,
    bmi: frBMI,
    calorie: frCalorie,
    idealWeight: frIdealWeight,
    bodyFat: frBodyFat,
    bmr: frBMR,
    tdee: frTDEE,
    armyBodyFat: frArmyBodyFat,
    pace: frPace,
    macro: frMacro,
    pregnancy: frPregnancy,
    pregnancyWeightGain: frPregnancyWeightGain,
    pregnancyConception: frPregnancyConception,
    dueDate: frDueDate,
    carbohydrate: frCarbohydrate,
    leanBodyMass: frLeanBodyMass,
    healthyWeight: frHealthyWeight,
  },
  hi: {
    ...hiCommon,
    categories: hiCategories,
    bmi: hiBMI,
    calorie: hiCalorie,
    idealWeight: hiIdealWeight,
    bodyFat: hiBodyFat,
    bmr: hiBMR,
    tdee: hiTDEE,
    armyBodyFat: hiArmyBodyFat,
    pace: hiPace,
    macro: hiMacro,
    pregnancy: hiPregnancy,
    pregnancyWeightGain: hiPregnancyWeightGain,
    pregnancyConception: hiPregnancyConception,
    dueDate: hiDueDate,
    carbohydrate: hiCarbohydrate,
    leanBodyMass: hiLeanBodyMass,
    healthyWeight: hiHealthyWeight,
  },
  de: {
    ...deCommon,
    categories: deCategories,
    bmi: deBMI,
    calorie: deCalorie,
    idealWeight: deIdealWeight,
    bodyFat: deBodyFat,
    bmr: deBMR,
    tdee: deTDEE,
    armyBodyFat: deArmyBodyFat,
    pace: dePace,
    macro: deMacro,
    pregnancy: dePregnancy,
    pregnancyWeightGain: dePregnancyWeightGain,
    pregnancyConception: dePregnancyConception,
    dueDate: deDueDate,
    carbohydrate: deCarbohydrate,
    leanBodyMass: deLeanBodyMass,
    healthyWeight: deHealthyWeight,
  },
  it: {
    ...itCommon,
    categories: itCategories,
    bmi: itBMI,
    calorie: itCalorie,
    idealWeight: itIdealWeight,
    bodyFat: itBodyFat,
    bmr: itBMR,
    tdee: itTDEE,
    armyBodyFat: itArmyBodyFat,
    pace: itPace,
    macro: itMacro,
    pregnancy: itPregnancy,
    pregnancyWeightGain: itPregnancyWeightGain,
    pregnancyConception: itPregnancyConception,
    dueDate: itDueDate,
    carbohydrate: itCarbohydrate,
    leanBodyMass: itLeanBodyMass,
    healthyWeight: itHealthyWeight,
  },
};

/**
 * Get translation for a key
 * @param key - Translation key (e.g., 'site.title' or 'bmi:form.title')
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
 * Language configuration
 */
export const languageConfig: Record<Locale, { name: string; nativeName: string; path: string }> = {
  es: { name: 'Spanish', nativeName: 'Español', path: '' },
  en: { name: 'English', nativeName: 'English', path: '/en' },
  pt: { name: 'Portuguese', nativeName: 'Português', path: '/pt' },
  fr: { name: 'French', nativeName: 'Français', path: '/fr' },
  hi: { name: 'Hindi', nativeName: 'हिन्दी', path: '/hi' },
  de: { name: 'German', nativeName: 'Deutsch', path: '/de' },
  it: { name: 'Italian', nativeName: 'Italiano', path: '/it' },
};

/**
 * Get locale-specific URL
 */
export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'es') {
    // Spanish is default, no prefix
    return path;
  }

  const langPath = languageConfig[locale].path;
  if (path === '/') return langPath || '/';
  return `${langPath}${path}`;
}

/**
 * Get alternate locale path for a given calculator
 */
export function getAlternatePath(currentPath: string, targetLocale: Locale, calculator?: string): string {
  // Remove leading/trailing slashes for processing
  const normalized = currentPath.replace(/^\/|\/$/g, '');

  // Base paths mapping
  const basePaths: Record<string, Record<Locale, string>> = {
    '': {
      es: '/',
      en: '/en/',
      pt: '/pt/',
      fr: '/fr/',
      hi: '/hi/',
      de: '/de/',
      it: '/it/',
    },
  };

  // Calculator paths (can be extended for each calculator)
  const calculatorPaths = {
    bmi: {
      es: '/calculadoras/imc/',
      en: '/en/calculators/bmi/',
      pt: '/pt/calculators/bmi/',
      fr: '/fr/calculators/bmi/',
      hi: '/hi/calculators/bmi/',
      de: '/de/calculators/bmi/',
      it: '/it/calculators/bmi/',
    },
    calorie: {
      es: '/calculadoras/calorias/',
      en: '/en/calculators/calorie/',
      pt: '/pt/calculators/calorie/',
      fr: '/fr/calculators/calorie/',
      hi: '/hi/calculators/calorie/',
      de: '/de/calculators/calorie/',
      it: '/it/calculators/calorie/',
    },
    idealWeight: {
      es: '/calculadoras/peso-ideal/',
      en: '/en/calculators/ideal-weight/',
      pt: '/pt/calculators/ideal-weight/',
      fr: '/fr/calculators/ideal-weight/',
      hi: '/hi/calculators/ideal-weight/',
      de: '/de/calculators/ideal-weight/',
      it: '/it/calculators/ideal-weight/',
    },
    bodyFat: {
      es: '/calculadoras/grasa-corporal/',
      en: '/en/calculators/body-fat/',
      pt: '/pt/calculators/body-fat/',
      fr: '/fr/calculators/body-fat/',
      hi: '/hi/calculators/body-fat/',
      de: '/de/calculators/body-fat/',
      it: '/it/calculators/body-fat/',
    },
    tdee: {
      es: '/calculadoras/gect/',
      en: '/en/calculators/tdee/',
      pt: '/pt/calculators/tdee/',
      fr: '/fr/calculators/tdee/',
      hi: '/hi/calculators/tdee/',
      de: '/de/calculators/tdee/',
      it: '/it/calculators/tdee/',
    },
    bmr: {
      es: '/calculadoras/tmb/',
      en: '/en/calculators/bmr/',
      pt: '/pt/calculators/bmr/',
      fr: '/fr/calculators/bmr/',
      hi: '/hi/calculators/bmr/',
      de: '/de/calculators/bmr/',
      it: '/it/calculators/bmr/',
    },
    armyBodyFat: {
      es: '/calculadoras/grasa-corporal-ejercito/',
      en: '/en/calculators/army-body-fat/',
      pt: '/pt/calculators/army-body-fat/',
      fr: '/fr/calculators/army-body-fat/',
      hi: '/hi/calculators/army-body-fat/',
      de: '/de/calculators/army-body-fat/',
      it: '/it/calculators/army-body-fat/',
    },
    pregnancy: {
      es: '/calculadoras/embarazo/',
      en: '/en/calculators/pregnancy/',
      pt: '/pt/calculators/pregnancy/',
      fr: '/fr/calculators/pregnancy/',
      hi: '/hi/calculators/pregnancy/',
      de: '/de/calculators/pregnancy/',
      it: '/it/calculators/pregnancy/',
    },
    pace: {
      es: '/calculadoras/ritmo/',
      en: '/en/calculators/pace/',
      pt: '/pt/calculators/pace/',
      fr: '/fr/calculators/pace/',
      hi: '/hi/calculators/pace/',
      de: '/de/calculators/pace/',
      it: '/it/calculators/pace/',
    },
    macro: {
      es: '/calculadoras/macros/',
      en: '/en/calculators/macro/',
      pt: '/pt/calculators/macro/',
      fr: '/fr/calculators/macro/',
      hi: '/hi/calculators/macro/',
      de: '/de/calculators/macro/',
      it: '/it/calculators/macro/',
    },
    pregnancyWeightGain: {
      es: '/calculadoras/aumento-peso-embarazo/',
      en: '/en/calculators/pregnancy-weight-gain/',
      pt: '/pt/calculators/pregnancy-weight-gain/',
      fr: '/fr/calculators/pregnancy-weight-gain/',
      hi: '/hi/calculators/pregnancy-weight-gain/',
      de: '/de/calculators/pregnancy-weight-gain/',
      it: '/it/calculators/pregnancy-weight-gain/',
    },
    pregnancyConception: {
      es: '/calculadoras/concepcion-embarazo/',
      en: '/en/calculators/pregnancy-conception/',
      pt: '/pt/calculators/pregnancy-conception/',
      fr: '/fr/calculators/pregnancy-conception/',
      hi: '/hi/calculators/pregnancy-conception/',
      de: '/de/calculators/pregnancy-conception/',
      it: '/it/calculators/pregnancy-conception/',
    },
    dueDate: {
      es: '/calculadoras/fecha-parto/',
      en: '/en/calculators/due-date/',
      pt: '/pt/calculators/due-date/',
      fr: '/fr/calculators/due-date/',
      hi: '/hi/calculators/due-date/',
      de: '/de/calculators/due-date/',
      it: '/it/calculators/due-date/',
    },
    carbohydrate: {
      es: '/calculadoras/carbohidratos/',
      en: '/en/calculators/carbohydrate/',
      pt: '/pt/calculators/carbohydrate/',
      fr: '/fr/calculators/carbohydrate/',
      hi: '/hi/calculators/carbohydrate/',
      de: '/de/calculators/carbohydrate/',
      it: '/it/calculators/carbohydrate/',
    },
    leanBodyMass: {
      es: '/calculadoras/masa-corporal-magra/',
      en: '/en/calculators/lean-body-mass/',
      pt: '/pt/calculators/lean-body-mass/',
      fr: '/fr/calculators/lean-body-mass/',
      hi: '/hi/calculators/lean-body-mass/',
      de: '/de/calculators/lean-body-mass/',
      it: '/it/calculators/lean-body-mass/',
    },
    healthyWeight: {
      es: '/calculadoras/peso-saludable/',
      en: '/en/calculators/healthy-weight/',
      pt: '/pt/calculators/healthy-weight/',
      fr: '/fr/calculators/healthy-weight/',
      hi: '/hi/calculators/healthy-weight/',
      de: '/de/calculators/healthy-weight/',
      it: '/it/calculators/healthy-weight/',
    },
  };

  // Check if it's a calculator page
  if (calculator && calculatorPaths[calculator as keyof typeof calculatorPaths]) {
    return calculatorPaths[calculator as keyof typeof calculatorPaths][targetLocale];
  }

  // Check base paths
  if (basePaths[normalized]) {
    return basePaths[normalized][targetLocale];
  }

  // Fallback to language root
  return languageConfig[targetLocale].path || '/';
}
