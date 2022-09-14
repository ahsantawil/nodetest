import {MyException, callMe} from '../src/exception.js';

test('My Exception', () => { 
    expect(() => callMe("Ahsan")).toThrow();
    expect(() => callMe("Ahsan")).toThrow(MyException);
    expect(() => callMe("Ahsan")).toThrow("Ups my exception happens");    
 });

 test('exception not happens', () => { 
    expect(callMe('Zahwa')).toBe('Ok')
  });