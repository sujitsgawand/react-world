let name = {
    firstName : "Sujit",
    lastName: "Gawand"
}

const printName = function (homeTown, state, country) {
    console.log(this.firstName + " " + this.lastName + ", " + homeTown + ", " + state + ", " + country);
}

let printNameByBind = printName.bind(name, "Alibag", "MH", "India");
printNameByBind();

// polyFill for bind method

Function.prototype.myBind = function(...args) {
    const obj = this;
    let params = args.slice(1);
    return function(...args2){
        obj.apply(args[0], [...params, ...args2])
    }
}

const printNameByMyBind = printName.myBind(name, "Pune", "MH", "India");
printNameByMyBind();

// bind method which copies method but not run that method but gives refernce of that method which can be run by that ref variable.


// bind()
// The bind() method in JavaScript is a powerful tool for creating new functions with a pre-set this context and, optionally, pre-set arguments.

// What does bind() do?

// 1) Creates a new function: The primary role of bind() is to create a new function (often called a bound function). 
//      This bound function is a copy of the original function but with a permanently set this value.
// 2) Sets the this context:  The first argument you pass to bind() becomes the value that this will refer to inside the bound function.
//      This lets you control what object this is associated with, even if the original function isn't designed around it.
// 3) Pre-sets arguments (optional):  In addition to setting this, bind() allows you to provide initial arguments to the function.
//      These arguments will be "baked into" the bound function and used ahead of any other arguments provided 
//      when the bound function is ultimately called.

// Syntax:
// const boundFunction = originalFunction.bind(thisArg, arg1, arg2, ...);
// 1) originalFunction: The function you want to create a bound version of.
// 2) thisArg: The object you want to be the value of this within the bound function.
// 3) arg1, arg2, ...: (Optional) Any initial arguments you want to pre-set for the bound function.

// Use Cases:
// 1) Callback Functions:  bind() is often used when you need to pass a function as a callback but want to control its this context. 
//     (for example, when using event listeners).
// 2) Partial Application: bind() can create partially applied functions, where some arguments are fixed.
//     This reduces the number of arguments to provide at call time.
// 3) Working with Object Methods:  Use bind() to borrow methods from other objects or 
//     to ensure a method always operates on the context it expects.

// Key Points
// 1) bind() returns a new function, it doesn't modify the original.
// 2) The bound function's this context is fixed and cannot be overridden when it's called.