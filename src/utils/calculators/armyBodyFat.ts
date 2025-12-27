export type UnitSystem = 'metric' | 'imperial';
export type Gender = 'male' | 'female';
export type ArmyStandard = 'pass' | 'fail';

export interface ArmyBodyFatInput {
  age: number;
  gender: Gender;
  height: number; // cm or inches
  neck: number; // cm or inches
  waist: number; // cm or inches
  hip?: number; // cm or inches (required for females)
  unitSystem: UnitSystem;
}

export interface ArmyBodyFatResult {
  bodyFatPercentage: number;
  maxAllowedPercentage: number;
  standard: ArmyStandard;
  ageGroup: string;
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
 * Get maximum allowed body fat percentage based on age and gender
 * According to US Army Regulation 600-9
 */
export function getMaxAllowedBodyFat(age: number, gender: Gender): { max: number; ageGroup: string } {
  if (gender === 'male') {
    if (age >= 17 && age <= 20) return { max: 20, ageGroup: '17-20' };
    if (age >= 21 && age <= 27) return { max: 22, ageGroup: '21-27' };
    if (age >= 28 && age <= 39) return { max: 24, ageGroup: '28-39' };
    return { max: 26, ageGroup: '40+' };
  } else {
    // female
    if (age >= 17 && age <= 20) return { max: 30, ageGroup: '17-20' };
    if (age >= 21 && age <= 27) return { max: 32, ageGroup: '21-27' };
    if (age >= 28 && age <= 39) return { max: 34, ageGroup: '28-39' };
    return { max: 36, ageGroup: '40+' };
  }
}

/**
 * Calculate body fat percentage using US Army formula
 *
 * Male formula: % Body Fat = 86.010 × log10(abdomen - neck) - 70.041 × log10(height) + 36.76
 * Female formula: % Body Fat = 163.205 × log10(waist + hip - neck) - 97.684 × log10(height) - 78.387
 *
 * Note: For metric (cm), replace constants:
 * - Male: 36.76 → 30.30
 * - Female: -78.387 → -104.912
 */
export function calculateArmyBodyFat(
  height: number,
  neck: number,
  waist: number,
  hip: number | undefined,
  gender: Gender,
  unitSystem: UnitSystem
): number {
  let heightValue: number;
  let neckValue: number;
  let waistValue: number;
  let hipValue: number | undefined;

  // Convert to inches if metric
  if (unitSystem === 'metric') {
    heightValue = cmToInches(height);
    neckValue = cmToInches(neck);
    waistValue = cmToInches(waist);
    hipValue = hip ? cmToInches(hip) : undefined;
  } else {
    heightValue = height;
    neckValue = neck;
    waistValue = waist;
    hipValue = hip;
  }

  if (heightValue <= 0 || neckValue <= 0 || waistValue <= 0) {
    throw new Error('All measurements must be positive numbers');
  }

  let bodyFat: number;

  if (gender === 'male') {
    // Male formula using inches
    bodyFat = 86.010 * Math.log10(waistValue - neckValue) - 70.041 * Math.log10(heightValue) + 36.76;
  } else {
    // Female formula using inches
    if (!hipValue || hipValue <= 0) {
      throw new Error('Hip measurement is required for females');
    }
    bodyFat = 163.205 * Math.log10(waistValue + hipValue - neckValue) - 97.684 * Math.log10(heightValue) - 78.387;
  }

  return bodyFat;
}

/**
 * Main function to calculate Army body fat metrics
 */
export function calculateArmyBodyFatMetrics(input: ArmyBodyFatInput): ArmyBodyFatResult {
  // Validate input
  if (input.gender === 'female' && !input.hip) {
    throw new Error('Hip measurement is required for females');
  }

  // Calculate body fat percentage
  const bodyFatPercentage = calculateArmyBodyFat(
    input.height,
    input.neck,
    input.waist,
    input.hip,
    input.gender,
    input.unitSystem
  );

  // Get max allowed and age group
  const { max: maxAllowedPercentage, ageGroup } = getMaxAllowedBodyFat(input.age, input.gender);

  // Determine if passes Army standard
  const standard: ArmyStandard = bodyFatPercentage <= maxAllowedPercentage ? 'pass' : 'fail';

  return {
    bodyFatPercentage: parseFloat(bodyFatPercentage.toFixed(1)),
    maxAllowedPercentage,
    standard,
    ageGroup,
  };
}
