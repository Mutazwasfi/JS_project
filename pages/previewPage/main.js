let islogedIn = JSON.parse(
  localStorage.islogedIn ? localStorage.islogedIn : null
);

if(JSON.parse(localStorage.attemptInfo ? localStorage.attemptInfo:null)!= null)
  window.location.href = '../analysisPage/analysisPage.html'

if (islogedIn && islogedIn != null) {
  let NameDiv = document.createElement("div");
  NameDiv.classList.add("LoginAnchor");
  let firstName = JSON.parse(
    localStorage.getItem(localStorage.currentUser)
  ).name;
  let text = document.createTextNode(`${firstName}`);
  NameDiv.appendChild(text);
  document.querySelector(".signinOptions").innerHTML = NameDiv.outerHTML;
} else {
  localStorage.islogedIn = false;
}

let userInfo = JSON.parse(localStorage.getItem(localStorage.currentUser));

let img = document.querySelector(".image");
img.style.backgroundImage = `url(../../resoruces/images/${userInfo.position}.svg`;
let brifes = [
  `Welcome ${JSON.parse(localStorage.getItem(localStorage.currentUser)).name},to the HTML Quiz! Get ready to test your knowledge of
  HTML and see how well you know the markup language that powers
  the web. Good luck!`,
  `Welcome ${JSON.parse(localStorage.getItem(localStorage.currentUser)).name},to the CSS Quiz! Are you prepared to put your CSS expertise to the test and demonstrate your proficiency in styling the web? Get ready to showcase your knowledge of Cascading Style Sheets and see how well you can design and beautify web pages. Best of luck!`,
  `Welcome ${JSON.parse(localStorage.getItem(localStorage.currentUser)).name},to the JavaScript Quiz! Are you ready to challenge your understanding of the programming language that brings interactivity and dynamic functionality to websites? Get ready to showcase your JavaScript skills and demonstrate your ability to create powerful, interactive web applications. Good luck!
  `,
];
let title = document.querySelector(".title");
switch (userInfo.position) {
  case "java":
    title.textContent = brifes[2];
    break;
  case "css":
    title.textContent = brifes[1];
    break;
  case "html":
    title.textContent = brifes[0];
    break;
}

let btn = document.getElementById("btn");
btn.addEventListener("click", handleAttempt);

function handleAttempt() {
  let attemptObj = {};

  let startingTime = new Date();
  let quizName = JSON.parse(
    localStorage.getItem(localStorage.currentUser)
  ).position;
  let username = JSON.parse(
    localStorage.getItem(localStorage.currentUser)
  ).username;

  let timeRequired = "10min";
  attemptObj.startingTime = startingTime;
  attemptObj.quizName = quizName;
  attemptObj.username = username;
  attemptObj.timeRequired = timeRequired;

  localStorage.setItem("attemptInfo", JSON.stringify(attemptObj));

  window.location.href = "../questionsPage/questionsPage.html";
}
