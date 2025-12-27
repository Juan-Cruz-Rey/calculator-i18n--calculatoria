export type CalculationMethod = 'lmp' | 'conception' | 'dueDate';

export interface PregnancyInput {
  method: CalculationMethod;
  date: Date;
  cycleLength?: number; // For LMP method (default 28 days)
}

export interface PregnancyResult {
  dueDate: Date;
  conceptionDate: Date;
  currentWeek: number;
  currentDay: number;
  trimester: number;
  percentComplete: number;
  daysRemaining: number;
  milestones: PregnancyMilestone[];
}

export interface PregnancyMilestone {
  week: number;
  date: Date;
  title: string;
  description: string;
  type: 'development' | 'test' | 'milestone';
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
 * Calculate due date from LMP (Last Menstrual Period)
 * Uses Naegele's rule: LMP + 280 days (40 weeks)
 */
export function calculateDueDateFromLMP(lmpDate: Date, cycleLength: number = 28): Date {
  // Naegele's rule: Add 280 days to LMP
  // Adjust for cycle length: if cycle is not 28 days, add/subtract the difference
  const adjustment = cycleLength - 28;
  const totalDays = 280 + adjustment;
  return addDays(lmpDate, totalDays);
}

/**
 * Calculate due date from conception date
 * Due date is 266 days (38 weeks) after conception
 */
export function calculateDueDateFromConception(conceptionDate: Date): Date {
  return addDays(conceptionDate, 266);
}

/**
 * Calculate conception date from LMP
 * Typically occurs about 14 days after LMP (for a 28-day cycle)
 */
export function calculateConceptionFromLMP(lmpDate: Date, cycleLength: number = 28): Date {
  // Ovulation typically occurs 14 days before the next period
  // For a 28-day cycle, this is day 14
  // For other cycles, adjust accordingly
  const ovulationDay = cycleLength - 14;
  return addDays(lmpDate, ovulationDay);
}

/**
 * Calculate LMP from due date
 * Reverse of Naegele's rule
 */
export function calculateLMPFromDueDate(dueDate: Date, cycleLength: number = 28): Date {
  const adjustment = cycleLength - 28;
  const totalDays = 280 + adjustment;
  return addDays(dueDate, -totalDays);
}

/**
 * Calculate conception date from due date
 */
export function calculateConceptionFromDueDate(dueDate: Date): Date {
  return addDays(dueDate, -266);
}

/**
 * Calculate current pregnancy week and day
 */
export function calculateCurrentWeek(lmpDate: Date, currentDate: Date = new Date()): { week: number; day: number } {
  const daysSinceLMP = daysBetween(lmpDate, currentDate);

  if (daysSinceLMP < 0) {
    return { week: 0, day: 0 };
  }

  const week = Math.floor(daysSinceLMP / 7);
  const day = daysSinceLMP % 7;

  return { week, day };
}

/**
 * Determine current trimester
 * First trimester: 0-13 weeks
 * Second trimester: 14-27 weeks
 * Third trimester: 28-40 weeks
 */
export function getTrimester(week: number): number {
  if (week <= 13) return 1;
  if (week <= 27) return 2;
  return 3;
}

/**
 * Calculate pregnancy completion percentage
 */
export function getPercentComplete(week: number, day: number): number {
  const totalDays = week * 7 + day;
  const pregnancyDays = 280; // 40 weeks
  return Math.min(Math.round((totalDays / pregnancyDays) * 100), 100);
}

/**
 * Generate pregnancy milestones
 */
export function getPregnancyMilestones(lmpDate: Date): PregnancyMilestone[] {
  const milestones: PregnancyMilestone[] = [
    {
      week: 4,
      date: addDays(lmpDate, 28),
      title: 'milestone.week4',
      description: 'milestone.week4Desc',
      type: 'development',
    },
    {
      week: 8,
      date: addDays(lmpDate, 56),
      title: 'milestone.week8',
      description: 'milestone.week8Desc',
      type: 'test',
    },
    {
      week: 12,
      date: addDays(lmpDate, 84),
      title: 'milestone.week12',
      description: 'milestone.week12Desc',
      type: 'test',
    },
    {
      week: 13,
      date: addDays(lmpDate, 91),
      title: 'milestone.week13',
      description: 'milestone.week13Desc',
      type: 'milestone',
    },
    {
      week: 16,
      date: addDays(lmpDate, 112),
      title: 'milestone.week16',
      description: 'milestone.week16Desc',
      type: 'development',
    },
    {
      week: 20,
      date: addDays(lmpDate, 140),
      title: 'milestone.week20',
      description: 'milestone.week20Desc',
      type: 'test',
    },
    {
      week: 24,
      date: addDays(lmpDate, 168),
      title: 'milestone.week24',
      description: 'milestone.week24Desc',
      type: 'development',
    },
    {
      week: 28,
      date: addDays(lmpDate, 196),
      title: 'milestone.week28',
      description: 'milestone.week28Desc',
      type: 'milestone',
    },
    {
      week: 32,
      date: addDays(lmpDate, 224),
      title: 'milestone.week32',
      description: 'milestone.week32Desc',
      type: 'development',
    },
    {
      week: 36,
      date: addDays(lmpDate, 252),
      title: 'milestone.week36',
      description: 'milestone.week36Desc',
      type: 'test',
    },
    {
      week: 40,
      date: addDays(lmpDate, 280),
      title: 'milestone.week40',
      description: 'milestone.week40Desc',
      type: 'milestone',
    },
  ];

  return milestones;
}

/**
 * Main function to calculate all pregnancy metrics
 */
export function calculatePregnancyMetrics(input: PregnancyInput): PregnancyResult {
  let dueDate: Date;
  let conceptionDate: Date;
  let lmpDate: Date;

  const cycleLength = input.cycleLength || 28;

  // Calculate based on input method
  switch (input.method) {
    case 'lmp':
      lmpDate = input.date;
      dueDate = calculateDueDateFromLMP(lmpDate, cycleLength);
      conceptionDate = calculateConceptionFromLMP(lmpDate, cycleLength);
      break;

    case 'conception':
      conceptionDate = input.date;
      dueDate = calculateDueDateFromConception(conceptionDate);
      lmpDate = calculateLMPFromDueDate(dueDate, cycleLength);
      break;

    case 'dueDate':
      dueDate = input.date;
      conceptionDate = calculateConceptionFromDueDate(dueDate);
      lmpDate = calculateLMPFromDueDate(dueDate, cycleLength);
      break;
  }

  const today = new Date();
  const { week, day } = calculateCurrentWeek(lmpDate, today);
  const trimester = getTrimester(week);
  const percentComplete = getPercentComplete(week, day);
  const daysRemaining = Math.max(0, daysBetween(today, dueDate));
  const milestones = getPregnancyMilestones(lmpDate);

  return {
    dueDate,
    conceptionDate,
    currentWeek: week,
    currentDay: day,
    trimester,
    percentComplete,
    daysRemaining,
    milestones,
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
