//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">\"I am always ready to learn, although I do not always like being taught...\"</span><br />";
memoString += "<small><span class=\"article-info\">Winston Churchill</span></small></p>";

memoString += "<p><i></i><span id=\"vocab\">18</span>:<i> If you cultivate too much egotism, you may find it difficult to change your position – especially if your personnel tell you that you are wrong.  You should instill an attitude on the project whereby your personnel know they can tell you of wrong decisions.</i></p>";

memoString += "<p>Good ideas can come from anywhere.</p>";

memoString += "<p>Being the smartest person in the room does not make you right. (Smart people already know this)<br />";
memoString += "If you haven't cultivated an environment of open exchange and idea sharing within the project, or pride backs you into a corner, any success is not altogether yours, but all failures certainly belong to you.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
