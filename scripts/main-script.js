// Display username near "LOGOUT" button on the right side of navbar
document.getElementById('username').textContent += `Dzień dobry, ${sessionStorage.getItem('username')}!`;


const url = "https://api.jsonbin.io/v3/b/63a092ab15ab31599e2045be";
fetch(url, {
    method: "GET",
    headers: {
         "X-Access-Key": "$2b$10$5pBRUbFRKdKft/b8qSQ3IeyPQgQ8CLXlvgoQA6GdpYvdWva.pOfGS",
    }
})
    .then(response => {
        return response.json();
    })
    .then(json => {
        console.log(json);
    })


// fetch('https://api.jsonbin.io/v3/b/63a092ab15ab31599e2045be', {
//     method: 'GET',
//     headers: {
//         'x-access-key': '$2b$10$5pBRUbFRKdKft/b8qSQ3IeyPQgQ8CLXlvgoQA6GdpYvdWva.pOfGS',
//         'Content-Type': 'application/json'
//     },
    

// })  .then((response) => response.json())
//     .then((json) => console.log(json))



//     Dane potrzebne do wyświetlenia widoku aplikacja pobiera przy użyciu fetch API
// ▪ GET z URL https://api.jsonbin.io/v3/b/63a092ab15ab31599e2045be
// ▪ nagłówek autoryzacyjny x-access-key o wartości: 
// $2b$10$5pBRUbFRKdKft/b8qSQ3IeyPQgQ8CLXlvgoQA6GdpYvdWva.pOfGS
// ▪ odpowiedź zawiera „transactions” oraz „transactionTypes”
