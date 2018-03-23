//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\"><a href=\"https://www.youtube.com/watch?v=6p-lDYPR2P8&t=1m7s\" target=\"_blank\">If they don’t give me proper credit, I just walk away; They can beg and they can plead, But they can’t see the light...</a></span></p><br />";

memoString += "<p>Contracts (Episode III): Time and Materials<br />";
memoString += "<small><i>A </i><span id=\"vocab\">Contract</span><i> is a mutually binding agreement that obligates the seller to provide the specified product or service or result and obligates the buyer to pay for it.</i></small></p>";

memoString += "<p><b>Time and Materials (T&M) Contracts</b> are an amalgam of Fixed Price and Cost-Reimbursable contracts.</p>";

memoString += "<p>When the cost of inputs are unknown at during project initiation and planning, T&M contracts help sellers by structuring a Cost-Reimbursable arrangement to safeguard against unexpected price increases.</p>";

memoString += "<p>In resemblance to Fixed Price agreements, however, T&M contracts generally set a unit price for time spent by the seller (your billable rate, for example). This helps control some of the cost for a buyer in situations where it's not possible to accurately estimate the size of the project, or total amount of effort necessary when requirements are likely to change over the project’s life. Additionally, T&M contracts will sometimes stipulate a maximum price to limit the amount charged to the buyer.</p>";

memoString += "<p>So, that's it for Contracts. PMI duties done for now.<br />";
memoString += "Next week, back to some of the more fun and esoteric PM topics :)</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
