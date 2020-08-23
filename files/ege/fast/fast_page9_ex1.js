// JavaScript Document


function checkTable1() {

var clear1 = parseFloat(document.getElementById("ans1").value);
var clear2 = parseFloat(document.getElementById("ans2").value);
var clear1String = document.getElementById("ans1").value;
var clear2String = document.getElementById("ans2").value;

if ((clear1 == 0.28125) || (clear1String == "9/32")) {
	document.getElementById("check1").value = "Correct";
}
else {
	document.getElementById("check1").value = "Incorrect";
}

if ((clear2 == 0.8125) || (clear2String == "13/16") || (clear2 == 0.78125) || (clear2String == "25/32")) {
	document.getElementById("check2").value = "Correct";
}
else {
	document.getElementById("check2").value = "Incorrect";
}
}

function checkTable2() {
	
var head = parseFloat(document.getElementById("ans3").value);
var height = parseFloat(document.getElementById("ans4").value);	
var clearance = parseFloat(document.getElementById("ans5").value);	
var cbore = parseFloat(document.getElementById("ans6").value);	
var depth = parseFloat(document.getElementById("ans7").value);
var headString1 = document.getElementById("ans3").value;
var heightString1 = document.getElementById("ans4").value;	
var clearanceString1 = document.getElementById("ans5").value;	
var cboreString1 = document.getElementById("ans6").value;	
var depthString1 = document.getElementById("ans7").value.toLowerCase();	

if ((head == 0.46875) || (headString1 == "15/32")) {
	document.getElementById("check3").value = "Correct";
}
else {
	document.getElementById("check3").value = "Incorrect";
}

if ((height == 0.3125) || (heightString1 == "5/16")) {
	document.getElementById("check4").value = "Correct";
}
else {
	document.getElementById("check4").value = "Incorrect";
}	
	

if ((clearance == 0.34375) || (clearanceString1 == "11/32")) {
	document.getElementById("check5").value = "Correct";
}
else {
	document.getElementById("check5").value = "Incorrect";
}

if ((cbore == 0.53125) || (cboreString1 == "17/32") || (cbore == 0.59375) || (cboreString1 == "19/32")) {
	document.getElementById("check6").value = "Correct";
}
else {
	document.getElementById("check6").value = "Incorrect";
}

if ((depth == 0.375) || (depthString1 == "3/8") || (depthString1 == ">5/16") || (depthString1 == "greater than 5/16")) {
	document.getElementById("check7").value = "Correct";
}
else {
	document.getElementById("check7").value = "Incorrect";
}

}

function checkTable3() {
	
var majorM = parseFloat(document.getElementById("ans8").value);
var headM = parseFloat(document.getElementById("ans9").value);	
var csink = parseFloat(document.getElementById("ans10").value);	
var clearanceM = parseFloat(document.getElementById("ans11").value);	


	

if (majorM == 8) {
	document.getElementById("check8").value = "Correct";
}
else {
	document.getElementById("check8").value = "Incorrect";
}

if (headM == 17.92) {
	document.getElementById("check9").value = "Correct";
}
else {
	document.getElementById("check9").value = "Incorrect";
}	
	

if ((csink == 17.92) || (csink == 20.92)) {
	document.getElementById("check10").value = "Correct";
}
else {
	document.getElementById("check10").value = "Incorrect";
}

if (clearanceM == 8.4) {
	document.getElementById("check11").value = "Correct";
}
else {
	document.getElementById("check11").value = "Incorrect";
}



}

