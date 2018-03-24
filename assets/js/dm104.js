//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">\"It's far more impressive when others discover your good qualities without your help.\"</span><br />";
memoString += "<small><span class=\"article-info\">Judith Martin</span></small><br />";
memoString += "<p><span id=\"preamble\">\"I look only to the good qualities of men.  Not being faultless myself, I won't presume to probe into the faults of others.\"</span><br />";
memoString += "<small><span class=\"article-info\">Mahatma Gandhi</span></small></p>";

memoString += "<p>Continuing the material covering Project Quality Management, we'll pick right up with the next few topics.  Just note that this is intended as an easy and digestible introduction, and there is more behind the Google curtain if interested :)</p>";

memoString += "<p><b>Quality is a Management Problem</b><br />";
memoString += "W. Edwards Deming suggest that management is responsibility for up to 85% of the cost of quality.  For example, if you are implementing software and management group decides to use outdated or inferior hardware, the quality of the user experience can suffer and the project team has little ability to control that aspect of quality.</p>";

memoString += "<p>Similarly, given that it's a management responsibility to hire and staff a team within a project, the quality of team members as an influencing factor on overall delivery quality can be traced back to management. Deming believed that workers need to be shown what acceptable quality is, and that they must be aware that quality and the constant pursuit of improvement in quality are necessary elements to an organization or project.</p>";

memoString += "<p><b>TQM (or Total Quality Management)</b> asserts that process is the problem, not people. Every person and all activities undertaken are involved with quality, so it is a constant factor throughout a project or organization.</p>";

memoString += "<p>TQM stipulates that quality must be managed into the product or service and that quality improvement must be a core competency in the way business is done rather than the one-time effort of a unique task. So, quality isn’t just the testing phase, but should be a principle behind design, development, implementation, training, and beyond.</p>";

memoString += "<p><b>Plan-Do-Check-Act Cycle</b><br />";
memoString += "Walter Shewhart is sometimes attributed credit as the \"grandfather\" of TQM (everyone wants credit!). Shewhart's efforts focused on statistical tools (such as control charts) to examine when a corrective action must be applied to a process.  In addition to creating tools to control processes he created the Plan-Do-Check-Act process: a process to manage quality into your processes.</p>";

memoString += "<p style=\"text-align:center\"><img src=\"./assets/img/memoImages/dm104_pdca_cycle.bmp\" width=\"500\" /><br />";
memoString += "<small><small><span class=\"article-info\">Image source: <a href=\"http://9001quality.com/plan-do-check-act-pcda-iso-9001/\" target=\"_blank\">http://9001quality.com/plan-do-check-act-pcda-iso-9001/</a></span></small></small></p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
