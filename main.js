"use strict";

function init() {
  setInterval(update, 5000);
  //update();
}
init();
function update() {
  //define sales chart
  let salesChart;

  let data = JSON.parse(FooBar.getData());
  //handleBarTenders(data.bartenders);
  showTaps(data.taps);
  if (salesChart == undefined) {
    createSalesChart(data.taps, salesChart);
  } else {
    updateSalesChart(data.taps, salesChart);
  }
}

function handleBarTenders(bartenders) {
  //console.log(bartenders[1]);
}

function showTaps(taps) {
  //console.log(taps);
}

function createSalesChart(taps, salesChart) {
  let beersOnTap = [];
  let chartCanvas = document.querySelector("#topBeerChart");
  //push names of beers on tap into an array
  taps.forEach(tap => {
    beersOnTap.push(tap.beer);
  });
  let chartData = {
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
  };
  //sort chart data in descenting order
  chartData.datasets[0].data.sort(sortDesc);

  let barChart = new Chart(chartCanvas, {
    type: "horizontalBar",
    data: chartData
  });
  salesChart = barChart;
}
function updateSalesChart(taps, salesChart) {
  salesChart.data.datasets[0].data = [];
  taps.forEach(tap =>
    salesChart.data.datasets[0].data.push(tap.capacity - tap.level)
  );

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
