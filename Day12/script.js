const addElementButton = document.getElementById('todos__add__button');

addElementButton.addEventListener('click', (e) => {
  const text = document.getElementById('addTodos').value;
  if (text == '') return;
  let divElement = document.createElement('div');
  divElement.classList.add('todo_item');

  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'checkbox');
  const spanElement = document.createElement('span');
  spanElement.innerText = text;
  const buttonElement = document.createElement('button');
  buttonElement.classList.add('deleteButton');
  buttonElement.innerText = 'Delete';

  divElement.appendChild(inputElement);
  divElement.appendChild(spanElement);
  divElement.appendChild(buttonElement);

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
    e.target.parentElement.remove();
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
