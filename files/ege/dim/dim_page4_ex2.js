// JavaScript Document



function topView1() {
	
	document.getElementById("circ").firstChild.nodeValue = "YES - In the top view both the cylinder and hole look like a circles";
	document.getElementById("circ").style.color = "green";
}

function frontView1() {
	
	document.getElementById("circ").firstChild.nodeValue = "NO - In the front view both the cylinder and hole look like rectangles";
	document.getElementById("circ").style.color = "#cc3300";
	
}

function topView2() {
	
	document.getElementById("rec").firstChild.nodeValue = "NO - In the top view both the cylinder and hole look like a circles";
	document.getElementById("rec").style.color = "#cc3300";
}

function frontView2() {
	
	document.getElementById("rec").firstChild.nodeValue = "YES - In the front view both the cylinder and hole look like rectangles";
	document.getElementById("rec").style.color = "green";
	
}
function yesDiff() {
	
	document.getElementById("circRec").firstChild.nodeValue = "INCORRECT - The cylinder and hole both look like circles.  You can't tell which is which.";
	document.getElementById("circRec").style.color = "#cc3300";
}

function noDiff() {
	
	document.getElementById("circRec").firstChild.nodeValue = "CORRECT - The cylinder and hole both look like circles.  You can't tell which is which.";
	document.getElementById("circRec").style.color = "green";
}

function dim() {
	
	document.getElementById("circRec2").firstChild.nodeValue = "So that the cylinder is not confused with the hole.";
	document.getElementById("circRec2").style.color = "#cc3300";
}

