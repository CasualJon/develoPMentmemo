//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">We live and work in a world of information, but for all the data we have, reality is often confusing, ambiguous, and uncertain. Never having certainty, how do we make decisions?</span></p><br />";

memoString += "<p>The <span id=\"vocab\">OODA Loop</span><i> is a decision making style modeled for a world of ambiguity and uncertainty incorporating a learning system to empirically inform, and thus refine, subsequent decisions and actions.</i></p>";

memoString += "<p>This week’s topic isn’t Project Management cannon, but it’s good information, so here goes the watered down version... sorry if it's a bit long.</p>";

memoString += "<p>In the Korean War, American Fighter Pilots were up against aircraft with superior maneuverability, but still managed to win a majority of head-to-head conflicts. While the opposing equipment had significant advantages, part of American success was that the F-86 provided a better field of vision and greater usability in some of the controls - - pilots were better able to observe the situation and take earlier action in response to immediate conditions.</p>";

memoString += "<p>Out of these experiences, John Boyd wrote <a href=\"http://www.dnipogo.org/boyd/pdf/boydaerialattack.pdf\" target-\"_blank\">\"Aerial Attack Study\"</a> in 1961 to consolidate the best aerial dog fighting tactics and strategy. Though not included in this published work, Boyd emphasized decision making as a strategy critical for success over the long-term, spending the rest of his life developing a model which has since been taught to fighter pilots and business executives throughout the world: the <b>OODA Loop.</b></p>";

memoString += "<ul><li><b>Observe</b> - gather data</li>";
memoString += "<li><b>Orient</b> - data is often imperfect, so apply predictions to seek solutions while monitoring the situation</li>";
memoString += "<li><b>Decide</b> - pick the best solution (sometimes the least flawed)</li>";
memoString += "<li><b>Act</b> - execute (sometimes a.k.a. test the hypothesis)</li>";
memoString += "<li><b>Loop</b> - outcomes observed better inform subsequent possible options and decisions: always improve</li></ul>";

memoString += "<p style=\"text-align:center\"><img src=\"./assets/img/memoImages/ooda_loop.png\"><br />";
memoString += "<small><small><span class=\"article-info\">Image source: <a href=\"https://www.seba.blog/2017/07/ooda-loop-method-for-dealing-with-uncertainty/\" target=\"_blank\">https://www.seba.blog/2017/07/ooda-loop-method-for-dealing-with-uncertainty/</a></span></small></small></p>";

memoString += "<p>Through a series of lectures, Boyd argued that our inability to properly make sense of our world – our immediate situation – represents a larger hindrance to desired outcome than information uncertainty.</p>";

memoString += "<p>When circumstances change, people will often stick with mental constructs they’re familiar with; after all, those models of how to respond got them this far... but that limits Observation and Orientation of the immediate situation to a framework that predicts what <i>should</i> be according to an outdated model in a changing environment; and failing to understand the full reality of a situation can be deadly.</p>";

memoString += "<p>Willingness to adjust based on evidence recognizes that not all situations are optimal (observation) and not all decisions are correct (outcome of action). Building a feedback loop into your decision making process provides adaptability when things do work as predicted based on your original model.</p>";

memoString += "<p style=\"text-align:center\"><img src=\"./assets/img/memoImages/ooda_2.png\" width=\"500\"><br />";
memoString += "<small><small><span class=\"article-info\">Image source: <a href=\"https://www.seba.blog/2017/07/ooda-loop-method-for-dealing-with-uncertainty/\" target=\"_blank\">https://www.seba.blog/2017/07/ooda-loop-method-for-dealing-with-uncertainty/</a></span></small></small></p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
