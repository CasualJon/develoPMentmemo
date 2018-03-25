//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">\"I always take Scotch whisky at night as a preventative of toothache. I have never had the toothache; and what is more, I never intend to have it.\"</span><br />";
memoString += "<small><span class=\"article-info\">Mark Twain</span></small></p>";

memoString += "<p>I try to smile when answering the phone at work. I don't achieve this 100% of the time, but still...<br />";
memoString + "As team members and coworkers, I want you to feel welcomed when you call, and to take away a positive experience when hanging up. Mood is contagious. If I'm having a bad day, I don't want others to catch it. And, if I'm having a bad day, smiling helps improve mood.";

memoString += "<p>Be social, be reliable, be active.<br/>";
memoString += "Fairly critique when it's needed (knowledge is how we improve, and wanting to help others improve shows you care). Recognize and congratulate each other for contributions and successes.</p>";

memoString += "<p>High performing teams are measured by effectiveness, and teams with high levels of trust are more effective. It turns out that positive and prosocial behavior boosts team trust.<br />:";
memoString += "If you want to be effective, steward teamship.</p>";

memoString += "<p>For more on how:<br />";
memoString += "<a href=\"http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0136874\" target=\"_blank\">Affective Balance, Team Prosocial Efficacy and Team Trust: A Multilevel Analysis of Prosocial Behavior in Small Groups</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
