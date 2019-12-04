import { expect } from 'chai';
import 'mocha';
import { calculateFuel } from './puzzle-01';

describe('Puzzle 01', () => {
  it('should calculate fuel', () => {
    expect(calculateFuel(12)).to.eql(2);
  });
});
