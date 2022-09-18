const EventEmitter  = require("events");

const event = new EventEmitter();
console.log("sa")

event.on("SayMyname", () => {
    console.log(" your name is aditya ");
});
event.on("SayMyname", () => {
    console.log(" your name is Dhar ");
});
event.on("SayMyname", () => {
    console.log(" your name is Dwivedi ");
})
event.emit("SayMyname");
