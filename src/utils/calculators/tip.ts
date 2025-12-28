/**
 * Tip Calculator - Pure calculation functions
 */

export interface TipInput {
  billAmount: number;
  tipPercentage: number;
  numberOfPeople: number;
}

export interface TipResult {
  billAmount: number;
  tipPercentage: number;
  tipAmount: number;
  totalAmount: number;
  numberOfPeople: number;
  tipPerPerson: number;
  totalPerPerson: number;
}

/**
 * Calculate tip and split amounts
 */
export function calculateTip(input: TipInput): TipResult {
  const { billAmount, tipPercentage, numberOfPeople } = input;

  // Calculate tip amount
  const tipAmount = (billAmount * tipPercentage) / 100;

  // Calculate total with tip
  const totalAmount = billAmount + tipAmount;

  // Calculate per-person amounts
  const tipPerPerson = tipAmount / numberOfPeople;
  const totalPerPerson = totalAmount / numberOfPeople;

  return {
    billAmount,
    tipPercentage,
    tipAmount,
    totalAmount,
    numberOfPeople,
    tipPerPerson,
    totalPerPerson,
  };
}

/**
 * Get common tip percentage suggestions
 */
export function getCommonTipPercentages(): number[] {
  return [10, 15, 18, 20, 25];
}

/**
 * Format currency value to 2 decimal places
 */
export function formatCurrency(value: number): string {
  return value.toFixed(2);
}

/**
 * Validate tip calculator input
 */
export function validateTipInput(input: Partial<TipInput>): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!input.billAmount || input.billAmount <= 0) {
    errors.push('Bill amount must be greater than 0');
  }

  if (input.tipPercentage === undefined || input.tipPercentage < 0) {
    errors.push('Tip percentage must be 0 or greater');
  }

  if (!input.numberOfPeople || input.numberOfPeople < 1) {
    errors.push('Number of people must be at least 1');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
