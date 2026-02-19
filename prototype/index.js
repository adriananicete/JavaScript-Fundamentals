// Constructor Function
function Car(model,year,color,owner){
    this.model = model;
    this.year = year;
    this.color = color;
    this.owner = owner;

}

function Owner(name,age){
    this.name = name;
    this.age = age;
}

const adrian = new Owner('Adrian', 29)

const bmw = new Car('BMW', 2024, 'BLUE', adrian)
console.log(bmw)

Car.prototype.wheelNum = () => 4;
Car.prototype.fuel = () => `High`
console.log(bmw.wheelNum())
console.log(bmw.fuel())

const tesla = new Car('Tesla', 2016, 'green', {})
console.log(tesla)
console.log(tesla.wheelNum())

// Object.create()

const vehicle = {
    isLuxury: false,
    isFourWheeler: false,

    showInfo() {
        return `The vehicle ${this.name} is of ${this.color}. Is it a luxury vehicle? ${this.isLuxury}. Does it have a wheel? ${this.isFourWheeler}. Headlight are ${this.headlight}.`
    }
}

vehicle.name = 'Tesla'

console.log(vehicle.showInfo())

console.log(vehicle)

const car = Object.create(vehicle, {headlight: {value: 4}})
car.name = 'BMW';
car.color = 'blue';
car.isFourWheeler = true;
car.isLuxury = true;
console.log(car)


console.log(car.showInfo())

console.log(Object.getPrototypeOf(bmw))