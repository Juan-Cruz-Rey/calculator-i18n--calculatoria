export interface PeriodInput {
  lastPeriodDate: Date;
  cycleLength: number; // Average cycle length in days (default 28)
  periodLength: number; // Length of period in days (default 5)
}

export interface PeriodResult {
  nextPeriodDate: Date;
  nextPeriodEnd: Date;
  nextOvulationDate: Date;
  fertilityWindowStart: Date;
  fertilityWindowEnd: Date;
  upcomingPeriods: PeriodPrediction[];
  cycleDay: number;
  daysUntilNextPeriod: number;
  currentPhase: CyclePhase;
}

export interface PeriodPrediction {
  periodNumber: number;
  startDate: Date;
  endDate: Date;
  ovulationDate: Date;
}

export type CyclePhase = 'menstrual' | 'follicular' | 'ovulation' | 'luteal';

/**
 * Add days to a date
 */
export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Calculate difference in days between two dates
 */
export function daysBetween(date1: Date, date2: Date): number {
  const msPerDay = 24 * 60 * 60 * 1000;
  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
  return Math.floor((utc2 - utc1) / msPerDay);
}

/**
 * Calculate next period start date
 */
export function calculateNextPeriod(lastPeriodDate: Date, cycleLength: number): Date {
  return addDays(lastPeriodDate, cycleLength);
}

/**
 * Calculate ovulation date
 * Ovulation typically occurs 14 days before the next period
 */
export function calculateOvulationDate(nextPeriodDate: Date): Date {
  return addDays(nextPeriodDate, -14);
}

/**
 * Calculate fertility window
 * Fertile window is typically 5 days before ovulation and the day of ovulation
 */
export function calculateFertilityWindow(ovulationDate: Date): { start: Date; end: Date } {
  return {
    start: addDays(ovulationDate, -5),
    end: ovulationDate,
  };
}

/**
 * Determine current cycle phase
 */
export function getCurrentPhase(
  lastPeriodDate: Date,
  cycleLength: number,
  periodLength: number,
  currentDate: Date = new Date()
): CyclePhase {
  const daysSinceLastPeriod = daysBetween(lastPeriodDate, currentDate);
  const cycleDay = (daysSinceLastPeriod % cycleLength) + 1;

  // Menstrual phase (days 1-5 typically)
  if (cycleDay <= periodLength) {
    return 'menstrual';
  }

  // Follicular phase (after menstrual until ovulation)
  const ovulationDay = cycleLength - 14;
  if (cycleDay < ovulationDay - 2) {
    return 'follicular';
  }

  // Ovulation phase (2 days before and including ovulation day)
  if (cycleDay >= ovulationDay - 2 && cycleDay <= ovulationDay) {
    return 'ovulation';
  }

  // Luteal phase (after ovulation until next period)
  return 'luteal';
}

/**
 * Generate predictions for next N periods
 */
export function generatePeriodPredictions(
  lastPeriodDate: Date,
  cycleLength: number,
  periodLength: number,
  numberOfPeriods: number = 6
): PeriodPrediction[] {
  const predictions: PeriodPrediction[] = [];

  for (let i = 1; i <= numberOfPeriods; i++) {
    const periodStart = addDays(lastPeriodDate, cycleLength * i);
    const periodEnd = addDays(periodStart, periodLength - 1);
    const nextPeriod = addDays(periodStart, cycleLength);
    const ovulation = calculateOvulationDate(nextPeriod);

    predictions.push({
      periodNumber: i,
      startDate: periodStart,
      endDate: periodEnd,
      ovulationDate: ovulation,
    });
  }

  return predictions;
}

/**
 * Calculate current cycle day
 */
export function getCurrentCycleDay(
  lastPeriodDate: Date,
  cycleLength: number,
  currentDate: Date = new Date()
): number {
  const daysSinceLastPeriod = daysBetween(lastPeriodDate, currentDate);
  return (daysSinceLastPeriod % cycleLength) + 1;
}

/**
 * Main function to calculate all period metrics
 */
export function calculatePeriodMetrics(input: PeriodInput): PeriodResult {
  const { lastPeriodDate, cycleLength, periodLength } = input;
  const today = new Date();

  // Calculate next period
  const nextPeriodDate = calculateNextPeriod(lastPeriodDate, cycleLength);
  const nextPeriodEnd = addDays(nextPeriodDate, periodLength - 1);

  // Calculate ovulation
  const nextOvulationDate = calculateOvulationDate(addDays(nextPeriodDate, cycleLength));

  // Calculate fertility window
  const fertilityWindow = calculateFertilityWindow(nextOvulationDate);

  // Generate upcoming periods
  const upcomingPeriods = generatePeriodPredictions(lastPeriodDate, cycleLength, periodLength, 6);

  // Calculate cycle day
  const cycleDay = getCurrentCycleDay(lastPeriodDate, cycleLength, today);

  // Calculate days until next period
  const daysUntilNextPeriod = Math.max(0, daysBetween(today, nextPeriodDate));

  // Determine current phase
  const currentPhase = getCurrentPhase(lastPeriodDate, cycleLength, periodLength, today);

  return {
    nextPeriodDate,
    nextPeriodEnd,
    nextOvulationDate,
    fertilityWindowStart: fertilityWindow.start,
    fertilityWindowEnd: fertilityWindow.end,
    upcomingPeriods,
    cycleDay,
    daysUntilNextPeriod,
    currentPhase,
  };
}

/**
 * Format date to YYYY-MM-DD for input fields
 */
export function formatDateForInput(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Format date for display
 */
export function formatDate(date: Date, locale: string = 'es-ES'): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
