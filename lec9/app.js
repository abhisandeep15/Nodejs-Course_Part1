const http=require("http")
const fs=require("fs")
const path=require("path")//it also works same like fs


const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})

    // const filepath=__dirname+"/index.html"
    // console.log(filepath)

    //const htmlContent=fs.readFileSync(filepath)

    const htmlContent=fs.readFileSync(__dirname+"/index.html")
    res.end(htmlContent)
})





server.listen(3000,()=>{
    console.log("server is running on port number:3000")
})

















