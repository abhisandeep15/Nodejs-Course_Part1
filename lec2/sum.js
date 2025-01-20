
function sum(a,b){
    return a+b;
}

function greetSum(text,a,b,sum){
    const result = sum(a,b)

    console.log(text,result)
}
greetSum("hello the sum:",490,30,sum)