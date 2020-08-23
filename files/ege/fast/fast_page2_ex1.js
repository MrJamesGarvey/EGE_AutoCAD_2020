// JavaScript Document

var checkArray = new Array(10);

checkArray[0] = "check1";
checkArray[1] = "check2";
checkArray[2] = "check3";
checkArray[3] = "check4";
checkArray[4] = "check5";
checkArray[5] = "check6";
checkArray[6] = "check7";
checkArray[7] = "check8";
checkArray[8] = "check9";
checkArray[9] = "check10";

var check = new String();

function correct(n) {
	
	check = checkArray[n-1];
	
	document.getElementById(check).value = "Correct";
}

function incorrect(n) {
	
	check = checkArray[n-1];
	
	document.getElementById(check).value = "Incorrect";
}


