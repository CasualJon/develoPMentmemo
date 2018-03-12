//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Some argue that there is no growth without conflict… Without jumping down that rabbit hole, let’s talk about how to deal with conflict (at least, according to the PMP exam).</span></p><br />";

memoString += "<p><span id=\"vocab\">Conflict Management</span><i> is handling, controlling, and guiding a conflictual situation to achieve a resolution.</i></p>";

memoString += "<p>With more than one person on the project, you have a team. With a team, you have conflict.</p>";

memoString += "<p>Scarce resources, scheduling priorities, and personal workstyles are among the sources of conflict with in a project. Within a team, the amount of conflict can be reduced by ground rules, group norms (culture), communication, clear expectations, role definition, etc.; but conflict itself cannot be eliminated.</p>";

memoString += "<p>Conflict is not exclusively bad.<br />";
memoString += "Differences of opinion when evaluating a wider range of perspectives can lead to increased creativity and better decision making, and successful conflict management results in greater productivity and positive working relationships.</p>";

memoString += "<p><u>Strategies for conflict management</u></p>";

memoString += "<ul><li><b>Withdraw/Avoid</b>: Retreating from an actual or potential conflict situation; postponing the issue to be better prepared or to be resolved by others.<br /><small><small>There is no resolution, which makes this the worst of techniques in the long-term... an ostrich burying its head in the sand, a diva storming out of the room; this is a \"lose-lose\" (non)resolution.</small></small></li><br />";

memoString += "<li><b>Smooth/Accommodate</b>: Emphasizing areas of agreement rather than areas of difference; conceding one’s position to the needs of others to maintain harmony and relationships.<br /><small><small>Not a permanent solution because the root issue remains buried and unresolved. This would be a \"lose-lose\" solution.</small></small></li><br />";

memoString += "<li><b>Force/Direct</b>: Pushing one’s viewpoint at the expense of others; offering only win-lose solutions, usually enforced through a power position to resolve an emergency.<br /><small><small>Because I’m the boss and I said so... A permanent (not necessarily the best) resolution, particularly when trying to build a team. This would be a \"win-lose\" solution.</small></small></li><br />";

memoString += "<li><b>Compromise/Reconcile</b>: Searching for solutions that bring some degree of satisfaction to all parties in order to temporarily or partially resolve the conflict.<br /><small><small>A give-and-take solution that, when made with firm commitment, is a permanent resolution. In this, neither side would win or lose.</small></small></li><br />";

memoString += "<li><b>Collaborate/Problem Solving</b>: Incorporating multiple viewpoints and insights from differing perspectives; requires a cooperative attitude and open dialogue that typically leads to a consensus and commitment.<br /><small><small>The best way to resolve conflict – the idea is that there is one right solution to a problem which exists. All facts and viewpoints are evaluated and shared, and the facts will bear out the solution where a true consensus is formed to create a permanent, \"win-win\" resolution.</small></small></li></ul>";

memoString += "<p>Team members are initially responsible for resolving conflict when differences become a negative factor – trials and struggles, if successfully navigated, will bring a team more solidly together. Only if conflict escalates does the project manager facilitate a satisfactory resolution by addressing it early, directly, and collaboratively (and where necessary, in private).</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
