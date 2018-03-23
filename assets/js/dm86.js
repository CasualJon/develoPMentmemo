//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">For our British (and other DDMMYYYY date format) friends, happy Pi Approximation Day of 22/7. Math!</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">22</span>:<i> If you have a problem that requires the addition of people to solve, you should approach recruiting people like a cook who has under-salted, i.e., a little at a time.</i></p>";

memoString += "<p>The effort required to coordinate a group scales with the number of individuals involved. Throwing a large number of people at a problem results in a lot of overhead and expense up-front without evidence of the direct impact any one individual may have on the problem.</p>";

memoString += "<p>Specifically, keep in mind how communication pathways grow (n * (n-1)) / 2... then recall Little's Law tells us about the additional value of adding people to a system.</p>";

memoString += "<p style=\"text-align:center\"><img src=\"./assets/img/memoImages/dm86_channels.png\" width =\"300\"/></p>";

memoString += "<p>As project manager, you should be on the lookout for problems with the potential to grow. Monitoring the situation, you should recognize when something is outside of acceptable limits and take early action – including asking for help – before it's an emergency. Hence, <i>modest</i> application of additional people should be all that's required :)</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
