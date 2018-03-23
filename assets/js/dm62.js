//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">To paraphrase Alan Lakein: <i>Time = Life</i>, so if you're wasting your time then you're wasting your life.</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">16</span>:<i> Never make excuses; instead, present plans of actions to be taken.</i></p>";

memoString += "<p>App Alerts, Yellow Flags, Red Flags, camping outside of certain offices... If something like that is involved and your mind is running through why it’s not your fault instead of what we need to do to make things right, then you need to take a breath before speaking.</p>";

memoString += "<p><b>Lakein's Law</b>: <i>Failing to Plan is Planning to Fail.</i></p>";

memoString += "<p>What’s your reaction if someone dumps a problem into your lap, but didn’t first apply any critical thinking to what should be done about it? Failing to plan is a plan leading to failure, and what’s more is that you’re wasting your time your time and that of others.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
