//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"vocab\">Parkinson's Law</span><i> work expands so as to fill the time available for its completion.</i></p>";

memoString += "<p>Meetings? Hooray!<br />";
memoString += "Um, wait. Hooray?.<br />";
memoString += "Meetings can accomplish a lot of good. In fact, meetings are a Tool and Technique of many of Project Management processes:</p>";

memoString += "<p style=\"text-align:center\"><img src=\"./assets/img/memoImages/monitorControlWork.png\"><br />";
memoString += "<small><small><span class=\"article-info\">Image source: <a href=\"https://www.pmi.org/pmbok-guide-standards/foundational/pmbok\" target=\"_blank\">The PMBOK Guide - Fifth Edition, PMI</a></span></small></small></p>";

memoString += "<p>But, meetings can also be incredibly wasteful.<br />";
memoString += "Heard of Parkinson’s Law? Maybe in relation to <a href=\"https://chiefexecutive.net/following-mattels-lead-improving-decision-making-reducing-meeting-bureaucracy/\" target=\"_blank\">Mattel’s (former) CEO</a>?<br />"
memoString += "Well, there are two Parkinson’s Laws, and the first is about the fluidity of work!</p>"

memoString += "<p>Ever schedule a 1 hour meeting with - generously - perhaps 20 minutes of content? Remember how that meeting still took the full hour?<br />";
memoString += "Ever had 1&#189; hours of follow-up to do, but only 45 minutes in the airport? Then remember when you knocked it out of the park in half the time?</p>";

memoString += "Work is like water: it will fill the space given.";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
