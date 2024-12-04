var email    = document.getElementById("signinEmail");
var password = document.getElementById("signinPassword");
var notExist = document.getElementById("notExist");

document.getElementById("signinEmail").oninput= function() {
    if( email.value.length>0 && password.value.length>0 ){
        document.getElementById("incorrect").style.display="none"
    } 
}
document.getElementById("signinPassword").oninput=function() {
    if( email.value.length > 0 && password.value.length > 0 ){
        document.getElementById("incorrect").style.display="none"
    } 
}

function login(){
    if( email.value.length==0||password.value.length==0 ){
        document.getElementById("incorrect").style.display="block";
        return;
    }

    // check account exist
    checkAccountIsExist();

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
        var accountExists = false;  
        var userName = null;
        for (var i = 0; i < existingAccounts.length; i++) {
            if (existingAccounts[i].email === email.value && existingAccounts[i].password === password.value) {
                accountExists = true;
                userName = existingAccounts[i].username;
                break; 
            }
        }
    
        if (accountExists) 
        {
            // go to home
            var loggedUser={
                name:userName,
            }
        localStorage.setItem('loggedUser',JSON.stringify(loggedUser))
            window.location.replace("home.html")
        } 
        else 
        {
            notExist.style.display = 'block';
        }
    }
    