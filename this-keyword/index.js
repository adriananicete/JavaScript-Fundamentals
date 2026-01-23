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