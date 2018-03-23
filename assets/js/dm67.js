//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\"><a href=\"./assets/img/memoImages/dm67_aladdin.jpg\" target=\"_blank\">No, Aladdin, no sane person will trust you when you wear a ridiculous feather hat whilst standing upon an impractical flying carpet with googly eyes.</a></span></p><br />";

memoString += "<p>Definitions of Trust often focus on its superficial, abstract appearance. For example, <i>a firm belief in the reliability, truth, ability, or strength of someone or something</i>.<br />";
memoString += "The definition I like best tackles the private cost at the very core of trust… Utah State <a href=\"https://www.youtube.com/watch?v=s9FBK4eprmA\" target=\"_blank\">Dr. James Davis' TEDxUSU Talk</a> identifies it this way:</p>";

memoString += "<p><i></i><span id=\"vocab\">Trust</span><i> is a willingness to be vulnerable – you choose to take risk and be vulnerable to the other party.</i></p>";

memoString += "<p><u>Trust Building</u> is among the 11 interpersonal skills required of a project manager identified in <u>The Guide to the Project Management Body of Knowledge (5th Ed.)</u>. PMI contends that improving feelings of trust and agreement among team members will raise morale, lower conflict, and increase teamwork. Sure, that sounds about right... right?</p>";

memoString += "<p>Well, yes, though it’s important to distinguish General Trust from Personal Trust.</p>";

memoString += "<p><b>General Trust</b> <i>is that superficial definition; it's built upon your expectation of another's behavior, and thus you extended \"trust\" to other parties within the boundaries of those expectations.</i><br />";
memoString += "It's this trust which facilitates cooperation when we don't know each other - - like driving a car, I trust you to stay in your lane. However, General Trust will only take you and your team so far.</p>";

memoString += "<p><b>Personal Trust</b> <i>is built on conditions beyond expectation, authority, or strategy; it's a developed commitment built from experience and interaction.</i><br />";
memoString += "In fact, Christina Acedo-Carmona and Antoni Gomila <a href=\"http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0105559\" target=\"_blank\">published research</a> demonstrating how Personal Trust increases cooperation beyond General Trust. This is why \"trust building\" is a needed skill for project managers, and why we emphasize team building (including forced family fun dinners onsite). Deeper trust fosters greater cooperation, and since a coordinated project takes a team effort, trust is key.</p>";

memoString += "<p>According to Dr. Davis, there are three drivers for Trust, so take note of these factors when trying to gain it:";

memoString += "<ul><li><b>Perceived Ability</b> (specific to the context or situation... trust me with project needs, not your Ferrari ;)</li>";

memoString += "<li><b>Perceived Benevolence</b> (do they care about me and not for their own advancement?)</li>";

memoString += "<li><b>Perceived Integrity</b> (adherence to values, particularly those shared [ethics, morals, rules, etc.])</li></ul></p>";

memoString += "<p>Finally, note that modern life can be an enemy to any trust at all.<br />";
memoString += "Katarzyna Samson and Patrycjusz Kostyszyn <a href=\"http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0127680\" target=\"_blank\">published a 2015 paper</a> showing evidence that increased cognitive load decreases trust. When people are distracted, they are less trusting and more likely to exhibit impulsive behavior.<br />";
memoString += "...and that, gang, is why we should close laptops during important meetings and conversations (fully recognizing myself as an occasional offender).</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
