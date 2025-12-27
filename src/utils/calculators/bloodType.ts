export type BloodType = 'A' | 'B' | 'AB' | 'O';
export type RhFactor = '+' | '-';

export interface BloodTypeInput {
  motherBloodType: BloodType;
  motherRh: RhFactor;
  fatherBloodType: BloodType;
  fatherRh: RhFactor;
}

export interface BloodTypeProbability {
  bloodType: BloodType;
  rh: RhFactor;
  probability: number;
}

export interface BloodTypeResult {
  possibleBloodTypes: BloodTypeProbability[];
  motherGenotype: string[];
  fatherGenotype: string[];
}

/**
 * Get possible genotypes for a blood type
 * A can be AA or AO
 * B can be BB or BO
 * AB can only be AB
 * O can only be OO
 */
function getBloodTypeGenotypes(bloodType: BloodType): string[][] {
  switch (bloodType) {
    case 'A':
      return [['A', 'A'], ['A', 'O']];
    case 'B':
      return [['B', 'B'], ['B', 'O']];
    case 'AB':
      return [['A', 'B']];
    case 'O':
      return [['O', 'O']];
  }
}

/**
 * Get possible Rh genotypes
 * + can be ++ or +-
 * - can only be --
 */
function getRhGenotypes(rh: RhFactor): string[][] {
  if (rh === '+') {
    return [['+', '+'], ['+', '-']];
  } else {
    return [['-', '-']];
  }
}

/**
 * Determine blood type from genotype
 */
function genotypeToBloodType(allele1: string, allele2: string): BloodType {
  const alleles = [allele1, allele2].sort();

  if (alleles[0] === 'A' && alleles[1] === 'A') return 'A';
  if (alleles[0] === 'A' && alleles[1] === 'B') return 'AB';
  if (alleles[0] === 'A' && alleles[1] === 'O') return 'A';
  if (alleles[0] === 'B' && alleles[1] === 'B') return 'B';
  if (alleles[0] === 'B' && alleles[1] === 'O') return 'B';
  if (alleles[0] === 'O' && alleles[1] === 'O') return 'O';

  // Fallback (should never happen)
  return 'O';
}

/**
 * Determine Rh factor from genotype
 */
function genotypeToRh(allele1: string, allele2: string): RhFactor {
  // If either allele is +, the result is +
  if (allele1 === '+' || allele2 === '+') return '+';
  return '-';
}

/**
 * Calculate all possible blood type combinations using Punnett square
 */
export function calculateBloodTypeProbabilities(input: BloodTypeInput): BloodTypeResult {
  const motherBloodGenotypes = getBloodTypeGenotypes(input.motherBloodType);
  const fatherBloodGenotypes = getBloodTypeGenotypes(input.fatherBloodType);
  const motherRhGenotypes = getRhGenotypes(input.motherRh);
  const fatherRhGenotypes = getRhGenotypes(input.fatherRh);

  // Store all possible outcomes
  const outcomes: Map<string, number> = new Map();
  let totalCombinations = 0;

  // Calculate all possible combinations
  for (const motherBlood of motherBloodGenotypes) {
    for (const fatherBlood of fatherBloodGenotypes) {
      for (const motherRhGeno of motherRhGenotypes) {
        for (const fatherRhGeno of fatherRhGenotypes) {
          // Each parent can contribute either of their two alleles
          for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
              const childBloodType = genotypeToBloodType(motherBlood[i], fatherBlood[j]);

              for (let k = 0; k < 2; k++) {
                for (let l = 0; l < 2; l++) {
                  const childRh = genotypeToRh(motherRhGeno[k], fatherRhGeno[l]);
                  const outcome = `${childBloodType}${childRh}`;

                  outcomes.set(outcome, (outcomes.get(outcome) || 0) + 1);
                  totalCombinations++;
                }
              }
            }
          }
        }
      }
    }
  }

  // Convert to probabilities
  const possibleBloodTypes: BloodTypeProbability[] = [];
  outcomes.forEach((count, outcome) => {
    const bloodType = outcome.slice(0, -1) as BloodType;
    const rh = outcome.slice(-1) as RhFactor;
    const probability = (count / totalCombinations) * 100;

    possibleBloodTypes.push({
      bloodType,
      rh,
      probability: parseFloat(probability.toFixed(2)),
    });
  });

  // Sort by probability (highest first)
  possibleBloodTypes.sort((a, b) => b.probability - a.probability);

  // Generate genotype descriptions
  const motherGenotype = motherBloodGenotypes.map(g => g.join('')).concat(
    motherRhGenotypes.map(g => g.join(''))
  );
  const fatherGenotype = fatherBloodGenotypes.map(g => g.join('')).concat(
    fatherRhGenotypes.map(g => g.join(''))
  );

  return {
    possibleBloodTypes,
    motherGenotype,
    fatherGenotype,
  };
}

/**
 * Get blood type compatibility for display
 */
export function getBloodTypeInfo(bloodType: BloodType, rh: RhFactor): {
  canDonateTo: string[];
  canReceiveFrom: string[];
} {
  const fullType = `${bloodType}${rh}`;

  const compatibility: Record<string, { canDonateTo: string[]; canReceiveFrom: string[] }> = {
    'O-': {
      canDonateTo: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'],
      canReceiveFrom: ['O-'],
    },
    'O+': {
      canDonateTo: ['O+', 'A+', 'B+', 'AB+'],
      canReceiveFrom: ['O-', 'O+'],
    },
    'A-': {
      canDonateTo: ['A-', 'A+', 'AB-', 'AB+'],
      canReceiveFrom: ['O-', 'A-'],
    },
    'A+': {
      canDonateTo: ['A+', 'AB+'],
      canReceiveFrom: ['O-', 'O+', 'A-', 'A+'],
    },
    'B-': {
      canDonateTo: ['B-', 'B+', 'AB-', 'AB+'],
      canReceiveFrom: ['O-', 'B-'],
    },
    'B+': {
      canDonateTo: ['B+', 'AB+'],
      canReceiveFrom: ['O-', 'O+', 'B-', 'B+'],
    },
    'AB-': {
      canDonateTo: ['AB-', 'AB+'],
      canReceiveFrom: ['O-', 'A-', 'B-', 'AB-'],
    },
    'AB+': {
      canDonateTo: ['AB+'],
      canReceiveFrom: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'],
    },
  };

  return compatibility[fullType] || { canDonateTo: [], canReceiveFrom: [] };
}
