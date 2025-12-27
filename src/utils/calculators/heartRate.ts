export type HeartRateZone = 'resting' | 'warmup' | 'fatburn' | 'cardio' | 'peak';

export interface HeartRateInput {
  age: number;
  restingHeartRate: number; // beats per minute
}

export interface HeartRateZoneData {
  name: HeartRateZone;
  min: number;
  max: number;
  percentage: string;
  benefits: string;
}

export interface HeartRateResult {
  maxHeartRate: number;
  restingHeartRate: number;
  heartRateReserve: number;
  zones: HeartRateZoneData[];
}

/**
 * Calculate maximum heart rate using the standard formula: 220 - age
 */
export function calculateMaxHeartRate(age: number): number {
  if (age <= 0 || age > 120) {
    throw new Error('Age must be between 1 and 120');
  }
  return 220 - age;
}

/**
 * Calculate Heart Rate Reserve (HRR) = Max HR - Resting HR
 * Used for Karvonen formula
 */
export function calculateHeartRateReserve(maxHR: number, restingHR: number): number {
  return maxHR - restingHR;
}

/**
 * Calculate target heart rate using Karvonen formula
 * Target HR = ((Max HR - Resting HR) × %Intensity) + Resting HR
 */
export function calculateTargetHeartRate(
  maxHR: number,
  restingHR: number,
  intensityPercent: number
): number {
  const hrr = calculateHeartRateReserve(maxHR, restingHR);
  return Math.round(hrr * (intensityPercent / 100) + restingHR);
}

/**
 * Get heart rate zone data based on intensity percentages
 */
export function getHeartRateZone(
  zoneName: HeartRateZone,
  maxHR: number,
  restingHR: number
): HeartRateZoneData {
  const zones: Record<
    HeartRateZone,
    { minPercent: number; maxPercent: number; percentage: string; benefits: string }
  > = {
    resting: {
      minPercent: 0,
      maxPercent: 0,
      percentage: '0%',
      benefits: 'recovery',
    },
    warmup: {
      minPercent: 50,
      maxPercent: 60,
      percentage: '50-60%',
      benefits: 'light',
    },
    fatburn: {
      minPercent: 60,
      maxPercent: 70,
      percentage: '60-70%',
      benefits: 'fatburn',
    },
    cardio: {
      minPercent: 70,
      maxPercent: 85,
      percentage: '70-85%',
      benefits: 'cardio',
    },
    peak: {
      minPercent: 85,
      maxPercent: 100,
      percentage: '85-100%',
      benefits: 'peak',
    },
  };

  const zone = zones[zoneName];
  const min = zoneName === 'resting' ? restingHR : calculateTargetHeartRate(maxHR, restingHR, zone.minPercent);
  const max = zoneName === 'resting' ? restingHR : calculateTargetHeartRate(maxHR, restingHR, zone.maxPercent);

  return {
    name: zoneName,
    min,
    max,
    percentage: zone.percentage,
    benefits: zone.benefits,
  };
}

/**
 * Calculate all heart rate zones
 */
export function calculateAllZones(maxHR: number, restingHR: number): HeartRateZoneData[] {
  const zoneNames: HeartRateZone[] = ['resting', 'warmup', 'fatburn', 'cardio', 'peak'];
  return zoneNames.map((zone) => getHeartRateZone(zone, maxHR, restingHR));
}

/**
 * Main function to calculate all heart rate metrics
 */
export function calculateHeartRateMetrics(input: HeartRateInput): HeartRateResult {
  if (input.restingHeartRate < 30 || input.restingHeartRate > 120) {
    throw new Error('Resting heart rate must be between 30 and 120 bpm');
  }

  const maxHeartRate = calculateMaxHeartRate(input.age);
  const heartRateReserve = calculateHeartRateReserve(maxHeartRate, input.restingHeartRate);
  const zones = calculateAllZones(maxHeartRate, input.restingHeartRate);

  return {
    maxHeartRate,
    restingHeartRate: input.restingHeartRate,
    heartRateReserve,
    zones,
  };
}
