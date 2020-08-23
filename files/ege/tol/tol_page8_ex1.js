// JavaScript Document


function checkTol1() {

var tolAccum1 = parseFloat(document.getElementById("tolAcc1").value);

if (tolAccum1 == 0.3) {
	document.getElementById("tolCheck1").value = "Correct";
}
else {
	document.getElementById("tolCheck1").value = "Incorrect";
}
	
}

function checkTol2() {

var tolAccum2 = parseFloat(document.getElementById("tolAcc2").value);

if (tolAccum2 == 0.2) {
	document.getElementById("tolCheck2").value = "Correct";
}
else {
	document.getElementById("tolCheck2").value = "Incorrect";
}
	
}

function checkTol3() {

var tolAccum3 = parseFloat(document.getElementById("tolAcc3").value);

if (tolAccum3 == 0.1) {
	document.getElementById("tolCheck3").value = "Correct";
}
else {
	document.getElementById("tolCheck3").value = "Incorrect";
}
	
}

