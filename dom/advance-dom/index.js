
// Efficient DOM Traversal
const parent = document.querySelector('.card')
const firstChild = parent.firstElementChild;
console.log(firstChild)
const next = firstChild.nextElementSibling;
console.log(next)
const last = parent.lastElementChild;
console.log(last)
const parentOfElement = firstChild.parentElement;
console.log(parentOfElement)

// Templates and Cloning
const template = document.getElementById('card-template');
const clone = template.content.cloneNode(true)
clone.querySelector('.title').textContent = 'DOM Advance Topic'
clone.querySelector('.desc').textContent = 'Hope you are learning something New!'

document.body.appendChild(clone)

// Document Fragment and Range
const fragment = document.createDocumentFragment()

for (let i = 0; i <= 3; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`
    fragment.appendChild(li)
    
}

document.querySelector('.list').appendChild(fragment)

// Handling Large-scale DOM updates
function addItems(count){
    let counts = 1
    const frag =document.createDocumentFragment();
    for (let i = 0; i <= count; i++) {
        const div = document.createElement('div')
        div.style.backgroundColor = 'yellow'
        div.style.width = '200px'
        div.style.padding = '10px'
        div.style.display = 'flex'
        div.style.justifyContent = 'space-between'
        div.style.alignItems = 'center'
        div.textContent = `Item ${counts++}`
        const btn = document.createElement('button')
        btn.textContent = 'Click'
        div.appendChild(btn)

        frag.appendChild(div)
        
    }

    document.body.appendChild(frag)
}

addItems(20)