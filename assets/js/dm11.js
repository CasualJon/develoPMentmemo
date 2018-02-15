//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">I take a more leisurely approach to my Friday routines on the day after Thanksgiving... an opportunity afforded by low attendance, few emails, and the lack of critical deadlines just after the holiday. ";
memoString += "In Implementation, allowing our drive and competitiveness to take the front seat helps get us – and the project – to go-live; but there are risks to constantly running at 100%. As with any risk management plan, ";
memoString += "<a href=\"https://www.projectmanager.com/blog/whats-positive-risk-on-projects\" target=\"_blank\">exploit positive risk</a> where appropriate and possible - - like realizing an opportunity to slow down (even if just for a morning).<br /><br />";
memoString += "For my work, I use this opportunity to look backwards. Is there a decision somewhere past that I regret? What can I learn from that?<br />";
memoString += "This kind of retrospective analysis is something we already do within projects.</span></p><br />";

memoString += "<p>A <span id=\"vocab\">Phase Gate</span><i> is a review at the end of a phase in which a decision is made to continue to the next phase, to continue with modification, or to end a project or program.</i></p>";

memoString += "<p>If you don’t know <a href=\"https://www.theatlantic.com/technology/archive/2011/11/the-horrible-thing-that-happened-to-enos-the-chimp-when-he-orbited-earth-50-years-ago/249241/\" target=\"_blank\">the story of Enos</a>, I encourage you to read the linked, short account of his heartbreaking space flight.</p>";
memoString += "<p>The programs and projects at NASA are run by individuals who, like us, try to deliver their absolute best every project. Given the drive pushing each of us to deliver now, sometimes consequences for the future become afterthoughts. Sure the workflow fits now, but is it sustainable? ";
memoString += "Without looking backwards learn what can be learned from your project and codifying those lessons, you’re at risk of repeating mistakes.</p>"

memoString += "<p>If unfamiliar with Agile project practices, the Scrum Guide outlines agile Software Development practices <a href=\"http://www.scrumguides.org/docs/scrumguide/v1/Scrum-Guide-US.pdf#zoom=100\" target=\"_blank\">here</a> and is a great introduction to Agile practices. ";
memoString += "Agile has a large focus is placed in adaptation to evidence and lessons learned through Reviews and Retrospectives.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
