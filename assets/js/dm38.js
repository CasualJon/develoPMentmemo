//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Communication is among the largest reasons that projects succeed or fail. But typing that, while communicating the idea, isn’t necessarily the best way to convey the point, is it?</span></p><br />";

memoString += "<p><span id=\"vocab\">Communication Methods</span><i> refer to how the project information is shared among stakeholders.</i></p>";

memoString += "<p>I generally see the methods of communication existing on a gradient of difficulty for the receiver to ignore/miss.</p>";

memoString += "<p><b>Interactive Communications</b> involve multi-directional communication where two or more parties need to exchange thoughts. Face-to-face meetings, phone calls, video conferences, and the like are generally employed here. If I walk into your office <small><small>[try call screening that... you know who you are]</small></small> and engage you in conversation about a plan to resolve a concern, the back-and-forth helps me know you understand and have synthesized the information.</p>";

memoString += "<p><b>Push Communications</b> are unidirectional <small><small>[no, I wont’t bring myself to make a One Direction pun]</small></small> and refer to the sending of information to specific receivers. Progress reports, weekly status reports, letters, and this memo are examples. A push communication assures that information was sent, but not that it was received, understood, appreciated, or prioritized – this is one of several reasons important information should not be first delivered by placement in the progress report. However, the receiver must actively ignore the information just as you must remove this from your inbox (or build an Outlook routing rule).</p>";

memoString += "<p><b>Pull Communications</b> are the opposite of push communications. The recipients access the information themselves via Web, shared drives, wikis, etc., but must actively seek the communication (which therefore means they can be passively ignored).</p>";

memoString += "<p>To communicate effectively, project managers must be aware of the styles, culture, relationships, and personalities of stakeholders, as well as incorporate awareness of situational context. What communication channels are open, what information needs to be delivered, and what do I need others to understand from that information?</p>";

memoString += "<p>\"What do I need others to understand?\" This is an important question for the sender to self-answer before communicating. For example, if I mention to you that testing is off track it’s a statement of fact, but what is the message I’m trying to deliver?";
memoString += "<ul><li>Go-live is at risk because we can’t recover the timeline?</li>";
memoString += "<li>Our budget in jeopardy because we need to bring additional people onsite for the next round? </li>";
memoString += "<li>Am I just outlining something to keep an eye on but things are still fine?</li></ul></p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
