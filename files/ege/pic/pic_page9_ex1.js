// JavaScript Document


n = 0;

var isoArray = new Array(8);

isoArray[0] = "ex_iso_linear0.png";
isoArray[1] = "ex_iso_linear1.png";
isoArray[2] = "ex_iso_linear2.png";
isoArray[3] = "ex_iso_linear3.png";
isoArray[4] = "ex_iso_linear4.png";
isoArray[5] = "ex_iso_linear5.png";
isoArray[6] = "ex_iso_linear6.png";
isoArray[7] = "ex_iso_linear7.png";

function swapIso() {
	
n = n +1;

if (n == 8) n = 0;

document.getElementById("iso").src = isoArray[n];

}

k = 0;

var obArray = new Array(8);

obArray[0] = "ex_ob_linear1.png";
obArray[1] = "ex_ob_linear2.png";
obArray[2] = "ex_ob_linear3.png";
obArray[3] = "ex_ob_linear4.png";
obArray[4] = "ex_ob_linear5.png";
obArray[5] = "ex_ob_linear6.png";
obArray[6] = "ex_ob_linear7.png";
obArray[7] = "ex_ob_linear8.png";

function swapOb() {
	
k = k +1;

if (k == 8) k = 0;

document.getElementById("ob").src = obArray[k];

}

