//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">\"I would assume that you were going to offer me refreshment, but the evidence so far suggests that that would be optimistic to the point of foolishness.\"</span><br />";
memoString += "<small><span class=\"article-info\">Albus Dumbledore<br />";
memoString += "<small>HP&THBP</small></span></small></p>";

memoString += "<p><i></i><span id=\"vocab\">Optimism Bias</span><i> (also known as unrealistic or comparative optimism) is a cognitive bias that causes a person to believe that they are less at risk of experiencing a negative event compared to others.</i></p>";

memoString += "<p>It's optimism bias than can lead to Planning Fallacy... a phenomenon where predictions about how much time will be needed to complete a future task are underestimates.</p>";

memoString += "<p>What causes people to optimistically believe that risks won't affect them?<br />";
memoString += "An abbreviated list of contributing factors include target fixation, imperfect information, and mood.</p>";

memoString += "<p>Why do rational people play the lottery? Target fixation.<br />";
memoString += "Picturing yourself walking the beach with a piña colada, retired by the end of the year? Yea, join the club, most everyone else does, too. People become focused on what they want to have happen, which can mute things in conflict with that picture.</p>";

memoString += "<p>Why do people feel they can avoid known dangers? Imperfect information.<br />";
memoString += "You probably know yourself better than you do others. That disastrous situation some other chumps couldn't avoid? They didn't know what they were doing, but not me; I got this and I won't let that happen.</p>";

memoString += "<p>Mood? People are inclined to make bigger bets and take larger risks than normal when they're in a good mood, whereas those depressed often view the world with negative bias.</p>";

memoString += "<p>No one is immune, but you can guard against it so just be aware it's out there. When you make plans, face them in the light of reality and evaluate how they were made.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
