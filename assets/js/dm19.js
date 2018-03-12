//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Project management is an occupation full of preoccupations, and everyone’s too darn busy being too darn busy. There are reasons tasks and deliverables might falling behind, but where one task slipping might have a negligible effect to the overall project schedule, another might pose severe complications if it falls behind.</span></p><br />";

memoString += "<p>The <span id=\"vocab\">Critical Path</span><i> is the sequence of activities that represents the longest path through a project, which determines the shortest possible duration.</i></p>";

memoString += "<p>There are additional supporting concepts behind calculating the Critical Path, but ignore that for now.</p>";

memoString += "Here's the core of the concept:";
memoString += "<ol><li>sequence project activities by dependent relationships from start to finish</li>";
memoString += "<li>define time estimates for each activity</li>";
memoString += "<li>identify the longest chain of interdependent activities between your start and finish</li></ol>";

memoString += "<p> For example, imagine that your SMEs identify a need to extract and submit specific data elements to the state in a very particular manner...";
memoString += "So, you kick off a (sub)project to design, build, and test the extract and submission process to satisfy this requirement.</p>";

memoString += "<p style=\"text-align:center\"><img src=\"./assets/img/memoImages/dm19_critPath.png\" width=\"500\"><br /></p>";
//applitude.se doesn't seem to exist any longer
//memoString += "<small><small><span class=\"article-info\">Image source: <a href=\"http://www.applitude.se/images/criticalpathmethod.png\" target=\"_blank\">http://www.applitude.se/images/criticalpathmethod.png</a></span></small></small><br /><br />";

memoString += "<p>In this example, the longest sequence of project activities will take 21 days: Design > Spec > Develop > Test File > End-to-End Test.<br />";
memoString += "This sequence is your Critical Path.</p>";

memoString += "<p>If any activity on the Critical Path takes longer than allotted, you will not meet your 21 day delivery date. (So, perhaps you want to manage risk by including a buffer?)</p>";

memoString += "Missed targets are not ideal, but should it happen that the development for file transmission takes 4 days, your overall project schedule is still on track. Because the development activity sequence has enough <i>Float (a.k.a. Slack)</i> in its timeline from the Critical Path (14 days), you can still meet end-to-end testing on time.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
