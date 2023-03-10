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
    //change language for input's labels
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

//VALIDATE FUNCTION
regBtn.addEventListener('click', (e) => {
    e.preventDefault(); // with preventDefault user can only login with existing username and password
    // Get all registration value
    let username = document.getElementById('username'); //add user's input value to variable
    let password = document.getElementById('password'); //add user's input value to variable
    let email = document.getElementById('email');   //add user's input value to variable
    let confirmEmail = document.getElementById('confirm-email');    //add user's input value to variable
    
    //variable for errors(status)
    let regStatus = document.getElementById("reg-status");
    let regStatusUsername = document.getElementById("reg-status-username");
    let regStatusPassword = document.getElementById("reg-status-password");
    let regStatusEmail = document.getElementById("reg-status-email");
    let regStatusConfEmail = document.getElementById("reg-status-conf-email");

    //pattern for email
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //pattern for username
    const usernameFormat = /[a-zA-Z]{5}[0-9]{1}[\\-_\[\]\/]{0,1}/;

    //Registration status(errors)
    if ((username.value.length >= 6) && (username.value.length <= 16) && (username.value.match(usernameFormat)) && (password.value.length >= 6) && (email.value === confirmEmail.value) && (email.value.match(mailFormat))) {
        window.location.href = "main.html";
        if ((sessionStorage.getItem('language')) === "1") {
            regStatus.innerHTML = `<div class="reg-status-ok">Account created! Logging In...</div>`;
            // add user to session store
            sessionStorage.setItem('username', username.value);
            sessionStorage.setItem('password', password.value);
            sessionStorage.setItem('email', email.value);
            sessionStorage.setItem('confirmEmail', confirmEmail.value);
            // clear all error style
            document.getElementById("username").style.border = ""; //add red border input if any error with this input
            regStatusUsername.innerHTML = ``;   // clear error if any was before
            document.getElementById("password").style.border = ""; //clear style for password input when first hav error here but now is ok
            regStatusPassword.innerHTML = ``;   // clear error if any was before
            document.getElementById("email").style.border = ""; //clear style for emailinput when first hav error here but now is ok
            regStatusEmail.innerHTML = ``;   // clear error if any was before
            document.getElementById("confirm-email").style.border = ""; //clear style for confirmEmail input when first hav error here but now is ok
            regStatusConfEmail.innerHTML = ``;   // clear error if any was before
        } else {
            regStatus.innerHTML = `<div class="reg-status-ok">Konto utworzone! Logowanie...</div>`;
            // add user to session store
            sessionStorage.setItem('username', username.value);
            sessionStorage.setItem('password', password.value);
            sessionStorage.setItem('email', email.value);
            sessionStorage.setItem('confirmEmail', confirmEmail.value);
            // clear all error style
            document.getElementById("username").style.border = ""; //add red border input if any error with this input
            regStatusUsername.innerHTML = ``;   // clear error if any was before
            document.getElementById("password").style.border = ""; //clear style for password input when first hav error here but now is ok
            regStatusPassword.innerHTML = ``;   // clear error if any was before
            document.getElementById("email").style.border = ""; //clear style for emailinput when first hav error here but now is ok
            regStatusEmail.innerHTML = ``;   // clear error if any was before
            document.getElementById("confirm-email").style.border = ""; //clear style for confirmEmail input when first hav error here but now is ok
            regStatusConfEmail.innerHTML = ``;   // clear error if any was before
        }
    } else if ((username.value.length < 6) || (username.value.length > 16) || (!username.value.match(usernameFormat))) {
        if ((sessionStorage.getItem('language')) === "1") {
            regStatusUsername.innerHTML = `<div class="reg-status-not-ok">Username should be between 6 and 16 characters, it can consist of only letters, numbers and characters - _ [ ] \\ / and must contain at least 5 letters and 1 number.</div>`;   //change language for non-static element
            document.getElementById("username").style.border = "2px solid #FF0000"; //add red border input if any error with this input
            document.getElementById("password").style.border = ""; //clear style for password input when first hav error here but now is ok
            regStatusPassword.innerHTML = ``;   // clear error if any was before
            document.getElementById("email").style.border = ""; //clear style for emailinput when first hav error here but now is ok
            regStatusEmail.innerHTML = ``;   // clear error if any was before
            document.getElementById("confirm-email").style.border = ""; //clear style for confirmEmail input when first hav error here but now is ok
            regStatusConfEmail.innerHTML = ``;   // clear error if any was before
        } else {
            regStatusUsername.innerHTML = `<div class="reg-status-not-ok">Nazwa u??ytkownika powinna mie?? od 6 do 16 znak??w, mo??e sk??ada?? si?? z samych liter i cyfr oraz znak??w - _ [ ] \\ / przy czym musi zawiera?? najmniej 5 liter i 1 cyfr??.</div>`;
            document.getElementById("username").style.border = "2px solid #FF0000"; //add red border input if any error with this input
            document.getElementById("password").style.border = ""; //clear style for password input when first hav error here but now is ok
            regStatusPassword.innerHTML = ``;   // clear error if any was before
            document.getElementById("email").style.border = ""; //clear style for emailinput when first hav error here but now is ok
            regStatusEmail.innerHTML = ``;   // clear error if any was before
            document.getElementById("confirm-email").style.border = ""; //clear style for confirmEmail input when first hav error here but now is ok
            regStatusConfEmail.innerHTML = ``;   // clear error if any was before
        }
    } else if (password.value.length < 6) {
        if ((sessionStorage.getItem('language')) === "1") {
            regStatusPassword.innerHTML = `<div class="reg-status-not-ok">Password must be at least 6 characters.</div>`;   //change language for non-static element
            document.getElementById("username").style.border = ""; //add red border input if any error with this input
            regStatusUsername.innerHTML = ``;   // clear error if any was before
            document.getElementById("password").style.border = "2px solid #FF0000"; //clear style for password input when first hav error here but now is ok
            document.getElementById("email").style.border = ""; //clear style for emailinput when first hav error here but now is ok
            regStatusEmail.innerHTML = ``;   // clear error if any was before
            document.getElementById("confirm-email").style.border = ""; //clear style for confirmEmail input when first hav error here but now is ok
            regStatusConfEmail.innerHTML = ``;   // clear error if any was before
        } else {
            regStatusPassword.innerHTML = `<div class="reg-status-not-ok">Has??o musi mie?? conajmniej 6 znak??w.</div>`;
            document.getElementById("username").style.border = ""; //add red border input if any error with this input
            regStatusUsername.innerHTML = ``;   // clear error if any was before
            document.getElementById("password").style.border = "2px solid #FF0000"; //clear style for password input when first hav error here but now is ok
            document.getElementById("email").style.border = ""; //clear style for emailinput when first hav error here but now is ok
            regStatusEmail.innerHTML = ``;
            document.getElementById("confirm-email").style.border = ""; //clear style for confirmEmail input when first hav error here but now is ok
            regStatusConfEmail.innerHTML = ``;   // clear error if any was before
        }
    } else if (!email.value.match(mailFormat)) {
        if ((sessionStorage.getItem('language')) === "1") {
            regStatusEmail.innerHTML = `<div class="reg-status-not-ok">Please enter a valid email address.</div>`;   //change language for non-static element
            document.getElementById("username").style.border = ""; //add red border input if any error with this input
            regStatusUsername.innerHTML = ``;   // clear error if any was before
            document.getElementById("password").style.border = ""; //clear style for password input when first hav error here but now is ok
            regStatusPassword.innerHTML = ``;   // clear error if any was before
            document.getElementById("email").style.border = "2px solid #FF0000"; //clear style for emailinput when first hav error here but now is ok
            document.getElementById("confirm-email").style.border = "2px solid #FF0000"; //clear style for confirmEmail input when first hav error here but now is ok
            regStatusConfEmail.innerHTML = ``;   // clear error if any was before
        } else {
            regStatusEmail.innerHTML = `<div class="reg-status-not-ok">Wpisz poprawny adres email.</div>`;
            document.getElementById("username").style.border = ""; //add red border input if any error with this input
            regStatusUsername.innerHTML = ``;   // clear error if any was before
            document.getElementById("password").style.border = ""; //clear style for password input when first hav error here but now is ok
            regStatusPassword.innerHTML = ``;   // clear error if any was before
            document.getElementById("email").style.border = "2px solid #FF0000"; //clear style for emailinput when first hav error here but now is ok
            document.getElementById("confirm-email").style.border = "2px solid #FF0000"; //clear style for confirmEmail input when first hav error here but now is ok
            regStatusConfEmail.innerHTML = ``;   // clear error if any was before
        }
    } else if (email.value !== confirmEmail.value) {
        if ((sessionStorage.getItem('language')) === "1") {
            regStatusEmail.innerHTML = `<div class="reg-status-not-ok">Email addresses must be identical.</div>`;   //change language for non-static element
            regStatusConfEmail.innerHTML = `<div class="reg-status-not-ok">Email addresses must be identical.</div>`;   //change language for non-static element
            document.getElementById("username").style.border = ""; //add red border input if any error with this input
            regStatusUsername.innerHTML = ``;   // clear error if any was before
            document.getElementById("password").style.border = ""; //clear style for password input when first hav error here but now is ok
            regStatusPassword.innerHTML = ``;   // clear error if any was before
            document.getElementById("email").style.border = "2px solid #FF0000"; //clear style for emailinput when first hav error here but now is ok
            document.getElementById("confirm-email").style.border = "2px solid #FF0000"; //clear style for confirmEmail input when first hav error here but now is ok
        } else {
            regStatusEmail.innerHTML = `<div class="reg-status-not-ok">Adresy email musz?? by?? identyczne.</div>`;
            regStatusConfEmail.innerHTML = `<div class="reg-status-not-ok">Adresy email musz?? by?? identyczne.</div>`;
            document.getElementById("username").style.border = ""; //add red border input if any error with this input
            regStatusUsername.innerHTML = ``;   // clear error if any was before
            document.getElementById("password").style.border = ""; //clear style for password input when first hav error here but now is ok
            regStatusPassword.innerHTML = ``;   // clear error if any was before
            document.getElementById("email").style.border = "2px solid #FF0000"; //clear style for emailinput when first hav error here but now is ok
            document.getElementById("confirm-email").style.border = "2px solid #FF0000"; //clear style for confirmEmail input when first hav error here but now is ok
        }
    } 
});


