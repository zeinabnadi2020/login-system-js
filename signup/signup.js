// variables
var username = document.getElementById("signupName");
var email = document.getElementById("signupEmail");
var password = document.getElementById("signupPassword");
var submit = document.getElementById("submit");
var success = document.getElementById("exist");
var incorrect = document.getElementById("incorrect");
var incorrectEmail = document.getElementById("incorrectEmail");
var incorrectName = document.getElementById("incorrectName");
var incorrectPassword = document.getElementById("incorrectPassword");
var accountSaved = document.getElementById("accountSaved");
var accountExist = document.getElementById("accountExist");
var accounts = [];

function signUp(event) {
  // stop submit
  event.preventDefault();

  // validation
isValid = true;

// 1) cheeck data not empty
isValid = validateUserData();
if(!isValid){
    return;
}

// 2) cheeck email is valid
isValid = validateEmail(email.value);
if(!isValid){
    return;
}

// 3) cheeck name is valid
isValid =validateUserName(username.value);
if(!isValid){
    return;
}

// 4) cheeck password is valid
isValid =validateUserPassword(password.value);
if(!isValid){
    return;
}

// 5) save data in local storage (if email not exist in local storage)
  checkAccountIsExist();
}



/*
*****************************************************
**************** Validation functions ***********
*****************************************************
*/

// function to validate user data
function validateUserData() {
  isNotEmptyData = username.value.length > 0 && email.value.length > 0 && password.value.length > 0;
  if (isNotEmptyData == true) {
    success.style.display = "block";
    incorrect.style.display = "none";
  } else {
    incorrect.style.display = "block";
    success.style.display = "none";
  }

  return isNotEmptyData;
}

function validateEmail(email) {
  isValidEmail = String(email)
    .toLowerCase()
    .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  if (isValidEmail == null) {
    incorrectEmail.style.display = "block";
    success.style.display = "none";
  } else {
    incorrectEmail.style.display = "none";
  }

 return isValidEmail == null ? false : true;
}

function validateUserName(name) {
  isValidname = String(name).trim().length > 1; // true or false
  if (isValidname == false) {
    incorrectName.style.display = "block";
    success.style.display = "none";
  } else {
    incorrectName.style.display = "none";
  }

  return isValidname;
}

function validateUserPassword(password) {
  isValidpassword = String(password).trim().length > 7; // true or false
  if (isValidpassword == false) {
    incorrectPassword.style.display = "block";
    success.style.display = "none";
  } else {
    incorrectPassword.style.display = "none";
  }

  return isValidpassword;
}




/*
*****************************************************
**************** Local storage functions ***********
*****************************************************
*/

// list all local storage accounts
function listLocalStorageAccounts(){
if (localStorage.userAccounts != null) 
    {
        accounts = JSON.parse(localStorage.userAccounts);
    } 
    return accounts;
}

// add new user account to local storage accounts
function addAccountLocalStorage(){
    var newAcount={
        username:signupName.value,
        email:signupEmail.value,
        password:signupPassword.value,
    }
accounts.push(newAcount);
localStorage.setItem('userAccounts',JSON.stringify(accounts))
console.log(accounts)
}

// check if user account is exist in local storage accounts
function checkAccountIsExist(){
    var existingAccounts = listLocalStorageAccounts(); // user account of local storage
    let accountExists = false;  
    for (let i = 0; i < existingAccounts.length; i++) {
        console.log(existingAccounts[i]);
        if (existingAccounts[i].email === email.value) {
            accountExists = true;
            break; 
        }
    }

    if (accountExists) {
        accountExist.style.display = "block";
        //accountSaved.style.display = "none";
        success.style.display = "none";
    } else {
        addAccountLocalStorage();
        //accountSaved.style.display = "block";
        accountExist.style.display = "none";
        success.style.display = "block";


    }
}
