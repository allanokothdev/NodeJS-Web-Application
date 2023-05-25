// custom-events.js

const events = require('events');
const utils = require("./utils");

const eventEmitter = new events.EventEmitter();

eventEmitter.on("showSum", (a, b) => {
    console.log(`Sum is: ${utils.add(a, b)}`);
});

module.exports = eventEmitter;


//  const customEvents = require("./custom-events");
//  customEvents.emit("showSum", { a: 1, b: 2 });  // Sum is: 3