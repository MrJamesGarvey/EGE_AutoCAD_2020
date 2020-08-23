// JavaScript Document


function checkAnswers1() {

var sLimitMax1 = parseFloat(document.getElementById("limitShaftMax1").value);
var sLimitMin1 = parseFloat(document.getElementById("limitShaftMin1").value);

var hLimitMax1 = parseFloat(document.getElementById("limitHoleMax1").value);
var hLimitMin1 = parseFloat(document.getElementById("limitHoleMin1").value);

var sTol1 = parseFloat(document.getElementById("tolShaft1").value);
var hTol1 = parseFloat(document.getElementById("tolHole1").value);

var systemType1 = document.getElementById("system1").value.toLowerCase();
var fitType1 = document.getElementById("fit1").value.toLowerCase();
												   
if ((sLimitMin1 == 29.76) && (sLimitMax1 == 29.89) && (hLimitMin1 == 30.0) && (hLimitMax1 == 30.13)) {
	document.getElementById("checkLimits1").value = "Correct";
}
else {
	document.getElementById("checkLimits1").value = "Incorrect";
}

if ((sTol1 == 0.13) && (hTol1 == 0.13)) {
	document.getElementById("checkTol1").value = "Correct";
}
else {
	document.getElementById("checkTol1").value = "Incorrect";
}

if ((systemType1 == "hole") || (systemType1 == "hole system")) {
	document.getElementById("checkSystem1").value = "Correct";
}
else {
	document.getElementById("checkSystem1").value = "Incorrect";
}

if ((fitType1 == "clearance") || (fitType1 == "loose running") || (fitType1 == "clearance fit") || (fitType1 == "loose running fit")) {
	document.getElementById("checkFit1").value = "Correct";
}
else {
	document.getElementById("checkFit1").value = "Incorrect";
}

}


function checkAnswers2() {

var sLimitMax2 = parseFloat(document.getElementById("limitShaftMax2").value);
var sLimitMin2 = parseFloat(document.getElementById("limitShaftMin2").value);

var hLimitMax2 = parseFloat(document.getElementById("limitHoleMax2").value);
var hLimitMin2 = parseFloat(document.getElementById("limitHoleMin2").value);

var sTol2 = parseFloat(document.getElementById("tolShaft2").value);
var hTol2 = parseFloat(document.getElementById("tolHole2").value);

var systemType2 = document.getElementById("system2").value.toLowerCase();
var fitType2 = document.getElementById("fit2").value.toLowerCase();
												   
if ((sLimitMin2 == 29.987) && (sLimitMax2 == 30.0) && (hLimitMin2 == 29.965) && (hLimitMax2 == 29.986)) {
	document.getElementById("checkLimits2").value = "Correct";
}
else {
	document.getElementById("checkLimits2").value = "Incorrect";
}

if ((sTol2 == 0.013) && (hTol2 == 0.021)) {
	document.getElementById("checkTol2").value = "Correct";
}
else {
	document.getElementById("checkTol2").value = "Incorrect";
}

if ((systemType2 == "shaft") || (systemType2 == "shaft system")) {
	document.getElementById("checkSystem2").value = "Correct";
}
else {
	document.getElementById("checkSystem2").value = "Incorrect";
}

if ((fitType2 == "interference") || (fitType2 == "locational interference") || (fitType2 == "interference fit") || (fitType2 == "locational interference fit")) {
	document.getElementById("checkFit2").value = "Correct";
}
else {
	document.getElementById("checkFit2").value = "Incorrect";
}

}


