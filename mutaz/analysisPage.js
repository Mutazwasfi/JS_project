// Function to display results in the correct-results and wrong-results div elements
function displayResultsInDiv() {
    const correctResultsDiv = document.getElementById('correct-results');
    const wrongResultsDiv = document.getElementById('wrong-results');
  
    // Retrieve results from local storage
    const correctAnswersJSON = localStorage.getItem('correct_answers');
    const wrongAnswersJSON = localStorage.getItem('wrong_answers');
  
    const correctAnswers = JSON.parse(correctAnswersJSON) || [];
    const wrongAnswers = JSON.parse(wrongAnswersJSON) || [];
  
    // Loop through correct answers and create a new list element for each question
    const correctList = document.createElement('ul');
    correctAnswers.forEach(answer => {
      const listItem = document.createElement('li');
      listItem.textContent = `${answer.question} - Correct Answer: ${answer.correct_answer}`;
      correctList.appendChild(listItem);
    });
    correctResultsDiv.appendChild(correctList);
  
    // Loop through wrong answers and create a new list element for each question
    const wrongList = document.createElement('ul');
    wrongAnswers.forEach(answer => {
      const listItem = document.createElement('li');
      listItem.textContent = `${answer.question} - Correct Answer: ${answer.correct_answer}`;
      wrongList.appendChild(listItem);
    });
    wrongResultsDiv.appendChild(wrongList);
  }
  