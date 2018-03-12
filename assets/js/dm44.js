//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">So there I was, minding my own business hunting sand dollars the beach, and suddenly I noticed: <a href=\"./assets/img/memoImages/dm44_tsunami_drawback.jpg\" target=\"_blank\"><i>\"hey, why is all the water leaving?\"</i></a></span></p><br />";

memoString += "<p><i>A</i> <span id=\"vocab\">Trigger Condition</span><i> is an event or situation that indicates that a risk is about to occur.</i></p>";

memoString += "<p>We plan for the unexpected in projects, both the good and the bad.</p>";

memoString += "<p>Identifying, analyzing, and planning a response for various risks is a valuable exercise to better understand your project and its environment, but the value of a plan itself is only realized when put into action.</p>";

memoString += "<p>When you’re in the middle of the forest, it can be difficult to smell smoke.<br />";
memoString += "Sometimes, even when we recognize warning signs that flames (or generous leprechauns) approach, our optimism, pessimism, or nearness to the immediate situation can cloud things. Or, perhaps you don’t see the warning signs and those who do don't understand the meaning of what they notice?</p>";

memoString += "<p>This is where a trigger condition can help, the definitive logic to outlines the conditions of when to enact your plans: If... Then... Else:<br />";
memoString += "<i>If</i> the ocean suddenly retreats from the beach... <i>then</i> quickly get to high ground... <i>else</i> keep scouting for sand dollars.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
