// Initialize the Object
class Car {
    constructor(model){
        this.model = model;
    }

    printModel() {
        console.log(this.model)
    }

    printThis() {
        console.log(this)
    }
}

const bmw = new Car('BMW');
bmw.printThis()
bmw.printModel();

console.log(typeof Car)

// Class as a Expression
const Employee = class {
    constructor(name){
        this.name = name;
    }

    welcomeEmp(){
        console.log(`Welcome, ${this.name}`)
    }

    printThis() {
        console.log(this)
    }
}

const emp1 = new Employee('Adrian')
emp1.welcomeEmp()
emp1.printThis()

// Class Fields
class Phone {
    brand = 'Apple';

    make() {
        console.log(this.brand)
    }
}

const phone = new Phone()
phone.make()

// Getters and Setters

class Animal {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return `The animal name is ${this._name}`
    }

    set name(value) {
        if(!value) {
            console.warn('A name is mandatory')
            return
        }
        
        if(value.length < 2){
            console.warn('The name must be of 2 or more characters!');
            return;
        }

        this._name = value;

    }
}

const tiger = new Animal('Tiger')
console.log(tiger.name)

tiger.name = "Bee"
console.log(tiger.name)

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // static utility method
    static isValidEmail(email) {
        return email.includes('@') && email.includes('.')
    }

    // static factory method
    static createUser(){
        return new User('Guest', 'guest@gmail.com')
    }

    greet() {
        console.log(`Hi, I'm ${this.name}`)
    }

}

const user1 = new User('Adrian', 'anicete.ian14@gmail.com')
user1.greet()

const userGuest = User.createUser()
userGuest.greet()