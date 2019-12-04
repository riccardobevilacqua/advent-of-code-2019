import { readFileSync } from 'fs';

export const getMasses = (): number[] =>
  readFileSync('./dist/inputs/input-01.txt', 'utf-8')
    .split('\n')
    .map(item => parseInt(item));

export const calculateFuel = (input: number): number =>
  Math.floor(input / 3) - 2;

export const calculatePreciseFuel = (
  input: number,
  mem: number = 0
): number => {
  const fuel: number = calculateFuel(input);

  if (fuel >= 0) {
    mem += fuel;
    calculatePreciseFuel(fuel, mem);
  }

  return mem;
};

export const calculateEquation = (isHighPrecision: boolean = false): number => {
  return getMasses().reduce((acc: number, cur: number) => {
    if (cur && cur > 0) {
      acc += isHighPrecision ? calculatePreciseFuel(cur) : calculateFuel(cur);

      return acc;
    }
  }, 0);
};
