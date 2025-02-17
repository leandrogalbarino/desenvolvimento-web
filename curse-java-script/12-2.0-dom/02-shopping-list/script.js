// document.getElementById('id');

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);

console.log(document.getElementById('app-title').getAttribute('id'));

// Set attributes
document.getElementById('app-title').title = 'new-id';
document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');


// Get/change content
console.log(title.textContent)
// title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong> Shopping List</strong>';


// Change style
// - => Came case
title.style.color = 'white';
title.style.backgroundColor = 'black';
title.style.padding = '5px 10px';
title.style.borderRadius = '10px'

// document.querySelector()
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('#app-title'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('input[type="text"]'));

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

// Use these methods on other elements
let list = document.querySelector('ul');
// const listArray = Array.from(list);
console.log(list.innerText);


// querySelectorAll()

const listItems = document.querySelectorAll('.item');
console.log(listItems);
console.log(listItems[0].innerText);
listItems[2].style.color = 'red';
listItems.forEach((item, index) => {
  item.style.color = 'red';
  if (index === 1) {
    item.remove();
  }
  if (index === 0) {
    item.innerHTML = `
      Oranges
        <button class="remove- item btn-link text-red">
          <i class="fa-solid fa-xmark"></i>
        </button>
    `;
  }
});

// .getElementsByClassName
const listItems2 = document.getElementsByClassName('item');
console.log(listItems2[2].innerText); 
const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
  console.log(item.innerText);
});

const listItems3 = document.getElementsByTagName('li');
const listItemsArray3 = Array.from(listItems3);
console.log(listItemsArray3)


// you want to stick with query selector all for most cases,
// so you can get by with just using query selector and query selector all 