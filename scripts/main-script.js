// Display username near "LOGOUT" button on the right side of navbar
document.getElementById('username').textContent += `${sessionStorage.getItem('username')}`;

