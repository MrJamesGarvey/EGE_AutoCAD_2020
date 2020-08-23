// JavaScript Document


function checkTolTable() {
	
var sLimitMax = parseFloat(document.getElementById("limitsShaftMax").value);
var hLimitMax = parseFloat(document.getElementById("limitsHoleMax").value);

var sLimitMin = parseFloat(document.getElementById("limitsShaftMin").value);
var hLimitMin = parseFloat(document.getElementById("limitsHoleMin").value);

var basic = parseFloat(document.getElementById("basicSize").value);

var sTol = parseFloat(document.getElementById("tolShaft").value);
var hTol = parseFloat(document.getElementById("tolHole").value);

var sMMC = parseFloat(document.getElementById("mmcShaft").value);
var hMMC = parseFloat(document.getElementById("mmcHole").value);
	
var sLMC = parseFloat(document.getElementById("lmcShaft").value);
var hLMC = parseFloat(document.getElementById("lmcHole").value);

var maxC = parseFloat(document.getElementById("maxClear").value);
var minC = parseFloat(document.getElementById("minClear").value);

if ((sLimitMax == 0.51) && (sLimitMin == 0.47) && (hLimitMax == 0.50) && (hLimitMin == 0.49)) {
	document.getElementById("limitsCheck").value = "Correct";
}
else {
	document.getElementById("limitsCheck").value = "Incorrect";
}

if (basic == 0.50)  {
	document.getElementById("basicSizeCheck").value = "Correct";
}
else {
	document.getElementById("basicSizeCheck").value = "Incorrect";
}

if ((sTol == 0.04) && (hTol == 0.01)) {
	document.getElementById("tolCheck").value = "Correct";
}
else {
	document.getElementById("tolCheck").value = "Incorrect";
}

if ((sMMC == 0.51) && (hMMC == 0.49)) {
	document.getElementById("mmcCheck").value = "Correct";
}
else {
	document.getElementById("mmcCheck").value = "Incorrect";
}

if ((sLMC == 0.47) && (hLMC == 0.50)) {
	document.getElementById("lmcCheck").value = "Correct";
}
else {
	document.getElementById("lmcCheck").value = "Incorrect";
}

if (maxC == 0.03)  {
	document.getElementById("maxClearCheck").value = "Correct";
}
else {
	document.getElementById("maxClearCheck").value = "Incorrect";
}

if (minC == -0.02)  {
	document.getElementById("minClearCheck").value = "Correct";
}
else {
	document.getElementById("minClearCheck").value = "Incorrect";
}

}

