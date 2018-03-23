//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Some might understand it, but everyone can feel it: <a href=\"https://www.youtube.com/watch?v=GXE_n2q08Yw\" target=\"_blank\">If you're in for the love of money, you're driven by the bass</a>.</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">Earned Value Management</span><i> is a methodology that combines scope, schedule, and resource measurements to assess project performance and progress.</i></p>";

memoString += "<p>Not all stakeholders understand what it means when a Progress Report identifies that we're behind in testing 800 total charges from 6 sources. Is it ok? Is it bad? How bad? When you report project performance, the standard of measure needs to be relatable.</p>";

memoString += "<p>If math is the universal language, then money is how you speak it.</p>";

memoString += "<p>Earned Value Management (EVM) is a technique to analyze project performance by comparing the work completed thus far, what the plan budgeted for that work, and what you spent in money and time to actually get here. EVM involves continuous monitoring of planned value, earned value, and actual costs to gain input for analysis that will demonstrate variance from your schedule and/or budget.</p>";

memoString += "<ul><li><b>Planned Value (PV)</b> is the budgeted cost of work required to deliver a completed activity, phase, project, etc. over a period of time: what you expected to spend get you to a certain point.</li><br />";

memoString += "<li><b>Actual Cost (AC)</b> is sum of direct and indirect costs incurred to complete the component of work in the measured time period: what you really paid (or charged) to get you to that point.</li><br />";

memoString += "<li><b>Earned Value (EV)</b> the value of work completed to-date when compared to the budget. This will sometimes be called the <i>Budgeted Cost of Work Performed</i> (BCWP because project management can't get enough acronyms).</li></ul>";

memoString += "<p>For example, assume the project now includes a Change Order for development. Altogether, the project requires 50 hours over 4 weeks, and at $200/hour your Change Order comes to a total of $10,000 (without buffer). But, your development and QA complete everything on time in only 40 hours. Hooray!</p>";

memoString += "<ul><li>Your PV is $10,000 over 4 weeks' time.</li>";
memoString += "<li>Your AC is $8,000 (because it only took 40 hours, $200 per hour * 40 hours = $8K).</li>";
memoString += "<li>Your EV is $10,000. Doesn't matter that you only spent $8K... The budgeted cost (the value you assigned to the work) was $10,000 and the project is 100% complete.</li></ul>";

memoString += "<p>Next week, the math to derive cost variance, schedule variance, and performance indices!</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
