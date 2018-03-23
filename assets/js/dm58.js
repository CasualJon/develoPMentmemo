//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">I hate being reminded about TLG, too, so I just do it so I can get on with life and complain about things of real importance...</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">63</span>:<i> Remember, it is often easier to do foolish paperwork than to fight the need for it. Fight only if it is a global issue which will save much future work.</i></p>";

memoString += "<p>You need energy and confidence to make a stand when it counts.</p>";

memoString += "<p>Conflict takes energy, increases your stress levels and cognitive load, and can cost you influence. If you’re fighting over the little things that don’t matter, that’s squabbling.</p>";

memoString += "<p>Squabbling can leave you ill prepared for important battles.<br />";
memoString += "Fight when it matters, back off when it doesn’t.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
