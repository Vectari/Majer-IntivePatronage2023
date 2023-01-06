// LANGUAGE CHANGE
let indexInfo = document.getElementById("index-info");

function languageENG(e) {
    sessionStorage.setItem('language', '1');
    window.location.reload();
}

function languagePL(e) {
    sessionStorage.setItem('language', '0');
    window.location.reload();
}

if ((sessionStorage.getItem('language')) === "1") {
    indexInfo.innerHTML = `Hello!<br><a href="./html/login.html" class="info-span"><span>Log in</span></a> and keep your money under control, and if you don't already have an account, <br><a href="./html/registration.html" class="info-span"><span>register</span></a> and join the group of people who know how to take care of their finances.`;
}