// JavaScript Document


n = 0;

function swapPlacement() {
	
n = n+1;

if (n == 1) {
	
	document.getElementById("placement").src = "ex_placement_mistakes.png";
	
}

if (n > 1) {
	
	document.getElementById("placement").src = "ex_placement_solution.png";
	
}

}

