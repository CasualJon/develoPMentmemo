//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><small><font color=\"black\">What constitutes a project is something we’ve covered before, and a project implementing any Epic application is a pretty big ordeal.<br />";
memoString += "For all the effort and time devoted to projects we tackle, for the scale and scope of projects we run, it’s simple enough to forget that these projects are but a piece of the larger whole.</font></small></p><br />";

memoString += "<p><b><font color=\"purple\">Programs</font></b><i> are groups of related projects, subprograms, and program activities managed in a coordinated way to obtain benefits not available from managing them individually.</i></p>";

memoString += "<p><b><font color=\"purple\">Portfolios</font></b><i> are projects, programs, subportfolios, and operations managed as a group to achieve strategic objectives.</i></p>";

memoString += "<p>Within an integrated install, it’s easy to see a Program in action: individual component projects are sequenced, paced, and leveled to produce a result where the benefit derived is greater than the sum of benefits those component projects could deliver independently. ";
memoString += "Kinda like a symphony… Sure, strings and brass standing alone sound just fine, but when you organize and time them in just the right way, you get something better than the two apart.</p>";

memoString += "<p>Portfolios are an enterprise’s plan of attack to meet the future head on. Projects and Programs within a Portfolio are the incremental goals meant to move an organization from mission to vision. ";
memoString += "An Epic enterprise implementation program is typically a forward pass on the drive to improve patient safety, better manage populations, streamline revenue cycle operations through charge capture vertical integration alignment (buzz, buzz)... but there will be many more plays on the drive to achieve those objectives than just getting to go-live.";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
