// JavaScript Document



function roundOff() {

var round1Num = parseFloat(document.getElementById("round1").value);
var round2Num = parseFloat(document.getElementById("round2").value);
var round3Num = parseFloat(document.getElementById("round3").value);
var round4Num = parseFloat(document.getElementById("round4").value);

if (round1Num == 0.31) {
	document.getElementById("round1Check").value = "Correct";
}
else {
	document.getElementById("round1Check").value = "Incorrect - Try again";
}

if (round2Num == 0.16) {
	document.getElementById("round2Check").value = "Correct";
}
else {
	document.getElementById("round2Check").value = "Incorrect - Try again";
}

if (round3Num == 0.12) {
	document.getElementById("round3Check").value = "Correct";
}
else {
	document.getElementById("round3Check").value = "Incorrect - Try again";
}

if (round4Num == 0.38) {
	document.getElementById("round4Check").value = "Correct";
}
else {
	document.getElementById("round4Check").value = "Incorrect - Try again";
}
	
}


