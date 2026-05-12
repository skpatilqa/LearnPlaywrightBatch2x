var testCases = ["Login", "Logout", "Signup"];
for (var i = 0; i < testCases.length; i++) {
    console.log(testCases[i]);
}
console.log("Loop counter leaked outside:", i);
//actually i should not get printed outside for loop
// but as var is function scope it gets printed.

//-------------------------------------------------
var a = 10;// Global SCOPE

// var is function scoped

console.log(a);

function printHello() {
    console.log("Hello TheTestingAcademy!");
    var a = 20; // Local Scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a); // 30
    }
    console.log(a);//30 => actually ans should be 2
    // 0, as scope of 30 is for above block and has ended as block extends
}

printHello();

var a = 10; // Global Scope
console.log(a);
// Defination of the function
function printHello() {
    console.log("Hello TheTestingAcademy!");
    var a = 20; // Local Scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a); // 30
    }
    console.log("F ->", a);
}

console.log("G ->", a);

printHello();
