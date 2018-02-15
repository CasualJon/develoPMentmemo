//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><small><b><font color=\"black\">Over the course of a project, there will be many things for which you won’t have an immediate answer.<br />";
memoString += "Many resources exist to help you seek and find the information required, but sometimes the best way to get a quick and accurate answer – one taking into account all of the variables your scenario presents – is to talk to someone.</font></b></small></p>";

memoString += "<p><b><font color=\"purple\">Expert Judgment</font></b><i> is judgment provided based upon expertise in an application area, knowledge area, discipline, industry, etc., appropriate for the activity being performed. Such expertise may be provided by any group or person with specialized education, knowledge, skill, experience, or training.</i></p>";

memoString += "<p>In project management, the term <i>Tools and Techniques</i> is exactly what it sounds like... Tools and Techniques themselves are the magic you work to take a set of inputs and transform them into outputs and deliverables.<br />";
memoString += "Of the 47 processes identified in the PMBOK Guide, 28 include Expert Judgment as one of the Tools and Techniques applied.</p>"

memoString += "<p>Experts can come from the body of stakeholders: consultants, subject matter experts, the PMO, industry experts, and so on. Experts can also be colleagues and friends.<br />";
memoString += "The application of expertise to a complex situation can save you and your team a lot of pain, but when the time of that expert is not dedicated to your project, do be careful not to overuse their generosity and cause them pain.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
