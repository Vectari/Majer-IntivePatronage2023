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

