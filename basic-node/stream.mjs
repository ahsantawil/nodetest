import fs, { write } from 'fs';

const writer = fs.createWriteStream("target.json");
writer.write = "Ahsan";