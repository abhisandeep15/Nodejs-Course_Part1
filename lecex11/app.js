//const express=require("express")

import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import  userRoute from "./routes/user.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

//common api links for login and register example ::app.use("api/user",userRoute)

app.use(userRoute)

// app.post("/api/register",(req,res)=>{

//     const {email,password}=req.body;
//     //save data in database
//     res.status(200).json({
//         sucess:true,
//         message:"User created successfully"
//     })
    

    // const obj=req.body;
    // console.log(obj);
    // res.status(200).json({
    //     "success":true,
    //     "messagae":"Account Created Successfully"
    // })
//})










app.listen(PORT, () => {
    console.log(`Server is running at port number: ${PORT}`);
});








































