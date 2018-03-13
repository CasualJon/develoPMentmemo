//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">We have <i>top men</i> working on it right now.<br />";
memoString += "Who?!<br />";
memoString += "<a href=\"http://www.youtube.com/watch?v=FRP0MBNoieY&t=0m19s\" target=\"_blank\">Top. Men.</a></span></p><br />";

memoString += "<p><i>A</i> <span id=\"vocab\">Product</span><i> is an artifact that is produced, is quantifiable, and can be either an end item in itself or a component item. Additional words for products are material goods. See also <u>deliverable</u>.</i></p>";

memoString += "<p>Here, I’m less interested in a Product and more interested in what a product is: an Artifact.<br />";
memoString += "Artifacts are tangible by-products produced during a project – both core and ancillary to the activities of Project Management: project charter, progress reports, workflow diagrams, risk registries, project plans, issues lists, agendas, meeting notes... all artifacts.</p>";

memoString += "<p>Artifacts are the traceable history of project progress and include the documentation employed to capture sign-off or approval (of deliverables, phases, the project itself, and so on).</p>";

memoString += "It’s not for a CYA purpose that we create and store artifacts (though they can definitely come in handy should such a situation arise), but for good practice of project management: proper documentation of decisions, meetings, and needs. Project management emphasizes communication, and that takes on many forms beyond verbal.";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
