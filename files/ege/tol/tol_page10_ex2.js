// JavaScript Document


function checkAnswers1() {


var hLimitMax1 = parseFloat(document.getElementById("limitHoleMax1").value);
var hLimitMin1 = parseFloat(document.getElementById("limitHoleMin1").value);
												   
if ((hLimitMin1 == 20.007) && (hLimitMax1 == 20.028)) {
	document.getElementById("checkHole1").value = "Correct";
}
else {
	document.getElementById("checkHole1").value = "Incorrect";
}

}

