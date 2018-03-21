//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Sometimes I think my avoidance of blowback hairstyles is a reflection of my own hair poverty. But then I realize, no.. it’s <a href=\"./assets/img/memoImages/dm55_jbieber.jpg\" target=\"_blank\">Justin Bieber</a>.</span></p><br />";

memoString += "<p><i>Feedback is information intended to help others learn. </i><span id=\"vocab\">Blowback</span><i> is information used to wound. If someone has let you down or performed poorly, and you’re feeling resentful or angry – deal with your own emotions before attempting to engage in a dialogue.</i><br />";
memoString += "<small><small><span class=\"article-info\">Grenny, Joseph. \"<a href=\"https://hbr.org/2015/08/the-key-to-giving-and-receiving-negative-feedback\" target=\"_blank\">The Key to Giving and Receiving Negative Feedback</a>.\" <i>Harvard Business Review</i>. Aug 2015. Web.</span></small></small></p>";

memoString += "<p>The purpose of feedback is to convey truth. In that truth, feedback – good and bad – make both the giver and the receiver vulnerable.</p>";

memoString += "<p>Giving feedback shares insight into how you view and interact with the world by communicating a personal experience in an intimate setting. Receiving feedback paints a reality external to your own that expands, and perhaps challenges, your view of self in how others perceive you and your work.</p>";

memoString += "<p>It can be difficult to give feedback, and it can be difficult to receive feedback. For that reason feedback should be shared when those involved feel safe with the process and the honesty.</p>";

memoString += "<p>When you share with the intent to wound (i.e. when blowback occurs) it is a selfish act taken in retribution that results in damage.<br />";
memoString += "Damage to the credibility of the giver and damage to the trust people hold in the feedback process.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
