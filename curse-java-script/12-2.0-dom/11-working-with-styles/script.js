const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = document.querySelectorAll('li');

document.querySelector('button').addEventListener('click', () => {
  // console.log(itemList.className);
  // text.className = 'card dark';

  // List classes
  // console.log(itemList.classList);
  // See classes 
  // itemList.classList.forEach((clas) => console.log(clas));
  
  // text.classList.add('dark');
  // text.classList.remove('card');
  
  // text.classList.toggle('hidden');
  text.classList.replace('card', 'dark');

  // Change
  
  text.classList.forEach((clas) => console.log(clas));
});