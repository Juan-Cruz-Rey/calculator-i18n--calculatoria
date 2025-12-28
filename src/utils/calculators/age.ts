export interface AgeInput {
  birthDate: Date;
  targetDate?: Date; // Optional: Calculate age at a specific date (defaults to today)
}

export interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalMonths: number;
  totalWeeks: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
  nextBirthday: {
    date: Date;
    daysUntil: number;
    weekday: string;
  };
}

export interface AgeDifferenceInput {
  date1: Date;
  date2: Date;
}

export interface DateAtAgeInput {
  birthDate: Date;
  targetYears: number;
  targetMonths?: number;
  targetDays?: number;
}

/**
 * Get weekday name from date
 */
export function getWeekdayName(date: Date): string {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return weekdays[date.getDay()];
}

/**
 * Calculate the difference between two dates in years, months, and days
 */
export function calculateDateDifference(
  startDate: Date,
  endDate: Date
): { years: number; months: number; days: number } {
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  let days = endDate.getDate() - startDate.getDate();

  // Adjust for negative days
  if (days < 0) {
    months--;
    const prevMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
    days += prevMonth.getDate();
  }

  // Adjust for negative months
  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

/**
 * Calculate total days between two dates
 */
export function calculateTotalDays(startDate: Date, endDate: Date): number {
  const diffTime = endDate.getTime() - startDate.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Calculate next birthday information
 */
export function calculateNextBirthday(
  birthDate: Date,
  currentDate: Date = new Date()
): { date: Date; daysUntil: number; weekday: string } {
  const nextBirthday = new Date(
    currentDate.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );

  // If birthday has passed this year, move to next year
  if (nextBirthday < currentDate) {
    nextBirthday.setFullYear(currentDate.getFullYear() + 1);
  }

  const daysUntil = calculateTotalDays(currentDate, nextBirthday);
  const weekday = getWeekdayName(nextBirthday);

  return { date: nextBirthday, daysUntil, weekday };
}

/**
 * Main function to calculate age and all related metrics
 */
export function calculateAge(input: AgeInput): AgeResult {
  const targetDate = input.targetDate || new Date();

  // Validate dates
  if (input.birthDate > targetDate) {
    throw new Error('Birth date cannot be in the future');
  }

  // Calculate age in years, months, days
  const { years, months, days } = calculateDateDifference(input.birthDate, targetDate);

  // Calculate total values
  const totalDays = calculateTotalDays(input.birthDate, targetDate);
  const totalWeeks = Math.floor(totalDays / 7);
  const totalMonths = years * 12 + months;
  const totalHours = totalDays * 24;
  const totalMinutes = totalHours * 60;
  const totalSeconds = totalMinutes * 60;

  // Calculate next birthday
  const nextBirthday = calculateNextBirthday(input.birthDate, targetDate);

  return {
    years,
    months,
    days,
    totalMonths,
    totalWeeks,
    totalDays,
    totalHours,
    totalMinutes,
    totalSeconds,
    nextBirthday,
  };
}

/**
 * Calculate age difference between two people
 */
export function calculateAgeDifference(input: AgeDifferenceInput): {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  olderDate: Date;
  youngerDate: Date;
} {
  // Determine which date is older
  const olderDate = input.date1 < input.date2 ? input.date1 : input.date2;
  const youngerDate = input.date1 < input.date2 ? input.date2 : input.date1;

  const { years, months, days } = calculateDateDifference(olderDate, youngerDate);
  const totalDays = calculateTotalDays(olderDate, youngerDate);

  return {
    years,
    months,
    days,
    totalDays,
    olderDate,
    youngerDate,
  };
}

/**
 * Calculate what date someone will be a certain age
 */
export function calculateDateAtAge(input: DateAtAgeInput): Date {
  const targetDate = new Date(input.birthDate);

  // Add years
  targetDate.setFullYear(targetDate.getFullYear() + input.targetYears);

  // Add months if provided
  if (input.targetMonths) {
    targetDate.setMonth(targetDate.getMonth() + input.targetMonths);
  }

  // Add days if provided
  if (input.targetDays) {
    targetDate.setDate(targetDate.getDate() + input.targetDays);
  }

  return targetDate;
}

/**
 * Format a number with thousands separator
 */
export function formatNumber(num: number): string {
  return num.toLocaleString();
}
