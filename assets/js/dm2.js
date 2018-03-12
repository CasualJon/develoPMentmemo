//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Project constraints restrict the actions of your team, even dictate the actions of your team.<br />";
memoString += "You’ll encounter constraints across a wide distribution of needs: time, budget, scope, quality, schedule, resources, technology, legal, etc.<br />";
memoString += "But, three of these are special, and these three live in a love triangle...</span></p><br />";

memoString += "<p><span id=\"vocab\">Triple Constraint</span> <i>is a graphic aid to represent the interrelationship between the key attributes of Time, Cost, and Scope in a project and their unique impact on the quality of your finished product.</i></p>";

memoString += "<p style=\"text-align:center\"><img src=\"./assets/img/memoImages/dm2_triple_constraint.png\"><br /></p>";

memoString += "<p>Hopefully they still teach this in PM Camp.<br />";
memoString += "Geometry… Shrink any side on a triangle and the area is reduced, so in the above, cut back on the schedule without changing budget or scope and you’ll have a lower quality final result.</p>";

memoString += "<p>To deliver satisfaction on all promises, monitor and manage the triple constraints. If scope climbs while time and cost remain static, what’s your plan to have the team complete more work across the same period?";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
