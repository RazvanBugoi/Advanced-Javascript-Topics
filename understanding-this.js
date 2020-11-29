//  this is : 
//  - established at runtime, when a function is invoked;
//  - determined by how a function is invoked, not where the function is defined;
//  - a reference to the object;


// this is not : 
// - the function. Though it is established when the function is invoked, it is not the function;

// The binding of a value to "this" can be implicit (set by the JS engine) or explicit (set by you)



// Examining "this" with normal function invocations

var name = "global";

let fun1 = function() {
    const name = "function1";
    console.log(this) // output Window which is the global Object in the browser
    console.log(this.name) // output global because Window.name = "global"
}

fun1();