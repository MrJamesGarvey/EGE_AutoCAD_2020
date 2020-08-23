// JavaScript Document


function checkAnswers() {

var sLimitMax = parseFloat(document.getElementById("limitShaftMax").value);
var sLimitMin = parseFloat(document.getElementById("limitShaftMin").value);

var hLimitMax = parseFloat(document.getElementById("limitHoleMax").value);
var hLimitMin = parseFloat(document.getElementById("limitHoleMin").value);
												   
if ((sLimitMin == 0.4949) && (sLimitMax == 0.4965)) {
	document.getElementById("checkShaft").value = "Correct";
}
else {
	document.getElementById("checkShaft").value = "Incorrect";
}

if ((hLimitMin == 0.5) && (hLimitMax == 0.5028)) {
	document.getElementById("checkHole").value = "Correct";
}
else {
	document.getElementById("checkHole").value = "Incorrect";
}


	
}


function hint() {
	
document.getElementById("hintHere").childNodes[0].nodeValue = "The values in the ANSI limits and fit tables are given in thousands of an inch.  Therefore you should add and subtract the following values.  Shaft: -0.0051, -0.0035 Hole: +0.0, +0.0028";
document.getElementById("hintHere").style.color = "#cc3300";

}
