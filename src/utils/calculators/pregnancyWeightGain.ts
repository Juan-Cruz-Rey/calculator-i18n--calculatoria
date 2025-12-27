export type UnitSystem = 'metric' | 'imperial';
export type BMICategory = 'underweight' | 'normal' | 'overweight' | 'obese';

export interface PregnancyWeightGainInput {
  height: number; // cm or inches
  prePregnancyWeight: number; // kg or lbs
  currentWeight: number; // kg or lbs
  currentWeek: number; // 1-40
  isTwins: boolean;
  unitSystem: UnitSystem;
}

export interface WeightGainRecommendation {
  min: number;
  max: number;
  category: BMICategory;
}

export interface PregnancyWeightGainResult {
  prePregnancyBMI: number;
  category: BMICategory;
  currentWeightGain: number; // Current weight gain so far
  recommendedTotalGain: WeightGainRecommendation;
  recommendedWeeklyGain: { min: number; max: number }; // For 2nd and 3rd trimester
  recommendedCurrentGain: { min: number; max: number }; // Expected gain at current week
  isOnTrack: boolean;
  trimester: 1 | 2 | 3;
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
 * Get recommended total weight gain based on pre-pregnancy BMI and twin status
 * Based on IOM (Institute of Medicine) guidelines
 */
export function getRecommendedWeightGain(
  category: BMICategory,
  isTwins: boolean,
  unitSystem: UnitSystem = 'metric'
): WeightGainRecommendation {
  let minKg: number, maxKg: number;

  if (isTwins) {
    // Twin pregnancy recommendations
    switch (category) {
      case 'underweight':
        // No specific guideline for underweight twins, use normal range as approximation
        minKg = 17;
        maxKg = 25;
        break;
      case 'normal':
        minKg = 16.8; // 37 lbs
        maxKg = 24.5; // 54 lbs
        break;
      case 'overweight':
        minKg = 14.1; // 31 lbs
        maxKg = 22.7; // 50 lbs
        break;
      case 'obese':
        minKg = 11.3; // 25 lbs
        maxKg = 19.1; // 42 lbs
        break;
    }
  } else {
    // Single pregnancy recommendations
    switch (category) {
      case 'underweight':
        minKg = 12.7; // 28 lbs
        maxKg = 18.1; // 40 lbs
        break;
      case 'normal':
        minKg = 11.3; // 25 lbs
        maxKg = 15.9; // 35 lbs
        break;
      case 'overweight':
        minKg = 6.8; // 15 lbs
        maxKg = 11.3; // 25 lbs
        break;
      case 'obese':
        minKg = 5; // 11 lbs
        maxKg = 9.1; // 20 lbs
        break;
    }
  }

  if (unitSystem === 'imperial') {
    return {
      min: parseFloat(kgToLbs(minKg).toFixed(1)),
      max: parseFloat(kgToLbs(maxKg).toFixed(1)),
      category,
    };
  }

  return {
    min: parseFloat(minKg.toFixed(1)),
    max: parseFloat(maxKg.toFixed(1)),
    category,
  };
}

/**
 * Get recommended weekly weight gain for 2nd and 3rd trimester
 */
export function getRecommendedWeeklyGain(
  category: BMICategory,
  isTwins: boolean,
  unitSystem: UnitSystem = 'metric'
): { min: number; max: number } {
  let minKg: number, maxKg: number;

  if (isTwins) {
    // Twin pregnancy weekly gains (approximate)
    switch (category) {
      case 'underweight':
        minKg = 0.6;
        maxKg = 0.9;
        break;
      case 'normal':
        minKg = 0.7;
        maxKg = 0.9;
        break;
      case 'overweight':
        minKg = 0.5;
        maxKg = 0.8;
        break;
      case 'obese':
        minKg = 0.4;
        maxKg = 0.6;
        break;
    }
  } else {
    // Single pregnancy weekly gains
    switch (category) {
      case 'underweight':
        minKg = 0.45; // ~1 lb
        maxKg = 0.59; // ~1.3 lbs
        break;
      case 'normal':
        minKg = 0.36; // ~0.8 lbs
        maxKg = 0.45; // ~1 lb
        break;
      case 'overweight':
        minKg = 0.23; // ~0.5 lbs
        maxKg = 0.32; // ~0.7 lbs
        break;
      case 'obese':
        minKg = 0.18; // ~0.4 lbs
        maxKg = 0.27; // ~0.6 lbs
        break;
    }
  }

  if (unitSystem === 'imperial') {
    return {
      min: parseFloat(kgToLbs(minKg).toFixed(2)),
      max: parseFloat(kgToLbs(maxKg).toFixed(2)),
    };
  }

  return {
    min: parseFloat(minKg.toFixed(2)),
    max: parseFloat(maxKg.toFixed(2)),
  };
}

/**
 * Get current trimester based on week
 */
export function getTrimester(week: number): 1 | 2 | 3 {
  if (week <= 13) return 1;
  if (week <= 27) return 2;
  return 3;
}

/**
 * Calculate expected weight gain at current week
 * First trimester: 1-4 lbs (0.5-1.8 kg) total
 * Second and third trimester: steady weekly gain
 */
export function getRecommendedCurrentGain(
  week: number,
  category: BMICategory,
  isTwins: boolean,
  unitSystem: UnitSystem = 'metric'
): { min: number; max: number } {
  const trimester = getTrimester(week);

  // First trimester gain is minimal (1-4 lbs or 0.5-1.8 kg total)
  if (trimester === 1) {
    if (unitSystem === 'imperial') {
      return { min: 0, max: 4 };
    }
    return { min: 0, max: 1.8 };
  }

  // For 2nd and 3rd trimester, calculate based on weekly gain
  const weeklyGain = getRecommendedWeeklyGain(category, isTwins, unitSystem);
  const firstTrimesterGain = unitSystem === 'imperial' ? 2 : 0.9; // Average first trimester gain

  // Weeks since end of first trimester
  const weeksAfterFirst = week - 13;

  const minGain = firstTrimesterGain + (weeklyGain.min * weeksAfterFirst);
  const maxGain = firstTrimesterGain + (weeklyGain.max * weeksAfterFirst);

  return {
    min: parseFloat(minGain.toFixed(1)),
    max: parseFloat(maxGain.toFixed(1)),
  };
}

/**
 * Main function to calculate pregnancy weight gain metrics
 */
export function calculatePregnancyWeightGain(
  input: PregnancyWeightGainInput
): PregnancyWeightGainResult {
  // Validate inputs
  if (input.currentWeek < 1 || input.currentWeek > 40) {
    throw new Error('Current week must be between 1 and 40');
  }

  let heightM: number;
  let prePregnancyWeightKg: number;
  let currentWeightKg: number;

  // Convert to metric if necessary
  if (input.unitSystem === 'imperial') {
    heightM = cmToMeters(input.height * 2.54); // input.height is in inches
    prePregnancyWeightKg = lbsToKg(input.prePregnancyWeight);
    currentWeightKg = lbsToKg(input.currentWeight);
  } else {
    heightM = cmToMeters(input.height);
    prePregnancyWeightKg = input.prePregnancyWeight;
    currentWeightKg = input.currentWeight;
  }

  // Calculate pre-pregnancy BMI
  const prePregnancyBMI = calculateBMI(prePregnancyWeightKg, heightM);
  const category = getBMICategory(prePregnancyBMI);

  // Calculate current weight gain
  const currentWeightGainKg = currentWeightKg - prePregnancyWeightKg;
  const currentWeightGain = input.unitSystem === 'imperial'
    ? parseFloat(kgToLbs(currentWeightGainKg).toFixed(1))
    : parseFloat(currentWeightGainKg.toFixed(1));

  // Get recommendations
  const recommendedTotalGain = getRecommendedWeightGain(
    category,
    input.isTwins,
    input.unitSystem
  );

  const recommendedWeeklyGain = getRecommendedWeeklyGain(
    category,
    input.isTwins,
    input.unitSystem
  );

  const recommendedCurrentGain = getRecommendedCurrentGain(
    input.currentWeek,
    category,
    input.isTwins,
    input.unitSystem
  );

  // Determine if on track
  const isOnTrack =
    currentWeightGain >= recommendedCurrentGain.min &&
    currentWeightGain <= recommendedCurrentGain.max;

  const trimester = getTrimester(input.currentWeek);

  return {
    prePregnancyBMI: parseFloat(prePregnancyBMI.toFixed(1)),
    category,
    currentWeightGain,
    recommendedTotalGain,
    recommendedWeeklyGain,
    recommendedCurrentGain,
    isOnTrack,
    trimester,
  };
}
