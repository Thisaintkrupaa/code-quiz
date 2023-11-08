const questions = [
  {
    question1: 'What is the capital of France?',
    choices: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correct: 2,
  },
  {
    question2: 'Which planet is known as the "Red Planet"?',
    choices: ['Earth', 'Venus', 'Mars', 'Jupiter'],
    correct: 2
  },
  
  {
   question3: 'Who wrote the play Romeo and Juliet?',
   choices: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
   correct: 1,
  },

  {
      question4: 'What is the largest mammal in the world?',
      choices: [' African Elephant', 'Giraffe', 'Blue Whale', 'Polar Bear'],
      correct: 2,
    },


    {
      question5: 'In which year did the Titanic sink?',
      choices: ['1912', '1907', '1924', '1931'],
      correct: 0,
    },

    {
      question6: 'What is the chemical symbol for gold?',
      choices: ['Go', 'Ag', 'H20', 'Au'],
      correct: 3,
    },
    {
      question7: 'Which country is known as the Land of the Rising Sun?',
      choices: ['China', 'South Korea', 'Japan', 'Thailand'],
      correct: 2,
    },
    {
      question8: 'Who painted the Mona Lisa??',
      choices: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
      correct: 1,
    },
    {
      question9: 'What is the largest planet in our solar system?',
      choices: ['Earth', 'Saturn', 'Uranus', 'Jupiter'],
      correct: 3
    },
    {
      question10: 'Which Football player won 8 ballon d or?',
      choices: ['Rodri ', 'Neymar ', 'Martin Odegaard', 'Lionel Messi'],
      correct: 3,
    }

];

// Other variables
let currentQuestionIndex = 0;
let timeLeft = 60;
let timerInterval;

// Get HTML elements
const startButton = document.getElementById("start");
const questionTitle = document.getElementById("question-title");
const choicesDiv = document.getElementById("choices");
const timerDisplay = document.getElementById("time");
const finalScoreDisplay = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");
const feedbackDiv = document.getElementById("feedback");

// Function to start the quiz
function startQuiz() {
  startButton.style.display = "none";
  questionTitle.textContent = questions[currentQuestionIndex].question;
  renderChoices();
  timerInterval = setInterval(function() {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft <= 0 || currentQuestionIndex === questions.length) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

// Function to render choices for the current question
function renderChoices() {
  choicesDiv.innerHTML = "";
  const choices = questions[currentQuestionIndex].choices;
  for (let i = 0; i < choices.length; i++) {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choices[i];
    choiceButton.addEventListener("click", checkAnswer);
    choicesDiv.appendChild(choiceButton);
  }
}

// Function to check if the answer is correct
function checkAnswer(event) {
  const selectedAnswer = event.target.textContent;
  if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
    feedbackDiv.textContent = "Correct!";
  } else {
    feedbackDiv.textContent = "Incorrect!";
    timeLeft -= 10; // Penalize for incorrect answers
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    questionTitle.textContent = questions[currentQuestionIndex].question;
    renderChoices();
  } else {
    endQuiz();
  }
}

// Function to end the quiz
function endQuiz() {
  clearInterval(timerInterval);
  questionTitle.textContent = "All done!";
  finalScoreDisplay.textContent = timeLeft;
  initialsInput.style.display = "inline";
  submitButton.style.display = "inline";
}

// Function to submit the score and initials
function submitScore() {
  const initials = initialsInput.value;
  alert(`Score: ${timeLeft}, Initials: ${initials}`);
}

// Event listeners
startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", submitScore);
