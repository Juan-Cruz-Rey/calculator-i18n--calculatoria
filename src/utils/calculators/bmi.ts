/**
 * BMI Calculator Utilities
 *
 * Supports both WHO standard thresholds and Asian-specific thresholds
 * WHO Standard: Used for most populations (Caucasian, African, European, Latin American)
 * Asian Thresholds: Used for Asian populations (India, China, etc.) due to higher body fat % at lower BMI
 */

export type UnitSystem = 'metric' | 'imperial';
export type Gender = 'male' | 'female';

/**
 * WHO Standard BMI Categories (8 detailed categories)
 * Used for: Spanish, English, Portuguese, French, German, Italian, Polish, Turkish, Russian
 */
export type BMICategoryWHO8 =
  | 'severe-thinness'    // < 16.0
  | 'moderate-thinness'  // 16.0 - 16.99
  | 'mild-thinness'      // 17.0 - 18.49
  | 'normal'             // 18.5 - 24.99
  | 'pre-obese'          // 25.0 - 29.99
  | 'obese-i'            // 30.0 - 34.99
  | 'obese-ii'           // 35.0 - 39.99
  | 'obese-iii';         // >= 40.0

/**
 * WHO Standard BMI Categories (4 simple categories)
 * Used for: Dutch, Swedish (prefer simpler categorization)
 */
export type BMICategoryWHO4 =
  | 'underweight'        // < 18.5
  | 'normal'             // 18.5 - 24.99
  | 'overweight'         // 25.0 - 29.99
  | 'obese';             // >= 30.0

/**
 * Asian BMI Categories (4 categories with LOWER thresholds)
 * Used for: Hindi (India), potentially other Asian languages
 * Rationale: Asians have higher body fat % and metabolic risk at lower BMI values
 */
export type BMICategoryAsian =
  | 'underweight'        // < 18.5 (same)
  | 'normal'             // 18.5 - 22.99 (lower than WHO 24.99)
  | 'overweight'         // 23.0 - 24.99 (lower than WHO 25.0-29.99)
  | 'obese';             // >= 25.0 (lower than WHO 30.0)

export type BMICategory = BMICategoryWHO8 | BMICategoryWHO4 | BMICategoryAsian;
export type BMIThresholdType = 'WHO_8' | 'WHO_4' | 'ASIAN';

export interface BMIInput {
  age: number;
  gender: Gender;
  height: number; // cm or inches
  weight: number; // kg or lbs
  unitSystem: UnitSystem;
  thresholdType?: BMIThresholdType; // Defaults to WHO_8
}

export interface BMIResult {
  bmi: number;
  bmiPrime: number;
  ponderalIndex: number;
  category: BMICategory;
  categoryDetails: BMICategoryDetails;
  healthyBMIRange: { min: number; max: number };
  healthyWeightRange: { min: number; max: number };
  thresholdType: BMIThresholdType;
}

export interface BMICategoryDetails {
  code: BMICategory;
  range: { min: number; max: number };
  translationKey: string;
  colorClass: string;
  riskLevel: 'very-high' | 'high' | 'moderate' | 'low';
}

// ============================================================================
// BMI Thresholds Configuration
// ============================================================================

/**
 * WHO Standard 8-Category Thresholds
 * Source: World Health Organization
 */
export const WHO_8_CATEGORY_THRESHOLDS: Record<BMICategoryWHO8, BMICategoryDetails> = {
  'severe-thinness': {
    code: 'severe-thinness',
    range: { min: 0, max: 16.0 },
    translationKey: 'bmi.categories.severeThinness',
    colorClass: 'category-severe-thinness',
    riskLevel: 'very-high',
  },
  'moderate-thinness': {
    code: 'moderate-thinness',
    range: { min: 16.0, max: 17.0 },
    translationKey: 'bmi.categories.moderateThinness',
    colorClass: 'category-moderate-thinness',
    riskLevel: 'high',
  },
  'mild-thinness': {
    code: 'mild-thinness',
    range: { min: 17.0, max: 18.5 },
    translationKey: 'bmi.categories.mildThinness',
    colorClass: 'category-mild-thinness',
    riskLevel: 'moderate',
  },
  'normal': {
    code: 'normal',
    range: { min: 18.5, max: 25.0 },
    translationKey: 'bmi.categories.normal',
    colorClass: 'category-normal',
    riskLevel: 'low',
  },
  'pre-obese': {
    code: 'pre-obese',
    range: { min: 25.0, max: 30.0 },
    translationKey: 'bmi.categories.preObese',
    colorClass: 'category-pre-obese',
    riskLevel: 'moderate',
  },
  'obese-i': {
    code: 'obese-i',
    range: { min: 30.0, max: 35.0 },
    translationKey: 'bmi.categories.obeseI',
    colorClass: 'category-obese-i',
    riskLevel: 'high',
  },
  'obese-ii': {
    code: 'obese-ii',
    range: { min: 35.0, max: 40.0 },
    translationKey: 'bmi.categories.obeseII',
    colorClass: 'category-obese-ii',
    riskLevel: 'very-high',
  },
  'obese-iii': {
    code: 'obese-iii',
    range: { min: 40.0, max: 999 },
    translationKey: 'bmi.categories.obeseIII',
    colorClass: 'category-obese-iii',
    riskLevel: 'very-high',
  },
};

/**
 * WHO Standard 4-Category Thresholds (Simplified)
 */
export const WHO_4_CATEGORY_THRESHOLDS: Record<BMICategoryWHO4, BMICategoryDetails> = {
  'underweight': {
    code: 'underweight',
    range: { min: 0, max: 18.5 },
    translationKey: 'bmi.categories.underweight',
    colorClass: 'category-underweight',
    riskLevel: 'moderate',
  },
  'normal': {
    code: 'normal',
    range: { min: 18.5, max: 25.0 },
    translationKey: 'bmi.categories.normal',
    colorClass: 'category-normal',
    riskLevel: 'low',
  },
  'overweight': {
    code: 'overweight',
    range: { min: 25.0, max: 30.0 },
    translationKey: 'bmi.categories.overweight',
    colorClass: 'category-overweight',
    riskLevel: 'moderate',
  },
  'obese': {
    code: 'obese',
    range: { min: 30.0, max: 999 },
    translationKey: 'bmi.categories.obese',
    colorClass: 'category-obese',
    riskLevel: 'high',
  },
};

/**
 * Asian BMI Thresholds (LOWER thresholds)
 * Source: Indian Consensus Group (2009), 100+ medical experts
 * Rationale: Asians have higher body fat %, visceral fat, and metabolic risk at lower BMI
 */
export const ASIAN_CATEGORY_THRESHOLDS: Record<BMICategoryAsian, BMICategoryDetails> = {
  'underweight': {
    code: 'underweight',
    range: { min: 0, max: 18.5 },
    translationKey: 'bmi.categories.underweight',
    colorClass: 'category-underweight',
    riskLevel: 'moderate',
  },
  'normal': {
    code: 'normal',
    range: { min: 18.5, max: 23.0 }, // ⚠️ LOWER than WHO (24.99)
    translationKey: 'bmi.categories.normal',
    colorClass: 'category-normal',
    riskLevel: 'low',
  },
  'overweight': {
    code: 'overweight',
    range: { min: 23.0, max: 25.0 }, // ⚠️ LOWER than WHO (25.0-29.99)
    translationKey: 'bmi.categories.overweight',
    colorClass: 'category-overweight',
    riskLevel: 'moderate',
  },
  'obese': {
    code: 'obese',
    range: { min: 25.0, max: 999 }, // ⚠️ LOWER than WHO (30.0+)
    translationKey: 'bmi.categories.obese',
    colorClass: 'category-obese',
    riskLevel: 'high',
  },
};

// ============================================================================
// Unit Conversion Functions
// ============================================================================

/**
 * Convert height from imperial (feet and inches) to centimeters
 */
export function imperialHeightToCm(feet: number, inches: number): number {
  return (feet * 12 + inches) * 2.54;
}

/**
 * Convert weight from pounds to kilograms
 */
export function lbsToKg(lbs: number): number {
  return lbs * 0.453592;
}

/**
 * Convert height from centimeters to meters
 */
export function cmToMeters(cm: number): number {
  return cm / 100;
}

/**
 * Convert weight from kilograms to pounds
 */
export function kgToLbs(kg: number): number {
  return kg * 2.20462;
}

// ============================================================================
// BMI Calculation Functions
// ============================================================================

/**
 * Calculate BMI using the standard formula: weight (kg) / height² (m)
 */
export function calculateBMI(weightKg: number, heightM: number): number {
  if (heightM <= 0 || weightKg <= 0) {
    throw new Error('Height and weight must be positive numbers');
  }
  return weightKg / (heightM * heightM);
}

/**
 * Calculate BMI Prime (BMI / 25)
 * BMI Prime is a dimensionless number that represents the ratio of actual BMI to the upper limit BMI
 */
export function calculateBMIPrime(bmi: number): number {
  return bmi / 25;
}

/**
 * Calculate Ponderal Index (weight / height³)
 * More reliable for very tall or very short individuals
 */
export function calculatePonderalIndex(weightKg: number, heightM: number): number {
  if (heightM <= 0 || weightKg <= 0) {
    throw new Error('Height and weight must be positive numbers');
  }
  return weightKg / (heightM * heightM * heightM);
}

// ============================================================================
// BMI Category Functions
// ============================================================================

/**
 * Get BMI category using WHO 8-category classification
 */
export function getBMICategoryWHO8(bmi: number): BMICategoryWHO8 {
  if (bmi < 16.0) return 'severe-thinness';
  if (bmi < 17.0) return 'moderate-thinness';
  if (bmi < 18.5) return 'mild-thinness';
  if (bmi < 25.0) return 'normal';
  if (bmi < 30.0) return 'pre-obese';
  if (bmi < 35.0) return 'obese-i';
  if (bmi < 40.0) return 'obese-ii';
  return 'obese-iii';
}

/**
 * Get BMI category using WHO 4-category classification (simplified)
 */
export function getBMICategoryWHO4(bmi: number): BMICategoryWHO4 {
  if (bmi < 18.5) return 'underweight';
  if (bmi < 25.0) return 'normal';
  if (bmi < 30.0) return 'overweight';
  return 'obese';
}

/**
 * Get BMI category using Asian thresholds (LOWER thresholds)
 */
export function getBMICategoryAsian(bmi: number): BMICategoryAsian {
  if (bmi < 18.5) return 'underweight';
  if (bmi < 23.0) return 'normal';      // ⚠️ LOWER than WHO
  if (bmi < 25.0) return 'overweight';  // ⚠️ LOWER than WHO
  return 'obese';                        // ⚠️ LOWER than WHO
}

/**
 * Get BMI category based on threshold type
 */
export function getBMICategory(
  bmi: number,
  thresholdType: BMIThresholdType = 'WHO_8'
): BMICategory {
  switch (thresholdType) {
    case 'WHO_8':
      return getBMICategoryWHO8(bmi);
    case 'WHO_4':
      return getBMICategoryWHO4(bmi);
    case 'ASIAN':
      return getBMICategoryAsian(bmi);
    default:
      return getBMICategoryWHO8(bmi);
  }
}

/**
 * Get category details for a given BMI and threshold type
 */
export function getBMICategoryDetails(
  bmi: number,
  thresholdType: BMIThresholdType = 'WHO_8'
): BMICategoryDetails {
  const category = getBMICategory(bmi, thresholdType);

  switch (thresholdType) {
    case 'WHO_8':
      return WHO_8_CATEGORY_THRESHOLDS[category as BMICategoryWHO8];
    case 'WHO_4':
      return WHO_4_CATEGORY_THRESHOLDS[category as BMICategoryWHO4];
    case 'ASIAN':
      return ASIAN_CATEGORY_THRESHOLDS[category as BMICategoryAsian];
    default:
      return WHO_8_CATEGORY_THRESHOLDS[category as BMICategoryWHO8];
  }
}

// ============================================================================
// Healthy Range Functions
// ============================================================================

/**
 * Get healthy BMI range based on threshold type
 */
export function getHealthyBMIRange(
  thresholdType: BMIThresholdType = 'WHO_8'
): { min: number; max: number } {
  if (thresholdType === 'ASIAN') {
    // Asian healthy range: 18.5 - 22.9
    return { min: 18.5, max: 22.9 };
  }
  // WHO standard healthy range: 18.5 - 24.9
  return { min: 18.5, max: 24.9 };
}

/**
 * Calculate healthy weight range for a given height
 */
export function getHealthyWeightRange(
  heightM: number,
  unitSystem: UnitSystem = 'metric',
  thresholdType: BMIThresholdType = 'WHO_8'
): { min: number; max: number } {
  const healthyBMI = getHealthyBMIRange(thresholdType);
  const minWeight = healthyBMI.min * (heightM * heightM);
  const maxWeight = healthyBMI.max * (heightM * heightM);

  if (unitSystem === 'imperial') {
    return {
      min: parseFloat(kgToLbs(minWeight).toFixed(1)),
      max: parseFloat(kgToLbs(maxWeight).toFixed(1)),
    };
  }

  return {
    min: parseFloat(minWeight.toFixed(1)),
    max: parseFloat(maxWeight.toFixed(1)),
  };
}

// ============================================================================
// Main Calculation Function
// ============================================================================

/**
 * Main function to calculate all BMI-related metrics
 */
export function calculateBMIMetrics(input: BMIInput): BMIResult {
  const thresholdType = input.thresholdType || 'WHO_8';
  let heightM: number;
  let weightKg: number;

  // Convert to metric if necessary
  if (input.unitSystem === 'imperial') {
    heightM = cmToMeters(input.height * 2.54); // input.height is in inches
    weightKg = lbsToKg(input.weight);
  } else {
    heightM = cmToMeters(input.height);
    weightKg = input.weight;
  }

  const bmi = calculateBMI(weightKg, heightM);
  const bmiPrime = calculateBMIPrime(bmi);
  const ponderalIndex = calculatePonderalIndex(weightKg, heightM);
  const category = getBMICategory(bmi, thresholdType);
  const categoryDetails = getBMICategoryDetails(bmi, thresholdType);
  const healthyBMIRange = getHealthyBMIRange(thresholdType);
  const healthyWeightRange = getHealthyWeightRange(heightM, input.unitSystem, thresholdType);

  return {
    bmi: parseFloat(bmi.toFixed(1)),
    bmiPrime: parseFloat(bmiPrime.toFixed(2)),
    ponderalIndex: parseFloat(ponderalIndex.toFixed(1)),
    category,
    categoryDetails,
    healthyBMIRange,
    healthyWeightRange,
    thresholdType,
  };
}

/**
 * Get all category thresholds for a given type (for displaying charts/gauges)
 */
export function getAllCategoryThresholds(
  thresholdType: BMIThresholdType = 'WHO_8'
): Record<string, BMICategoryDetails> {
  switch (thresholdType) {
    case 'WHO_8':
      return WHO_8_CATEGORY_THRESHOLDS;
    case 'WHO_4':
      return WHO_4_CATEGORY_THRESHOLDS;
    case 'ASIAN':
      return ASIAN_CATEGORY_THRESHOLDS;
    default:
      return WHO_8_CATEGORY_THRESHOLDS;
  }
}
