// JavaScript Document


function internal() {
	document.getElementById("check6").value = "Incorrect";
}

function external() {
	document.getElementById("check6").value = "Correct";
}

function check() {
	
var metric = document.getElementById("ans1").value.toLowerCase();
var major = document.getElementById("ans2").value.toLowerCase();
var pitch = document.getElementById("ans3").value.toLowerCase();
var pitchTol = document.getElementById("ans4").value.toLowerCase();
var majorTol = document.getElementById("ans5").value.toLowerCase();
var right = document.getElementById("ans7").value.toLowerCase();

if ((metric == "metric form") || (metric == "metric") || (metric == "metric thread form")) {
	document.getElementById("check1").value = "Correct";
}
else {
	document.getElementById("check1").value = "Incorrect";
}

if ((major == "major diameter") || (major == "major") || (major == "major dia")) {
	document.getElementById("check2").value = "Correct";
}
else {
	document.getElementById("check2").value = "Incorrect";
}

if ((pitch == "pitch") || (pitch == "the pitch") || (metric == "mm per thread") || (metric == "millimeters per thread")) {
	document.getElementById("check3").value = "Correct";
}
else {
	document.getElementById("check3").value = "Incorrect";
}

if ((pitchTol == "pitch tolerance") || (pitchTol == "pitch diameter tolerance")) {
	document.getElementById("check4").value = "Correct";
}
else {
	document.getElementById("check4").value = "Incorrect";
}

if ((majorTol == "major diameter tolerance") || (majorTol == "crest diameter tolerance") || (majorTol == "crest tolerance")) {
	document.getElementById("check5").value = "Correct";
}
else {
	document.getElementById("check5").value = "Incorrect";
}

if ((right == "right handed threads") || (right == "right handed") || (right == "righthanded threads")) {
	document.getElementById("check7").value = "Correct";
}
else {
	document.getElementById("check7").value = "Incorrect";
}

}

