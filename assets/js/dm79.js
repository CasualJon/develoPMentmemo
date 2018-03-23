//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">I couldn't count the number of times I've pulled someone into a conversation to show them exactly what I'm seeing, exactly what's causing a problem... only to have it work just fine and realize I was doing it wrong the whole time. <a href=\"http://awkwardfamilyphotos.com/\" target=\"_blank\">Awkward.</a></span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">60</span>:<i> Sometimes the best thing to do is nothing. It is also occasionally the best help you can give. Just listening is all that is needed on many occasions. You may be the boss, but if you constantly have to solve someone's problems, you are working for him.</i></p>";

memoString += "<p>Sometimes verbalizing a problem organizes swirling thoughts.<br />";
memoString += "Sometimes people just need to get concerns off of their mind.</p>";

memoString += "<p>It's important that the team feels safe coming to you with problems, and that you take pause to consider what help is sought before offering the wrong sort. I'd imagine Steph Curry mentions it when he faces a tough defense, but I doubt that Steve Kerr gives him step-by-step instructions on what to do about it. And, in the long-run, we learn more from things we're able to figure out for ourselves.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
