import {sumALL} from '../src/sum.js';

const table = [
    {numbers: [10, 10, 10], expected: 30},
    {numbers: [10, 10, 10, 10, 10], expected: 50},
    {numbers: [10, 10, 10, 10, 10, 10, 10], expected: 70},
];


test.each(table)("test sum all (%o) should result %d", ({numbers, expected}) => {
    expect(sumALL(numbers)).toBe(expected);
 });
