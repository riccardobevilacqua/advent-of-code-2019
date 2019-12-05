import { readFileSync } from 'fs';

export const readInput = (input: string, sep = '\n'): number[] =>
  readFileSync(input, 'utf-8')
    .split(sep)
    .map(item => parseInt(item));