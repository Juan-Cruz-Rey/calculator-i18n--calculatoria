export type UnitSystem = 'metric' | 'imperial';
export type ActivityLevel =
  | 'walking_slow'
  | 'walking_moderate'
  | 'walking_brisk'
  | 'running_slow'
  | 'running_moderate'
  | 'running_fast'
  | 'cycling_leisure'
  | 'cycling_moderate'
  | 'cycling_vigorous'
  | 'swimming_leisure'
  | 'swimming_moderate'
  | 'swimming_vigorous'
  | 'weightlifting'
  | 'yoga'
  | 'aerobics'
  | 'dancing'
  | 'hiking'
  | 'rowing'
  | 'basketball'
  | 'soccer'
  | 'tennis'
  | 'golf';

export interface CaloriesBurnedInput {
  activity: ActivityLevel;
  duration: number; // minutes
  weight: number; // kg or lbs
  unitSystem: UnitSystem;
}

export interface CaloriesBurnedResult {
  calories: number;
  met: number;
  caloriesPerMinute: number;
  caloriesPerHour: number;
}

/**
 * MET (Metabolic Equivalent of Task) values for different activities
 * Source: Compendium of Physical Activities
 */
export const MET_VALUES: Record<ActivityLevel, number> = {
  walking_slow: 2.0,           // < 2 mph, very slow
  walking_moderate: 3.5,       // 3.0 mph, moderate pace
  walking_brisk: 4.3,          // 3.5 mph, brisk pace
  running_slow: 6.0,           // 5 mph, jogging
  running_moderate: 9.8,       // 6.7 mph
  running_fast: 11.5,          // 8 mph
  cycling_leisure: 4.0,        // < 10 mph, leisure
  cycling_moderate: 8.0,       // 12-14 mph, moderate
  cycling_vigorous: 10.0,      // 14-16 mph, vigorous
  swimming_leisure: 6.0,       // Leisure, general
  swimming_moderate: 8.0,      // Moderate effort
  swimming_vigorous: 11.0,     // Vigorous effort
  weightlifting: 3.5,          // General weightlifting
  yoga: 2.5,                   // Hatha yoga
  aerobics: 7.3,              // High impact aerobics
  dancing: 4.5,               // General dancing
  hiking: 6.0,                // Cross-country hiking
  rowing: 7.0,                // Rowing machine, moderate
  basketball: 6.5,            // General basketball
  soccer: 7.0,                // General soccer
  tennis: 7.3,                // Singles tennis
  golf: 3.5,                  // Walking, carrying clubs
};

/**
 * Convert weight from pounds to kilograms
 */
export function lbsToKg(lbs: number): number {
  return lbs * 0.453592;
}

/**
 * Calculate calories burned per minute using MET formula
 * Formula: (MET × weight in kg × 3.5) / 200
 */
export function calculateCaloriesPerMinute(met: number, weightKg: number): number {
  if (weightKg <= 0 || met <= 0) {
    throw new Error('Weight and MET must be positive numbers');
  }
  return (met * weightKg * 3.5) / 200;
}

/**
 * Calculate total calories burned for a given duration
 */
export function calculateTotalCalories(
  caloriesPerMinute: number,
  durationMinutes: number
): number {
  if (durationMinutes <= 0) {
    throw new Error('Duration must be a positive number');
  }
  return caloriesPerMinute * durationMinutes;
}

/**
 * Main function to calculate all calories burned metrics
 */
export function calculateCaloriesBurned(input: CaloriesBurnedInput): CaloriesBurnedResult {
  let weightKg: number;

  // Convert to metric if necessary
  if (input.unitSystem === 'imperial') {
    weightKg = lbsToKg(input.weight);
  } else {
    weightKg = input.weight;
  }

  const met = MET_VALUES[input.activity];
  const caloriesPerMinute = calculateCaloriesPerMinute(met, weightKg);
  const calories = calculateTotalCalories(caloriesPerMinute, input.duration);
  const caloriesPerHour = caloriesPerMinute * 60;

  return {
    calories: parseFloat(calories.toFixed(1)),
    met: parseFloat(met.toFixed(1)),
    caloriesPerMinute: parseFloat(caloriesPerMinute.toFixed(2)),
    caloriesPerHour: parseFloat(caloriesPerHour.toFixed(1)),
  };
}
