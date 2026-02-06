// What is an Event(Browser)
// An event is just a signal that something happened in the browser

function handleClick(greeting) {
    console.log(`Hello ${greeting}`)
}

const btn2 = document.getElementById('myBtn2')

btn2.onclick = () => {
    console.log('Toggling....')
}

btn2.onclick = () => handleClick('Roselyn')



// addEventListener and removeEventListener
const countBtn = document.getElementById('countBtn')

let count = 0
const handleCount = () => {
    
    console.log('counter', count)
    count++
}

const greetMe = () => {
    console.log('Thank you')
}

countBtn.addEventListener('click', handleCount)
countBtn.addEventListener('click', greetMe)

countBtn.removeEventListener('click', handleCount)

// DOM Content Loaded

// will never run
document.onDOMContentLoaded = () => console.log('DOM Content Loaded...')

// this will run
document.addEventListener('DOMContentLoaded', () => console.log('DOM Content Loaded...'))

// Event Object

const searchElem = document.getElementById('search-id')

function handleChange(e) {
    console.log(e)

    console.log('Target: ', e.target) // ipapalita nya yung mismo html tag
    console.log('Target Name: ', e.target.name) // ipapakita nya yung value ng name attribute mo
    console.log('Target Value: ', e.target.value) // ipapakita nya yung value ng ininput mo sa input tag

    console.log('Event Type: ', e.type)
    console.log('Current Target: ', e.currentTarget)
}

searchElem.addEventListener('change', handleChange)

// Event Bubbling, Capturing and Delegation

// Bubbling ay ang behavior ng mga elements sa browser

document.getElementById('grandparent').addEventListener('click', () => console.log('Grandparent clicked....'))

document.getElementById('parent').addEventListener('click', () => console.log('Parent clicked....'))

document.getElementById('child').addEventListener('click', () => console.log('Child clicked....'))

// Capturing

document.getElementById('grandparent').addEventListener('click', () => console.log('Capture at GrandParent'), true)

document.getElementById('parent').addEventListener('click', () => console.log('Capture at Parent'), true)

document.getElementById('child').addEventListener('click', () => console.log('Capture at Child'), true)

// Event Delegation
document.getElementById('itemList').addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
         console.log('You clicked on', e.target.textContent)

         document.querySelector('.para').value = e.target.textContent
         document.querySelector('.para').focus()
    }
})

// event stop propagation
document.querySelector('#father').addEventListener('click', () => {
    console.log('Parent is clicked...')
})

document.querySelector('#son').addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('Child is clicked...')
})

// Event Default
document.querySelector('#websiteLink').addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Default link behaviour prevented')
})

document.querySelector('#loginForm').addEventListener('submit', (e) => {
    e.preventDefault()

    console.log('Form submission Prevented')
})

// Project
const faq = document.querySelector('.faq');

faq.addEventListener('click', (e) => {
    if(e.target.classList.contains('question')){
        e.stopPropagation()

        const currentItem = e.target.parentElement
    const currentAnswer = currentItem.querySelector('.answer')

    currentAnswer.classList.toggle('show')
    }
})

document.addEventListener('click', () => {
    const allAnswers = document.querySelectorAll('.answer.show')

    allAnswers.forEach(ans => ans.classList.remove('show'))
})