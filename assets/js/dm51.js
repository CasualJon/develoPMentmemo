//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Brevity. <a href=\"https://en.wikipedia.org/wiki/Polonius#Famous_lines\" target=\"_blank\">Polonius</a> had the truth of it, but not the practice of it... except at the very end.</span></p><br />";

memoString += "<p><i>A </i><span id=\"vocab\">TL;DR</span><i> goes at the beginning of a long email rather than the end.</i></p>";

memoString += "<p>To get your point across, put the soul of the matter up front. Nothing important should be buried, so if it’s important enough to say, then don’t let it be lost in a wandering explanation.</p>";

memoString += "<p>In 1657, Blaise Pascal once ended a letter by saying (roughly) <i>\"I have made this longer than usual because I have not had time to make it shorter.\"</i> Since then, other greats have expressed the sentiment.</p>";

memoString += "<p>Communication is the core of Project Management. You can take the time required to be clear, precise, and understandable. At the least, take the time to ensure that understanding your point does not waste another's time.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
