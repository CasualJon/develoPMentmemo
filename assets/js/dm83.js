//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">I've mentioned it before, but my default assumption is that everyone is working their hardest and doing their best to see the project succeed. <a href=\"https://www.youtube.com/watch?v=6FOUqQt3Kg0\" target=\"_blank\">Beginning from there establishes the respect needed for a healthy working relationship.</a></span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">93</span>:<i> Always try to negotiate your internal support at the lowest level. What you want is the support of the person doing the work, and the closer you get to them in negotiations, the better.</i></p>";

memoString += "<p>If Amy is the person who can fix a pressing issue, I shouldn’t need to call the Project Director and have her notify the customer Project Manager, who in turn passes the request on to Amy.</p>";

memoString += "<p>I should have a relationship with Amy where I can pick up the phone, tell her what I’m seeing, and ask what we can do together to get this fixed.</p>";

memoString += "<p>That doesn’t mean I leave others out of the loop or circumvent process, but I cannot be above direct involvement in solving problems. This means that as project managers we should establish and develop the relationships necessary to have honest, direct interaction with every team member.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
