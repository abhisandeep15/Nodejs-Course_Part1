import express from "express"
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config()

const app=express();

const PORT=process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.use((req,res,next)=>{
    console.log("middleware is called")
    next();   //until you call next() you data get wont runs because middleware if they cleared then only remaining works like server side
})

app.get("/",(req,res)=>{
    console.log("this is the console of home page")  //here 1st middleware is called then here console.log prints in cmd
    res.send("Hello World")
})


app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})