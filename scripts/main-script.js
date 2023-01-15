// LANGUAGE CHANGE
let logoutButtonTitle = document.getElementById("logout-btn");

function languageENG(e) {
    sessionStorage.setItem('language', '1');
    window.location.reload();
}

function languagePL(e) {
    sessionStorage.setItem('language', '0');
    window.location.reload();
}

if ((sessionStorage.getItem('language')) === "1") { //change language for log out button
  logoutButtonTitle.innerHTML = `Log out`;
}

// Display username near "LOGOUT" button on the right side of navbar
if ((sessionStorage.getItem('language')) === "1") {
  document.getElementById('username-welcome').textContent += `Hello, ${sessionStorage.getItem('username')}!`; //change language for greeting
} else {
  document.getElementById('username-welcome').textContent += `Witaj, ${sessionStorage.getItem('username')}!`; //change language for greeting
}


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
    // console.log(eachDayBalance);


    // Assign labels and data to charts
    if ((sessionStorage.getItem('language')) === "1") { //change language for labels in pie chart
      [datapoints.transacationTypes[1], datapoints.transacationTypes[2], datapoints.transacationTypes[3], datapoints.transacationTypes[4]] = [`Income - other`, `Expenses - shopping`, `Income - salar`, `Expenses - other`];
    } else {
      [datapoints.transacationTypes[1], datapoints.transacationTypes[2], datapoints.transacationTypes[3], datapoints.transacationTypes[4]] = [datapoints.transacationTypes[1], datapoints.transacationTypes[2], datapoints.transacationTypes[3], datapoints.transacationTypes[4]];
    }

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
        if ((sessionStorage.getItem('language')) === "1") {
          transactionName = 'Income - other';
        } else {
          transactionName = 'Wpływy - inne';
        }
      } else if (datapoints.type == 2) {
        if ((sessionStorage.getItem('language')) === "1") {
          transactionName = 'Expenses - shopping';
        } else {
          transactionName = 'Wydatki - zakupy';
        }
      } else if (datapoints.type == 3) {
        if ((sessionStorage.getItem('language')) === "1") {
          transactionName = 'Income - salar';
        } else {
          transactionName = 'Wpływy - wynagrodzenie';
        }
      } else if (datapoints.type == 4) {
        if ((sessionStorage.getItem('language')) === "1") {
          transactionName = 'Expenses - other';
        } else {
          transactionName = 'Wydatki - inne';
        }
      }

      let width = screen.width; //check screen width

      //variable need to change laguage in table labels
      let tableDateLabel = document.getElementById("table-date-label");
      let tableIconLabel = document.getElementById("table-icon-label");
      let tableDescriptionLabel = document.getElementById("table-description-label");
      let tableAmountLabel = document.getElementById("table-amount-label");
      let tableBalanceLabel = document.getElementById("table-balance-label");

      //change language for table labels
      if ((sessionStorage.getItem('language')) === "1") {
        tableDateLabel.innerHTML = `DATE`;
        tableIconLabel.innerHTML = `ICON`;
        tableDescriptionLabel.innerHTML = `DESCRIPTION`;
        tableAmountLabel.innerHTML = `AMOUNT`;
        tableBalanceLabel.innerHTML = `BALANCE`;
      } else {
        tableDateLabel.innerHTML = `DATA`;
        tableIconLabel.innerHTML = `IKONA`;
        tableDescriptionLabel.innerHTML = `OPIS`;
        tableAmountLabel.innerHTML = `KWOTA`;
        tableBalanceLabel.innerHTML = `SALDO`;
      }

      // change labels language for extended row in mobile version
      if ((sessionStorage.getItem('language')) === "1") {
        extendedRow = `<td></td><td colspan="3" id="id${Math.floor(datapoints.balance)}" style="display: none" class="detail-row">DATE:<br>${datapoints.date}<br>BALANCE:<br>${datapoints.balance}</td>`;
      } else {
        extendedRow = `<td></td><td colspan="3" id="id${Math.floor(datapoints.balance)}" style="display: none" class="detail-row">DATA: ${datapoints.date}<br>SALDO: ${datapoints.balance}</td>`;
      }


      if (screen.width > 768) { //table for width >768px (desktop)
        tableData += `<tr>
                      <td>${datapoints.date}</td>
                      <td>${icon}</td>
                      <td>${datapoints.description}<br>${transactionName}</td>
                      <td>${datapoints.amount}</td>
                      <td>${datapoints.balance}</td>
                    </tr>`;
      } else {  // table for width <768px (mobile version)
        tableData += `<tr>
                        <td class="hidden-on-mobile clickable-row"</td>   <!-- no onclick because is hidden on mobile -->
                        <td  onclick="showHide${Math.floor(datapoints.balance)}()" class="clickable-row">${icon}</td>
                        <td  onclick="showHide${Math.floor(datapoints.balance)}()" class="clickable-row">${datapoints.description}<br>${transactionName}</td>
                        <td  onclick="showHide${Math.floor(datapoints.balance)}()" class="clickable-row">${datapoints.amount}</td>
                        <td class="hidden-on-mobile clickable-row">${datapoints.balance}</td>    <!-- no onclick because is hidden on mobile -->
                        <tr>
                          ${extendedRow}
                        </tr>
                      </tr>`;
      }

      // ${Math.floor(datapoints.balance)} - create individual ID or func number base of Math.floor balance

    });
    document.getElementById('table-body').innerHTML = tableData;
  });
};


// CHARTS SECTION

// Pie chart
const ctxPie = document.getElementById('transactionChartPie');

if ((sessionStorage.getItem('language')) === "1") { //change language for hover on pie char
  amountOfTheTransaction = `Amount of the transaction`;
} else {
  amountOfTheTransaction = `Ilość transakcji`;
}
      
const pieChart = new Chart(ctxPie, {
  type: 'pie',
  data: {
    // labels: ['Wpływy - inne', 'Wydatki - zakupy', 'Wpływy - wynagrodzenie', 'Wydatki - inne'], // I leave it just to remember where the "labels" is
    datasets: [{
      label: `${amountOfTheTransaction}`,
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

if ((sessionStorage.getItem('language')) === "1") { //change language for label in bar chart
  barChartLabel = `Account balance at the end of the day`;
} else {
  barChartLabel = `Saldo konta na koniec dnia`;
}
      
const barChart = new Chart(ctxBar, {
  type: 'bar',
  data: {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'], // I leave it just to remember where the "labels" is
    datasets: [{
      label: `${barChartLabel}`,
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

// Transactions history

function showHide4337() {
  let detail = document.getElementById("id4337");
  if (detail.style.display === "none") {
    detail.style.display = "block";
  } else {
    detail.style.display = "none";
  }
  // only one detail row can be open at the time
  if (((document.getElementById("id4572")).style.display === "block") ||
    ((document.getElementById("id2420")).style.display === "block") ||
    ((document.getElementById("id2555")).style.display === "block") ||
    ((document.getElementById("id2847")).style.display === "block") ||
    ((document.getElementById("id3000")).style.display === "block") ||
    (document.getElementById("id3027")).style.display === "block") {
    (document.getElementById("id4572")).style.display = "none";
    (document.getElementById("id2420")).style.display = "none";
    (document.getElementById("id2555")).style.display = "none";
    (document.getElementById("id2847")).style.display = "none";
    (document.getElementById("id3000")).style.display = "none";
    (document.getElementById("id3027")).style.display = "none";
  }
}
function showHide4572() {
  let detail = document.getElementById("id4572");
  if (detail.style.display === "none") {
    detail.style.display = "block";
  } else {
    detail.style.display = "none";
  }
  // only one detail row can be open at the time  
  if (((document.getElementById("id4337")).style.display === "block") ||
    ((document.getElementById("id2420")).style.display === "block") ||
    ((document.getElementById("id2555")).style.display === "block") ||
    ((document.getElementById("id2847")).style.display === "block") ||
    ((document.getElementById("id3000")).style.display === "block") ||
    (document.getElementById("id3027")).style.display === "block") {
    (document.getElementById("id4337")).style.display = "none";
    (document.getElementById("id2420")).style.display = "none";
    (document.getElementById("id2555")).style.display = "none";
    (document.getElementById("id2847")).style.display = "none";
    (document.getElementById("id3000")).style.display = "none";
    (document.getElementById("id3027")).style.display = "none";
  }
}
function showHide2420() {
  let detail = document.getElementById("id2420");
  if (detail.style.display === "none") {
    detail.style.display = "block";
  } else {
    detail.style.display = "none";
  }
  // only one detail row can be open at the time
  if (((document.getElementById("id4337")).style.display === "block") ||
    ((document.getElementById("id4572")).style.display === "block") ||
    ((document.getElementById("id2555")).style.display === "block") ||
    ((document.getElementById("id2847")).style.display === "block") ||
    ((document.getElementById("id3000")).style.display === "block") ||
    (document.getElementById("id3027")).style.display === "block") {
    (document.getElementById("id4337")).style.display = "none";
    (document.getElementById("id4572")).style.display = "none";
    (document.getElementById("id2555")).style.display = "none";
    (document.getElementById("id2847")).style.display = "none";
    (document.getElementById("id3000")).style.display = "none";
    (document.getElementById("id3027")).style.display = "none";
  }
}
function showHide2555() {
  let detail = document.getElementById("id2555");
  if (detail.style.display === "none") {
    detail.style.display = "block";
  } else {
    detail.style.display = "none";
  }
  // only one detail row can be open at the time     
  if (((document.getElementById("id4337")).style.display === "block") ||
    ((document.getElementById("id4572")).style.display === "block") ||
    ((document.getElementById("id2420")).style.display === "block") ||
    ((document.getElementById("id2847")).style.display === "block") ||
    ((document.getElementById("id3000")).style.display === "block") ||
    (document.getElementById("id3027")).style.display === "block") {
    (document.getElementById("id4337")).style.display = "none";
    (document.getElementById("id4572")).style.display = "none";
    (document.getElementById("id2420")).style.display = "none";
    (document.getElementById("id2847")).style.display = "none";
    (document.getElementById("id3000")).style.display = "none";
    (document.getElementById("id3027")).style.display = "none";
  }
}
function showHide2847() {
  let detail = document.getElementById("id2847");
  if (detail.style.display === "none") {
    detail.style.display = "block";
  } else {
    detail.style.display = "none";
  }
  // only one detail row can be open at the time     
  if (((document.getElementById("id4337")).style.display === "block") ||
    ((document.getElementById("id4572")).style.display === "block") ||
    ((document.getElementById("id2420")).style.display === "block") ||
    ((document.getElementById("id2555")).style.display === "block") ||
    ((document.getElementById("id3000")).style.display === "block") ||
    (document.getElementById("id3027")).style.display === "block") {
    (document.getElementById("id4337")).style.display = "none";
    (document.getElementById("id4572")).style.display = "none";
    (document.getElementById("id2420")).style.display = "none";
    (document.getElementById("id2555")).style.display = "none";
    (document.getElementById("id3000")).style.display = "none";
    (document.getElementById("id3027")).style.display = "none";
  }
}
function showHide3000() {
  let detail = document.getElementById("id3000");
  if (detail.style.display === "none") {
    detail.style.display = "block";
  } else {
    detail.style.display = "none";
  }
  // only one detail row can be open at the time      
  if (((document.getElementById("id4337")).style.display === "block") ||
    ((document.getElementById("id4572")).style.display === "block") ||
    ((document.getElementById("id2420")).style.display === "block") ||
    ((document.getElementById("id2555")).style.display === "block") ||
    ((document.getElementById("id2847")).style.display === "block") ||
    (document.getElementById("id3027")).style.display === "block") {
    (document.getElementById("id4337")).style.display = "none";
    (document.getElementById("id4572")).style.display = "none";
    (document.getElementById("id2420")).style.display = "none";
    (document.getElementById("id2555")).style.display = "none";
    (document.getElementById("id2847")).style.display = "none";
    (document.getElementById("id3027")).style.display = "none";
  }
}
function showHide3027() {
  let detail = document.getElementById("id3027");
  if (detail.style.display === "none") {
    detail.style.display = "block";
  } else {
    detail.style.display = "none";
  }
  // only one detail row can be open at the time         
  if (((document.getElementById("id4337")).style.display === "block") ||
    ((document.getElementById("id4572")).style.display === "block") ||
    ((document.getElementById("id2420")).style.display === "block") ||
    ((document.getElementById("id2555")).style.display === "block") ||
    ((document.getElementById("id2847")).style.display === "block") ||
    (document.getElementById("id3000")).style.display === "block") {
    (document.getElementById("id4337")).style.display = "none";
    (document.getElementById("id4572")).style.display = "none";
    (document.getElementById("id2420")).style.display = "none";
    (document.getElementById("id2555")).style.display = "none";
    (document.getElementById("id2847")).style.display = "none";
    (document.getElementById("id3000")).style.display = "none";
  }
}
