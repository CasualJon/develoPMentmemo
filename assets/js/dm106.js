//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Everyone is just trying to get their life together.  Sometimes people try to take a shortcut...<br />";
memoString += "but integrity shows through.</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">17</span>:<i> Never try to get even for some slight by another on the project.  It is not good form -- it  puts you on the same level as the other person – and often ends up hindering the project getting done.</i></p>";

memoString += "<p>You've probably been thrown under the bus before, or perhaps had someone pass your idea or achievement off as their own.</p>";

memoString += "Refrain from being petty, remain professional, suck it up, and move on.  In the long run, inadequacies come to light and your track record of successes will win out...  That's what you should want to be known for instead of spite.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
