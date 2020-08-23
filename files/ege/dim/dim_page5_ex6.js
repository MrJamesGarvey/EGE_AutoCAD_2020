// JavaScript Document



n = 0;

var duplicateImg = new Array(9);

duplicateImg[0] = "duplicate0.png";
duplicateImg[1] = "duplicate1.png";
duplicateImg[2] = "duplicate2.png";
duplicateImg[3] = "duplicate3.png";
duplicateImg[4] = "duplicate4.png";
duplicateImg[5] = "duplicate5.png";
duplicateImg[6] = "duplicate6.png";
duplicateImg[7] = "duplicate7.png";
duplicateImg[8] = "duplicate8.png";


function swapDuplicate() {

if (n > 8) {
	
	document.getElementById("duplicate").src = duplicateImg[0];
	
	
}
else {
	
document.getElementById("duplicate").src = duplicateImg[n];
}

n = n + 1;
	
}


