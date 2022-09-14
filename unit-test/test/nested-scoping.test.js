beforeEach(() => console.log('Before Each 1'));
afterEach(() => console.log('After Each 1'));

describe('Inner scope', () => {
    beforeEach(() => console.log('Inner Before Each 1'));
    afterEach(() => console.log('Inner After Each 1'));

    describe('Inner inner scope', () => {
        beforeEach(() => console.log('Inner inner before each 1'));
        afterEach(() => console.log('Inner inner after each 1'));

        test('test 1', () => console.log('Test 1'));
        test('test 2', () => console.log('Test 2'));
    });
});