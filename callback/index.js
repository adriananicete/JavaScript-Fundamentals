
// console.log('Start')
// setTimeout(() => console.log('Waiting Done.'),2000)
// console.log('End')


// // Callback 
// // ang tawag sa function na pinapasa bilang argument sa isa pang funciton
// function greeting(name, callback){
//     console.log(`Hi ${name}`)
//     setTimeout(() => {
//         callback()
//     }, 2000);
//     console.log('I am still hanging here')
// }

// function sayBye(){
//     console.log('Bye')
// }

// greeting('Adrian', sayBye)

import { query } from '../callback/lib/query.js'

function orderPizza(type, name){
    query('api/pizzahub/', (result, error) => {
        if (!error) {
            console.log(result[0])
        }
    })
}

orderPizza('veg', 'Margherita')
