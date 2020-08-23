// JavaScript Document


function checkPitch() {

var pitch1 = document.getElementById("ans1").value.toLowerCase();
var tap1 = document.getElementById("ans2").value.toLowerCase();
var minor1 = document.getElementById("ans3").value.toLowerCase();
var pitch2 = document.getElementById("ans4").value.toLowerCase();
var tap2 = document.getElementById("ans5").value.toLowerCase();
var minor2 = document.getElementById("ans6").value.toLowerCase();

if (((pitch1 == 2.0) && (tap1 == 14.0) && (minor1 == 13.585)) || ((pitch1 == 1.5) && (tap1 == 14.5) && (minor1 == 14.189))) {
	document.getElementById("check1").value = "Correct";
}
else {
	document.getElementById("check1").value = "Incorrect";
}

if (((pitch2 == 2.0) && (tap2 == 14.0) && (minor2 == 13.585)) || ((pitch2 == 1.5) && (tap2 == 14.5) && (minor2 == 14.189))) {
	document.getElementById("check2").value = "Correct";
}
else {
	document.getElementById("check2").value = "Incorrect";
}

}

function checkFiner() {

if (parseFloat(document.getElementById("finer").value) == 1.5) {
	document.getElementById("check3").value = "Correct";
}
else {
	document.getElementById("check3").value = "Incorrect";
}

	
}

function noteCheck() {

var noteTHD = document.getElementById("thdNote").value.toLowerCase();
var noteArray = new Array();
noteArray = noteTHD.split(" ");
var n = noteArray.length;
var noteNoSpace = new String();

for (m = 0; m < n ; m++) {
	noteNoSpace = noteNoSpace + noteArray[m];
}

if (noteNoSpace == "m16x2") {
	document.getElementById("check4").value = "Correct";
}
else {
	document.getElementById("check4").value = "Incorrect";
}
	
}


