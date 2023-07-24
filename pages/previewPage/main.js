let btn = document.getElementById('btn');
btn.addEventListener('click', handleAttempt);

function handleAttempt() {
  let attemptObj = {};

  let startingTime = new Date();
  let quizName = JSON.parse(localStorage.getItem(localStorage.currentUser)).position; 
  let username = JSON.parse(localStorage.getItem(localStorage.currentUser)).username; 

  let timeRequired = '10min';

  attemptObj.startingTime = startingTime;
  attemptObj.quizName = quizName;
  attemptObj.username = username;
  attemptObj.timeRequired = timeRequired;

  localStorage.setItem('attemptInfo', JSON.stringify(attemptObj));

  
window.location.href = '../questionPage/questionPage.html'
}
