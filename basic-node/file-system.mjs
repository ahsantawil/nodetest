// With synchronous

// import fs from 'fs';

// const buffer = fs.readFileSync("file-system.mjs");

// console.log(buffer.toString());

// fs.writeFileSync("temp.txt", "Hello World");


// With Promises

import fsPromises from 'fs/promises';

const buffer = await fsPromises.readFile("hello-world.js");

console.log(buffer.toString());

await fsPromises.writeFile("temp.txt", "Data Baru with promises await");