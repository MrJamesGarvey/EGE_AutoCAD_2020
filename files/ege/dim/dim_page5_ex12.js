// JavaScript Document



n = 1;

var tolImg = new Array(5);

tolImg[0] = "ex_tol0.png";
tolImg[1] = "ex_tol1.png";
tolImg[2] = "ex_tol2.png";
tolImg[3] = "ex_tol3.png";
tolImg[4] = "ex_tol4.png";




function swapImg() {

if (n > 4) {
	
	document.getElementById("tol").src = tolImg[0];
	n = 0;
	
}
else {
	
document.getElementById("tol").src = tolImg[n];
}

n = n + 1;
	
}


