export interface OvulationInput {
  lastPeriodDate: Date;
  cycleLength: number; // Default: 28 days
}

export interface OvulationResult {
  ovulationDate: Date;
  fertileWindowStart: Date;
  fertileWindowEnd: Date;
  nextPeriodDate: Date;
  daysUntilOvulation: number;
  isInFertileWindow: boolean;
}

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
 * Calculate ovulation date
 * Ovulation typically occurs 14 days before the next period
 */
export function calculateOvulationDate(lastPeriodDate: Date, cycleLength: number): Date {
  // Ovulation typically occurs 14 days before the next period
  const daysUntilOvulation = cycleLength - 14;
  return addDays(lastPeriodDate, daysUntilOvulation);
}

/**
 * Calculate fertile window
 * Fertile window is typically 5-6 days:
 * - 5 days before ovulation
 * - Day of ovulation
 * Some sources consider it 6 days total (5 before + ovulation day)
 */
export function calculateFertileWindow(ovulationDate: Date): { start: Date; end: Date } {
  // Fertile window: 5 days before ovulation + ovulation day
  const start = addDays(ovulationDate, -5);
  const end = ovulationDate; // The day of ovulation itself

  return { start, end };
}

/**
 * Calculate next period date
 */
export function calculateNextPeriod(lastPeriodDate: Date, cycleLength: number): Date {
  return addDays(lastPeriodDate, cycleLength);
}

/**
 * Check if current date is in fertile window
 */
export function isInFertileWindow(currentDate: Date, windowStart: Date, windowEnd: Date): boolean {
  const current = currentDate.setHours(0, 0, 0, 0);
  const start = windowStart.setHours(0, 0, 0, 0);
  const end = windowEnd.setHours(0, 0, 0, 0);

  return current >= start && current <= end;
}

/**
 * Main function to calculate ovulation metrics
 */
export function calculateOvulation(input: OvulationInput): OvulationResult {
  const { lastPeriodDate, cycleLength } = input;

  // Calculate ovulation date
  const ovulationDate = calculateOvulationDate(lastPeriodDate, cycleLength);

  // Calculate fertile window
  const { start: fertileWindowStart, end: fertileWindowEnd } = calculateFertileWindow(ovulationDate);

  // Calculate next period
  const nextPeriodDate = calculateNextPeriod(lastPeriodDate, cycleLength);

  // Calculate days until ovulation
  const today = new Date();
  const daysUntilOvulation = daysBetween(today, ovulationDate);

  // Check if currently in fertile window
  const currentlyInFertileWindow = isInFertileWindow(today, fertileWindowStart, fertileWindowEnd);

  return {
    ovulationDate,
    fertileWindowStart,
    fertileWindowEnd,
    nextPeriodDate,
    daysUntilOvulation,
    isInFertileWindow: currentlyInFertileWindow,
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
