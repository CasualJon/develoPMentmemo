//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\"><i>Someone is always watching...</i><br />";
memoString += "Give that tagline a montage overdubbed by some disembodied gravelly voice, and it starts to sound creepy.</span></p><br />";

memoString += "<p><i>the </i><span id=\"vocab\"><a href=\"https://www.pmi.org/about/ethics/code\" target=\"_blank\">Project Management Institute Code of Ethics and Professional Conduct</a></span><i> guides practitioners of the profession about the basic obligation of responsibility, respect, fairness and honesty, and describes expectations that practitioners should hold for themselves and others.</i></p>";

memoString += "<p>It’s not a bad thing that someone is always watching, that’s just the way it of it.<br />";
memoString += "There are times you are aware and accepting of being eyed, such as presenting on stage or hosting an issues review meeting. But, even when you’re staying quiet or hanging back, someone notices.</p>";

memoString += "<p>Whether the intentions of those watching are to help, learn, understand, or scrutinize; people see and remember how you answer questions, deliver news, respond to emails, act in meetings, treat your colleagues, treat your waiters...</p>";

memoString += "<p>I’m not a work saint, but when I notice that I could do better, you can take it to the bank that someone else has also already taken note. Acting genuinely is generally the ticket, but on bad days it's can be tough to you remind yourself that others have them, too; so you have to put on the professional pants and get to work.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
