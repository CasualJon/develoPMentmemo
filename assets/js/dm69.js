//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">3/11/16... 3+1+1+1=6.<br /><small>Obviously, this memo was originally sent March 11, 2016</small></span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">86</span>:<i> If you have someone who doesn't look, ask, and analyze, ask them to transfer.</i></p>";

memoString += "<p>In most cases, you will not have the ability to suggest alternative opportunities to individuals struggling on the project. When they struggle for want of skill, their problem is your problem as the project manager. That makes you responsible for building counterparts’ and coworkers’ problem solving skillset inventory… for short-term project work, as well as their long-run benefit.</p>";

memoString += "<ul><li><b>Problem Solving Style</b>: train and cement the tendency to respond in an appropriate way</li>";

memoString += "<li><b>Problem Solving Steps</b>: teach the ordered process of problem solving (hint – it always starts with clearly defining the problem)</li>";

memoString += "<li><b>Problem Solving Strategy</b>: push the need to be proactive – address issues before they're problems, tackle problems before they're failures, before all hell breaks loose</li></ul>";

memoString += "<p>Style, Steps, Strategy</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
