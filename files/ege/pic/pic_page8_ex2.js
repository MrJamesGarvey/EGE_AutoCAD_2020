// JavaScript Document

n = 0;

var obArray = new Array(6);

obArray[0] = "ex_ob_circ1.png";
obArray[1] = "ex_ob_circ2.png";
obArray[2] = "ex_ob_circ3.png";
obArray[3] = "ex_ob_circ4.png";
obArray[4] = "ex_ob_circ5.png";
obArray[5] = "ex_ob_circ6.png";


function swapOb() {
	
n = n +1;

if (n == 6) n = 0;

document.getElementById("ob").src = obArray[n];

}
