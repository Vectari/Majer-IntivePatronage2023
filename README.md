# Majer-IntivePatronage2023

{"transactions":[{
    "date":"2022-11-12",
    "type":2,
    "amount":-231.56,
    "balance":4337.25,
    "description":"Biedronka 13"
    },{
    "date":"2022-11-12",
    "type":4,
    "amount":-31.56,
    "balance":4572.18,
    "description":"PayU Spółka Akcyjna"
    },{
    "date":"2022-11-12",
    "type":3,
    "amount":2137.69,
    "balance":2420.47,
    "description":"Wynagrodzenie z tytułu Umowy o Pracę"
    },{
    "date":"2022-11-10",
    "type":2,
    "amount":-136,
    "balance":2555.55,
    "description":"Lidl"
    },{
    "date":"2022-11-10",
    "type":1,
    "amount":25,
    "balance":2847.66,
    "description":"Zrzutka na prezent dla Grażyny"
    },{
    "date":"2022-11-09",
    "type":2,
    "amount":-111.11,
    "balance":3000,
    "description":"Biedronka 13"
    },{
    "date":"2022-11-09",
    "type":4,
    "amount":-78.33,
    "balance":3027.51,
    "description":"PayU Spółka Akcyjna"
    }],



"transacationTypes":{
    "1":"Wpływy - inne",
    "2":"Wydatki - zakupy",
    "3":"Wpływy - wynagrodzenie",
    "4":"Wydatki - inne"}
    }





        <table style="width:50%">
        <caption>
            <div id="showbtn1" class="captionstyle" onclick="showrowfunction1()">Click to expand rows</div>
            <div id="hidebtn1" class="captionstyle" onclick="hiderowfunction1()">Click to hide rows</div>
        </caption>
        <tr class="rwstyle1">
            <th>
                <b>ID</b>
            </th>
            <th>
                <b>Name</b>
            </th>
            <th>
                <b>DOB</b>
            </th>
        </tr>
        <tr class="rwstyle1">
            <td>
                <b>11111</b>
            </td>
            <td>
                <b>11111</b>
            </td>
            <td>
                <b>111111</b>
            </td>
        </tr>
        <tr class="rwstyle1">
            <td>
                <b>11111</b>
            </td>
            <td>
                <b>1111</b>
            </td>
            <td>
                <b>111111</b>
            </td>
        </tr>
    </table>
    <table style="width:50%">
        <caption>
            <div id="showbtn2" class="captionstyle" onclick="showrowfunction2()">Click to expand rows</div>
            <div id="hidebtn2" class="captionstyle" onclick="hiderowfunction2()">Click to hide rows</div>
        </caption>
        <tr class="rwstyle2">
            <th>
                <b>22222</b>
            </th>
            <th>
                <b>22222</b>
            </th>
            <th>
                <b>22222</b>
            </th>
        </tr>
        <tr class="rwstyle2">
            <td>
                <b>22222</b>
            </td>
            <td>
                <b>22222 22222</b>
            </td>
            <td>
                <b>22222</b>
            </td>
        </tr>
        <tr class="rwstyle2">
            <td>
                <b>22222</b>
            </td>
            <td>
                <b>22222</b>
            </td>
            <td>
                <b>22222</b>
            </td>
        </tr>
    </table>


    onload = document.getElementById('showbtn1').style.display = 'none';
onload = document.getElementById('showbtn2').style.display = 'none';

function showrowfunction1() {
   var rows = document.getElementsByClassName('rwstyle1');
   for (i = 0; i < rows.length; i++) {
    rows[i].style.display = '';
   }
   document.getElementById('showbtn1').style.display = 'none';
   document.getElementById('hidebtn1').style.display = '';
}

function hiderowfunction1() {
  var rows = document.getElementsByClassName('rwstyle1');
  for (i = 0; i < rows.length; i++) {
   rows[i].style.display = 'none';
  }
  document.getElementById('showbtn1').style.display = '';
  document.getElementById('hidebtn1').style.display = 'none';
}

function showrowfunction2() {
  var rows = document.getElementsByClassName('rwstyle2');
  for (i = 0; i < rows.length; i++) {
   rows[i].style.display = '';
  }
  document.getElementById('showbtn2').style.display = 'none';
  document.getElementById('hidebtn2').style.display = '';
}

function hiderowfunction2() {
 var rows = document.getElementsByClassName('rwstyle2');
 for (i = 0; i < rows.length; i++) {
  rows[i].style.display = 'none';
 }
 document.getElementById('showbtn2').style.display = '';
 document.getElementById('hidebtn2').style.display = 'none';
}