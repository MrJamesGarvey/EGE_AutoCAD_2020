// JavaScript Document


function checkTolTable() {
	
var sLimitMax = parseFloat(document.getElementById("limitsShaftMax").value);
var hLimitMax = parseFloat(document.getElementById("limitsHoleMax").value);

var sLimitMin = parseFloat(document.getElementById("limitsShaftMin").value);
var hLimitMin = parseFloat(document.getElementById("limitsHoleMin").value);

var basic = parseFloat(document.getElementById("basicSize").value);

var sTol = parseFloat(document.getElementById("tolShaft").value);
var hTol = parseFloat(document.getElementById("tolHole").value);

var sUD = parseFloat(document.getElementById("udShaft").value);
var hUD = parseFloat(document.getElementById("udHole").value);
	
var sLD = parseFloat(document.getElementById("ldShaft").value);
var hLD = parseFloat(document.getElementById("ldHole").value);

var sfDev = parseFloat(document.getElementById("fdShaft").value);
var hfDev = parseFloat(document.getElementById("fdHole").value);
var fitType = document.getElementById("fit").value.toLowerCase();

if ((sLimitMax == 2.2) && (sLimitMin == 2.1) && (hLimitMax == 2.0) && (hLimitMin == 1.8)) {
	document.getElementById("limitsCheck").value = "Correct";
}
else {
	document.getElementById("limitsCheck").value = "Incorrect";
}

if (basic == 2.0)  {
	document.getElementById("basicSizeCheck").value = "Correct";
}
else {
	document.getElementById("basicSizeCheck").value = "Incorrect";
}

if ((sTol == 0.1) && (hTol == 0.2)) {
	document.getElementById("tolCheck").value = "Correct";
}
else {
	document.getElementById("tolCheck").value = "Incorrect";
}

if ((sUD == 0.2) && (hUD == 0)) {
	document.getElementById("udCheck").value = "Correct";
}
else {
	document.getElementById("udCheck").value = "Incorrect";
}

if ((sLD == 0.1) && (hLD == 0.2)) {
	document.getElementById("ldCheck").value = "Correct";
}
else {
	document.getElementById("ldCheck").value = "Incorrect";
}

if ((sfDev == 0.1) && (hfDev == 0))  {
	document.getElementById("fdCheck").value = "Correct";
}
else {
	document.getElementById("fdCheck").value = "Incorrect";
}

if ((fitType == "interference") || (fitType == "interference fit"))  {
	document.getElementById("fitCheck").value = "Correct";
}
else {
	document.getElementById("fitCheck").value = "Incorrect";
}

}

