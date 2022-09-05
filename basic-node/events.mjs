import {EventEmitter} from 'events';

const emitter = new EventEmitter();

emitter.addListener("Hello", (name) => {
    console.log(`Hello ${name}`);
})

emitter.addListener("Hello", (name) => {
    console.log(`Halo ${name}`);
})


emitter.emit("Hello", "Eko");