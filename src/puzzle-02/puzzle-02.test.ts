import { runIntCode } from './puzzle-02';

it('should run IntCode program', () => {
  expect(runIntCode([1, 0, 0, 0, 99])).toStrictEqual([2, 0, 0, 0, 99]);
  expect(runIntCode([2, 3, 0, 3, 99])).toStrictEqual([2, 3, 0, 6, 99]);
  expect(runIntCode([2, 4, 4, 5, 99, 0])).toStrictEqual([2, 4, 4, 5, 99, 9801]);
  expect(runIntCode([1, 1, 1, 4, 99, 5, 6, 0, 99])).toStrictEqual([30, 1, 1, 4, 2, 5, 6, 0, 99]);
});