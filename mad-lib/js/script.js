function generateStory() {

  var n1 = document.getElementById("noun1").value;
  var n2 = document.getElementById("noun2").value;
  var n3 = document.getElementById("noun3").value;
  var a1 = document.getElementById("adj1").value;
  var a2 = document.getElementById("adj2").value;
  var a3 = document.getElementById("adj3").value;
  var v1 = document.getElementById("verb1").value;
  var v2 = document.getElementById("verb2").value;
  var v3 = document.getElementById("verb3").value;

  story.innerHTML = "There is a bank robbery downtown. The robber is a " + n1
    + " and use " + a1 + " " + n2 + " as the weapon. The robber forces the " + a2
    + " security guy by " + v1 + "ing him to open the safe. When the robber goes "
    + "to the safe, a " + a3 + " " + n3 + " " + v2 + "s the robber's head, "
    + "and " + v3 + " the robber to the ground.";

  if (document.getElementById("input").className == "") {
  	document.getElementById("input").className = "hidden";
  }
}
