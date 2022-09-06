import fs from 'fs';

const writer = fs.createWriteStream("target.log");
writer.write("Ahsan ");
writer.write("Ta'wil");
writer.end();


const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.log(data.toString());
})