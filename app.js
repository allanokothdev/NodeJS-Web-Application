const fs = require("fs");

const readMeFile = fs.readFileSync("./read.txt", "utf-8");
console.log(readMeFile);  // File contents
