
const todoList = []
const todoList1 = [];
const todoList2 = [];

function todoList1Append() {
    const inputElement = document.querySelector('.js-todo-list-1');
    const inputValue = inputElement.value;
    if (inputValue.trim() === '') {
        console.error('O campo de entrada está vazio!')
        return
    }
    todoList1.push(inputValue);
    console.log(todoList1);
    inputElement.value = '';
}

function todoList2Append() {
    const inputElement = document.querySelector('.js-todo-list-2');
    const inputValue = inputElement.value;
    const divElement = document.querySelector('.js-list1');
    console.log(`oi`);
    if (inputValue !== '') {
        todoList2.push(inputValue);
    }
    divElement.innerHTML = '';
    for (let i = 0; i < todoList2.length; i++) {
        divElement.innerHTML += `<p>${todoList2[i]}</p>`;
    }
    inputElement.value = '';

}

function renderList() {
    const divElement = document.querySelector('.js-list');
    divElement.innerHTML = '';
    for (let i = 0; i < todoList.length; i++){
        divElement.innerHTML += `
        <div class="todo-name">${todoList[i][0]}</div> <div class="todo-date" >${todoList[i][1]}</div> <button onclick="
            todoList.splice(${i}, 1)
            renderList();
        ">Delete</button>`
    }

}

function todoListAppend() {
    const inputElement = document.querySelector('.js-todo-list');
    const inputValue = inputElement.value.trim();
    const inputDateElement = document.querySelector('.js-todo-date');
    const inputDateValue = inputDateElement.value.trim();

    const divElement = document.querySelector('.js-list');

    if (inputValue === '' || inputDateValue === '') {
        alert('Preencha os dois campos!');
        return;
    }
    todoList.push([inputValue, inputDateValue]);

    inputElement.value = '';
    inputDateElement.value = '';

    renderList()
}