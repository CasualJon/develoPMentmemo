//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\"><a href=\"./assets/img/memoImages/dm82_mr_rogers.jpg\" target=\"_blank\">You're good enough. You're smart enough. You're trying hard and staying positive. I'm proud of you.</a></span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">Positive Affect</span><i> refers to the extent to which an individual subjectively experiences positive moods such as joy, interest, and alertness.</i></p>";

memoString += "<p>I came across a 2005 article from of the <i>Journal of Personality and Social Psychology</i>. It caught my eye because it explores motivation and the pursuit of goals... more specifically, it investigates how external factors can subconsciously influence our motivations and goals.</p>";

memoString += "<p>First let me be clear: I DO NOT advocate manipulation. I personally distinguish manipulation from motivation by means, methods, and purpose. That said, I understand what it is to work in a team environment. Conflicting priorities, stress standing in the way of morale, unenviable tasks outstanding...</p>";

memoString += "<p>In a highly watered-down overview with me interpreting the science talk, <a href=\"http://goallab.nl/publications/documents/Custers,%20Aarts%20(2005)%20-%20positive%20affect%20as%20implicit%20motivator.pdf\" target=\"_blank\">\"Positive Affect as Implicit Motivation: On the Nonconscious Operation of Behavioral Goals\"</a> builds upon a core motivation of self-preservation: everyone desires to maximize happiness and minimize suffering. Understand that people will pursue actions – even automatically and unconsciously – that lead to positive behavioral states (happiness).</p>";

memoString += "<p>Positive Affect shaping (for example, praise) can influence the behavioral states of others. If repeated across certain behaviors or actions, people begin to link the behavioral state produced by that praise (that warm and fuzzy good feeling) to the actions or steps which brought it - - what was done to deserve that praise.</p>";

memoString += "<p>In short, sincerely and repeatedly praise want we want more of in a way that’s meaningful to the receiver.<br />";
memoString += "Making people feel good for a job well is a worthwhile end in its own right, but it also promotes the goal and motivation to keep achieving that good feeling.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
