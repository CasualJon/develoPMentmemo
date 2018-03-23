//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Talked to someone whose HR system goes down at noon today. That system has no way to identify employees who haven’t printed their W2, so for those planning to print that document today and work through taxes last minute... Sorry about your luck.<br />";
memoString += "<a href=\"https://www.youtube.com/watch?v=JwYX52BP2Sk&t=2m13s\" target=\"_blank\">You could say bad timing, but it’s poor project management.</a></span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">54</span>:<i> All problems are solvable in time, so make sure you have enough schedule contingency - - if you don’t the next project manager that takes your place will.</i></p>";

memoString += "<p>One round of testing is not enough. You know this, and can use experience to guide customers in provisioning adequate time to complete thorough testing. That same experience can help plan the project to absorb minor schedule variances.</p>";

memoString += "<p>But, think about this at a lower level.<br />";
memoString += "It's noon Thursday and you're leaving for the airport. Your customer fires one last question at you before you reach the door: can you put a document together that will explain the details of what everyone just discussed?</p>";

memoString += "<p><i>Yes, I can do that. I'll send it out tonight.</i><br />";
memoString += "What happens if travel woes find you driving home from Chicago at midnight? You get home, it's 3am, and you just want to go to bed.</p>";

memoString += "<p>Nope, now you either finish drafting a document of dubious 3am quality or break a promise. The former is terrible for your mental health and workplace happiness; the latter is to the detriment of your dependability and reduces your overall effectiveness in the role.</p>";

memoString += "<p>What will occur if either is the case too frequently?</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
