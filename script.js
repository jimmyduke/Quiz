const quizData = [
  {
    question: "Which of the following is a famous road in Oxford?",
    a: "Broadway",
    b: "High Street",
    c: "Elm Street",
    d: "King's Road",
    correct: "b",
  },
  {
    question: "Pinot Noir is primarily known for its flavors from which region?",
    a: "Bordeaux",
    b: "Napa Valley",
    c: "Burgundy",
    d: "Tuscany",
    correct: "c",
  },
  {
    question: "What is Packer Park famously known for in Melbourne?",
    a: "Its historical buildings",
    b: "Its sports facilities",
    c: "Its natural reserves",
    d: "Its shopping centers",
    correct: "b",
  },
];

const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answersEls.forEach((answerEl) => {
    if(answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answersEls.forEach((answerEl) => {
    answerEl
