//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">\"Be kind whenever possible. It is always possible.\"</span><br />";
memoString += "<small><span class=\"article-info\">Dalai Lama XIV</span></small></p>";

memoString += "<p><i></i><span id=\"vocab\">87</span>:<i> Bastards, gentlemen, and ladies can be project managers. Lost souls, procrastinators, and wishy-washers cannot.</i></p>";

memoString += "<p><i></i><span id=\"vocab\">109</span>:<i> Gentlemen and ladies can get things done just as well as bastards. What is needed is a strong will and respect -- not \"strong arm\" tactics. It must be admitted that the latter does work but leaves a residue that has to be cleaned up.</i></p>";

memoString += "<p>When a large emphasis of the Project Manager's role is on delivering results, delay and indecision – irrespective of cause – is worthless. But, sometimes in the push to get it done, to deliver; I wind up a bit short or sharp, particularly in email.</p>";

memoString += "<p>I know when I'm guilty, but that knowledge does not excuse it.<br />";
memoString += "Instead, it means there are people who must work with me that would rather not. I could pretend that it's not my problem, but it is...</p>";

memoString += "<p>According to PMI, Project Management is 90% communication.<br />";
memoString += "Another PMI statistic to build upon that thought: <a href=\"./the-essential-role-of-communications.pdf\" target=\"_blank\">56% of budgetary risk among all projects is due to ineffective communications</a>.<br />";

memoString += "<p>Consider the part relationships play in communication.<br />";
memoString += "Would you care to listen to or read my opinion if I'm a jerk?<br />";
memoString += "Do you want to contact me, even for an escalation, if I'm a jerk?<br />";
memoString += "The lesson: don't be a jerk.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
