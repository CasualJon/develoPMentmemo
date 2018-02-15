//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><small><font color=\"black\">This is more work.  I thought it would be easier.</font></small></p><br />";

memoString += "<p>True expertise is earned the difficult way: <i>knowledge acquired and skill cultivated through efforts to learn and assimilate new information over long experience.</i><br /><br />";

memoString += "But being labeled an expert is sometimes thrust upon you.  Occasionally, that’s just the way work works.<br />";
memoString += "But, being appointed to lead grants no wisdom.  Getting introduced by the honorific brings no insight.  Offering opinion for recognition’s sake builds no understanding.<br /><br />";
memoString += "I do not say to ignore your accomplishments – you worked hard and deserve to be proud!  But, be on guard for unintended consequences of suddenly being seen as an expert.  In fact, it’s important to recognize if you are viewed as an expert because it could influence your opportunity to gain true expertise.<br /><br />";

memoString += "Gaining expertise is a process of shaping and reshaping knowledge and skill through discovery and learning, it trains you to evaluate new ideas and information by their merits.  But, suddenly being thrust into the role of expert can make you more close-minded.<br /><br />";

memoString += "In 2015, Victor Ottati and colleagues Erica Price, Chase Wilson, and Nathanael Sumaktoyo <a href=\"http://www.sciencedirect.com/science/article/pii/S0022103115001006\" target=\"_blank\">published their research into this topic in the <i>Journal of Experimental Social Psychology</i></a>. ";
memoString += "Essentially, our social norms grant experts some level to entitlement to their opinions. And believing yourself an expert without legitimate expertise could limit your intake of new opinions and ideas.<br /></p><br /><p>";

memoString += "<small><i>\"Remember that knowledge of the right kind leads to humility.  The fully ripened ear of wheat, bends downward.  It is the little blade, that holds itself up so pertly.  It is the shallow brook that makes the loudest babbling among the pebbles.\"</i><br />";
memoString += "<small> L. H. Sigourney. \“Knowledge,\” <u>The Boy’s Book</u>, p.16. 1850 (<a href=\"https://archive.org/stream/boysbook00sigo#page/16/mode/2up\" target=\"_blank\">https://archive.org/stream/boysbook00sigo#page/16/mode/2up</a>)</small></small></p>";

memoString += "<p><small>Aristotle: The more you know, the more you know you don’t know.<br />";
memoString += "Einstein: The more I learn, the more I realize how much I don’t know.</small></p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
