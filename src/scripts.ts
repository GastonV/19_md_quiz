import questionsCSS from './data/data';
import questionsHTML from './data/data';
import bbb from './data/data';



const quizSection = document.querySelector('.quiz');

const createAnswerElement = (answer:string) => {
  const button = document.createElement('button');
  button.classList.add('quiz__answer');
  button.textContent = answer;
  return button;
};
const createQuestionElement = (question:string) => {
  const headingElement = document.createElement('h2');
  const divelEment = document.createElement('div');
  divelEment.appendChild(headingElement);
  divelEment.classList.add('quiz__question');
  headingElement.classList.add('quiz__heading2');
  headingElement.textContent = question;
  return divelEment;
};

const questionAnswered = {
  question: 'If we want define style for an unique element, then which css selector will we use ?',
  A: 'Id',
  B: 'text',
  C: 'class',
  D: 'name',
  correctOne: 1,
};

quizSection.appendChild(createQuestionElement(questionAnswered.question));
quizSection.appendChild(createAnswerElement(questionAnswered.A));
quizSection.appendChild(createAnswerElement(questionAnswered.B));
quizSection.appendChild(createAnswerElement(questionAnswered.B));
quizSection.appendChild(createAnswerElement(questionAnswered.C));

document.getElementById('quiz').animate([
  // keyframes
  { transform: 'translateY(20px)' },
  { transform: 'translateY(100px)' },
  // { transform: 'rotate(15deg)' },
], {
  // timing options
  duration: 1000,
});

const questionsHTML = [
  {
    question: 'When should you use path along with file name of picture in IMG tag?',
    options: {
      A: 'path is optional and not necessary',
      B: 'when the location of image file andhtml file are different',
      C: 'when image file and html file both are on same location',
      D: 'path is always necessary when inserting image',
    },
    answer: 'D',
  },
  {
    question: 'Which tag inserts a line horizontally on your web page?',
    options: {
      A: '<hr>',
      B: '<line>',
      C: '<line direction="horizontal">',
      D: '<tr>',
    },
    answer: 'A',
  },
  {
    question: '<SCRIPT> … </SCRIPT> tag can be placed within ________',
    options: {
      A: 'Header',
      B: 'Body',
      C: 'both A and B',
      D: 'none of the above',
    },
    answer: 'A',
  },

];

// Which of the following properties will we use to display border around a cell without any content ?
// A.empty-cell
// B.blank-cell
// C.noncontent-cell
// D.void-cell

// HTML*****************
// The way the browser displays the object can be modified by _____
// a. attributes
// b. parameters
// c. modifiers
// d. None of above

// When should you use path along with file name of picture in IMG tag?
// a. path is optional and not necessary
// b. when the location of image file andhtml file are different
// c. when image file and html file both are on same location
// d. path is always necessary when inserting image

// Which tag inserts a line horizontally on your web page?
// a. <hr>
// b. <line>
// c. <line direction="horizontal">
// d. <tr>

// <SCRIPT> … </SCRIPT> tag can be placed within ________
// a. Header
// b. Body
// c. both A and B
// d. none of the above

// Typescript *****************************************

// The advantages of Typescript are...

//  It assists in code structuring.
//  It applies class -based object oriented programming.
//  It introduces coding guidelines.
//  All of the above.

// Which one is incorrect method to declare
// a variableA.let x=999;
// B.var x:string =”string”;
// C.let anyvar:any=[1,true,”name”]
