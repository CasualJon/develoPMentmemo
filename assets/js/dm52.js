//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Volume up, gain up, face the amp... Hello, feedback.</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">Feedback</span><i> is information about reactions to a product, a person’s performance of a task, etc., used as a basis for improvement.</i></p>";
memoString += "<p style=\"text-align:center\"><img src=\"./assets/img/memoImages/dm52_feedback.png\"><br /></p>";

memoString += "<p>In general, you can provide someone with one of two types of feedback.<br />";
memoString += "Positive Feedback is given in response to correct performance whereas Negative Feedback is given in response to incorrect performance.</p>";

memoString += "<p>Studies since the 1950s have explored the effects of positive and negative feedback on learning and performance, but varied and contrasting results muddied the picture.</p>";

memoString += "<p>In May of 2015, <a href=\"http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0126412\" target=\"_blank\">four researchers (Amitay, Moore, Molloy, and Halliday) published their controlled research on the type and quantity of feedback</a> on – literally – an impossible task (differentiating three identical tones) and the effect this feedback had on performance, motivation, and learning.</p>";

memoString += "<p>Takeaways from this new research:<br />";
memoString += "<ul><li>In all cases, feedback improved performance</li>";
memoString += "<li>With a difficult task, individuals given feedback of poor performance (whether positive or negative) resulted in greater improvement</li>";
memoString += "<li>Positive Feedback has a better effect on motivation and, thus, a larger effect on learning and improvement; but only when the volume of positive feedback matches the difficulty of the task (don’t overdo it)</li></ul></p>";

memoString += "<p>Basically, when someone is learning, emphasizing the 10% of tasks done right can be more impactful to someone than only remarking upon the larger volume of things done incorrectly.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
