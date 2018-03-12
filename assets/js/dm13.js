//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Citius, Altius, Fortius. Faster, Higher, Stronger... The Olympic motto.<br />";
memoString += "Melius, Citius, Vilius. Better, Faster, Cheaper... The CIO motto.</span></p><br />";

memoString += "<p><span id=\"vocab\">Cost of Quality (COQ)</span><i> is a method of determining the costs incurred to ensure quality. Prevention and appraisal costs (cost of conformance) ";
memoString += "include costs for quality planning, quality control (QC), and quality assurance to ensure compliance requirements (i.e., training, QC systems, etc.).</i></p>";

memoString += "<p><span id=\"vocab\">Failure Cost</span> <i>(cost of nonconformance) includes costs to rework products, components, or processes that are non-compliant, costs of warranty work and waste, and loss of reputation.</i></p>";

memoString += "<p>Cost of Poor Quality - - that’s the term I prefer to Cost of Nonconformance and Failure Cost. Plus it sounds better.</p>";

memoString += "<img src=\"./assets/img/memoImages/dm13_dilbertBudget.png\"><br /><br />";

memoString += "<p>Cost of Poor Quality also communicates the idea that it’s really just the opposite face of the same coin. Shortcut on Quality Controls like testing and training materials review (whether for time or expense), and you increase the risk of significant system or workflow defects. ";
memoString += "If a failure occurs, it will require more time and effort (expense) to fix post-live than had you addressed it earlier.</p>";

memoString += "<p>The size, scope, and complexity of organizations we work with places an expansive set requirements upon our software and processes. The Cost of Quality literally affords us the opportunity to validate that the outcome of project work minimizes risks and maximizes benefits.</p>"

memoString += "<p>And, as a parting aside, remember that last remark about the Cost of Poor Quality (Failure Cost)... Loss of reputation is a serious concern if failure occurs because we didn’t take prudent steps to prevent failure. People understand the difference between the unforeseen and the unplanned.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
