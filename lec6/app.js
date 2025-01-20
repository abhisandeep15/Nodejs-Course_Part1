const fs=require("fs");  //it is inbuilt in nodejs use it

//Reading the file
//readfile is async function:non blocking
//readfilesync:it is sync function:blocking:it waits for every items to execute in order
// console.log("before reading....")
// fs.readFile("input.txt","utf-8",(err,data)=>{
//     if (err){
//         throw err;
//     }
//     console.log(data)
// })      
// console.log("after the reading....")
// output: before reading....after the reading....input.txt

// console.log("the beginning")
// const res=fs.readFileSync("input.txt","utf-8")
// console.log(res)
// console.log("the ending...")


//!---Writing file----!
// it replaces the old text with new text
// fs.writeFile("input.txt","Nodejs is awesome..",(err)=>{
//     if (err){
//         throw err;
//         }
// })

//!--Append file----!

// fs.appendFile("input.txt","\nhere we are gonna learn about fs module",(err)=>{
//     if (err){
//         throw err;
//         }
// })


// unlink it deletes the input .txt file
// fs.unlink("input.txt",(err)=>{
//     if (err){
//         throw err;
//     }
// })



//Recomanded

// const readstream=fs.createReadStream("input.txt","utf-8");

// readstream.on("data",(chunk)=>{
//     console.log(chunk)
// })

// readstream.on("end",()=>{
//     console.log("end of file")
// })


// const writestream=fs.createWriteStream("input.txt","utf-8");

// writestream.write("Welcome to the Nodejs full course");



//!---pipe::copying data from one file to another file ---!

const readstream=fs.createReadStream("input.txt","utf-8")
const writestream=fs.createWriteStream("output.txt","utf-8")

readstream.pipe(writestream)



