
const add = require("./add");
const sub = require("./subtract");
const mul = require("./multiply");
const div = require("./divide");

let result = add(10,10);
console.log(`Add: ${result}`);

let result2 = sub(20,10);
console.log(`Subtract: ${result2}`);

let result3 = mul(20,10);
console.log(`Multiply:  ${result3}`);

let result4 = div(20,10);
console.log(`Divide: ${result4}`);