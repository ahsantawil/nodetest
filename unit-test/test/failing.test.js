import {Hello} from '../src/sayHello';

test('sayHello Success', () => { 
    expect(Hello("Ahsan")).toBe('Hello Ahsan');
 });

 test.failing('sayHello Error', () => { 
    Hello(null);
  });