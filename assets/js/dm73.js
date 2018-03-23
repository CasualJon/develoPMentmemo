//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Treating people how you want to be treated is good, treating them how they want to be treated is more personal and, often, more productive.</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">45</span>:<i> You cannot be ignorant of the language of the area you manage or with that of areas with which you interface. Education is a must for the modern manager. There are simple courses available to learn computerese, communicationese, and all the rest of the modern ese's of the world. You can't manage if you don't understand what is being said or written.</i></p>";

memoString += "<p>Imagine the tedious and frustrating world where there is no shared lexicon between the project team and operational stakeholders. Instead of saying Physician Order, the closest you have is to say \"that thing that used to be on paper that that one lady who went to school for a long time writes in order to make the government happy when the sick person needs feel-better pills.\".</p>";

memoString += "<p>Without a shared vocabulary to advance clarity and understanding, communications would be inefficient and insufficient to foster trust.</p>";

memoString += "<p>There is evidence that <a href=\"http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0094842#s4\" target=\"_blank\">using a second language influences decision making</a> in that the mechanism of communication – being that other than your native language – results in reduced emotional reaction and thereby facilitates more utilitarian decisions. I should note that the research I reference is tenuously related: it evaluates legitimate languages, but perhaps expanding upon that the idea that learned business jargon and expressions not only unifies terminology, but separates the personal life from the professional for a similar purpose, is not out of line.</p>";

memoString += "<p>Nevertheless, be cautious, because you can certainly overdo it with the jargon.</p>"

memoString += "<blockquote>Do you need mission-critical buy-in to synergize value-adding core competencies with bleeding edge solutions to enable team empowerment through strategic partnerships? Align your communications portfolio with an enterprise innovation engine to reduce pain points by leveraging new bandwidth through asynchronous communications tools. Take the conversation offline and reach out to close the loop by circling back for a deep dive to think outside the box. At the end of the day, you need to streamline communications that don't require face time to peel back the onion and break through the clutter to move the goal post for the win-win.</blockquote>";

memoString += "<p>All that to say email me if you want something :)";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
