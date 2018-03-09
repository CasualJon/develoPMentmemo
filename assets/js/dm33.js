//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">I’m sure you’ve known that person with plenty of book smarts, but they just can’t seem to work in a team?</span></p><br />";

memoString += "<p><span id=\"vocab\">Emotional Intelligence</span><i> is the capability to identify, assess, and manage the personal emotions of oneself and other people, as well as the collective emotions of groups of people.</i></p>";

memoString += "<p>We typically overlook self-control when considering Emotional Intelligence. Introspection is often the last place we turn when we look to understand group dynamics. When I inspect my impressions and thoughts on interaction with others, I find that I’m disappointed when I allow myself to become distracted when conversing with others.</p>";

memoString += "<p><i>No one wants to be ignored.</i><br />The simplest, and often most effective, way to validate the contributions of others is to listen to what they have to say; to show that you value them as an individual, their ideas, and their contributions to the team. Validation allows individuals within the team setting to act – in many cases – without fear.</p>";

memoString += "<p>No one is perfect. We can all better employ active listening skills.<br />When you have a chance, here are some resources you can take a pass through to refresh yourself on Effective Listening.</p>";

memoString += "<ul><li><a href=\"http://www.forbes.com/sites/womensmedia/2012/11/09/10-steps-to-effective-listening/\" target=\"_blank\">Forbes.com: 10 Steps to Effective Listening</a></li>";
memoString += "<li><a href=\"http://www.ted.com/talks/julian_treasure_5_ways_to_listen_better\" target=\"_blank\">Julian Treasure: 5 Ways to Listen Better</a></li>";
memoString += "<li><a href=\"http://www.wright.edu/~scott.williams/skills/listening.htm\" target=\"_blank\">Wright State University, Raj Soin College of Business: Overview of Effective Listening</a></li></ul>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
