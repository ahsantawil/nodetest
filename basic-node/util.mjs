import util from 'util';

console.log(util.format("Nama: %s", "Ahsan"));

const person = { 
    firtName: "Ahsan", 
    lastName: "Ta'wil"
};

console.log(util.format("Person: %j", person));