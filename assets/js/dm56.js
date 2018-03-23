//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Every day is not <a href=\"https://www.youtube.com/watch?v=8CPlF-IEkXQ\" target=\"_blank\">a Good Day</a>... sometimes there are just too many problems causing headaches (literally and figuratively).</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">3</span>:<i> The source of most problems is people but damned if they will admit it. Know the people working on your project, so you know what the real weak spots are.</i></p>";

memoString += "<p>On your projects, you’ll find personalities scattered across the spectrum.</p>";

memoString += "<p>You will have analysts who do without thinking while others only think of doing.<br />";
memoString += "You will have CIOs who drive project direction by blunt, combative imperatives while others guide through subtle, Socratic questions.</p>";

memoString += "<p>You will have an ID who just can’t stop micromanaging.<br />";
memoString += "You will have an ID who trusts too much and is too hands-off.</p>";

memoString += "<p>There will be times you need a message carried to Garcia, though also times where you need strict adherence to exacting direction.<br />";
memoString += "It’s a requirement to carry soft skills in your toolbox. You will not have a perfect personality within your team for every task that needs doing, so aim to be interpersonally astute... Collect an accurate impression of all team members’ habits, standards of work, nonverbal cues, and work ethic. Choose to ignore these indicators at the project’s (and your own) peril.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
