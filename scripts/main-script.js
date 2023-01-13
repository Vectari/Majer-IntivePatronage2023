// Display username near "LOGOUT" button on the right side of navbar
document.getElementById('username-welcome').textContent += `Dzień dobry, ${sessionStorage.getItem('username')}!`;

// Fetch API from URL
function updateChart() {
  async function fetchData() {
    const API_URL = "https://api.npoint.io/38edf0c5f3eb9ac768bd";
    const response = await fetch(API_URL); // wait until the request has benn completed
    const datapoints = await response.json(); //convert data to JS readable structure
    // console.log(datapoints);
    return datapoints;
  };
  
  fetchData().then(datapoints => {
    // Fetch all necessary data from API
    const date = datapoints.transactions.map(
      function(index){
        return index.date;
      })
    const type = datapoints.transactions.map(
      function(index){
        return index.type;
      }
    )
    const description = datapoints.transactions.map(
      function(index){
        return index.description;
      }
    )
    const amount = datapoints.transactions.map(
      function(index){
        return index.amount;
      }
    )
    const balance = datapoints.transactions.map(
      function(index){
      return index.balance;
      }
    )
    const transactionTypesInOther = datapoints.transacationTypes[1];
    const transactionTypesOutShop = datapoints.transacationTypes[2];
    const transactionTypesInPay = datapoints.transacationTypes[3];
    const transactionTypesOutOther = datapoints.transacationTypes[4];
    // console.log(date);
    // console.log(type);
    // console.log(description);
    // console.log(amount);
    // console.log(balance);
    // console.log(transactionTypesInOther);
    // console.log(transactionTypesOutShop);
    // console.log(transactionTypesInPay);
    // console.log(transactionTypesOutOther);
    // console.log(datapoints.transacationTypes);


    // Count transacion types to assign right % of pie chart
    let inOther = 0;
    let outShop = 0;
    let inPay = 0;
    let outOther = 0;

    for (var i=0; i <type.length; i++){
      if (type[i] == 1) {
        inOther += 1;
      } else if (type[i] == 2) {
        outShop += 1;
      } else if (type[i] == 3) {
        inPay += 1;
      } else if (type[i] == 4) {
        outOther += 1;
      }
    }
    // console.log(inOther);
    // console.log(outShop);
    // console.log(inPay);
    // console.log(outOther);

    
    // Balance for END of each day
        // function to leave individual date
    let day = date.filter(function (date, index, array) { 
      return array.indexOf(date) === index;
    });
    // console.log(day);
    
        // assign balance to day
    let eachDayBalance = [];

    if (date[0] === day[0]) {
      eachDayBalance.push(balance[0]);
    }
    if (date[3] === day[1]) {
      eachDayBalance.push(balance[3]);
    }
    if (date[5] === day[2]) {
      eachDayBalance.push(balance[5]);
    }
    console.log(eachDayBalance);


    // Assign labels and data to charts
    pieChart.data.labels = [datapoints.transacationTypes[1], datapoints.transacationTypes[2], datapoints.transacationTypes[3], datapoints.transacationTypes[4]];
    pieChart.data.datasets[0].data = [inOther, outShop, inPay, outOther];
    pieChart.update();


    barChart.data.labels = day;
    barChart.data.datasets[0].data = eachDayBalance;
    barChart.update();


    // Assign data to transaction history table
    let tableData = "";
    datapoints.transactions.map((datapoints) => { 
      
      // Check number of transaction type  and add right icon to transaction
      if (datapoints.type == 1) {
        icon = `<img src="../images/income-other-icon.png"></img>`;
      } else if (datapoints.type == 2) {
        icon = `<img src="../images/expenses-shopping-icon.png"></img>`;
      } else if (datapoints.type == 3) {
        icon = `<img src="../images/income-salar-icon.png"></img>`;
      } else if (datapoints.type == 4) {
        icon = `<img src="../images/expenses-other-icon.png"></img>`;
      }

      //Check number of transaction type and add right transaction type name
      if (datapoints.type == 1) {
        transactionName = 'Wpływy - inne';
      } else if (datapoints.type == 2) {
        transactionName = 'Wydatki - zakupy';
      } else if (datapoints.type == 3) {
        transactionName = 'Wpływy - wynagrodzenie';
      } else if (datapoints.type == 4) {
        transactionName = 'Wydatki - inne';
      }

      tableData += `<tr>
                      <td class="hidden-on-mobile">${datapoints.date}</td>
                      <td>${icon}</td>
                      <td>${datapoints.description}<br>${transactionName}</td>
                      <td>${datapoints.amount}</td>
                      <td class="hidden-on-mobile">${datapoints.balance}</td>
                    </tr>`;
    });
    document.getElementById('table-body').innerHTML = tableData;


  });
};


// CHARTS SECTION

// Pie chart
const ctxPie = document.getElementById('transactionChartPie');
      
const pieChart = new Chart(ctxPie, {
  type: 'pie',
  data: {
    // labels: ['Wpływy - inne', 'Wydatki - zakupy', 'Wpływy - wynagrodzenie', 'Wydatki - inne'], // I leave it just to remember where the "labels" is
    datasets: [{
      label: 'Ilość transakcji',
      // data: [1, 3, 1, 2], // I leave it just to remember where the "date" is
      backgroundColor: ['rgb(51, 154, 240, 1)', 'rgb(250, 82, 82, 1)', 'rgb(51, 240, 113, 1)', 'rgb(255, 192, 131, 1)'],
      // backgroundColor: [inOther, outShop, inPay, outOther] // order of colors
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          display: false
        },
        // grid: {
        //   display: false,
        // }
      }
    }
  }
});

// Bar chart
const ctxBar = document.getElementById('transactionChartBar');
      
const barChart = new Chart(ctxBar, {
  type: 'bar',
  data: {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'], // I leave it just to remember where the "labels" is
    datasets: [{
      label: 'Saldo konta na koniec dnia',
      backgroundColor:'rgb(0, 204, 204, 0.7)',
      // data: [12, 19, 3, 5, 2], // I leave it just to remember where the "date" is
      borderWidth: 1,

    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        borderWidth: 20
      }
    }
  }
});

