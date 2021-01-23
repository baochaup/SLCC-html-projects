function contact() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var comment = document.getElementById("comment").value;
  var thanks;

  if (name === "" || email === "" || comment === "") {
    alert("Please fill out the form completely.");
  } else {
    document.getElementById("loader").style["display"] = "block";
    document.getElementById("modalHeader").style["display"] = "none";
    document.getElementById("name-email").style["display"] = "none";
    document.getElementById("comment").style["display"] = "none";
    document.getElementById("send").style["display"] = "none";
    thanks = setTimeout(showThanks, 3000);
  }
}

function showThanks() {
  document.getElementById("loader").style["display"] = "none";
  document.getElementById("thanks").style["display"] = "block";
}
