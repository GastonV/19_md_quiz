import { questionsCSS, questionsHTML, questionsTypeScript } from './data/data';


type questionTypes = typeof questionsCSS;
const selectMenue = document.querySelectorAll(".nav");
const quizSection = document.querySelector('.quiz');
let counterOfTruth: boolean[] = [];
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
    quizSection.innerHTML = "";
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
  if (nrQuiz > quizQuestions.length - 1) {
    quizSection.appendChild(createAnswerElement(`You are evaluated: ${howManyCorrect(counterOfTruth, nrQuiz)}%`));
    quizSection.appendChild(createAnswerElement('Restart?')).addEventListener('click', () => {
      quizSection.innerHTML = "";
      readQuestion(quizQuestions, 0);
    });

    counterOfTruth = [];
  }
  else {
    quizSection.appendChild(createQuestionElement(question[nrQuiz].question));
    const arrKeys = Object.keys(question[nrQuiz].options);
    const arrValues = Object.values(question[nrQuiz].options);

    arrKeys.forEach((options, index) => {
      quizSection.appendChild(createAnswerElement(`${options}:  ` + arrValues[index])).addEventListener('click', () => {
        counterOfTruth.push(arrKeys[index] === question[nrQuiz].answer)
        quizSection.innerHTML = "";
        readQuestion(question, ++nrQuiz);
      });
    });
  }
};

const howManyCorrect = (array: boolean[], quiestionCount: number): string => {
  return (array.filter(answer => true === answer).length / quiestionCount * 100).toFixed(0)
}

