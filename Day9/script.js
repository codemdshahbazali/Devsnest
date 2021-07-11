/**
 * 1. Create 2 object and try to use call, apply and bind on them
 */
const obj1 = {
  name: 'Shahbaz',
  address: 'Bangalore',
};

const obj2 = {
  name: 'Iqra',
  address: 'Karnataka',
};

function printDetails(a, b) {
  console.log(`${this.name} lives in ${this.address}`);
  console.log(a, b);
}

printDetails.call(obj1, 2, 4);
printDetails.call(obj2, 2, 4);

printDetails.apply(obj1, [2, 4]);
printDetails.apply(obj2, [2, 8]);

const a1 = printDetails.bind(obj1);
const a2 = printDetails.bind(obj2);
a1(2, 3);
a2(2, 5);

/**
 * 2. Try to use different events on objects, you can refer to this link
 * 3. Create the project shown in the lec.
 */

let totalSeats = 36;
let bookedSeats = 0;
let remainingSeats = totalSeats;

const setStatus = (x, y) => {
  bookedSeats += x;
  remainingSeats += y;
  document.querySelector('#booked--seats').innerText = bookedSeats;
  document.querySelector('#remaining--seats').innerText = remainingSeats;
};

setStatus(0, 0);
document.addEventListener('click', (e) => {
  console.log(e.target.classList);
  if (e.target.matches('.box')) {
    if (e.target.classList.contains('clicked')) {
      e.target.classList.remove('clicked');
      setStatus(-1, 1);
    } else {
      e.target.classList.add('clicked');
      setStatus(1, -1);
    }
  }
});
