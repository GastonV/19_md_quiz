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
