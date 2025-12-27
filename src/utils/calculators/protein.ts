export type UnitSystem = 'metric' | 'imperial';
export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
export type Goal = 'maintain' | 'lose' | 'gain';

export interface ProteinInput {
  weight: number; // kg or lbs
  activityLevel: ActivityLevel;
  goal: Goal;
  unitSystem: UnitSystem;
}

export interface ProteinResult {
  dailyProtein: number; // grams per day
  proteinPerKg: number; // grams per kg of body weight
  caloriesFromProtein: number; // calories
  percentageOfDiet: number; // percentage (based on 2000 calorie diet)
  weightInKg: number; // weight converted to kg
}

/**
 * Convert weight from pounds to kilograms
 */
export function lbsToKg(lbs: number): number {
  return lbs * 0.453592;
}

/**
 * Get protein multiplier based on activity level and goal
 * Returns grams of protein per kg of body weight
 */
export function getProteinMultiplier(activityLevel: ActivityLevel, goal: Goal): number {
  // Base protein requirements by activity level
  const activityMultipliers: Record<ActivityLevel, number> = {
    sedentary: 0.8,      // Minimal activity
    light: 1.0,          // Light exercise 1-3 days/week
    moderate: 1.2,       // Moderate exercise 3-5 days/week
    active: 1.5,         // Active exercise 6-7 days/week
    very_active: 1.8,    // Very active, physical job or training twice per day
  };

  // Adjust based on goal
  const goalAdjustments: Record<Goal, number> = {
    maintain: 1.0,       // Maintain current weight
    lose: 1.2,           // Higher protein to preserve muscle during weight loss
    gain: 1.3,           // Higher protein to support muscle growth
  };

  const baseMultiplier = activityMultipliers[activityLevel];
  const goalAdjustment = goalAdjustments[goal];

  return baseMultiplier * goalAdjustment;
}

/**
 * Calculate daily protein intake
 */
export function calculateDailyProtein(weightKg: number, activityLevel: ActivityLevel, goal: Goal): number {
  const multiplier = getProteinMultiplier(activityLevel, goal);
  return weightKg * multiplier;
}

/**
 * Calculate calories from protein (4 calories per gram)
 */
export function calculateCaloriesFromProtein(proteinGrams: number): number {
  return proteinGrams * 4;
}

/**
 * Calculate percentage of diet from protein (based on 2000 calorie diet)
 */
export function calculateProteinPercentage(proteinCalories: number, totalCalories: number = 2000): number {
  return (proteinCalories / totalCalories) * 100;
}

/**
 * Main function to calculate all protein-related metrics
 */
export function calculateProteinMetrics(input: ProteinInput): ProteinResult {
  let weightKg: number;

  // Convert to metric if necessary
  if (input.unitSystem === 'imperial') {
    weightKg = lbsToKg(input.weight);
  } else {
    weightKg = input.weight;
  }

  if (weightKg <= 0) {
    throw new Error('Weight must be a positive number');
  }

  const proteinPerKg = getProteinMultiplier(input.activityLevel, input.goal);
  const dailyProtein = calculateDailyProtein(weightKg, input.activityLevel, input.goal);
  const caloriesFromProtein = calculateCaloriesFromProtein(dailyProtein);
  const percentageOfDiet = calculateProteinPercentage(caloriesFromProtein);

  return {
    dailyProtein: parseFloat(dailyProtein.toFixed(1)),
    proteinPerKg: parseFloat(proteinPerKg.toFixed(2)),
    caloriesFromProtein: parseFloat(caloriesFromProtein.toFixed(0)),
    percentageOfDiet: parseFloat(percentageOfDiet.toFixed(1)),
    weightInKg: parseFloat(weightKg.toFixed(1)),
  };
}
