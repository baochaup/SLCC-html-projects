var secretNumber;
var diff;
var enteredNumbers = [];
var interval;

function startGame() {

  secretNumber = generateRandomNumber(99);
  enteredNumbers = [];

  document.getElementById("user-guess").value = "";
  document.getElementById("begin").style.display = "inline";
  document.getElementById("user-guess").style.display = "none";
  document.getElementById("submit").style.display = "none";
  document.getElementById("play-again").style.display = "none";
  document.getElementById("game-message").innerText = "Click Begin to start";
  document.getElementById("time").innerText = "You have 30 seconds to find it";
  document.getElementById("entered").innerText = "";
  document.getElementById("game-image").childNodes["0"].src = "img/begin.jpg";
}

function beginGame() {

  var durationCount = 30;
  var displayTime = document.getElementById("time");
  startTimer(durationCount, displayTime);

  document.getElementById("user-guess").style.display="inline";
  document.getElementById("submit").style.display="inline";
  document.getElementById("begin").style.display="none";

  updateGame("begin");
}

function generateRandomNumber(maxNumber) {

  var rand = Math.ceil(Math.random() * maxNumber);
  return rand;
}

function playGame() {

  var userIn = document.getElementById("user-guess").value;

  if (userIn > secretNumber) {
    enteredNumbers.push(userIn);
    updateGame("high");
  } else if (userIn < secretNumber) {
    enteredNumbers.push(userIn);
    updateGame("low");
  } else if (userIn == secretNumber) {
    enteredNumbers.push(userIn);
    updateGame("win");
  } else {
    updateGame("error");
  }

  var displayEnteredNumbers = "";
  if (enteredNumbers === undefined || enteredNumbers.length == 0) {
    displayEnteredNumbers = "";
  } else {
    displayEnteredNumbers = "The numbers you have guessed: " + enteredNumbers[0];
    for (var i = 1; i < enteredNumbers.length; i++) {
     displayEnteredNumbers = displayEnteredNumbers + " - " + enteredNumbers[i];
    }
  }
  document.getElementById("entered").innerText = displayEnteredNumbers;
}

function updateGame(status) {

  var displayMessage = "";
  var displayImage = "";

  switch (status) {

    case "begin": displayMessage = "Enter a number from 1 to 99 to make your guess";
                  displayImage = "img/start.jpg";
                  break;

    case "high":  displayMessage = "Too High!";
                  displayImage = "img/high.jpg";
                  break;

    case "low":   displayMessage = "Too Low!";
                  displayImage = "img/low.jpg";
                  break;

    case "win":   displayMessage = "You Win! It is " + secretNumber;
                  displayImage = "img/win.jpg";
                  clearInterval(interval);
                  document.getElementById("user-guess").style.display="none";
                  document.getElementById("submit").style.display="none";
                  document.getElementById("play-again").style.display="inline";
                  break;

    case "lost":  displayMessage = "BOOM! You lost!";
                  displayImage = "img/lost.jpg";
                  document.getElementById("user-guess").style.display="none";
                  document.getElementById("submit").style.display="none";
                  document.getElementById("play-again").style.display="inline";
                  break;

    default:      displayMessage = "That's not a number!";
                  displayImage = "img/not.jpg";
  }

  document.getElementById("game-message").innerText = displayMessage;
  document.getElementById("game-image").childNodes["0"].src = displayImage;
}

function startTimer(duration, display) {

    var start = Date.now();

    function timer() {

        diff = duration - (((Date.now() - start) / 1000) | 0);
        display.textContent = diff;
        if (diff <= 0) {
          clearInterval(interval);
          updateGame("lost");
        }
    };

    timer();
    interval = setInterval(timer, 1000);
}
