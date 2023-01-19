// LANGUAGE CHANGE
let registrationButton = document.getElementById("registration");
let loginTitle = document.getElementById("login-title");
let usernameTitle = document.getElementById("username-title");
let passwordTitle = document.getElementById("password-title");
let loginButtonTitle = document.getElementById("login-btn");


function languageENG(e) {
    sessionStorage.setItem('language', '1');    // add value when user change language
    window.location.reload();
}

function languagePL(e) {
    sessionStorage.setItem('language', '0');    // add value when user change language
    window.location.reload(); 
}

if ((sessionStorage.getItem('language')) === "1") {
    //change language for input's labels
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


    //pattern for email
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let emailCheck = userNameOrEmail.value.match(mailFormat);

    //variable for errors(status)
    let loginStatus = document.getElementById("login-status");
    let loginStatusUsernameOrEmail = document.getElementById("login-status-usernameoremail");
    let loginStatusPassword = document.getElementById("login-status-password");

    if (((x) || (y)) && (z)) {
        window.location.href = "main.html";
        if ((sessionStorage.getItem('language')) === "1") {
            loginStatus.innerHTML = `<div class="login-status-ok">Logging In...</div>`; //show login OK status ENG
            document.getElementById("usernameoremail").style.border = ""; // clear error if any was before
            loginStatusUsernameOrEmail.innerHTML = ``;  // clear error if any was before
            document.getElementById("password").style.border = "";  // clear error if any was before
            loginStatusPassword.innerHTML = ``; // clear error if any was before
        } else {
            loginStatus.innerHTML = `<div class="login-status-ok">Logowanie...</div>`;  //show login OK status PL
            document.getElementById("usernameoremail").style.border = "";   // clear error if any was before
            loginStatusUsernameOrEmail.innerHTML = ``;  // clear error if any was before
            document.getElementById("password").style.border = "";  // clear error if any was before
            loginStatusPassword.innerHTML = ``; // clear error if any was before
        }
    } else if (((!y) && (emailCheck)) && ((z) || (!z))) {
        if ((sessionStorage.getItem('language')) === "1") {
            loginStatus.innerHTML = `<div class="login-status-ok">Email address available, <a href="./registration.html" class="free-mail"><br>REGISTER!</a></div>`; // if email is free, suggest registration ENG
            document.getElementById("usernameoremail").style.border = "";   // clear error if any was before
            loginStatusUsernameOrEmail.innerHTML = ``;  // clear error if any was before
            document.getElementById("password").style.border = "";  // clear error if any was before
            loginStatusPassword.innerHTML = ``; // clear error if any was before
        } else {
            loginStatus.innerHTML = `<div class="login-status-ok">Adres Email wolny, <a href="./registration.html" class="free-mail"><br>ZAREJESTRUJ SIĘ!</a></div>`; // if email is free, suggest registration PL
            document.getElementById("usernameoremail").style.border = "";   // clear error if any was before
            loginStatusUsernameOrEmail.innerHTML = ``;  // clear error if any was before
            document.getElementById("password").style.border = "";  // clear error if any was before
            loginStatusPassword.innerHTML = ``;     // clear error if any was before
        }
    } else if (((!x) && (!y)) && (!z)) {
        if ((sessionStorage.getItem('language')) === "1") {
            loginStatusUsernameOrEmail.innerHTML = `<div class="login-status-not-ok">Wrong username or Email.</div>`; // wrong username or email error
            loginStatusPassword.innerHTML = `<div class="login-status-not-ok">Wrong password.</div>`; // wrong password error
            document.getElementById("usernameoremail").style.border = "2px solid #FF0000"; //add error style
            document.getElementById("password").style.border = "2px solid #FF0000"; //add error style
            loginStatus.innerHTML = ``; // clear error if any was before
        } else {
            loginStatusUsernameOrEmail.innerHTML = `<div class="login-status-not-ok">Zła nazwa użytkownika lub Email.</div>`; // wrong username or email error ENG
            loginStatusPassword.innerHTML = `<div class="login-status-not-ok">Złe hasło.</div>`; // wrong password error PL
            document.getElementById("usernameoremail").style.border = "2px solid #FF0000"; //add error style
            document.getElementById("password").style.border = "2px solid #FF0000"; //add error style
            loginStatus.innerHTML = ``; // clear error if any was before
        }
    } else if (((x) || (y)) && (!z)) {
        if ((sessionStorage.getItem('language')) === "1") {
            loginStatusPassword.innerHTML = `<div class="login-status-not-ok">Wrong password.</div>`; // wrong password error ENG
            document.getElementById("usernameoremail").style.border = "";
            loginStatusUsernameOrEmail.innerHTML = ``;
            document.getElementById("password").style.border = "2px solid #FF0000";
            loginStatus.innerHTML = ``;
        } else {
            loginStatusPassword.innerHTML = `<div class="login-status-not-ok">Złe hasło.</div>`; // wrong password error PL
            document.getElementById("usernameoremail").style.border = ""; // clear error if any was before
            loginStatusUsernameOrEmail.innerHTML = ``; // clear error if any was before
            document.getElementById("password").style.border = "2px solid #FF0000"; //add error style
            loginStatus.innerHTML = ``; // clear error if any was before
        }
    } else if (((!x) || (!y)) && (z)) {
        if ((sessionStorage.getItem('language')) === "1") {
            loginStatusUsernameOrEmail.innerHTML = `<div class="login-status-not-ok">Wrong username or Email.</div>`; // wrong username or email error ENG
            document.getElementById("usernameoremail").style.border = "2px solid #FF0000"; //add error style
            document.getElementById("password").style.border = "";  // clear error if any was before
            loginStatusPassword.innerHTML = ``; // clear error if any was before
            loginStatus.innerHTML = ``; // clear error if any was before
        } else {
            loginStatusUsernameOrEmail.innerHTML = `<div class="login-status-not-ok">Zła nazwa użytkownika lub Email.</div>`; // wrong username or email error PL
            document.getElementById("usernameoremail").style.border = "2px solid #FF0000";  //add error style
            document.getElementById("password").style.border = "";  // clear error if any was before
            loginStatusPassword.innerHTML = ``;     // clear error if any was before
            loginStatus.innerHTML = ``; // clear error if any was before
        }
    } else {
        if ((sessionStorage.getItem('language')) === "1") {
            loginStatus.innerHTML = `<div class="login-status-not-ok">Login error. Enter other details.</div>`; // login error ENG
            document.getElementById("usernameoremail").style.border = "2px solid #FF0000";  //add error style
            document.getElementById("password").style.border = "2px solid #FF0000"; //add error style
            loginStatus.innerHTML = ``; // clear error if any was before
            console.log("error");
        } else {
            loginStatus.innerHTML = `<div class="login-status-not-ok">Błąd logowania. Wprowadź inne dane.</div>`; // login error PL
            document.getElementById("usernameoremail").style.border = "2px solid #FF0000";  //add error style
            document.getElementById("password").style.border = "2px solid #FF0000"; //add error style
            loginStatus.innerHTML = ``; // clear error if any was before
            console.log("error");
        }
    }
};
