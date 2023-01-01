function validate(e){
    e.preventDefault(); // with preventDefault user can only login with existing username and password
    let usernameoremail = document.getElementById('usernameoremail');
    let password = document.getElementById('password');

    let x = usernameoremail.value === sessionStorage.getItem('username');
    let y = usernameoremail.value === sessionStorage.getItem('email');
    let z = password.value === sessionStorage.getItem('password');

    let emailcheck = (sessionStorage.getItem('email')).split('').every(element => element === '@');

    if (((x) || (y)) && (z)) {
        alert ("Login successfully");
        window.location.href = "main.html";
    } else if ((!y) && ((z) || (!z))) {
        alert ("Brak tego maila");
    } else if (emailcheck == false) {
        alert ("login error");
    } else  if (((!x) || (!y)) || (!z)) {
        alert ("login error");
    } else {
        alert ("login error");
    };
    
    console.log(emailcheck);
};


// mała korekta ze względu na nieścisłość wymagań ogólnych dla sekcji Logowanie. Podpunkt 3 otrzymuje brzmienie:
// Formularz logowania składający się z pól „Nazwa użytkownika / Email” i „Hasło” oraz przycisku „Zaloguj”
// Oznacza to, że zalogować można się nazwą użytkownika lub emailem.
// Ma to związek z wymaganiem szczegółowym dla sekcji Logowanie o brzmieniu (bez zmian):
// Jeśli podany adres e-mail jest wolny, zachęć użytkownika do założenia konta