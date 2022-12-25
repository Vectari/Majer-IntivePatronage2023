// Get all registration value
let regBtn = document.getElementById('reg-btn');

// Registration Button
regBtn.addEventListener('click', (e) => {
    let email = document.getElementById('email');
    let confirmEmail = document.getElementById('confirm-email');
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    if (window.sessionStorage) {
        email = email.value;
        confirmEmail = confirmEmail.value;
        username = username.value;
        password = password.value;

        sessionStorage.setItem('email' + ': ' + Date.now(), email);
        sessionStorage.setItem('confirmEmail' + ':  ' + Date.now().toString(), confirmEmail);
        sessionStorage.setItem('username' + ':  ' + Date.now().toString(), username);
        sessionStorage.setItem('password' + ':  ' + Date.now().toString(), password);
    }
          
    // sessionStorage.clear();      //uncommand if need to clear session storage
});