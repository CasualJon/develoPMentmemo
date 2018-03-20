//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">As a child, <a href=\"https://www.youtube.com/watch?v=nEidbkibsiE&t=0m20s\" target=\"_blank\">I claimed to like REO Speedwagon</a> simply because I liked the “Oreo Speedwagon” milkshake at TGI Fridays and didn’t catch the distinction or get the joke...</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">97</span>:<i> Talk is not cheap. The best way to understand a personnel or technical problem is to talk to the right people. Lack of talk at the right levels is deadly.</i></p>";

memoString += "<p>Ever play a game of telephone?<br />";
memoString += "Do you remember how the last person never had the right message?</p>";

memoString += "<p>As you receive a communication, you are that last person.</p>";

memoString += "<p>If you don’t have the full details or completely understand an issue, question, or risk, and you haven’t engaged the person closest to it on the ground, you are prepared only to propagate miscommunication.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
