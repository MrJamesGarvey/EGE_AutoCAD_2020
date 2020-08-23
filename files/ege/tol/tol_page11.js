// JavaScript Document





function checkTolTableInch() {
	
var basicInch = parseFloat(document.getElementById("basicSizeInch").value);

var sTolInch = parseFloat(document.getElementById("tolShaftInch").value);
var hTolInch = parseFloat(document.getElementById("tolHoleInch").value);

var sMMC = parseFloat(document.getElementById("mmcShaft").value);
var hMMC = parseFloat(document.getElementById("mmcHole").value);
	
var sLMC = parseFloat(document.getElementById("lmcShaft").value);
var hLMC = parseFloat(document.getElementById("lmcHole").value);

var maxC = parseFloat(document.getElementById("maxClear").value);
var minC = parseFloat(document.getElementById("minClear").value);

var fitTypeInch = document.getElementById("fitInch").value.toLowerCase();

if (basicInch == 1.25)  {
	document.getElementById("basicSizeInchCheck").value = "Correct";
}
else {
	document.getElementById("basicSizeInchCheck").value = "Incorrect";
}

if ((sTolInch == 0.0006) && (hTolInch == 0.001)) {
	document.getElementById("tolInchCheck").value = "Correct";
}
else {
	document.getElementById("tolInchCheck").value = "Incorrect";
}

if ((sMMC == 1.2524) && (hMMC == 1.25)) {
	document.getElementById("mmcCheck").value = "Correct";
}
else {
	document.getElementById("mmcCheck").value = "Incorrect";
}

if ((sLMC == 1.2518) && (hLMC == 1.251)) {
	document.getElementById("lmcCheck").value = "Correct";
}
else {
	document.getElementById("lmcCheck").value = "Incorrect";
}

if (maxC == -0.0008)  {
	document.getElementById("maxClearCheck").value = "Correct";
}
else {
	document.getElementById("maxClearCheck").value = "Incorrect";
}

if (minC == -0.0024)  {
	document.getElementById("minClearCheck").value = "Correct";
}
else {
	document.getElementById("minClearCheck").value = "Incorrect";
}

if ((fitTypeInch == "interference") || (fitTypeInch == "interference fit") || (fitTypeInch == "force fit") || (fitTypeInch == "force and shrink fit") || (fitTypeInch == "force") || (fitTypeInch == "force and shrink") || (fitTypeInch == "shrink fit") || (fitTypeInch == "shrink")) {
	document.getElementById("fitInchCheck").value = "Correct";
}
else {
	document.getElementById("fitInchCheck").value = "Incorrect";
}
	

}

function checkLimitTableInch() {

var sLimitMax1 = parseFloat(document.getElementById("limitShaftMax1").value);
var sLimitMin1 = parseFloat(document.getElementById("limitShaftMin1").value);
var hLimitMax1 = parseFloat(document.getElementById("limitHoleMax1").value);
var hLimitMin1 = parseFloat(document.getElementById("limitHoleMin1").value);

var sLimitMax2 = parseFloat(document.getElementById("limitShaftMax2").value);
var sLimitMin2 = parseFloat(document.getElementById("limitShaftMin2").value);
var hLimitMax2 = parseFloat(document.getElementById("limitHoleMax2").value);
var hLimitMin2 = parseFloat(document.getElementById("limitHoleMin2").value);

var sLimitMax3 = parseFloat(document.getElementById("limitShaftMax3").value);
var sLimitMin3 = parseFloat(document.getElementById("limitShaftMin3").value);
var hLimitMax3 = parseFloat(document.getElementById("limitHoleMax3").value);
var hLimitMin3 = parseFloat(document.getElementById("limitHoleMin3").value);

var sLimitMax4 = parseFloat(document.getElementById("limitShaftMax4").value);
var sLimitMin4 = parseFloat(document.getElementById("limitShaftMin4").value);
var hLimitMax4 = parseFloat(document.getElementById("limitHoleMax4").value);
var hLimitMin4 = parseFloat(document.getElementById("limitHoleMin4").value);

if ((sLimitMin1 == 0.6162) && (sLimitMax1 == 0.619) && (hLimitMin1 == 0.625) && (hLimitMax1 == 0.629)) {
	document.getElementById("limitCheck1").value = "Correct";
}
else {
	document.getElementById("limitCheck1").value = "Incorrect";
}

if ((sLimitMin2 == 0.6246) && (sLimitMax2 == 0.625) && (hLimitMin2 == 0.625) && (hLimitMax2 == 0.6257)) {
	document.getElementById("limitCheck2").value = "Correct";
}
else {
	document.getElementById("limitCheck2").value = "Incorrect";
}

if ((sLimitMin3 == 0.6251) && (sLimitMax3 == 0.6255) && (hLimitMin3 == 0.625) && (hLimitMax3 == 0.6257)) {
	document.getElementById("limitCheck3").value = "Correct";
}
else {
	document.getElementById("limitCheck3").value = "Incorrect";
}

if ((sLimitMin4 == 0.6256) && (sLimitMax4 == 0.6259) && (hLimitMin4 == 0.625) && (hLimitMax4 == 0.6254)) {
	document.getElementById("limitCheck4").value = "Correct";
}
else {
	document.getElementById("limitCheck4").value = "Incorrect";
}
	
}

function checkTolTableMetric() {
	
var basicMetric = parseFloat(document.getElementById("basicSizeMetric").value);

var sTolMetric = parseFloat(document.getElementById("tolMetricShaft").value);
var hTolMetric = parseFloat(document.getElementById("tolMetricHole").value);

var sUD = parseFloat(document.getElementById("udShaft").value);
var hUD = parseFloat(document.getElementById("udHole").value);
	
var sLD = parseFloat(document.getElementById("ldShaft").value);
var hLD = parseFloat(document.getElementById("ldHole").value);

var sfDev = parseFloat(document.getElementById("fdShaft").value);
var hfDev = parseFloat(document.getElementById("fdHole").value);
var sIT = parseFloat(document.getElementById("itShaft").value);
var hIT = parseFloat(document.getElementById("itHole").value);
var fitTypeMetric = document.getElementById("fitMetric").value.toLowerCase();
var systemType = document.getElementById("system").value.toLowerCase();

if (basicMetric == 2.0)  {
	document.getElementById("basicSizeMetricCheck").value = "Correct";
}
else {
	document.getElementById("basicSizeMetricCheck").value = "Incorrect";
}

if ((sTolMetric == 0.006) && (hTolMetric == 0.01)) {
	document.getElementById("tolMetricCheck").value = "Correct";
}
else {
	document.getElementById("tolMetricCheck").value = "Incorrect";
}

if ((sUD == 0) && (hUD == 0)) {
	document.getElementById("udCheck").value = "Correct";
}
else {
	document.getElementById("udCheck").value = "Incorrect";
}

if ((sLD == 0.006) && (hLD == 0.01)) {
	document.getElementById("ldCheck").value = "Correct";
}
else {
	document.getElementById("ldCheck").value = "Incorrect";
}

if ((sfDev == 0)  && (hfDev == 0))  {
	document.getElementById("fdCheck").value = "Correct";
}
else {
	document.getElementById("fdCheck").value = "Incorrect";
}

if ((sIT == 6) && (hIT == 7))  {
	document.getElementById("itCheck").value = "Correct";
}
else {
	document.getElementById("itCheck").value = "Incorrect";
}

if ((fitTypeMetric == "transition") || (fitTypeMetric == "locational transition") || (fitTypeMetric == "locational transition fit"))  {
	document.getElementById("fitMetricCheck").value = "Correct";
}
else {
	document.getElementById("fitMetricCheck").value = "Incorrect";
}

if ((systemType == "shaft") || (systemType == "shaft system"))  {
	document.getElementById("systemCheck").value = "Correct";
}
else {
	document.getElementById("systemCheck").value = "Incorrect";
}

}

function checkLimitTableMetric() {

var sLimitMax5 = parseFloat(document.getElementById("limitShaftMax5").value);
var sLimitMin5 = parseFloat(document.getElementById("limitShaftMin5").value);
var hLimitMax5 = parseFloat(document.getElementById("limitHoleMax5").value);
var hLimitMin5 = parseFloat(document.getElementById("limitHoleMin5").value);

var sLimitMax6 = parseFloat(document.getElementById("limitShaftMax6").value);
var sLimitMin6 = parseFloat(document.getElementById("limitShaftMin6").value);
var hLimitMax6 = parseFloat(document.getElementById("limitHoleMax6").value);
var hLimitMin6 = parseFloat(document.getElementById("limitHoleMin6").value);



if ((sLimitMin5 == 8.001) && (sLimitMax5 == 8.01) && (hLimitMin5 == 8.0) && (hLimitMax5 == 8.015)) {
	document.getElementById("limitCheck5").value = "Correct";
}
else {
	document.getElementById("limitCheck5").value = "Incorrect";
}

if ((sLimitMin6 == 7.991) && (sLimitMax6 == 8.0) && (hLimitMin6 == 7.968) && (hLimitMax6 == 7.983)) {
	document.getElementById("limitCheck6").value = "Correct";
}
else {
	document.getElementById("limitCheck6").value = "Incorrect";
}


}


