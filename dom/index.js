// accessing DOM
// get by ID
// let titleElem = document.getElementById('heading')
// console.log('get by ID',titleElem)

// // get by class if multiple class, all class will be on HTMLCollection
// let infoElem = document.getElementsByClassName('info')
// console.log('get by class',infoElem)
// console.log(infoElem[0], infoElem[1])

// // get by Tag if multiple class, all class will be on HTMLCollection
// let pTagName = document.getElementsByTagName('p')
// console.log('get by Tag name', pTagName)

// // Query selector
// let para = document.querySelector('p.info')
// console.log('first info class of p tag',para)

// // Query selector All if multiple class, all class will be on NodeList
// let paras = document.querySelectorAll('p.info')
// console.log('using query selector all:', paras)

// let hOne = document.querySelector('#heading')
// console.log('using query selector:',hOne)

function highlight() {
  console.log("About to highlight a text...");

  let element = document.querySelectorAll(".info");
  let title = document.querySelector("#heading");

  title.textContent = "Welcome to Day 17";

  element.forEach((elem) =>
    console.log((elem.style.backgroundColor = "yellow")),
  );
}

function filterList() {
  const inputElem = document.getElementById("searchInput");
  const input = inputElem.value;

  const items = document.querySelectorAll("ul#itemList li");
  items.forEach((item) => {

    item.style.display = item.innerText
      .toLowerCase()
      .includes(input.toLowerCase())
      ? "block"
      : "none";
  });
}
