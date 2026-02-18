class Car {
    #speed = 0
    start(){
        this.#injectFuel();
        this.#ignite();
        console.log('Engine Started.')
    }

    #injectFuel() {
        console.log('Fuel injected')
    }

    #ignite() {
        console.log('Spark Generated.')
    }

    accelerate(){
        this.#speed += 10;
        console.log('You accelerated by 10')
    }

    getSpeed(){
        console.log(`Your speed is ${this.#speed} mph`)
    }
}

const bmw = new Car()
bmw.start()

bmw.accelerate();
bmw.getSpeed()

bmw.accelerate();
bmw.getSpeed()

bmw.accelerate();
bmw.getSpeed()