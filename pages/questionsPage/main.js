let islogedIn = JSON.parse(
  localStorage.islogedIn ? localStorage.islogedIn : null
);
if (islogedIn && islogedIn != null) {
  let NameDiv = document.createElement("div");
  NameDiv.classList.add("LoginAnchor");
  let firstName = JSON.parse(
    localStorage.getItem(localStorage.currentUser)
  ).name;
  let text = document.createTextNode(`Welcome, ${firstName}`);
  NameDiv.appendChild(text);

  document.querySelector(".signinOptions").innerHTML = NameDiv.outerHTML;
} else {
  localStorage.islogedIn = false;
}

let attemptInfo = JSON.parse(localStorage.attemptInfo)


const img = document.querySelector(".image");
const timer = document.querySelector(".countDown");
const question = document.querySelector(".question");
const options = document.querySelector(".options");
const NextBtn = document.querySelector(".NextBtn");

const container = document.querySelector(".content");
const startingContainer = document.querySelector(".starting");

let attempt = {
  userAnswersIndex: [],
};

let questions;
// call the GetQuestions to fill the questions variable with the questions needed
GetQuestions();

// set an event listner for each option div
let EachOption = options.querySelectorAll("div .option");
EachOption.forEach((e) => {
  e.addEventListener("click", (e) => selectOption(e));
});

// a function that adds the selected css class to the clicked div and removes it from any other optin div that has it
// and adds the avaiable class to the button and make it clickeable by adding the eventlisterner
function selectOption(e) {
  options
    .querySelectorAll(".selected")
    .forEach((e) => e.classList.remove("selected"));
  NextBtn.classList.add("available");
  e.target.classList.add("selected");
  NextBtn.addEventListener("click", next);
}

// next is called when an option is choosen so when clicked the index value of the div that has the class 'selected' is saved in an array to be saved later in the lcoal storage
// and also chanegs the picture shown each time by taking the length of the saved answers array (the % 10 is so the values never exxced 10 because 11 % 10 is 1 which goes back to the begaining)
// also is checks if the question has it last element by checking the second element if its not null then we still got more to go otherwise we done and the button should change from next to submit
// after all this checking and changing it calls the resestquestion
function next() {
  attempt.userAnswersIndex.push(
    Number(document.querySelector(".selected").classList[1].slice(3))
  );
  img.style.backgroundImage = `url(../../resoruces/images/questionimg${
    attempt.userAnswersIndex.length + (1 % 10)
  }.svg)`;

  if (typeof questions[1] === "undefined") {
    NextBtn.textContent = "Submit";
    NextBtn.style.background =
      "linear-gradient(90deg, rgba(60,241,128,1) 0%, rgba(5,106,44,1) 100%)";
    NextBtn.removeEventListener("click", next);
    NextBtn.addEventListener("click", submitQuiz);
  }
  resetQuestion();
  change();
}

//  this fucntion resests the classes and colors by removing the class from the options divs and the next btn and remves its click eevent listner so the user cant click before choosing 
function resetQuestion() {
  options.querySelectorAll(".selected").forEach((e) => e.classList.remove("selected"));
  NextBtn.classList.remove("available");
  NextBtn.removeEventListener("click", next);
}

function submitQuiz() {
  let FinshingTime = new Date();
  attempt.FinshingTime = FinshingTime;
  localStorage.attempt = JSON.stringify(attempt);
  window.location.href = "../analysisPage/analysisPage.html";
}

function change() {
  setQuestion();
  setOptions();
}

function startTimer() {
  let time = Number(attemptInfo.timeRequired.slice(0, -3)); // slices the number out of the requiredTime which has the format of 'xxmin'

  let remainingTime = time * 60;

  updateTimerDisplay();

  const interval = setInterval(() => {
    remainingTime--;

    if (remainingTime <= 0) {
      clearInterval(interval);
      timer.textContent = "Time's up!";
      endOfquiz();
    } else {
      updateTimerDisplay();
    }
  }, 1000);

  function updateTimerDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;

    timer.textContent = formattedTime;
  }
}

function setQuestion() {
  question.innerHTML = questions[0].question.slice(3);
}

function setOptions() {
  let opts = options.querySelectorAll(".option");
  opts.forEach((e) => {
    e.textContent = questions[0].options.shift();
  });
  questions.shift();
}

function endOfquiz() {
  
}

async function GetQuestions() {
  try {
    questions = await chooseQuestions(attemptInfo.quizName, 15);
  } catch (error) {
    console.error(error);
  }
}

async function chooseQuestions(str, n) {
  let response = await fetch("questions.json");
  let questionFile = await response.json();
  quizQuestion = questionFile[str];

  // inisaliaze an array with its elements being the indexes starting from 0 to the size of the quizQuestion array
  let questionsIndexes = Array.from(
    { length: quizQuestion.length },
    (_, index) => index
  );
  questionsIndexes = shuffleArray(questionsIndexes);

  //takes the first 10 of the shuffled questions
  questionsIndexes = questionsIndexes.slice(0, 10);

  // stores the choosen questions indexs in atempt object to be stored later in local storage
  attempt.questionsIndexes = questionsIndexes;

  // filter out the randomly choosen qusetions
  selectedQuestions = questionsIndexes.map((i) => quizQuestion[i]);
  5;
  return selectedQuestions;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

async function startCountDown() {
  let span = startingContainer.querySelector("span");
  for (let i = 5; i > 1; i--) {
    span.textContent = i;
    await delay(1000);
  }
  container.classList.remove("hidden");
  startingContainer.remove();
  startTimer();
  change();
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

startCountDown();
