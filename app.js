

let a = 5;
let s = "s"; 
console.log("a" + ("as"- a) + "as");


let calculate = function(a, b, divide) {
    return divide(a, b);
}
function divide (a, b) {
    return a / b;
}
console.log(calculate(6000, 20, divide));
