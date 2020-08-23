// JavaScript Document



function aStated() {

document.getElementById("aText").value = "NO - This dimension has an implied tolerance.";

}

function aImplied() {

document.getElementById("aText").value = "YES - This dimension has an implied tolerance.";

}

function bStated() {

document.getElementById("bText").value = "NO - This dimension has an implied tolerance.";

}

function bImplied() {

document.getElementById("bText").value = "YES - This dimension has an implied tolerance.";

}

function cStated() {

document.getElementById("cText").value = "YES - This dimension has a stated tolerance.";

}

function cImplied() {

document.getElementById("cText").value = "NO - This dimension has a stated tolerance.";

}

function increasing() {

document.getElementById("increasingText").value = "YES - The accuracy of the dimensions are increasing.";

}

function decreasing() {

document.getElementById("increasingText").value = "NO - The accuracy of the dimensions are increasing.";

}

function dimRange() {
	
	var aMaximum = parseFloat(document.getElementById("maxA").value);
	var aMinimum = parseFloat(document.getElementById("minA").value);
	var bMaximum = parseFloat(document.getElementById("maxB").value);
	var bMinimum = parseFloat(document.getElementById("minB").value);
	var cMaximum = parseFloat(document.getElementById("maxC").value);
	var cMinimum = parseFloat(document.getElementById("minC").value);
	
	if ((aMaximum == 0.5) && (aMinimum == 1.5)) {
		document.getElementById("aCheck").value = "Correct";
	}
	else {
		document.getElementById("aCheck").value = "Incorrect: 0.5 - 1.5";
	}
	
	if ((bMaximum == 0.95) && (bMinimum == 1.05)) {
		document.getElementById("bCheck").value = "Correct";
	}
	else {
		document.getElementById("bCheck").value = "Incorrect: 0.95 - 1.05";
	}
	
	if ((cMaximum == 0.999) && (cMinimum == 1.001)) {
		document.getElementById("cCheck").value = "Correct";
	}
	else {
		document.getElementById("cCheck").value = "Incorrect: 0.999 - 1.001";
	}
	
}

