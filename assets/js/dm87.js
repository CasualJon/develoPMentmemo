//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">I've grown accustomed to the tune she whistles night and noon.<br />";
memoString += "<a href=\"https://www.youtube.com/watch?v=d73PQOkFTFc\" target=\"_blank\">Her smiles, her frowns, her ups, her downs; they're second nature to me now.</a></span></p><br />";

memoString += "<p><i>The </i><span id=\"vocab\">Pygmalion Effect </span><i> (also known as the Rosenthal Effect) is the phenomenon whereby higher expectations lead to an increase in performance.</i></p>";

memoString += "<p>Having previously covered Stereotype Threat (one way by which lowered expectations can jeopardize performance), it's interesting to look at the other side of the relationship between expectations and reality. As the project manager working with a team, your expectations can play a role in how well the team performs. The Pygmalion effect is the result of people living up to expectations placed upon them.</p>";

memoString += "<p>Part of this can be accounted for by the fact that people will internalize the leader's or teacher's beliefs which drive those expectations, and succeed accordingly.<br />";
memoString += "That optimistic view can account for some of the increased performance, to me I see it as the carrot – the increased expectation is a carrot being chased or followed.</p>";

memoString += "<p>But, there might also be something to how people relate expectations and standards. The relationship between expectations and happiness is interesting - try Googling how happy lottery winners are compared to accident victims.<br />";
memoString += "At a fundamental level, we recognize that an increase to expectations implies that minimum acceptable standards have also increased. Perhaps people just don't want to be caught below the new minimum.</p>";

memoString += "<p>Regardless, if believing in your team can help them accomplish more, then why let them live down to reduced expectations.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
