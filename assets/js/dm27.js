//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Previously, we introduced three theories of motivation which are expected as common knowledge among project managers.<br />";
memoString += "Our big problem is that none of those chumps, those so-and-sos positing such theories as these understand that the <a href=\"http://developmentmemo.com/assets/img/memoImages/the_cake_is_a_lie.jpg\" target=\"_blank\">true secret to motivation is cake! People love cake. Mmm-mmm, cake</a>.</span></p><br />";

memoString += "<p>Now, we address three more theories of motivation commonly referenced in Project Management. However, note that this isn’t everything. You might notice we haven’t touched upon one of the oldest theories (Maslow) nor one of the newest (Pritchard and Ashwood)...</p>";

memoString += "<p>Introduced in 1957 and refined through the 60s', Douglas McGregor defined two models of worker behavior that attempt to explain how different managers deal with their teams members: Theories X and Y.</p>";

memoString += "<ul><li><b>Theory X</b><br />";
memoString += "Theory X holds that most people do not like work and will try to steer clear of it. Thus, managers believe people have little to no ambition, need constant supervision, and won't actually perform the duties of their job unless threatened. As a result, Theory X managers are like dictators and impose very rigid controls over their people. They believe people are motivated only by punishment, money, or position. <small>(Side note: see Stereotype Threat)</small></li><br />";

memoString += "<li><b>Theory Y</b><br />";
memoString += "Theory Y believes people are interested in performing their best given the right motivation and proper expectations. Here, managers provide support to their teams, are concerned about their team members, and are good listeners. Theory Y managers believe people are creative and committed to the project goals, that they like responsibility and seek it out, and that they are able to perform the functions of their positions with limited supervision. <small>(Side note: see Pygmilion Effect)</small></li><br />";

memoString += "<li><b>Theory Z</b><br />";
memoString += "Developed by William Ouchi, Theory Z came about in 1980s Japan when jobs were often for life, and is concerned with increasing employee loyalty to their organizations. Theory Z puts an emphasis on the well-being of the employees both at work and outside of work with long-term, steady employment, and results in high employee satisfaction and morale which returns increased productivity.</li></ul>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
