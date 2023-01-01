function validate(e){
    e.preventDefault(); // with preventDefault user can only login with existing username and password
    let usernameoremail = document.getElementById('usernameoremail');
    let password = document.getElementById('password');

    let x = usernameoremail.value === sessionStorage.getItem('username');   //shorter form of checking user input exists in sessionstorage
    let y = usernameoremail.value === sessionStorage.getItem('email');
    let z = password.value === sessionStorage.getItem('password');

    let emailcheck = (usernameoremail.value).split('').find(element => element === '@');

    if (((x) || (y)) && (z)) {
        window.location.href = "main.html";
        console.log("login lub mail i hasło OK");
    } else if (((!y) && (emailcheck === '@')) && ((z) || (!z))) {
        console.log("mail wolny");
    } else if (((!x) && (!y)) && (!z)) {
        console.log("zla nazwa uzytkownika i haslo");
    } else if (((x) || (y)) && (!z)) {
        console.log("złe hasło")
    } else {
        console.log("error");
    }

    console.log(emailcheck);


    // TESTOWANE JUZ ZROBIONE, TERAZ TRZEBA DODAC TRESC BLEDOW DO STRONY



};


// mała korekta ze względu na nieścisłość wymagań ogólnych dla sekcji Logowanie. Podpunkt 3 otrzymuje brzmienie:
// Formularz logowania składający się z pól „Nazwa użytkownika / Email” i „Hasło” oraz przycisku „Zaloguj”
// Oznacza to, że zalogować można się nazwą użytkownika lub emailem.
// Ma to związek z wymaganiem szczegółowym dla sekcji Logowanie o brzmieniu (bez zmian):
// Jeśli podany adres e-mail jest wolny, zachęć użytkownika do założenia konta