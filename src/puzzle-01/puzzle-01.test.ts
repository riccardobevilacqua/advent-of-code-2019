import { calculateFuel } from './puzzle-01';

it('should calculate fuel', () => {
  expect(calculateFuel(12)).toBe(2);
});