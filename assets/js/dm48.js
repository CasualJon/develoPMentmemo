//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">I have trouble remaining in one position when I eat a bowl of cereal... <a href=\"https://www.youtube.com/watch?v=lisFbvyheqo&t=1m21s\" target=\"_blank\">It takes me back to the glory days of Saturday morning cartoons</a>, and I fidget with excitement.</span></p><br />";

memoString += "<p><i>The </i><span id=\"vocab\">Serial Position Effect</span><i> (also commonly known as Primary and Recency Effects) is the tendency of a person to recall the first and last items in a series best, and the middle items worst.</i></p>";

memoString += "<p>When a concept – a word in a list or a topic in a meeting – is presented first, cognitive bias results in better recall of this <i>primary</i> information.<br />";
memoString += "When a concept is presented last, or most <i>recently</i>, this information is also better recalled than data in the middle.</p>";

memoString += "<p>I remember clearly my first few minutes of Kindergarten.<br />";
memoString += "<span style=\"opacity: 0.3;\">I’ve forgotten most of the details in the middle.</span><br />";
memoString += "I remember clearly my college graduation.<br />";
memoString += "That’s just the way memory and the mind work.</p>";

memoString += "<p>In fcat, I blveiee you arladey urendnatsd the pniot… Our minds are geared to focus on the first and last, and really just skim the middle.</p>";

memoString += "<p>Because of Primary and Recency Effects, positioning can also set tone... For example, what do you think of Adam when I say:<br />";
memoString += "<i>Adam is generous, peculiar, sarcastic, critical, considerate</i><br />";
memoString += "- <b>vs</b> -<br />";
memoString += "<i>Adam is critical, sarcastic, considerate, generous, peculiar</i></p>";

memoString += "<p>When you have important points to make, don’t risk them becoming lost in background noise.</p>";

memoString += "Whether building a list of evidence to support an argument, constructing a meeting agenda, preparing a presentation, or writing a status report; make sure you consider how you’re ordering your communications.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
