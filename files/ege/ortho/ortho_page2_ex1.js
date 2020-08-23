// JavaScript Document



function checkNames() {
	
	if (document.getElementById("left").value.toLowerCase() == "left") {
	document.getElementById("leftResult").value = "Correct";
	}
	else if (document.getElementById("left").value.toLowerCase() == "leftside") {
	document.getElementById("leftResult").value = "Correct";
	}
	else if (document.getElementById("left").value.toLowerCase() == "left side") {
	document.getElementById("leftResult").value = "Correct";
	}
	else {
	document.getElementById("leftResult").value = "Incorrect";
	}
	
	if (document.getElementById("front").value.toLowerCase() == "front") {
		document.getElementById("frontResult").value = "Correct";
	}
	else {
		document.getElementById("frontResult").value = "Incorrect";
	}
	
	if (document.getElementById("right").value.toLowerCase() == "right") {
	document.getElementById("rightResult").value = "Correct";
	}
	else if (document.getElementById("right").value.toLowerCase() == "rightside") {
	document.getElementById("rightResult").value = "Correct";
	}
	else if (document.getElementById("right").value.toLowerCase() == "right side") {
	document.getElementById("rightResult").value = "Correct";
	}
	else {
	document.getElementById("rightResult").value = "Incorrect";
	}
	
	if (document.getElementById("rear").value.toLowerCase() == "rear") {
		document.getElementById("rearResult").value = "Correct";
	}
	else if (document.getElementById("rear").value.toLowerCase() == "back") {
		document.getElementById("rearResult").value = "Correct";
	}
	else {
		document.getElementById("rearResult").value = "Incorrect";
	}
	
	if (document.getElementById("bottom").value.toLowerCase() == "bottom") {
		document.getElementById("bottomResult").value = "Correct";
	}
	else {
		document.getElementById("bottomResult").value = "Incorrect";
	}
	
	if (document.getElementById("top").value.toLowerCase() == "top") {
		document.getElementById("topResult").value = "Correct";
	}
	else {
		document.getElementById("topResult").value = "Incorrect";
	}
	
}
