console.log('JavaScript Array Master Course')

// const mixedArray = [100,true,'adrian',{}]

// index = The position of an element in the array is known as its index.
// index starts with 0
// index ends with length - 1

// const salad = ['tomato','avocado','banana','mushroom']

// function Car(model){
//     this.model = model;
// }

// const bmwCar = new Car('BMW X1')
// console.log(bmwCar)

// const anotherSalad = new Array('tomato','avocado','banana')
// console.log(anotherSalad)

// const compare = salad === anotherSalad
// console.log(compare)

// for(let i = 0; i < salad.length; i++){
//     console.log(`Element at index ${i} is ${salad[i]}`)
// }   

// // push() - add an array to the end
// const ret = salad.push('peanut');
// console.log(ret)
// console.log(salad)

// // unshift - add an array to the start
// const unRet = salad.unshift('peanut');
// console.log(unRet)
// console.log(salad)

// // pop - remove a data from the array from the end
// const popRet = salad.pop()
// console.log(popRet)
// console.log(salad)

// // shift - remove a data from the start of an array
// const shiftRet = salad.shift()
// console.log(shiftRet)
// console.log(salad)

// // slice() - slice can also do a copy of an array, it does not mutate the original array
// const saladCopy = salad.slice()
// console.log(salad)

// // isArray() - use for checking the values if it is an array
// console.log(Array.isArray('tomato','avocado','banana'))
// console.log(Array.isArray(['tomato','avocado','banana']))
// console.log(Array.isArray([]))
// console.log(Array.isArray(50))

// // Array Destructuring
// const [ tomato, avocado, banana, mushroom] = salad
// console.log(mushroom)

// console.log(salad)

// // You can skip a value on an array by using array destructuring
// const [ tomatoes, , carrot] = ['tomato','mushroom', 'carrot'] // the mushroom is skip now
// console.log(tomatoes)
// console.log(carrot)

// // Array destructuring default values
// const fruits = ['apple']
// const [ apple, strawberry = 'strawberry'] = fruits
// console.log(apple)
// console.log(strawberry)
// console.log(fruits)


// // Nested Arrays

// const num = [1,2,3,[4,5]]
// const arr = num[num.length - 1]
// const five = arr[arr.length - 1]

// console.log(arr)
// console.log(five)

// console.log(num[3][1])

// // Rest and Spread

// const instruments = ['guitar','drums','bass','violin','keyboard','flute']

// // Rest
// const [ guitar, drums, ...rest] = instruments
// console.log(guitar)
// console.log(drums)
// console.log(rest)

// // Spread
// const shallowCopy = [...instruments]
// console.log(shallowCopy)
// console.log(instruments)

// console.log(shallowCopy === instruments)


// // Swapping
// let two = 1;
// let one = 2;

// [two, one] = [one, two]

// console.log(one)
// console.log(two)

// // Merge
// const emotions = ['happy','sad']
// const veggies = ['talong','kalabasa','okra']

// const merge = [...emotions, ...veggies]
// console.log(merge)

// // length

// // another way to delete the last value/index in an araray
// veggies.length = 2
// console.log(veggies)

// // you can also delete the whole array by assigning 0 to the length property of an array
// veggies.length = 0
// console.log(veggies) // this will return empty array

// // Concat() Method
// const first = [1,2,3]
// const second = [4,5,6]
// const third = [7,8,9]
// const fourth = [10,11,12]

// const merge1 = first.concat(second)
// console.log(merge1)

// const merge2 = first.concat(second,third,fourth)
// console.log(merge2)

// // We can see that the original arrays are not change or mutate so concat is a non-mutating method
// console.log(first)
// console.log(second) 
// console.log(third)
// console.log(fourth)

// // Join() Method ************************************************************************
// const name = ['a','d','r','i','a','n']
// console.log(name.join("-")) // join method returns a string

// // fill method - minumutate nya yung original array
// const colors = ['red','blue', 'green','violet','yellow']

// colors.fill('pink', 1,colors.length - 1)
// console.log(colors)

// // includes() Method
// const names = ['adrian','roselyn','aaron','dave','adrian']

// console.log(names.includes('adrian'))

// // indexOf() and lastIndexOf() **********************************************************
// console.log(names.indexOf('adrian'))
// console.log(names.indexOf('dave'))
// console.log(names.indexOf('bob'))

// console.log(names.lastIndexOf('adrian'))
// console.log(names.lastIndexOf('dave'))

// const searchName = (name) => {
    
//     if(names.includes(name)){
//         const i = names.indexOf(name)
//         return `We found ${names[i]}`
//     } else {
//         return 'We cannot find ' + name
//     }
// }

// console.log(searchName('adrian'))

// // sort Method ***********************************************************************
// // the default sort method converts na element types into string
// // the default sorting order is ascending

// // console.log('After default sorting', names.sort())

// const artists = [
//   'Charles Aubry',
//   'Alphonse Mucha',
//   'Gustav Klimt',
//   'Aubrey Beardsley',
//   'Henri de Toulouse-Lautrec',
//   'William Morris'
// ]

// console.log('After default sorting', names.sort((a,b) => b.localeCompare(a)))
// console.log('After default sorting', merge2.sort((a,b) => a - b))
// console.log(merge2)

// // splice() Method **********************************************************************
// console.log(names)

// // remove the last adrian from the array
// console.log(names.splice(names.length-1,1))
// console.log(names)

// // add shaira after roselyn
// names.splice(2,0,'shaira','adrian')
// console.log(names)

// // remove 2 elements from the array
// names.splice(1,2)
// console.log(names)

// // at() Method it like like bracket in array like this fruits[1] but in this code you cannot input negative values
// console.log(merge2)
// console.log(merge2.at(-2))

// Grouping Object.groupBy() *************************************************************
// const employees = [
//   { name: 'Adrian Anicete', dept: 'IT', salary: 4500 },
//   { name: 'Maria Cruz', dept: 'HR', salary: 3800 },
//   { name: 'John Doe', dept: 'Finance', salary: 50000 },
//   { name: 'Liza Santos', dept: 'Marketing', salary: 42000 },
//   { name: 'Carlos Reyes', dept: 'IT', salary: 47000 },
//   { name: 'Anna Lopez', dept: 'Finance', salary: 52000 }
// ]

// console.log(Object.groupBy(employees, ({dept}) => dept))

// const groupByLessThan5k = Object.groupBy(employees, ({salary}) => {
//     return salary >= 5000 ? 'More than 5k' : 'Less than 5k'
// })


// console.log(typeof groupByLessThan5k)

// const { 'Less than 5k': lessThan, 'More than 5k': moreThan } = groupByLessThan5k
// console.log(moreThan)

// console.log(Array.isArray(groupByLessThan5k))

// ToReversed() ******************************************************************
// will not mutate or change the original array unlike the reverse() method
const num = [1,2,3];
console.log(num.toReversed())
console.log(num)

// toSorted() Method **************************************************************
const artists = [
  'Charles Aubry',
  'Alphonse Mucha',
  'Gustav Klimt',
  'Aubrey Beardsley',
  'Henri de Toulouse-Lautrec',
  'William Morris'
]

const sorted = artists.toSorted((a,b) => b.localeCompare(a))
console.log(sorted)
console.log(artists)

// toSpliced() **************************************************************
console.log(artists.toSpliced(artists.length -1 ,    1    ,'Adrian Anicete'))
                                // index        deletecount  add item

// with() Method ****************************************************************
// to replace an element to the array but not mutate the original array it returns new array
// with(index,value na gusto mong ipalit)
const names = ['adrian','roselyn','neslie','angelo','aaron',]
console.log(names.with(2,'shaira'))
console.log('This is the original Array',names)

console.log(names.with(3,"Dave"))

for(let name of names){
    if(name === 'angelo'){
        const i = names.indexOf('angelo')
        const change = names.with(i,'dave')
        console.log(change)
    }
    
}

// Array-like
function checkArgs(){
    console.log(arguments)
    return arguments
    
}

const data = Array.from(checkArgs(1,45))
console.log(data)

// Array.of()
// ginagamit ito para gumawa ng bagong array katulad ng new Array() 
// pero mas mainam ito dahil kahit single argument lang na number gagawin parin nyan array ito
// unlike sa new Array() na pag single number magiging length ng empty elements
const newArr = Array.of(5)
console.log(newArr)

const newAr = new Array('ian')
console.log(newAr)

// ************************** Array Iterable Methods ********************************
const customers = [
  {
    'id': 1,
    'firstname': "Juan",
    'lastname': "Dela Cruz",
    'gender': "Male",
    'married': true,
    'age': 60,
    'expense': 15000,
    'purchased': ['Shampoo', 'Toys','Book']
  },
  {
    'id': 2,
    'firstname': "Maria",
    'lastname': "Santos",
    'gender': "Female",
    'married': false,
    'age': 26,
    'expense': 8200,
    'purchased': ['Stick', 'Blade']
  },
  {
    'id': 3,
    'firstname': "Diana",
    'lastname': "Cherry",
    'gender': "Male",
    'married': true,
    'age': 45,
    'expense': 21000,
    'purchased': ['Lipstick', 'Nail Polish','Bag', 'Book']
  },
  {
    'id': 4,
    'firstname': "Ana",
    'lastname': "Lopez",
    'gender': "Female",
    'married': true,
    'age': 61,
    'expense': 17500,
    'purchased': ['Book']
  },
  {
    'id': 5,
    'firstname': "Mark",
    'lastname': "Garcia",
    'gender': "Male",
    'married': false,
    'age': 23,
    'expense': 4500,
    'purchased': ['Toys']
  },
  {
    'id': 6,
    'firstname': "Roselyn",
    'lastname': "Soriano",
    'gender': "Female",
    'married': true,
    'age': 29,
    'expense': 4500,
    'purchased': ['Lipstick']
  },
  {
    'id': 7,
    'firstname': "Adrian",
    'lastname': "Anicete",
    'gender': "Male",
    'married': true,
    'age': 29,
    'expense': 4500,
    'purchased': ['Guitar']
  }
];

// filter() **************************************************************************
// Get 'Senior Citizens' by Filtering out other customers
const getSeniorCitizen = customers.filter(customer => customer.age >= 60)
console.log(getSeniorCitizen)


// map() **************************************************************************
// Transform to add title and full name
const customersWithFullNames = customers.map(customer => {
    let title = "";

    if (customer.gender === 'Male') {
        title = 'Mr.'
    } else if(customer.gender === 'Female' && customer.married){
        title = 'Mrs.'
    } else {
        title = 'Ms.'
    }

    customer['fullName'] = `${title} ${customer.firstname} ${customer.lastname}`
    return customer
}) 

console.log(customersWithFullNames)