import { questionsCSS, questionsHTML, questionsTypeScript } from './data/data';


type questionTypes = typeof questionsCSS;
const selectMenue = document.querySelectorAll(".nav");
const quizSection = document.querySelector('.quiz');

let quizQuestions: questionTypes;

selectMenue.forEach(nav => {
  nav.addEventListener('click', (e) => {
    if (nav.innerHTML === "CSS") {
      quizQuestions = questionsCSS;
    } else if (nav.innerHTML === "HTML") {
      quizQuestions = questionsHTML;
    }
    else {
      quizQuestions = questionsTypeScript;
    }
    document.querySelector('.quiz').innerHTML ="";
    readQuestion(quizQuestions, 0);
  });
})

const createAnswerElement = (answer: string) => {
  const button = document.createElement('button');
  button.classList.add('quiz__answer');
  button.textContent = answer;
  return button;
};
const createQuestionElement = (question: string) => {
  const headingElement = document.createElement('h2');
  headingElement.classList.add('quiz__heading2', 'quiz__question');
  headingElement.textContent = question;

  return headingElement;
};

const readQuestion = (question: questionTypes, nrQuiz: number) => {
  quizSection.appendChild(createQuestionElement(question[nrQuiz].question));
  const arrKeys = Object.keys(question[nrQuiz].options);
  const arrValues = Object.values(question[nrQuiz].options);

  arrKeys.forEach((options, index) => {
    quizSection.appendChild(createAnswerElement(`${options}:  ` + arrValues[index]));
   });

};

