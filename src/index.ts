import { calculateEquation } from "./puzzle-01/puzzle-01";
import { getProcessedValue, getProgramAlarm } from "./puzzle-02/puzzle-02";

const result01 = calculateEquation();
const result01b = calculateEquation(true);
const result02 = getProcessedValue({ noun: 12, verb: 2 });
const result02b = getProgramAlarm(19690720);

console.log(`PUZZLE 01 ---> PART 1: ${result01} | PART 2: ${result01b}`);
console.log(`PUZZLE 02 ---> PART 1: ${result02} | PART 2: ${result02b}`);

console.log("DONE!");
