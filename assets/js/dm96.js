//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\"><a href=\"https://www.youtube.com/watch?v=iS1g8G_njx8&t=0m40s\" target=\"_blank\">Problem.</a></span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">90</span>:<i> The seeds of problems are laid down early. Initial planning is the most vital part of a project. Review of most failed projects or of project problems indicates that the disasters were well planned to happen from the start.</i></p>";

memoString += "<p>Even simple tasks need a plan. For example, I've never been able to will a pot of coffee into existence (though that never stops me from trying).<br />";
memoString += "There are requirements to produce coffee: materials, tools, time, knowledge... If you have no map of how to get from \"no coffee\" to \"ready for conference calls,\" things could be disastrous for you and most others in your building.</p>";

memoString += "<p>Without a plan of sufficient detail, you have nothing against which to measure progress; and with no way monitor a project you have no control - - you're no longer managing.</p>";

memoString += "<p>Even so, just having a plan doesn't necessarily mean it’s any good. Continuously tailor and refine that plan to meet the project's needs and objectives from a firm footing in reality with new information as the project progresses.</p>";

//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
