import { sayHello } from "../src/async";


test('test async function', async () => { 
    const result = await sayHello('Ahsan');
    expect(result).toBe('Hello Ahsan');
 });

 test('test async matchers', async () => { 
    await expect(sayHello('Ahsan')).resolves.toBe('Hello Ahsan');
    await expect(sayHello()).rejects.toBe('Name is Empty');
  })