// JavaScript Document



n = 0;

function swapDimChoice() {
	
n = n+1;

if (n == 1) {
	
	document.getElementById("dimChoiceImg").src = "ex_dim_choice_mistakes.png";
	
}

if (n > 1) {
	
	document.getElementById("dimChoiceImg").src = "ex_dim_choice_solution.png";
	
}

}

