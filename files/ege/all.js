// JavaScript Document

function writeFooter() {
	
	document.write("<p>Engineering Graphics Essentials Independent Learning Content - Copyright 2016 Kirstie Plantenberg </p>");
	
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