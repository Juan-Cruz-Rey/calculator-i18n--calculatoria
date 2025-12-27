export type UnitSystem = 'metric' | 'imperial';
export type BSAFormula = 'dubois' | 'mosteller' | 'haycock';

export interface BSAInput {
  height: number; // cm or inches
  weight: number; // kg or lbs
  unitSystem: UnitSystem;
}

export interface BSAResult {
  dubois: number;
  mosteller: number;
  haycock: number;
  averageBSA: number;
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
 * Convert height from inches to centimeters
 */
export function inchesToCm(inches: number): number {
  return inches * 2.54;
}

/**
 * Calculate BSA using the Du Bois formula
 * BSA (m²) = 0.007184 × height^0.725 × weight^0.425
 * where height is in cm and weight is in kg
 */
export function calculateDuBois(heightCm: number, weightKg: number): number {
  if (heightCm <= 0 || weightKg <= 0) {
    throw new Error('Height and weight must be positive numbers');
  }
  return 0.007184 * Math.pow(heightCm, 0.725) * Math.pow(weightKg, 0.425);
}

/**
 * Calculate BSA using the Mosteller formula
 * BSA (m²) = √(height × weight / 3600)
 * where height is in cm and weight is in kg
 * This is the most commonly used formula due to its simplicity and accuracy
 */
export function calculateMosteller(heightCm: number, weightKg: number): number {
  if (heightCm <= 0 || weightKg <= 0) {
    throw new Error('Height and weight must be positive numbers');
  }
  return Math.sqrt((heightCm * weightKg) / 3600);
}

/**
 * Calculate BSA using the Haycock formula
 * BSA (m²) = 0.024265 × height^0.3964 × weight^0.5378
 * where height is in cm and weight is in kg
 */
export function calculateHaycock(heightCm: number, weightKg: number): number {
  if (heightCm <= 0 || weightKg <= 0) {
    throw new Error('Height and weight must be positive numbers');
  }
  return 0.024265 * Math.pow(heightCm, 0.3964) * Math.pow(weightKg, 0.5378);
}

/**
 * Main function to calculate all BSA metrics using different formulas
 */
export function calculateBSAMetrics(input: BSAInput): BSAResult {
  let heightCm: number;
  let weightKg: number;

  // Convert to metric if necessary
  if (input.unitSystem === 'imperial') {
    heightCm = inchesToCm(input.height); // input.height is in inches
    weightKg = lbsToKg(input.weight);
  } else {
    heightCm = input.height;
    weightKg = input.weight;
  }

  const dubois = calculateDuBois(heightCm, weightKg);
  const mosteller = calculateMosteller(heightCm, weightKg);
  const haycock = calculateHaycock(heightCm, weightKg);
  const averageBSA = (dubois + mosteller + haycock) / 3;

  return {
    dubois: parseFloat(dubois.toFixed(3)),
    mosteller: parseFloat(mosteller.toFixed(3)),
    haycock: parseFloat(haycock.toFixed(3)),
    averageBSA: parseFloat(averageBSA.toFixed(3)),
  };
}
