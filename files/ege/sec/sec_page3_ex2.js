// JavaScript Document


n = 0;

var alignedArray = new Array(3);

alignedArray[0] = "ex_aligned_section.png";
alignedArray[1] = "ex_aligned_section1.png";
alignedArray[2] = "ex_aligned_section2.png";

function swapAligned() {

n = n + 1;

if (n == 3) n = 0;

document.getElementById("aligned").src = alignedArray[n];
	
}

