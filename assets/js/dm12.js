//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Accountability is a word I hear a lot. Its use has a certain oomph, power, and sophistication. <i>Accountability</i> feels nice to say and everyone knows what you need should you ask that <i>\"operational leadership enforce broader accountability in process compliance....\"</i></span></p><br />";

memoString += "<p>A <span id=\"vocab\">RACI Chart</span><i> is a common type of responsibility assignment matrix that uses responsible, accountable, consult, and inform statuses to define involvement of stakeholders in project activities.</i></p>";

memoString += "<p>Responsibility assignment matrices (such as RACI charts) are a simple way to clearly identify the depth of participation of project stakeholders in the completion of project activities. For unique tasks and deliverables within a RACI chart, we identify individuals by one of four roles:</p>";

memoString += "<p style=\"text-align:center\"><img src=\"./assets/img/memoImages/RACI.png\"><br />";
memoString += "<small><small><span class=\"article-info\">Image source: <a href=\"http://itsmtransition.com/2014/07/basic-raci-chart/\" target=\"_blank\">http://itsmtransition.com/2014/07/basic-raci-chart/</a></span></small></small><br /></p>";

memoString += "<p>Those responsible for completing the work answer to the one who is accountable, and for any task or decision there is only one accountable individual. ";
memoString += "Having this information laid bare and shared among the stakeholders sets authority and ownership to drive progress.</p>";

memoString += "<p>Consult and Inform are important for long-term success not because it strokes egos, but because it helps ensure that as work progresses it does so enlightened by a wider, more involved knowledge base - - maintaining both goodwill and solid change management practices.";

memoString += "<p>I’m not pushing a language lesson - - in this, I’m of the mind that words are part of our toolkit, and we should select the best tools for the job.<br />";
memoString += "If \"accountability\" produces a vision of professional acumen but \"responsibility\" results in images of teenagers doing chores, go with the what will achieve the goal.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
