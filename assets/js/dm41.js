//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Proud Mary sailed the Styx with Charon at the helm. I know this because how else would <a href=\"./assets/img/memoImages/dm41_TT_madmax.jpg\" target=\"_blank\">Tina Turner end up running the Thunderdome</a> in a post-apocalyptic dystopia.<br /><i>Two men enter, one man leaves.</i></span></p><br />";

memoString += "<p>I don’t believe Emmerson was correct when he said, \"In failing circumstances, no one can be relied on to keep their integrity.\"</p>";

memoString += "<p>I believe high functioning teams are able to avoid catastrophic project failures exactly because they will remain collaboratively focused on a goal when under high tension or trying circumstances.</p>";

memoString += "<p>If the credo guiding your work ethic is individualistic in an \"every person for themselves\" manner, so take all the credit and place all the blame... your string of past successes will be small.<br />";
memoString += "In fact, most of the people you work with will probably dislike you.</p>";

memoString += "<p>The tough thing is that, sometimes, people within a team act in this very way without actively trying. I’ve been thrown under the bus before, and I’m guessing that it's very likely that you have, too. Being blamed for a decision outside of your own control or put on the spot last minute sets a caustic atmosphere.</p>";

memoString += "<p>And, unfortunately, I’ve been guilty of setting the wrong tone... I’ve tried to shoot the messenger before just as I’ve criticized poor results rather than using the data to improve outcomes. Projects are stressful – there will always be a deadline, there will always be challenges, but there is no excuse.</p>";

memoString += "<p>One of the things I can do better is to pause a kneejerk reaction, recognize my goals and those of the team, and make sure I’m working with people in a way that will help us both get the most from each other.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
