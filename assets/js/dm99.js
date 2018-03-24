//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Smelling smoke is an important skill to stop fires before they start... <a href=\"https://www.youtube.com/watch?v=1EBfxjSFAxQ&t=1m57s\" target=\"_blank\">But, you still need to know how to put out a fire because if you see it, you own it. Sending an email doesn’t count.</a></span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">115</span>:<i> Reviews, meetings, and reality have little in common.</i></p>";

memoString += "<p>Some don't expose critical details during meetings and reviews because they're embarrassed by them, and others because they don't play by the golden rule. It stinks, but it's important to recognize this truth so that you have a realistic grasp of the project.</p>";

memoString += "<p>Even if you have full transparency, it's important to remember that reviews and meeting themselves don't necessarily reflect reality with high-performing teams.</p>";

memoString += "<p>In reviews, we spend the most time the areas requiring the most attention: problems.<br />";
memoString += "In meetings, we communicate issues, day-to-day troubles, concerns, and potential concerns.<br />";
memoString += "However, it's important to keep in mind the reality that not everything is on fire and the project is not collapsing around you. There is a large amount of very good work being done, so keep one eye on the positive so that negatives don't become the only perspective. Your sanity and the team's morale will both last longer when you're able to celebrate successes and achievements.</p>";

//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
