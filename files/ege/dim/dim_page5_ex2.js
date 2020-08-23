// JavaScript Document


n = 0;

function swapSpaceRead() {
	
n = n+1;

if (n == 1) {
	
	document.getElementById("spaceRead").src = "space_read2_mistakes.png";
	
}

if (n > 1) {
	
	document.getElementById("spaceRead").src = "space_read2_solution.png";
	
}

}

