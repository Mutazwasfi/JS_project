const TakeQuizBtn = document.querySelector(".takeQuiz button");
const LoginBtn = document.querySelector(".signinOptions .LoginAnchor");

let islogedIn = JSON.parse(localStorage.islogedIn?localStorage.islogedIn:null);
if (islogedIn && islogedIn != null ) {
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

TakeQuizBtn.addEventListener("click", HandleTakeQuiz);
LoginBtn.addEventListener("click", HandleTakeQuiz);

function HandleTakeQuiz() {
  let islogedIn = JSON.parse(localStorage.islogedIn);
  if (islogedIn) {
    window.location.href = "../previewPage/previewPage.html";
  } else {
    showPopUp();
  }
}

function showPopUp() {
  document.querySelector("main").style.display = "none";
  let loginPopUp = document.querySelector(".LoginPopUp");
  loginPopUp.classList.add("active");
  document.body.addEventListener("keydown", handleEsacpe);
  document.querySelector(".loginin button").addEventListener("click", login);
}

function handleEsacpe(e) {
  if (e.keyCode == 27) {
    document.querySelector("main").style.display = "flex";
    let loginPopUp = document.querySelector(".LoginPopUp");
    loginPopUp.classList.remove("active");
    document
      .querySelector("body")
      .removeEventListener("keypress", handleEsacpe);
  }
  if(e.keyCode == 13){
    login()
  }
}

function login() {
  let userName = document.querySelector("#userName");
  let password = document.querySelector("#password");
  console.log(userName)
  let profile = localStorage.getItem(userName.value);
  if (profile == null)
    alertWrong(
      userName,
      "Invalid username. Please enter a valid username or consider registering."
    );
  else {
    profile = JSON.parse(profile)
    console.log(profile.password)
    if (password.value === profile.password) {
      console.log("logedin successfully");
      localStorage.islogedIn = 'true'
      window.location.href = "../previewPage/previewPage.html";
    } else
      alertWrong(
        userName,
        " Invalid password. Please check your credentials and try again."
      );
  }
}

function alertWrong(e, errMas) {
  removeError(e);
  let warningElement = document.createElement("section");
  warningElement.className = "alert";
  warningElement.innerHTML = `<i class="material-symbols-outlined">error</i>&nbsp${errMas}`;
  e.parentElement.prepend(warningElement);
  e.cals;
}

function checkEmpty(ele) {
  if (ele.value.trim() === "") {
    alertWrong(ele, "This field is mandatory");
    return true;
  }
  return false;
}

function removeError(ele) {
  let deletedElem = ele.parentElement.querySelector(".alert");
  if (deletedElem != null) deletedElem.remove();
  return false;
}
