import { readInput } from '../common/readInput';

export const calculateFuel = (input: number): number =>
  Math.floor(input / 3) - 2;

export const calculatePreciseFuel = (
  input: number,
  mem: number = 0
): number => {
  const fuel: number = calculateFuel(input);

  return fuel >= 0 ? calculatePreciseFuel(fuel, mem + fuel) : mem;
};

export const calculateEquation = (isHighPrecision: boolean = false): number => {
  return readInput('./dist/inputs/input-01.txt').reduce((acc: number, cur: number) => {
    if (cur && cur > 0) {
      acc += isHighPrecision ? calculatePreciseFuel(cur) : calculateFuel(cur);

      return acc;
    }
  }, 0);
};
