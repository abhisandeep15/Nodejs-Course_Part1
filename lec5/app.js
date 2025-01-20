//const Emitter = require("./emitter");
const Emitter=require("events")   //this is core nodejs module events

const obj=require("./config").events;
console.log(obj);

const emitt = new Emitter();


// Register listeners for the "greet" event
emitt.on("greet", function () {
    console.log("Hello");
  });
  
emitt.on(obj.GREET, function () {
  console.log("Hi");
});

emitt.on(obj.FILEOPEN,function(){
    console.log("File Opened");
})

// Emit the "greet" event
emitt.emit("greet");

emitt.emit(obj.FILEOPEN);
