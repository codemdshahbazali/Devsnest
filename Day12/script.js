const addElementButton = document.getElementById('todos__add__button');

addElementButton.addEventListener('click', (e) => {
  const text = document.getElementById('addTodos').value;
  if (text == '') return;
  let divElement = document.createElement('div');
  divElement.classList.add('todo_item');

  let divElementSec1 = document.createElement('div');
  divElementSec1.classList.add('todo_item_section1');

  let divElementSec2 = document.createElement('div');
  divElementSec1.classList.add('todo_item_section2');

  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'checkbox');
  const spanElement = document.createElement('span');
  spanElement.classList.add('todoContent');
  spanElement.innerText = text;
  divElementSec1.appendChild(inputElement);
  divElementSec1.appendChild(spanElement);

  const buttonElement = document.createElement('button');
  buttonElement.classList.add('deleteButton');
  buttonElement.innerText = 'Delete';
  divElementSec2.appendChild(buttonElement);

  divElement.appendChild(divElementSec1);
  divElement.appendChild(divElementSec2);

  document.getElementById('todos__list').appendChild(divElement);

  document.getElementById('addTodos').value = '';
});

let totalList;
let completedList;
const updateTodo = () => {
  totalList = document.getElementsByClassName('todo_item').length;
  completedList = document.getElementsByClassName('checked').length;
  document.getElementById('completed').innerText = completedList;
  document.getElementById('remaining').innerText = totalList - completedList;
};

const todosList = document.getElementById('todos__list');
updateTodo();
todosList.addEventListener('click', (e) => {
  if (e.target.matches('.deleteButton')) {
    e.target.closest('.todo_item').remove();
    updateTodo();
  }

  if (e.target.matches('[type="checkbox"]')) {
    if (e.target.nextElementSibling.classList.contains('checked')) {
      e.target.nextElementSibling.classList.remove('checked');
      updateTodo();
    } else {
      e.target.nextElementSibling.classList.add('checked');
      updateTodo();
    }
  }
});
