// JS Engine
// LINE BY LINE, , JIT Compilation

console.log(greeting);
var greeting = "Hello";
console.log(greeting);

// Behind the scenes:

// var greeting;             <-- done by Js engine, hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"

// var a;
console.log(a);
var a = "Pramod";
console.log(a);

// Hoisting in case of function
function getUserStatus() { // JS Engine
    //var status_code; JS Engine (optimized the code)
    console.log(status_code);
    var status_code = "Active";
    console.log(status_code);
}

getUserStatus();

// Note: var is function-scoped, so status is hoisted to
// the top of getUserStatus(), NOT the global scope.