'use-strict';
console.log('this at the global', this)

// Implicit Binding
const employee = {
    id: 'A123',
    name: 'adrian',
    age:29,

    returnThis() {
        return this
    }
}

console.log(employee.returnThis())


const husband = {
    name: 'adrian',
    age: 29
}

const wife = {
    name: 'roselyn',
    age: 30
}

function greet(obj) {
    obj.logMessage = function(){
        return `${this.name} is ${this.age} years old`
    }

    console.log(obj)
}

greet(husband)
console.log(husband.logMessage())

greet(wife)
console.log(wife.logMessage())


const food = {
    name: 'Mango',
    color: 'yellow',

    getDesc: function() {
        return () => `${this.name} is ${this.color}`;
    }
}

const descFunc = food.getDesc()
console.log(descFunc())

// Explicit Binding - call, apply, bind

// The Call Method
function greeting() {
    console.log(`Hello, ${this.name} belongs to ${this.address}`)
}

const user = {
    name: 'adrian',
    address: 'All of You'
}

greeting.call(user)

function like(hobby1, hobby2) {
    console.log(`${this.name} likes ${hobby1}, ${hobby2}`)
}

like.call(user, 'Teaching','Blogging')

const profile = {
    firstName: 'Adrian',
    lastName: 'Anicete',
    age: 29,
    isEmployed: false
}

function backgroundProfile(hobby1,hobby2){
    console.log(`I am ${this.firstName} ${this.lastName} and my hobbies are ${hobby1} and ${hobby2}.`)
}
const arrToApply = ['Teaching', 'Running']
backgroundProfile.call(profile)
backgroundProfile.apply(profile,arrToApply)

function newHobbies(hobby1, hobby2) {
    console.log(`${this.name} likes ${hobby1}, ${hobby2}`)
}

const officer = { 
    name: 'ebong'
}

const newFunc = newHobbies.bind(officer, 'Basketball', 'Running')
newFunc()

// New Keyword
// Constructor Function
const Cartoon = function(name,animal){
    this.name = name; // property name ng instance
    this.animal = animal // property animal ng instance

    this.log = function(){
        console.log(this.name + ' is a ' + this.animal)
    }
}

const tom = new Cartoon('Tom', 'Cat') // create new instance using new
console.log(tom.name + ' ' + tom.animal) // access properties of the instance

const jerry = new Cartoon('Jerry', 'Mouse')
console.log(jerry.name + " " + jerry.animal)

tom.log()
jerry.log()