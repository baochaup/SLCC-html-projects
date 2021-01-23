var firstPlayerName;
var secondPlayerName;
var playerScores;
var players = [firstPlayerName, secondPlayerName];
var markers = ['<img src="img/tom.png">', '<img src="img/jerry.png">'];
var whoseTurn = 0;
var winValues = [7, 56, 73, 84, 146, 273, 292, 448];
var playerTotal;
var gameOver;

function begin() {

  playerScores = [0, 0];
  document.getElementById("firstPlayerScore").innerText = playerScores[0];
  document.getElementById("secondPlayerScore").innerText = playerScores[1];
  firstPlayerName = document.getElementById("name1").value;
  secondPlayerName = document.getElementById("name2").value;

  if (firstPlayerName === "" || secondPlayerName === "") {
    alert("Enter your names to begin.");
  } else {
    players = [firstPlayerName, secondPlayerName];
    document.getElementById("firstPlayerName").innerText = firstPlayerName;
    document.getElementById("secondPlayerName").innerText = secondPlayerName;
    document.getElementById("main").style["display"] = "block";
    document.getElementById("enterName").style["display"] = "none";
    initialize();
  }
}

function initialize() {

  document.getElementById("again").style["display"] = "none";
  document.getElementById("game-message").innerText = "Who's gonna win?";

  gameOver = false;
  playerTotal = [0, 0];
  var board = "";
  var boardCounter = 1;
  for (var i = 1; i < 4; i++) {
    board = board + '<div id="row-' + i + '">';
    for (var j = 1; j < 4; j++) {
      board = board + '<div onclick="playGame(this, ' + boardCounter +');"></div>';
      boardCounter *= 2;
    }
    board = board + "</div>";
  }

  document.getElementById("game-board").innerHTML = board;
}

function playAgain() {

  document.getElementById("main").style["display"] = "none";
  document.getElementById("enterName").style["display"] = "block";
  document.getElementById("again").style["display"] = "none";
  document.getElementById("game-message").innerText = "Who's gonna win?";
  document.getElementById("name1").value = "";
  document.getElementById("name2").value = "";

  playerScores = [0, 0];
  document.getElementById("firstPlayerScore").innerText = playerScores[0];
  document.getElementById("secondPlayerScore").innerText = playerScores[1];
}

// game play (taking turns)
function playGame(clickedDiv, divValue) {

  if (!gameOver) {
    clickedDiv.attributes["0"].nodeValue = "";
    clickedDiv.innerHTML = markers[whoseTurn];
    playerTotal[whoseTurn] += divValue;

    if (isWin()) {
      document.getElementById("game-message").innerText = players[whoseTurn] + " won!";
      document.getElementById("again").style["display"] = "block";
      playerScores[whoseTurn]++;
      document.getElementById("firstPlayerScore").innerText = playerScores[0];
      document.getElementById("secondPlayerScore").innerText = playerScores[1];
    }
    else if (gameOver) {
      document.getElementById("game-message").innerText = "Tie! No one won";
      document.getElementById("again").style["display"] = "block";
    }
    else {
      if (whoseTurn == 0) {
        whoseTurn = 1;
      } else {
        whoseTurn = 0;
      }
      document.getElementById("game-message").innerText = players[whoseTurn] + "'s Turn";
    }
  }
}

// do we have a winner?
function isWin() {

  for (var i = 0; i < winValues.length; i++) {
    if ((playerTotal[whoseTurn] & winValues[i]) == winValues[i]) {
      gameOver = true;
      return true;
    }
  }

  if ((playerTotal[0] + playerTotal[1]) == 511) {
    gameOver = true;
    return false;
  }
}
