/**
 * Regional BMI Configuration
 *
 * This file contains regional adaptations for the BMI calculator based on
 * competitive analysis of top calculators in each of the 12 supported languages.
 *
 * Key Regional Differences:
 * - Asian BMI thresholds (India) - Lower thresholds due to higher body fat % at same BMI
 * - Default unit systems (Imperial for US, Metric for rest)
 * - Visual presentation preferences (gauge vs curve)
 * - Age/gender adjustments
 */

import type { Locale } from '@/utils/i18n';

export type BMIThresholdType = 'WHO_STANDARD' | 'ASIAN';
export type VisualStyle = 'gauge' | 'curve' | 'both' | 'simple';

export interface BMIRegionalConfig {
  /** Default unit system for this region */
  defaultUnit: 'metric' | 'imperial';

  /** BMI threshold type (WHO standard or Asian) */
  thresholds: BMIThresholdType;

  /** Number of BMI categories to display (4 simple or 8 detailed) */
  categories: 4 | 8;

  /** Whether to show age-adjusted BMI ranges */
  ageAdjustment: boolean;

  /** Whether to show gender-differentiated thresholds */
  genderAdjustment: boolean;

  /** Preferred visual style */
  visualStyle: VisualStyle;

  /** Optional regional features */
  features: {
    /** Show historical tracking feature */
    historicalTracking?: boolean;
    /** Show social sharing buttons */
    socialSharing?: boolean;
    /** Show privacy note */
    privacyNote?: boolean;
    /** Show child/teen calculator */
    childCalculator?: boolean;
  };

  /** Local health authority reference */
  healthAuthority: string;

  /** Local terminology for BMI/WHO */
  terminology: 'WHO' | 'OMS' | 'ВОЗ' | 'VKİ' | string;
}

/**
 * Regional configuration for each supported language
 */
export const BMI_REGIONAL_CONFIG: Record<Locale, BMIRegionalConfig> = {
  // Spanish - Spain & Latin America
  es: {
    defaultUnit: 'metric',
    thresholds: 'WHO_STANDARD',
    categories: 8,
    ageAdjustment: false,
    genderAdjustment: false,
    visualStyle: 'gauge',
    features: {},
    healthAuthority: 'OMS (Organización Mundial de la Salud)',
    terminology: 'OMS',
  },

  // English - US, UK, International
  en: {
    defaultUnit: 'imperial', // US market preference
    thresholds: 'WHO_STANDARD',
    categories: 8,
    ageAdjustment: true,
    genderAdjustment: false,
    visualStyle: 'gauge',
    features: {
      childCalculator: true, // Popular in US market
    },
    healthAuthority: 'WHO, CDC, NIH',
    terminology: 'WHO',
  },

  // Portuguese - Brazil & Portugal
  pt: {
    defaultUnit: 'metric',
    thresholds: 'WHO_STANDARD',
    categories: 8,
    ageAdjustment: false,
    genderAdjustment: false,
    visualStyle: 'gauge',
    features: {},
    healthAuthority: 'OMS, Ministério da Saúde (Brasil)',
    terminology: 'OMS',
  },

  // French - France, Belgium, Switzerland
  fr: {
    defaultUnit: 'metric',
    thresholds: 'WHO_STANDARD',
    categories: 8,
    ageAdjustment: true,
    genderAdjustment: false,
    visualStyle: 'curve', // French market prefers corpulence curves
    features: {
      historicalTracking: true, // Popular in French market
      socialSharing: true,
      childCalculator: true,
    },
    healthAuthority: 'OMS',
    terminology: 'OMS',
  },

  // Hindi - India
  hi: {
    defaultUnit: 'metric',
    thresholds: 'ASIAN', // ⚠️ CRITICAL - Asian BMI thresholds
    categories: 4, // Simpler but with different thresholds
    ageAdjustment: false,
    genderAdjustment: false,
    visualStyle: 'gauge',
    features: {},
    healthAuthority: 'ICMR, WHO',
    terminology: 'WHO', // Medical terms often in English in India
  },

  // German - Germany, Austria, Switzerland
  de: {
    defaultUnit: 'metric',
    thresholds: 'WHO_STANDARD',
    categories: 8,
    ageAdjustment: true,
    genderAdjustment: true,
    visualStyle: 'gauge',
    features: {
      childCalculator: true,
    },
    healthAuthority: 'WHO, Robert Koch Institut, DGE',
    terminology: 'WHO',
  },

  // Italian - Italy
  it: {
    defaultUnit: 'metric',
    thresholds: 'WHO_STANDARD',
    categories: 8,
    ageAdjustment: true,
    genderAdjustment: true,
    visualStyle: 'gauge',
    features: {},
    healthAuthority: 'OMS, Ministero della Salute, ISS',
    terminology: 'OMS',
  },

  // Polish - Poland
  pl: {
    defaultUnit: 'metric',
    thresholds: 'WHO_STANDARD',
    categories: 8,
    ageAdjustment: false,
    genderAdjustment: false,
    visualStyle: 'gauge',
    features: {},
    healthAuthority: 'WHO, NFZ (Narodowy Fundusz Zdrowia)',
    terminology: 'WHO',
  },

  // Dutch - Netherlands, Belgium
  nl: {
    defaultUnit: 'metric',
    thresholds: 'WHO_STANDARD',
    categories: 4, // Dutch prefer simpler presentation
    ageAdjustment: false,
    genderAdjustment: false,
    visualStyle: 'simple', // Minimalist preference
    features: {},
    healthAuthority: 'WHO, RIVM, Voedingscentrum',
    terminology: 'WHO',
  },

  // Turkish - Turkey
  tr: {
    defaultUnit: 'metric',
    thresholds: 'WHO_STANDARD',
    categories: 8,
    ageAdjustment: false,
    genderAdjustment: false,
    visualStyle: 'gauge',
    features: {},
    healthAuthority: 'WHO, Türkiye Sağlık Bakanlığı',
    terminology: 'VKİ', // Vücut Kitle İndeksi
  },

  // Swedish - Sweden
  sv: {
    defaultUnit: 'metric',
    thresholds: 'WHO_STANDARD',
    categories: 4,
    ageAdjustment: false,
    genderAdjustment: false,
    visualStyle: 'simple',
    features: {
      privacyNote: true, // Important for Swedish market
    },
    healthAuthority: 'WHO, Folkhälsomyndigheten',
    terminology: 'WHO',
  },

  // Russian - Russia, ex-Soviet states
  ru: {
    defaultUnit: 'metric',
    thresholds: 'WHO_STANDARD',
    categories: 8,
    ageAdjustment: false,
    genderAdjustment: false,
    visualStyle: 'gauge',
    features: {},
    healthAuthority: 'ВОЗ, Минздрав России',
    terminology: 'ВОЗ', // WHO in Cyrillic
  },
};

/**
 * Get regional configuration for a specific language
 */
export function getBMIRegionalConfig(lang: Locale): BMIRegionalConfig {
  return BMI_REGIONAL_CONFIG[lang] || BMI_REGIONAL_CONFIG.en;
}

/**
 * Check if a language uses Asian BMI thresholds
 */
export function usesAsianThresholds(lang: Locale): boolean {
  return getBMIRegionalConfig(lang).thresholds === 'ASIAN';
}

/**
 * Get default unit system for a language
 */
export function getDefaultUnitSystem(lang: Locale): 'metric' | 'imperial' {
  return getBMIRegionalConfig(lang).defaultUnit;
}

/**
 * Get number of BMI categories for a language
 */
export function getBMICategoryCount(lang: Locale): 4 | 8 {
  return getBMIRegionalConfig(lang).categories;
}
