//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\">I tire when faced with a lazy overuse of buzzwords. Communication certainly improves when we all reference a shared dictionary, and I recognize that a subtle, targeted, and sparing use of buzz can be powerful. However, there is no synergy in a careless compounding of jargon... just banality. At times, that makes it tough to write these memos :)</span></p><br />";

memoString += "<p>A multi-application Epic install is a Program.<br />We manage individual application projects in concert to ensure stewardship of the integration our software thrives upon, but this also allows for stronger control over outcomes.</p>";

memoString += "<p>In fact, that is the goal of Program Management: orchestrate projects from a higher level in order to derive benefits greater than would be possible if the component projects were isolated. Which, technically, is...<br />";
memoString += "<span id=\"vocab\">Synergy</span><i> the creation of a whole that is greater than the simple sum of its parts.</i></p>";

memoString += "<p>A Program emphasizes aligning projects and project objectives (benefits) with an organization’s strategic goals.<br />";
memoString += "Mapping expected benefits and sequencing their delivery across the constituent projects, then reconciling this to organizational goals in support of a broader vision helps inform the conventional project cycle of <i>Design > Develop > Test > Deliver</i>.</p>";

memoString += "<p>Designing projects toward a specific goal in service of the larger strategy also provides objective criteria for success - - was the expected benefit achieved?</p>";

memoString += "<p>In the long-term, an emphasis on realizing benefits should be paired with the needed processes for knowledge transfer and effective operational transitions to ensure sustainment of benefits delivered.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
