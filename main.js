"use strict";

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
