// JavaScript Document



n = 0;

var duplicateImg = new Array(7);

duplicateImg[0] = "ex_duplicate1.png";
duplicateImg[1] = "ex_duplicate2.png";
duplicateImg[2] = "ex_duplicate3.png";
duplicateImg[3] = "ex_duplicate4.png";
duplicateImg[4] = "ex_duplicate5.png";
duplicateImg[5] = "ex_duplicate6.png";
duplicateImg[6] = "ex_duplicate7.png";


function swapDuplicate() {

if (n > 6) {
	
	document.getElementById("duplicate").src = duplicateImg[6];
	
}
else {
	
document.getElementById("duplicate").src = duplicateImg[n];
}

n = n + 1;
	
}


