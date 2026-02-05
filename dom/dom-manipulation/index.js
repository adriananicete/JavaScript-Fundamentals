// Creating Elements
// const hTwo = document.createElement("h2");
// hTwo.innerText = "Hello World";
// document.body.appendChild(hTwo);
// console.log(hTwo);

// console.log('next sibling',hTwo.nextSibling)

// const hThree = document.createElement("h3");
// hThree.innerText = "Hi world";
// document.body.appendChild(hThree);

// Insert Elements
// const span = document.createElement("span");
// span.innerText = "Adrian";
// document.body.insertBefore(span, hThree);

// console.log(span.nextElementSibling);

// // Removing Elements
// const list = document.getElementById("myList");
// console.log(list.children.length);

// const random = Math.floor(Math.random() * list.children.length);
// console.log(random);

// const itemToRemove = list.children[random];
// console.log(itemToRemove);
// list.removeChild(itemToRemove);

// span.remove(); // direct removal


// Read Write and Remove Attribute
{
  const img = document.querySelector("img");
  console.log(img.getAttribute("src"));
  console.log(img.getAttribute("alt"));
  img.setAttribute("alt", "asdfsdf");
  img.setAttribute('src', 'https://res.cloudinary.com/dks2psaem/image/upload/v1760445840/git9o_oxv35r.png')
  img.removeAttribute('height')
}


function changeSize(){
    const img = document.querySelector("img");
    img.setAttribute('width','500px')
}

function defaultSize(){
    const img = document.querySelector("img");
    img.setAttribute('width','400px')
}

function changeImg(){
    const img = document.querySelector("img");
    img.setAttribute('src','https://res.cloudinary.com/dks2psaem/image/upload/v1770189612/Screenshot_2026-02-04_151855_jjjcr8.png')
}

// Traverisng/Navigation DOM
{
    // parentElement and parentNode
    const span = document.getElementById('text')

    console.log('Parent Element',span.parentElement)
    console.log(span.parentNode.parentNode)

    // children and childNodes
    const mainId = document.getElementById('main-id');
    // console.log(mainId.children)
    // console.log(mainId.childNodes)

    console.log(mainId.firstChild)
    console.log(mainId.firstElementChild)



}

// Manipulating Classes
{
    const mainId = document.getElementById('main-id');
    console.log(mainId.className)

    // mainId.className = 'secondary-class'
    // console.log(mainId.className)

    console.log(mainId.classList)
    mainId.classList.add('test')
    console.log(mainId.className)

    mainId.classList.remove('layout')
    console.log(mainId.className)

    // replace use for replacing single class on an element tag
    mainId.classList.replace('main-class','secondary-class')
    console.log(mainId.className)

    // contains use to check if a element tag has a class on it it returns boolean
    console.log('does it have test class?', mainId.classList.contains('test'))

    console.log('does it have main-class?', mainId.classList.contains('main-class'))

    // toggle use for on and off of a class in an element tag
    mainId.classList.toggle('secondary-class')
    mainId.classList.toggle('secondary-class')
    mainId.classList.toggle('secondary-class')
    mainId.classList.toggle('secondary-class')


}

function toggleInfo(){
    console.log('toggling...')

    const para = document.getElementById('myParagraph')
    para.classList.toggle('hidden')
}

function addTask(){
    const inputTask = document.getElementById('taskInput');
    const task = inputTask.value
    console.log(task)

    const li = document.createElement('li')
    li.textContent = task

    const completeBtn = document.createElement('button')
    completeBtn.textContent = 'Complete'
    completeBtn.onclick = () => li.classList.add('completed')
    li.appendChild(completeBtn)

    const editBtn = document.createElement('button')
    editBtn.textContent = 'Edit'
    editBtn.onclick = () => {
        const inputEdit = document.createElement('input')
        inputEdit.value = task
        li.appendChild(inputEdit)
    }
    li.appendChild(editBtn)

    const btn = document.createElement('button')
    btn.textContent = 'Delete'
    btn.onclick = () => li.remove()
    li.appendChild(btn)

    
    
    document.getElementById('taskList').appendChild(li)
    inputTask.value = ''
}

function filterTask() {
    const searchInput = document.getElementById('searchInput').value;
    const taskList = document.getElementById('taskList')

    taskList.style.display = taskList.innerText.toLowerCase().includes('searchInput') ? 'block' : 'none'
}