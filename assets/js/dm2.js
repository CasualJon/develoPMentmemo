//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><big>Project constraints restrict the actions of your team, even dictate the actions of your team.<br />";
memoString += "You’ll encounter constraints across a wide distribution of needs: time, budget, scope, quality, schedule, resources, technology, legal, etc.<br />";
memoString += "But, three of these are special, and these three live in a love triangle...</big></p>";

memoString += "<p><b>Triple constraint</b> <i>is a graphic aid to represent the interrelationship between the key attributes of Time, Cost, and Scope in a project and their unique impact on the quality of your finished product.</i></p>";

memoString += "<img src=\"./assets/img/triple_constraint.png\">";

memoString += "<p>Hopefully they still teach this in PM Camp.<br />";
memoString += "Geometry… Shrink any side on a triangle and the area is reduced, so in the above, cut back on the schedule without changing budget or scope and you’ll have a lower quality final result.<br />";
memoString += "To deliver satisfaction on all promises, monitor and manage the triple constraints. If scope climbs while time and cost remain static, what’s your plan to have the team complete more work across the same period?";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
