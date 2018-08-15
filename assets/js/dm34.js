//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">I start from the premise that everyone is busy and working their hardest, but constraints exist, so trust must be shared among team members recognizing that each is working to do the right thing in balancing priority, responsibility, and time.<br /><br />While managing my own balance, I might jeopardize another’s when I shortcut staff work.</span></p><br />";

memoString += "<p><span id=\"vocab\">Completed Staff Work</span><i> is the study of a problem and presentation of a solution in such a form that all which remains to be done is for the boss to give approval or disapproval of the completed action.</i></p>";

memoString += "<p>Though the original author is unclear, the Doctrine of Completed Staff Work has a military provenance sourced to a memorandum issued during WWII. The memorandum succinctly outlines the principles of Completed Staff Work, empowering team members to champion solutions by breaking down problems and building strategic next steps within a recommendation for approval.<br />";
memoString += "This is what developing SBAR (Situation, Background, Assessment, Recommendation) and SCOPE (Subject, Challenge, Opportunity, Possibilities, Evaluatiuon) documents facilitate. <i>Present solutions, not problems</i>.</p>";

memoString += "<p><a href=\"\" target=\"_blank\">The memo itself</a> is a quick, easy one-page read. I chose this version for its slightly modernized tone to current workplace sensibilities.</p>";

memoString += "<p>Do not let a broader message get lost in the use of formal power structures or specific examples.<br />";
memoString += "In essence, the responsibility for critical thinking should always belong to you. As a Project Manager you are an engine of change, even in a collaborative environment where all shoulder some of the burden.</p>";

memoString += "<p><i><u>I have a problem with X. What do you think I should do?</u></i><br />";
memoString += "Consistently offloading critical thinking to someone you report to doesn't build the favorable impression of you being a competent professional. And, offloading critical thinking to a team can create swirl and lead to inaction through the diffusion of responsibility.</p>";

memoString += "<p><i><u>I have a problem with X. My current plan is to do Y and Z. What feedback do you have about this plan?</u></i><br />";
memoString += "To drive change, think the issue through in advance and present a recommendation. It's the 21st century, everyone is always busy. How do you react when others merely dump a problem into your lap and expect answers? Besides, you're more likely to get your way if yo're the one constructing a well-thought plan.</p>";

memoString += "<p>Address problems with the intent of driving change by detailing the specific actions necessary to achieve the goal instead of passing critical thinking up the chain, or worse to someone who should be relying on your expertise.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
