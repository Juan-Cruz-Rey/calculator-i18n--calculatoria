export type CalculationMode = 'add' | 'subtract' | 'difference';
export type TimeUnit = 'days' | 'weeks' | 'months' | 'years';

export interface DateAddSubtractInput {
  startDate: Date;
  mode: 'add' | 'subtract';
  years?: number;
  months?: number;
  weeks?: number;
  days?: number;
}

export interface DateDifferenceInput {
  startDate: Date;
  endDate: Date;
  includeEndDate?: boolean;
}

export interface DateDifferenceResult {
  totalDays: number;
  years: number;
  months: number;
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  businessDays: number;
  weekdays: number;
  weekends: number;
}

export interface DateAddSubtractResult {
  resultDate: Date;
  dayOfWeek: string;
  dayOfYear: number;
  weekOfYear: number;
  isLeapYear: boolean;
}

/**
 * Check if a year is a leap year
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Get the number of days in a month
 */
export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Get day of week name
 */
export function getDayOfWeek(date: Date): string {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}

/**
 * Get day of year (1-366)
 */
export function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

/**
 * Get week of year (ISO 8601)
 */
export function getWeekOfYear(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
}

/**
 * Check if a date is a weekend
 */
export function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}

/**
 * Check if a date is a business day (Monday-Friday)
 */
export function isBusinessDay(date: Date): boolean {
  return !isWeekend(date);
}

/**
 * Add or subtract time from a date
 */
export function addSubtractDate(input: DateAddSubtractInput): DateAddSubtractResult {
  const { startDate, mode, years = 0, months = 0, weeks = 0, days = 0 } = input;
  const multiplier = mode === 'add' ? 1 : -1;

  const resultDate = new Date(startDate);

  // Add/subtract years
  if (years) {
    resultDate.setFullYear(resultDate.getFullYear() + years * multiplier);
  }

  // Add/subtract months
  if (months) {
    resultDate.setMonth(resultDate.getMonth() + months * multiplier);
  }

  // Add/subtract weeks and days
  const totalDays = (weeks * 7 + days) * multiplier;
  if (totalDays) {
    resultDate.setDate(resultDate.getDate() + totalDays);
  }

  return {
    resultDate,
    dayOfWeek: getDayOfWeek(resultDate),
    dayOfYear: getDayOfYear(resultDate),
    weekOfYear: getWeekOfYear(resultDate),
    isLeapYear: isLeapYear(resultDate.getFullYear()),
  };
}

/**
 * Calculate the difference between two dates
 */
export function calculateDateDifference(input: DateDifferenceInput): DateDifferenceResult {
  let { startDate, endDate, includeEndDate = false } = input;

  // Ensure start is before end
  if (startDate > endDate) {
    [startDate, endDate] = [endDate, startDate];
  }

  // Calculate total milliseconds
  const diffMs = endDate.getTime() - startDate.getTime() + (includeEndDate ? 86400000 : 0);

  // Calculate total days
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  // Calculate years, months, weeks, days
  let tempDate = new Date(startDate);
  let years = 0;
  let months = 0;

  // Calculate years
  while (
    new Date(tempDate.getFullYear() + 1, tempDate.getMonth(), tempDate.getDate()) <= endDate
  ) {
    years++;
    tempDate.setFullYear(tempDate.getFullYear() + 1);
  }

  // Calculate months
  while (
    new Date(tempDate.getFullYear(), tempDate.getMonth() + 1, tempDate.getDate()) <= endDate
  ) {
    months++;
    tempDate.setMonth(tempDate.getMonth() + 1);
  }

  // Calculate remaining days
  const remainingMs = endDate.getTime() - tempDate.getTime();
  const days = Math.floor(remainingMs / (1000 * 60 * 60 * 24));

  // Calculate weeks from total days
  const weeks = Math.floor(totalDays / 7);

  // Calculate hours and minutes from remaining time
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor(diffMs / (1000 * 60));

  // Count business days and weekdays/weekends
  let businessDays = 0;
  let weekdays = 0;
  let weekends = 0;

  const currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    if (isBusinessDay(currentDate)) {
      businessDays++;
      weekdays++;
    } else {
      weekends++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return {
    totalDays,
    years,
    months,
    weeks,
    days,
    hours,
    minutes,
    businessDays,
    weekdays,
    weekends,
  };
}

/**
 * Format a date to YYYY-MM-DD for input fields
 */
export function formatDateForInput(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Format a date for display (locale-aware)
 */
export function formatDateForDisplay(date: Date, locale: string = 'en-US'): string {
  return date.toLocaleDateString(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Parse a date string in YYYY-MM-DD format
 */
export function parseDateString(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}
