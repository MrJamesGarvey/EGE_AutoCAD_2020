// JavaScript Document


nBase = 0;
nPlate = 0;
nPin = 0;
nSP = 0;
nAssem = 0;

var baseArray = new Array(2);
var plateArray = new Array(2);
var pinArray = new Array(2);
var spArray = new Array(2);
var assemArray = new Array(2);

baseArray[0] = "base1.png";
baseArray[1] = "base_sol.png";


plateArray[0] = "weight_plate.png";
plateArray[1] = "weight_plate_sol.png";


pinArray[0] = "pin1.png";
pinArray[1] = "pin_sol.png";


spArray[0] = "standard_parts.png";
spArray[1] = "standard_parts_sol.png";

assemArray[0] = "clamp_assem.png";
assemArray[1] = "clamp_assem_sol.png";

function swapBase() {

nBase = nBase + 1;

if (nBase == 2) nBase = 0;

document.getElementById("baseImg").src = baseArray[nBase];

}

function swapPlate() {

nPlate = nPlate + 1;

if (nPlate == 2) nPlate = 0;

document.getElementById("plateImg").src = plateArray[nPlate];

}

function swapPin() {

nPin = nPin + 1;

if (nPin == 2) nPin = 0;

document.getElementById("pinImg").src = pinArray[nPin];

}

function swapSP() {

nSP = nSP + 1;

if (nSP == 2) nSP = 0;

document.getElementById("spImg").src = spArray[nSP];

}

function swapAssem() {

nAssem = nAssem + 1;

if (nAssem == 2) nAssem = 0;

document.getElementById("assemImg").src = assemArray[nAssem];

}

function correct1() {

document.getElementById("check1").value = "Correct";

}

function incorrect1() {

document.getElementById("check1").value = "Incorrect";

}

function correct2() {

document.getElementById("check2").value = "Correct";

}

function incorrect2() {

document.getElementById("check2").value = "Incorrect";

}

function correct3() {

document.getElementById("check3").value = "Correct";

}

function incorrect3() {

document.getElementById("check3").value = "Incorrect";

}

function correct4() {

document.getElementById("check4").value = "Correct";

}

function incorrect4() {

document.getElementById("check4").value = "Incorrect";

}

