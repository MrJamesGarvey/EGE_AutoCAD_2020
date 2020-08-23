// JavaScript Document


//Check for 5/8 - 18 UNF thread

function noteCheck1() {

var noteTHD1 = document.getElementById("thdNote1").value.toLowerCase();
var noteArray1 = new Array();
noteArray1 = noteTHD1.split(" ");
var n = noteArray1.length;
var noteNoSpace1 = new String();

for (m = 0; m < n ; m++) {
	noteNoSpace1 = noteNoSpace1 + noteArray1[m];
}

if ((noteNoSpace1 == "5/8-18unf") || (noteNoSpace1 == "5/8-18unf-2a") || (noteNoSpace1 == "5/818unf") || (noteNoSpace1 == "5/818unf2a")) {
	document.getElementById("check1").value = "Correct";
}
else {
	document.getElementById("check1").value = "Incorrect";
}
	
}


//Check for 5/8 - 11 UNF thread

function noteCheck2() {

var noteTHD2 = document.getElementById("thdNote2").value.toLowerCase();
var noteArray2 = new Array();
noteArray2 = noteTHD2.split(" ");
var n = noteArray2.length;
var noteNoSpace2 = new String();

for (m = 0; m < n ; m++) {
	noteNoSpace2 = noteNoSpace2 + noteArray2[m];
}

if ((noteNoSpace2 == "5/8-11unc") || (noteNoSpace2 == "5/8-11unc-2a") || (noteNoSpace2 == "5/811unc") || (noteNoSpace2 == "5/811unc2a")) {
	document.getElementById("check2").value = "Correct";
}
else {
	document.getElementById("check2").value = "Incorrect";
}
	
}


//Check for 1/4 - 20 UNC thread

function noteCheck3() {

var noteTHD3 = document.getElementById("thdNote3").value.toLowerCase();
var noteArray3 = new Array();
noteArray3 = noteTHD3.split(" ");
var n = noteArray3.length;
var noteNoSpace3 = new String();

for (m = 0; m < n ; m++) {
	noteNoSpace3 = noteNoSpace3 + noteArray3[m];
}

if ((noteNoSpace3 == "1/4-20unc") || (noteNoSpace3 == "1/4-20unc-2a") || (noteNoSpace3 == "1/420unc") || (noteNoSpace3 == "1/420unc2a")) {
	document.getElementById("check3").value = "Correct";
}
else {
	document.getElementById("check3").value = "Incorrect";
}
	
}

//Check for 10 - 24 UNC thread

function noteCheck4() {

var noteTHD4 = document.getElementById("thdNote4").value.toLowerCase();
var noteArray4 = new Array();
noteArray4 = noteTHD4.split(" ");
var n = noteArray4.length;
var noteNoSpace4 = new String();

for (m = 0; m < n ; m++) {
	noteNoSpace4 = noteNoSpace4 + noteArray4[m];
}

if ((noteNoSpace4 == "10-24unc") || (noteNoSpace4 == "10-24unc-2b") || (noteNoSpace4 == "1024unc") || (noteNoSpace4 == "10-24unc2b") || (noteNoSpace4 == "#10-24unc") || (noteNoSpace4 == "#10-24unc-2b") || (noteNoSpace4 == "#1024unc") || (noteNoSpace4 == "#10-24unc2b")) {
	document.getElementById("check5").value = "Correct";
}
else {
	document.getElementById("check5").value = "Incorrect";
}
	
}

//Check for 1/4 - 20 tap drill size

function tapdrill1() {

var tap1 = parseFloat(document.getElementById("drill1").value);

if (tap1 == 0.201) {

document.getElementById("check4").value = "Correct";
}
else {
	document.getElementById("check4").value = "Incorrect";
}

}

//Check for 10 - 24 tap drill size

function tapdrill2() {

var tap2 = parseFloat(document.getElementById("drill2").value);

if (tap2 == 0.1495) {

document.getElementById("check6").value = "Correct";
}
else {
	document.getElementById("check6").value = "Incorrect";
}

}

	




