//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">ou have to be able to <a href=\"https://www.youtube.com/watch?v=FscIgtDJFXg\" target=\"_blank\">clearly see all obstacles in your way...</a></span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">101</span>:<i> Never make a decision from a cartoon. Look at the actual hardware or what real information is available, such as layouts. Too much time is wasted by people trying to cure a cartoon whose function is to explain principle.</i></p>";

memoString += "<p>To me, this one is about the need to have eyes on a problem.<br />";
memoString += "Things can (and do) get lost in translation as one tries to explain an issue to another. If it takes more than a few sentences to explain or more than a few clarifying questions to understand, you should figure out a way to see what they see to make sure you're solving the correct problem.</p>";

memoString += "<p>Partly, we value site visits and time directly with customers and stakeholders because they're an opportunity to actually see, understand, and better focus our attention on the right things.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
