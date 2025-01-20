//packages are piece of code  that we can use in our project ex:like modules,math


const express=require("express")

//1.step to create web server

const app=express()

//here we can use all the methods of express like get,post,put,delete etc.

// app.get("/home",(req,res)=>{
//     res.send("<h1>hello iam coming from h1</h1>")
// })


// app.get("/home",(req,res)=>{
//     const user={
//         "name":"sachin",
//         age:25,
//         "email":"sachin@gmail.com"

//     }
//     res.send(user)
// })


app.get("/login",(re,res)=>{
    res.send("Hello it is login page")
})

app.get("/contact/name/number",(req,res)=>{
    //res.send("it is the contact page..")
    res.status(200).json({
        "name":"sachin",
        "number":1234567890
    })
})

app.get("/api/product/:newid", (req, res) => {
    //const id = req.params.newid;
    const {newid}=req.params
    console.log(newid);

    const product = {
        "id": 1,
        "course": "javascript"
    };

    // Corrected the response method
    res.status(200).json({
        "success": true,
        "product": product
    });
});


app.listen(8000,()=>{
    console.log("server is running at the port:8000")
})





















