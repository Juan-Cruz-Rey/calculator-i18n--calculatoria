export type UnitSystem = 'metric' | 'imperial';
export type Gender = 'male' | 'female';
export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'veryActive' | 'extraActive';
export type Goal = 'maintain' | 'mildLoss' | 'moderateLoss' | 'extremeLoss' | 'mildGain' | 'moderateGain' | 'extremeGain';
export type DietType = 'balanced' | 'lowFat' | 'lowCarb' | 'highProtein';

export interface MacroInput {
  age: number;
  gender: Gender;
  height: number; // cm or inches
  weight: number; // kg or lbs
  activityLevel: ActivityLevel;
  goal: Goal;
  dietType: DietType;
  unitSystem: UnitSystem;
}

export interface MacroResult {
  bmr: number;
  tdee: number;
  goalCalories: number;
  protein: {
    grams: number;
    calories: number;
    percentage: number;
  };
  carbs: {
    grams: number;
    calories: number;
    percentage: number;
  };
  fats: {
    grams: number;
    calories: number;
    percentage: number;
  };
  weeklyWeightChange: number; // kg or lbs per week
}

// Caloric values per gram
const CALORIES_PER_GRAM = {
  protein: 4,
  carbs: 4,
  fat: 9,
};

// Activity level multipliers for TDEE calculation
const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,        // Little or no exercise
  light: 1.375,          // Light exercise 1-3 times/week
  moderate: 1.55,        // Moderate exercise 4-5 times/week
  active: 1.725,         // Daily exercise or intense exercise 3-4 times/week
  veryActive: 1.9,       // Intense exercise 6-7 times/week
  extraActive: 2.0,      // Very intense exercise daily or physical job
};

// Goal calorie adjustments (calories per day)
const GOAL_ADJUSTMENTS: Record<Goal, number> = {
  maintain: 0,
  mildLoss: -250,        // 0.5 lb/0.25 kg per week
  moderateLoss: -500,    // 1 lb/0.5 kg per week
  extremeLoss: -1000,    // 2 lb/1 kg per week
  mildGain: 250,         // 0.5 lb/0.25 kg per week
  moderateGain: 500,     // 1 lb/0.5 kg per week
  extremeGain: 1000,     // 2 lb/1 kg per week
};

// Diet type macro distributions (percentages)
const DIET_MACROS: Record<DietType, { protein: number; carbs: number; fats: number }> = {
  balanced: { protein: 30, carbs: 40, fats: 30 },
  lowFat: { protein: 30, carbs: 50, fats: 20 },
  lowCarb: { protein: 35, carbs: 20, fats: 45 },
  highProtein: { protein: 40, carbs: 30, fats: 30 },
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
 * Convert weight from kilograms to pounds
 */
export function kgToLbs(kg: number): number {
  return kg * 2.20462;
}

/**
 * Calculate BMR using Mifflin-St Jeor Equation
 * This is the most accurate formula for most people
 *
 * For men: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(years) + 5
 * For women: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(years) - 161
 */
export function calculateBMR(weightKg: number, heightCm: number, age: number, gender: Gender): number {
  if (weightKg <= 0 || heightCm <= 0 || age <= 0) {
    throw new Error('Weight, height, and age must be positive numbers');
  }

  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;

  if (gender === 'male') {
    return base + 5;
  } else {
    return base - 161;
  }
}

/**
 * Calculate TDEE (Total Daily Energy Expenditure)
 * TDEE = BMR × Activity Multiplier
 */
export function calculateTDEE(bmr: number, activityLevel: ActivityLevel): number {
  return bmr * ACTIVITY_MULTIPLIERS[activityLevel];
}

/**
 * Calculate goal calories based on TDEE and weight goal
 */
export function calculateGoalCalories(tdee: number, goal: Goal): number {
  const adjustment = GOAL_ADJUSTMENTS[goal];
  const goalCalories = tdee + adjustment;

  // Ensure minimum of 1200 calories for safety
  return Math.max(goalCalories, 1200);
}

/**
 * Calculate macronutrient distribution
 */
export function calculateMacros(goalCalories: number, dietType: DietType): {
  protein: { grams: number; calories: number; percentage: number };
  carbs: { grams: number; calories: number; percentage: number };
  fats: { grams: number; calories: number; percentage: number };
} {
  const distribution = DIET_MACROS[dietType];

  const proteinCalories = goalCalories * (distribution.protein / 100);
  const carbsCalories = goalCalories * (distribution.carbs / 100);
  const fatsCalories = goalCalories * (distribution.fats / 100);

  return {
    protein: {
      grams: Math.round(proteinCalories / CALORIES_PER_GRAM.protein),
      calories: Math.round(proteinCalories),
      percentage: distribution.protein,
    },
    carbs: {
      grams: Math.round(carbsCalories / CALORIES_PER_GRAM.carbs),
      calories: Math.round(carbsCalories),
      percentage: distribution.carbs,
    },
    fats: {
      grams: Math.round(fatsCalories / CALORIES_PER_GRAM.fat),
      calories: Math.round(fatsCalories),
      percentage: distribution.fats,
    },
  };
}

/**
 * Calculate expected weekly weight change
 */
export function calculateWeeklyWeightChange(goal: Goal, unitSystem: UnitSystem): number {
  const weeklyCalorieDeficit = GOAL_ADJUSTMENTS[goal] * 7;
  // 3500 calories = 1 lb, 7700 calories = 1 kg

  if (unitSystem === 'imperial') {
    return parseFloat((weeklyCalorieDeficit / 3500).toFixed(2));
  } else {
    return parseFloat((weeklyCalorieDeficit / 7700).toFixed(2));
  }
}

/**
 * Main function to calculate all macro-related metrics
 */
export function calculateMacroMetrics(input: MacroInput): MacroResult {
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

  const bmr = calculateBMR(weightKg, heightCm, input.age, input.gender);
  const tdee = calculateTDEE(bmr, input.activityLevel);
  const goalCalories = calculateGoalCalories(tdee, input.goal);
  const macros = calculateMacros(goalCalories, input.dietType);
  const weeklyWeightChange = calculateWeeklyWeightChange(input.goal, input.unitSystem);

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    goalCalories: Math.round(goalCalories),
    protein: macros.protein,
    carbs: macros.carbs,
    fats: macros.fats,
    weeklyWeightChange,
  };
}
