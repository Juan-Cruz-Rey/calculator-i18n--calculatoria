export type UnitSystem = 'metric' | 'imperial';
export type Gender = 'male' | 'female';
export type BodyType = 'ectomorph' | 'mesomorph' | 'endomorph';
export type FrameSize = 'small' | 'medium' | 'large';

export interface BodyTypeInput {
  gender: Gender;
  height: number; // cm or inches
  wristCircumference: number; // cm or inches
  ankleCircumference: number; // cm or inches
  unitSystem: UnitSystem;
}

export interface BodyTypeResult {
  bodyType: BodyType;
  frameSize: FrameSize;
  wristToHeightRatio: number;
  ankleToHeightRatio: number;
  wristCircumference: number; // in selected unit system
  ankleCircumference: number; // in selected unit system
  height: number; // in selected unit system
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
 * Determine frame size based on wrist circumference and height
 * Based on standard anthropometric measurements
 */
export function calculateFrameSize(
  wristCm: number,
  heightCm: number,
  gender: Gender
): FrameSize {
  const r = heightCm / wristCm;

  if (gender === 'male') {
    // Male frame size ratios
    if (r > 10.4) return 'small';
    if (r >= 9.6) return 'medium';
    return 'large';
  } else {
    // Female frame size ratios
    if (r > 11.0) return 'small';
    if (r >= 10.1) return 'medium';
    return 'large';
  }
}

/**
 * Determine body type based on wrist, ankle, and height measurements
 * Uses a combination of frame size and skeletal proportions
 */
export function calculateBodyType(
  wristCm: number,
  ankleCm: number,
  heightCm: number,
  gender: Gender
): BodyType {
  const wristToHeight = heightCm / wristCm;
  const ankleToHeight = heightCm / ankleCm;
  const frameSize = calculateFrameSize(wristCm, heightCm, gender);

  // Calculate a combined score
  // Higher ratios indicate more ectomorphic traits
  const averageRatio = (wristToHeight + ankleToHeight) / 2;

  if (gender === 'male') {
    // Male body type classification
    if (frameSize === 'small' && averageRatio > 10.5) {
      return 'ectomorph';
    } else if (frameSize === 'large' && averageRatio < 9.5) {
      return 'endomorph';
    } else if (frameSize === 'medium' || (averageRatio >= 9.5 && averageRatio <= 10.5)) {
      return 'mesomorph';
    } else if (averageRatio > 10.5) {
      return 'ectomorph';
    } else {
      return 'endomorph';
    }
  } else {
    // Female body type classification
    if (frameSize === 'small' && averageRatio > 11.0) {
      return 'ectomorph';
    } else if (frameSize === 'large' && averageRatio < 10.0) {
      return 'endomorph';
    } else if (frameSize === 'medium' || (averageRatio >= 10.0 && averageRatio <= 11.0)) {
      return 'mesomorph';
    } else if (averageRatio > 11.0) {
      return 'ectomorph';
    } else {
      return 'endomorph';
    }
  }
}

/**
 * Main function to calculate body type and all related metrics
 */
export function calculateBodyTypeMetrics(input: BodyTypeInput): BodyTypeResult {
  let heightCm: number;
  let wristCm: number;
  let ankleCm: number;

  // Convert to metric if necessary
  if (input.unitSystem === 'imperial') {
    heightCm = inchesToCm(input.height);
    wristCm = inchesToCm(input.wristCircumference);
    ankleCm = inchesToCm(input.ankleCircumference);
  } else {
    heightCm = input.height;
    wristCm = input.wristCircumference;
    ankleCm = input.ankleCircumference;
  }

  const bodyType = calculateBodyType(wristCm, ankleCm, heightCm, input.gender);
  const frameSize = calculateFrameSize(wristCm, heightCm, input.gender);
  const wristToHeightRatio = heightCm / wristCm;
  const ankleToHeightRatio = heightCm / ankleCm;

  return {
    bodyType,
    frameSize,
    wristToHeightRatio: parseFloat(wristToHeightRatio.toFixed(2)),
    ankleToHeightRatio: parseFloat(ankleToHeightRatio.toFixed(2)),
    wristCircumference: parseFloat(
      input.unitSystem === 'imperial'
        ? input.wristCircumference.toFixed(2)
        : input.wristCircumference.toFixed(1)
    ),
    ankleCircumference: parseFloat(
      input.unitSystem === 'imperial'
        ? input.ankleCircumference.toFixed(2)
        : input.ankleCircumference.toFixed(1)
    ),
    height: parseFloat(
      input.unitSystem === 'imperial'
        ? input.height.toFixed(2)
        : input.height.toFixed(1)
    ),
  };
}
