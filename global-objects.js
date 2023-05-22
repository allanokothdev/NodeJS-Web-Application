//  Global Objects: 
//  Objects/Functions (Built-in) that we can use without any objection.3rd party imports
//  Examples: Console, setInterval, setTimeout, process (used to store credential), require (importing mod/libraries)

//  Require Global Object
const count = require('./count');
console.log(count([1, 98, 22, 41]))

//  Timeout Global Object
setTimeout(() => {
    console.log("5 seconds have passed");
}, 5000)

//  Process Global Object
const { DB_NAME, DB_PASSWORD } = process.env
console.log(DB_NAME); // demo_db
console.log(DB_PASSWORD); // yes_you_are_right

//  Require
const utils = require("./utils");

console.log(utils.add(1, 2));  // result: 3
console.log(utils.sub(2, 1));  // result: 1
console.log(utils.getDatabaseName());  // result: demo_db

