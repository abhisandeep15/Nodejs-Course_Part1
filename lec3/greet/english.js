const obj=require("./greeting.json")

function greet(){
    console.log(obj.name);
}

module.exports=greet;