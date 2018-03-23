//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">In his first contract with Warner Brothers, <a href=\"https://www.youtube.com/watch?v=Rp8WL621uGM\" target=\"_blank\">Prince</a> demanded – and at the age of 18 actually received – complete creative control.</span></p><br />";

memoString += "<p><i>A </i><span id=\"vocab\">Contract</span><i> is a mutually binding agreement that obligates the seller to provide the specified product or service or result and obligates the buyer to pay for it.</i></p>";

memoString += "<p>PMI identifies three categories of contracts commonly encountered in project management: Fixed Price, Cost Reimbursable, and Time & Materials. Each type of contract has a different risk profile for the buyer vs. the seller which, among factors such as the goods or services involved and current market conditions, helps determine what type of contract is best in a given situation.</p>";

memoString += "<p>Often in a project, the processes of contracting and managing procurements is a level beyond many on the team despite the fact that contracts – many with third-parties – are common dependencies needed to complete project work.</p>";

memoString += "<p>So, let's explore! This week, the most common category: Fixed Price.<br />";
memoString += "A <b>Fixed Price Contract</b> is an agreement that sets the fee to be paid for a defined scope of work regardless of the cost or effort to deliver it. With Fixed Price, a well-defined scope is critical and scope management is paramount for both parties.</p>";

memoString += "<ul><li><b>Firm Fixed Price (FFP)</b>: The buyer and seller agree on a set price for a deliverable. The price never goes up (good for the buyer), but if the scope is not well defined the buyer could risk change orders. Floor mats extra...<br />";
memoString += "Typically, the biggest risk under this agreement is held by the seller because of unforeseen risks, such as cost increases or poor staff performance. This is the most common type of contract.</li><br />";

memoString += "<li><b>Fixed Price Incentive Fee (FPIF)</b>: The price is still fixed and never goes up no matter what costs the seller encounters, but here the contract includes a preset incentive (think bonus) for the seller if they meet defined performance criteria.<br />";
memoString += "Often, this performance-based reward is related to measures of cost, schedule, or technical criteria. It's important that terms and conditions for payment of the incentive must be specifically defined in the contract so both parties clearly understand. While the seller still bears most of the risk, the buyer does assume more risk in the form of the extra payment if than Firm Fixed Price (additionally the buyer should establish quality metrics where the incentive is based on early completion).</li><br />";

memoString += "<li><b>Fixed Price with Economic Price Adjustment (FP-EPA)</b>: This contract still sets a price for delivery, but allows for adjustments based on changes to economic conditions: cost increases or decreases (change in market value of inputs), inflation, new regulatory fees, and so forth.<br />";
memoString += "This type of contract protects the buyer and the seller from environmental factors beyond their control, and therefore the economic adjustment should be tied to an agreed upon financial index. Generally, contracts with an economic price adjustment is suited to projects spanning several years.</li></p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
