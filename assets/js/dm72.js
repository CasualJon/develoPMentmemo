//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\"><a href=\"./assets/img/memoImages/dm72_churchill.jpg\" target=\"_blank\">If you're going through hell, keep going.</a> If you're <a href=\"./assets/img/memoImages/dm72_blazing.jpg\" target=\"_blank\">going through the desert with saddle ablaze and happen upon a jazz orchestra</a>, take a moment to appreciate <a href=\"https://www.youtube.com/watch?v=wCmcoZktZG4\" target=\"_blank\">April in Paris</a>.</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">Earned Value Management</span> (part 3 of 3)</p>";

memoString += "<p>Recap of Episode I:";
memoString += "<small><ul><li><b>Planned Value (PV)</b> is the budgeted cost of work over a period of time: what you expected to spend get you to a certain point.</li>";
memoString += "<li><b>Actual Cost (AC)</b> is the full cost incurred to complete the component of work in the measured time period... What you really paid (or charged) to to that point.</li>";
memoString += "<li><b>Earned Value (EV)</b> is the budgeted value of work completed in the time period.</li>";
memoString += "<li>Jar-Jar ruins the film, Midichlorians ruin the Force.</li></ul></p></small>";

memoString += "<p>Recap of Episode II:";
memoString += "<small><ul><li><b>Cost Variance (CV)</b> = EV – AC </li>";
memoString += "<li><b>Schedule Variance (SV)</b> = EV – PV </li>";
memoString += "<li>Yoda goes bonkers with a lightsaber.</li></ul></p></small>";

memoString += "<p>Once more, assume your budget contains $20,000 for two weeks of preliminary testing before a high-profile SME demo. By Friday of week one (where we should be 50% done), billed time is $8,500, but only 45% of content is tested.";
memoString += "<small><ul><li>PV = $10,000 (50% of $20,000)</li>";
memoString += "<li>AC = $8,500</li>";
memoString += "<li>EV = $9,000 (45% of 20,000)</li></ul></small></p>";

memoString += "<p>Cost and Schedule Variance help you identify whether the project is ahead of or behind their respective curves. But in order to compare one project to another (projects within a program for example), you can use that same data to calculate <i>efficiency indicators</i>. Rather than being a specific dollar values, efficiency indicators are ratios to normalize performance for comparison to other projects.</p>";

memoString += "<p><b>Cost Performance Index (CPI)</b> measures the cost efficiency of work delivered (EV) to what it costed the project (AC) in that period.<br />";
memoString += "&nbsp;&nbsp;&nbsp;CPI = EV / AC<br />";
memoString += "&nbsp;&nbsp;&nbsp;<font color=\"green\">CPI = $9,000 / $8,500<br />";
memoString += "&nbsp;&nbsp;&nbsp;CPI = ~1.06</font><br />";
memoString += "If CPI is >1, you're spending less than expected. <u>The Guide to the Project Management Body of Knowledge (5th Ed.)</u> identifies CPI as the most important of all Earned Value Management measures.</p>";

memoString += "<p><b>Schedule Performance Index (SPI)</b> measures the efficiency of project team performance in delivering work in the timeframe planned.<br />";
memoString += "&nbsp;&nbsp;&nbsp;SPI = EV / PV<br />";
memoString += "&nbsp;&nbsp;&nbsp;<font color=\"red\">CPI = $9,000 / $10,000<br />";
memoString += "&nbsp;&nbsp;&nbsp;CPI = 0.90</font><br />";
memoString += "SPI measures the project team's efficiency in meeting deliverables deadlines. An SPI >1 means the project is ahead of schedule; >1 and you've completed less work than expected.</p>";

memoString += "<p>For past measurement, these are great; but to forecast you’ll need more than one data point. So, when using these ratios to evaluate anticipated future cost/schedule performance, you’ll want to sum all of your PV, EV, and AC numbers...</p>"

memoString += "<p>This means you can calculate <b>Cumulative CPI</b> and <b>Cumulative SPI</b>.<br />";
memoString += "&nbsp;&nbsp;&nbsp;Cumulative CPI = Cumulative EV / Cumulative AC<br />";
memoString += "&nbsp;&nbsp;&nbsp;Cumulative SPI = Cumulative EV / Cumulative PV<br />";
memoString += "&nbsp;&nbsp;&nbsp;...duh</p>";

memoString += "<p>Therefore, if your project budget is $100,000 over 1.5 years and your Cumulative CPI is 1.06% while cumulative SPI is 0.90... You can reasonably predict that the total project cost will be $106,000 and all work can be completed in ~16 months.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
