// JavaScript Document



function checkAnswers() {

var basicSize1 = parseFloat(document.getElementById("basic1").value);
var basicSize2 = parseFloat(document.getElementById("basic2").value);
var basicSize3 = parseFloat(document.getElementById("basic3").value);
var basicSize4 = parseFloat(document.getElementById("basic4").value);

var fitType1 = document.getElementById("fit1").value.toLowerCase();
var fitType2 = document.getElementById("fit2").value.toLowerCase();
var fitType3 = document.getElementById("fit3").value.toLowerCase();
var fitType4 = document.getElementById("fit4").value.toLowerCase();

if ((basicSize1 == 1.5) && ((fitType1 == "clearance") || (fitType1 == "clearance fit"))) {
	document.getElementById("check1").value = "Correct";
}
else {
	document.getElementById("check1").value = "Incorrect";
}

if ((basicSize2 == 0.75) && ((fitType2 == "interference") || (fitType2 == "interference fit"))) {
	document.getElementById("check2").value = "Correct";
}
else {
	document.getElementById("check2").value = "Incorrect";
}

if ((basicSize3 == 0.375) && ((fitType3 == "transition") || (fitType3 == "transition fit"))) {
	document.getElementById("check3").value = "Correct";
}
else {
	document.getElementById("check3").value = "Incorrect";
}

if ((basicSize4 == 0.25) && ((fitType4 == "line") || (fitType4 == "line fit"))) {
	document.getElementById("check4").value = "Correct";
}
else {
	document.getElementById("check4").value = "Incorrect";
}
	
}
