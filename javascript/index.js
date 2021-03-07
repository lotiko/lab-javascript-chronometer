const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

// add in file scope intervalId
let printInt;
function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  minDec.textContent = chronometer.getMinutesDec();
  minUni.textContent = chronometer.getMinutesUni();
}

function printSeconds() {
  secDec.textContent = chronometer.getSecondsDec();
  secUni.textContent = chronometer.getSecondsUni();
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  const callbackStart = () => {
    printInt = setInterval(() => {
      printMinutes();
      printSeconds();
    }, 1000);
  };
  chronometer.startClick(callbackStart);
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  // ... your code goes here
});
