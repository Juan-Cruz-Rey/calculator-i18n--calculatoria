export type CalculationMode = 'lmp' | 'dueDate';

export interface PregnancyConceptionInput {
  mode: CalculationMode;
  date: Date; // Either LMP date or due date
  cycleLength?: number; // Default: 28 days
}

export interface PregnancyConceptionResult {
  conceptionDate: Date;
  conceptionRangeStart: Date;
  conceptionRangeEnd: Date;
  fertilityWindowStart: Date;
  fertilityWindowEnd: Date;
  dueDate: Date;
  currentWeek?: number;
  currentDay?: number;
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
 * Subtract days from a date
 */
export function subtractDays(date: Date, days: number): Date {
  return addDays(date, -days);
}

/**
 * Calculate ovulation day based on cycle length
 * Standard: ovulation occurs 14 days before next period
 */
export function getOvulationDay(cycleLength: number = 28): number {
  return cycleLength - 14;
}

/**
 * Calculate conception date from Last Menstrual Period (LMP)
 * Conception typically occurs around ovulation (cycle day 14 for 28-day cycle)
 */
export function calculateConceptionFromLMP(lmpDate: Date, cycleLength: number = 28): Date {
  const ovulationDay = getOvulationDay(cycleLength);
  return addDays(lmpDate, ovulationDay);
}

/**
 * Calculate conception date range from LMP
 * Sperm can survive 3-5 days, so conception window is typically 3 days before to 1 day after ovulation
 */
export function calculateConceptionRangeFromLMP(lmpDate: Date, cycleLength: number = 28): { start: Date; end: Date } {
  const ovulationDay = getOvulationDay(cycleLength);
  const ovulationDate = addDays(lmpDate, ovulationDay);

  return {
    start: subtractDays(ovulationDate, 3), // 3 days before ovulation
    end: addDays(ovulationDate, 1), // 1 day after ovulation
  };
}

/**
 * Calculate fertility window from LMP
 * Fertility window is 5 days before ovulation + ovulation day (6 days total)
 */
export function calculateFertilityWindow(lmpDate: Date, cycleLength: number = 28): { start: Date; end: Date } {
  const ovulationDay = getOvulationDay(cycleLength);
  const ovulationDate = addDays(lmpDate, ovulationDay);

  return {
    start: subtractDays(ovulationDate, 5), // 5 days before ovulation
    end: ovulationDate, // Ovulation day
  };
}

/**
 * Calculate due date from LMP
 * Standard pregnancy is 280 days (40 weeks) from LMP
 */
export function calculateDueDateFromLMP(lmpDate: Date): Date {
  return addDays(lmpDate, 280);
}

/**
 * Calculate conception date from due date
 * Works backward from due date (280 days from LMP, conception ~14 days after LMP)
 */
export function calculateConceptionFromDueDate(dueDate: Date, cycleLength: number = 28): Date {
  const lmpDate = subtractDays(dueDate, 280);
  return calculateConceptionFromLMP(lmpDate, cycleLength);
}

/**
 * Calculate conception range from due date
 */
export function calculateConceptionRangeFromDueDate(dueDate: Date, cycleLength: number = 28): { start: Date; end: Date } {
  const lmpDate = subtractDays(dueDate, 280);
  return calculateConceptionRangeFromLMP(lmpDate, cycleLength);
}

/**
 * Calculate fertility window from due date
 */
export function calculateFertilityWindowFromDueDate(dueDate: Date, cycleLength: number = 28): { start: Date; end: Date } {
  const lmpDate = subtractDays(dueDate, 280);
  return calculateFertilityWindow(lmpDate, cycleLength);
}

/**
 * Calculate LMP from due date
 */
export function calculateLMPFromDueDate(dueDate: Date): Date {
  return subtractDays(dueDate, 280);
}

/**
 * Calculate current week and day of pregnancy
 */
export function calculateCurrentWeek(lmpDate: Date): { weeks: number; days: number } {
  const today = new Date();
  const diffTime = today.getTime() - lmpDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    return { weeks: 0, days: 0 };
  }

  const weeks = Math.floor(diffDays / 7);
  const days = diffDays % 7;

  return { weeks, days };
}

/**
 * Main function to calculate pregnancy conception details
 */
export function calculatePregnancyConception(input: PregnancyConceptionInput): PregnancyConceptionResult {
  const cycleLength = input.cycleLength || 28;

  if (input.mode === 'lmp') {
    const conceptionDate = calculateConceptionFromLMP(input.date, cycleLength);
    const conceptionRange = calculateConceptionRangeFromLMP(input.date, cycleLength);
    const fertilityWindow = calculateFertilityWindow(input.date, cycleLength);
    const dueDate = calculateDueDateFromLMP(input.date);
    const currentWeekData = calculateCurrentWeek(input.date);

    return {
      conceptionDate,
      conceptionRangeStart: conceptionRange.start,
      conceptionRangeEnd: conceptionRange.end,
      fertilityWindowStart: fertilityWindow.start,
      fertilityWindowEnd: fertilityWindow.end,
      dueDate,
      currentWeek: currentWeekData.weeks,
      currentDay: currentWeekData.days,
    };
  } else {
    // mode === 'dueDate'
    const conceptionDate = calculateConceptionFromDueDate(input.date, cycleLength);
    const conceptionRange = calculateConceptionRangeFromDueDate(input.date, cycleLength);
    const fertilityWindow = calculateFertilityWindowFromDueDate(input.date, cycleLength);
    const lmpDate = calculateLMPFromDueDate(input.date);
    const currentWeekData = calculateCurrentWeek(lmpDate);

    return {
      conceptionDate,
      conceptionRangeStart: conceptionRange.start,
      conceptionRangeEnd: conceptionRange.end,
      fertilityWindowStart: fertilityWindow.start,
      fertilityWindowEnd: fertilityWindow.end,
      dueDate: input.date,
      currentWeek: currentWeekData.weeks,
      currentDay: currentWeekData.days,
    };
  }
}
