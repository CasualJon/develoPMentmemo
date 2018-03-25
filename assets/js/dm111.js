//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">\"I am not absentminded. It is the presence of mind that makes me unaware of everything else.\"</span><br />";
memoString += "<small><span class=\"article-info\">G. K. Chesterton</span></small></p>";

memoString += "<p><i></i><span id=\"vocab\">Selective Attention</span><i> is the capacity for or process of reacting to certain stimuli selectively when several occur simultaneously.</i></p>";

memoString += "<p>Attention is a limited mental resource, and selective attention is what allows us to tune out the unimportant in order to focus on what really matters.</p>";

memoString += "<p>Ever notice how - most times - you really can't smell your own deodorant, perfume, cologne, pets, etc.?  Selective Attention is like that: it's the filtering mechanism that engages when you actively apply mental effort, allowing you – for example – to pick out one conversation among several, or overtop the background noise of your environment.</p>";

memoString += "<p>At least, this is the benefit...<br />";
memoString += "But, for the benefit that selective attention can provide, there are pitfalls you should take care to avoid.</p>";

memoString += "<p>Sometimes life throws a lot of things your way. As you keep an eye on the problem at hand and dedicate your focus to solving that issue, be sure not to lose sight of all other factors. Every so often, take a breath and remember that there are more trees to the forest, more pots on the stove, more irons in the fire...</p>";

memoString += "<p>What do I mean?  Find out in under 90 seconds.<br />";
memoString += "<a href=\"https://www.youtube.com/watch?v=vJG698U2Mvo\" target=\"_blank\">https://www.youtube.com/watch?v=vJG698U2Mvo</a></p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
