function validate(e){
    e.preventDefault(); // with preventDefault user can only login with existing username and password
    let userNameOrEmail = document.getElementById('usernameoremail');  //add user's input value to variable
    let password = document.getElementById('password');  //add user's input value to variable

    let x = userNameOrEmail.value === sessionStorage.getItem('username');   //shorter form of checking user input exists in sessionstorage
    let y = userNameOrEmail.value === sessionStorage.getItem('email');   //shorter form of checking user input exists in sessionstorage
    let z = password.value === sessionStorage.getItem('password');   //shorter form of checking user input exists in sessionstorage

    let emailCheck = (userNameOrEmail.value).split('').find(element => element === '@');  // check if input is email - essential to propose registration if email not exist

    let loginStatus = document.getElementById("login-status");

    if (((x) || (y)) && (z)) {
        window.location.href = "main.html";
        loginStatus.innerHTML = `<div id=login-status class="login-status-ok">Logowanie...</div>`;
        console.log("login lub mail i hasło OK");
    } else if (((!y) && (emailCheck === '@')) && ((z) || (!z))) {
        loginStatus.innerHTML = `<div id=login-status class="login-status-ok">Adres Email wolny, <a href="./registration.html" class="free-mail">ZAREJESTRUJ SIĘ!</a></div>`;
        console.log("mail wolny");
    } else if (((!x) && (!y)) && (!z)) {
        loginStatus.innerHTML = `<div id=login-status class="login-status-not-ok">Zła nazwa użytkownika i hasło.</div>`;
        document.getElementById("usernameoremail").style.border = "2px solid #FF0000"; //add red border input if any erraor with this input
        document.getElementById("password").style.border = "2px solid #FF0000";  //add red border input if any erraor with this input
        console.log("zla nazwa uzytkownika i haslo");
    } else if (((x) || (y)) && (!z)) {
        loginStatus.innerHTML = `<div id=login-status class="login-status-not-ok">Złe hasło.</div>`;
        document.getElementById("usernameoremail").style.border = ""; //clear style for username or email input when first hav error here but now is ok
        document.getElementById("password").style.border = "2px solid #FF0000";  //add red border input if any erraor with this input
        console.log("złe hasło")
    } else {
        loginStatus.innerHTML = `<div id=login-status class="login-status-not-ok">Błąd logowania. Wprowadź inne dane.</div>`;
        document.getElementById("usernameoremail").style.border = "2px solid #FF0000";  //add red border input if any erraor with this input
        document.getElementById("password").style.border = "2px solid #FF0000";  //add red border input if any erraor with this input
        console.log("error");
    }

    console.log(emailCheck);

};


// mała korekta ze względu na nieścisłość wymagań ogólnych dla sekcji Logowanie. Podpunkt 3 otrzymuje brzmienie:
// Formularz logowania składający się z pól „Nazwa użytkownika / Email” i „Hasło” oraz przycisku „Zaloguj”
// Oznacza to, że zalogować można się nazwą użytkownika lub emailem.
// Ma to związek z wymaganiem szczegółowym dla sekcji Logowanie o brzmieniu (bez zmian):
// Jeśli podany adres e-mail jest wolny, zachęć użytkownika do założenia konta