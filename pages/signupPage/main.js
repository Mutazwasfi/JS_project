if(JSON.parse(localStorage.islogedIn)){
  window.location.href = "../homePage/homePage.html";
}

// define all the dom elemnt needed and assign them to variables
const NAME = document.querySelector("#name");
const USERNAME = document.querySelector("#userName");
const EMAIL = document.querySelector("#email");
const GENDER = document.querySelector("#gender");
const POSITION = document.querySelector("#position");
const BD = document.querySelector("#BirthDate");
const PASSWORD = document.querySelector("#password");
const SUBMITBTN = document.querySelector(".submitBtn");

let namehasError = false;
let userNamehasError = false;
let emaihasError = false;
let passwordhasError = false;
let datehasError = false;

// add an event function for the name input to activate when leaveing the input box (blur or lose fouce)
NAME.addEventListener("blur", (e) => validateName(e.target));
// a fucntion that validate the  name
function validateName(e) {
  // check if the input field was left empty by invoking checkEmpty function
  if (checkEmpty(e)) {
    namehasError = true;
    return;
  }
  // this is the pattren that will check the input name .value and if it finds any match it returns true and if false it alerts the user by invoking alertWrong function
  // and only accpets letters
  let pattern = /^[a-zA-Z]+$/i;
  if (!NAME.value.match(pattern)) {
    alertWrong(NAME, "The name cannot contain numbers or special characters");
    namehasError = true;
    return;
  }

  //this runs when the name is correct and now mistakes and if so it check if it had any error alerts and removes them by invoking removeError function
  if (namehasError) namehasError = removeError(NAME);
}

//same as the prevouse function but the pattren is diffrent
USERNAME.addEventListener("blur", (e) => validateUserName(e.target));
function validateUserName(e) {
  if (checkEmpty(e)) {
    userNamehasError = true;
    return;
  }

  let pattern = /^[a-zA-Z0-9_.]+$/i;
  if (!USERNAME.value.match(pattern)) {
    alertWrong(
      USERNAME,
      "Cannot contain special characters except underscores or periods"
    );
    userNamehasError = true;
    return;
  }
  if (userNamehasError) {
    userNamehasError = removeError(USERNAME);
  }
}

//same as the prevouse function but the pattren is diffrent
EMAIL.addEventListener("blur", (e) => validateEmail(e.target));
function validateEmail(e) {
  if (checkEmpty(e)) {
    emaihasError = true;
    return;
  }

  let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!EMAIL.value.match(pattern)) {
    alertWrong(EMAIL, "Please recheck the email");
    emaihasError = true;
    return;
  }

  if (emaihasError) emaihasError = removeError(EMAIL);
}

//this is a funtion that validates the date input feilad by inizlaising a new date object from 18 yaers ago
// and another date object of the given date from the user and if the inputed object is larger than than the 18years ago then he must be less than 18 which is not accepeted
BD.addEventListener("blur", (e) => validateDate(e.target));
datehasError = false;
function validateDate(e) {
  const currentDate = new Date();
  const eighteenYearsAgo = new Date(
    currentDate.getFullYear() - 18,
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const inputDate = new Date(e.value);

  if (inputDate > eighteenYearsAgo) {
    alertWrong(BD, "You need to be at least 18 to sign up");
    datehasError = true;
    return;
  }

  if (datehasError) datehasError = removeError(BD);
}

//same as the prevouse function but the pattren is diffrent
PASSWORD.addEventListener("blur", (e) => validatePassword(e.target));
function validatePassword(e) {
  if (checkEmpty(e)) {
    passwordhasError = true;
    return;
  }

  let pattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;
  if (!PASSWORD.value.match(pattern)) {
    alertWrong(
      PASSWORD,
      "Password must be between 8 and 16 and contain at least 1 diget, one spical charecter, and a capital letter"
    );
    passwordhasError = true;
    return;
  }

  if (passwordhasError) passwordhasError = removeError(PASSWORD);
}

// add an click event listner that checks if any of the hasError variables that were set prevousle in each valiadtion functions
// and if everthing defined ANNND true it creaes an object and store it localy with the item name being the username of the user
SUBMITBTN.addEventListener("click", (e) => {
  let signUp = true;
  validateName(NAME);
  validateUserName(USERNAME);
  validateEmail(EMAIL);
  validatePassword(PASSWORD);
  validateDate(BD);

  if (
    namehasError ||
    userNamehasError ||
    emaihasError ||
    passwordhasError ||
    datehasError
  ) {
    signUp = false;
  }

  // creaes an object and store it localy with the item name being the lower cased username of the user and the other proprties
  if (signUp) {
    let newuser = {};
    newuser.name = NAME.value;
    newuser.username = USERNAME.value;
    newuser.email = EMAIL.value;
    newuser.birthdate = BD.value;
    newuser.gender = GENDER.value;
    newuser.position = POSITION.value;
    newuser.password = PASSWORD.value;
    localStorage.setItem(
      `${newuser.username.toLowerCase()}`,
      JSON.stringify(newuser)
    );
    localStorage.currentUser = newuser.username.toLowerCase();
    localStorage.islogedIn = "true";
    console.log("huh?");
    e.preventDefault();
    window.location.href = "../previewPage/previewPage.html";
  } else {
    console.log("falied");
    e.preventDefault();
  }
});

// this function starts by removeing any existing error alert then createing a section elemnt and adding the alert class to it which has style in css then in its content it inserts an icon the error icon and the provided error massage
// then it navigates the dom to find the provided elemnts (e) parent and prepend (which means it will be the fisrt elemnt in the parent contaiiner)
function alertWrong(e, errMas) {
  removeError(e);
  let warningElement = document.createElement("section");
  warningElement.className = "alert";
  warningElement.innerHTML = `<i class="material-symbols-outlined">error</i>&nbsp${errMas}`;
  e.parentElement.prepend(warningElement);
  e.cals;
}

// this fucntion checks if the provided element (ele) is empty and if so it uses the prevouse function to laert that this fieald is required
function checkEmpty(ele) {
  if (ele.value.trim() === "") {
    alertWrong(ele, "This field is mandatory");
    return true;
  }
  return false;
}

// this function navigates the DOM to find the pereant container of the provided element (ele) and selects the elemnt with has the class alert in it
// and if it finds any it will remove it and if it didnt it just does.... nothing
function removeError(ele) {
  let deletedElem = ele.parentElement.querySelector(".alert");
  if (deletedElem != null) deletedElem.remove();
  return false;
}
