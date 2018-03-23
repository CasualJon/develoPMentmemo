//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">It's going to be real hard next week to not sneak in a made-up fact for April Fool’s Day... Just sayin'</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">Earned Value Management</span> (part 2 of 3)</p>";

memoString += "<p>Remember from last week:";
memoString += "<small><ul><li><b>Planned Value (PV)</b> is the budgeted cost of work over a period of time: what you expected to spend get you to a certain point.</li>";
memoString += "<li><b>Actual Cost (AC)</b> is the full cost incurred to complete the component of work in the measured time period... What you really paid (or charged) to to that point.</li>";
memoString += "<li><b>Earned Value (EV)</b> is the budgeted value of work completed in the time period.</li></ul></p></small>";

memoString += "<p>Assume your budget contained $20,000 for two weeks of preliminary testing before a high-profile SME demo. By Friday of week one (where we should be 50% done), billed time is $8,500, but only 45% of content is tested.";
memoString += "<ul><li>PV = $10,000 (50% of $20,000)</li>";
memoString += "<li>AC = $8,500</li>";
memoString += "<li>EV = $9,000 (45% of 20,000)</li></ul></p>";

memoString += "<p><b>Cost Variance (CV)</b> is the difference between the value of work completed (EV) and what you spent to get there (AC).<br />";
memoString += "&nbsp;&nbsp;&nbsp;CV = EV - AC<br />";
memoString += "&nbsp;&nbsp;&nbsp;<font color=\"green\">CV = $9,000 - $8,500<br />";
memoString += "&nbsp;&nbsp;&nbsp;CV = $500</font><br />";
memoString += "<small><small>The easy way I like to remember this one: If you don't know the Cost Variance, then update your Curricula Vitae [CV] because you’ll soon be asked to EVAC.</small></small></p>";

memoString += "<p>Cost Variance evaluates performance against spending over a given time period. When CV is positive, you've spent less than planned to complete the work. Here, we expected to spend $9K to achieve 90% testing completion, but only required $8.5K. But, when CV is negative, then your costs are higher than budgeted and action may be required to keep this from becoming a trend.</p>";

memoString += "<p><b>Schedule Variance (SV)</b> is the difference of the value of work completed (EV) and the value planned for delivery to that point (PV).<br />";
memoString += "&nbsp;&nbsp;&nbsp;SV = EV - PV<br />";
memoString += "&nbsp;&nbsp;&nbsp;<font color=\"red\">SV = $9,000 - $10,000<br />";
memoString += "&nbsp;&nbsp;&nbsp;SV = -$1,000</font></p>";

memoString += "<p>Schedule Variance analyzes performance against delivery schedule. If your SV is positive, the value achieved is greater than where you expected to be. When SV is negative, then the work delivered is less than anticipated. Here, we expected the work to be 50% complete at the end of week one, thus having <i>earned</i> $10K of value; but at only 45% of complete, the delivered value is only $9K indicating we’re behind schedule.</p>";

memoString += "<p>Next week, performance indicies and forecasting :)</p>"


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
