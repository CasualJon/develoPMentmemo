//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\"><a href=\"https://www.youtube.com/watch?v=PgpDN-bARwc\" target=\"_blank\">Hey yo my quality control, captivates your party patrol / Your mind, body, and soul<br />";
memoString += "For whom the bell tolls, let the rhythm explode / Big, bad, and bold B-boys of old...</a></span></p><br />";

memoString += "<p>Something I notice about Quality Management: much of what project management adopts for Manage Project Quality comes from manufacturing.  In many cases, concepts are directly translatable, but others can are a shoe-horn fit at best.</p>";

memoString += "<p>In that light, it appears that many of the goals of quality improvement are aligned in reducing cognitive load: making the right thing the easy thing to do without needing to think about it. Checklists, formalized process standardization, reduction in workflow variance... all of these things are the product of critical thinking up-front so that in the thick of performing a process, you don't really need to think about it.</p>";

memoString += "<p>However, not everything can be so when much of our work is thought-based.  Nevertheless, there are formalized steps to problem solving, troubleshooting, making tough decisions and the like. These models are built upon the experience of others to incorporate the best practices and approaches. Try to remember that, because sometimes life is easier and of better quality when you're not constantly trying to re-invent the what already exists :)</p>";

memoString += "<p><b>Kaizen Approach</b><br />";
memoString += "Meaning \"continuous improvement\" in Japanese, the Kaizen Approach is a quality technique from Japan where all team members and managers constantly watch for quality improvement opportunities. Note that this shifts the emphasis from the management-centric responsibility of a few topics from last week. Yes, management can take a leadership role in motivation in the pursuit of quality, or illustrate consequences of people delivering poor quality work: but if I choose not to take pride in what I do, then I am the weak link in the chain.</p>";

memoString += "<p>A tenant of Kaizen is that you should improve the quality of the people first, and then that of the products and services.</p>";

memoString += "<p>Small incremental changes, sweeping reforms, incorporating new ideas and technology into the process are all fair game where the goal is to move the needle, however much it can be moved, toward better quality. But, to gauge the impact (hopefully improvement), Kaizen involves taking measurements. As you seek to better reduce defects by improving processes (standardization, reduction in process variation), everything is measured and room for improvement always exits. Kaizen is often seen as an umbrella term given it's literal translation whereas TQM and Six Sigma are individual examples of continuous improvement.</p>";

memoString += "<p><b>Capability Maturity Model Integration (CMMI)</b><br />";
memoString += "Apart from project management, CMMI is often used in the fields of engineering and organizational development to help assess and improve performance. CMMI models are based on five stages of development spanning a range, and relate to the <i>grade</i> of adoption in quality initiatives and processes within an organization, so measures and stages can vary depending on industry.</p>";

memoString += "<p>This applies not just to the focus of the project itself for us, but the practice of project management (and its processes) as well.</p>";

memoString += "<ol><li>No formal processes in place</li>";
memoString += "<li>Basic processes exist, but not in standardized throughout organization</li>";
memoString += "<li>Best practices are in place and are standardized through the enterprise</li>";
memoString += "<li>Best practices are in place and are standardized throughout, and they are measurable using quantifiable methods</li>";
memoString += "<li>Continuous, sustained improvements are realized</li></ol>";

memoString += "<p><b>More</b><br />";
memoString += "Quality is, naturally, a large (and important!) topic. These memos have merely scratched the surface of content, in both breadth and depth. If you're planning to take your PMP exam, we've hit many of the high points you'd want to know, but there are others.</p>";

memoString += "<p>But take note: because there is a large emphasis on benchmarking and measurement to evaluate quality, there is a deeper world of statistical analysis beneath the hood... don't be frightened by it that fact, the math is simple and (given quality management's focus on standardization) formulaic, and near plug-and-play with your data.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
