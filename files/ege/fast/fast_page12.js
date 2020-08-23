// JavaScript Document




function checkSP1() {
	
var noteTHD = document.getElementById("sp1ans1").value.toLowerCase();
var noteArray = new Array();
noteArray = noteTHD.split(" ");
var n = noteArray.length;
var noteNoSpace = new String();

var sp1Minor = parseFloat(document.getElementById("sp1ans2").value);
var sp1Pitch = parseFloat(document.getElementById("sp1ans3").value);

for (m = 0; m < n ; m++) {
	noteNoSpace = noteNoSpace + noteArray[m];
}

if ((noteNoSpace == "7/16-14unc-2a") || (noteNoSpace == "7/1614unc2a")) {
	document.getElementById("sp1check1").value = "Correct";
}
else {
	document.getElementById("sp1check1").value = "Incorrect";
}

if (sp1Minor == 0.36) {
	document.getElementById("sp1check2").value = "Correct";
}
else {
	document.getElementById("sp1check2").value = "Incorrect";
}

if (sp1Pitch == 0.071) {
	document.getElementById("sp1check3").value = "Correct";
}
else {
	document.getElementById("sp1check3").value = "Incorrect";
}


}

function checkSP2() {
	
var noteTHD2 = document.getElementById("sp2ans1").value.toLowerCase();
var noteArray2 = new Array();
noteArray2 = noteTHD2.split(" ");
var n = noteArray2.length;
var noteNoSpace2 = new String();

var sp2Minor = parseFloat(document.getElementById("sp2ans2").value);
var sp2Pitch = parseFloat(document.getElementById("sp2ans3").value);


for (m = 0; m < n ; m++) {
	noteNoSpace2 = noteNoSpace2 + noteArray2[m];
}

if ((noteNoSpace2 == "9/16-18unf-3b") || (noteNoSpace2 == "9/1618unf3b")) {
	document.getElementById("sp2check1").value = "Correct";
}
else {
	document.getElementById("sp2check1").value = "Incorrect";
}

if ((sp2Minor == 0.515625) || (document.getElementById("sp2ans2").value == "33/64")) {
	document.getElementById("sp2check2").value = "Correct";
}
else {
	document.getElementById("sp2check2").value = "Incorrect";
}

if (sp2Pitch == 0.056) {
	document.getElementById("sp2check3").value = "Correct";
}
else {
	document.getElementById("sp2check3").value = "Incorrect";
}


}

function checkSP3() {
	
var noteTHD3 = document.getElementById("sp3ans1").value.toLowerCase();
var noteArray3 = new Array();
noteArray3 = noteTHD3.split(" ");
var n = noteArray3.length;
var noteNoSpace3 = new String();

var sp3Major = parseFloat(document.getElementById("sp3ans2").value);

for (m = 0; m < n ; m++) {
	noteNoSpace3 = noteNoSpace3 + noteArray3[m];
}

if ((noteNoSpace3 == "3-48unc") || (noteNoSpace3 == "#3-48unc") || (noteNoSpace3 == "348unc") || (noteNoSpace3 == "#348unc")) {
	document.getElementById("sp3check1").value = "Correct";
}
else {
	document.getElementById("sp3check1").value = "Incorrect";
}

if (sp3Major == 0.099) {
	document.getElementById("sp3check2").value = "Correct";
}
else {
	document.getElementById("sp3check2").value = "Incorrect";
}

}


function checkSP4() {
	
var noteTHD4 = document.getElementById("sp4ans1").value.toLowerCase();
var noteArray4 = new Array();
noteArray4 = noteTHD4.split(" ");
var n = noteArray4.length;
var noteNoSpace4 = new String();

var sp4Minor = parseFloat(document.getElementById("sp4ans2").value);
var sp4Pitch = parseFloat(document.getElementById("sp4ans3").value);


for (m = 0; m < n ; m++) {
	noteNoSpace4 = noteNoSpace4 + noteArray4[m];
}

if (noteNoSpace4 == "m33x2") {
	document.getElementById("sp4check1").value = "Correct";
}
else {
	document.getElementById("sp4check1").value = "Incorrect";
}

if (sp4Minor == 30.585) {
	document.getElementById("sp4check2").value = "Correct";
}
else {
	document.getElementById("sp4check2").value = "Incorrect";
}

if (sp4Pitch == 0.5) {
	document.getElementById("sp4check3").value = "Correct";
}
else {
	document.getElementById("sp4check3").value = "Incorrect";
}


}

function checkSP5() {
	
var noteTHD5 = document.getElementById("sp5ans1").value.toLowerCase();
var noteArray5 = new Array();
noteArray5 = noteTHD5.split(" ");
var n = noteArray5.length;
var noteNoSpace5 = new String();

var sp5Minor = parseFloat(document.getElementById("sp5ans2").value);
var sp5Pitch = parseFloat(document.getElementById("sp5ans3").value);


for (m = 0; m < n ; m++) {
	noteNoSpace5 = noteNoSpace5 + noteArray5[m];
}

if (noteNoSpace5 == "m24x3") {
	document.getElementById("sp5check1").value = "Correct";
}
else {
	document.getElementById("sp5check1").value = "Incorrect";
}

if (sp5Minor == 21.0) {
	document.getElementById("sp5check2").value = "Correct";
}
else {
	document.getElementById("sp5check2").value = "Incorrect";
}

if (sp5Pitch == 0.333) {
	document.getElementById("sp5check3").value = "Correct";
}
else {
	document.getElementById("sp5check3").value = "Incorrect";
}


}

function checkSP6() {

var sp6Flats = parseFloat(document.getElementById("sp6ans1").value);
var sp6Corners = parseFloat(document.getElementById("sp6ans2").value);
var sp6Height = parseFloat(document.getElementById("sp6ans3").value);
var sp6Clearance = parseFloat(document.getElementById("sp6ans4").value);

if ((sp6Flats == 1.125) || (document.getElementById("sp6ans1").value == "1 1/8")) {
	document.getElementById("sp6check1").value = "Correct";
}
else {
	document.getElementById("sp6check1").value = "Incorrect";
}

if (sp6Corners == 1.299) {
	document.getElementById("sp6check2").value = "Correct";
}
else {
	document.getElementById("sp6check2").value = "Incorrect";
}

if (sp6Height == 0.5) {
	document.getElementById("sp6check3").value = "Correct";
}
else {
	document.getElementById("sp6check3").value = "Incorrect";
}

if ((sp6Clearance == 0.78125) || (document.getElementById("sp6ans4").value == "25/32") || (document.getElementById("sp6ans4").value == "13/16") || (sp6Clearance == 0.8125)) {
	document.getElementById("sp6check4").value = "Correct";
}
else {
	document.getElementById("sp6check4").value = "Incorrect";
}
}

function checkSP7() {

var sp7Hdia = parseFloat(document.getElementById("sp7ans1").value);
var sp7Height = parseFloat(document.getElementById("sp7ans2").value);
var sp7Clearance = parseFloat(document.getElementById("sp7ans3").value);
var sp7CboreDia = parseFloat(document.getElementById("sp7ans4").value);
var sp7CboreDepth = parseFloat(document.getElementById("sp7ans5").value);

if ((sp7Hdia == 1.3125) || (document.getElementById("sp7ans1").value == "1 5/16")) {
	document.getElementById("sp7check1").value = "Correct";
}
else {
	document.getElementById("sp7check1").value = "Incorrect";
}

if ((sp7Height == 0.875) || (document.getElementById("sp7ans2").value == "7/8")) {
	document.getElementById("sp7check2").value = "Correct";
}
else {
	document.getElementById("sp7check2").value = "Incorrect";
}

if ((sp7Clearance == 0.90625) || (document.getElementById("sp7ans3").value == "29/32") || (document.getElementById("sp7ans3").value == "15/16") || (sp7Clearance == 0.9375)) {
	document.getElementById("sp7check3").value = "Correct";
}
else {
	document.getElementById("sp7check3").value = "Incorrect";
}

if ((sp7CboreDia == 1.375) || (document.getElementById("sp7ans4").value == "1 3/8") || (document.getElementById("sp7ans4").value == "1 7/16") || (sp7CboreDia == 1.4375)) {
	document.getElementById("sp7check4").value = "Correct";
}
else {
	document.getElementById("sp7check4").value = "Incorrect";
}

if ((sp7CboreDepth == 0.9375) || (document.getElementById("sp7ans5").value == "15/16") || (document.getElementById("sp7ans5").value == ">7/8") || (document.getElementById("sp7ans5").value == "greater than 7/8")) {
	document.getElementById("sp7check5").value = "Correct";
}
else {
	document.getElementById("sp7check5").value = "Incorrect";
}


}

function checkSP8() {

var sp8Hdia = parseFloat(document.getElementById("sp8ans1").value);
var sp8Height = parseFloat(document.getElementById("sp8ans2").value);
var sp8Clearance = parseFloat(document.getElementById("sp8ans3").value);
var sp8CboreDia = parseFloat(document.getElementById("sp8ans4").value);
var sp8CboreDepth = parseFloat(document.getElementById("sp8ans5").value);

if ((sp8Hdia == 1.875) || (document.getElementById("sp8ans1").value == "1 7/8")) {
	document.getElementById("sp8check1").value = "Correct";
}
else {
	document.getElementById("sp8check1").value = "Incorrect";
}

if (sp8Height == 0.521) {
	document.getElementById("sp8check2").value = "Correct";
}
else {
	document.getElementById("sp8check2").value = "Incorrect";
}

if ((sp8Clearance == 1.03125) || (document.getElementById("sp8ans3").value == "1 1/32") || (document.getElementById("sp8ans3").value == "1 3/32") || (sp8Clearance == 1.09375)) {
	document.getElementById("sp8check3").value = "Correct";
}
else {
	document.getElementById("sp8check3").value = "Incorrect";
}

if ((sp8CboreDia == 1.875) || (document.getElementById("sp8ans4").value == "1 7/8") || (sp8CboreDia == 2.0)) {
	document.getElementById("sp8check4").value = "Correct";
}
else {
	document.getElementById("sp8check4").value = "Incorrect";
}

if (sp8CboreDepth == 82) {
	document.getElementById("sp8check5").value = "Correct";
}
else {
	document.getElementById("sp8check5").value = "Incorrect";
}


}

function checkSP9() {

var sp9Flats = parseFloat(document.getElementById("sp9ans1").value);
var sp9Corners = parseFloat(document.getElementById("sp9ans2").value);
var sp9Height = parseFloat(document.getElementById("sp9ans3").value);
var sp9Length = parseFloat(document.getElementById("sp9ans4").value);
var sp9Clearance = parseFloat(document.getElementById("sp9ans5").value);

if (sp9Flats == 13.0) {
	document.getElementById("sp9check1").value = "Correct";
}
else {
	document.getElementById("sp9check1").value = "Incorrect";
}

if (sp9Corners == 15.01) {
	document.getElementById("sp9check2").value = "Correct";
}
else {
	document.getElementById("sp9check2").value = "Incorrect";
}

if (sp9Height == 5.68) {
	document.getElementById("sp9check3").value = "Correct";
}
else {
	document.getElementById("sp9check3").value = "Incorrect";
}

if (sp9Length == 22.0) {
	document.getElementById("sp9check4").value = "Correct";
}
else {
	document.getElementById("sp9check4").value = "Incorrect";
}

if (sp9Clearance == 9.0) {
	document.getElementById("sp9check5").value = "Correct";
}
else {
	document.getElementById("sp9check5").value = "Incorrect";
}
}

function checkSP10() {

var sp10Hdia = parseFloat(document.getElementById("sp10ans1").value);
var sp10Height = parseFloat(document.getElementById("sp10ans2").value);
var sp10Clearance = parseFloat(document.getElementById("sp10ans3").value);
var sp10CboreDia = parseFloat(document.getElementById("sp10ans4").value);
var sp10CboreDepth = parseFloat(document.getElementById("sp10ans5").value);

if (sp10Hdia == 21.0)  {
	document.getElementById("sp10check1").value = "Correct";
}
else {
	document.getElementById("sp10check1").value = "Incorrect";
}

if ((sp10Height == 14.0) || (document.getElementById("sp7ans2").value == "7/8")) {
	document.getElementById("sp10check2").value = "Correct";
}
else {
	document.getElementById("sp10check2").value = "Incorrect";
}

if ((sp10Clearance == 14.75) || (sp10Clearance == 15.5)) {
	document.getElementById("sp10check3").value = "Correct";
}
else {
	document.getElementById("sp10check3").value = "Incorrect";
}

if ((sp10CboreDia == 22.25) || (sp10CboreDia == 24)) {
	document.getElementById("sp10check4").value = "Correct";
}
else {
	document.getElementById("sp10check4").value = "Incorrect";
}

if ((sp10CboreDepth == 15.5) || (sp10CboreDepth == 14) || (document.getElementById("sp10ans5").value == ">14") || (document.getElementById("sp10ans5").value.toLowerCase() == "greater than 14")) {
	document.getElementById("sp10check5").value = "Correct";
}
else {
	document.getElementById("sp10check5").value = "Incorrect";
}


}

function checkSP11() {

var sp11Hdia = parseFloat(document.getElementById("sp11ans1").value);
var sp11Height = parseFloat(document.getElementById("sp11ans2").value);
var sp11Clearance = parseFloat(document.getElementById("sp11ans3").value);
var sp11CboreDia = parseFloat(document.getElementById("sp11ans4").value);
var sp11CboreDepth = parseFloat(document.getElementById("sp11ans5").value);

if (sp11Hdia == 40.32)  {
	document.getElementById("sp11check1").value = "Correct";
}
else {
	document.getElementById("sp11check1").value = "Incorrect";
}

if (sp11Height == 10.16) {
	document.getElementById("sp11check2").value = "Correct";
}
else {
	document.getElementById("sp11check2").value = "Incorrect";
}

if ((sp11Clearance == 20.75) || (sp11Clearance == 22.0) || (sp11Clearance == 22.4)) {
	document.getElementById("sp11check3").value = "Correct";
}
else {
	document.getElementById("sp11check3").value = "Incorrect";
}

if ((sp11CboreDia == 40.32) || (sp11CboreDia == 43.32)) {
	document.getElementById("sp11check4").value = "Correct";
}
else {
	document.getElementById("sp11check4").value = "Incorrect";
}

if (sp11CboreDepth == 90) {
	document.getElementById("sp11check5").value = "Correct";
}
else {
	document.getElementById("sp11check5").value = "Incorrect";
}


}
