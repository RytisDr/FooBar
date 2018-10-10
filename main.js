"use strict";

function init() {
  setInterval(update, 5000);
  // update();
}
init();
function update() {
  let data = JSON.parse(FooBar.getData());
  console.log(data);

  showCustomer(data.queue.length);
  // handleBarTenders(data.bartenders);
  // showTaps(data.taps)
}

function handleBarTenders(bartenders) {
  console.log(bartenders[1]);
}

function showTaps(taps) {
  console.log(taps);
}

function showCustomer(number) {
  document.querySelector("#queue span").textContent = " " + number;
  const container = document.querySelector("#container");
  container.innerHTML = "";

  for (let i = 0; i < number; i++) {
    let homer = document.createElement("img");
    if (number <= 5) {
      homer.src = "images/homer-yellow.png";
    }
    if (number > 5 && number < 10) {
      homer.src = "images/homer1.png";
    }
    if (number >= 10) {
      homer.src = "images/homer-red.png";
    }
    container.appendChild(homer);
  }
}
