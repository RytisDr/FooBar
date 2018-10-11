"use strict";
//define sales chart
let salesChart;

function init() {
  setInterval(update, 5000);
}
init();
function update() {
  let data = JSON.parse(FooBar.getData());
  console.log(data);
  showCustomer(data.queue.length);
  barTendersPerformance(data.bartenders);
  storageHandling(data.storage);

  //if sales chart doesnt exist, create it first
  if (salesChart == undefined) {
    salesChart = createSalesChart(data.taps);
  } else {
    //if sales chart exists, just update data (chart.js animates changes)
    updateSalesChart(data.taps);
  }
}
let counter1 = 0,
  counter2 = 0,
  counter3 = 0;
let man1 = document.getElementById("peter");
let man2 = document.getElementById("jonas");
let man3 = document.getElementById("martin");
let amount1 = document.querySelector("#amount1 span");
let amount2 = document.querySelector("#amount2 span");
let amount3 = document.querySelector("#amount3 span");
let amount5 = document.querySelector("#amount5 span");
let amount4 = document.querySelector("#amount4 span");
let amount6 = document.querySelector("#amount6 span");
let amount7 = document.querySelector("#amount7 span");
let amount8 = document.querySelector("#amount8 span");
let amount9 = document.querySelector("#amount9 span");
let amount10 = document.querySelector("#amount10 span");

function barTendersPerformance(bartenders) {
  let peter = bartenders[0].status;
  let jonas = bartenders[1].status;
  let martin = bartenders[2].status;

  if (peter === "WORKING") {
    counter1++;
  }
  if (jonas === "WORKING") {
    counter2++;
  }
  if (martin === "WORKING") {
    counter3++;
  }
  man1.innerHTML = counter1;
  man2.innerHTML = counter2;
  man3.innerHTML = counter3;
}
function storageHandling(storage) {
  // console.log(storage);
  amount1.innerHTML = storage[0].amount;
  amount2.innerHTML = storage[1].amount;
  amount3.innerHTML = storage[2].amount;
  amount4.innerHTML = storage[3].amount;
  amount5.innerHTML = storage[4].amount;
  amount6.innerHTML = storage[5].amount;
  amount7.innerHTML = storage[6].amount;
  amount8.innerHTML = storage[7].amount;
  amount9.innerHTML = storage[8].amount;
  amount10.innerHTML = storage[9].amount;
}

function showCustomer(number) {
  document.querySelector("#queue span").textContent = " " + number;
  const container = document.querySelector("#container");
  container.innerHTML = "";

  for (let i = 0; i < number; i++) {
    let homer = document.createElement("img");
    if (number <= 4) {
      homer.src = "images/homer-yellow.png";
    }
    if (number > 4 && number < 10) {
      homer.src = "images/homer1.png";
    }
    if (number >= 10) {
      homer.src = "images/homer-red.png";
    }
    container.appendChild(homer);
  }
}
function createSalesChart(taps) {
  //Dom canvas element
  let chartCanvas = document.querySelector("#topBeerChart");
  //push names of beers on tap into an array
  let beersOnTap = [];
  taps.forEach(tap => {
    beersOnTap.push(tap.beer);
  });

  //create horizontal bar chart
  let salesChart = new Chart(chartCanvas, {
    type: "horizontalBar",
    data: {
      labels: beersOnTap,
      datasets: [
        {
          label: "Beer Sales in cl",
          data: [0, 0, 0, 0, 0, 0, 0],
          backgroundColor: [
            "#338538",
            "#A22727",
            "#A97546",
            "#CDD29E",
            "#460606",
            "#872301",
            "#D77200"
          ]
        }
      ]
    }
  });
  Chart.defaults.global.defaultFontFamily = "Comfortaa";
  //return (to apply to the variable)
  return salesChart;
}

//update sales on every update of data
function updateSalesChart(taps) {
  //total sales counter
  let totalSales = 0;
  let salesArr = [];
  taps.forEach(tap => {
    if (tap.capacity - tap.level == tap.capacity) {
      salesArr.push(tap.capacity);
    } else {
      salesArr.push(tap.capacity - tap.level);
    }
  });
  //function to accumulate numbers in array (sales array)
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  //use reducer to calculate total sales
  totalSales = salesArr.reduce(reducer);
  //put total sales number in p span
  document.querySelector("#sold p span").textContent = totalSales;
  //equalize data in graph to sales array
  salesChart.data.datasets[0].data = salesArr;
  //update chart (with animation)
  salesChart.update();
}
//sort by descending function
function sortDesc(a, b) {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
}
