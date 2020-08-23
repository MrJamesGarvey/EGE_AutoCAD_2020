// JavaScript Document


function check() {

var mDIA = document.getElementById("majorDIA").value.toLowerCase();

var thds = document.getElementById("thdPer").value.toLowerCase();

var series = document.getElementById("thdSeries").value.toLowerCase();

var classT = document.getElementById("thdClass").value.toLowerCase();

var ext = document.getElementById("extInt").value.toLowerCase();
var right = document.getElementById("RH").value.toLowerCase();

if ((mDIA == "major diameter") || (mDIA == "major dia") || (mDIA == "major")) {
	document.getElementById("check1").value = "Correct";
}
else {
	document.getElementById("check1").value = "Incorrect";
}

if ((thds == "threads per inch") || (thds == "one over the pitch") || (thds == "20 threads per inch")) {
	document.getElementById("check2").value = "Correct";
}
else {
	document.getElementById("check2").value = "Incorrect";
}

if ((series == "thread series") || (series == "unified national coarse") || (series == "coarse") || (series == "coarse threads") || (series == "thread form and series") || (series == "thread series and form")) {
	document.getElementById("check3").value = "Correct";
}
else {
	document.getElementById("check3").value = "Incorrect";
}

if ((classT == "thread class") || (classT == "normal production")) {
	document.getElementById("check4").value = "Correct";
}
else {
	document.getElementById("check4").value = "Incorrect";
}

if ((ext == "external") || (ext == "external threads") || (ext == "thread class external threads")) {
	document.getElementById("check5").value = "Correct";
}
else {
	document.getElementById("check5").value = "Incorrect";
}



if ((right == "right handed") || (right == "righthanded") || (right == "right handed threads")) {
	document.getElementById("check6").value = "Correct";
}
else {
	document.getElementById("check6").value = "Incorrect";
}


}

