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

/**
 * call sub function printTime and printSeconds
 */
function printTime() {
  printMinutes();
  printSeconds();
}
/**
 * insert in html span of the chronometer the minutes decimal and unity
 */
function printMinutes() {
  minDec.textContent = chronometer.getMinutesDec();
  minUni.textContent = chronometer.getMinutesUni();
}
/**
 * insert in html span of the chronometer the seconds decimal and unity
 */
function printSeconds() {
  secDec.textContent = chronometer.getSecondsDec();
  secUni.textContent = chronometer.getSecondsUni();
}

// ==> BONUS
/**
 * insert in html span of the chronometer the milliSeconds decimal and unity
 */
function printMilliseconds() {
  milDec.textContent = chronometer.getMilliSecondsDec();
  milUni.textContent = chronometer.getMilliSecondsUni();
}
/**
 * insert in ol element in html a li with currentTime string inside
 */
function printSplit() {
  let li = document.createElement("li");
  li.textContent = chronometer.splitClick();
  splits.appendChild(li);
}
/**
 * remove all li in ol element and clear time and view
 */
function clearSplits() {
  splits.innerHTML = "";
  chronometer.currentTime = 0;
  chronometer.milliSeconds = 0;
  printTime();
  printMilliseconds();
}
/**
 * change #btnLeft to stop state
 */
function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.textContent = "STOP";
}
/**
 * change #btnRight to split state
 */
function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.textContent = "SPLIT";
}
/**
 * change #btnLeft to start state
 */
function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.textContent = "START";
}
/**
 * change #btnRight to reset state
 */
function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.textContent = "RESET";
}

////////// EVENTS//////////////////////
// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.className === "btn start") {
    // si le chronométre est a l'arret et que l'on appui sur le bouton start alors en change la class et le text de btnLeft btnRigth
    //  et on lance la methode startclick de la class chronometer
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime, printMilliseconds);
  } else {
    // si le chronométre tourne et que l'on appui sur le bouton stop alors en change la class et le text de btnLeft btnRigth
    // et on stop le chronométre
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.className === "btn split") {
    printSplit();
  }
  if (btnRight.className === "btn reset") {
    clearSplits();
  }
});
