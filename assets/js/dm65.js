//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Expectations ≡ Reality</span></p><br />";

memoString += "<p><i>A </i><span id=\"vocab\">Stereotype</span><i> is a widely held but fixed and oversimplified image or idea of a particular type of person or thing.</i></p>";

memoString += "<p><i></i><span id=\"vocab\"><a href=\"https://www.youtube.com/watch?v=YoDh_gHDvkk&t=0m30s\" target=\"_blank\">Stereotype Threat</a></span><i> is a self-confirming belief that one may be evaluated based on a negative stereotype.</i></p>";

memoString += "<p>Whether you think you can or you think you can’t, you’re right. You’ve heard that one.<br />";
memoString += "It turns out that your expectations of another’s ability could hold them back.</p>";

memoString += "<p>At the least, while people may not always be able to rise to higher expectations, they can be unconsciously influenced into poorer performance through your lowered expectations.</p>";

memoString += "<blockquote>In 1997, Steven Spencer discovered that equally intelligent women performed worse on a challenging math test than did men. However, if before the test, women were first led to believe that women typically perform as well as men on the test, women's scores were similar to the scores of the men... Because of stereotype threat, students reminded of negative stereotypes before taking a test perform worse on those tests, especially if the negative stereotype is one that makes them feel academically inferior. The anxiety of confirming a negative stereotype seems to be the driving force behind stereotype threat. That anxiety causes testers to perform worse than they would have otherwise.</blockquote>";
memoString += "<p><small><small><span class=\"article-info\"><a href=\"http://study.com/academy/lesson/stereotype-threat-definition-examples-theories.html\" target=\"_blank\">http://study.com/academy/lesson/stereotype-threat-definition-examples-theories.html</a></span></small></small></p>";

memoString += "<p>What does this mean to you?<br />";
memoString += "Have you ever mentioned to a customer analyst that you should sit in on a call <i>\"just in case something comes up that needs Epic help?\"</i></p>";

memoString += "<p>Just saying that is a good way to ensure they will require your help. It draws a dividing line of Epic vs. customer and paints the assumption that Epic is better. How could you phrase it differently?</p>";

memoString += "<p>So, be aware when you set such unintended expectations; but also recognize that it can happen to you... Expectations by role, application, tenure, AC or AM, or any variety of other factors. If someone's expectation of you is low, refuse to fit the pattern. Keep to your own high standard, rise above expectations of others, and refuse to hold others back in the process.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
