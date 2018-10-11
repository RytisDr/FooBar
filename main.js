"use strict";
//define sales chart
let salesChart;

function init() {
  setInterval(update, 5000);
}
init();
function update() {
  let data = JSON.parse(FooBar.getData());

  //if sales chart doesnt exist, create it first
  if (salesChart == undefined) {
    salesChart = createSalesChart(data.taps);
  } else {
    //if sales chart exists, just update (chart.js animates changes)
    updateSalesChart(data.taps);
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
            "#08737B",
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
  //update chart
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
