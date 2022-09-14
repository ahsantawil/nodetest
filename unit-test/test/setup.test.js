import {sum} from '../src/sum';


beforeAll( async()=>{
    console.log('Before All');
});

beforeEach( async()=>{
    console.log('Before All');
});

afterAll( async()=>{
    console.log('After All');
});

afterEach( async()=>{
    console.log('After All');
});


test('first test', async () => { 
    expect(sum(10, 10)).toBe(20);
});

test('second test', async () => { 
    expect(sum(10, 10)).toBe(20);
 });