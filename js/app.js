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
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionsElemennt.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.anwsers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    anwserButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (anwserButton.firstChild) {
    anwserButton.removeChild(anwserButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(anwserButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionsElemennt.innerHTML = `you scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex <= questions.length - 1) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
