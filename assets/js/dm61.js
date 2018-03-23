//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">How simple it is for Cookie Monster: Cookies are priority, Cookies take precedence.<br />";
memoString += "Turns out, if you look at Google’s Ngram viewer, <a href=\"https://books.google.com/ngrams/graph?content=priority%2C+priorities&year_start=1800&year_end=2000&corpus=15&smoothing=3&share=&direct_url=t1%3B%2Cpriority%3B%2Cc0%3B.t1%3B%2Cpriorities%3B%2Cc0\" target=\"_blank\">\"Priority\" really wasn’t pluralized until the modern era, and Priority gives way to Priorities</a>.</span></p><br />";

memoString += "<p><i>The </i><span id=\"vocab\">Precedence Diagraming Method (PDM)</span><i> is a technique used for constructing a schedule model in which activities are represented by nodes and graphically linked by one or more logical relationships to show the sequence in which the activities are to be performed.</i></p>";

memoString += "<p>PDM (also known as Activity on Node [AON]) is the most common way activities are visually sequenced in project management. Activities are shown as rectangles (nodes) with arrows illustrating the relationships between them.<br />";
memoString += "<small><small>The alternative would be the Arrow Diagramming Method (ADM, also known as Activity on Arrow [AOA]).</small></small></p>";
memoString += "<p style=\"text-align:center\"><img src=\"./assets/img/memoImages/dm61_cookies.png\" width=\"500\"></p>";

memoString += "<p>Previously, we walked through properties of dependencies, and today we look to define of the relationship dependencies represent between sequenced activities. The arrows can help interpret the <i>logical relationships</i> of dependencies between tasks... According to the <i>Project Management Body of Knowledge:</i></p>";

memoString += "<ul><li><b>Finish-to-start (FS)</b>: A logical relationship in which a successor activity cannot start until a predecessor activity has finished.<br />";
memoString += "<i>Example: The awards ceremony (successor) cannot start until the race (predecessor) has finished.</i><br />";
memoString += "This is the most common type of activity sequencing, and illustrated above.</li><br />";

memoString += "<li><b>Finish-to-finish (FF)</b>: A logical relationship in which a successor activity cannot finish until a predecessor activity has finished.<br />";
memoString += "<i>Example: Writing a document (successor) cannot finish before editing the document (predecessor) can finish.</i></li><br />";

memoString += "<li><b>Start-to-start (SS)</b>: A logical relationship in which a successor activity cannot start until a predecessor activity has started.<br />";
memoString += "<i>Example: Level concrete (successor) cannot begin until pour foundation (predecessor) begins.</i></li><br />";

memoString += "<li><b>Start-to-finish (SF)</b>: A logical relationship in which a successor activity cannot finish until a predecessor activity has started.<br />";
memoString += "<i>Example: The first security guard shift (successor) cannot finish until the second security guard shift (predecessor) starts.</i></li></ul>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
