//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Just as using an EMR doesn't absolve a clinician from the need to employ good clinical practice, the successful use of any tool is fundamentally governed by its applicability to the context application. I don't use a hammer to open my car door because the tool, its best use cases, and my situation don't align. It's not always so clear cut (<a href=\"https://throwflame.com/products/xl18-flamethrower/\" target=\"_blank\">which is why I'm no longer allowed light the decorative candles</a>), but it's something to keep in mind when deciding how to tackle a problem.</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">40</span>:<i> Not using modern techniques like computer systems is a great mistake, but forgetting that the computer simulates thinking is still greater.</i></p>";

memoString += "<p>Office, OneNote, Project, SharePoint, Sherlock, WebEx, Wikis, Betelgeuse, Skype for Business: tools available today provide an impressive array of features and functionality.</p>";

memoString += "<p>Tools can point out that the current pace of Clinical Content Validation is two weeks behind schedule. But, these tools probably won't tell you that our SMEs are on vacation over the holidays, so right now that two weeks is realistically four.</p>";

memoString += "<p>Do we have a contentious 51/49 split on a workflow decision? It says so in the spreadsheet, but what should be done about it? Does it merit extra effort during training and optimization to get things just right?</p>";

memoString += "<p>Did sending that note off about a potential escalation transition ownership to the recipient? (pro tip: no)</p>";

memoString += "<p>Until Skynet, tools only help us carry out a particular function... ahem... the application of critical thinking and fulfillment of professional responsibility is your specialty :)</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
