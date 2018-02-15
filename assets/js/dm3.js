//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><small><font color=\"black\"><i>Projectizing a matrixed functional organization</i> is a phrase that just might win you buzzword bingo on a conference call.<br />";
memoString += "This is assuming, of course, that you remain conscious after the whopper of a facepalm you’d give yourself upon hearing it…</font></small></p><br />";

memoString += "<p><i>Most organizational structure arrangements are within one of three categories: functional, projectized, or matrix.</i></p>";

memoString += "<p>This structure dictates how projects need to be managed because it defines how work is assigned and accountability is enforced.<br />";

memoString += "<ul><li><b>Functional Organization:</b> This is the traditional way of organizing a business, functional organizations split their structure by its various functions (HR, Marketing, IT...)</li>";
memoString += "<li><b>Projectized Organization:</b> In this structure, each project manager reports directly into the CEO. Each project manager will have their own full-time team members and staff. This will only suit an organization where projects and their delivery are the core business</li>";
memoString += "<li><b>Matrix Organizations:</b> Employees in a matrix organization are structured vertically in their functions (lawyer, developer, analyst...), but horizontally to a given project manager or multiple project managers</li>";

memoString += "<ul><li><b>Weak Matrix:</b> functional managers have all the power in a weak matrix, and project managers act as project organizers with little or no authority</li>";
memoString += "<li><b>Balanced Matrix:</b> each manager has responsibility for their parts of the project organization and staff get assigned based on the needs of the project not on the strength of the manager’s position</li>";
memoString += "<li><b>Strong Matrix:</b> power rests with the project manager, and they are able to force the functional managers to give them their best people. The project managers can then negotiate these resources among themselves, leaving out the functional managers</li></ul></ul></p";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
