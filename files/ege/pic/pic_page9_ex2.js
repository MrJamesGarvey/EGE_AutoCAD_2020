// JavaScript Document


n = 0;

var isoArray = new Array(12);

isoArray[0] = "ex_iso_circle0.png";
isoArray[1] = "ex_iso_circle1.png";
isoArray[2] = "ex_iso_circle2.png";
isoArray[3] = "ex_iso_circle3.png";
isoArray[4] = "ex_iso_circle4.png";
isoArray[5] = "ex_iso_circle5.png";
isoArray[6] = "ex_iso_circle6.png";
isoArray[7] = "ex_iso_circle7.png";
isoArray[8] = "ex_iso_circle8.png";
isoArray[9] = "ex_iso_circle9.png";
isoArray[10] = "ex_iso_circle10.png";
isoArray[11] = "ex_iso_circle11.png";

function swapIso() {
	
n = n +1;

if (n == 12) n = 0;

document.getElementById("iso").src = isoArray[n];

}

k = 0;

var obArray = new Array(7);

obArray[0] = "ex_ob_circular1.png";
obArray[1] = "ex_ob_circular2.png";
obArray[2] = "ex_ob_circular3.png";
obArray[3] = "ex_ob_circular4.png";
obArray[4] = "ex_ob_circular5.png";
obArray[5] = "ex_ob_circular6.png";
obArray[6] = "ex_ob_circular7.png";


function swapOb() {
	
k = k +1;

if (k == 7) k = 0;

document.getElementById("ob").src = obArray[k];

}


