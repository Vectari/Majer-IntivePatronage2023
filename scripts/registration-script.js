// // Registration Button
// let regBtn = document.getElementById('reg-btn');

// // Get all registration value
// regBtn.addEventListener('click', (e) => {
//     let email = document.getElementById('email');
//     let confirmEmail = document.getElementById('confirm-email');
//     let username = document.getElementById('username');
//     let password = document.getElementById('password');

//     sessionStorage.setItem('username' + ':  ' + Date.now().toString(), username.value);
//     sessionStorage.setItem('password' + ':  ' + Date.now().toString(), password.value);
//     sessionStorage.setItem('email' + ': ' + Date.now(), email.value);
//     sessionStorage.setItem('confirmEmail' + ':  ' + Date.now().toString(), confirmEmail.value);
    
// });



// Registration Button
let regBtn = document.getElementById('reg-btn');

// Get all registration value
regBtn.addEventListener('click', (e) => {
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let email = document.getElementById('email');
    let confirmEmail = document.getElementById('confirm-email');

        // sessionStorage.setItem('username', username.value);
        // sessionStorage.setItem('password', password.value);
        // sessionStorage.setItem('email', email.value);
        // sessionStorage.setItem('confirmEmail', confirmEmail.value);

    if ((username.value.length > 0) && (password.value.length > 0) && (email.value.length > 0) && (confirmEmail.value.length > 0)) {
        sessionStorage.setItem('username', username.value);
        sessionStorage.setItem('password', password.value);
        sessionStorage.setItem('email', email.value);
        sessionStorage.setItem('confirmEmail', confirmEmail.value);
    };

});



