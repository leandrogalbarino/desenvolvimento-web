// Get child elements 
let output;
const parent = document.querySelector('.parent');
output = parent.children;

output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Second';
parent.children[1].style.color = 'red';


const firstElement = parent.firstElementChild;
const lastElement = parent.lastElementChild;
let midElement;

firstElement.innerText = 'Child First'
midElement = firstElement.nextElementSibling

// Get next ou before element 
// const secondItem = document.querySelector('.child:nth-child(2');
lastElement.innerText = 'Child Third'
console.log(firstElement.nextElementSibling);
console.log(lastElement.previousElementSibling);


// Get parent elements from a child
console.log(firstElement.parentElement)
console.log(midElement.parentElement)
console.log(lastElement.parentElement)




console.log(output); 
