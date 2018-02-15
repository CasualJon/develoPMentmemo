//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><small><font color=\"black\">A process is a series of interrelated actions taken to achieve a particular end... process helps break down a vision into achievable goals, providing a place to start and helping to keep the project moving. 5 Process Groups structure the processes within project management so that, in aggregate, these groups (and their component processes) make up the <i>Project Management Process</i>.</font></small></p><br />";

memoString += "<p><i>Inpatient devs use EMC&#178;.</i><br />";
memoString += "That’s an easy way to remember the 5 project management process groups: IPEMCC...<br />";
memoString += "Initiation, Planning, Executing, Monitoring and Controlling, Closing</p>";

memoString += "<p>The process groups are not one-off aspects of a project, but overlapping and interacting iterative elements.</p>";

memoString += "<p>Throughout each phase, you will perform actions belonging to each of the process groups in some part. Illustrated by <u>A Guide to the Project Management Body of Knowledge</u> (PMBOK), outputs from processes from a group can represent inputs to another and will be performed over, and over again until the work is done, until the desired product, service, or result is delivered.</p>";
memoString += "<img src=\"./assets/img/memoImages/processGroups.png\">";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
