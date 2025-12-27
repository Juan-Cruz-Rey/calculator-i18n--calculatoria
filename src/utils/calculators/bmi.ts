export type UnitSystem = 'metric' | 'imperial';
export type Gender = 'male' | 'female';
export type BMICategory = 'underweight' | 'normal' | 'overweight' | 'obese';

export interface BMIInput {
  age: number;
  gender: Gender;
  height: number; // cm or inches
  weight: number; // kg or lbs
  unitSystem: UnitSystem;
}

export interface BMIResult {
  bmi: number;
  bmiPrime: number;
  ponderalIndex: number;
  category: BMICategory;
  healthyBMIRange: { min: number; max: number };
  healthyWeightRange: { min: number; max: number };
}

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

/**
 * Determine BMI category based on WHO standards
 */
export function getBMICategory(bmi: number): BMICategory {
  if (bmi < 18.5) return 'underweight';
  if (bmi < 25) return 'normal';
  if (bmi < 30) return 'overweight';
  return 'obese';
}

/**
 * Get healthy BMI range (18.5 - 24.9)
 */
export function getHealthyBMIRange(): { min: number; max: number } {
  return { min: 18.5, max: 24.9 };
}

/**
 * Calculate healthy weight range for a given height
 */
export function getHealthyWeightRange(
  heightM: number,
  unitSystem: UnitSystem = 'metric'
): { min: number; max: number } {
  const healthyBMI = getHealthyBMIRange();
  const minWeight = healthyBMI.min * (heightM * heightM);
  const maxWeight = healthyBMI.max * (heightM * heightM);

  if (unitSystem === 'imperial') {
    return {
      min: parseFloat((minWeight * 2.20462).toFixed(1)),
      max: parseFloat((maxWeight * 2.20462).toFixed(1)),
    };
  }

  return {
    min: parseFloat(minWeight.toFixed(1)),
    max: parseFloat(maxWeight.toFixed(1)),
  };
}

/**
 * Main function to calculate all BMI-related metrics
 */
export function calculateBMIMetrics(input: BMIInput): BMIResult {
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
  const category = getBMICategory(bmi);
  const healthyBMIRange = getHealthyBMIRange();
  const healthyWeightRange = getHealthyWeightRange(heightM, input.unitSystem);

  return {
    bmi: parseFloat(bmi.toFixed(1)),
    bmiPrime: parseFloat(bmiPrime.toFixed(2)),
    ponderalIndex: parseFloat(ponderalIndex.toFixed(1)),
    category,
    healthyBMIRange,
    healthyWeightRange,
  };
}
