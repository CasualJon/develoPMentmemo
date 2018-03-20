//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">21 days to Halloween! Last year, I handed out cans of beer to all the attendant parents of Trick-or-Treaters, and I plan to do it again this year.</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">Consistency</span><i> is conformity in the application of something, typically that which is necessary for the sake of logic, accuracy, or fairness.</i></p>";
memoString += "<p style=\"text-align:center\"><img src=\"./assets/img/memoImages/dm54_busschedule.jpg\"><br />";
memoString += "<small><span class=\"article-info\">Can’t be bothered to type more than “Sats” before 10am?<br />";
memoString += "Hate working Satutdays, too?<br />";
memoString += "Afternoon service only on Saturdays, then?</span></small></p>";

memoString += "<p>Imagine your frustration if there were no consistency in even trivial things...<br />";
memoString += "What apocalypse would Microsoft visit upon this world if they begin randomly reordering these three buttons (<img src=\"./assets/img/memoImages/dm54_windows.png\" height=\"14\" />) every time we restarted the computer?</p>";

memoString += "<p>Being consistent – with products, processes, practices, and deliverables – helps set and service expectations.<br />";
memoString += "Consistency drives standards. Standards provide measurement. Measurement enables accountability.</p>";

memoString += "<p>Through consistency and accountability we build trust, respect, and credibility. Small things like spell check and formatting provide simplicity and ease of use. Large things like on-time PR delivery and an annual UGM provide dependability.</p>";

memoString += "<p>Consistency isn’t always noticed, but inconsistency is all too easy to see.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
