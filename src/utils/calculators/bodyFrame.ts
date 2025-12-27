export type UnitSystem = 'metric' | 'imperial';
export type Gender = 'male' | 'female';
export type FrameSize = 'small' | 'medium' | 'large';

export interface BodyFrameInput {
  gender: Gender;
  height: number; // cm or inches
  wristCircumference?: number; // cm or inches
  elbowBreadth?: number; // cm or inches
  unitSystem: UnitSystem;
}

export interface BodyFrameResult {
  frameSize: FrameSize;
  method: 'wrist' | 'elbow';
  wristCircumference?: number;
  elbowBreadth?: number;
  heightCm: number;
  rValue?: number; // height/wrist ratio for wrist method
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
 * Calculate frame size using wrist circumference method
 * Based on height to wrist circumference ratio (r-value)
 */
export function calculateFrameSizeByWrist(
  heightCm: number,
  wristCircumferenceCm: number,
  gender: Gender
): FrameSize {
  const rValue = heightCm / wristCircumferenceCm;

  if (gender === 'male') {
    // Male thresholds
    if (rValue > 10.4) return 'small';
    if (rValue >= 9.6 && rValue <= 10.4) return 'medium';
    return 'large'; // r < 9.6
  } else {
    // Female thresholds
    if (rValue > 11) return 'small';
    if (rValue >= 10.1 && rValue <= 11) return 'medium';
    return 'large'; // r < 10.1
  }
}

/**
 * Calculate frame size using elbow breadth method
 * Based on height and elbow breadth measurements
 */
export function calculateFrameSizeByElbow(
  heightCm: number,
  elbowBreadthCm: number,
  gender: Gender
): FrameSize {
  const heightInches = cmToInches(heightCm);
  const elbowInches = cmToInches(elbowBreadthCm);

  if (gender === 'male') {
    // Male height categories and elbow breadth ranges
    if (heightInches >= 62 && heightInches <= 63) {
      if (elbowInches < 2.5) return 'small';
      if (elbowInches <= 2.875) return 'medium';
      return 'large';
    } else if (heightInches >= 64 && heightInches <= 67) {
      if (elbowInches < 2.625) return 'small';
      if (elbowInches <= 2.875) return 'medium';
      return 'large';
    } else if (heightInches >= 68 && heightInches <= 71) {
      if (elbowInches < 2.75) return 'small';
      if (elbowInches <= 3.0) return 'medium';
      return 'large';
    } else if (heightInches >= 72 && heightInches <= 75) {
      if (elbowInches < 2.75) return 'small';
      if (elbowInches <= 3.125) return 'medium';
      return 'large';
    } else if (heightInches >= 76) {
      if (elbowInches < 2.875) return 'small';
      if (elbowInches <= 3.25) return 'medium';
      return 'large';
    }
  } else {
    // Female height categories and elbow breadth ranges
    if (heightInches >= 58 && heightInches <= 59) {
      if (elbowInches < 2.25) return 'small';
      if (elbowInches <= 2.5) return 'medium';
      return 'large';
    } else if (heightInches >= 60 && heightInches <= 63) {
      if (elbowInches < 2.25) return 'small';
      if (elbowInches <= 2.5) return 'medium';
      return 'large';
    } else if (heightInches >= 64 && heightInches <= 67) {
      if (elbowInches < 2.375) return 'small';
      if (elbowInches <= 2.625) return 'medium';
      return 'large';
    } else if (heightInches >= 68 && heightInches <= 71) {
      if (elbowInches < 2.375) return 'small';
      if (elbowInches <= 2.625) return 'medium';
      return 'large';
    } else if (heightInches >= 72) {
      if (elbowInches < 2.5) return 'small';
      if (elbowInches <= 2.75) return 'medium';
      return 'large';
    }
  }

  // Default to medium if height is outside typical ranges
  return 'medium';
}

/**
 * Main function to calculate body frame size
 * Prefers wrist method if available, falls back to elbow method
 */
export function calculateBodyFrame(input: BodyFrameInput): BodyFrameResult {
  let heightCm: number;
  let wristCircumferenceCm: number | undefined;
  let elbowBreadthCm: number | undefined;

  // Convert to metric if necessary
  if (input.unitSystem === 'imperial') {
    heightCm = inchesToCm(input.height);
    wristCircumferenceCm = input.wristCircumference
      ? inchesToCm(input.wristCircumference)
      : undefined;
    elbowBreadthCm = input.elbowBreadth ? inchesToCm(input.elbowBreadth) : undefined;
  } else {
    heightCm = input.height;
    wristCircumferenceCm = input.wristCircumference;
    elbowBreadthCm = input.elbowBreadth;
  }

  // Prefer wrist method if wrist circumference is provided
  if (wristCircumferenceCm) {
    const frameSize = calculateFrameSizeByWrist(
      heightCm,
      wristCircumferenceCm,
      input.gender
    );
    const rValue = heightCm / wristCircumferenceCm;

    return {
      frameSize,
      method: 'wrist',
      wristCircumference: wristCircumferenceCm,
      elbowBreadth: elbowBreadthCm,
      heightCm,
      rValue: parseFloat(rValue.toFixed(2)),
    };
  }

  // Use elbow method if wrist not provided
  if (elbowBreadthCm) {
    const frameSize = calculateFrameSizeByElbow(heightCm, elbowBreadthCm, input.gender);

    return {
      frameSize,
      method: 'elbow',
      wristCircumference: wristCircumferenceCm,
      elbowBreadth: elbowBreadthCm,
      heightCm,
    };
  }

  // Throw error if neither measurement is provided
  throw new Error('Either wrist circumference or elbow breadth must be provided');
}

/**
 * Get reference ranges for wrist circumference based on gender
 */
export function getWristReferenceRanges(gender: Gender, unitSystem: UnitSystem = 'metric'): {
  small: { min: number; max: number };
  medium: { min: number; max: number };
  large: { min: number; max: number };
} {
  if (gender === 'male') {
    if (unitSystem === 'imperial') {
      return {
        small: { min: 5.5, max: 6.5 },
        medium: { min: 6.5, max: 7.5 },
        large: { min: 7.5, max: 8.5 },
      };
    }
    return {
      small: { min: 14, max: 16.5 },
      medium: { min: 16.5, max: 19 },
      large: { min: 19, max: 21.5 },
    };
  } else {
    if (unitSystem === 'imperial') {
      return {
        small: { min: 5, max: 6 },
        medium: { min: 6, max: 6.25 },
        large: { min: 6.25, max: 7 },
      };
    }
    return {
      small: { min: 12.7, max: 15.2 },
      medium: { min: 15.2, max: 15.9 },
      large: { min: 15.9, max: 17.8 },
    };
  }
}
