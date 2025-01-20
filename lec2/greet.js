//Module::it is a piece of code used in across all node application 

function greet(){
    console.log("Hello, World!:dev::");
}

function sub(a,b){
    if(a>b){
        console.log("Hello, World!:dev::",a-b);
    }else if(a<b){
        console.log("Hello, World!:dev::",b-a);
    }else{
        console.log("Exit!..")
    }
}
//greet()
module.exports={greet,sub};