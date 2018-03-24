//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Large conferences offer lots of sessions, and lots of learning... not to boost your ego or anything, but <a href=\"./assets/img/memoImages/dm93_calvin.jpg\" target=\"_blank\">you can also learn plenty from yourself</a> with a little introspection and plenty of objectivity.</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">58</span>:<i> Occasionally things go right - - the lesson learned here is: Try to duplicate that which works.</i></p>";

memoString += "<p>When something goes wrong, we look for root causes and we fix the problems. We manage by exception.</p>";

memoString += "<p>However, when was the last time you sat down and applied the same critical eye to something that went well? Analyze not just the failures, but also the successes, and then use that knowledge to build upon strengths.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
