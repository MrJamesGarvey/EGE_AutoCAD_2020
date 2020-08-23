// JavaScript Document



function checkAnswers() {

var systemType1 = document.getElementById("system1").value.toLowerCase();
var systemType2 = document.getElementById("system2").value.toLowerCase();
var systemType3 = document.getElementById("system3").value.toLowerCase();


var fitType1 = document.getElementById("fit1").value.toLowerCase();
var fitType2 = document.getElementById("fit2").value.toLowerCase();
var fitType3 = document.getElementById("fit3").value.toLowerCase();


if (((systemType1 == "hole") || (systemType1 == "hole system") || (systemType1 == "basic hole system") || (systemType1 == "basic hole")) && ((fitType1 == "clearance") || (fitType1 == "clearance fit"))) {
	document.getElementById("check1").value = "Correct";
}
else {
	document.getElementById("check1").value = "Incorrect";
}

if (((systemType2 == "hole") || (systemType2 == "hole system")) && ((fitType2 == "transition") || (fitType2 == "transition fit"))) {
	document.getElementById("check2").value = "Correct";
}
else {
	document.getElementById("check2").value = "Incorrect";
}

if (((systemType3 == "shaft") || (systemType3 == "shaft system") || (systemType3 == "basic shaft system") || (systemType3 == "basic shaft")) && ((fitType3 == "interference") || (fitType3 == "interference fit") || (fitType3 == "force") || (fitType3 == "force fit"))) {
	document.getElementById("check3").value = "Correct";
}
else {
	document.getElementById("check3").value = "Incorrect";
}


	
}

