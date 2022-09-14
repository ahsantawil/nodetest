import {sumALL} from '../src/sum.js';

describe("When call sum all()", () => {
    it('should get 30', () => {
        expect(sumALL([10, 10, 10])).toBe(30);
    });
    it('should get 40', () => {
        expect(sumALL([10, 10, 10, 10])).toBe(40);
    });
});