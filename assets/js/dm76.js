//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">As a project manager, when I succeed it's because of my people! When I fail, it's... because of my people?</span></p><br />";

memoString += "<p>Contracts (Episode II): Cost Reimbursable<br />";
memoString += "<small><i>A </i><span id=\"vocab\">Contract</span><i> is a mutually binding agreement that obligates the seller to provide the specified product or service or result and obligates the buyer to pay for it.</i></small></p>";

memoString += "<p>A <b>Cost-Reimbursable Contract</b> involves payment to the seller for the seller's actual (and allowable) costs, plus a fee typically representing the seller's profit. Often, these contracts will include an incentive clause where if the seller meets or exceeds select objectives (schedule, total cost, etc.), then the seller receives an incentive (or bonus) payment from the buyer. Generally, this is because a cost reimbursable contract does not itself motivate the seller to efficiently or swiftly.</p>";

memoString += "<p>For all Cost Reimbursable contracts, the allowable costs are generally specified in the contract. (Oh, you forgot to pack a belt for your trip and just had to stop by Johnson & Murphy or Michael Kors? Nope. Nice try, though.) These costs are then billed back to the buyer - - thus the seller is \"reimbursed.\"</p>";

memoString += "<p>This type of contract carries high risk for the buyer since the total costs are unknown. One risk is that as problems arise, the buyer is on the hook for the cost of correcting the problem (a benefit to the seller). However, the buyer does have a few advantages with a cost reimbursable contract. For example, you can go to town on changing scope as much as you like as long as you're willing to pay the costs. For these types of reasons, this type of contract is generally used when there is a lot of uncertainty.</p>";


memoString += "<ul><li><b>Cost Plus Award Fee (CPAF)</b>: The seller is reimbursed for all costs, but any extra payment is at the discretion of the buyer. This is the riskiest \"cost plus\" style of contract for the seller since profit is not guaranteed.</li><br />";

memoString += "<li><b>Cost Plus Fixed Fee (CPFF)</b>: The seller charges back all allowable costs to the buyer, and the contract includes a fixed fee upon completion of the work that represents the seller's profit. Here, the fee is always firm, so motivation for the seller to control costs is wanting.</li><br />";

memoString += "<li><b>Cost Plus Incentive Fee (CPIF)</b>: The buyer reimburses the seller for all allowable costs and includes an incentive fee if the seller meets certain performance criteria agreed to by both. This style of incentive fee can helps provide motivation to control total costs or meet other targets important to the buyer.</li></p>";

memoString += "<li><b>Cost Plus Percentage of Cost (CPPC)</b>: the seller is reimbursed for allowable costs plus a fee calculated as a percentage of total costs. The percentage is agreed upon beforehand, but is variable in being based on costs incurred. This is the riskiest \"cost plus\" style of contract for the buyer since the sellers profit is hinged entirely on cost... lower costs means a lower fee.</li></p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
