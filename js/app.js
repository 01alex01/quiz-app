const questions = [
  {
    question: "what is the largest animal on earth",
    anwsers: [
      { text: "shark", correct: false },
      { text: "blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "what is the smallest country in the world",
    anwsers: [
      { text: "Vantica city", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "shri Lanka", correct: false },
    ],
  },
  {
    question: "what is the largest desert in the world",
    anwsers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: "what is the smallest continent in the world",
    anwsers: [
      { text: "Africa", correct: false },
      { text: "Asia", correct: true },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
    ],
  },
];
const questionsElemennt = document.getElementById("question");
const anwserButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionsElemennt.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.anwsers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    anwserButton.appendChild(button);
  });
}
startQuiz();
