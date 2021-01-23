var numArr = [];
var output = "";
var nums = [];
var userInput = 0;

function generateNumbers() {

  userInput = document.getElementById("userInput").value;

  if (userInput <= 10 && userInput >=1) {
    for (var i = 0; i < userInput; i++) {
      numArr[i] = Math.floor(Math.random() * 99) + 1;
    }

    for (var i = 0; i < userInput; i++) {
      nums[i].style.display="inline-block";
      nums[i].childNodes["1"].innerText = numArr[i];
    }
  } else {
    alert("Invalid number, maximum is 10 and negative number is not accepted.");
  }
}

function start() {

  nums = [document.getElementById("num1"), document.getElementById("num2"),
          document.getElementById("num3"), document.getElementById("num4"),
          document.getElementById("num5"), document.getElementById("num6"),
          document.getElementById("num7"), document.getElementById("num8"),
          document.getElementById("num9"), document.getElementById("num10")];

}

function reveal() {

  for (var i = 0; i < userInput; i++) {
    nums[i].style["animation-iteration-count"] = 1;
    nums[i].style["animation-timing-function"] = "ease-out";
    nums[i].childNodes["1"].style["opacity"] = 1;
  }
}
