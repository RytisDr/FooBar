"use strict";

function init() {
  setInterval(update, 5000);
  // update();
}
init();
function update() {
  let data = JSON.parse(FooBar.getData());
  console.log(data);
  customersInQueue(data.queue.length, data.queue);
  // handleBarTenders(data.bartenders);
  // showTaps(data.taps)
}

function handleBarTenders(bartenders) {
  console.log(bartenders[1]);
}

function showTaps(taps) {
  console.log(taps);
}

function customersInQueue(customers, data) {
  console.log(customers);
  console.log(data);
  const container = document.querySelector("section:nth-child(2) article");

  container.innerHTML = "";
  for (let i = 0; i < customers; i++) {
    let homer = document.createElement("object");
    homer.type = "image/svg+xml";
    homer.data = "images/homer.svg";
    homer.style.width = "50px";
    let id = data[i].id;
    homer.classList.add("homer" + id);
    container.appendChild(homer);
  }
  let count = document.createElement("p");
  count.textContent = customers;
  container.appendChild(count);
}
