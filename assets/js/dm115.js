//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">\"Immature artists copy, great artists steal. Knowing what and when to steal is very much a part of the designer's self-education.\"</span><br />";
memoString += "<small><span class=\"article-info\">William Faulkner</span></small></p>";

memoString += "<p>In an initial study of 860 project managers (which has since grown to over 5,000 project managers), Andy Crowe collected peer and client feedback to identify the skills and characteristics of the top 2% of PMs as ranked by others.  The full details are covered in his book, <a href=\"./alphaProjectManagers_PennState.pdf\" target=\"_blank\">Alpha Project Mangers</a> (I know, I wish it was a better title, too... just ugh), but distilled below are the top 10 traits of top-tier project managers.</p>";

memoString += "Feedback can be tough, but it's important: what you understand of your own traits and abilities might not align with the impressions held by stakeholders. In the absence of constructive or actionable feedback, figure out what gets the best where they are and steal it.</p>";

memoString += "<p>Top project managers:</p>";

memoString += "<ol><li><b>Find the joy within their work more than their counterparts.</b><br />";
memoString += "The top 2% of project managers viewed their job as a career, and engaged in job-related training more commonly.<br />";
memoString += "Love is a strong word, but on the whole top project managers agree that managing a project can be an exciting challenge, one critical to success.</li><br />";

memoString += "<li><b>Use the authority available to them naturally, and don't need to borrow power.</b><br />";
memoString += "Rarely are you told what specific authority you are given, but if you are held responsible then you assume the authority to make it happen.  You don’t need to drop names when asking something be done by Friday...  Just say it needs to be done by Friday.</li><br />";

memoString += "<li><b>Believe they have a personal impact on project success.</b><br />";
memoString += "Understand that your role on the project is critical.  Your involvement on the project is what can make it a success, and without that belief your results will achieve mediocrity at best.</li><br />";

memoString += "<li><b>Are efficient and effective communicators.</b><br />";
memoString += "Tailor communications to meet the needs of stakeholders by their preferences. Just because it's in a Progress Report doesn't mean your point gets across. Identify and define the communication needs, create a communications schedule, stick to it, and be open to communicating about how you communicate... because until the project is delivered, your deliverable is communication. Information (or its withholding) is not a weapon for use.</li><br />";

memoString += "<li><b>Allocate twice as much time to planning.</b><br />";
memoString += "<table><tr><td><i>Process Group</i></td><td><i>Top PMs</i></td><td><i>Others</i></td></tr><tbody>";
memoString += "<tr><td>Initiating</td><td>2%</td><td>1%</td></tr>";
memoString += "<tr><td>Planning</td><td>21%</td><td>11%</td></tr>";
memoString += "<tr><td>Executing</td><td>69%</td><td>82%</td></tr>";
memoString += "<tr><td>Controlling</td><td>5%</td><td>4%</td></tr>";
memoString += "<tr><td>Closing</td><td>3%</td><td>2%</td></tr>";
memoString += "</tbody></table></li><br />";

memoString += "<li><b>Think it is important for a project manager to be hands-on.</b><br />";
memoString += "Learn the domain your project exists in... If you're running a project to build a bridge, you might want to learn about bridges; if it's healthcare software, educate yourself - - everyone stops listening to you when you tell them that the stethoscope-wearing-lady should use the hamster-clicker to change the color of lights on a TV screen whilst talking to an ambulance passenger.</li><br />";

memoString += "<li><b>Use independent and fair consensus-building skills when conflict arises.</b><br />";
memoString += "Few embrace conflict, fewer still seek it out. But running from it won't fix the problem, and favoritism will jeopardize your credibility and the team's efficacy.</li><br />";

memoString += "<li><b>8)	Know the organization's strategic goals and see how their projects are of value within that strategy.</b><br />";
memoString += "Projects are undertaken to deliver a product, service, or result; but it's the benefit provided through that deliverable which is the ultimate goal. Understanding long-term strategic goals allows you to shape the project's output to achieve maximum benefit in support of the larger strategy picture.</li></ol>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
