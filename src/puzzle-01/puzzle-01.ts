import { readFileSync } from "fs";

const calculateFuel = (input: number): number => Math.floor(input / 3) - 2;

export const calculateRocketEquation = (): number => {
  const file: string = readFileSync("./dist/inputs/input-01.txt", "utf-8");

  return file.split("\n").reduce((acc: number, cur: string) => {
    if (cur && parseInt(cur) > 0) {
      acc += calculateFuel(parseInt(cur));

      return acc;
    }
  }, 0);
};
