// Initializing the seconds and tens timer to zero
var seconds = 00;
var tens = 00;

// Initializing variable name by fetching id name fron index.html file using document.getElementById() function
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");

//to store timer values
var interval;

// This function will run when we click on start

function startTimer() {
  tens++;

  if (tens < 9) {
    appendTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}

// On click on start button the timer will start
buttonStart.onclick = function () {
  interval = setInterval(startTimer);
};

// On click on stop button the timer will stop
buttonStop.onclick = function () {
  clearInterval(interval);
};

// On click on reset button the timer will reset to 00:00
buttonReset.onclick = function () {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  appendSeconds.innerHTML = seconds;
  appendTens.innerHTML = tens;
};
