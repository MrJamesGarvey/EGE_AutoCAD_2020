// JavaScript Document



n = 0;

var duplicateImg = new Array(4);

duplicateImg[0] = "ex_dimension0.png";
duplicateImg[1] = "ex_dimension1.png";
duplicateImg[2] = "ex_dimension2.png";
duplicateImg[3] = "ex_dimension3.png";



function swapDuplicate() {

if (n > 3) {
	
	document.getElementById("duplicate").src = duplicateImg[0];
	
	
}
else {
	
document.getElementById("duplicate").src = duplicateImg[n];
}

n = n + 1;
	
}


