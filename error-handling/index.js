console.log('Error Handling')

// What are we going to learn today?

// 1. Different Types of Error in Javascript
// 2. try...catch syntax and flow
// 3. Real-world Use cases with try...catch
// 4. Throwing Error
// 5. Rethrowing Error
// 6. The try..catch..finally
// 7. Creating Custom Error
// 8. Self Assignment Operator


// parsing error - 
// runtime error -

// What is an Exception in JavaScript?
// Ans: Exceptions are runtime errors that disrupt program execution

// Examples:

// console.log(x) // ReferenceError: x is not defined

// let obj = null;
// console.log(obj.name) // TypeError: Cannot read properties of null

// try...catch

// 1. Code inside try gets executed.
// 2. If no error in the try block, the catch block will be ignored and will not be executed.
// 3. If theres an error in try block, the execution of the try block will be suspended and the control will move to the catch block. In the catch block you can find the error details and do the needful.

try {
    console.log('execution starts here')
    abc; // ReferenceError
    console.log('execution ends here')
} catch (error) {
    console.error('An Error has occured')
    console.log(error)
}