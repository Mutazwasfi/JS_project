// // Get references to the button and the questions section
let showBtn = document.querySelector(".resultBtn");
let questionDiv = document.querySelector(".Questions");



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




showBtn.addEventListener("click", () => {
  questionDiv.style.display = "grid";
  filler();
});

function filler() {
  // let questionConatainer = document.createElement
  if(!selectedQuestions) GetQuestions()
  console.log(selectedQuestions)
  
  for (let i in selectedQuestions) {
    const listContainer = document.querySelector(".corQ");
    const dl = document.createElement("dl");
    const dt = document.createElement("dt");
    let question = selectedQuestions[i].question;
    dt.textContent = question;
    dl.appendChild(dt);
    for (let j = 0; j < 4; j++) {
      const dd = document.createElement("dd");
      dd.textContent = selectedQuestions[i].options[j];
      dt.appendChild(dd);
    }
    listContainer.appendChild(dl);
  }
}
GetQuestions();
let result;

let selectedQuestions;

async function GetQuestions() {
  try {
    selectedQuestions = await retreiveQuestion("java");
  } catch (error) {
    console.error(error);
  }
}

async function retreiveQuestion(str) {
  let response = await fetch("../questionsPage/questions.json");
  let questionFile = await response.json();
  let quizQuestion = questionFile[str];

  // stores the choosen questions indexs in atempt object to be stored later in local storage
  questionsIndices = JSON.parse(localStorage.attempt).questionsIndexes;
  selectedQuestions = questionsIndices.map((e) => quizQuestion[e]);
  result = getResult();
}
function getResult() {
  let Answersindices = JSON.parse(localStorage.attempt).userAnswersIndex;
  let total = 0;
  selectedQuestions.forEach((e, i) => {
    if (e.correct_answer_index == Answersindices[i]) total++;
  });
  return total;
}



let Namediv = document.querySelector(".fName");
let attempt = JSON.parse(localStorage.attempt);
let attemptInfo = JSON.parse(localStorage.attemptInfo);
let Name = attemptInfo.username;
Namediv.textContent = `Wlecome, ${Name}`;
let startingtime = attemptInfo.startingTime;
let finishingTime = attempt.FinshingTime;


TimeTaken = document.querySelector(".attemptDate");
TimeTaken.textContent = new Date(finishingTime) - new Date(startingtime);


