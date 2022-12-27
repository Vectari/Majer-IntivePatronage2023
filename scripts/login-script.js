// // Login Button
// let loginBtn = document.getElementById('login-btn');

// // Get all login value
// loginBtn.addEventListener('click', (e) => {
//     let username = document.getElementById('username');
//     let password = document.getElementById('password');

//     if ((username.value === sessionStorage.getItem('username', username.value)) && (password.value === sessionStorage.getItem('password', password.value))) {
        
//     }  
// });

function validate(e){
    e.preventDefault(); // with preventDefault user can only login with existing username and password
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    if ((username.value === sessionStorage.getItem('username', username.value)) && (password.value === sessionStorage.getItem('password', password.value))) {
        alert ("Login successfully");
        window.location.href = "main.html";
    } else {
        alert ("login error");
    }
};