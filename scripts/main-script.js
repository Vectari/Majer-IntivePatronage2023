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
    console.log(date);
    // console.log(type);
    // console.log(description);
    // console.log(amount);
    console.log(balance);
    // console.log(transactionTypesInOther);
    // console.log(transactionTypesOutShop);
    // console.log(transactionTypesInPay);
    // console.log(transactionTypesOutOther);


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

    // Count balance for END of each day


//////////////////////////////////////////////////////////////////////////////////////////////
  
    arr = date.filter(function (value, index, array) { 
      return array.indexOf(value) === index;
    });
  
    console.log(arr);

/////////////////////////////////////////////////////////////////////////////////////////////////



    // Assign labels and data to charts
    pieChart.data.labels = [datapoints.transacationTypes[1], datapoints.transacationTypes[2], datapoints.transacationTypes[3], datapoints.transacationTypes[4]];
    pieChart.data.datasets[0].data = [inOther, outShop, inPay, outOther];
    pieChart.update();


    barChart.data.labels = arr.sort();
    barChart.data.datasets[0].data = balance.reverse();
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
    labels: ['Wpływy - inne', 'Wydatki - zakupy', 'Wpływy - wynagrodzenie', 'Wydatki - inne'], //labels name is required to display label above char
    datasets: [{
      label: 'Ilość transakcji',
      // data: [1, 3, 1, 2], // I leave it just to remember where the "date" is
      backgroundColor: ['rgb(43, 177, 0, 1)', 'rgb(174,177, 0, 1)', 'rgb(255,165, 0, 1)', 'rgb(255,0, 0, 1)'],
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
      
const barChart = new Chart(ctxBar, {
  type: 'bar',
  data: {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'], // I leave it just to remember where the "labels" is
    datasets: [{
      label: 'Saldo konta na koniec dnia',
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

