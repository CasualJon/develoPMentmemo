//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">2 ½ years? Maybe it’s okay if I repeat some of the past hits, right, Melissa? :)<br />From the 100 Lessons Learned days:</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">57</span>:<i> Abbreviations are getting to be a pain. Each project now has a few thousand. This calls on senior management to know a couple hundred thousand. Use them sparingly in presentations unless your objective is to confuse.</i></p>";

memoString += "<p>If escalating the CFB backlog of DNB HARs caused by bad CVGs from Reg through the PR after review of your KPIs during the first PLV, a problem you tried to call attention to during the GLRA, don’t expect the CIO to know what you’re talking about.</p>";

memoString += "<p>She’s not an idiot; you’re not being clear. <big><b>Simplicity does not insult intelligence</b></big>.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
