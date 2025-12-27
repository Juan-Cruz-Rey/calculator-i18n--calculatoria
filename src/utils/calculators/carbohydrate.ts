export type UnitSystem = 'metric' | 'imperial';
export type Gender = 'male' | 'female';
export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'extra';
export type Goal = 'loss' | 'maintain' | 'gain';
export type CarbIntakeLevel = 'low' | 'moderate' | 'high';

export interface CarbohydrateInput {
  age: number;
  gender: Gender;
  height: number; // cm or inches
  weight: number; // kg or lbs
  activityLevel: ActivityLevel;
  goal: Goal;
  unitSystem: UnitSystem;
}

export interface CarbRecommendation {
  level: CarbIntakeLevel;
  percentage: number;
  gramsPerDay: number;
  caloriesFromCarbs: number;
}

export interface CarbohydrateResult {
  bmr: number;
  tdee: number;
  adjustedCalories: number;
  recommendations: {
    low: CarbRecommendation;
    moderate: CarbRecommendation;
    high: CarbRecommendation;
  };
}

/**
 * Activity level multipliers for TDEE calculation
 */
const activityMultipliers: Record<ActivityLevel, number> = {
  sedentary: 1.2,    // Little or no exercise
  light: 1.375,      // Light exercise 1-3 days/week
  moderate: 1.55,    // Moderate exercise 3-5 days/week
  active: 1.725,     // Hard exercise 6-7 days/week
  extra: 1.9,        // Very hard exercise, physical job
};

/**
 * Calorie adjustments based on goals
 */
const goalAdjustments: Record<Goal, number> = {
  loss: -500,        // 500 calorie deficit for weight loss (~1 lb/week)
  maintain: 0,       // No adjustment for maintenance
  gain: 500,         // 500 calorie surplus for muscle gain
};

/**
 * Carbohydrate percentage ranges for different intake levels
 */
const carbPercentages = {
  low: { min: 10, max: 30, recommended: 20 },
  moderate: { min: 30, max: 50, recommended: 40 },
  high: { min: 50, max: 70, recommended: 60 },
};

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
 * Calculate BMR using Mifflin-St Jeor Equation
 * More accurate than Harris-Benedict for modern populations
 */
export function calculateBMR(weightKg: number, heightCm: number, age: number, gender: Gender): number {
  if (weightKg <= 0 || heightCm <= 0 || age <= 0) {
    throw new Error('Weight, height, and age must be positive numbers');
  }

  // Mifflin-St Jeor Equation
  // Men: BMR = 10W + 6.25H - 5A + 5
  // Women: BMR = 10W + 6.25H - 5A - 161
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;

  if (gender === 'male') {
    return base + 5;
  } else {
    return base - 161;
  }
}

/**
 * Calculate TDEE (Total Daily Energy Expenditure)
 * TDEE = BMR × Activity Level Multiplier
 */
export function calculateTDEE(bmr: number, activityLevel: ActivityLevel): number {
  return bmr * activityMultipliers[activityLevel];
}

/**
 * Adjust calories based on goal
 */
export function adjustCaloriesForGoal(tdee: number, goal: Goal): number {
  return tdee + goalAdjustments[goal];
}

/**
 * Calculate carbohydrate grams from percentage of calories
 * 1 gram of carbohydrate = 4 calories
 */
export function calculateCarbGrams(totalCalories: number, percentage: number): number {
  const carbCalories = totalCalories * (percentage / 100);
  return carbCalories / 4;
}

/**
 * Create carbohydrate recommendation for a specific intake level
 */
export function createCarbRecommendation(
  totalCalories: number,
  level: CarbIntakeLevel
): CarbRecommendation {
  const percentage = carbPercentages[level].recommended;
  const gramsPerDay = calculateCarbGrams(totalCalories, percentage);
  const caloriesFromCarbs = gramsPerDay * 4;

  return {
    level,
    percentage,
    gramsPerDay: parseFloat(gramsPerDay.toFixed(1)),
    caloriesFromCarbs: parseFloat(caloriesFromCarbs.toFixed(0)),
  };
}

/**
 * Main function to calculate carbohydrate recommendations
 */
export function calculateCarbohydrateNeeds(input: CarbohydrateInput): CarbohydrateResult {
  let heightCm: number;
  let weightKg: number;

  // Convert to metric if necessary
  if (input.unitSystem === 'imperial') {
    heightCm = input.height * 2.54; // input.height is in inches
    weightKg = lbsToKg(input.weight);
  } else {
    heightCm = input.height;
    weightKg = input.weight;
  }

  // Calculate BMR
  const bmr = calculateBMR(weightKg, heightCm, input.age, input.gender);

  // Calculate TDEE
  const tdee = calculateTDEE(bmr, input.activityLevel);

  // Adjust calories for goal
  const adjustedCalories = adjustCaloriesForGoal(tdee, input.goal);

  // Calculate recommendations for all three carb intake levels
  const recommendations = {
    low: createCarbRecommendation(adjustedCalories, 'low'),
    moderate: createCarbRecommendation(adjustedCalories, 'moderate'),
    high: createCarbRecommendation(adjustedCalories, 'high'),
  };

  return {
    bmr: parseFloat(bmr.toFixed(0)),
    tdee: parseFloat(tdee.toFixed(0)),
    adjustedCalories: parseFloat(adjustedCalories.toFixed(0)),
    recommendations,
  };
}

/**
 * Get carbohydrate percentage ranges for display
 */
export function getCarbPercentageRanges() {
  return carbPercentages;
}

/**
 * Get minimum daily carbohydrate intake (130g recommended by dietary guidelines)
 */
export function getMinimumDailyCarbs(): number {
  return 130;
}
