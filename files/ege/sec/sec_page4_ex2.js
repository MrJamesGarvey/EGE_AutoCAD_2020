// JavaScript Document



n = 0;

var offsetArray = new Array(4);

offsetArray[0] = "ex_offset_section.png";
offsetArray[1] = "ex_offset_section1.png";
offsetArray[2] = "ex_offset_section2.png";
offsetArray[3] = "ex_offset_section3.png";

function swapOffset() {

n = n + 1;

if (n == 4) n = 0;

document.getElementById("offset").src = offsetArray[n];

}


