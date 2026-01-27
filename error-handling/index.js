console.log("Error Handling");

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

// try...catch ****************************************************************

// 1. Code inside try gets executed.
// 2. If no error in the try block, the catch block will be ignored and will not be executed.
// 3. If theres an error in try block, the execution of the try block will be suspended and the control will move to the catch block. In the catch block you can find the error details and do the needful.

// try {
//     console.log('execution starts here')
//     abc; // ReferenceError
//     console.log('execution ends here')
// } catch (error) {
//     console.error('An Error has occured')
//     console.log(error)
//     console.error(error.name)
//     console.error(error.message)
// }

// Real-world Use Cases

// function divideNumbers(a,b){
//     try {
//         if(b === 0){
//             throw new Error('Division by zero is not allowed!')
//         }

//         const result = a / b;
//         console.log('The result is ' + result)
//     } catch (error) {
//         console.error('Got a Math Error:', error)
//     }
// }

// divideNumbers(5,0)
// divideNumbers(15,5)

// const person = {
//     name: 'adrian',
//     address: {
//         city: 'Bustos'
//     }
// }

// function getPostalCode(user){
//     try {
//         console.log(user.address.country.postalCode)
//     } catch (error) {
//         console.error(error.message)
//     }
// }

// getPostalCode(person)

// function validateAge(age){
//     try {
//         if(isNaN(age)){
//             throw new Error(`Invalid input: Age must be a Number. Your input is ${typeof age}`)
//         }

//         console.log("User's age is: " + age)
//     } catch (error) {
//         console.error('Validation Error:', error.message)
//     }
// }

// validateAge('adrian')

// Rethrow ***********************************************************

// function validationForm(formData) {
//   try {
//     if (!formData.username) throw new Error("Username is Mandatory");
//     if (!formData.email.includes("@")) throw new Error("Invalid email format");
//   } catch (error) {
//     console.error("Validation Issues Found:", error.message);
//     throw error; // rethrow
//   }
// }

// try {
//   validationForm({ username: "adrian", email: "adriananicete" });
// } catch (error) {
//   console.error("Showing error message for user creation", error.message);
// }

// try-catch-finally

// try {
// } catch (error) {
// } finally {
// }

// function processInformation(information) {
//   try {
//     console.log("Processing Information....");
//     if (!information) throw new Error("No Information available to process");
//     console.log("Information processed");
//   } catch (error) {
//     console.error('Error: ', error.message)
//   } finally {
//     console.log('Cleanup: Closing database connection')
//   }

// }

// processInformation()


// Custom Error ****************************************************************

function ValidationError(message){
    this.name = "ValidationError";
    this.message = message;
    this.stack = new Error().stack
}

ValidationError.prototype = Object.create(Error.prototype);

function validateCitizen(age){
    if(age < 60) throw new ValidationError('You are not a senior citizen')

    return 'You are a senior citizen'
}

try {
    const message = validateCitizen(45);
    console.log(message)
} catch (error) {
    console.error(`${error.name}: ${error.message}`)
}