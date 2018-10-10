"use strict";

function init() {
  createCustomers();
  setInterval(update, 5000);
  // update();
}
init();
function update() {
  let data = JSON.parse(FooBar.getData());
  console.log(data);
  applyColor(data.queue.length);
  // showCustomer(data.queue.length);
  // handleBarTenders(data.bartenders);
  // showTaps(data.taps)
}

function handleBarTenders(bartenders) {
  console.log(bartenders[1]);
}

function showTaps(taps) {
  console.log(taps);
}

function createCustomers() {
  const container = document.querySelector("section:nth-child(2) article");
  for (let i = 0; i < 30; i++) {
    let homer = document.createElement("img");
    homer.src = "images/homer1.png";
    // let homer = document.createElement("object");
    // homer.type = "image/svg+xml";
    // homer.data = "images/homer.svg";
    container.appendChild(homer);
  }
}
function applyColor(number) {
  let homer = document.querySelectorAll("section:nth-child(2) article img");
  if (number <= 5) {
    console.log("too little");
    for (let i = 0; i < number; i++) {
      homer[i].src = "images/homer-red.png";
    }
    if (number >= 6 && number <= 9) {
      console.log("too little");
      for (let i = 0; i < number; i++) {
        homer[i].src = "images/homer.png";
      }
    }
    if (number > 9) {
      homer[i].src = "images/homer-yellow.png";
    }
  }
  showCustomer(number);
}

function showCustomer(number) {
  document.querySelector("#queue span").textContent = " " + number;
  let allCustomers = document.querySelectorAll(
    "section:nth-child(2) article img"
  );
  for (let i = 0; i < number; i++) {
    allCustomers[i].style.opacity = "1";
    allCustomers[i].style.transitionDelay = `${1 / 3}s`;
  }
  setTimeout(applyOpacity, 10000);
  function applyOpacity() {
    allCustomers.forEach(e => (e.style.opacity = "0"));
    ///fetch again
    update();
  }
}
