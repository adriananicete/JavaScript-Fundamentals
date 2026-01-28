console.log('JavaScript Array Master Course')

const mixedArray = [100,true,'adrian',{}]

// index = The position of an element in the array is known as its index.
// index starts with 0
// index ends with length - 1

const salad = ['tomato','avocado','banana','mushroom']

function Car(model){
    this.model = model;
}

const bmwCar = new Car('BMW X1')
console.log(bmwCar)

const anotherSalad = new Array('tomato','avocado','banana')
console.log(anotherSalad)

const compare = salad === anotherSalad
console.log(compare)

for(let i = 0; i < salad.length; i++){
    console.log(`Element at index ${i} is ${salad[i]}`)
}   

// push() - add an array to the end
const ret = salad.push('peanut');
console.log(ret)
console.log(salad)

// unshift - add an array to the start
const unRet = salad.unshift('peanut');
console.log(unRet)
console.log(salad)

// pop - remove a data from the array from the end
const popRet = salad.pop()
console.log(popRet)
console.log(salad)

// shift - remove a data from the start of an array
const shiftRet = salad.shift()
console.log(shiftRet)
console.log(salad)

// slice() - slice can also do a copy of an array, it does not mutate the original array
const saladCopy = salad.slice()
console.log(salad)

// isArray() - use for checking the values if it is an array
console.log(Array.isArray('tomato','avocado','banana'))
console.log(Array.isArray(['tomato','avocado','banana']))
console.log(Array.isArray([]))
console.log(Array.isArray(50))

// Array Destructuring
const [ tomato, avocado, banana, mushroom] = salad
console.log(mushroom)

console.log(salad)

// You can skip a value on an array by using array destructuring
const [ tomatoes, , carrot] = ['tomato','mushroom', 'carrot'] // the mushroom is skip now
console.log(tomatoes)
console.log(carrot)

// Array destructuring default values
const fruits = ['apple']
const [ apple, strawberry = 'strawberry'] = fruits
console.log(apple)
console.log(strawberry)
console.log(fruits)