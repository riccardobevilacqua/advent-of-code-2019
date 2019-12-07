import { readInput } from "../common/readInput";

export interface IntCodeConfig {
  input?: number[];
  noun?: number;
  verb?: number;
}

export const setupIntCode = (
  { input, noun, verb }: IntCodeConfig = { input: [] }
): number[] => {
  if (input.length === 0) {
    input = readInput("./dist/inputs/input-02.txt", ",");
  }

  input[1] = noun ? noun : 12;
  input[2] = verb ? verb : 2;

  return [...input];
};

export const runIntCode = (
  input: number[] = [],
  index: number = 0
): number[] => {
  if (input.length === 0) {
    input = readInput("./dist/inputs/input-02.txt", ",");
  }

  let intCode: number[] = [...input];

  if (intCode[index] === 99) {
    return intCode;
  } else if (intCode[index] === 1) {
    intCode[intCode[index + 3]] =
      intCode[intCode[index + 1]] + intCode[intCode[index + 2]];
  } else if (intCode[index] === 2) {
    intCode[intCode[index + 3]] =
      intCode[intCode[index + 1]] * intCode[intCode[index + 2]];
  }

  return runIntCode(intCode, index + 4);
};

export const getProcessedValue = (): number => {
  const input: number[] = setupIntCode();
  const output: number[] = runIntCode(input);

  return output[0];
};

export const getGravityAssist = () => {};
