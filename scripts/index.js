// LANGUAGE CHANGE
let loginButton = document.getElementById("login");
let registrationButton = document.getElementById("registration");
let indexInfo = document.getElementById("index-info");


function languageENG(e) {
    sessionStorage.setItem('language', '1');    // add value when user change language
    window.location.reload();
}

function languagePL(e) {
    sessionStorage.setItem('language', '0');    // add value when user change language
    window.location.reload();
}

// change description in welcome page to english
if ((sessionStorage.getItem('language')) === "1") {
    indexInfo.innerHTML = `Hello!<br><a href="./html/login.html" class="info-span"><span>Log In</span></a> and keep your money under control, and if you don't already have an account, <br><a href="./html/registration.html" class="info-span"><span>register</span></a> and join the group of people who know how to take care of their finances.`;

    loginButton.innerHTML = `Log In`;
    registrationButton.innerHTML = `Register`;
}