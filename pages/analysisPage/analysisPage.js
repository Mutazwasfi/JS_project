if (localStorage.attempt == undefined) {
  window.location.href = "../homePage/homePage.html";
}

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
  window.location.href = "../homePage/homePage.html";
}

let TimeSpan = document.querySelector(".sub-title span");
TimeSpan.textContent = TimeTaken();

let HomeBtn = document.querySelectorAll(".Home button");
HomeBtn.forEach((e) => {
  e.addEventListener("click", logOut);
});

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

showBtn = document.querySelector(".ReviewAnswers button");
showBtn.addEventListener("click", () => {
  selectedQuestions = retreiveQuestion("java").then(filler);
});
var selectedQuestions;
GetQuestions();

async function filler() {
  let userAnswersIndex = attempt.userAnswersIndex;
  console.log(userAnswersIndex);

  for (let i in selectedQuestions) {
    let questionDiv = document.createElement("div");
    questionDiv.classList.add("questions");

    let question = document.createElement("div");
    question.classList.add("question");
    let questionText = document.createTextNode(
      selectedQuestions[i].question.slice(3)
    );
    question.appendChild(questionText);
    questionDiv.appendChild(question);

    let options = document.createElement("div");
    options.classList.add("options");

    for (let j = 0; j < 4; j++) {
      let option = document.createElement("div");
      option.classList.add("option");
      let optionText = document.createTextNode(selectedQuestions[i].options[j]);

      if (selectedQuestions[i].correct_answer_index === j)
        option.classList.add("correct");
      if (
        userAnswersIndex[i] == j &&
        userAnswersIndex[i] != selectedQuestions[i].correct_answer_index
      )
        option.classList.add("wrong");

      option.appendChild(optionText);
      options.appendChild(option);
    }

    questionDiv.appendChild(options);

    document.querySelector("#secondDashboard").append(questionDiv);

    let displitDiv = document.createElement("div");
    displitDiv.classList.add("filler");
    document.querySelector("#secondDashboard").append(displitDiv);
  }
  document
    .querySelector("main .mainWindow .content .dashboard")
    .classList.add("hidden");
  document.querySelector(".content .main").classList.remove("hidden");
  document.querySelector("#score").textContent =
    (getResult() / selectedQuestions.length) * 100 + '%';
}
let result;

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
  console.log(getResult());

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
  console.log(Answersindices);
  let total = 0;
  selectedQuestions.forEach((e, i) => {
    if (e.correct_answer_index == Answersindices[i]) total++;
  });
  return total;
}
