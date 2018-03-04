//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Now that we have a team and a few thoughts on motivating said team, and before we get to concepts of leadership, let’s talk about power.</span><br /><img src=\"./assets/img/memoImages/homerSimposon_maxPower.jpg\" height=\"140\"></p><br />";

memoString += "<p><span id=\"vocab\">Power</span><i> is the ability to influence others, to change minds and alter the course of events or influence outcomes.</i></p>";

memoString += "<p>In 1959, John French and Bertram Raven published the article, <a href=\"http://www.communicationcache.com/uploads/1/0/8/8/10887248/the_bases_of_social_power_-_chapter_20.pdf\" target=\"_blank\">\"The Bases of Social Power,\"</a> which is generally regarded as the classic scheme for categorizing the various bases of power.</p>";

memoString += "The first three bases of power can be broadly categorized as <i>Positional Power</i> in that these are conferred to one by an organization - - they come with the position, they are the \"powers of office.\"</p>";

memoString += "<ol><li><b>Legitimate Power</b>, also known as <i>authority</i> or <i>formal power</i>, comes as a result of the influencer's position. Because one is the project manager, SVP, or CIO, they have the power to make decisions; it exists because organizations find advantages in assigning certain powers to individuals in a specific position to increase the effectiveness of that role</li>";
memoString += "<li><b>Reward Power</b> is based on one’s ability to reward another for a desired behavior, and is derived in part from legitimate power (think pay increases, recognition, promotion, status)</li>";
memoString += "<li><b>Coercive Power</b>, also known as <i>punishment</i> or <i>penalty power</i>, is the opposite of reward power. The individual is threatened with consequences if expectations are not met (including withholding desirable rewards). However, this is where you can burn bridges… Coercive power should be a last resort and used only at the exhaustion of all other alternative bases of power</li>";

memoString += "<small><small>[Remember talking about reward and punishment as motivators?]</small></small><br /><br />";
memoString += "The two remaining bases of power identified by French and Raven can be classified as <i>Personal Power</i>.<br /><br />";

memoString += "<li><b>Expert Power</b> is derived from having valued knowledge and occurs when the person being influenced believes the manager - or influencer - is knowledgeable about the subject or has special skills making them an expert. The individual goes along because they think the influencer understands the situation, knows what they’re doing, and is doing the best thing possible</li>";
memoString += "<li><b>Referent Power</b> is inferred to the influencer by their subordinates. Project team members who have deep respect and high regard for the project manager willingly go along with decisions made by that project manager because of this power (think admiration, loyalty, and emulation)</li></ol>";

memoString += "<p>Other sources of power were later hypothesized in the early 80s boom of organizational behavior studies and management theory: <i>Connection (networking) Power</i> and <i>Information Power</i>; however, we’ll not cover these now.</p>";

memoString += "<p>Worth a parting remark, it’s of note that French and Raven concluded their 1959 article with several summary hypotheses. One hypothesis posits an idea that many will recognize as others attempt to practice influence upon them, but can become a blurred line easily crossed as one wields influence themselves:<br />";
memoString += "<i>Any attempt to utilize power outside the range of power will tend to reduce the power.</i></p>";

memoString += "<p><a href=\"http://marvel.com/characters/54/spider-man\" target=\"_blank\">With great power comes great responsibility. <small><small>(ha!)</small></small></a> Responsibility to protect not only those power is used to influence or affect, but also the responsibility to protect the base of that power itself.</p>";

//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
