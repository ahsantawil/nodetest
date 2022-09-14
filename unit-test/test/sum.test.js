import {sum, sumALL} from '../src/sum.js';

test('test sum funtion 1', () => { 
    const result = sum(1, 2)

    expect(result).toBe(3);
 })
 
test('test sum funtion 2', () => { 
    const result = sum(1, 2)

    expect(result).toBe(3);
 })

test('test sum funtion 3', () => { 
    const result = sum(1, 2)

    expect(result).toBe(3);
 })

 test('test sum all', () => { 
    const number = [2,2,2,2,2,];
    expect(sumALL(number)).toBe(10);
  })