let a = ()=> {
    console.log (" I AM USING ARROW FUNCTION ")
}
a()
let add = (a,b)=>{
    console.log(a+b);
} 
add(4,5)
let print = b => {
    console.log(b);
}
print(4);

a(4)
let info= (a,b)=> console.log(a+b);

let factorial = n => {
    if (n < 0) {
        return "Factorial not possible";
    }
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

console.log(factorial(4));



console.log(factorial(4));   
console.log(factorial(0));   // 1
console.log(factorial(-3));  // "Factorial not possible"
// ...existing code...