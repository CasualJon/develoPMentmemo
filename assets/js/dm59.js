//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">I very much like to do, but I don’t much care for singing my own praises. Sometimes that can be problematic.</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">Graham's Law</span>:<i> If they know nothing of what you are doing, they suspect you are doing nothing.</i></p>";

memoString += "<p>Sometimes it won’t matter how much you’ve busted your butt, or how clean you’ve kept your nose... If you constantly keep your head down, people will think you’re trying to hide it in the sand.<br />";
memoString += "Good work can’t always speak for itself, but transparency means that it shouldn’t always need to.</p>";

memoString += "<p>Transparency is the best way to maintain appropriate expectations, and managing expectations is the cornerstone of managing stakeholders.</p>"

memoString += "<p>Imagine that transparency is not a path to walk, but a multi-lane highway where information flows freely. Simply providing honest answers to questions does not establish transparency. Rather, transparency aims for open, consistent communication that obviates the question – especially those like <i>\"how’s it going?\"</i></p>";

memoString += "<p>If you’re not proactively communicating, then you’re not transparent. <br />";
memoString += "If you’re not transparent, then you’re not managing expectations.<br />";
memoString += "If you’re not managing expectations, then you’re laying groundwork for problems.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
