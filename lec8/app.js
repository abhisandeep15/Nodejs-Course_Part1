const http=require("http")


// const server=http.createServer((req,res)=>{
//     if (req.url==="/"){
//         res.writeHead(200,{"content-type":"text/plain"})
//         res.end("home")    
//     }else if(req.url==="/api/user"){
//         const user={
//             "name":"john",
//             "age":30,
//             "email":"john@gmail.com"
//         }
//         const Data=JSON.stringify(user);
//         //console.log(Data)
//         console.log(JSON.parse(Data))

//         res.writeHead(200,{"content-type":"application/json"})
//         res.end(Data)
//     }else if(req.url==="/login"){
//         res.writeHead(200,{"content-type":"text/plain"})
//         res.end("login page")
        
//     }else if(req.url==="/signup"){
//         res.writeHead(200,{"content-type":"text/plain"})
//         res.end("signup page")
//     }else{
//         res.writeHead(404,{"content-type":"text/plain"})
//         res.end("page not found")
//     }  
// })

//!---HANDALING POST METHOD----!(GET,PUT,POST,PATCH)


const server=http.createServer((req,res)=>{

if (req.method ==="POST" && req.url==="/submit"){
    let body="";
    req.on("data",(chunk)=>{
        body+=chunk.toString();     //convert buffer to string.
    })
    //End event triggered when all data received
    req.on("end",()=>{
        //console.log(body)
        console.log(JSON.parse(body))
        res.writeHead(200,{"content-type":"application/json"})
        res.end(JSON.stringify({sucess:true, message:"Account created sucessfully"}))
    })
}else{
    res.writable(404,{"content-type":"text/html"})
    res.end(JSON.stringify({sucess:false , message:"the page you are looking for is not found"}))
}

})

server.listen(8000,()=>{
    console.log("the server is running at the port number:8000")
})


