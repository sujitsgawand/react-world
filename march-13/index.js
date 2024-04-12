console.log("Hello World!")

let name = {
    firstName: "Sujit",
    lastName: "Gawand",
    printFullName: function () {
        console.log(this.firstName + " " + this.lastName + " ☺️");
    }
}

name.printFullName();

// function borrowing

const name2 = {
    firstName: "Sachin",
    lastName: "Tendulkar"
}

name.printFullName.call(name2);

// in apply method we pass arguments as array in second argument.

// call()
// The call() method in JavaScript is used to invoke a function with a specific object setting the context of the this 
// keyword within the function. Here's a breakdown of how it works:

// Normal Function Call vs. call() method:

// Normal Call: When you call a function regularly, the this keyword inside the function refers to the global object 
// (in non-strict mode) or remains undefined (in strict mode).

// call() method: This method allows you to explicitly set the value of this within the function you're calling. 
// You provide the object you want this to reference as the first argument to call(), followed by any other arguments the function expects.
// Syntax:
// functionName.call(thisArg, arg1, arg2, ...)
// 1) functionName: The name of the function you want to call.
// 2) thisArg: The object you want to set as the context for this within the function.
// 3) arg1, arg2, ...: (Optional) Any arguments the function expects.

// Use Cases:
// Borrowing methods: You can use call() to borrow a method from one object and use it with another object.
// Changing "this" behavior: This is useful when you have a function that relies on "this" and you want to control what it references.


// apply()
// Syntax:
// functionName.apply(thisArg, argumentsArray)
// 1) functionName: The name of the function you want to call.
// 2) thisArg: The object you want to set as the context for this within the function.
// 3) argumentsArray: An array containing the arguments you want to pass to the function.