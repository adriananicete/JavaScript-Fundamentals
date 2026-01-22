let user = {
    name: 'Adrian',
    age: 29,
    'is admin': false
};

console.log(user.name);
console.log(user.age)

user.isSeniorCitizen = false;

console.log(user)
console.log(user['is admin'])
console.log(user['name'])

user.age = 30
delete user.isSeniorCitizen
console.log(user)

user.isStudent = true;
console.log(user)

const someKey = 'age';
console.log(user[someKey])

// let car = prompt('What is your fav car?')

// let myCar = {
//     favCar: [car]
// }

// console.log(myCar)

// Constructor Function
function Car(name, model) {
    this.name = name;
    this.model = model;
    this.greet = () => console.log(`My Car is a ${this.name} ${this.model}.`)
}

const myBMW = new Car('BMW', 'X1')
console.log(myBMW)
myBMW.greet()


const person = new Object()
person.name = 'Roselyn';
person.age = 30
console.log(person)

// Factory Function
function createUser(name, age) {
    return {
        name,
        age,
        greet() {
            console.log(`Hello I'am ${this.name} and I'am ${this.age} years old.`)
        }
    }
}

const person1 = createUser('Dave', 28)
const person2 = createUser('Aaron', 26)
console.log(person1)
console.log(person2)
person2.greet()

let profile = {
    firstName: 'Adrian',
    middleName: 'Pablo',
    lastName: 'Anicete',
    fullName() {
        console.log(this.firstName, this.middleName, this.lastName)
    },
    
    age: 29,
    address: {
        houseNo: 438,
        street: 'Perez Street',
        barangay: 'Tanawan',
        city: 'Bustos',
        province: 'Bulacan',
        country: 'Philippines',
        fullAddress(){
        console.log(`${this.houseNo} ${this.street} ${this.barangay} ${this.city} ${this.province}`)
    },
    },
    introduce() {
        console.log(`I'am ${this.firstName} ${this.middleName} ${this.lastName}, I'am ${this.age} years old and I lived from ${this.address.city} ${this.address.province}`)
    },
    salary: undefined
}

profile.fullName()
profile.address.fullAddress()
profile.introduce()

if(!profile.salary) {
    console.log('The salary property doesnt exist')
}
console.log('salary' in profile)

// using for in loops i can print in the console the keys and values seperately
for(let key in profile){
    console.log(key)
    console.log(profile[key])
}

// using Object.keys(object) to get the keys in object inside an array
const arrOfKeys = Object.keys(profile)
console.log(arrOfKeys)


// Static Methods
const target = {p:1, a:2};
const source = {a:3, b:5}

// Assign Methods

const returnObj = Object.assign(target,source) // parang cinoncatenate nya yung dalawang obj pinagisa ni assign method and nagcrecreate din sya ng shallow copy pero mild copy lang dahil sa assign method ang nested objects ay pwede mamodify
console.log(returnObj)

const obj1 = {name: 'adrian'}
const obj2 = Object.assign({}, obj1)
console.log(obj2)
console.log(obj1 === obj2)


const obj3 = {a:5, b:{c:1}}
const obj4 = Object.assign({},obj3)
console.log(obj4)

// console.log(obj4.b.c = 2)
// console.log(obj3.b.c)

// console.log(obj4.a = 2)
// console.log(obj3.a)

// StructureClone Methods

const obj5 = structuredClone(obj3)
console.log(obj5.b.c = 10)
console.log(obj3.b.c)

// Object Entries Method is for converting objects into array
const example = {
    name: 'albert',
    age: 53
}

const arr = Object.entries(example)
console.log(arr)

const example2 = new Map(
    [
        ['foo', 'bar'],
        ['baz', 42]
    ]
)

console.log(example2)

const objEntries = Object.fromEntries(example2)
console.log(objEntries)

console.log(Object.hasOwn(objEntries, 'baz'))