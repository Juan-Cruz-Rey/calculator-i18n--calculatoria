export type CalculationMethod = 'lmp' | 'conception' | 'ultrasound' | 'ivf';
export type EmbryoAge = 3 | 5 | 6;
export type Trimester = 1 | 2 | 3;

export interface DueDateInput {
  method: CalculationMethod;
  date: Date; // LMP date, conception date, ultrasound date, or IVF transfer date
  cycleLength?: number; // For LMP method (22-44 days, default 28)
  ultrasoundWeeks?: number; // For ultrasound method
  ultrasoundDays?: number; // For ultrasound method
  embryoAge?: EmbryoAge; // For IVF method (day 3, 5, or 6)
}

export interface DueDateResult {
  dueDate: Date;
  conceptionDate: Date;
  currentWeek: number;
  currentDay: number;
  daysRemaining: number;
  trimester: Trimester;
  trimesterWeeksRemaining: number;
  gestationalAge: string; // Format: "XX weeks Y days"
  firstTrimesterEnd: Date;
  secondTrimesterEnd: Date;
  earlyTermStart: Date; // 37 weeks
  fullTermStart: Date; // 39 weeks
  lateTermStart: Date; // 41 weeks
  postTermStart: Date; // 42 weeks
}

/**
 * Calculate due date from Last Menstrual Period (LMP) using Naegele's rule
 * Formula: LMP + 280 days (40 weeks)
 * Adjusted for cycle length: LMP + 280 days + (cycle length - 28)
 */
export function calculateFromLMP(lmpDate: Date, cycleLength: number = 28): DueDateResult {
  if (cycleLength < 22 || cycleLength > 44) {
    throw new Error('Cycle length must be between 22 and 44 days');
  }

  // Calculate due date using Naegele's rule
  const dueDate = new Date(lmpDate);
  const adjustment = cycleLength - 28;
  dueDate.setDate(dueDate.getDate() + 280 + adjustment);

  // Conception typically occurs 14 days after LMP (ovulation)
  const conceptionDate = new Date(lmpDate);
  conceptionDate.setDate(conceptionDate.getDate() + 14 + adjustment);

  return calculatePregnancyDetails(dueDate, conceptionDate, lmpDate);
}

/**
 * Calculate due date from conception date
 * Formula: Conception date + 266 days (38 weeks)
 */
export function calculateFromConception(conceptionDate: Date): DueDateResult {
  const dueDate = new Date(conceptionDate);
  dueDate.setDate(dueDate.getDate() + 266);

  // LMP is approximately 14 days before conception
  const lmpDate = new Date(conceptionDate);
  lmpDate.setDate(lmpDate.getDate() - 14);

  return calculatePregnancyDetails(dueDate, conceptionDate, lmpDate);
}

/**
 * Calculate due date from ultrasound date
 * Uses the gestational age from ultrasound to calculate due date
 */
export function calculateFromUltrasound(
  ultrasoundDate: Date,
  weeks: number,
  days: number
): DueDateResult {
  if (weeks < 0 || weeks > 42) {
    throw new Error('Ultrasound weeks must be between 0 and 42');
  }
  if (days < 0 || days > 6) {
    throw new Error('Ultrasound days must be between 0 and 6');
  }

  // Calculate total days of pregnancy at ultrasound
  const totalDaysAtUltrasound = weeks * 7 + days;

  // Calculate due date: ultrasound date + (280 - total days at ultrasound)
  const daysToAdd = 280 - totalDaysAtUltrasound;
  const dueDate = new Date(ultrasoundDate);
  dueDate.setDate(dueDate.getDate() + daysToAdd);

  // Calculate LMP: ultrasound date - total days at ultrasound
  const lmpDate = new Date(ultrasoundDate);
  lmpDate.setDate(lmpDate.getDate() - totalDaysAtUltrasound);

  // Conception is approximately 14 days after LMP
  const conceptionDate = new Date(lmpDate);
  conceptionDate.setDate(conceptionDate.getDate() + 14);

  return calculatePregnancyDetails(dueDate, conceptionDate, lmpDate);
}

/**
 * Calculate due date from IVF transfer date
 * More precise than natural conception due to known embryo age
 */
export function calculateFromIVF(transferDate: Date, embryoAge: EmbryoAge): DueDateResult {
  // For IVF, we calculate based on embryo age at transfer
  // Day 3 embryo: transfer date + 263 days (266 - 3)
  // Day 5 embryo: transfer date + 261 days (266 - 5)
  // Day 6 embryo: transfer date + 260 days (266 - 6)
  const daysToAdd = 266 - embryoAge;
  const dueDate = new Date(transferDate);
  dueDate.setDate(dueDate.getDate() + daysToAdd);

  // Conception date is the transfer date minus embryo age
  const conceptionDate = new Date(transferDate);
  conceptionDate.setDate(conceptionDate.getDate() - embryoAge);

  // LMP is approximately 14 days before conception
  const lmpDate = new Date(conceptionDate);
  lmpDate.setDate(lmpDate.getDate() - 14);

  return calculatePregnancyDetails(dueDate, conceptionDate, lmpDate);
}

/**
 * Calculate pregnancy details from due date and conception date
 */
function calculatePregnancyDetails(
  dueDate: Date,
  conceptionDate: Date,
  lmpDate: Date
): DueDateResult {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Calculate days since LMP (gestational age in days)
  const daysSinceLMP = Math.floor(
    (today.getTime() - lmpDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Calculate current week and day of pregnancy
  const currentWeek = Math.floor(daysSinceLMP / 7);
  const currentDay = daysSinceLMP % 7;

  // Calculate days remaining until due date
  const daysRemaining = Math.ceil(
    (dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Determine current trimester (based on gestational age)
  let trimester: Trimester;
  let trimesterWeeksRemaining: number;

  if (currentWeek < 13) {
    trimester = 1;
    trimesterWeeksRemaining = 13 - currentWeek;
  } else if (currentWeek < 27) {
    trimester = 2;
    trimesterWeeksRemaining = 27 - currentWeek;
  } else {
    trimester = 3;
    trimesterWeeksRemaining = 40 - currentWeek; // Until due date
  }

  // Calculate important milestone dates
  const firstTrimesterEnd = new Date(lmpDate);
  firstTrimesterEnd.setDate(firstTrimesterEnd.getDate() + 13 * 7);

  const secondTrimesterEnd = new Date(lmpDate);
  secondTrimesterEnd.setDate(secondTrimesterEnd.getDate() + 27 * 7);

  const earlyTermStart = new Date(lmpDate);
  earlyTermStart.setDate(earlyTermStart.getDate() + 37 * 7);

  const fullTermStart = new Date(lmpDate);
  fullTermStart.setDate(fullTermStart.getDate() + 39 * 7);

  const lateTermStart = new Date(lmpDate);
  lateTermStart.setDate(lateTermStart.getDate() + 41 * 7);

  const postTermStart = new Date(lmpDate);
  postTermStart.setDate(postTermStart.getDate() + 42 * 7);

  return {
    dueDate,
    conceptionDate,
    currentWeek,
    currentDay,
    daysRemaining,
    trimester,
    trimesterWeeksRemaining,
    gestationalAge: `${currentWeek} weeks ${currentDay} days`,
    firstTrimesterEnd,
    secondTrimesterEnd,
    earlyTermStart,
    fullTermStart,
    lateTermStart,
    postTermStart,
  };
}

/**
 * Main function to calculate due date based on method
 */
export function calculateDueDate(input: DueDateInput): DueDateResult {
  switch (input.method) {
    case 'lmp':
      return calculateFromLMP(input.date, input.cycleLength);
    case 'conception':
      return calculateFromConception(input.date);
    case 'ultrasound':
      if (input.ultrasoundWeeks === undefined || input.ultrasoundDays === undefined) {
        throw new Error('Ultrasound weeks and days are required for ultrasound method');
      }
      return calculateFromUltrasound(input.date, input.ultrasoundWeeks, input.ultrasoundDays);
    case 'ivf':
      if (!input.embryoAge) {
        throw new Error('Embryo age is required for IVF method');
      }
      return calculateFromIVF(input.date, input.embryoAge);
    default:
      throw new Error('Invalid calculation method');
  }
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
 * Format date to localized string
 */
export function formatDate(date: Date, locale: string = 'en-US'): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
