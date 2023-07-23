const img = document.querySelector(".image");
const timer = document.querySelector(".countDown");
const question = document.querySelector(".question");
const options = document.querySelector(".options");
const NextBtn = document.querySelector(".NextBtn");

let container = document.querySelector(".content");
let startingContainer = document.querySelector(".starting");

async function start() {
  let span = startingContainer.querySelector("span");
  for(let i = 5 ; i >=0 ; i--){
    span.textContent = i;
    await delay(1000)
  }
  container.classList.remove('hidden')
  startingContainer.remove()
  startTheQuiz()
}
start();
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function startTheQuiz(){
return
}


async function printJSON() {
  const response = await fetch("questions.json");
  const json = await response.json();
  console.log(json);
}

printJSON()