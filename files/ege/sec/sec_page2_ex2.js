// JavaScript Document


n = 0;

var fullArray = new Array(3);

fullArray[0] = "ex_full_section.png";
fullArray[1] = "ex_full_section1.png";
fullArray[2] = "ex_full_section2.png";

function swapFull() {

n = n + 1;

if (n == 3) n = 0;

document.getElementById("fullImg").src = fullArray[n];

}

