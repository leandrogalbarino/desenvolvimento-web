const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = document.querySelectorAll('li');

document.querySelector('button').addEventListener('click', () => {
  console.log(itemList.className);
  text.className = 'card dark';
});