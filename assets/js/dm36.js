//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">To build on the previous two weeks – completed staff work and implementing the OODA Loop – here’s an interesting mental exercise...</span></p><br />";

memoString += "<p>Just how, exactly, did Rowan deliver the message?</p>";

memoString += "<p><a href=\"http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-803-the-human-intelligence-enterprise-spring-2006/readings/hubbard1899.pdf\" target=\"_blank\">A Message To Garcia</a></p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
