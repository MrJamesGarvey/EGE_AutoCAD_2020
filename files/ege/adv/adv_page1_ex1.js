// JavaScript Document

function check1() {
	
	a1checked = document.getElementById("a1").checked;
	b1checked = document.getElementById("b1").checked;
	c1checked = document.getElementById("c1").checked;
	d1checked = document.getElementById("d1").checked;
	e1checked = document.getElementById("e1").checked;
	f1checked = document.getElementById("f1").checked;
	g1checked = document.getElementById("g1").checked;
	
		if ((a1checked == false) && (b1checked == true) && (c1checked == false) && (d1checked == true) && (e1checked == false) && (f1checked == false) && (g1checked == true)) {
		
		document.getElementById("ans1").innerHTML = "Correct!";
		document.getElementById("ans1").style.color = "green";
		
		} else
		
		{
		
		document.getElementById("ans1").innerHTML = "Try again!";
		document.getElementById("ans1").style.color = "red";
		
	}
}

function check2() {
	
	a2checked = document.getElementById("a2").checked;
	b2checked = document.getElementById("b2").checked;
	c2checked = document.getElementById("c2").checked;
	d2checked = document.getElementById("d2").checked;
	e2checked = document.getElementById("e2").checked;
	f2checked = document.getElementById("f2").checked;
	g2checked = document.getElementById("g2").checked;
	
		if ((a2checked == false) && (b2checked == false) && (c2checked == false) && (d2checked == false) && (e2checked == false) && (f2checked == true) && (g2checked == false)) {
		
		document.getElementById("ans2").innerHTML = "Correct!";
		document.getElementById("ans2").style.color = "green";
		
		} else
		
		{
		
		document.getElementById("ans2").innerHTML = "Try again!";
		document.getElementById("ans2").style.color = "red";
		
	}
}

function check3() {
	
	a3checked = document.getElementById("a3").checked;
	b3checked = document.getElementById("b3").checked;
	c3checked = document.getElementById("c3").checked;
	d3checked = document.getElementById("d3").checked;
	e3checked = document.getElementById("e3").checked;
	f3checked = document.getElementById("f3").checked;
	g3checked = document.getElementById("g3").checked;
	
		if ((a3checked == false) && (b3checked == false) && (c3checked == true) && (d3checked == false) && (e3checked == true) && (f3checked == true) && (g3checked == false)) {
		
		document.getElementById("ans3").innerHTML = "Correct!";
		document.getElementById("ans3").style.color = "green";
		
		} else
		
		{
		
		document.getElementById("ans3").innerHTML = "Try again!";
		document.getElementById("ans3").style.color = "red";
		
	}
}

function check4() {
	
	a4checked = document.getElementById("a4").checked;
	b4checked = document.getElementById("b4").checked;
	c4checked = document.getElementById("c4").checked;
	d4checked = document.getElementById("d4").checked;
	e4checked = document.getElementById("e4").checked;
	f4checked = document.getElementById("f4").checked;
	g4checked = document.getElementById("g4").checked;
	
		if ((a4checked == true) && (b4checked == false) && (c4checked == false) && (d4checked == false) && (e4checked == false) && (f4checked == false) && (g4checked == false)) {
		
		document.getElementById("ans4").innerHTML = "Correct!";
		document.getElementById("ans4").style.color = "green";
		
		} else
		
		{
		
		document.getElementById("ans4").innerHTML = "Try again!";
		document.getElementById("ans4").style.color = "red";
		
	}
}



