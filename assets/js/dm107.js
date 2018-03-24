//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">\"It's fine to celebrate success, but it's more important to heed the lessons of failure.\"</span><br />";
memoString += "<small><span class=\"article-info\">Bill Gates</span></small></p>";

memoString += "<p>Google \"failure,\" and you'll be provided with the helpful clarification that failure is a lack of success. I'm unclear if this is intended to start an ironic internet meme...</p>";

memoString += "<p>In 1995, the Standish Group published a report built upon the surveys of executives' opinions about why software projects succeed: <a href=\"https://www.projectsmart.co.uk/white-papers/chaos-report.pdf\" target=\"_blank\">the Chaos Report</a>. Mind you, 1995 was the start of the dot com bubble, and while Microsoft has put out at least 9 major releases (or more depending on how you count)  in the years since Windows 95, a few key themes affecting the success of software projects remain urgent, universal, and unchanging.</p>";

memoString += "<table><tr><td><b>Project Success Factors</b></td><td><b>% of Responses</b></td></tr><tbody>";
memoString += "<tr><td>User Involvement</td><td>15.9%</td></tr>";
memoString += "<tr><td>Executive Management Support</td><td>13.9%</td></tr>";
memoString += "<tr><td>Clear Statement of Requirements</td><td>13.0%</td></tr>";
memoString += "<tr><td>Proper Planning</td><td>9.6%</td></tr>";
memoString += "<tr><td>Realistic Expectations</td><td>8.2%</td></tr>";
memoString += "<tr><td>Smaller Project Milestones</td><td>7.7%</td></tr>";
memoString += "<tr><td>Competent Staff</td><td>7.2%</td></tr>";
memoString += "<tr><td>Ownership</td><td>5.3%</td></tr>";
memoString += "<tr><td>Clear Vision & Objectives</td><td>2.9%</td></tr>";
memoString += "<tr><td>Hard-Working, Focused Staff</td><td>2.4%</td></tr>";
memoString += "<tr><td>Other</td><td>13.0%</td></tr>";
memoString += "</tbody></table><br />";

memoString += "<p>The Chaos Report itself is only about 15 pages long, and contains a litany of interesting quotes and observations, as well as a synopsis of 4 case studies (2 failed projects and 2 successful projects).  These 4 projects are evaluated using a weighted scale of the above rank-ordered success criteria... it unsurprisingly turns out that the top reason is key: User Involvement.</p>";

memoString += "<p>I'm sure you've encountered difficulty somewhere along the line because of a breakdown with user/stakeholder engagement?<br />";
memoString += "As a passing thought, I note that each case study project demonstrated realistic expectations; however, it's not enough that users expect the right grade or quality of software. For users to adopt the software – not merely adapt or endure – they must have a deeper sense of involvement, therefrom drawing a feeling of ownership.</p>";

memoString += "From the case studies, neither failed project had user involvement... This is <b>rule #1: <u>users first</u></b>.";

memoString += "<p>While there is no magic formula to say \"if you check only these boxes your project will succeed,\" it's pretty clear that if you ignore the people who will use your system, those people will in fact ignore your system.</p>";

memoString += "<p style=\"text-align:center\"><img src=\"./assets/img/memoImages/dm107_failure.png\" /></p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
