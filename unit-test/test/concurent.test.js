import {sayHello} from '../src/async';


test.concurrent("Concurrent 1", async() => {
    await expect(sayHello("Ahsan")).resolves.toBe("Hello Ahsan");
});
test.concurrent("Concurrent 2", async() => {
    await expect(sayHello("Ahsan")).resolves.toBe("Hello Ahsan");
});
test.concurrent("Concurrent 3", async() => {
    await expect(sayHello("Ahsan")).resolves.toBe("Hello Ahsan");
});