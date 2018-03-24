//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\"><a href=\"https://en.wikipedia.org/wiki/Charge_of_the_Light_Brigade\" target=\"_blank\">C'est magnifique, mais ce n'est pas la guerre. C'est de la folie.</a><br />";
memoString += "When specific action serves a function necessary to the outcome of a larger design, clear and unambiguous language is required. Vague orders and mistaken interpretations can cause disaster.</span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">Strategic Ambiguity</span><i> is the purposeful use of ambiguity (by an individual, organization, country, etc.) to accomplish goals by avoiding specifics in the language used to make a claim.</i></p>";

memoString += "<p>Strategic Ambiguity isn't all bad.<br />";
memoString += "Yes, the name sounds bad. \"Strategic ambiguity\" as a term implies forethought to intentionally reduce clarity in communication: it evokes the tainted concepts <i>obfuscation</i> and <i>deniability</i>.</p>";

memoString += "<p>Yes, ambiguity can be used to forward nefarious plots or hide necessary truths... but the everyday world is not singularly evil. Sometimes the way to get things done is to reign in specifics and trust your team with a vision.</p>";

memoString += "<p>From the outset, let me be clear:<br />";
memoString += "Strategic ambiguity generally involves a decision, it provides a direction without detailing the path one must take. It is not an method to hide the absence of purpose nor a professional-sounding label to mask incompleteness, inexperience, or inability.</p>";

memoString += "<p><a href=\"https://us.sagepub.com/sites/default/files/upm-binaries/13165_Chapter1.pdf\" target=\"_blank\">According to Eric M. Eisenberg in his work, \"Ambiguity as Strategy in Organizational Communication\"</a>, strategic ambiguity is essential to organizational communications because it 1) promotes unified diversity, 2) facilitates organizational change, and 3) amplifies existing source attributions and preserves privileged positions.</p>";

memoString += "<p><b>The first: Promote Unified Diversity</b><br /><small>";
memoString += "Specifics and directives draw lines in the sand... Oxford comma or no? Red Vines or Twizzlers? Chipotle or Qdoba?<br />";
memoString += "Individuals need to develop a unique sense of self, but also have a driving need to feel part of a community. That tension is often the source of creativity. If you intend to field a high-performing team of strong starters, preserve the duality and agree that commas are good, candy is great, and burritos make the perfect birthday gift.</small></p>";

memoString += "<p><b>The second: Facilitate Organizational Change</b><br /><small>";
memoString += "What is Epic's Mission Statement? Do Good, Have Fun, Work Hard, Make Money.<br />";
memoString += "Ambiguity allows for growth and interpretation. If the Mission Statement to be \"Ranked #1 in KLAS,\" what comes after climbing that hill? What happens if KLAS shuts down? The ambiguity allows for variable interpretation across a diverse body of people, needs, and situations. It communicates the goal through abstraction, and removes specifics to widen applicability.</small></p>";

memoString += "<p><b>The third: Amplification of the Attribution and Preservation of Privilege</b><br />";
memoString += "This is my least favorite purpose because it is vulnerable to misuse or exploitation.<br /><small>";
memoString += "Remember when you would ask Mom or Dad about ice cream after dinner, but all you were told was \"maybe\" or \"we'll see?\"<br />";
memoString += "If they said \"no\" but gave ice cream, or worse vice-versa, their credibility was damaged. Ice cream delivery amplified the positive attribution you associated with Mom or Dad and furthered their positional power, but its absence didn't serve as evidence of contrary behavior to a promise.<br />";
memoString += "The ambiguity of the answer intones that the decision is yet to be made, and that they are the decision maker. And, forget not that information is power.</small></p>";

memoString += "<p><small><small>We all know that \"maybe\" meant \"yes,\" whereas \"we'll see\" meant \"zero chance.\"</small></small></p>"


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
