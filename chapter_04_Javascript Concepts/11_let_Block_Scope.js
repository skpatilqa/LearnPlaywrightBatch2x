// let - Block Scoped
let b = 10;

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry attempt:", retryCount);

//let retryCount = 5;

//let retryCount = 5; SyntaxError: Identifier 'retryCount' has already been declared

// ❌ SyntaxError: redeclaration not allowed

let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = 1200;
    console.log("Inside block:", executionTime);   // 1200
}

console.log(executionTime); // need to comment else will give error
// ReferenceError: executionTime is not defined
// This error comes as we are trying to print execution time after block has end.

// {} - Block
// if(){} - Block
// function name(){} - Block

let a = 10; // Global Scope
console.log(a);
// Defination of the function
function printHello() {
    console.log("Hello TheTestingAcademy!");
    let a = 20; // Local Scope
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a); // 30
    }
    console.log("F ->", a);// 20
}

console.log("G ->", a); //10

printHello();
// let can be redeclered in block again.
let name = "pending";
name = "done";
{
    let name = "Dutta";
}

function say() {
    let name = "Dutta";
}
say();
say();
