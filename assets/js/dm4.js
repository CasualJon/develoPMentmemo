//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><small><font color=\"black\">With daily interactions, I put effort into avoiding overt use of industry jargon, but sometimes pulling from a standard lexicon makes a message easier to understand.<br/>";
memoString += "<img src=\"./assets/img/memoImages/dogbertZombie.jpg\"><br />";
memoString += "Well, often, anyway... As long as everyone understands the convention :)</font></small></p><br />";

memoString += "<p>A <b><font color=\"purple\">Work Breakdown Structure (WBS)</font></b><i> is hierarchical decomposition of the total scope of work to be carried out by the project team to accomplish the project objectives and create the required deliverables.</i></p>";

memoString += "<p>A WBS is created by dividing and subdividing project deliverables and work down to snack-size. Say you’re tasked with slaying a dragon… what must you do to get there?<br />";
memoString += "At the least, you probably need a horse, some armor, a lance, a bit of food, information on where to find the dragon, and <a href=\"https://www.youtube.com/watch?v=_YYmfM2TfUA\" target=\"_blank\">a massive Rocky training montage</a> to prepare for the fight.</p>";

memoString += "<p>In <i>small</i> projects, that might be enough, but we continue to decompose scope elements within a WBS to a level where cost and duration can be estimated and managed (called a work package).</p>";

memoString += "<p>To get a horse you must inform your squire who will head to the stable. Your squire needs to feed, water, brush, and saddle the horse before bringing it to the castle gate for a big send-off celebration.<br />";
memoString += "Performing this decomposition helps define all the minutia as well as uncover specifics you may not yet have thought about. Also, a WBS can enable project managers to build a bottom-up estimate of the time needed to complete some or all of the project from estimates you can assign to the individual work packages.</p>";

memoString += "<img src=\"./assets/img/memoImages/dragonWBS.png\" width=\"600\"><br /><br />";

memoString += "<p>Having this information helps you define the full scope of work for the project, and provides an input to scheduling activities (where we can address things like <i>Training</i> should be sequenced before <i>Find Dragon</i>).</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
