export type CalculationMode = 'wakeup' | 'bedtime';

export interface SleepInput {
  mode: CalculationMode;
  time: string; // HH:MM format (24-hour)
}

export interface SleepTime {
  time: string; // HH:MM format (24-hour)
  cycles: number;
  totalHours: number;
}

export interface SleepResult {
  mode: CalculationMode;
  inputTime: string;
  suggestions: SleepTime[];
}

const SLEEP_CYCLE_MINUTES = 90; // Average sleep cycle duration
const FALL_ASLEEP_MINUTES = 14; // Average time to fall asleep

/**
 * Parse time string in HH:MM format to minutes since midnight
 */
export function parseTimeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

/**
 * Convert minutes since midnight to HH:MM format
 */
export function minutesToTimeString(minutes: number): string {
  // Handle negative minutes and minutes >= 1440 (24 hours)
  const normalizedMinutes = ((minutes % 1440) + 1440) % 1440;
  const hours = Math.floor(normalizedMinutes / 60);
  const mins = normalizedMinutes % 60;
  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}

/**
 * Calculate wake up times based on a bedtime
 * Returns 4-6 optimal wake up times (4-6 complete sleep cycles)
 */
export function calculateWakeUpTimes(bedtime: string): SleepTime[] {
  const bedtimeMinutes = parseTimeToMinutes(bedtime);
  const sleepStartMinutes = bedtimeMinutes + FALL_ASLEEP_MINUTES;

  const suggestions: SleepTime[] = [];

  // Generate suggestions for 4, 5, and 6 sleep cycles (6-9 hours)
  for (let cycles = 4; cycles <= 6; cycles++) {
    const totalSleepMinutes = cycles * SLEEP_CYCLE_MINUTES;
    const wakeUpMinutes = sleepStartMinutes + totalSleepMinutes;
    const totalHours = (totalSleepMinutes + FALL_ASLEEP_MINUTES) / 60;

    suggestions.push({
      time: minutesToTimeString(wakeUpMinutes),
      cycles,
      totalHours: parseFloat(totalHours.toFixed(1)),
    });
  }

  return suggestions;
}

/**
 * Calculate bedtimes for a target wake up time
 * Returns 4-6 optimal bedtimes (4-6 complete sleep cycles)
 */
export function calculateBedtimes(wakeUpTime: string): SleepTime[] {
  const wakeUpMinutes = parseTimeToMinutes(wakeUpTime);

  const suggestions: SleepTime[] = [];

  // Generate suggestions for 4, 5, and 6 sleep cycles (6-9 hours)
  // We need to go backwards from wake up time
  for (let cycles = 4; cycles <= 6; cycles++) {
    const totalSleepMinutes = cycles * SLEEP_CYCLE_MINUTES;
    const sleepStartMinutes = wakeUpMinutes - totalSleepMinutes;
    const bedtimeMinutes = sleepStartMinutes - FALL_ASLEEP_MINUTES;
    const totalHours = (totalSleepMinutes + FALL_ASLEEP_MINUTES) / 60;

    suggestions.push({
      time: minutesToTimeString(bedtimeMinutes),
      cycles,
      totalHours: parseFloat(totalHours.toFixed(1)),
    });
  }

  // Reverse the array so the most sleep is first
  return suggestions.reverse();
}

/**
 * Main function to calculate sleep times based on mode
 */
export function calculateSleepTimes(input: SleepInput): SleepResult {
  const { mode, time } = input;

  if (!time || !/^\d{2}:\d{2}$/.test(time)) {
    throw new Error('Invalid time format. Please use HH:MM format.');
  }

  const suggestions = mode === 'wakeup'
    ? calculateWakeUpTimes(time)
    : calculateBedtimes(time);

  return {
    mode,
    inputTime: time,
    suggestions,
  };
}

/**
 * Format time from 24-hour to 12-hour format (for display)
 */
export function formatTime12Hour(time: string): string {
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
  return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
}
