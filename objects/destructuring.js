console.log('Destructuring')

const student = {
    'firstName': 'Adrian',
    'middleName': 'Pablo',
    'lastName': 'Anicete',
    fullName() {
        console.log(this.firstName, this.middleName, this.lastName)
    },
    
    'age': 29,
    'address': {
        'houseNo': 438,
        'street': 'Perez Street',
        'barangay': 'Tanawan',
        'city': 'Bustos',
        'province': 'Bulacan',
        'country': 'Philippines',

        fullAddress(){
        console.log(`${this.houseNo} ${this.street} ${this.barangay} ${this.city} ${this.province}`)
    },
    },
    introduce() {
        console.log(`I'am ${this.firstName} ${this.middleName} ${this.lastName}, I'am ${this.age} years old and I lived from ${this.address.city} ${this.address.province}`)
    },
    'subjects': ['Math', 'English', 'Filipino', 'Science'],
    sal: 5000
}

// const { firstName, middleName, lastName } = student;
// const { city, province, country } = student.address
// console.log(city)

const {address: {city, country}} = student;
console.log(country)

// // const {subjects, totalSubject = subjects.length} = student
// // console.log(subjects)
// console.log(totalSubject)

const { sal: salary} = student
console.log(salary)

const getStudent = () => {
    return {
    'firstName': 'Adrian',
    'middleName': 'Pablo',
    'lastName': 'Anicete',
    fullName() {
        console.log(this.firstName, this.middleName, this.lastName)
    },
    
    'age': 29,
    'address': {
        'houseNo': 438,
        'street': 'Perez Street',
        'barangay': 'Tanawan',
        'city': 'Bustos',
        'province': 'Bulacan',
        'country': 'Philippines',

        fullAddress(){
        console.log(`${this.houseNo} ${this.street} ${this.barangay} ${this.city} ${this.province}`)
    },
    },
    introduce() {
        console.log(`I'am ${this.firstName} ${this.middleName} ${this.lastName}, I'am ${this.age} years old and I lived from ${this.address.city} ${this.address.province}`)
    },
    'subjects': ['Math', 'English', 'Filipino', 'Science'],
    sal: 5000
}
}

const { age , subjects } =getStudent()
console.log(age)
console.log(subjects)

const {age: anotherAge, subjects: anotherSubs} = getStudent()

console.log(anotherAge)
console.log(anotherSubs)


// Loops

const students = [
    {
        name: 'Adrian',
        age: 29,
        grade: 'A'
    },
    {
        name: 'Roselyn',
        age: 30,
        grade: 'B'
    },
    {
        name: 'Angelo',
        age: 27,
        grade: 'C'
    },
    {
        name: 'Aaron',
        age: 26,
        grade: 'D'
    },
]

for ( let { name, grade , age} of students) {
    console.log(name, grade)
    console.log(name, age)
    console.log(grade)
}

// Optional Chaining
const employee = {
    salary: {
        bonus: 300
    }
}

const depName = employee.department?.name
console.log(depName)