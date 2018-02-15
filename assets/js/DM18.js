//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">We could always do more, can always use more time... Figuring out how long a task should take can be a challenge, there are so many factors to consider, so many things can affect the outcome. So, where do we start?</span></p><br />";

memoString += "<p>A <span id=\"vocab\">Three Point Estimate</span><i> is a technique used to estimate cost or duration by applying an average of optimistic, pessimistic, and most likely estimates when there is uncertainty with the individual activity estimates.</i></p>";

memoString += "<p>One type of three-point estimate is the Program Review and Evaluation Technique (PERT).<br />";
memoString += "<small><small>There will be math. It will be easy</small></small></p>";

memoString += "<p>PERT takes your best case, worst case, and most likely scenarios and weights the average; then makes it easy to stratify the likelihood of variance from your estimate.</p>";

memoString += "<p>Imagine it’s go-live and you’re just now aware of a significant issue impacting a sizable group of (currently) very unhappy staff. The fix requires moderately complex configuration to remedy, and the director insists on a time estimate of how long it will take to deliver said fix.</p>";

memoString += "<p>Well, first thing first: <i>talk to the builders</i> for their input on optimistic, pessimistic, and the most likely estimates. When you want accurate information, talk to the people performing the work.<br />";
memoString += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(b) Best Case = 12 hours<br />";
memoString += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(m) Most Likely Case = 15 hours<br />";
memoString += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(w) Worst Case = 24 hours</p>";

memoString += "<p>The PERT estimate will have you weight (multiply) the most likely case by 4, sum it all, then divide by 6 (becasue we now have one best case, one worst case, and 4 most likely cases; or 1 + 1 + 4 = 6)<br />";
memoString += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E = (b + 4m + w) / 6<br />";
memoString += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E = (12 + 4(15) + 24) / 6<br />";
memoString += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E = (96) / 6<br />";
memoString += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E = 16<br />";
memoString += "<span id=\"preamble\"><small><small>Mind you this is for a beta distribution, not a triangular distribution... but don’t worry about that, it's not important for now.</small></small></span></p>";

memoString += "<p>OK, cool. 16 hours, got it. All done?<br />";
memoString += "Almost, fancy pants – I call you fancy pants for the chaps, because I assume you are working with horses since I must now ask you to please hold them.</p>";

memoString += "<p>The last thing about PERT: it builds in a Standard Deviation to give a window of better reliability.<br />";
memoString += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SD = (w - b) / 6<br />";
memoString += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SD = (24 - 12) / 6<br />";
memoString += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SD = (12) / 6<br />";
memoString += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SD = 2</p>";

memoString += "<p>I'm sure you all remember, so I include this only for the sake of thoroughness. Wink!<br />";
memoString += "<ul><li>You can assume with ~68% confidence that the actual time taken will fall within one Standard Deviation of your 16 hour Estimate (14-18 hours)</li>";
memoString += "<li>Two Standard Deviations will project a window of 95% confidence (12-20 hours)</li>";
memoString += "<li>Three Standard Deviations will bring you to 99.7% confidence (10-22 hours)</li></ul></p>";

//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
