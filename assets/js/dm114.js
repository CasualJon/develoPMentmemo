//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">\"No individual is a success who hurts the team and no individual is a failure who helps it.\"</span><br />";
memoString += "<small><span class=\"article-info\">Steve McConnell</span></small></p>";

memoString += "<p>Having recently recounted (recycled?) a number of the \"NASA's A Project Manger's 100 Lessons Learned,\" the genesis of the deveoPMent memo, it reminded me of a corollary cannon similarly from NASA...</p>";

memoString += "<p>The NASA SEL (Software Engineering Laboratory) <a href=\"https://books.google.com/books?id=Hkt3BQAAQBAJ&pg=PA254&lpg=PA254&dq=steve+mcconnell+nasa+sel+do%27s+don%27ts+project+success&source=bl&ots=6ApqRhH_fj&sig=dH3IYFtktlXwysATaJKbadYOSSo&hl=en&sa=X&ved=0ahUKEwifzt7A4ofaAhUCHGMKHf2_DPgQ6AEILDAB#v=onepage&q=steve%20mcconnell%20nasa%20sel%20do's%20don'ts%20project%20success&f=false\" target=\"_blank\">Dos and Don’ts for Software Success</a>.<br />";
memoString += "While these Dos and Don'ts target software development, projects – as a structuring of work – share a common foundation regardless of product, service, or result they produce. And, if their traits are shared, so too are some of their key requirements</p>";

memoString += "<p>The is to Steve McConnell's <u>Software Project Survival Guide</u> in Google Books where Steve expands upon some of the distilled points, and I encourage you to take the 7 minutes: a refresher never hurts!</p>";

memoString += "<ul><b>NASA SEL's Dos for Software Success:</b><br />";
memoString += "<li>Create and follow a Software Development Plan</li>";
memoString += "<li>Empower project personnel</li>";
memoString += "<li>Minimize the bureaucracy</li>";
memoString += "<li>Define the requirements baseline and manage changes to it</li>";
memoString += "<li>Take periodic snapshots of project health and progress, and re-plan when necessary</li>";
memoString += "<li>Re-estimate system size, effort, and schedules periodically</li>";
memoString += "<li>Define and manage phase transitions</li>";
memoString += "<li>Foster a team spirit</li>";
memoString += "<li>Start the project with a small senior staff</li></ul>";

memoString += "<ul><b>NASA SEL's Don'ts for Software Success:</b><br />";
memoString += "<li>Don't let team members work in an unsystematic way</li>";
memoString += "<li>Don't set unreasonable goals</li>";
memoString += "<li>Don't implement changes without assessing their impacts and obtaining approval of the change board</li>";
memoString += "<li>Don't \"gold-plate\"</li>";
memoString += "<li>Don't overstaff, especially early in the project</li>";
memoString += "<li>Don't assume that a schedule slip in the middle of a phase will be made up later</li>";
memoString += "<li>Don't relax standards in order to cuts costs or shorten a schedule</li>";
memoString += "<li>Don't assume that a large amount of documentation ensures success</li></ul>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
