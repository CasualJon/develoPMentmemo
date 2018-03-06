//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Last time, we explored how listeners make judgments about the likeability of a speaker based on the vocal characteristics of an introduction. Today continues that, and identifies inferences listeners make about a speaker’s power based on vocal cues.</span></p><br />";

memoString += "<p>Sei Jen Ko of San Diego University, and coauthors Melody Sadler and Adam Galinsky, recently published a paper in the journal <i>Psychological Science</i>, <a href=\"http://journals.sagepub.com/doi/abs/10.1177/0956797614553009\" target=\"_blank\">\"The Sound of Power: Conveying and Detecting Hierarchical Rank Through Voice\"</a> to describe their experiments investigating the effect vocal acoustics have on perceived hierarchical relationships of power.</p>";

memoString += "<p>While message content was not judged during the study, Ko shows that impressions are formed upon the delivery of your communication through acoustic queues and independent of content.</p>";

memoString += "<p>Voices that listeners identify as a person in the high-rank condition are higher in pitch and loudness variability but lower in pitch variability when compared with lower-rank individuals. So, emphasis by those with power is made through slightly more volume, not by going up or down in pitch.</p>";

memoString += "<p>What’s more, when volunteers were assigned high-power roles, their voices tended to go up in pitch, become more monotone (less sing-song), and grow more variable in loudness than that of those volunteers assigned low-power roles. So, these changes will naturally occur in speakers carrying authority or special knowledge <small><small>(remember the five bases of power?)</small></small>.</p>";

memoString += "<p>Listeners will make accurate inferences of speakers’ power by picking up on these acoustic subtleties, so all-in-all, these vocal cues are systematically employed to demonstrate and perceive power... to decide who is in charge.</p>";

memoString += "<p>Putting it together with the memo concerning \"How Do You Say Hello,\" once you introduce yourself with enthusiasm and confidence set the groundwork of trust and likeability, maintain control of the presentation or meeting by controlling how you present the message to ensure that what you say is considered to its fullest effect.</p>";

//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
