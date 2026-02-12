// // const promise = new Promise((resolve, reject) => {

// // })

// // // Executor Function
// // function(resolve, reject) {

// // }

// // states
// // pending - Initially when the executor function starts the execution.
// // fullfill - when the promised is resolved.
// // reject - when the promised is rejected.

// // results
// // undefined - pagpending ang promise ito ay undefined / Initially when the state value is pending
// // value - when resolve is called.
// // error - when reject is called.

// // Handling Promises

// // .then()
// let loading = false;
// const promise1 = new Promise((resolve, reject) => {
//   loading = true;
//   resolve("I am resolved....");
// });

// promise1
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((er) => console.error(er))
//   .finally(() => (loading = false));

// // Promise Chain
// // Rule 1: Every promise gives you a .then() handler method. Every rejected promise gives you a .catch() handler.

// // Rule 2: You can do mainly three things from the .then() method. You can return another promise(for async operation). You can return any other value from a synchronous opeartion. Lastly, you can throw an error.

// // Return a promise from the .then() handler

// // Create a Promise
// let getUser = new Promise((resolve, reject) => {
//   const user = {
//     name: "Adrian",
//     email: "anicete.ian14@gmail.com",
//     password: "123456",
//     permissions: ["db", "hr", "dev"],
//   };

//   resolve(user);
// });

// getUser
//   .then((user) => {
//     console.log(user.name);

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Anicete");
//       }, 2000);
//     });
//   })
//   .then((lastName) => {
//     console.log(lastName);
//   });

// // Return a simple value from the .then() method
// getUser
//   .then((user) => {
//     console.log(user.email);
//     return user.email;
//   })
//   .then((email) => console.log(email));

// getUser
//   .then((data) => {
//     console.log(`Got user name: ${data.name}`);
//     if (!data.permissions.includes("hr")) {
//       throw new Error("You are not allowed to access the HR module");
//     }

//     return data.permissions;
//   })
//   .then((permissions) => console.log(`Permission Value: ${permissions}`))
//   .catch((error) => console.error(error));

// // Rule 3: You can rethrow the .catch() handler to handle the error later. In this case, the control will go to the next closest .catch() handler

// const promise401 = new Promise((resolve, reject) => {
//   reject(401);
// });

// promise401
//   .catch((error) => {
//     console.log(error);

//     if (error === 401) {
//       console.log("Rethrowing 401");
//       throw error;
//     } else {
//     }
//   })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(`handling ${error} here`));

// // finally
// const final = new Promise((resolve, reject) => {
//   resolve("Testing Finally");
// });

// final
//   .finally(() => console.log("Running Finally"))
//   .then((data) => console.log(data));


// // Promise chaining
// const number = new Promise((resolve, reject) => {
//     resolve(10)
// })

// number
//     .then(value => {
//         value++
//         return value
//     })
//     .then(value => {
//         value = value + 10
//         return value
//     })
//     .then(value => {
//         value = value + 20
//         console.log(value)
//     })

// Handle Multiple Promises
// promise.all([promises])

function getPromise(url){
    return fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error(`HTTP error ${response.status}`)
            }
            return response.json()
        })
}

const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur'
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate'
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna'

const promise_1 = getPromise(BULBASAUR_POKEMONS_URL)
const promise_2 = getPromise(RATICATE_POKEMONS_URL)
const promise_3 = getPromise(KAKUNA_POKEMONS_URL)

// Promise.all([promise_1,promise_2,promise_3])
//     .then(data => console.log(data))
//     .catch(error => console.error(error))

// Promise.any([promise_1,promise_2,promise_3])
//     .then(data => console.log(data))
//     .catch(error => console.error(error))

Promise.allSettled([promise_1,promise_2,promise_3])
    .then(data => console.log(data))
    .catch(error => console.error(error))