// JavaScript Document

n = 0;

var isoArray = new Array(6);

isoArray[0] = "ex_iso_lin1.png";
isoArray[1] = "ex_iso_lin2.png";
isoArray[2] = "ex_iso_lin3.png";
isoArray[3] = "ex_iso_lin4.png";
isoArray[4] = "ex_iso_lin5.png";
isoArray[5] = "ex_iso_lin6.png";

function swapIso() {
	
n = n +1;

if (n == 6) n = 0;

document.getElementById("iso").src = isoArray[n];

}
