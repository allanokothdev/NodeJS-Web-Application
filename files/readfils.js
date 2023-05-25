const fs = require("fs");

//  Read asynchronously operation
const readMeFile = fs.readFileSync("./read.txt", "utf-8");
console.log(readMeFile);  // File contents

//Write asynchronously operation
fs.writeFileSync("./read-new.txt", readMeFile)

//  synchronously
fs.readFile("./read.txt", "utf-8", (err, data) => {
    if(err) {
        console.error(err);
    }
    console.log(data)
});

console.log("Am I First")