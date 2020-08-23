// JavaScript Document


n = 0;

var sectionArray = new Array(5);

sectionArray[0] = "sectionlines1.png";
sectionArray[1] = "sectionlines2.png";
sectionArray[2] = "sectionlines3.png";
sectionArray[3] = "sectionlines4.png";
sectionArray[4] = "sectionlines5.png";

function swapSection() {
	
n = n + 1;

if (n == 5) n = 0;

document.getElementById("section").src = sectionArray[n];
	
}

function incorrect() {
	
document.getElementById("checkDegrees").value = "Incorrect";

}

function correct() {
	
document.getElementById("checkDegrees").value = "Correct";

}

function incorrect2() {
	
document.getElementById("checkDegrees2").value = "Incorrect";

}

function correct2() {
	
document.getElementById("checkDegrees2").value = "Correct";

}



