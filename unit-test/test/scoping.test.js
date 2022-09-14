beforeAll(() => console.log('Before All 1'));
afterAll(() => console.log('After All 1'));
beforeEach(() => console.log('Before Each 1'));
afterEach(() => console.log('After Each 1'));

test('test outer 1', () => console.log('Test Outer 1'));
test('test outer 2', () => console.log('Test Outer 2'));

describe('inner scope', ()=>{
    beforeAll(() => console.log('Inner Before All 1'));
    afterAll(() => console.log('Inner After All 1'));
    beforeEach(() => console.log('Inner Before Each 1'));
    afterEach(() => console.log('Inner After Each 1'));
    
    test('test inner 1', () => console.log('Test Inner 1'));
    test('test inner 2', () => console.log('Test Inner 2'));
});