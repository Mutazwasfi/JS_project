// // Get references to the button and the questions section
// let showBtn = document.querySelector(".resultBtn");
// let questionDiv = document.querySelector(".Questions");

let selectedQuestions;
// retreiveQuestion(localStorage.attemptInfo.quizName)
GetQuestions();
let result;

async function GetQuestions() {
  try {
    selectedQuestions = await retreiveQuestion('java');

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
  console.log(selectedQuestions)
  result = getResult()
} 
function getResult(){
  let Answersindices = JSON.parse(localStorage.attempt).userAnswersIndex
  console.log(Answersindices)
  let total = 0;
  selectedQuestions.forEach((e,i) => {
    if(e.correct_answer_index == Answersindices[i])
      total++;
  });
  console.log(total)
  return total;
}

let Namediv = document.querySelector('.fname')

let attempt = JSON.parse(localStorage.attempt)
let attemptInfo = JSON.parse(localStorage.attemptInfo)


let name = attemptInfo.userName;
let startingtime = attemptInfo.startingTime
let finishingTime = attempt.finishingTime

Namediv.textContent = `Wlecome, ${localStorage.attemptInfo}`
TimeTaken = document.querySelector('.timeTaken')
TimeTaken.textContent = finishingTime-startingtime


function setQuestion(){
  let question = document.createElement('div')
  let questText = document.createTextNode(selectedQuestions[0].question)
  question.append(questText)
  
  for(let i = 0 ; i < 4 ;i++){
    
  }
}