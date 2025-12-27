export type UnitSystem = 'metric' | 'imperial';
export type Gender = 'male' | 'female';
export type WHRCategory = 'low' | 'moderate' | 'high' | 'very-high';

export interface WaistHipInput {
  waist: number; // cm or inches
  hip: number; // cm or inches
  gender: Gender;
  unitSystem: UnitSystem;
}

export interface WaistHipResult {
  whr: number;
  category: WHRCategory;
  healthRisk: string;
}

/**
 * Convert inches to centimeters
 */
export function inchesToCm(inches: number): number {
  return inches * 2.54;
}

/**
 * Convert centimeters to inches
 */
export function cmToInches(cm: number): number {
  return cm / 2.54;
}

/**
 * Calculate Waist-to-Hip Ratio
 * Formula: WHR = waist circumference / hip circumference
 */
export function calculateWHR(waistCm: number, hipCm: number): number {
  if (waistCm <= 0 || hipCm <= 0) {
    throw new Error('Waist and hip measurements must be positive numbers');
  }
  return waistCm / hipCm;
}

/**
 * Determine WHR category and health risk based on gender-specific thresholds
 * Based on WHO (World Health Organization) standards
 */
export function getWHRCategory(whr: number, gender: Gender): WHRCategory {
  if (gender === 'male') {
    // Male thresholds
    if (whr < 0.90) return 'low';
    if (whr < 0.95) return 'moderate';
    if (whr < 1.00) return 'high';
    return 'very-high';
  } else {
    // Female thresholds
    if (whr < 0.80) return 'low';
    if (whr < 0.85) return 'moderate';
    if (whr < 0.90) return 'high';
    return 'very-high';
  }
}

/**
 * Get health risk description based on category
 */
export function getHealthRisk(category: WHRCategory): string {
  const risks = {
    'low': 'low',
    'moderate': 'moderate',
    'high': 'high',
    'very-high': 'very-high',
  };
  return risks[category];
}

/**
 * Main function to calculate WHR and related metrics
 */
export function calculateWaistHipMetrics(input: WaistHipInput): WaistHipResult {
  let waistCm: number;
  let hipCm: number;

  // Convert to metric if necessary
  if (input.unitSystem === 'imperial') {
    waistCm = inchesToCm(input.waist);
    hipCm = inchesToCm(input.hip);
  } else {
    waistCm = input.waist;
    hipCm = input.hip;
  }

  const whr = calculateWHR(waistCm, hipCm);
  const category = getWHRCategory(whr, input.gender);
  const healthRisk = getHealthRisk(category);

  return {
    whr: parseFloat(whr.toFixed(2)),
    category,
    healthRisk,
  };
}
