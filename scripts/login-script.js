// LANGUAGE CHANGE
let registrationButton = document.getElementById("registration");
let loginTitle = document.getElementById("login-title");
let usernameTitle = document.getElementById("username-title");
let passwordTitle = document.getElementById("password-title");
let loginButtonTitle = document.getElementById("login-btn");


function languageENG(e) {
    sessionStorage.setItem('language', '1');
    window.location.reload();
}

function languagePL(e) {
    sessionStorage.setItem('language', '0');
    window.location.reload();
}

if ((sessionStorage.getItem('language')) === "1") {
    //change language for static element
    registrationButton.innerHTML = `Register`;
    loginTitle.innerHTML = `Log In`;
    usernameTitle.innerHTML = `Username / Email`;
    passwordTitle.innerHTML = `Password`;
    loginButtonTitle.innerHTML = `Log In`;
}


//VALIDATE FUNCTION
function validate(e){
    e.preventDefault(); // with preventDefault user can only login with existing username and password
    let userNameOrEmail = document.getElementById('usernameoremail');  //add user's input value to variable
    let password = document.getElementById('password');  //add user's input value to variable

    let x = userNameOrEmail.value === sessionStorage.getItem('username');   //shorter form of checking user input exists in sessionstorage
    let y = userNameOrEmail.value === sessionStorage.getItem('email');   //shorter form of checking user input exists in sessionstorage
    let z = password.value === sessionStorage.getItem('password');   //shorter form of checking user input exists in sessionstorage

    let emailCheck = (userNameOrEmail.value).split('').find(element => element === '@');  // check if input is email - essential to propose registration if email not exist

    let loginStatus = document.getElementById("login-status");    //variable for errors(status)

    if (((x) || (y)) && (z)) {
        window.location.href = "main.html";
        if ((sessionStorage.getItem('language')) === "1") {
            loginStatus.innerHTML = `<div class="login-status-ok">Logging In...</div>`;   //change language for non-static element
        } else {
            loginStatus.innerHTML = `<div class="login-status-ok">Logowanie...</div>`;
        }
    } else if (((!y) && (emailCheck === '@')) && ((z) || (!z))) {
        if ((sessionStorage.getItem('language')) === "1") {
            loginStatus.innerHTML = `<div class="login-status-ok">Email address available, <a href="./registration.html" class="free-mail"><br>REGISTER!</a></div>`;   //change language for non-static element
        } else {
            loginStatus.innerHTML = `<div class="login-status-ok">Adres Email wolny, <a href="./registration.html" class="free-mail"><br>ZAREJESTRUJ SIĘ!</a></div>`;
        }
    } else if (((!x) && (!y)) && (!z)) {
        if ((sessionStorage.getItem('language')) === "1") {
            loginStatus.innerHTML = `<div class="login-status-not-ok">Wrong username and password.</div>`;   //change language for non-static element
            document.getElementById("usernameoremail").style.border = "2px solid #FF0000"; //add red border input if any error with this input
            document.getElementById("password").style.border = "2px solid #FF0000";  //add red border input if any error with this input
        } else {
            loginStatus.innerHTML = `<div class="login-status-not-ok">Zła nazwa użytkownika i hasło.</div>`;
            document.getElementById("usernameoremail").style.border = "2px solid #FF0000"; //add red border input if any error with this input
            document.getElementById("password").style.border = "2px solid #FF0000";  //add red border input if any error with this input
        }
    } else if (((x) || (y)) && (!z)) {
        if ((sessionStorage.getItem('language')) === "1") {
            loginStatus.innerHTML = `<div class="login-status-not-ok">Wrong password.</div>`;   //change language for non-static element
            document.getElementById("usernameoremail").style.border = ""; //clear style for username or email input when first hav error here but now is ok
            document.getElementById("password").style.border = "2px solid #FF0000";  //add red border input if any error with this input
        } else {
            loginStatus.innerHTML = `<div class="login-status-not-ok">Złe hasło.</div>`;
            document.getElementById("usernameoremail").style.border = ""; //clear style for username or email input when first hav error here but now is ok
            document.getElementById("password").style.border = "2px solid #FF0000";  //add red border input if any error with this input
        }
    } else {
        if ((sessionStorage.getItem('language')) === "1") {
            loginStatus.innerHTML = `<div class="login-status-not-ok">Login error. Enter other details.</div>`;   //change language for non-static element
            document.getElementById("usernameoremail").style.border = "2px solid #FF0000";  //add red border input if any erraor with this input
            document.getElementById("password").style.border = "2px solid #FF0000";  //add red border input if any erraor with this input
            console.log("error");
        } else {
            loginStatus.innerHTML = `<div class="login-status-not-ok">Błąd logowania. Wprowadź inne dane.</div>`;
            document.getElementById("usernameoremail").style.border = "2px solid #FF0000";  //add red border input if any erraor with this input
            document.getElementById("password").style.border = "2px solid #FF0000";  //add red border input if any erraor with this input
            console.log("error");
        }
    }
};
