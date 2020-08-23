// JavaScript Document


n = 0;

function swapOrthoStep() {

n = n + 1;

if (n == 1) {
	document.getElementById("orthoStepImg").src="ortho_steps13.png";
}
else if (n == 2) {
	document.getElementById("orthoStepImg").src="ortho_steps12.png";
}
else if (n == 3) {
	document.getElementById("orthoStepImg").src="ortho_steps11.png";
}
else if (n == 4) {
	document.getElementById("orthoStepImg").src="ortho_steps10.png";
}
else if (n == 5) {
	document.getElementById("orthoStepImg").src="ortho_steps9.png";
}
else if (n == 6) {
	document.getElementById("orthoStepImg").src="ortho_steps8.png";
}
else if (n == 7) {
	document.getElementById("orthoStepImg").src="ortho_steps7.png";
}
else if (n == 8) {
	document.getElementById("orthoStepImg").src="ortho_steps6.png";
}
else if (n == 9) {
	document.getElementById("orthoStepImg").src="ortho_steps5.png";
}
else if (n == 10) {
	document.getElementById("orthoStepImg").src="ortho_steps4.png";
}
else if (n == 11) {
	document.getElementById("orthoStepImg").src="ortho_steps3.png";
}
else if (n == 12) {
	document.getElementById("orthoStepImg").src="ortho_steps2.png";
}
else if (n == 13) {
	document.getElementById("orthoStepImg").src="ortho_steps1.png";
}

else {
	document.getElementById("orthoStepImg").src="ortho_steps14.png";
	n = 0;
}
}
