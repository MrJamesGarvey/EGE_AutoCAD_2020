// JavaScript Document

n = 0;

var obArray = new Array(6);

obArray[0] = "ex_ob_lin1.png";
obArray[1] = "ex_ob_lin2.png";
obArray[2] = "ex_ob_lin3.png";
obArray[3] = "ex_ob_lin4.png";
obArray[4] = "ex_ob_lin5.png";
obArray[5] = "ex_ob_lin6.png";


function swapOb() {
	
n = n +1;

if (n == 6) n = 0;

document.getElementById("ob").src = obArray[n];

}
