// JavaScript Document


n = 0;

var halfArray = new Array(5);

halfArray[0] = "ex_half_section.png";
halfArray[1] = "ex_half_section1.png";
halfArray[2] = "ex_half_section2.png";
halfArray[3] = "ex_half_section3.png";
halfArray[4] = "ex_half_section4.png";

function swapHalf() {

n = n + 1;

if (n == 5) n = 0;

document.getElementById("halfImg").src = halfArray[n];

}


