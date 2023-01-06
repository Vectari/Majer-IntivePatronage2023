// LANGUAGE CHANGE
let loginButton = document.getElementById("login");
let registrationTitle = document.getElementById("title-reg");
let usernameTitle = document.getElementById("username-title");
let passwordTitle = document.getElementById("password-title");
let emailTitle = document.getElementById("email-title");
let confirmEmailTitle = document.getElementById("confirm-email-title");
let registrationButtonTitle = document.getElementById("reg-btn");


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
    loginButton.innerHTML = `Log In`;
    registrationTitle.innerHTML = `Registration`;
    usernameTitle.innerHTML = `Username`;
    passwordTitle.innerHTML = `Password`;
    emailTitle.innerHTML = `Email`;
    confirmEmailTitle.innerHTML = `Confirm Email`;
    registrationButtonTitle.innerHTML = `Register`;
}

// Registration Button
let regBtn = document.getElementById('reg-btn');

// Get all registration value
regBtn.addEventListener('click', (e) => {
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let email = document.getElementById('email');
    let confirmEmail = document.getElementById('confirm-email');

    if ((username.value.length >= 6) && (password.value.length >= 6) && (email.value.length > 0) && (confirmEmail.value.length > 0)) {
        sessionStorage.setItem('username', username.value);
        sessionStorage.setItem('password', password.value);
        sessionStorage.setItem('email', email.value);
        sessionStorage.setItem('confirmEmail', confirmEmail.value);
        
    };
});



// dałem tylko nagłówk reg status i STYLE W CSS PRZYGOTOWANE. teraz trzeba dodać wszystkie ify validacji i dodać teksty w miejsce reg status

