// JavaScript Document


function noteCheck() {

var noteTHD = document.getElementById("thdNote").value.toLowerCase();
var noteArray = new Array();
noteArray = noteTHD.split(" ");
var n = noteArray.length;
var noteNoSpace = new String();

for (m = 0; m < n ; m++) {
	noteNoSpace = noteNoSpace + noteArray[m];
}

if ((noteNoSpace == "10-32unf") || (noteNoSpace == "#10-32unf") || (noteNoSpace == "#10-32unf-2a") || (noteNoSpace == "10-32unf-2a") || (noteNoSpace == "1032unf2a") || (noteNoSpace == "#1032unf2a")) {
	document.getElementById("check1").value = "Correct";
}
else {
	document.getElementById("check1").value = "Incorrect";
}
	
}

function diaCheck() {

var majorDIA = parseFloat(document.getElementById("major").value);
var minorDIA = parseFloat(document.getElementById("minor").value);

if (majorDIA == 0.190) {
	document.getElementById("check2").value = "Correct";
}
else {
	document.getElementById("check2").value = "Incorrect";
}

if (minorDIA == 0.156) {
	document.getElementById("check3").value = "Correct";
}
else {
	document.getElementById("check3").value = "Incorrect";
}



	
	
}

