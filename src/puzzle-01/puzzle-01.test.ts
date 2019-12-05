import { calculateFuel, calculatePreciseFuel } from './puzzle-01';

it('should calculate fuel', () => {
  expect(calculateFuel(12)).toBe(2);
  expect(calculateFuel(14)).toBe(2);
  expect(calculateFuel(1969)).toBe(654);
  expect(calculateFuel(100756)).toBe(33583);
});

it('should calculate precise fuel', () => {
  expect(calculatePreciseFuel(14)).toBe(2);
  expect(calculatePreciseFuel(1969)).toBe(966);
  expect(calculatePreciseFuel(100756)).toBe(50346);
});