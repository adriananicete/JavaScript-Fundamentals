// Initialize the Object
// class Car {
//     constructor(model){
//         this.model = model;
//     }

//     printModel() {
//         console.log(this.model)
//     }

//     printThis() {
//         console.log(this)
//     }
// }

// const bmw = new Car('BMW');
// bmw.printThis()
// bmw.printModel();

// console.log(typeof Car)

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

// Private are methods that are need to be hidden
// Public fields are the data that you want to be seen

class WashingMachine {
    // Public Field
    brand;

    // Private Field
    #powerStatus = false;
    #currentCycle = null;

    constructor(brand){
        this.brand = brand;
    }

    start(cycle){

        if(!this.#powerStatus) {
            this.#turnOn();
        }

        this.#currentCycle = cycle;

        console.log(`Starting ${cycle} cycle.....`)
        this.#spin();

        this.#drain();

        this.stop()
    }

    stop() {
        
        this.#turnOff();
        console.log('Washing machine stopped.')
    }

    #spin(){
        console.log('Spinning....')
    }

    #drain(){
        console.log('Draining....')
    }

     #turnOn(){
        this.#powerStatus = true;
        console.log('Power On')
    }

     #turnOff(){
        this.#powerStatus = false;
        console.log('Power Off')
    }
}

const lgWasher = new WashingMachine('LG')
console.log(lgWasher)

lgWasher.start('Quick Wash')

// Extending
class Human {
    species = 'Homo Sapiens';

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`)
    }

    sleep() {
        console.log(`${this.name} is sleeping.....`)
    }


}

class Student extends Human {
    constructor(name,age,grade){
        super(name,age);
        this.grade = grade;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old and I study in grade ${this.grade}`)
    }

    study(){
        console.log(`${this.name} is studying.....`)
    }
}

class Teacher extends Human {
    constructor(name,age,subject) {
        super(name,age)
        this.subject = subject;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.subject} teacher.`)
    }

    teach() {
        console.log(`${this.name} is teaching ${this.subject}`)
    }
}

const adrian = new Student('Adrian', 29, 10)
const roselyn = new Teacher('Roselyn', 30, 'Math')

adrian.introduce()
roselyn.introduce()

adrian.sleep();
roselyn.sleep()