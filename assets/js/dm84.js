//Plain JS use to contain content for develoPMent memo website
//AJAX with files or JSON would likely be better,
//but that won't work within github's gh-pages

var memoString = "";

memoString += "<p><span id=\"preamble\"><a href=\"https://www.youtube.com/watch?v=t0hK1wyrrAU\" target=\"_blank\">\"My greatest strength,\" observes John bluntly and justly, \"is that I have no weaknesses.\"</a></span><br />";
memoString += "<small><span class=\"article-info\">John Mcenroe<br />";
memoString += "<small><i>People Magazine</i>, June 25, 1979; Vol. 11, No. 25</small></span></small></p>";

memoString += "<p><i></i><span id=\"vocab\">SWOT Analysis</span><i> is the analysis of strengths, weaknesses, opportunities, and threats of an organization, project, or option.</i></p>";

memoString += "<p>SWOT is a technique of Identify Risks process (under the Project Risk Management knowledge area in the Planning process group). The purpose of SWOT is to examine the project from different perspectives to increase the breadth of identified risks, including internally generated risk.</p>";

memoString += "<p>In the specific purpose targeted by PMI, start by identifying the organization's/project's/team's/individual's strengths and weaknesses. Then identify opportunities for the organization/project/team/individual that arise from those strengths and threats arising from those weaknesses - - including the degree to which strengths offset threats and opportunities that may overcome weaknesses.</p>";

memoString += "<p>However, beyond the narrow scope of internal risk identification, SWOT can help to breakdown complex decisions or evaluate the validity of plans.</p>";

memoString += "<p>Simple decisions are rare, but relatively easy.<br />";
memoString += "Tough decisions about complex problems can be intimidating to approach... So, start by breaking things down into meaningful data that's easier to process.</p>";

memoString += "<p>What are the strengths and weaknesses of each direction (including those impacted by the decision), what doors opened or closed by the choices (opportunities and threats), and what is the interplay among each of those factors.</p>";


//Get element from front page where memo should be placed
var subPage = document.getElementById('currentMemo');
subPage.innerHTML = memoString;
