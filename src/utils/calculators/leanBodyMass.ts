export type UnitSystem = 'metric' | 'imperial';
export type Gender = 'male' | 'female';
export type LBMFormula = 'boer' | 'james' | 'hume';

export interface LBMInput {
  age: number;
  gender: Gender;
  height: number; // cm or inches
  weight: number; // kg or lbs
  unitSystem: UnitSystem;
}

export interface FormulaResult {
  leanBodyMass: number; // kg
  fatMass: number; // kg
  bodyFatPercentage: number; // %
}

export interface LBMResult {
  boer: FormulaResult;
  james: FormulaResult;
  hume: FormulaResult;
  average: FormulaResult;
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
 * Convert weight from kilograms to pounds
 */
export function kgToLbs(kg: number): number {
  return kg * 2.20462;
}

/**
 * Calculate Lean Body Mass using Boer formula
 * Males: LBM = 0.407 × W + 0.267 × H - 19.2
 * Females: LBM = 0.252 × W + 0.473 × H - 48.3
 * W = weight in kg, H = height in cm
 */
export function calculateBoerLBM(weightKg: number, heightCm: number, gender: Gender): number {
  if (gender === 'male') {
    return 0.407 * weightKg + 0.267 * heightCm - 19.2;
  } else {
    return 0.252 * weightKg + 0.473 * heightCm - 48.3;
  }
}

/**
 * Calculate Lean Body Mass using James formula
 * Males: LBM = 1.1 × W - 128 × (W/H)²
 * Females: LBM = 1.07 × W - 148 × (W/H)²
 * W = weight in kg, H = height in cm
 */
export function calculateJamesLBM(weightKg: number, heightCm: number, gender: Gender): number {
  const ratio = weightKg / heightCm;
  const ratioSquared = ratio * ratio;

  if (gender === 'male') {
    return 1.1 * weightKg - 128 * ratioSquared;
  } else {
    return 1.07 * weightKg - 148 * ratioSquared;
  }
}

/**
 * Calculate Lean Body Mass using Hume formula
 * Males: LBM = 0.32810 × W + 0.33929 × H - 29.5336
 * Females: LBM = 0.29569 × W + 0.41813 × H - 43.2933
 * W = weight in kg, H = height in cm
 */
export function calculateHumeLBM(weightKg: number, heightCm: number, gender: Gender): number {
  if (gender === 'male') {
    return 0.32810 * weightKg + 0.33929 * heightCm - 29.5336;
  } else {
    return 0.29569 * weightKg + 0.41813 * heightCm - 43.2933;
  }
}

/**
 * Calculate Fat Mass from total weight and lean body mass
 */
export function calculateFatMass(weightKg: number, leanBodyMassKg: number): number {
  return weightKg - leanBodyMassKg;
}

/**
 * Calculate Body Fat Percentage
 */
export function calculateBodyFatPercentage(fatMassKg: number, weightKg: number): number {
  if (weightKg <= 0) {
    throw new Error('Weight must be positive');
  }
  return (fatMassKg / weightKg) * 100;
}

/**
 * Create a formula result object
 */
function createFormulaResult(lbmKg: number, weightKg: number): FormulaResult {
  const fatMass = calculateFatMass(weightKg, lbmKg);
  const bodyFatPercentage = calculateBodyFatPercentage(fatMass, weightKg);

  return {
    leanBodyMass: parseFloat(lbmKg.toFixed(2)),
    fatMass: parseFloat(fatMass.toFixed(2)),
    bodyFatPercentage: parseFloat(bodyFatPercentage.toFixed(1)),
  };
}

/**
 * Calculate average of three formula results
 */
function calculateAverage(boer: FormulaResult, james: FormulaResult, hume: FormulaResult, weightKg: number): FormulaResult {
  const avgLBM = (boer.leanBodyMass + james.leanBodyMass + hume.leanBodyMass) / 3;
  return createFormulaResult(avgLBM, weightKg);
}

/**
 * Main function to calculate all LBM metrics using all formulas
 */
export function calculateLBMMetrics(input: LBMInput): LBMResult {
  let heightCm: number;
  let weightKg: number;

  // Validate age
  if (input.age < 2 || input.age > 120) {
    throw new Error('Age must be between 2 and 120 years');
  }

  // Convert to metric if necessary
  if (input.unitSystem === 'imperial') {
    heightCm = input.height * 2.54; // input.height is in inches
    weightKg = lbsToKg(input.weight);
  } else {
    heightCm = input.height;
    weightKg = input.weight;
  }

  // Validate inputs
  if (heightCm <= 0 || weightKg <= 0) {
    throw new Error('Height and weight must be positive numbers');
  }

  // Calculate LBM using all three formulas
  const boerLBM = calculateBoerLBM(weightKg, heightCm, input.gender);
  const jamesLBM = calculateJamesLBM(weightKg, heightCm, input.gender);
  const humeLBM = calculateHumeLBM(weightKg, heightCm, input.gender);

  // Create formula results
  const boerResult = createFormulaResult(boerLBM, weightKg);
  const jamesResult = createFormulaResult(jamesLBM, weightKg);
  const humeResult = createFormulaResult(humeLBM, weightKg);
  const averageResult = calculateAverage(boerResult, jamesResult, humeResult, weightKg);

  return {
    boer: boerResult,
    james: jamesResult,
    hume: humeResult,
    average: averageResult,
  };
}

/**
 * Convert results to imperial units if needed
 */
export function convertResultsToImperial(results: LBMResult): LBMResult {
  const convertFormula = (result: FormulaResult): FormulaResult => ({
    leanBodyMass: parseFloat(kgToLbs(result.leanBodyMass).toFixed(2)),
    fatMass: parseFloat(kgToLbs(result.fatMass).toFixed(2)),
    bodyFatPercentage: result.bodyFatPercentage, // Percentage stays the same
  });

  return {
    boer: convertFormula(results.boer),
    james: convertFormula(results.james),
    hume: convertFormula(results.hume),
    average: convertFormula(results.average),
  };
}
