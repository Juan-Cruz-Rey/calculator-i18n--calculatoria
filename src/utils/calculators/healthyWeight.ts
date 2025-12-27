export type UnitSystem = 'metric' | 'imperial';
export type Gender = 'male' | 'female';
export type BMICategory = 'underweight' | 'normal' | 'overweight' | 'obese';

export interface HealthyWeightInput {
  age: number;
  gender: Gender;
  height: number; // cm or inches
  currentWeight?: number; // kg or lbs (optional for calculating weight to lose/gain)
  unitSystem: UnitSystem;
}

export interface IdealWeightResults {
  robinson: number;
  miller: number;
  devine: number;
  hamwi: number;
  hamwiSmallFrame: number;
  hamwiLargeFrame: number;
}

export interface HealthyWeightResult {
  currentBMI?: number;
  currentCategory?: BMICategory;
  healthyBMIRange: { min: number; max: number };
  healthyWeightRange: { min: number; max: number };
  idealWeights: IdealWeightResults;
  weightToLose?: number;
  weightToGain?: number;
  isHealthy?: boolean;
}

/**
 * Convert height from imperial (feet and inches) to centimeters
 */
export function imperialHeightToCm(feet: number, inches: number): number {
  return (feet * 12 + inches) * 2.54;
}

/**
 * Convert height from centimeters to inches
 */
export function cmToInches(cm: number): number {
  return cm / 2.54;
}

/**
 * Convert height from inches to centimeters
 */
export function inchesToCm(inches: number): number {
  return inches * 2.54;
}

/**
 * Convert weight from pounds to kilograms
 */
export function lbsToKg(lbs: number): number {
  return lbs * 0.453592;
}

/**
 * Convert weight from kilograms to pounds
 */
export function kgToLbs(kg: number): number {
  return kg * 2.20462;
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
 * Determine BMI category based on WHO standards
 */
export function getBMICategory(bmi: number): BMICategory {
  if (bmi < 18.5) return 'underweight';
  if (bmi < 25) return 'normal';
  if (bmi < 30) return 'overweight';
  return 'obese';
}

/**
 * Get healthy BMI range (18.5 - 25.0) according to WHO
 */
export function getHealthyBMIRange(): { min: number; max: number } {
  return { min: 18.5, max: 25.0 };
}

/**
 * Calculate healthy weight range for a given height based on BMI
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
 * Calculate ideal weight using Robinson formula (1983)
 * Men: 52 kg + 1.9 kg per inch over 5 feet
 * Women: 49 kg + 1.7 kg per inch over 5 feet
 */
export function calculateRobinsonWeight(heightCm: number, gender: Gender): number {
  const heightInches = cmToInches(heightCm);
  const inchesOver5Feet = Math.max(0, heightInches - 60);

  if (gender === 'male') {
    return 52 + (1.9 * inchesOver5Feet);
  } else {
    return 49 + (1.7 * inchesOver5Feet);
  }
}

/**
 * Calculate ideal weight using Miller formula (1983)
 * Men: 56.2 kg + 1.41 kg per inch over 5 feet
 * Women: 53.1 kg + 1.36 kg per inch over 5 feet
 */
export function calculateMillerWeight(heightCm: number, gender: Gender): number {
  const heightInches = cmToInches(heightCm);
  const inchesOver5Feet = Math.max(0, heightInches - 60);

  if (gender === 'male') {
    return 56.2 + (1.41 * inchesOver5Feet);
  } else {
    return 53.1 + (1.36 * inchesOver5Feet);
  }
}

/**
 * Calculate ideal weight using Devine formula (1974)
 * Men: 50.0 kg + 2.3 kg per inch over 5 feet
 * Women: 45.5 kg + 2.3 kg per inch over 5 feet
 */
export function calculateDevineWeight(heightCm: number, gender: Gender): number {
  const heightInches = cmToInches(heightCm);
  const inchesOver5Feet = Math.max(0, heightInches - 60);

  if (gender === 'male') {
    return 50.0 + (2.3 * inchesOver5Feet);
  } else {
    return 45.5 + (2.3 * inchesOver5Feet);
  }
}

/**
 * Calculate ideal weight using Hamwi formula (1964)
 * Men: 48.0 kg + 2.7 kg per inch over 5 feet
 * Women: 45.5 kg + 2.2 kg per inch over 5 feet
 */
export function calculateHamwiWeight(heightCm: number, gender: Gender): number {
  const heightInches = cmToInches(heightCm);
  const inchesOver5Feet = Math.max(0, heightInches - 60);

  if (gender === 'male') {
    return 48.0 + (2.7 * inchesOver5Feet);
  } else {
    return 45.5 + (2.2 * inchesOver5Feet);
  }
}

/**
 * Calculate all ideal weight formulas
 */
export function calculateIdealWeights(
  heightCm: number,
  gender: Gender,
  unitSystem: UnitSystem = 'metric'
): IdealWeightResults {
  const robinson = calculateRobinsonWeight(heightCm, gender);
  const miller = calculateMillerWeight(heightCm, gender);
  const devine = calculateDevineWeight(heightCm, gender);
  const hamwi = calculateHamwiWeight(heightCm, gender);
  const hamwiSmallFrame = hamwi * 0.9; // 10% less for small frame
  const hamwiLargeFrame = hamwi * 1.1; // 10% more for large frame

  if (unitSystem === 'imperial') {
    return {
      robinson: parseFloat(kgToLbs(robinson).toFixed(1)),
      miller: parseFloat(kgToLbs(miller).toFixed(1)),
      devine: parseFloat(kgToLbs(devine).toFixed(1)),
      hamwi: parseFloat(kgToLbs(hamwi).toFixed(1)),
      hamwiSmallFrame: parseFloat(kgToLbs(hamwiSmallFrame).toFixed(1)),
      hamwiLargeFrame: parseFloat(kgToLbs(hamwiLargeFrame).toFixed(1)),
    };
  }

  return {
    robinson: parseFloat(robinson.toFixed(1)),
    miller: parseFloat(miller.toFixed(1)),
    devine: parseFloat(devine.toFixed(1)),
    hamwi: parseFloat(hamwi.toFixed(1)),
    hamwiSmallFrame: parseFloat(hamwiSmallFrame.toFixed(1)),
    hamwiLargeFrame: parseFloat(hamwiLargeFrame.toFixed(1)),
  };
}

/**
 * Main function to calculate healthy weight metrics
 */
export function calculateHealthyWeight(input: HealthyWeightInput): HealthyWeightResult {
  let heightM: number;
  let heightCm: number;
  let currentWeightKg: number | undefined;

  // Convert to metric if necessary
  if (input.unitSystem === 'imperial') {
    heightCm = inchesToCm(input.height); // input.height is in inches
    heightM = cmToMeters(heightCm);
    if (input.currentWeight !== undefined) {
      currentWeightKg = lbsToKg(input.currentWeight);
    }
  } else {
    heightCm = input.height;
    heightM = cmToMeters(input.height);
    currentWeightKg = input.currentWeight;
  }

  const healthyBMIRange = getHealthyBMIRange();
  const healthyWeightRange = getHealthyWeightRange(heightM, input.unitSystem);
  const idealWeights = calculateIdealWeights(heightCm, input.gender, input.unitSystem);

  let currentBMI: number | undefined;
  let currentCategory: BMICategory | undefined;
  let weightToLose: number | undefined;
  let weightToGain: number | undefined;
  let isHealthy: boolean | undefined;

  if (currentWeightKg !== undefined) {
    currentBMI = parseFloat(calculateBMI(currentWeightKg, heightM).toFixed(1));
    currentCategory = getBMICategory(currentBMI);
    isHealthy = currentCategory === 'normal';

    const currentWeightInUserUnit = input.unitSystem === 'imperial'
      ? parseFloat(kgToLbs(currentWeightKg).toFixed(1))
      : parseFloat(currentWeightKg.toFixed(1));

    // Calculate weight to lose or gain to reach healthy range
    if (currentCategory === 'overweight' || currentCategory === 'obese') {
      weightToLose = parseFloat((currentWeightInUserUnit - healthyWeightRange.max).toFixed(1));
    } else if (currentCategory === 'underweight') {
      weightToGain = parseFloat((healthyWeightRange.min - currentWeightInUserUnit).toFixed(1));
    }
  }

  return {
    currentBMI,
    currentCategory,
    healthyBMIRange,
    healthyWeightRange,
    idealWeights,
    weightToLose,
    weightToGain,
    isHealthy,
  };
}
