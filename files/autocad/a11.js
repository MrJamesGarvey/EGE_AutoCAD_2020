// JavaScript Document

function writeNavBar() {
	
document.write("<p><a href='../../../index.htm'>Home</a> &#8226; <a href='../draw/draw_a11page0.htm'>Drawing in AutoCAD</a> &#8226; <a href='../ortho/ortho_a11page0.htm'>Creating an Orthographic Projection in AutoCAD</a> &#8226; <a href='../pic/pic_a11page0.htm'>Creating Isometric Pictorials in AutoCAD</a> &#8226; <a href='../dim/dim_a11page0.htm'>Dimensioning in AutoCAD</a> &#8226; <a href='../sec/sec_a11page0.htm'>Sectioning in AutoCAD</a> &#8226; <a href='../adv/adv_a11page0.htm'>Advanced Drawing in AutoCAD</a> &#8226; <a href='../tol/tol_a11page0.htm'>Tolerancing in AutoCAD</a> &#8226; <a href='../fast/fast_a11page0.htm'>Drawing Threads in AutoCAD</a> &#8226; <a href='../assem/assem_a11page0.htm'>Creating Assembly Drawings in AutoCAD</a> </p>");
	
}

function writeLeftBar() {
	
document.write("1) <a href='../draw/draw_a11page0.htm'>Drawing in AutoCAD</a> <br/>2) <a href='../ortho/ortho_a11page0.htm'>Creating an Orthographic Projection in AutoCAD</a> <br/> 3) <a href='../pic/pic_a11page0.htm'>Creating Isometric Pictorials in AutoCAD</a> <br/> 4) <a href='../dim/dim_a11page0.htm'>Dimensioning in AutoCAD</a> <br/>5) <a href='../sec/sec_a11page0.htm'>Sectioning in AutoCAD</a> <br/> 6) <a href='../adv/adv_a11page0.htm'>Advanced Drawing in AutoCAD</a> <br/> 7) <a href='../tol/tol_a11page0.htm'>Tolerancing in AutoCAD</a> <br/>8)  <a href='../fast/fast_a11page0.htm'>Drawing Threads in AutoCAD</a> <br/> 9) <a href='../assem/assem_a11page0.htm'>Creating Assembly Drawings in AutoCAD</a> <br/> </p>");
	
}
function highlight_current() {
    var aTags = document.getElementsByTagName('a');
    var curLoc = document.URL.toLowerCase();
    var navLinks = document.getElementById('navigation').getElementsByTagName('a');
    for(i=0;i<aTags.length;i++) {
        if(aTags[i].href.toLowerCase() == curLoc) {
            aTags[i].style.color = '#B1040D';
            aTags[i].style.fontWeight = 'bold';
        }
    }
    for(i=0;i<navLinks.length;i++) {
	link = navLinks[i].href.toLowerCase();
	if(link.indexOf('index.htm') > -1) {continue;}
	subLink = link.substring(0,link.lastIndexOf('/'));
        if(curLoc.indexOf(subLink) > -1) {
            navLinks[i].style.color = '#B1040D';
            navLinks[i].style.fontWeight = 'bold';
        }
    }
}

window.addEventListener('load', function(e) {
  highlight_current();
});