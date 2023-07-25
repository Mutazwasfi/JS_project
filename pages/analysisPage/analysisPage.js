// // Get references to the button and the questions section
let showBtn = document.querySelector(".ReviewAnswers button");

let attempt = JSON.parse(localStorage.attempt);
let attemptInfo = JSON.parse(localStorage.attemptInfo);

let islogedIn = JSON.parse(
  localStorage.islogedIn ? localStorage.islogedIn : null
);
if (islogedIn) {
  let NameDiv = document.createElement("div");
  let firstName = JSON.parse(
    localStorage.getItem(localStorage.currentUser)
  ).name;
  let text = document.createTextNode(`Welcome, ${firstName}`);
  NameDiv.appendChild(text);

  document.querySelector(".signinOptions").innerHTML = NameDiv.outerHTML;
} else {
  localStorage.islogedIn = false;
}

let TimeSpan = document.querySelector(".sub-title span");
TimeSpan.textContent = TimeTaken();

let HomeBtn = document.querySelector(".Home button");
HomeBtn.addEventListener("click", logOut);
function logOut() {
  let user = JSON.parse(localStorage.getItem(localStorage.currentUser));
  let attemptedQuiz = {
    TimeTaken: TimeTaken(),
    questionsIndices: attempt.questionsIndexes,
    userAnswersIndex: attempt.Answersindices,
    quizName: user.position,
  };

  user.PrevouseAttemptedQuiz = attemptedQuiz;
  localStorage.setItem(user.username.toLowerCase(), JSON.stringify(user));
  localStorage.islogedIn = "false";
  window.location.href = "../homePage/homePage.html";
}

showBtn.addEventListener("click", () => {
  filler();
});

function filler() {}
let result;

let selectedQuestions;
GetQuestions();

async function GetQuestions() {
  try {
    selectedQuestions = await retreiveQuestion(attemptInfo.quizName);
  } catch (error) {
    console.error(error);
  }
}

async function retreiveQuestion(str) {
  let response = await fetch("../questionsPage/questions.json");
  let questionFile = await response.json();
  let quizQuestion = questionFile[str];

  // stores the choosen questions indexs in atempt object to be stored later in local storage
  let questionsIndices = attempt.questionsIndexes;
  selectedQuestions = questionsIndices.map((e) => quizQuestion[e]);
  let resultSpan = document.querySelector(".answers span");
  resultSpan.textContent = `${getResult()} out of ${selectedQuestions.length}`;
  let percentage = (document.querySelector("#number").textContent = `${
    (getResult() / selectedQuestions.length) * 100
  }%`);
}
function TimeTaken() {
  let startingtime = attemptInfo.startingTime;
  let finishingTime = attempt.FinshingTime;

  let timeTakenValue = new Date(finishingTime) - new Date(startingtime);
  let mins = Math.floor(timeTakenValue / 60000);
  let secs = Math.floor((timeTakenValue % 60000) / 1000);

  return `${mins}:${secs - 5}`;
}

function getResult() {
  let Answersindices = JSON.parse(localStorage.attempt).userAnswersIndex;
  let total = 0;
  selectedQuestions.forEach((e, i) => {
    if (e.correct_answer_index == Answersindices[i]) total++;
  });
  return total;
}
