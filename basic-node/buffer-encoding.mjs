const buffer = Buffer.from("Ahsan Ta'wil", "utf8");

console.log(buffer.toString("base64"));
console.log(buffer.toString("hex"));


const buffer2 = Buffer.from("QWhzYW4gVGEnd2ls", "base64");
console.log(buffer2.toString("utf8"));