//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">There are risks which, if realized, could net great benefit to your project, and others that might make life miserable for a spell. But, there can be so many risks and potential outcomes that it’s sometimes overwhelming to know where to spend project efforts in order to capture benefits and minimize setbacks.</span></p><br />";

memoString += "<p>A <span id=\"vocab\">Probability and Impact Matrix</span><i> is a grid for mapping the probability of each risk occurrence and its impact on project objectives if that risk occurs. – It’s one of the Tools and Techniques employed within the Perform Qualitative Risk Analysis process.</i></p>";

memoString += "<img src=\"./assets/img/memoImages/probAndImpactMatrix.png\"><br /><br />"

memoString += "<p>The first note, and you might have caught this above, is that there are both positive and negative risks. Risk is not inherently bad, it’s just that we'll commonly prioritize the minimization of suffering ahead of maximizing happiness. ";
memoString += "When you consider all risks present (new laws and regulations, new technologies, personality conflicts, natural disasters…), using such a tool to cross reference likelihood and severity will assist in identifying what planning is really worth the effort.</p>";

memoString += "<ul><li>Will the Surface Book 3 ship with the option of an integrated 5g modem?<br /><small>It’s likely, and the potential benefit would be huge for remote staff. So, let's keep an eye on this one and allow budget room for a pilot if it comes to be.</small></li>";
memoString += "<li>Will a meteorite strike the hospital?<br /><small>Unlikely, though they’re usually small and any resulting damage should be minimal. So, let’s not build a giant dome over the medical complex and become the joke about town.</small></li>";
memoString += "<li>Will I forget my spouse's birthday?<br /><small>Nope, already in Outlook and Google Calendar!</small></li></ul>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
