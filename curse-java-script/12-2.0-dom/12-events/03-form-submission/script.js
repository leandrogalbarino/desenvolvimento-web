const form = document.querySelector('#item-form');

function onSubmit(event) {
  event.preventDefault();

  const item = document.querySelector('#item-input').value;
  const priority = document.querySelector('#priority-input').value;
  if (item.trim() === '' || priority.trim() === '') {
    return;
  }

  console.log(item, priority);
}

function onSubmit2(event) {
  event.preventDefault();

  const formData = new FormData(form);
  // name
  // const item = formData.get('item');
  // const priority = formData.get('priority');

  const entries = formData.entries();

  for (let entry of entries) {
    console.log(entry);
  }
  
}
console.log(form); 
form.addEventListener('submit', onSubmit2);