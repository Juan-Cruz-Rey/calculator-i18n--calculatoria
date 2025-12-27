export type UnitSystem = 'metric' | 'imperial';
export type CalculationMode = 'pace' | 'time' | 'distance';

export interface PaceInput {
  mode: CalculationMode;
  distance?: number;
  distanceUnit: 'km' | 'mi' | 'm' | 'yd';
  time?: number; // in seconds
  pace?: number; // in seconds per km or per mile
  paceUnit: 'min/km' | 'min/mi';
}

export interface PaceResult {
  pace?: number; // seconds per km or mile
  time?: number; // seconds
  distance?: number; // in km or miles
  paceFormatted?: string;
  timeFormatted?: string;
  distanceFormatted?: string;
  splits: SplitTime[];
  commonRaces: RaceTime[];
}

export interface SplitTime {
  distance: number;
  distanceUnit: string;
  time: number;
  timeFormatted: string;
}

export interface RaceTime {
  name: string;
  distance: number;
  distanceUnit: string;
  time: number;
  timeFormatted: string;
  pace: number;
  paceFormatted: string;
}

/**
 * Convert time string (hh:mm:ss or mm:ss) to seconds
 */
export function timeStringToSeconds(timeStr: string): number {
  const parts = timeStr.split(':').map(p => parseInt(p, 10) || 0);

  if (parts.length === 3) {
    // hh:mm:ss
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  } else if (parts.length === 2) {
    // mm:ss
    return parts[0] * 60 + parts[1];
  }

  return 0;
}

/**
 * Convert seconds to formatted time string (hh:mm:ss or mm:ss)
 */
export function secondsToTimeString(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Convert distance to kilometers
 */
export function toKilometers(distance: number, unit: string): number {
  switch (unit) {
    case 'km':
      return distance;
    case 'mi':
      return distance * 1.60934;
    case 'm':
      return distance / 1000;
    case 'yd':
      return distance * 0.0009144;
    default:
      return distance;
  }
}

/**
 * Convert distance from kilometers to specified unit
 */
export function fromKilometers(distanceKm: number, unit: string): number {
  switch (unit) {
    case 'km':
      return distanceKm;
    case 'mi':
      return distanceKm / 1.60934;
    case 'm':
      return distanceKm * 1000;
    case 'yd':
      return distanceKm / 0.0009144;
    default:
      return distanceKm;
  }
}

/**
 * Convert pace to seconds per kilometer
 */
export function paceToSecondsPerKm(pace: number, unit: string): number {
  if (unit === 'min/km') {
    return pace;
  } else if (unit === 'min/mi') {
    return pace / 1.60934;
  }
  return pace;
}

/**
 * Convert pace from seconds per km to specified unit
 */
export function paceFromSecondsPerKm(pacePerKm: number, unit: string): number {
  if (unit === 'min/km') {
    return pacePerKm;
  } else if (unit === 'min/mi') {
    return pacePerKm * 1.60934;
  }
  return pacePerKm;
}

/**
 * Calculate pace from time and distance
 */
export function calculatePace(timeSeconds: number, distanceKm: number): number {
  if (distanceKm <= 0 || timeSeconds <= 0) {
    throw new Error('Time and distance must be positive numbers');
  }
  return timeSeconds / distanceKm; // seconds per km
}

/**
 * Calculate time from pace and distance
 */
export function calculateTime(pacePerKm: number, distanceKm: number): number {
  if (distanceKm <= 0 || pacePerKm <= 0) {
    throw new Error('Pace and distance must be positive numbers');
  }
  return pacePerKm * distanceKm; // total seconds
}

/**
 * Calculate distance from pace and time
 */
export function calculateDistance(pacePerKm: number, timeSeconds: number): number {
  if (pacePerKm <= 0 || timeSeconds <= 0) {
    throw new Error('Pace and time must be positive numbers');
  }
  return timeSeconds / pacePerKm; // km
}

/**
 * Generate split times for various distances
 */
export function generateSplits(pacePerKm: number, unit: string): SplitTime[] {
  const splits: SplitTime[] = [];
  const distances = unit === 'min/km'
    ? [1, 5, 10, 21.0975, 42.195] // km
    : [1, 5, 10, 13.1094, 26.2188]; // miles

  const distanceUnit = unit === 'min/km' ? 'km' : 'mi';

  for (const dist of distances) {
    const distKm = unit === 'min/km' ? dist : toKilometers(dist, 'mi');
    const time = calculateTime(pacePerKm, distKm);

    splits.push({
      distance: dist,
      distanceUnit,
      time,
      timeFormatted: secondsToTimeString(time),
    });
  }

  return splits;
}

/**
 * Common race distances with times
 */
export function getCommonRaces(pacePerKm: number, paceUnit: string): RaceTime[] {
  const races = [
    { name: '5K', distance: 5, unit: 'km' },
    { name: '10K', distance: 10, unit: 'km' },
    { name: 'Half Marathon', distance: 21.0975, unit: 'km' },
    { name: 'Marathon', distance: 42.195, unit: 'km' },
  ];

  return races.map(race => {
    const time = calculateTime(pacePerKm, race.distance);
    const pace = paceFromSecondsPerKm(pacePerKm, paceUnit);

    return {
      name: race.name,
      distance: race.distance,
      distanceUnit: race.unit,
      time,
      timeFormatted: secondsToTimeString(time),
      pace,
      paceFormatted: secondsToTimeString(pace),
    };
  });
}

/**
 * Main function to calculate pace metrics
 */
export function calculatePaceMetrics(input: PaceInput): PaceResult {
  const result: PaceResult = {
    splits: [],
    commonRaces: [],
  };

  // Convert distance to km
  const distanceKm = input.distance ? toKilometers(input.distance, input.distanceUnit) : 0;

  switch (input.mode) {
    case 'pace': {
      // Calculate pace from time and distance
      if (!input.time || !distanceKm) {
        throw new Error('Time and distance are required to calculate pace');
      }

      const pacePerKm = calculatePace(input.time, distanceKm);
      const pace = paceFromSecondsPerKm(pacePerKm, input.paceUnit);

      result.pace = pace;
      result.paceFormatted = secondsToTimeString(pace);
      result.splits = generateSplits(pacePerKm, input.paceUnit);
      result.commonRaces = getCommonRaces(pacePerKm, input.paceUnit);
      break;
    }

    case 'time': {
      // Calculate time from pace and distance
      if (!input.pace || !distanceKm) {
        throw new Error('Pace and distance are required to calculate time');
      }

      const pacePerKm = paceToSecondsPerKm(input.pace, input.paceUnit);
      const time = calculateTime(pacePerKm, distanceKm);

      result.time = time;
      result.timeFormatted = secondsToTimeString(time);
      result.splits = generateSplits(pacePerKm, input.paceUnit);
      result.commonRaces = getCommonRaces(pacePerKm, input.paceUnit);
      break;
    }

    case 'distance': {
      // Calculate distance from pace and time
      if (!input.pace || !input.time) {
        throw new Error('Pace and time are required to calculate distance');
      }

      const pacePerKm = paceToSecondsPerKm(input.pace, input.paceUnit);
      const calculatedDistanceKm = calculateDistance(pacePerKm, input.time);
      const distance = fromKilometers(calculatedDistanceKm, input.distanceUnit);

      result.distance = distance;
      result.distanceFormatted = distance.toFixed(2);
      result.splits = generateSplits(pacePerKm, input.paceUnit);
      result.commonRaces = getCommonRaces(pacePerKm, input.paceUnit);
      break;
    }
  }

  return result;
}
