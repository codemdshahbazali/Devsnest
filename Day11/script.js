// Quiz

// 1. Multiple questions
// 2. Select answer
// 3. 4 options
// 4. next button/ same page question
// 5. Use prototype
// 6. Answer getter and setter
// 7.Function constructor for question-> 4 options mcqs, correct answer, get correct answer, set correct answer,
// 8. bind it with prototype

let currentQuestionNumber = 0;
let answer = '';
let totalCorrect = 0;
let totalQuestions;
const headerVar = document.getElementById('header');
const optionVar = document.getElementsByClassName('option');
const currQuestion = document.getElementById('currentQuestion');
const totalQuestion = document.getElementById('totalQuestion');
const nextButton = document.getElementById('nextButton');
const card = document.getElementById('card');
const op = document.getElementById('options');

//Fetching data from Json
const getJsonData = async () => {
  const dataObj = await fetch('./assests/questions.json');
  const data = await dataObj.json();
  return data;
};

const getQuestion = async (index) => {
  const arr = await getJsonData();
  totalQuestions = arr.length;
  return arr[index];
};

const initalLoad = async () => {
  const data = await getQuestion(0);
  if (headerVar != null) {
    headerVar.innerText = data.questionStatement;
    Array.from(optionVar).forEach((element, index) => {
      element.children[0].innerText = data.options[index];
    });
  }

  answer = data.answer;

  if (currQuestion != null) {
    currQuestion.innerText = currentQuestionNumber + 1;
  }

  if (totalQuestion != null) {
    totalQuestion.innerText = totalQuestions;
  }

  toggleDisableState(nextButton);
};

const toggleDisableState = (element) => {
  if (element.getAttribute('disabled') != null) {
    element.removeAttribute('disabled');
    nextButton.classList.remove('disabledStyle');
  } else {
    nextButton.setAttribute('disabled', '');
    nextButton.classList.add('disabledStyle');
  }
};

const inializeNextButton = () => {
  if (nextButton != null) {
    nextButton.addEventListener('click', async () => {
      toggleDisableState(nextButton);
      currentQuestionNumber++;
      if (currentQuestionNumber >= totalQuestions) {
        // window.location.href = 'result.html';
        console.log(Array.from(card.children));
        Array.from(card.children).forEach((child) => {
          child.remove();
        });

        const divElement = document.createElement('div');
        divElement.setAttribute('id', 'resultDiv');
        const span1 = document.createElement('span');
        span1.innerText = totalCorrect;
        const span2 = document.createElement('span');
        span2.innerText = totalQuestions;
        divElement.append(
          ' You got ',
          span1,
          ' correct out of ',
          span2,
          ' questions.'
        );

        card.append(divElement);

        // let string = `<article id="${articleId}">
        //       <input id="${inputId}" type="checkbox">
        //       <label for="${inputId}" id="xyz">${text}</label>
        //   </article>`;
        return;
      }

      currQuestion.innerText = currentQuestionNumber + 1;
      const data = await getQuestion(currentQuestionNumber);
      answer = data.answer;
      headerVar.innerText = data.questionStatement;
      Array.from(optionVar).forEach((element, index) => {
        element.children[0].innerText = data.options[index];
        if (element.children[1].classList.contains('correct')) {
          element.children[1].classList.remove('correct');
        }
        if (element.children[1].classList.contains('wrong')) {
          element.children[1].classList.remove('wrong');
        }

        element.children[1].removeAttribute('disabled');
        element.children[1].classList.remove('disabledStyle');
        // toggleDisableState(element.children[1]);
      });
    });
  }
};

const selectCorrectAnswerDisableRest = () => {
  const ansButton = document.querySelectorAll('.answerButton');
  ansButton.forEach((element, index) => {
    console.log(element);
    if (element.previousElementSibling.innerText.includes(answer)) {
      if (!element.classList.contains('correct')) {
        element.classList.add('correct');
      }
    } else if (!element.classList.contains('wrong')) {
      element.classList.add('disabledStyle');
    }
  });
};

const handleOptions = () => {
  if (op != null) {
    op.addEventListener('click', (e) => {
      if (e.target.matches('.answerButton')) {
        if (e.target.previousElementSibling.innerText.includes(answer)) {
          if (!e.target.classList.contains('correct')) {
            e.target.classList.add('correct');
            totalCorrect++;
          }
          selectCorrectAnswerDisableRest();
        } else {
          console.log('Wrong Answer');
          if (!e.target.classList.contains('wrong')) {
            e.target.classList.add('wrong');
          }

          selectCorrectAnswerDisableRest();
          // e.target.previousElementSibling.innerText.includes(answer);
        }
        if (nextButton.classList.contains('disabledStyle')) {
          nextButton.classList.remove('disabledStyle');
          nextButton.removeAttribute('disabled');
        }
        console.log(answer, totalCorrect);
      }
    });
  }
};

document.body.onload = async () => {
  initalLoad();
  inializeNextButton();
  handleOptions();
};

// document.addEventListener('DOMContentLoaded', () => {
//   initalLoad()
// })
