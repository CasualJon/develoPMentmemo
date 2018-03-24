//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">Coming up on 4 years of emails! The Grade and the Quality have varied (particularly when I don't have a proofreader), and some are dry, <a href=\"https://www.youtube.com/watch?v=Wp6fiXarP5U&t=0m11s\" target=\"_blank\">but 4 years?  Wow.</a></span></p><br />";

memoString += "<p><i></i><span id=\"vocab\">Grade</span><i> is a category for products or services that are of the same type, but have differing technical characteristics.</i></p>";
memoString += "<p><i></i><span id=\"vocab\">Quality</span><i> describes how well a product or service (or characteristics of the product or service) fulfill the stated requirements.</i></p>";

memoString += "<p>In the 21st century, an apt analogy here is <i>features</i> = Grade, <i>bugs</i> = Quality.<br />";
memoString += "People almost always want all the features with zero bugs (for the right price). However, they are generally willing to forgive or accept a lower grade (fewer features) when given an appropriate expectation, though low quality (many bugs) will consistently remain unacceptable.</p>";

memoString += "<p>Regardless of grade, the product should always be of high quality.  And, I'm not talking about just R&D and QA here - - there is a reason that build and configuration is tested <i>before</i> it goes to a production environment.</p>";

memoString += "<p>So, for the next couple of memos, here are some Project Quality Management topics and theories you'll want to know :)</p>";

memoString += "<p><b>Zero Defects (or ZD)</b> \"is a management tool aimed at the reduction of defects through prevention. It is directed at motivating people to prevent mistakes by developing a constant, conscious desire to do their job right the first time.\"<br />";
memoString += "<small><small><span class=\"article-info\"><u>Zero Defects: A New Dimension in Quality Assurance</u></span></small></small></p>";

memoString += "<p>The development of ZD is credited to Philip B. Crosby, though \"do it right the first time\" has been a mainstay of parental advice for ages.  According to Crosby, costs increase when quality planning is not performed up front because rework will be required to fix the encountered defect (loss of productivity).  A bit extreme, Zero Defects eventually transitioned from a quality program to a goal or ideal in later use, particularly since in software and service delivery, requirements can become flexible; but in original intent, Crosby identified four Absolutes of Quality Management:";

memoString += "<ol><li>Quality is conformance to requirements</li>";
memoString += "<li>Defect prevention is preferable to quality inspection and correction</li>";
memoString += "<li>Zero Defects is the quality standard</li>";
memoString += "<li>Quality is measured in monetary terms (the Price of Noncomformance)</li></ol>";

memoString += "<p><b>Fitness for Use</b> defines quality in terms of design, conformance, availability, safety, and acceptance - - it more closely incorporates the viewpoint of the customer. That is, are customer and stakeholder expectations met or exceeded?</P>";

memoString += "<p>Developed by Joseph M. Juran, who coincidentally posited that there are grades of quality, focused quality more on a consumer's interpretation of quality and whether it meets their needs and expectations.  Rather than a distributed or worker-based initiative to improve quality, much of fitness for use is a top down approach in managing production of a product customers will see as quality rather than the quality of any individual piece of output.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
