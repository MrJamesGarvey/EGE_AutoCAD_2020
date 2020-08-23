// JavaScript Document




//Check for M12 x 1.75 clearance hole

function hole1() {

var holedia1 = parseFloat(document.getElementById("dia1").value);

if ((holedia1 == 13.5) || (holedia1 == 12.8)){

document.getElementById("check1").value = "Correct";
}
else {
	document.getElementById("check1").value = "Incorrect";
}

}

//Check for M12 x 1.75 countersink dia

function hole2() {

var holedia2 = parseFloat(document.getElementById("dia2").value);

if (holedia2 == 26.88) {

document.getElementById("check2").value = "Correct";
}
else {
	document.getElementById("check2").value = "Incorrect";
}

}

//Check countersink angle

function angle1() {
	
	document.getElementById("check3").value = "Incorrect";
	
}

function angle2() {
	
	document.getElementById("check3").value = "Correct";
	
}



