import {sumALL} from '../src/sum.js';

const table = [
    [[10, 10, 10], 30],
    [[10, 10, 10, 10], 40],
    [[10, 10, 10, 10, 10], 50],
];


test.each(table)("test sum all (%s) should result %i", (numbers, expected) => {
    expect(sumALL(numbers)).toBe(expected);
 });

 test.skip.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
  ])('.add(%i, %i)', (a, b, expected) => {
    expect(a + b).toBe(expected);
  });