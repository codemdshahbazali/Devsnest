let handleClick = (e) => {
  console.log(e.type);
  alert(e.type);
};

let handleBlur = (e) => {
  console.log('Blur');
  e.target.placeholder = 'Blur';
};

let handleFocus = (e) => {
  console.log('Focus');
  e.target.placeholder = 'Focus';
};

// document.getElementsByClassName('input')[0].addEventListener('focus', handleFocus)
// document.getElementsByClassName('input')[0].addEventListener('blur', handleBlur)

let handleDBClick = (e) => {
  alert(e.type);
};

let handleOnchange = (e) => {
  document.getElementById('text').innerText = e.target.value;
};

let handleOninput = (e) => {
  document.getElementById('text').innerText = e.target.value;
};

let handleContextMenu = (e) => {
  console.log(e);
  document.getElementById('contextMenu').innerText = e.type;
};

let handleError = (e) => {
  console.log(e);
  document.getElementById('error').innerText = e.message;
};

// addEventListener('error', handleError);
window.addEventListener('error', handleError);

let handleErrorClick = (e) => {
  console.log(e);
  throw new Error('Throwing Error');
};

let handleForm = (e) => {
  e.preventDefault();
  console.log('Form change');
};

//Drag and Drop

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Drag functions
const dragStart = (e) => {
  console.log('Drag Start');
  e.target.className += ' hold';
  setTimeout(() => (e.target.className = 'invisible'), 0);
};

const dragEnd = (e) => {
  console.log('Drag End');
  e.target.className = 'fill';
};

const dragOver = (e) => {
  e.preventDefault();
  console.log('Over');
};

const dragEnter = (e) => {
  e.preventDefault();
  e.target.className += ' hovered';
  console.log('Enter');
};

const dragLeave = (e) => {
  e.target.className = 'empty';
  console.log('Leave');
};

const dragDrop = (e) => {
  this.className = 'empty';
  e.target.append(fill);
  console.log('Drop');
};

//Loop through empties and call drag events
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

//Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//keyboard function handler
const keyboardFunction = (e) => {
  let text =
    e.type + ' ' + e.keyCode + ' ' + String.fromCharCode(e.keyCode) + ' || ';
  document.querySelector('#keyText').append(text);
};

//Keyboard events
const inputEle = document.querySelector('#keyEvents');
inputEle.addEventListener('keydown', keyboardFunction);
inputEle.addEventListener('keypress', keyboardFunction);
inputEle.addEventListener('keyup', keyboardFunction);

// Mouse Events
//mouseleave and mouseout are similar but differ in that mouseleave does not bubble and mouseout does
const handleMouseEvents = (e) => {
  e.target.innerText = `${e.type} triggered!!!`;
};

//load is a window event. DOMContentLoaded is a document event. You have to add the event to the correct object.
//load event is fired after DOMContentLoaded event
//DOMContentLoaded only cares about js and html loading
