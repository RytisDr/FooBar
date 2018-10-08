"use strict";

function init() {
  // setInterval(update, 5000)
  update();
}
init();
function update() {
  let data = JSON.parse(FooBar.getData());
  console.log(data);
  // handleBarTenders(data.bartenders);
  // showTaps(data.taps)
}

function handleBarTenders(bartenders) {
  console.log(bartenders[1]);
}

function showTaps(taps) {
  console.log(taps);
}
