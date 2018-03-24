//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\"><a href=\"./assets/img/memoImages/dm94_somee.png\" target=\"_blank\">There's no such thing as a stupid question?</a></span></p><br />";

memoString += "<p>Project managers should master the art of asking open-ended questions.</p>";

memoString += "<p>Unlike closed-ended questions (which usually call for a yes-or-no answer), open-ended questions do not limit possible responses or hint at what the \"right\" answer might be. Closed-ended questions may cause others to feel forced down our own lines of thought and make them feel disinclined (or worse, disempowered) to share their own views. By contrast, open-ended questions can:";

memoString += "<ul><li>Elicit thoughtful responses (including responses you might never have expected to hear);</li>";
memoString += "<li>Empower others to speak their own minds in their own words, with the scope that they deem appropriate; and</li>";
memoString += "<li>Convey that others' ideas and opinions are sought-after, valued, and respected.</li></ul></p>";

memoString += "<p style=\"text-align:center\"><img src=\"./assets/img/memoImages/dm94_questions.png\" width=\"500\" /></p>";

memoString += "<p>Because open-ended questions call for thoughtful answers, be prepared to pause so that others can take time to think. Resist the urge to fill silences with multiple-choice options or rambling explanations about what you mean. Let people respond in their own time, and when they do, listen with curiosity.</p>";

memoString += "<p>Side note, a leading question is not a loaded question, nor is a question loaded merely because it requires a complicated answer... A loaded question implies some fact (carrying a negative connotation) that has not been previously established.<br />";
memoString += "<i>Do your projects still always fail?</i> <small><small>(Implying your projects have always failed in the past)</small></small></p>";

memoString += "<p>Unfortunately, questions can be both leading and loaded.<br />";
memoString += "<i>Your projects still always fail, don’t they?</i></p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
