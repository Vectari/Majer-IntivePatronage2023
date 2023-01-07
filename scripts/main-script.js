// Display username near "LOGOUT" button on the right side of navbar
document.getElementById('username-welcome').textContent += `Dzień dobry, ${sessionStorage.getItem('username')}!`;

// Fetch API from URL
// const API_URL = "https://api.npoint.io/38edf0c5f3eb9ac768bd";

// let transaction;
// let transactionType;

// fetch(API_URL)
//     .then((res) => res.json())
//     // .then((res) => console.log(res))
//     .then((transactionList) => {
//         transaction = transactionList.transactions.map((transactions) => {
//             return {
//                 date: transactions.date,
//                 type: transactions.type,
//                 description: transactions.description,
//                 amount: transactions.amount,
//                 balance: transactions.balance,
//             };
//         });
//         console.log(transaction);

//         document.getElementById('date').textContent += `${transaction[0].date}`;
//         document.getElementById('type').textContent += `${transaction[0].type}`;
//         document.getElementById('description').textContent += `${transaction[0].description}`;
//         document.getElementById('amount').textContent += `${transaction[0].amount}`;
//         document.getElementById('balance').textContent += `${transaction[0].balance}`;
//     });



    // .then((transactionTypeList) => {
    //     transactionType = transactionTypeList.transacationTypes.map((transacationTypes) => {
    //         return {
    //             1: transacationTypes[1],
    //             2: transacationTypes[2],
    //             3: transacationTypes[3],
    //             4: transacationTypes[4],
    //         };
    //     });
    //     console.log(transactionType);
    // });



//CHART SECTION
// Doughnut chart
const ctxDoughnut = document.getElementById('transactionChartDoughnut');
      
new Chart(ctxDoughnut, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


// Bar chart
const ctxBar = document.getElementById('transactionChartBar');
      
new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ['Test-Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

