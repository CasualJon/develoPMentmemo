//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">What do <a href=\"https://www.youtube.com/watch?v=eXvBjCO19QY&t=0m15s\" target=\"_blank\">2Pac</a> and <a href=\"https://www.youtube.com/watch?v=pl3vxEudif8&t=0m53s\" target=\"_blank\">David Bowie</a> have in common? Changes.</span></p><br />";

memoString += "<p><i>Projects are often used as a means to directly or indirectly achieve objectives within an organization’s strategic plan. Projects are initiated due to internal business needs or external influences.</i></p>";

memoString += "<p>Understanding why a project is undertaken will help you guide project activities by orienting stakeholders toward the desired, ultimate objective. Something has to change, that’s the whole reason a project is undertaken. But, why does anything <i>need</i> to change?</p>";

memoString +="<p>According to the Project Management Body of Knowledge Guide (5th Ed.), most projects are undertaken to fill one, if not more, of seven needs and demands. With the breadth and capabilities of our software, and the complexity and needs of the organizations we serve, the projects we undertake are typically driven by multiple internal needs and external demands.</p>";

memoString +="<ul><li><b>Market Demand</b>: if you moved, would you want a doctor who couldn’t provide online scheduling, bill payments, results, or messaging?</li>";
memoString += "<li><b>Strategic Opportunity/Business Need</b>: do you know a customer who doesn’t want to decrease costs, increase patient satisfaction, or simplify revenue generation?</li>";
memoString += "<li><b>Social Need</b>: Patient. Safety.</li>";
memoString += "<li><b>Environmental Consideration</b>: Save paper on scripts, receipts, consents... not typically the largest driver, but sometimes these considerations save costs which ties into other drivers. Althought, there was that time a hospital was knocked off its foundation.</li>";
memoString += "<li><b>Customer Request</b>: I want a physician with Epic, certainly, but does your average patient have an informed opinion? However, what about internal customers? How many medical students learned on Epic during school and grew used to the benefits of an integrated medical record?</li>";
memoString += "<li><b>Technological Advance</b>: Wider screens, faster machines; bigger data, pop health strata; inter-operation all across the nation.</li>";
memoString += "<li><b>Legal Requirement</b>: Do you see D-10, too, or is it just me? <small><small>...ICD-10</small></small></li></ul>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
