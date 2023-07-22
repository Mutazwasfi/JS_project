// define all the dom elemnt needed and assign them to variables
const NAME = document.querySelector("#name");
const USERNAME = document.querySelector("#userName");
const EMAIL = document.querySelector("#email");
const GENDER = document.querySelector("#gender");
const POSITION = document.querySelector("#position");
const SUBMITBTN = document.querySelector(".submitBtn");
const BD = document.querySelector("#BirthDate");

let namehasError = true;
let userNamehasError = true;
let emaihasError = true;
let passwordhasError = false;
let datehasError = true;

NAME.addEventListener("blur", (e) => validateName(e));
function validateName(e) {
  if (e.target.value.trim() === "" && !namehasError) {
    alertWrong(NAME, "This field is mandatory");
    namehasError = true;
    return;
  }
  let pattern = /^[a-zA-Z]+$/i;
  if (!NAME.value.match(pattern)) {
    if (!namehasError) {
      alertWrong(NAME, "The name cannot contain numbers or special characters");
      namehasError = true;
    } else {
      NAME.parentElement.firstChild.remove();
      alertWrong(NAME, "This field is mandatory ");
    }
  } else {
    if (namehasError) {
      namehasError = false;
      NAME.parentElement.querySelector(".alert").remove();
    }
  }
}

USERNAME.addEventListener("blur", (e) => validateUserName(e));
function validateUserName(e) {
  if (e.target.value.trim() === "" && !userNamehasError) {
    alertWrong(USERNAME, "This field is mandatory");
    userNamehasError = true;
    return;
  }
  let pattern = /^[a-zA-Z0-9_.]+$/i;
  if (!USERNAME.value.match(pattern)) {
    if (!userNamehasError) {
      alertWrong(
        USERNAME,
        "Cannot contain special characters except underscores or periods"
      );
      userNamehasError = true;
    } else {
      USERNAME.parentElement.firstChild.remove();
      alertWrong(USERNAME, "This field is mandatory");
    }
  } else {
    if (userNamehasError) {
      userNamehasError = false;
      USERNAME.parentElement.querySelector(".alert").remove();
    }
  }
}

EMAIL.addEventListener("blur", (e) => validateEmail(e));
function validateEmail(e) {
  if (e.target.value.trim() === "" && !emaihasError) {
    alertWrong(EMAIL, "This field is mandatory");
    emaihasError = true;
    return;
  }
  let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!EMAIL.value.match(pattern)) {
    if (!emaihasError) {
      alertWrong(EMAIL, "Please recheck the email");
      emaihasError = true;
    } else {
      EMAIL.parentElement.firstChild.remove();
      alertWrong(EMAIL, "This field is mandatory");
    }
  } else {
    if (emaihasError) {
      emaihasError = false;
      EMAIL.parentElement.querySelector(".alert").remove();
    }
  }
}

BD.addEventListener("blur", (e) => validateDate(e));

function validateDate(e) {
  const currentDate = new Date();
  const eighteenYearsAgo = new Date(
    currentDate.getFullYear() - 18,
    currentDate.getMonth(),
    currentDate.getDate()
  );

  const inputDate = new Date(e.target.value);
  const datehasErrorlpcal = inputDate > eighteenYearsAgo;

  if (datehasErrorlpcal) {
    alertWrong(BD, "You need to be at least 18 to sign up");
    datehasError= true
  }else if(datehasError){
    BD.parentElement.querySelector('.alert').remove();
    datehasError = false
  }
}


// add an click event listner
SUBMITBTN.addEventListener("click", (e) => {
  let newuser = {};
  if (
    !namehasError &&
    !userNamehasError &&
    !emaihasError &&
    !passwordhasError &&
    !datehasError
  ) {
    newuser.name = NAME.value;
    newuser.userName = USERNAME.value;
    newuser.email = EMAIL.value;
    newuser.gender = GENDER.value;
    newuser.birthDate = BD.value;
    newuser.postiion = POSITION.value; 
    localStorage.setItem(`${newuser.name}`,JSON.stringify(newuser))
  }
  else{
    e.preventDefault()      
  }
});

function alertWrong(e, errMas) {
  let warningElement = document.createElement("section");
  warningElement.className = "alert";
  warningElement.innerHTML = `<i class="material-symbols-outlined">error</i>&nbsp${errMas}`;
  e.parentElement.prepend(warningElement);
}
