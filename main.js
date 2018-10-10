"use strict";
//define sales chart
let salesChart;

function init() {
  setInterval(update, 5000);
  //update();
}
init();
function update() {
  let data = JSON.parse(FooBar.getData());
  //handleBarTenders(data.bartenders);
  showTaps(data.taps);
  if (salesChart == undefined) {
    salesChart = createSalesChart(data.taps);
  } else {
    updateSalesChart(data.taps);
  }
}

function handleBarTenders(bartenders) {
  //console.log(bartenders[1]);
}

function showTaps(taps) {
  //console.log(taps);
}

function createSalesChart(taps) {
  let chartCanvas = document.querySelector("#topBeerChart");
  //push names of beers on tap into an array
  let beersOnTap = [];
  taps.forEach(tap => {
    beersOnTap.push(tap.beer);
  });
  let salesChart = new Chart(chartCanvas, {
    type: "horizontalBar",
    data: {
      labels: beersOnTap,
      datasets: [
        {
          data: [0, 0, 0, 0, 0, 0, 0],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ]
        }
      ]
    }
  });
  return salesChart;
}
function updateSalesChart(taps) {
  let salesArr = [];
  taps.forEach(tap => {
    salesArr.push(tap.capacity - tap.level);
  });
  salesChart.data.datasets[0].data = salesArr;
  //sort chart data in descenting order
  //salesChart.data.data.sort(sortDesc);
  salesChart.update();
  console.log(taps);
}
//sort function
function sortDesc(a, b) {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
}
