//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Projects can be similar, but no two are ever the same - - even when you specialize in implementing a specific software package.<br />";
memoString += "Different team, different scope, different priorities, different objectives… It’s both common sense and good practice that we put thoughtful effort into planning a project’s structure around it’s unique nature.</span></p><br />";

memoString += "<p><span id=\"vocab\">Tailoring</span><i> is the act of carefully selecting processes and related inputs and outputs contained within the PMBOK Guide to determine a subset of specific processes that will be included within a project’s overall management approach.</i></p>";

memoString += "<p>Tailoring your project relies on the trusted input of Expert Judgment to understand both what is appropriate and what makes sense to <i>fit</i> the needs of a project.</p>";
memoString += "<p>In a broad manner, the tools and processes we use are already tailored to address the projects we face. Tailoring allows you to recognize and act – rather than react – when CRM add-ons don’t demand that you convene the Physician Advisory Committee each week as you might for an Inpatient install. ";
memoString += "It doesn’t make sense to burn time and money (and goodwill) by forcing requirements and processes into a project for zero additional benefit or control.<br />";
memoString += "Tailoring is not to shortcut less enjoyable necessities like Progress Reports or Testing, but to enable good project management practices like resource custodianship and risk accommodation.</p>";

memoString += "<p>You only need a bulldozer to build really, really big sandcastles.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
