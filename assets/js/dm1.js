//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Before you open a door, it’s hard to see what’s on the other side. You can call in experts with fancy tools to get a blurred image of what’s behind the door, ";
memoString += "but that’s still an estimate and you don’t really know with a certainty. For you philosophers, yes… empiricism vs. rationalism.<br />";
memoString += "But, here’s a cool secret: no one trusts you if you claim to know everything.</span></p><br />";

memoString += "<p><span id=\"vocab\">Progressive Elaboration</span> <i>is the iterative process of increasing the level of detail in a project management plan as greater amounts of information and more accurate estimates become available.</i></p>";

memoString += "<p>Progressive elaboration is not a technique to hide laziness, but the start of a plan to account for unknowns in the existing plan.<br />";
memoString += "Prototypes are not finished products for a reason, and your first pass at a detailed plan won’t really be all that detailed... it's a working prototype.</p>";

memoString += "<p>For any number of reasons, people can be afraid to admit what they do not know. Research conducted by Amanda Waterman (<a href=\"https://onlinelibrary.wiley.com/doi/abs/10.1002/acp.741\" target=\"_blank\">published in 2001</a> and later covered on <a href=\"http://freakonomics.com/2014/05/15/the-three-hardest-words-in-the-english-language-full-transcript/\" target=\"_blank\">Freakonomics Radio</a>) finds that almost 1 in 4 adults presented with unanswerable Yes/No questions will nevertheless provide an answer. For example, was I listening to music as I type this? You have no way of knowing, but some will be compelled to answer anyway.</p>";

memoString += "<p>The further away from today a plan stretches, the more uncertainty exists within that plan: unknowable variables, unimagined risks, unforeseen needs, and so on. Creating a plan too detailed, too far into the future can be wasteful of your time and effort - not to mention harmful.</p>";

memoString += "<p>Lunch with your analysts during training won't identify strengths and weaknesses, but certification tests will. If someone is struggling with users and security but great with the rule builder, the logical thing to do is to account for these competencies in your plan.</p>";

memoString += "<p>Progressive elaboration is an answer to the immediately unanswerable - - how to address the oft cited, \“we don’t know what we don’t know...\” ";

memoString += "So plan what you do know, and plan to make more specific elaborations when you learn what you didn't know before.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
