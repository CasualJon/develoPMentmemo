//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Hi! I’m Jon, and I'm a project manager.</span></p><br />";

memoString += "<p><i>Depending on the source, since Project Management both art and science, project managers spend about 75-90% of their time communicating. Either way, communication is generally recognized as how project managers spend a majority of their time. So, no surprise that we talk about it... again... but this is an interesting one.</i></p>";

memoString += "<p>There’s been much made of research published out of the University of Glasgow by Philip McAleer, and coauthors Alexander Todorov and Pascal Belin. Their paper, <a href=\"http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0090779\" target=\"_blank\">\"How Do You Say 'Hello'? Personality Impressions from Brief Novel Voices\"</a> investigates judgments we (listeners) make about a speaker on – <i>literally</i> – the first word out of their mouth.</p>";

memoString += "<p>The gist is that, without regard to the accuracy of the impression, subsequent interactions are colored that the instantaneous judgment made upon an introduction... And, first impressions are not formed on the content of your introduction, but on its delivery. The research demonstrates that:</p>";

memoString += "<ol><li>Personality judgments made about unfamiliar speakers are consistent across listeners (i.e. everybody takes away the same impression)</li><br />";
memoString += "<li>Two dimensions can be used to rate, and therefore summarize, the impression built:";
memoString += "<ol type=\"a\"><li>Trust/Likeability (aka Valence)</li>";
memoString += "<li>Dominance</li></ol></li>";
memoString += "<li>Males form better impressions with listeners through a combination of both dimensions; females form better impressions with listeners almost exclusively by increasing vocal acoustics associated with Trust</li></ol>";

memoString += "<p>The findings are sound enough <small><small>(ha!)</small></small> that the researchers were even able to generate desired personality impressions from artificial voices.</p>";

memoString += "<p>For what it’s worth, my interpretation of the two is Enthusiasm and Confidence.<br />";
memoString += "So, when you’re first introducing yourself, smile. It comes through in your voice, and people want you engaged and enthusiastic in alignment with their priorities. If you’re not excited to be there, they’re not excited to have you.";

//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
