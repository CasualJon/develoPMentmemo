//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Projects are time-boxed efforts - defined start date, defined end date - to produce something that doesn’t already exist.<br />";
memoString += "For you and me, delivery is complete when the goals and objectives of the project are accomplished to the satisfaction of the <i>stakeholders</i>.</preamble></p><br />";

memoString += "<p><i>A</i> <span id=\"vocab\">Stakeholder</span><i> is an individual, group, or organization who may affect, be affected by, or perceive itself to be affected by a decision, activity, or outcome of a project.</i></p>";

memoString += "<p>There are all kinds of stakeholders: active, passive, happy, interested, angry, disinterested... old school vampire and witch hunters.</p>";

memoString += "<p>The pool of stakeholders is wider than you, the project team, and your users; it includes patients, consultants, 3rd party vendors, and that nurse receiving faxed orders at that one doc’s office across town. ";
memoString += "All stakeholders have something riding on your project, something to gain or lose depending on project outcomes.</p>";

memoString += "<p>Understanding the benefit or harm others risk by your efforts lets you see another’s perspective of the project, and if you’re sharp enough to read it, that perspective can help you shape interactions, maximize benefits, and minimize harm.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
