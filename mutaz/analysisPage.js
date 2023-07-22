// Function to display results in the correct-results and wrong-results div elements
function displayResultsInDiv() {
    const correctResultsDiv = document.getElementsByClassName('corQ');
    const wrongResultsDiv = document.getElementsByClassName('wrongQ');
  
    // Retrieve results from local storage
    const correctAnswersJSON = localStorage.getItem('corQ');
    const wrongAnswersJSON = localStorage.getItem('wrongQ');
  
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
  