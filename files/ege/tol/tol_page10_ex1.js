// JavaScript Document


function checkAnswers1() {

var sLimitMax1 = parseFloat(document.getElementById("limitShaftMax1").value);
var sLimitMin1 = parseFloat(document.getElementById("limitShaftMin1").value);

var hLimitMax1 = parseFloat(document.getElementById("limitHoleMax1").value);
var hLimitMin1 = parseFloat(document.getElementById("limitHoleMin1").value);
												   
if ((sLimitMin1 == 0.3739) && (sLimitMax1 == 0.3745)) {
	document.getElementById("checkShaft1").value = "Correct";
}
else {
	document.getElementById("checkShaft1").value = "Incorrect";
}

if ((hLimitMin1 == 0.375) && (hLimitMax1 == 0.3759)) {
	document.getElementById("checkHole1").value = "Correct";
}
else {
	document.getElementById("checkHole1").value = "Incorrect";
}

}

function checkAnswers2() {

var sLimitMax2 = parseFloat(document.getElementById("limitShaftMax2").value);
var sLimitMin2 = parseFloat(document.getElementById("limitShaftMin2").value);

var hLimitMax2 = parseFloat(document.getElementById("limitHoleMax2").value);
var hLimitMin2 = parseFloat(document.getElementById("limitHoleMin2").value);
												   
if ((sLimitMin2 == 0.6231) && (sLimitMax2 == 0.6238)) {
	document.getElementById("checkShaft2").value = "Correct";
}
else {
	document.getElementById("checkShaft2").value = "Incorrect";
}

if ((hLimitMin2 == 0.625) && (hLimitMax2 == 0.626)) {
	document.getElementById("checkHole2").value = "Correct";
}
else {
	document.getElementById("checkHole2").value = "Incorrect";
}

	
}
