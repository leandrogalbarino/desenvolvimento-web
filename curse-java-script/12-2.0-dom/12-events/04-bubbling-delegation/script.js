// const button = document.querySelector('form button');
// const div = document.querySelector('form div:nth-child(2)');
// const form = document.querySelector('form');

// button.addEventListener('click', (e) => {
//   alert('Button was clicked');
//   e.stopPropagation();
// });

// div.addEventListener('click', () => {
//   alert('Div was clicked');
// });

// form.addEventListener('click', () => {
//   alert('Form was clicked');
// });

// document.body.addEventListener('click', () => {
//   alert('Body was clicked');
// });

// Event Delegation
const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');
console.log(list);

// listItems.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     e.target.remove();
//   });
// });

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
})