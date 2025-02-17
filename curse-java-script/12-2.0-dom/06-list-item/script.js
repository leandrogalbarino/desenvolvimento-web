// i'm not saying using innerHTML and doing it this quick and dirty is horrible it's not you see it all the time but there is a better way do it

// Quick and Dirty
function createListItem(item) {
  const li = document.createElement('li');
  // li.innerHTML = `<li>${item}</li>`
  li.innerHTML =
    `
      ${item}
      <button class="remove-item btn-link text-red">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;
  document.querySelector('.items').appendChild(li);
}

// Clean and performant
function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item))

  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';

  button.appendChild(icon);
  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}



createListItem('Eggs')
createNewItem('Chesse');





// this a huge deal in this situation no it's not just know that using innerHTML so using this first method causes the web browser to re-pass and recreate all the Dom nodes inside the UL element so this is less efficient than creating new elements and appending them so the second way is going to be more performant also setting in our HTML
// HTML  will not automatically reattach event handlers to the new elements it creates so you would have eep track of the manually i know we haven't gotten into events yet but it can cause some issues with uh with attaching event handlers 