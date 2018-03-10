//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"vocab\">Manage Communications</span><i> is the process of creating, collecting, distributing, storing, retrieving, and the ultimate disposition of project information in accordance with the communications management plan.</i></p>";

memoString += "<p>A <span id=\"vocab\">Communications Management Plan</span><i> is a component of the project, program, or portfolio management plan that describes how, when, and by whom information about the project will be administered and delivered.</i></p>";

memoString += "<p>Fred Brooks is sharp... the guy built supercomputers for the NSA, sits atop more awards than dragons do gold (including an award from Cambridge named with a phrase he himself coined – “computer architecture”), and enabled you to use lowercase letters in email by making the decision that a byte should be 8 bits rather than 6.</p>";

memoString += "<p>Having held the reigns of many projects, not all of which were successful, Fred published <u>The Mythical Man Month</u> as an analysis of one such failure. ";
memoString += "One of the largest takeaways from that retrospective is now referred to as <b>Brooks’ Law</b>:<br /> <i>\"Adding manpower to a late software project makes it later.\"</i></p>";

memoString += "<p>Rarely can the tasks and deliverables (work packages) of a project be performed in a vacuum, so communication is necessary to coordinate activities.<br />";
memoString += "Fred described the group intercommunication formula as <b>n(n-1)/2</b></p>";

memoString += "<p style=\"text-align:center\"><img src=\"./assets/img/memoImages/groupIntercomFormula.png\"><br /></p>";

memoString += "<p>So, a 3 person team has 3 communication pathways, but a 10 person team has 45...<br />";
memoString += "The communication required to coordinate a larger, less nimble team swiftly dominates team efforts and detracts from the marginal benefit delivered by that added investment of people. For every additional team member, the communication pathways compound with an additional connection to every other team member.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
