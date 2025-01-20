// let a=10;
// let b=20;

// console.log(a+b);

//Function statement

function greet(){
    console.log("Hello");
}
greet(); //calling function or invoke a function


//Function are first class ::means we can pass one function in other function as arguments is called 1st class function

function login(fn){
    fn();  
}
login(greet);  //ans:hello hello 


//Function Expression:we are assigning functions in varaiables is called as function expression

let func=function(){
    console.log("Hello World");
}
func()

//Use the function expression on the fly


login(function(){
    console.log("Login Success");
})