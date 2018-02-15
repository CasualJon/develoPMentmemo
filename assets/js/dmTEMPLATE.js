//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><small><b><font color=\"black\">HeaderHere</font></b></small></p>";

memoString += "<p><b><font color=\"purple\">Term</font></b><i> .</i></p>";

memoString += "<p>Details.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
