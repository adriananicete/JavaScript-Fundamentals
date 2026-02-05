// Creating Elements
const hTwo = document.createElement("h2");
hTwo.innerText = "Hello World";
document.body.appendChild(hTwo);
console.log(hTwo);

console.log('next sibling',hTwo.nextSibling)

const hThree = document.createElement("h3");
hThree.innerText = "Hi world";
document.body.appendChild(hThree);

// Insert Elements
const span = document.createElement("span");
span.innerText = "Adrian";
document.body.insertBefore(span, hThree);

console.log(span.nextElementSibling);

// Removing Elements
const list = document.getElementById("myList");
console.log(list.children.length);

const random = Math.floor(Math.random() * list.children.length);
console.log(random);

const itemToRemove = list.children[random];
console.log(itemToRemove);
list.removeChild(itemToRemove);

span.remove(); // direct removal


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