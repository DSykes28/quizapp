const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice"));
console.log(choices);

let currentQuestion = {};
let acceptingAnswers = true;
let questionCount = 0;
let availableQuestions = [];
let questions = [];

//CONSTANTS
startGame = () => {
  questionCount = 0;
  console.log(availableQuestions)
  getNewQuestion();
};

getNewQuestion = () => {
  questionCount++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion - availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    choices.forEach( choice => {
      choice.innerText = currentQuestion['choice' + number];
    })
}

scoreUp = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();
