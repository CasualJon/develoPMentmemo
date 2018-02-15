//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><small><font color=\"black\">Before you open a door, it’s hard to see what’s on the other side. You can call in experts with fancy tools to get a blurred image of what’s behind the door, ";
memoString += "but that’s still an estimate and you don’t really know with a certainty. For you philosophers, yes… empiricism vs. rationalism.<br />";
memoString += "But, here’s a cool secret: no one trusts you if you claim to know everything.</font></small></p><br />";

memoString += "<p><b><font color=\"purple\">Progressive elaboration</font></b> <i>is the iterative process of increasing the level of detail in a project management plan as greater amounts of information and more accurate estimates become available.</i></p>";

memoString += "<p>Progressive elaboration is not a technique to hide laziness, but the start of a plan to account for unknowns in the existing plan.<br />";
memoString += "Prototypes are not finished products for a reason, and your first pass at a detailed plan won’t really be all that detailed.</p>";

memoString += "<p>Lunch with your analysts during training won’t identify strengths and weaknesses, but certification tests will. If someone is struggling with users and security but great with the rule builder, the logical thing to do is to account for these competencies in your plan.</p>";
memoString += "<p>Progressive elaboration is an answer to the problem installing groups always bring up - - \“we don’t know what we don’t know…\” ";
memoString += "So plan what you do know, and plan to make more specific elaborations when you learn what you didn't know before.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
